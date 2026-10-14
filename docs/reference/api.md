---
title: API
---

# API

The public surface of PeanutUI, as exported from `UI/init.luau`.

## Widgets

Declarative widget constructors. See the [widget](/reference/widgets/) or [space](/reference/space) references for details.

| Export | Description |
|---|---|
| `Widgets` | Table of widget constructors (`Widgets.Frame`, `Widgets.TextLabel`, ...). |
| `Space` | Render root widget. |
| `createScreenSpace(name)` | Shortcut for `Space.createScreenSpace`. |
| `createBillboardSpace(name)` | Shortcut for `Space.createBillboardSpace`. |
| `createSurfaceSpace(name)` | Shortcut for `Space.createSurfaceSpace`. |
| `getScreenSpace(name)` | Shortcut for `Space.getScreenSpace`. |
| `getBillboardSpace(name)` | Shortcut for `Space.getBillboardSpace`. |
| `getSurfaceSpace(name)` | Shortcut for `Space.getSurfaceSpace`. |
| `Frame` | Shortcut for `Widgets.Frame`. |
| `ScrollingFrame` | Shortcut for `Widgets.ScrollingFrame`. |
| `CanvasGroup` | Shortcut for `Widgets.CanvasGroup`. |
| `ImageLabel` | Shortcut for `Widgets.ImageLabel`. |
| `ImageButton` | Shortcut for `Widgets.ImageButton`. |
| `TextLabel` | Shortcut for `Widgets.TextLabel`. |
| `TextButton` | Shortcut for `Widgets.TextButton`. |
| `TextBox` | Shortcut for `Widgets.TextBox`. |
| `ViewportFrame` | Shortcut for `Widgets.ViewportFrame`. |
| `VideoFrame` | Shortcut for `Widgets.VideoFrame`. |

## Components

| Export | Description |
|---|---|
| `Component.defineComponent(fn)` | Creates a component with lifecycle controls. |
| `Component.onSetup(fn)` | Runs after the component function creates its widget. |
| `Component.onCreated(fn)` | Runs when the Roblox GUI object is created. |
| `Component.onBeforeDestroyed(fn)` | Runs before destruction; widget and object still available. |
| `Component.onDestroyed(fn)` | Runs after destruction. |
| `Component.If(cond, fn)` | Reactive branching. See [Conditionals & Loops](/guides/reactive/control-flow). |
| `Component.For(items, fn)` | Static loop over items. |
| `Component.ReactiveFor(items, fn)` | Reactive loop over items. |
| `Component.Lazy(fn)` | Defers widget creation until the `ObjectCreateScheduled` stage. See [Lazy](/guides/reactive/control-flow#lazy). |
| `Component.makeStory(fn)` | Defines a story for in-engine preview. |
| `defineComponent(fn)` | Shortcut for `Component.defineComponent`. |
| `onSetup(fn)` | Shortcut for `Component.onSetup`. |
| `onCreated(fn)` | Shortcut for `Component.onCreated`. |
| `onBeforeDestroyed(fn)` | Shortcut for `Component.onBeforeDestroyed`. |
| `onDestroyed(fn)` | Shortcut for `Component.onDestroyed`. |
| `If(cond, fn)` | Shortcut for `Component.If`. |
| `For(items, fn)` | Shortcut for `Component.For`. |
| `ReactiveFor(items, fn)` | Shortcut for `Component.ReactiveFor`. |
| `Lazy(fn)` | Shortcut for `Component.Lazy`. |
| `makeStory(fn)` | Shortcut for `Component.makeStory`. |

## Reactivity

| Export | Description |
|---|---|
| `Ref` | Ref module (`Ref.new`, `Ref.computed`, `Ref.reactive`, ...). |
| `ref(value)` | Shortcut for `Ref.new`. |
| `computed(fn)` | Shortcut for `Ref.computed`. |
| `reactive(table)` | Shortcut for `Ref.reactive`. |
| `getRef(proxy)` | Shortcut for `Ref.getRef`. |
| `toRef(proxy, key)` | Shortcut for `Ref.toRef`. |
| `isRef(obj)` | Shortcut for `Ref.isRef`. |
| `isEqual(a, b)` | Shortcut for `Ref.isEqual`. |
| `Units` | Reactive `Size` / `Position` / `Unit` constructors. See [Units](/reference/units). |
| `Scaling` | Responsive pixel scaling for a Space. See [Scaling](/reference/scaling). |
| `State` | Global reactive state (`State.preferredInput`, ...). |

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
| `preferredInput` | Reactive preferred input (`"gamepad"`, `"desktop"`, `"touch"`). |
| `globalSignals` | Global signals. |

## Misc

| Export | Description |
|---|---|
| `Logging` | Logging module (`logger.error`, `logger.critical`, ...). |
| `Undefined` | The `Undefined` sentinel, distinct from `nil`. |
| `simpleScale` | Shortcut for `Scaling.simpleScale`. |
