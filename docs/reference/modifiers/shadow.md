---
title: Shadow
---

# Shadow

Adds a drop shadow to a widget.

```luau
PeanutUI.Frame {
    shadow = {
        blurRadius = PeanutUI.Unit(16),
        offset = PeanutUI.Position(0, 4),
        transparency = 0.6,
    }
}
```

Use `shadows` to attach multiple shadows:

```luau
PeanutUI.Frame {
    shadows = {
        { blurRadius = PeanutUI.Unit(16), offset = PeanutUI.Position(0, 0), transparency = 0.6 },
        { blurRadius = PeanutUI.Unit(24), offset = PeanutUI.Position(0, 4), transparency = 0.7 },
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
