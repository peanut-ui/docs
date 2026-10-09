---
title: ImageLabel
---

# ImageLabel

Displays an image. Maps to Roblox [ImageLabel](https://create.roblox.com/docs/reference/engine/classes/ImageLabel).

```luau
Widgets.ImageLabel {
    properties = {
        imageContent = "rbxassetid://123456",
        size = Units.Size(64, 64),
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `imageContent` | `Content` | Image asset. |
| `imageColor` | `Color3` | Tint color. |
| `imageTransparency` | `number` | Image transparency. |
| `resampleMode` | `Enum.ResamplerMode` | Resampling mode. |
| `scaleType` | `Enum.ScaleType` | How the image scales. |
| `sliceCenter` | `Rect` | Nine-slice center rect. |
| `sliceScale` | `number` | Nine-slice scale. |
| `tileSize` | `Size` | Tile size when tiling. |
| `imageRectOffset` | `Vector2` | Source rect offset. |
| `imageRectSize` | `Vector2` | Source rect size. |
| `isLoaded` | `boolean` | Whether the image has loaded. |

## Events

ImageLabel uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
