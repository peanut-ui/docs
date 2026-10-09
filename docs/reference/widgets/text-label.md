---
title: TextLabel
---

# TextLabel

Displays text. Maps to Roblox [TextLabel](https://create.roblox.com/docs/reference/engine/classes/TextLabel).

```luau
Widgets.TextLabel {
    properties = {
        text = "Hello",
        textSize = 18,
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `text` | `string` | Displayed text. |
| `textColor` | `Color3` | Text color. |
| `textTransparency` | `number` | Text transparency. |
| `textStrokeColor` | `Color3` | Stroke color. |
| `textStrokeTransparency` | `number` | Stroke transparency. |
| `fontFace` | `Font` | Font face. |
| `textSize` | `number` | Font size. |
| `textScaled` | `boolean` | Scale text to fit. |
| `textWrapped` | `boolean` | Wrap text. |
| `textXAlignment` | `Enum.TextXAlignment` | Horizontal alignment. |
| `textYAlignment` | `Enum.TextYAlignment` | Vertical alignment. |
| `richText` | `boolean` | Enable rich text tags. |
| `lineHeight` | `number` | Line height multiplier. |
| `maxVisibleGraphemes` | `number` | Max visible graphemes. |
| `textTruncate` | `Enum.TextTruncate` | Truncation mode. |

## Events

TextLabel uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
