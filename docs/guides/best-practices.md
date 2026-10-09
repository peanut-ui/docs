---
title: Best Practices
---

# Best Practices {#header}

Patterns for writing PeanutUI code that stays correct and predictable as it grows. These are recommendations for **your** code — the framework won't stop you from doing the wrong thing, but these habits save you from subtle bugs.

## One component per file {#one-per-file}

Put each component in its own module and `return` the result of `Component.defineComponent`. The module boundary becomes the component boundary, so there's no hunting for where a component starts and ends.

```luau
const PeanutUI = require(ReplicatedStorage.PeanutUI)

const Component = PeanutUI.Component
const Units = PeanutUI.Units
local Widgets = PeanutUI.Widgets

local ref = PeanutUI.ref
local computed = PeanutUI.computed

return Component.defineComponent(function(props)
    const count = ref(0)

    return Widgets.Frame {
        properties = { size = Units.Size(200, 200) },
        children = {
            Widgets.TextLabel {
                properties = {
                    text = computed(function()
                        return `Count: {count.value}`
                    end),
                },
            },
        },
    }
end)
```

## Keep module-level work out of the component {#keep-it-clean}

Animations, color palettes, and shared types don't depend on `props` or component state — define them once at module scope instead of recreating them per instance.

```luau
local backgroundColors = {
    Color3.fromHex("cafeed"),
    Color3.fromHex("#fecaca"),
}

local Spin = Animations.makeAnimation(function(obj, dt)
    obj.Rotation += 120 * dt
end, { "Rotation" })

return Component.defineComponent(function(props)
    return Widgets.Frame { ... }
end)
```

## Derive with computed, don't mirror with watchers {#derive-with-computed}

If a value is derived from another, use `Ref.computed`. A watcher that writes into a second ref is usually a computed in disguise, and it runs more work than it needs to.

```luau
-- Avoid: a watcher mirroring a value into another ref
local doubled = Ref.new(0)
count.watch(function(v)
    doubled.value = v * 2
end)

-- Prefer: derive it
local doubled = Ref.computed(function()
    return count.value * 2
end)
```

## Don't let refs escape the component {#no-ref-leaks}

Refs created inside a component are destroyed with it. Passing one outside the component's lifecycle leaves you holding a dead ref.

```luau
-- Avoid: the ref escapes the component
local leaked
local Test = Component.defineComponent(function()
    leaked = Ref.new(0)
    return Widgets.Frame {}
end)

-- Prefer: create shared refs outside, or keep them inside
local shared = Ref.new(0)
local Test = Component.defineComponent(function()
    return Widgets.TextLabel {
        properties = {
            text = Ref.computed(function()
                return shared.value
            end),
        },
    }
end)
```

## Use shallow reactive tables for lists {#use-shallow}

Deep reactive tables recalculate on nested changes. When you drive a list with `ReactiveFor`, wrap the table as shallow so only top-level changes trigger work.

```luau
local items = Ref.reactive({ "a", "b" }, true)
```

## Don't assume updates are immediate {#updates-are-deferred}

Mutations flow through the [Scheduler](/reference/scheduler) stages — they don't hit Roblox instances the instant you set a ref. If you need to run code after a change has been applied, use `Scheduler.settled` or `Scheduler.waitFor` instead of reading the instance right away.

Public API got [shortcuts](/reference/api#scheduler) for that

```luau
local settled = PeanutUI.settled
count.value += 1

settled(function()
    print("the label has been updated")
end)
```
