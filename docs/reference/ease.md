---
title: Ease Curves
---

# Ease Curves

Ease curves are functions of the form `(t: number) -> number` that map a normalized progress value `t` (from `0` to `1`) to an eased output. They are used by [Transitions](/guides/transitions) and [Animations](/guides/animations) to shape how a value moves over time.

```luau
local Curves = PeanutUI.Curves
```

Every curve returns exactly `0` at `t = 0` and exactly `1` at `t = 1`, so animations always start and end on the correct value.

## Preview

Every curve below is plotted over one cycle, from `t = 0` to `t = 1`.

<EasePreview />

## Using a curve

Pass a curve by name to a transition:

```luau
Transitions.Ease(0.3, "EaseOutBounce")
```

Or pass the function directly:

```luau
Transitions.Ease(0.3, Curves.EaseOutBounce)
```

You can also pass a custom function:

```luau
Transitions.Ease(0.3, function(t)
    return t * t
end)
```

## Linear

| Curve | Description |
|---|---|
| `Linear` | Constant speed. No easing. |

## Quadratic

| Curve | Description |
|---|---|
| `EaseInQuad` | Accelerates from rest. |
| `EaseOutQuad` | Decelerates to rest. |
| `EaseInOutQuad` | Accelerates then decelerates. |

## Cubic

| Curve | Description |
|---|---|
| `EaseInCubic` | Accelerates from rest. |
| `EaseOutCubic` | Decelerates to rest. |
| `EaseInOutCubic` | Accelerates then decelerates. |

## Quartic

| Curve | Description |
|---|---|
| `EaseInQuart` | Accelerates from rest. |
| `EaseOutQuart` | Decelerates to rest. |
| `EaseInOutQuart` | Accelerates then decelerates. |

## Quintic

| Curve | Description |
|---|---|
| `EaseInQuint` | Accelerates from rest. |
| `EaseOutQuint` | Decelerates to rest. |
| `EaseInOutQuint` | Accelerates then decelerates. |

## Sine

| Curve | Description |
|---|---|
| `EaseInSine` | Gentle acceleration. |
| `EaseOutSine` | Gentle deceleration. |
| `EaseInOutSine` | Gentle acceleration then deceleration. |

## Exponential

| Curve | Description |
|---|---|
| `EaseInExpo` | Very sharp acceleration. |
| `EaseOutExpo` | Very sharp deceleration. |
| `EaseInOutExpo` | Very sharp acceleration then deceleration. |

## Circular

| Curve | Description |
|---|---|
| `EaseInCirc` | Accelerates along a circular arc. |
| `EaseOutCirc` | Decelerates along a circular arc. |
| `EaseInOutCirc` | Accelerates then decelerates along a circular arc. |

## Back

Overshoots the target slightly before settling.

| Curve | Description |
|---|---|
| `EaseInBack` | Pulls back before moving forward. |
| `EaseOutBack` | Overshoots the target then settles. |
| `EaseInOutBack` | Pulls back, overshoots, then settles. |

## Elastic

Oscillates around the target like a spring.

| Curve | Description |
|---|---|
| `EaseInElastic` | Oscillates before moving forward. |
| `EaseOutElastic` | Oscillates as it settles on the target. |
| `EaseInOutElastic` | Oscillates at both ends. |

## Bounce

Bounces against the target like a falling object.

| Curve | Description |
|---|---|
| `EaseInBounce` | Bounces before moving forward. |
| `EaseOutBounce` | Bounces as it settles on the target. |
| `EaseInOutBounce` | Bounces at both ends. |

## Cubic bezier

| Curve | Description |
|---|---|
| `Ease` | CSS `ease` — `cubicBezier(0.25, 0.1, 0.25, 1)`. |
| `EaseIn` | CSS `ease-in` — `cubicBezier(0.42, 0, 1, 1)`. |
| `EaseOut` | CSS `ease-out` — `cubicBezier(0, 0, 0.58, 1)`. |
| `EaseInOut` | CSS `ease-in-out` — `cubicBezier(0.42, 0, 0.58, 1)`. |

## Custom cubic bezier

`Curves.cubicBezier(x1, y1, x2, y2)` builds a custom cubic bezier curve from two control points:

```luau
local curve = Curves.cubicBezier(0.25, 0.1, 0.25, 1)
Transitions.Ease(0.4, curve)
```

This is the same curve used by `Transitions.EaseCubicBezier(duration, x1, y1, x2, y2)`.

## Full list

All named curves available on `Curves`:

`Linear`, `EaseInQuad`, `EaseOutQuad`, `EaseInOutQuad`, `EaseInCubic`, `EaseOutCubic`, `EaseInOutCubic`, `EaseInQuart`, `EaseOutQuart`, `EaseInOutQuart`, `EaseInQuint`, `EaseOutQuint`, `EaseInOutQuint`, `EaseInSine`, `EaseOutSine`, `EaseInOutSine`, `EaseInExpo`, `EaseOutExpo`, `EaseInOutExpo`, `EaseInCirc`, `EaseOutCirc`, `EaseInOutCirc`, `EaseInBack`, `EaseOutBack`, `EaseInOutBack`, `EaseInElastic`, `EaseOutElastic`, `EaseInOutElastic`, `EaseInBounce`, `EaseOutBounce`, `EaseInOutBounce`, `Ease`, `EaseIn`, `EaseOut`, `EaseInOut`.
