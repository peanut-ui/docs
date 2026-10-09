---
title: Grid
---

# Grid

Arranges children in a grid.

```luau
modifiers = {
    grid = {
        cellSize = Units.Size(64, 64),
        gap = Units.Size(8, 8),
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `gap` | `Size` | Space between cells. |
| `cellSize` | `Size` | Size of each cell. |
| `horizontal` | `boolean` | Fill horizontally. |
| `sortByName` | `boolean` | Sort children by name. |
| `fillDirectionMaxCells` | `number` | Max cells per row/column. |
| `absoluteContentSize` | `Vector2` | Absolute content size. |
| `horizontalAlign` | `"Left" \| "Center" \| "Right"` | Horizontal alignment. |
| `verticalAlign` | `"Top" \| "Center" \| "Bottom"` | Vertical alignment. |
| `startCorner` | `"TopLeft" \| "TopRight" \| "BottomLeft" \| "BottomRight"` | Starting corner. |
