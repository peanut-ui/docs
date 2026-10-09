---
title: List
---

# List

Arranges children in a line, optionally wrapping.

```luau
modifiers = {
    list = {
        gap = Units.Unit(8),
        horizontal = true,
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `gap` | `Unit` | Space between children. |
| `horizontal` | `boolean` | Lay out horizontally. |
| `sortByName` | `boolean` | Sort children by name. |
| `wraps` | `boolean` | Wrap to the next line. |
| `absoluteContentSize` | `Vector2` | Absolute content size. |
| `horizontalAlign` | `"Left" \| "Center" \| "Right"` | Horizontal alignment. |
| `verticalAlign` | `"Top" \| "Center" \| "Bottom"` | Vertical alignment. |
| `horizontalFlex` | `"None" \| "Fill" \| "SpaceAround" \| "SpaceBetween" \| "SpaceEvenly"` | Horizontal flex distribution. |
| `lineAlignment` | `"Automatic" \| "Center" \| "End" \| "Start" \| "Stretch"` | Alignment within a line. |
