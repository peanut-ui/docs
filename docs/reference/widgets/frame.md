---
title: Frame
---

# Frame

A basic container. Maps to Roblox [Frame](https://create.roblox.com/docs/reference/engine/classes/Frame).

```luau
PeanutUI.Frame {
    size = PeanutUI.Size(200, 200),
    backgroundColor = Color3.fromRGB(30, 30, 30),
}
```

## Properties

Frame uses the [shared widget properties](/reference/widgets/#shared-properties) with no additions.

## Events

Frame uses the [shared widget events](/reference/widgets/#shared-events) with no additions.

## Example

```luau
PeanutUI.Frame(
    {
        size = PeanutUI.Size(200, 200),
        backgroundColor = Color3.fromRGB(30, 30, 30),
        cornerRadius = { all = PeanutUI.Unit(12) },
        padding = { all = PeanutUI.Unit(16) },
    },
    {
        PeanutUI.TextLabel { text = "Hello" }
    }
)
```
