---
title: Shadow
---

# Shadow

Adds a drop shadow to a widget.

```luau
modifiers = {
    shadow = {
        blurRadius = Units.Unit(16),
        offset = Units.Position(0, 4),
        transparency = 0.6,
    }
}
```

Use `shadows` to attach multiple shadows:

```luau
modifiers = {
    shadows = {
        { blurRadius = Units.Unit(16), offset = Units.Position(0, 0), transparency = 0.6 },
        { blurRadius = Units.Unit(24), offset = Units.Position(0, 4), transparency = 0.7 },
    }
}
```

## Properties

| Property | Type | Description |
|---|---|---|
| `enabled` | `boolean` | Whether the shadow is drawn. |
| `blurRadius` | `Unit` | Blur radius. |
| `color` | `Color3` | Shadow color. |
| `offset` | `Position` | Shadow offset. |
| `spread` | `Size` | Shadow spread. |
| `transparency` | `number` | Shadow transparency. |
| `zIndex` | `number` | Draw order. |
