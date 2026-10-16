---
title: Values
---

# Values {#header}

Refs are PeanutUI's reactive primitive. A ref holds a value, and anything reading it updates when it changes.

```luau
PeanutUI.Ref
PeanutUI.Computed
PeanutUI.Reactive

PeanutUI.getRef
PeanutUI.toRef
PeanutUI.isRef
PeanutUI.isEqual
PeanutUI.unwrap
```

## Creating a ref {#creating-ref}

```luau
const count = PeanutUI.Ref(0)
```

`PeanutUI.Ref` is the constructor itself, so you call it directly.

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

`PeanutUI.Reactive` wraps a table in a deep reactive proxy:

```luau
const state = PeanutUI.Reactive({ health = 100 })

state.health -= 10   -- triggers update
```

Read a field as a ref with `PeanutUI.toRef`:

```luau
const health = PeanutUI.toRef(state, "health")
print(health.value)
```

Use a **shallow** proxy when you don't want nested tables to trigger recalculations:

```luau
const state = PeanutUI.Reactive({ items = {} }, true)
```

## Computed {#computed}

`PeanutUI.Computed` derives a value from other refs:

```luau
const a = PeanutUI.Ref(2)
const b = PeanutUI.Ref(3)

const sum = PeanutUI.Computed(function()
    return a.value + b.value
end)

print(sum.value)   -- 5
a.value = 5
print(sum.value)   -- 8
```

Computed values are **lazy** — they only recompute when something reads them and a dependency changed. See [Computed](/guides/reactive/computed) for details.

## Equality shortcut {#is-equal}

`PeanutUI.isEqual` creates a computed boolean comparing a ref to a value or another ref:

```luau
const isTouch = PeanutUI.isEqual(PeanutUI.preferredInput, "touch")
print(isTouch.value)
```

## Unwrapping values {#unwrap}

`PeanutUI.unwrap` accepts either a ref or a plain value and returns the plain value. If it's given a ref, it reads `.value` (tracking it reactively); otherwise it returns the value unchanged:

```luau
const a = PeanutUI.Ref(2)

print(PeanutUI.unwrap(a))     -- 2
print(PeanutUI.unwrap(5))     -- 5
```

This is useful when a value may or may not be a ref — for example a prop typed as `ValueOrRef<T>`. Reading it inside a computed tracks the ref only when one was passed:

```luau
const someValue: ValueOrRef<number> = a

const doubled = PeanutUI.Computed(function()
    return PeanutUI.unwrap(someValue) * 2
end)
```

## Global state {#state}

`PeanutUI.preferredInput` is a reactive ref holding the player's preferred input:

```luau
print(PeanutUI.preferredInput.value)   -- "gamepad" | "desktop" | "touch"
```

`PeanutUI.globalSignals` exposes the framework's global signals.

## Deferred updates {#deferred-updates}

Ref changes are **deferred** — they don't hit Roblox instances immediately. Don't assume a property is updated the instant you set a ref.
