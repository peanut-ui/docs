---
title: Thinking in PeanutUI
---

# Thinking in PeanutUI {#header}

PeanutUI is both declarative and imperative, and reactive on top of that. The two styles aren't in conflict — they're two ways of writing the same thing.

Also there's one main thing: Widgets are created immediately, while Roblox `Instance`s' creation is **lazy** and **deferred**.

## Definitions

A few terms come up constantly. Here's what they mean in PeanutUI:

- **Widget** — a live UI object. It owns a Roblox GUI object and exposes properties, children, events, modifiers, and animations.
- **Ref** — a reactive value. Read it and you subscribe to it; change it and everything reading it updates. ([Values](/guides/reactive/values), [Computed](/guides/reactive/computed))
- **Component** — a reusable piece of UI, made with `defineComponent`.
- **Space** — the root that puts your UI on screen.
- **Scheduler** — applies reactive updates to Roblox instances.
- **Bucket** — a scope that owns things and cleans them up.
- **Hooks** — signals but that are mostly used internally.

## Declarative and imperative are the same thing {#declarative-imperative}

Declaring a widget with props is exactly equivalent to creating it and calling `setProperty` for each prop. These two produce the same widget:

```luau
-- Declarative
PeanutUI.Frame {
    size = PeanutUI.Size(200, 200),
    backgroundColor = Color3.fromRGB(30, 30, 30),
    children = {
        PeanutUI.TextLabel {
            text = "Hello"
        }
    }
}
```

```luau
-- Imperative
const frame = PeanutUI.Frame()
frame.setProperty("size", PeanutUI.Size(200, 200))
frame.setProperty("backgroundColor", Color3.fromRGB(30, 30, 30))

const label = PeanutUI.TextLabel()
label.setProperty("text", "Hello")

frame.addChild(label)
```

The declarative form is just sugar over the imperative one. Use whichever reads better — a static tree is usually clearer declared, while a widget you build up over time is often clearer driven imperatively.

## Reactive, not manual {#reactive-not-manual}

Values that change are [Refs](/guides/reactive/values). When a ref changes, anything reading it updates:

```luau
const count = PeanutUI.Ref(0)

PeanutUI.TextLabel {
    text = PeanutUI.Computed(function()
        return `Count: {count.value}`
    end)
}
```

You never write "update the label" — you change `count`, and the label follows. The same works imperatively: `label.setProperty("text", someRef)` links the property to a ref after the fact.

## Deferred, not immediate {#deferred}

Reactivity is **deferred**. Changing a ref does not immediately touch Roblox instances — the change is applied a moment later, on the next scheduler tick. This batches a frame's worth of changes together instead of writing to instances one by one.

So don't assume a property is updated the instant you set a ref. If you need to run code after a change has been applied, use `Scheduler.settled` or `PeanutUI.settled` shortcut.

## Owned, not leaked {#all-is-owned}

Refs and widgets created inside a [Component](/guides/component) belong to that component's lifecycle. When the component is destroyed, its refs are cleaned up automatically. This is why you should **not** pass refs created inside a component to places outside it — they'll be destroyed with the component.

The only exception is if the ref was passed and set as the value of another ref. Like `ref.value = anotherRef`, when `anotherRef` is destroyed, the original ref will just stop watching for changes.

## The mental model {#mental-model}

If you're coming from raw Roblox, here's how the pieces line up:

| Raw Roblox | PeanutUI |
|---|---|
| `Instance.new("Frame")` | `PeanutUI.Frame()` |
| `frame.Size = ...` | `frame.setProperty("size", ...)` or `size = ...` in props |
| `frame.ChildAdded:Connect(...)` | `frame.listen("ChildAdded", ...)` or `ChildAdded = ...` in props |
| `frame:Destroy()` | `frame.destroy()` |

The difference is that a widget is a live object you can keep acting on, and its properties can be bound to [Refs](/guides/reactive/values) so they update themselves. Once you internalize "describe the tree, change refs, let the UI follow," the rest of the API follows.
