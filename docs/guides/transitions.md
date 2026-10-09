---
title: Transitions
---

# Transitions {#header}

Transitions animate a property **when it changes**. They run once per change, unlike [animations](/guides/animations), which run continuously.

```luau
local Transitions = PeanutUI.Transitions
```

## Attaching a transition {#attaching}

Transitions go in the `transitions` table of a widget's props:

```luau
Widgets.Frame {
    properties = { size = Units.Size(200, 200) },
    transitions = {
        size = Transitions.Ease(0.5, "EaseOutBounce"),
        backgroundColor = Transitions.Ease(0.4, "EaseOut"),
    },
}
```

Now changing `size` or `backgroundColor` animates instead of snapping.

## Ease

`Transitions.Ease(duration, curve?)` animates over a fixed duration using an easing curve:

```luau
Transitions.Ease(0.3, "EaseOut")
```

The curve can be a named curve from `Curves` or a custom function:

```luau
Transitions.Ease(0.3, function(t)
    return t * t
end)
```

See the [Ease Curves reference](/reference/ease) for the full list of named curves.

## EaseCubicBezier {#ease-cubic-bezier}

`Transitions.EaseCubicBezier(duration, x1, y1, x2, y2)` uses a cubic bezier curve:

```luau
Transitions.EaseCubicBezier(0.4, 0.25, 0.1, 0.25, 1)
```

## Spring

`Transitions.Spring(dampingRatio, frequency)` uses spring physics:

```luau
Transitions.Spring(0.5, 4)
```

Springs are good for natural-feeling motion that settles over time.

## Per-modifier transitions

Modifiers accept their own `transitions` table:

```luau
modifiers = {
    cornerRadius = {
        all = Units.Unit(12),
        transitions = { all = Transitions.Ease(0.3, "EaseOut") },
    },
}
```

## Snapping

To set a property without animating, use `snapProperty`:

```luau
widget.snapProperty("size", Units.Size(300, 300))
```

## Transitions vs animations

| | Transitions | Animations |
|---|---|---|
| Runs | Once per change | Every frame |
| Trigger | Property change | Always |
| Use for | State changes | Continuous motion |
