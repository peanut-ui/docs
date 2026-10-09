---
title: Table
---

# Table

Arranges children in a table layout.

```luau
modifiers = {
    table = {
        gap = Units.Size(8, 8),
        majorAxis = "RowMajor",
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `horizontal` | `boolean` | Fill horizontally. |
| `sortByName` | `boolean` | Sort children by name. |
| `absoluteContentSize` | `Vector2` | Absolute content size. |
| `horizontalAlign` | `"Left" \| "Center" \| "Right"` | Horizontal alignment. |
| `verticalAlign` | `"Top" \| "Center" \| "Bottom"` | Vertical alignment. |
| `majorAxis` | `"RowMajor" \| "ColumnMajor"` | Fill order. |
| `gap` | `Size` | Space between cells. |
