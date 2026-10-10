---
title: Values
---

# Values {#header}

Refs are PeanutUI's reactive primitive. A ref holds a value, and anything reading it updates when it changes.

```luau
-- Whole module
const Ref = PeanutUI.Ref

-- Or shortcuts
const ref = PeanutUI.ref
const computed = PeanutUI.computed
const getRef = PeanutUI.getRef
const toRef = PeanutUI.toRef
const reactive = PeanutUI.reactive
const isEqual = PeanutUI.isEqual
```

## Creating a ref {#creating-ref}

```luau
const count = Ref.new(0)
```

The top-level shortcut `PeanutUI.ref` is the same function:

```luau
const ref = PeanutUI.ref
const count = ref(0)
```

## Reading and writing {#reading-and-writing}

Use `.value`:

```luau
print(count.value)   -- 0
count.value = 1
print(count.value)   -- 1
```

Numbers support `+=`:

```luau
count.value += 1
```

## Watching {#watching}

`watch` runs a callback when the value changes:

```luau
const unwatch = count.watch(function(value)
    print("Value changed:", value)
end)

count.value = 2

-- Next scheduler tick...

-- watcher prints "Value changed: 2"\
-- And then you can unwatch
-- if you unwatch in the same tick as watch, callback won't run
unwatch()
```

Returning `true` from the callback unwatches automatically:

```luau
count.watch(function(value)
    print("Once:", value)
    return true
end)
```

## Reactive tables {#reactive}

`Ref.reactive` wraps a table in a deep reactive proxy:

```luau
const state = reactive({ health = 100 })

state.health -= 10   -- triggers update
```

Read a field as a ref with `Ref.toRef`:

```luau
const health = toRef(state, "health")
print(health.value)
```

Use a **shallow** proxy when you don't want nested tables to trigger recalculations:

```luau
local state = reactive({ items = {} }, true)
```

## Computed {#computed}

`Ref.computed` derives a value from other refs:

```luau
local a = ref(2)
local b = ref(3)

local sum = computed(function()
    return a.value + b.value
end)

print(sum.value)   -- 5
a.value = 5
print(sum.value)   -- 8
```

Computed values are **lazy** — they only recompute when something reads them and a dependency changed. See [Computed](/guides/reactive/computed) for details.

## Equality shortcut {#is-equal}

`Ref.isEqual` creates a computed boolean comparing a ref to a value or another ref:

```luau
local isTouch = isEqual(State.preferredInput, "touch")
print(isTouch.value)
```

## Global state {#state}

`PeanutUI.State` holds global reactive state:

```luau
local State = PeanutUI.State

print(State.preferredInput.value)   -- "gamepad" | "desktop" | "touch"
```

## Deferred updates {#deferred-updates}

Ref changes are **deferred** — they don't hit Roblox instances immediately. Don't assume a property is updated the instant you set a ref.
