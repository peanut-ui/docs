---
title: Thinking in PeanutUI
---

# Thinking in PeanutUI {#header}

PeanutUI is both declarative and imperative, and reactive on top of that. The two styles aren't in conflict — they're two ways of writing the same thing.

Also there's one main thing: Widgets are created immediately, while Roblox `Instance`s' creation is **lazy** and **deferred**.

## Definitions

A few terms come up constantly. Here's what they mean in PeanutUI:

- **Widget** — a live UI object. It owns a Roblox `GuiObject` (or `LayerCollector` for a Space) and exposes properties, children, events, modifiers, and animations as methods.
- **Ref** — a reactive value. Reading `.value` inside a computed or a prop subscribes to it; writing `.value` schedules dependents to update. ([Values](/guides/reactive/values), [Computed](/guides/reactive/computed))
- **Component** — a function wrapped by `Component.defineComponent` that returns a root widget and owns a lifecycle bucket for its refs.
- **Space** — the renderer root. A widget that owns a `LayerCollector` (`ScreenGui`, `BillboardGui`, or `SurfaceGui`) and puts a tree on screen.
- **Scheduler** — the staged pipeline that applies deferred reactive updates to Roblox instances.
- **Bucket** — a scope and context. Used for ownership.
- **Hooks** — signals but that are mostly used internally.

## Declarative and imperative are the same thing {#declarative-imperative}

Declaring a widget with props is exactly equivalent to creating it and calling `setProperty` for each prop. These two produce the same widget:

```luau
-- Declarative
Widgets.Frame {
    properties = {
        size = Units.Size(200, 200),
        backgroundColor = Color3.fromRGB(30, 30, 30),
    },
    children = {
        Widgets.TextLabel {
            properties = {
                text = "Hello"
            }
        }
    }
}
```

```luau
-- Imperative
local frame = Widgets.Frame()
frame.setProperty("size", Units.Size(200, 200))
frame.setProperty("backgroundColor", Color3.fromRGB(30, 30, 30))

local label = Widgets.TextLabe()
label.setProperty("text", "Hello")

frame.addChild(label)
```

The declarative form is just sugar over the imperative one. Use whichever reads better — a static tree is usually clearer declared, while a widget you build up over time is often clearer driven imperatively.

## Reactive, not manual {#reactive-not-manual}

Values that change are [Refs](/guides/reactive/values). When a ref changes, anything reading it updates:

```luau
local count = Ref.new(0)

Widgets.TextLabel {
    properties = {
        text = Ref.computed(function()
            return `Count: {count.value}`
        end)
    }
}
```

You never write "update the label" — you change `count`, and the label follows. The same works imperatively: `label.setProperty("text", someRef)` links the property to a ref after the fact.

## Deferred, not immediate {#deferred}

Reactivity is **deferred**. Mutating a ref does not immediately touch Roblox instances. Instead, changes flow through the [Scheduler](/reference/scheduler) stages:

```
defer → watchers → create → signals → redraw → settled → idle
```

This batches work so a single frame's worth of changes is applied together, rather than one instance write per mutation. It also means you can't assume a property is updated *immediately* after you set a ref — it updates on the next scheduler tick.

## Owned, not leaked {#all-is-owned}

Refs and widgets created inside a [Component](/guides/component) belong to that component's lifecycle. When the component is destroyed, its refs are cleaned up automatically. This is why you should **not** pass refs created inside a component to places outside it — they'll be destroyed with the component.

The only exception is if the Ref was passed and set as value of another Ref.
Like `ref.value = anotherRef`, when `anotherRef` is destroyed, the original Ref will just stop watching for changes.

## The mental model {#mental-model}

If you're coming from raw Roblox, here's how the pieces line up:

| Raw Roblox | PeanutUI |
|---|---|
| `Instance.new("Frame")` | `Widgets.Frame()` |
| `frame.Size = ...` | `frame.setProperty("size", ...)` or `properties = { size = ... }` |
| `frame.ChildAdded:Connect(...)` | `frame.listen("ChildAdded", ...)` or `events = { ChildAdded = ... }` |
| `frame:Destroy()` | `frame.destroy()` |

The difference is that a widget is a live object you can keep acting on, and its properties can be bound to [Refs](/guides/reactive/values) so they update themselves. Once you internalize "describe the tree, mutate refs, let the scheduler apply it," the rest of the API follows.
