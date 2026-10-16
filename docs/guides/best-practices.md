---
title: Best Practices
---

# Best Practices {#header}

Patterns for writing PeanutUI code that stays correct and predictable as it grows. These are recommendations for **your** code — the framework won't stop you from doing the wrong thing, but these habits save you from subtle bugs.

## One component per file {#one-per-file}

Put each component in its own module and `return` the result of `PeanutUI.defineComponent`. The module boundary becomes the component boundary, so there's no hunting for where a component starts and ends.

```luau
return PeanutUI.defineComponent(function(props)
    const count = PeanutUI.Ref(0)

    return PeanutUI.Frame {
        size = PeanutUI.Size(200, 200),
        children = {
            PeanutUI.TextLabel {
                text = PeanutUI.Computed(function()
                    return `Count: {count.value}`
                end),
            },
        },
    }
end)
```

## Keep module-level work out of the component {#keep-it-clean}

Animations, color palettes, and shared types don't depend on `props` or component state — define them once at module scope instead of recreating them per instance.

```luau
const backgroundColors = {
    Color3.fromHex("cafeed"),
    Color3.fromHex("#fecaca"),
}

const Spin = PeanutUI.Animations.makeAnimation(function(obj, dt)
    obj.Rotation += 120 * dt
end, { "Rotation" })

return PeanutUI.defineComponent(function(props)
    return PeanutUI.Frame { ... }
end)
```

## Derive with computed, don't mirror with watchers {#derive-with-computed}

If a value is derived from another, use `PeanutUI.Computed`. A watcher that writes into a second ref is usually a computed in disguise, and it runs more work than it needs to.

```luau
-- Avoid: a watcher mirroring a value into another ref
const doubled = PeanutUI.Ref(0)
count.watch(function(v)
    doubled.value = v * 2
end)

-- Prefer: derive it
const doubled = PeanutUI.Computed(function()
    return count.value * 2
end)
```

## Don't let refs escape the component {#no-ref-leaks}

Refs created inside a component are destroyed with it. Passing one outside the component's lifecycle leaves you holding a dead ref.

```luau
-- Avoid: the ref escapes the component
local leaked
const Test = PeanutUI.defineComponent(function()
    leaked = PeanutUI.Ref(0)
    return PeanutUI.Frame {}
end)

-- Prefer: create shared refs outside, or keep them inside
const shared = PeanutUI.Ref(0)
const Test = PeanutUI.defineComponent(function()
    return PeanutUI.TextLabel {
        text = PeanutUI.Computed(function()
            return shared.value
        end),
    }
end)
```

## Use shallow reactive tables for lists {#use-shallow}

Deep reactive tables recalculate on nested changes. When you drive a list with `ReactiveFor`, wrap the table as shallow so only top-level changes trigger work.

```luau
const items = PeanutUI.Reactive({ "a", "b" }, true)
```

## Don't assume updates are immediate {#updates-are-deferred}

Mutations flow through the [Scheduler](/reference/scheduler) stages — they don't hit Roblox instances the instant you set a ref. If you need to run code after a change has been applied, use `Scheduler.settled` or `Scheduler.waitFor` instead of reading the instance right away.

Public API got [shortcuts](/reference/api#scheduler) for that

```luau
count.value += 1

PeanutUI.settled(function()
    print("the label has been updated")
end)
```
