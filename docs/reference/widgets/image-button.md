---
title: ImageButton
---

# ImageButton

A clickable image. Maps to Roblox [ImageButton](https://create.roblox.com/docs/reference/engine/classes/ImageButton).

```luau
Widgets.ImageButton {
    properties = { imageContent = "rbxassetid://123456" },
    events = {
        Activated = function()
            print("clicked")
        end,
    },
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties) and all [ImageLabel properties](/reference/widgets/image-label#properties):

| Property | Type | Description |
|---|---|---|
| `hoverImage` | `string` | Image shown on hover. |
| `pressedImage` | `string` | Image shown while pressed. |
| `autoButtonColor` | `boolean` | Whether Roblox tints the button automatically. |
| `modal` | `boolean` | Whether the button is modal. |
| `selected` | `boolean` | Selection state. |

## Events

In addition to the [shared widget events](/reference/widgets/#shared-events):

| Event | Signature |
|---|---|
| `Activated` | `(obj: InputObject, clickCount: number) -> ()` |
| `SecondaryActivated` | `(obj: InputObject) -> ()` |
