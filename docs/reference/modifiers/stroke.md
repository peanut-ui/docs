---
title: Stroke
---

# Stroke

Draws a border around a widget.

```luau
modifiers = {
    stroke = {
        thickness = 2,
        color = Color3.new(1, 1, 1),
    }
}
```

Use `strokes` to attach multiple strokes:

```luau
modifiers = {
    strokes = {
        { thickness = 2, color = Color3.new(1, 1, 1) },
        { thickness = 2, color = Color3.new(0, 0, 0), borderOffset = Units.Unit(2) },
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Whether the stroke is drawn. |
| `zIndex` | `number` | Draw order. |
| `color` | `Color3` | Stroke color. |
| `transparency` | `number` | Stroke transparency. |
| `thickness` | `number` | Stroke thickness. |
| `borderOffset` | `Unit` | Offset from the border. |
| `strokeMode` | `"Border" \| "Contextual"` | Stroke mode. |
| `borderPosition` | `"Center" \| "Inner" \| "Outer"` | Border position. |
| `lineJoinMode` | `"Bevel" \| "Miter" \| "Round"` | Line join mode. |
| `gradient` | `Gradient` | Optional [gradient](/reference/modifiers/gradient) applied to the stroke. |
