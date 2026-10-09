---
title: Gradient
---

# Gradient

Applies a gradient fill to a widget.

```luau
modifiers = {
    gradient = {
        color = ColorSequence.new(Color3.new(1, 0, 0), Color3.new(0, 0, 1)),
        rotation = 45,
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Whether the gradient is drawn. |
| `color` | `ColorSequence` | Gradient colors. |
| `offset` | `Vector2` | Gradient offset. |
| `scale` | `number` | Gradient scale. |
| `rotation` | `number` | Rotation in degrees. |
| `transparency` | `NumberSequence` | Transparency over the gradient. |
| `tileMode` | `"Clamp" \| "Mirror" \| "Repeat"` | Tile mode. |
| `type` | `"Conical" \| "Linear" \| "Radial"` | Gradient type. |
