---
title: Units
---

# Units

Reactive replacements for `UDim2` and `UDim`. They support per-component scaling and ref-driven updates.

```luau
PeanutUI.Size
PeanutUI.Position
PeanutUI.Unit
```

## Constructors

### `PeanutUI.Size(width?, height?, widthScale?, heightScale?)`

Creates a reactive size.

```luau
PeanutUI.Size(150, 150)          -- 150px by 150px
PeanutUI.Size(nil, nil, 1, 0.5)  -- 100% width, 50% height
```

### `PeanutUI.Position(x?, y?, xScale?, yScale?)`

Creates a reactive position.

```luau
PeanutUI.Position(0, 0, 0.5, 0.5)  -- centered
```

### `PeanutUI.Unit(px?, scale?)`

Creates a reactive unit, used by modifiers like `cornerRadius` and `padding`.

```luau
PeanutUI.Unit(12)          -- 12px
PeanutUI.Unit(nil, 0.5)    -- 50% scale
```

## Conversions

| Function | Description |
|---|---|
| `PeanutUI.PositionFromUDim2(udim2)` | Converts a `UDim2` to a `Position`. |
| `PeanutUI.UnitFromUDim(udim)` | Converts a `UDim` to a `Unit`. |
| `PeanutUI.ToUDim2(value)` | Converts a `Size`, `Position`, or `UDim2` to a `UDim2`. |
| `PeanutUI.ToUDim(value)` | Converts a `Unit`, `UDim`, or number to a `UDim`. |

## Reactivity

`Size` and `Position` fields are reactive — mutating them updates the widget:

```luau
const size = PeanutUI.Reactive(PeanutUI.Size(150, 150))

size.width += 25
size.height += 25
```
