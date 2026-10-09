---
title: CanvasGroup
---

# CanvasGroup

A container that applies group transparency and color to its descendants. Maps to Roblox [CanvasGroup](https://create.roblox.com/docs/reference/engine/classes/CanvasGroup).

```luau
Widgets.CanvasGroup {
    properties = {
        groupTransparency = 0.5,
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `groupColor` | `Color3` | Color multiplied over all descendants. |
| `groupTransparency` | `number` | Transparency applied to the whole group. |

## Events

CanvasGroup uses the [shared widget events](/reference/widgets/#shared-events) with no additions.
