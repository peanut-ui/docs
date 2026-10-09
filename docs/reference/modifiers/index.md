---
title: Modifiers
---

# Modifiers

Modifiers attach Roblox [UIComponent](https://create.roblox.com/docs/reference/engine/classes/UIComponent)s to a widget — rounded corners, padding, strokes, layouts, and constraints. They are passed in the `modifiers` table of a widget's props:

```luau
Widgets.Frame {
    properties = { size = Units.Size(200, 200) },
    modifiers = {
        cornerRadius = { all = Units.Unit(12) },
        padding = { all = Units.Unit(16) },
    }
}
```

## Singular and plural forms

Some modifiers accept either a single setup or a list:

| Singular | Plural |
|---|---|
| `stroke` | `strokes` |
| `shadow` | `shadows` |

```luau
modifiers = {
    strokes = {
        { thickness = 2, color = Color3.new(1, 1, 1) },
        { thickness = 2, color = Color3.new(0, 0, 0), borderOffset = Units.Unit(2) },
    },
}
```

## Per-modifier options

Every modifier setup also accepts `transitions` and `animations`:

```luau
modifiers = {
    cornerRadius = {
        all = Units.Unit(12),
        transitions = { all = Transitions.Ease(0.3, "EaseOut") },
    },
}
```

## Available modifiers

### Styling

| Modifier | Description |
|---|---|
| [flex](/reference/modifiers/flex) | Flex layout behavior. |
| [cornerRadius](/reference/modifiers/corner-radius) | Rounded corners. |
| [padding](/reference/modifiers/padding) | Inner padding. |
| [stroke](/reference/modifiers/stroke) | Border stroke. |
| [gradient](/reference/modifiers/gradient) | Gradient fill. |
| [shadow](/reference/modifiers/shadow) | Drop shadow. |

### Layouts

| Modifier | Description |
|---|---|
| [list](/reference/modifiers/list) | Linear layout. |
| [grid](/reference/modifiers/grid) | Grid layout. |
| [table](/reference/modifiers/table) | Table layout. |

### Constraints

| Modifier | Description |
|---|---|
| [aspectRatio](/reference/modifiers/aspect-ratio) | Lock aspect ratio. |
| [sizeConstraint](/reference/modifiers/size-constraint) | Min/max size. |
| [textSizeConstraint](/reference/modifiers/text-size-constraint) | Min/max text size. |
| [scale](/reference/modifiers/scale) | UI scale. |

## Methods

`getModifier(name, index?)` returns a modifier **component**. Components expose the same reactive API as widgets, scoped to the modifier's own properties:

| Method | Signature | Description |
|---|---|---|
| `setProperty` | `(key: string, value: any \| Ref<any>) -> ()` | Sets a modifier property. |
| `getProperty` | `(key: string) -> any` | Reads a modifier property. |
| `snapProperty` | `(key: string, value: any \| Ref<any>) -> ()` | Sets a property without running its transition. |
| `observe` | `(key: string, callback: (newValue: any) -> ()) -> (() -> ())` | Watches a property; returns an unwatch function. |
| `getRef` | `(key: string) -> ProtectedRef<any>` | A reactive ref for a property. |
| `setTransition` | `(key: string, transition: Transition?) -> ()` | Attaches or clears a transition for a property. |
| `setModifier` | `(name: string, params: any?) -> ()` | Adds or updates a nested modifier. |
| `getModifier` | `(name: string, index: number?) -> Component` | Gets a nested modifier component. |
| `setAnimation` | `(name: string \| number, animation: MaybeResolvedAnimation?) -> ()` | Attaches or clears an animation. |
| `getAnimationControl` | `(name: string \| number) -> AnimationControl` | Gets a control handle for an animation. |
| `destroy` | `() -> ()` | Destroys the modifier component. |
| `isDestroyed` | `() -> boolean` | Whether the component has been destroyed. |
| `mountTo` | `(object: Instance) -> ()` | Mounts the component onto a `UIComponent`. |
| `getComponent` | `() -> UIComponent?` | The underlying Roblox `UIComponent`. |
| `getScaleObjectFn` | `() -> (value: T, getOriginal: boolean?) -> T` | The current scale function. |
| `setScaleObjectFn` | `(fn: ((value: T, getOriginal: boolean?) -> T)?) -> ()` | Replaces the scale function. |

```luau
local corner = widget.getModifier("cornerRadius")
corner.setProperty("all", Units.Unit(16))
corner.observe("all", function(value)
    print("radius is now", value)
end)
```
