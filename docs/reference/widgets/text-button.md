---
title: TextButton
---

# TextButton

A clickable text button. Maps to Roblox [TextButton](https://create.roblox.com/docs/reference/engine/classes/TextButton).

```luau
Widgets.TextButton {
    properties = { text = "Click me" },
    events = {
        Activated = function()
            print("clicked")
        end,
    },
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties) and all [TextLabel properties](/reference/widgets/text-label#properties):

| Property | Type | Description |
|---|---|---|
| `autoButtonColor` | `boolean` | Whether Roblox tints the button automatically. |
| `modal` | `boolean` | Whether the button is modal. |
| `selected` | `boolean` | Selection state. |
| `style` | `Enum.ButtonStyle` | Button style. |

## Events

In addition to the [shared widget events](/reference/widgets/#shared-events):

| Event | Signature |
|---|---|
| `Activated` | `(obj: InputObject, clickCount: number) -> ()` |
| `SecondaryActivated` | `(obj: InputObject) -> ()` |
