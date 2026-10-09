---
title: TextBox
---

# TextBox

An editable text field. Maps to Roblox [TextBox](https://create.roblox.com/docs/reference/engine/classes/TextBox).

```luau
Widgets.TextBox {
    properties = {
        placeholderText = "Type here...",
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties) and all [TextLabel properties](/reference/widgets/text-label#properties):

| Property | Type | Description |
|---|---|---|
| `clearTextOnFocus` | `boolean` | Clear text when focused. |
| `multiLine` | `boolean` | Allow multiple lines. |
| `placeholderText` | `string` | Placeholder text. |
| `placeholderColor` | `Color3` | Placeholder color. |
| `cursorPosition` | `number` | Cursor position. |
| `selectionStart` | `number` | Selection start index. |

## Events

TextBox uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
