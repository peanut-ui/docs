---
title: Flex
---

# Flex

Controls how a widget behaves inside a flex layout.

```luau
modifiers = {
    flex = {
        mode = "Grow",
        growRatio = 1,
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `mode` | `"Fill" \| "Grow" \| "None" \| "Shrink" \| "Custom"` | Flex mode. |
| `lineAlignment` | `"Automatic" \| "Center" \| "End" \| "Start" \| "Stretch"` | Alignment within the line. |
| `growRatio` | `number` | Grow ratio. |
| `shrinkRatio` | `number` | Shrink ratio. |
