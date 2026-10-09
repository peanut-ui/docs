---
title: Widgets
---

# Widgets

Widgets are the declarative constructors you build your UI out of. Each one maps to a Roblox [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) and is called as a table constructor:

```luau
Widgets.Frame {
    properties = { size = Units.Size(200, 200) }
}
```

## Calling convention

Every widget accepts an optional props table and an optional children table:

```luau
Widgets.Frame(props, children)
```

- **`props`** — a table of widget arguments (`properties`, `modifiers`, `events`, `transitions`, `animations`).
- **`children`** — a table of child widgets. Equivalent to `props.children`, but kept separate so structure is visible at a glance.

```luau
Widgets.Frame(
    { properties = { size = Units.Size(200, 200) } },
    {
        Widgets.TextLabel { properties = { text = "Hi" } },
        Widgets.TextButton { properties = { text = "Click" } },
    }
)
```

::: warning
Passing both `props.children` and a second `children` argument errors. Use one or the other.
:::

## Available widgets

| Widget | Roblox object |
|---|---|
| [Frame](/reference/widgets/frame) | `Frame` |
| [CanvasGroup](/reference/widgets/canvas-group) | `CanvasGroup` |
| [ImageLabel](/reference/widgets/image-label) | `ImageLabel` |
| [ImageButton](/reference/widgets/image-button) | `ImageButton` |
| [TextLabel](/reference/widgets/text-label) | `TextLabel` |
| [TextButton](/reference/widgets/text-button) | `TextButton` |
| [TextBox](/reference/widgets/text-box) | `TextBox` |
| [ScrollingFrame](/reference/widgets/scrolling-frame) | `ScrollingFrame` |
| [ViewportFrame](/reference/widgets/viewport-frame) | `ViewportFrame` |
| [VideoFrame](/reference/widgets/video-frame) | `VideoFrame` |

## Shared properties

All widgets share the base properties from `DefaultProperties`:

| Property | Type | Description |
|---|---|---|
| `visible` | `boolean` | Whether the widget is rendered. |
| `layoutOrder` | `number` | Order used by layout modifiers. |
| `zIndex` | `number` | Draw order. |
| `clipsDescendants` | `boolean` | Whether children are clipped to bounds. |
| `size` | `Size` | Reactive size. |
| `position` | `Position` | Reactive position. |
| `anchorPoint` | `Vector2` | Anchor point. |
| `rotation` | `number` | Rotation in degrees. |
| `automaticSize` | `Enum.AutomaticSize` | Automatic sizing mode. |
| `backgroundColor` | `Color3` | Background color. |
| `backgroundTransparency` | `number` | Background transparency. |
| `name` | `string` | Instance name. |

## Shared events

All widgets support the base events from `DefaultEvents`:

| Event | Signature |
|---|---|
| `InputBegan` | `(inputObject: InputObject) -> ...boolean?` |
| `InputChanged` | `(inputObject: InputObject) -> ...boolean?` |
| `InputEnded` | `(inputObject: InputObject) -> ...boolean?` |
| `MouseEnter` | `(x: number, y: number) -> ...boolean?` |
| `MouseMoved` | `(x: number, y: number) -> ...boolean?` |
| `MouseLeave` | `(x: number, y: number) -> ...boolean?` |
| `SelectionChanged` | `(amISelected: boolean, previousSelection: GuiObject, newSelection: GuiObject) -> ...boolean?` |
| `TouchTap` | `(touchPositions: {Vector2}) -> ...boolean?` |

Widget lifecycle events (`ChildAdded`, `ChildRemoved`, `ParentChanged`, `PropertyChanged`, `ObjectCreated`, `Destroying`, `Destroyed`) are also available on every widget.

## Methods

Every widget instance exposes the following methods. They are grouped by the feature they come from; a widget only implements the features it declares (check with `isImplemented`).

### Lifecycle

| Method | Signature | Description |
|---|---|---|
| `destroy` | `() -> ()` | Destroys the widget, its object, and its children. |
| `isDestroyed` | `() -> boolean` | Whether the widget has been destroyed. |
| `isImplemented` | `(field: string, isFeature: boolean?) -> boolean` | Whether a method (or feature) is implemented. |
| `getObject` | `() -> Instance?` | The underlying Roblox instance, if created. |
| `getObjectRef` | `() -> ProtectedRef<Instance?>` | Reactive ref to the underlying instance. |

### Properties

| Method | Signature | Description |
|---|---|---|
| `setProperty` | `(key: string, value: any \| Ref<any>) -> ()` | Sets a property. Accepts a plain value or a ref. |
| `getProperty` | `(key: string) -> any` | Reads a property's current value. |
| `snapProperty` | `(key: string, value: any \| Ref<any>) -> ()` | Sets a property without running its transition. |
| `observe` | `(key: string, callback: (newValue: any) -> ...boolean?) -> (() -> ())` | Watches a property; returns an unwatch function. |
| `getRef` | `(key: string) -> ProtectedRef<any>` | A reactive ref for a property. |
| `setTransition` | `(key: string, transition: Transition?) -> ()` | Attaches or clears a transition for a property. |

### Events

| Method | Signature | Description |
|---|---|---|
| `listen` | `(name: string, callback: any) -> (() -> ())` | Subscribes to an event; returns an unsubscribe function. |

### Parenting

| Method | Signature | Description |
|---|---|---|
| `setParent` | `(parent: WidgetLike?) -> ()` | Reparents the widget. |
| `getParent` | `() -> Interface?` | The current parent widget. |
| `getSpace` | `() -> SpaceLike?` | The Space the widget belongs to. |

### Children

| Method | Signature | Description |
|---|---|---|
| `addChild` | `(child: WidgetLike) -> ()` | Adds a child widget. |
| `removeChild` | `(child: WidgetLike, andDestroy: boolean?) -> ()` | Removes a child, optionally destroying it. |
| `clearChildren` | `() -> ()` | Removes and destroys all children. |
| `children` | `{Interface}` | Read-only list of child widgets. |

### Modifiers

| Method | Signature | Description |
|---|---|---|
| `setModifier` | `(name: string, params: any?) -> ()` | Adds or updates a modifier. |
| `getModifier` | `(name: string, index: number?) -> Component` | Gets a modifier component by name. |

### Animations

| Method | Signature | Description |
|---|---|---|
| `setAnimation` | `(name: string \| number, animation: MaybeResolvedAnimation?, disableAutoPlay: boolean?) -> ()` | Attaches or clears an animation. |
| `getAnimationControl` | `(name: string \| number) -> AnimationControl` | Gets a control handle for an animation. |

### AnimationControl

Returned by `getAnimationControl`:

| Method | Signature | Description |
|---|---|---|
| `animate` | `() -> ()` | Starts the animation. |
| `stop` | `() -> ()` | Stops the animation. |
| `pause` | `() -> ()` | Pauses the animation. |
| `continue` | `() -> ()` | Resumes a paused animation. |
| `isRunning` | `() -> boolean` | Whether the animation is running. |
