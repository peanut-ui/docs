---
title: Units
---

# Units

Reactive replacements for `UDim2` and `UDim`. They support per-component scaling and ref-driven updates.

```luau
local Units = PeanutUI.Units
```

## Constructors

### `Units.Size(width?, height?, widthScale?, heightScale?)`

Creates a reactive size.

```luau
Units.Size(150, 150)          -- 150px by 150px
Units.Size(nil, nil, 1, 0.5)  -- 100% width, 50% height
```

### `Units.Position(x?, y?, xScale?, yScale?)`

Creates a reactive position.

```luau
Units.Position(0, 0, 0.5, 0.5)  -- centered
```

### `Units.Unit(px?, scale?)`

Creates a reactive unit, used by modifiers like `cornerRadius` and `padding`.

```luau
Units.Unit(12)          -- 12px
Units.Unit(nil, 0.5)    -- 50% scale
```

## Conversions

| Function | Description |
|---|---|
| `Units.SizeFromUDim2(udim2)` | Converts a `UDim2` to a `Size`. |
| `Units.PositionFromUDim2(udim2)` | Converts a `UDim2` to a `Position`. |
| `Units.UnitFromUDim(udim)` | Converts a `UDim` to a `Unit`. |
| `Units.ToUDim2(value)` | Converts a `Size`, `Position`, or `UDim2` to a `UDim2`. |
| `Units.ToUDim(value)` | Converts a `Unit`, `UDim`, or number to a `UDim`. |

## Reactivity

`Size` and `Position` fields are reactive — mutating them updates the widget:

```luau
local size = Ref.reactive(Units.Size(150, 150))

size.width += 25
size.height += 25
```
