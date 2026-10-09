---
title: ScrollingFrame
---

# ScrollingFrame

A scrollable container. Maps to Roblox [ScrollingFrame](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame).

```luau
Widgets.ScrollingFrame {
    properties = {
        canvasSize = Units.Size(0, 0, 1, 2),
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `canvasPosition` | `Vector2` | Scroll position. |
| `canvasSize` | `Size` | Size of the scrollable canvas. |
| `automaticCanvasSize` | `Enum.AutomaticSize` | Automatic canvas sizing. |
| `scrollingDirection` | `Enum.ScrollingDirection` | Allowed scroll axes. |
| `scrollingEnabled` | `boolean` | Whether scrolling is enabled. |
| `scrollBarImageColor` | `Color3` | Scrollbar color. |
| `scrollBarImageTransparency` | `number` | Scrollbar transparency. |
| `scrollBarThickness` | `number` | Scrollbar thickness. |
| `verticalScrollBarInset` | `Enum.ScrollBarInset` | Vertical inset. |
| `horizontalScrollBarInset` | `Enum.ScrollBarInset` | Horizontal inset. |
| `elasticBehavior` | `Enum.ElasticBehavior` | Elastic scroll behavior. |

## Events

ScrollingFrame uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
