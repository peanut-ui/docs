---
title: Space
---

# Space

A `Space` is the renderer root — a widget wrapper around a Roblox `LayerCollector` (`ScreenGui`, `BillboardGui`, or `SurfaceGui`). Every widget tree is mounted into a Space, and the Space is what actually puts the tree on screen.

```luau
local Space = PeanutUI.Space
```

## Roblox reference:
* `ScreenSpace` -> [ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui)
* `BillboardSpace` -> [BillboardGui](https://create.roblox.com/docs/reference/engine/classes/BillboardGui)
* `SurfaceSpace` -> [SurfaceGui](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui)

## Creating a Space

Each Space type has a `create*` constructor and a matching `get*` lookup. Spaces are registered by name, so creating two with the same name errors.

### `Space.createScreenSpace(name, props?)`

Creates a `ScreenGui`-backed Space, parented to the local player's `PlayerGui`.

```luau
local screen = Space.createScreenSpace("Main", {
    displayOrder = 1,
    ignoreGuiInset = true,
})
```

### `Space.createBillboardSpace(name, props?)`

Creates a `BillboardGui`-backed Space.

```luau
local billboard = Space.createBillboardSpace("HealthBar", {
    adornee = somePart,
    size = Units.Size(200, 50),
})
```

### `Space.createSurfaceSpace(name, props?)`

Creates a `SurfaceGui`-backed Space.

```luau
local surface = Space.createSurfaceSpace("Sign", {
    adornee = somePart,
    face = Enum.NormalId.Front,
})
```

## Lookup

| Function | Description |
|---|---|
| `Space.getScreenSpace(name)` | Returns a registered ScreenSpace. |
| `Space.getBillboardSpace(name)` | Returns a registered BillboardSpace. |
| `Space.getSurfaceSpace(name)` | Returns a registered SurfaceSpace. |

## Shared properties

All Space types share these properties:

| Property | Type | Description |
|---|---|---|
| `name` | `string` | Space name (defaults to the registry key). |
| `visible` | `boolean` | Whether the Space is enabled. |
| `zIndexBehavior` | `Enum.ZIndexBehavior` | Z-index behavior. |
| `absoluteSize` | `Vector2` | Absolute size (read-only). |
| `absolutePosition` | `Vector2` | Absolute position (read-only). |
| `absoluteRotation` | `number` | Absolute rotation (read-only). |

## ScreenSpace properties

In addition to the shared properties:

| Property | Type | Description |
|---|---|---|
| `displayOrder` | `number` | Draw order between ScreenGuis. |
| `clipToDeviceSafeArea` | `boolean` | Clip to the device safe area. |
| `ignoreGuiInset` | `boolean` | Ignore the topbar inset. |
| `safeAreaCompatibility` | `Enum.SafeAreaCompatibility` | Safe area compatibility mode. |
| `screenInsets` | `Enum.ScreenInsets` | Which insets to apply. |

## BillboardSpace properties

In addition to the shared properties:

| Property | Type | Description |
|---|---|---|
| `active` | `boolean` | Whether the billboard receives input. |
| `adornee` | `Instance?` | Instance the billboard is attached to. |
| `alwaysOnTop` | `boolean` | Render on top of everything. |
| `brightness` | `number` | Brightness. |
| `clipsDescendants` | `boolean` | Clip children to bounds. |
| `currentDistance` | `number` | Current distance to camera (read-only). |
| `distanceStep` | `number` | Distance step for updates. |
| `extentsOffset` | `Vector3` | Extents offset. |
| `extentsOffsetWorldSpace` | `Vector3` | World-space extents offset. |
| `lightInfluence` | `number` | How much lighting affects the billboard. |
| `maxDistance` | `number` | Max render distance. |
| `playerToHideFrom` | `Instance?` | Player who should not see it. |
| `size` | `Size` | Billboard size. |
| `sizeOffset` | `Vector2` | Size offset. |
| `studsOffset` | `Vector3` | Studs offset. |
| `studsOffsetWorldSpace` | `Vector3` | World-space studs offset. |

## SurfaceSpace properties

In addition to the shared properties:

| Property | Type | Description |
|---|---|---|
| `active` | `boolean` | Whether the surface receives input. |
| `adornee` | `Instance?` | Instance the surface is attached to. |
| `face` | `Enum.NormalId` | Face of the part to render on. |
| `alwaysOnTop` | `boolean` | Render on top of everything. |
| `brightness` | `number` | Brightness. |
| `canvasSize` | `Vector2` | Canvas size. |
| `clipsDescendants` | `boolean` | Clip children to bounds. |
| `lightInfluence` | `number` | How much lighting affects the surface. |
| `maxDistance` | `number` | Max render distance. |
| `pixelsPerStud` | `number` | Pixels per stud. |
| `sizingMode` | `Enum.SurfaceGuiSizingMode` | Sizing mode. |
| `toolPunchThroughDistance` | `number` | Tool punch-through distance. |
| `zOffset` | `number` | Z offset. |

## Scaling

A Space owns the scale function used to convert pixel values into the Space's scale. Widgets read it through `getSpace()`, and it can be changed at runtime:

```luau
screen.changeScaleFn(function(px, getOriginal)
    return px * 2
end)
```

Changing the scale fires the `ScaleChanged` signal, which widgets listen to in order to redraw scaled properties.

See [Scaling](/reference/scaling) for auto scaling.

## Events

| Event | Signature |
|---|---|
| `ChildAdded` | `(child: BaseInterface) -> ...boolean?` |
| `ChildRemoved` | `(child: BaseInterface) -> ...boolean?` |
| `PropertyChanged` | `(key: string, value: any) -> ...boolean?` |
| `ObjectDestroying` | `(object: LayerCollector) -> ...boolean?` |
| `Destroying` | `() -> ...boolean?` |
| `Destroyed` | `() -> ...boolean?` |

::: info
`ObjectCreated` is not available on Spaces — they use custom object creation. `ObjectDestroying` is still available because it is part of `Widget.destroy`.
:::

## Children

Spaces support the same child API as widgets:

| Method | Description |
|---|---|
| `addChild(child)` | Adds a child widget. |
| `removeChild(child, andDestroy?)` | Removes a child, optionally destroying it. |
| `clearChildren()` | Removes all children. |
| `children` | The current child list. |
