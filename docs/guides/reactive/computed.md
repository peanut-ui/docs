---
title: Computed
---

# Computed {#header}

A computed is a ref whose value is derived from other refs. It tracks its dependencies automatically and recomputes only when one of them changes.

```luau
local sum = Ref.computed(function()
    return a.value + b.value
end)
```

## How it works

When you read a computed's `.value`, it runs the function and records which refs were read. When any of those refs change, the computed is marked dirty. The next time something reads it, it recomputes.

```luau
local a = Ref.new(2)
local b = Ref.new(3)

local sum = Ref.computed(function()
    return a.value + b.value
end)

print(sum.value)   -- 5
a.value = 5
print(sum.value)   -- 8
```

## Lazy and deduplicated

Two properties matter:

- **Lazy** — a computed does not compute until something reads it. If nothing watches it, it does no work.
- **Deduplicated** — a computed recomputes **once per change**, no matter how many dependents read it.

This means you can use computed freely without worrying about redundant work.

## No side effects

Computed functions must be **pure**. Creating refs, watching, or mutating state inside a computed is forbidden and errors:

```luau
-- This errors
local bad = Ref.computed(function()
    local other = Ref.new(0)   -- side effect!
    return other.value
end)
```

Reactive proxies handle their own ref creation internally, so reading a proxy field inside a computed is fine.

## Using computed in widgets {#usage}

Computed values are the usual way to make a property reactive:

```luau
Widgets.TextLabel {
    properties = {
        text = Ref.computed(function()
            return `Count: {count.value}`
        end),
    }
}
```

## Equality shortcut {#equality}

For simple comparisons, `Ref.isEqual` is a shortcut:

```luau
local isTouch = Ref.isEqual(State.preferredInput, "touch")
```

It's equivalent to:

```luau
local isTouch = Ref.computed(function()
    return State.preferredInput.value == "touch"
end)
```

## When to use computed {#when-to-use}

Use computed when a value is **derived** from other reactive values. If you find yourself writing a watcher that sets another ref, a computed is usually what you want instead.
