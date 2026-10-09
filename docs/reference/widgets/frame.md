---
title: Frame
---

# Frame

A basic container. Maps to Roblox [Frame](https://create.roblox.com/docs/reference/engine/classes/Frame).

```luau
Widgets.Frame {
    properties = {
        size = Units.Size(200, 200),
        backgroundColor = Color3.fromRGB(30, 30, 30),
    }
}
```

## Properties

Frame uses the [shared widget properties](/reference/widgets/#shared-properties) with no additions.

## Events

Frame uses the [shared widget events](/reference/widgets/#shared-events) with no additions.

## Example

```luau
Widgets.Frame(
    {
        properties = {
            size = Units.Size(200, 200),
            backgroundColor = Color3.fromRGB(30, 30, 30),
        },
        modifiers = {
            cornerRadius = { all = Units.Unit(12) },
            padding = { all = Units.Unit(16) },
        },
    },
    {
        Widgets.TextLabel {
            properties = { text = "Hello" }
        },
    }
)
```
