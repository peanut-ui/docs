---
title: Scheduler
---

# Scheduler

The `Scheduler` is the staged pipeline that applies deferred reactive updates. When a [Ref](/guides/reactive/values) changes, the work it triggers does not run immediately — it is queued into a stage and flushed on the next tick.

```luau
local Scheduler = PeanutUI.Scheduler
```

## Stages

Each tick runs the stages in this order:

```
defer → watchers → create → signals → redraw → settled → idle
```

| Stage | When it runs | Typical work |
|---|---|---|
| `defer` | Start of the next tick. | Work that must happen before anything else. |
| `watchers` | After `defer`. | Ref watchers and computed recomputation. Drained until empty. |
| `create` | After `watchers`. | Instance creation. |
| `signals` | After `create`. | Signal callbacks. |
| `redraw` | After `signals`. | Applying property changes to Roblox instances. |
| `settled` | End of the current tick. | Work that should run once the tick's changes are applied. |
| `idle` | When no work is left. | Cleanup and low-priority work. |

`watchers` is **drained** — it re-runs until the stage is empty, up to a budget of 15 passes. If the budget is exhausted, the scheduler warns that a callback may be scheduling work in a loop.

## Phases

Every stage runs in three phases, in order:

| Phase | Description |
|---|---|
| `before` | Runs before the stage's scheduled work. |
| `schedule` | The stage's scheduled work. |
| `after` | Runs after the stage's scheduled work. |

Most code only ever touches the `schedule` phase. The `before` and `after` phases exist so internal systems can order work around a stage.

## Scheduling work

| Function | Description |
|---|---|
| `Scheduler.defer(fn, ...)` | Runs `fn` at the start of the next tick. |
| `Scheduler.settled(fn, ...)` | Runs `fn` at the end of the current tick. |
| `Scheduler.idle(fn, ...)` | Runs `fn` when there is no work left. |
| `Scheduler.schedule(stage, fn, ...)` | Runs `fn` in the given stage's `schedule` phase. |
| `Scheduler.scheduleBefore(stage, fn, ...)` | Runs `fn` in the given stage's `before` phase. |
| `Scheduler.scheduleAfter(stage, fn, ...)` | Runs `fn` in the given stage's `after` phase. |

All of these return the coroutine running `fn`, so you can inspect or cancel it.

## Waiting

`Scheduler.waitFor(stage, phase?)` yields the current coroutine until the given stage and phase is reached. `phase` defaults to `"schedule"`.

```luau
Scheduler.waitFor("redraw")
print("properties have been applied")
```

## Inspecting state

| Function | Description |
|---|---|
| `Scheduler.getCurrentStage()` | Returns the stage currently running, or `"sync"` outside a tick. |
| `Scheduler.getCurrentStagePhase()` | Returns the phase currently running, or `"sync"` outside a tick. |
| `Scheduler.getShouldSchedule()` | Returns whether another step is pending. |

## Control

| Function | Description |
|---|---|
| `Scheduler.step()` | Runs one full tick immediately. |
| `Scheduler.stop()` | Stops the scheduler from scheduling further ticks. |
| `Scheduler.start()` | Resumes the scheduler. |
| `Scheduler.reset(force?)` | Resets all scheduled work. Yields until the scheduler stops unless `force` is `true`. |

::: tip
`Scheduler.step()` is useful for testing — it lets you advance the pipeline deterministically instead of waiting for the next tick.
:::

## Notes

- **Deferred by design.** Mutating a ref does not touch Roblox instances immediately. Do not assume a property is updated right after you set a ref — it updates on the next tick.
- **Don't schedule in a loop.** Continuously scheduling work from within a stage can exhaust the `watchers` budget or keep the scheduler from reaching `idle`. The scheduler warns after 70 consecutive ticks without becoming idle.
