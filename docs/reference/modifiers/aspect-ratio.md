---
title: AspectRatio
---

# AspectRatio

Locks a widget to a specific aspect ratio.

```luau
modifiers = {
    aspectRatio = {
        ratio = 16 / 9,
        type = "FitWithinMaxSize",
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `ratio` | `number` | Width-to-height ratio. |
| `type` | `"FitWithinMaxSize" \| "ScaleWithParentSize"` | How the ratio is enforced. |
| `dominantAxis` | `"Width" \| "Height"` | Axis that drives the ratio. |
