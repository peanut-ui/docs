---
title: Watch & WatchEffect
---

# Watch & WatchEffect {#header}

`watch` and `watchEffect` are the two ways to run code in response to ref changes. They are the side-effect counterparts to [computed](/guides/reactive/computed), which is pure and lazy.

## Watch

`watch` subscribes to a single ref and calls a callback with the new value whenever it changes. It accepts both a regular ref and a [reactive table](/guides/reactive/values#reactive).

```luau
const count = PeanutUI.Ref(0)

const unwatch = PeanutUI.watch(count, function(value)
    print("Count is now " .. value)
end)

count.value = 1   -- prints "Count is now 1"
unwatch()
```

Watching a reactive table fires the callback whenever any field changes:

```luau
const state = PeanutUI.Reactive({ health = 100 })

PeanutUI.watch(state, function(value)
    print("State changed")
end)

state.health -= 10   -- prints "State changed"
```

Returning `true` from the callback automatically unwatches it:

```luau
PeanutUI.watch(count, function(value)
    print("First change only: " .. value)
    return true
end)
```

## WatchEffect

`watchEffect` runs a callback immediately and re-runs it whenever any ref read inside it changes. Dependencies are tracked automatically, so there is no explicit dependency list.

```luau
const count = PeanutUI.Ref(0)

const stop = PeanutUI.watchEffect(function()
    print("Count is " .. count.value)
end)
-- prints "Count is 0"

count.value = 1   -- prints "Count is 1"
stop()
```

## Per-run cleanups

The callback receives an `addCleanup` function for registering cleanups tied to the current run. When the effect re-runs, the previous run's cleanups are run before the callback runs again.

```luau
const count = PeanutUI.Ref(0)

const stop = PeanutUI.watchEffect(function(addCleanup)
    print("Count is " .. count.value)
    addCleanup(function()
        print("Cleaning up previous run")
    end)
end)

count.value = 1
-- prints "Cleaning up previous run" then "Count is 1"
stop()
```

## WatchEffect vs computed

They have opposite scheduling requirements, which is why they are separate primitives:

| | `Computed` | `watchEffect` |
|---|---|---|
| When it runs | on read | on change |
| Lazy | yes | no |
| Deduplicated | once per change | once per tick |
| Side effects | forbidden | the point |

A computed that is never read never runs. A `watchEffect` runs even if nothing consumes its result — that is its purpose. Use `Computed` for derived values and `watchEffect` for side effects (writing to instances, logging, imperative calls).

## Stopping

Both return a stop function. `watch` returns an unwatch function; `watchEffect` returns a stop function that unwatches all dependencies and runs the final cleanups.

```luau
const stop = PeanutUI.watchEffect(function()
    print(count.value)
end)

stop()
```

If you create a `watchEffect` inside a component, it is stopped automatically when the component is destroyed.
