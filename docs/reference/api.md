---
title: API
---

# API

The public surface of PeanutUI, as exported from `UI/init.luau`.

## Widgets

Declarative widget constructors. See the [widget](/reference/widgets/) or [space](/reference/space) references for details.

| Export | Description |
|---|---|
| `Space` | Render root widget. |
| `createScreenSpace(name)` | Shortcut for `Space.createScreenSpace`. |
| `createBillboardSpace(name)` | Shortcut for `Space.createBillboardSpace`. |
| `createSurfaceSpace(name)` | Shortcut for `Space.createSurfaceSpace`. |
| `getScreenSpace(name)` | Shortcut for `Space.getScreenSpace`. |
| `getBillboardSpace(name)` | Shortcut for `Space.getBillboardSpace`. |
| `getSurfaceSpace(name)` | Shortcut for `Space.getSurfaceSpace`. |
| `Frame` | Widget constructor for `Frame`. |
| `ScrollingFrame` | Widget constructor for `ScrollingFrame`. |
| `CanvasGroup` | Widget constructor for `CanvasGroup`. |
| `ImageLabel` | Widget constructor for `ImageLabel`. |
| `ImageButton` | Widget constructor for `ImageButton`. |
| `TextLabel` | Widget constructor for `TextLabel`. |
| `TextButton` | Widget constructor for `TextButton`. |
| `TextBox` | Widget constructor for `TextBox`. |
| `ViewportFrame` | Widget constructor for `ViewportFrame`. |
| `VideoFrame` | Widget constructor for `VideoFrame`. |

## Components

| Export | Description |
|---|---|
| `defineComponent(fn)` | Creates a component with lifecycle controls. |
| `onSetup(fn)` | Runs after the component function creates its widget. |
| `onCreated(fn)` | Runs when the Roblox GUI object is created. |
| `onBeforeDestroyed(fn)` | Runs before destruction; widget and object still available. |
| `onDestroyed(fn)` | Runs after destruction. |
| `If(cond, fn)` | Reactive branching. See [Conditionals & Loops](/guides/reactive/control-flow). |
| `For(items, fn)` | Static loop over items. |
| `ReactiveFor(items, fn)` | Reactive loop over items. |
| `Lazy(fn)` | Defers widget creation until the `ObjectCreateScheduled` stage. See [Lazy](/guides/reactive/control-flow#lazy). |
| `makeStory(fn)` | Defines a story for in-engine preview. |

## Reactivity

| Export | Description |
|---|---|
| `Ref(value)` | Creates a ref. |
| `Computed(fn)` | Creates a computed ref. |
| `Reactive(table, shallow?)` | Wraps a table in a reactive proxy. |
| `getRef(proxy)` | Gets the ref backing a reactive proxy field. |
| `toRef(proxy, key)` | Reads a reactive proxy field as a ref. |
| `isRef(obj)` | Whether a value is a ref. |
| `isEqual(a, b)` | Creates a computed boolean comparing a ref to a value or ref. |
| `unwrap(valueOrRef)` | Returns the value, reading `.value` if given a ref. |
| `Size(...)` | Reactive size constructor. See [Units](/reference/units). |
| `Position(...)` | Reactive position constructor. |
| `Unit(...)` | Reactive unit constructor. |
| `PositionFromUDim2(udim2)` | Converts a `UDim2` to a `Position`. |
| `UnitFromUDim(udim)` | Converts a `UDim` to a `Unit`. |
| `ToUDim2(value)` | Converts a `Size`, `Position`, or `UDim2` to a `UDim2`. |
| `ToUDim(value)` | Converts a `Unit`, `UDim`, or number to a `UDim`. |
| `simpleScale` | Responsive pixel scaling for a Space. See [Scaling](/reference/scaling). |
| `preferredInput` | Reactive preferred input (`"gamepad"`, `"desktop"`, `"touch"`). |
| `globalSignals` | Global signals. |

## Animations

| Export | Description |
|---|---|
| `Animations` | Animation constructors and `makeAnimation`. |
| `Transitions` | Transition constructors (`Transitions.Ease`, ...). |

## Scheduler {#scheduler}

See the [Scheduler reference](/reference/scheduler) for stages, phases, and the full API.

| Export | Description |
|---|---|
| `Scheduler` | Scheduler module (`Scheduler.defer`, `Scheduler.waitFor`, ...) |
| `defer(fn)` | Schedule work for the `defer` stage. |
| `settled(fn)` | Schedule work for the `settled` stage. |
| `idle(fn)` | Schedule work for the `idle` stage. |
| `waitFor(fn)` | Wait for a condition across scheduler stages. |

## Info

| Export | Description |
|---|---|
| `version` | Version table. |
| `versionString` | Version string. |

## Misc

| Export | Description |
|---|---|
| `Logging` | Logging module (`logger.error`, `logger.critical`, ...). |
| `Undefined` | The `Undefined` sentinel, distinct from `nil`. |
