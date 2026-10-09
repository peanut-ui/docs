---
title: SizeConstraint
---

# SizeConstraint

Clamps a widget's size between a minimum and maximum.

```luau
modifiers = {
    sizeConstraint = {
        min = Vector2.new(100, 100),
        max = Vector2.new(400, 400),
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `min` | `Vector2` | Minimum size. |
| `max` | `Vector2` | Maximum size. |
