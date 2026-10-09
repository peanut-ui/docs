---
title: ViewportFrame
---

# ViewportFrame

Renders 3D content inside a 2D UI. Maps to Roblox [ViewportFrame](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame).

```luau
Widgets.ViewportFrame {
    properties = {
        currentCamera = workspace.CurrentCamera,
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `currentCamera` | `Camera?` | Camera used to render the viewport. |
| `imageColor` | `Color3` | Tint color. |
| `imageTransparency` | `number` | Transparency. |
| `ambient` | `Color3` | Ambient light color. |
| `lightColor` | `Color3` | Light color. |
| `lightDirection` | `Vector3` | Light direction. |

## Events

ViewportFrame uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
