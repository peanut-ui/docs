---
title: Scaling
---

# Scaling

`Scaling` provides responsive pixel scaling for a [Space](/reference/space). It computes a scale factor from the Space's current size and a reference resolution, then installs it as the Space's scale function so every widget in the tree scales together.

```luau
local Scaling = PeanutUI.Scaling
```

## Simple scale
`Scaling.simpleScale(onSpace, referenceResolution, floorScale?, minScale?, maxScale?)`

Applies responsive pixel scaling to a screen space.

The scale is calculated from the Space's current size and the reference resolution. The **smaller** of the width and height scale factors is used, so the UI keeps its proportions and stays fully visible. The scale is recalculated whenever the Space changes size.

| Parameter | Type | Description |
|---|---|---|
| `onSpace` | `SpaceLike` | The Space whose UI should be scaled. |
| `referenceResolution` | `Vector2` | The design resolution used as the scale baseline. |
| `floorScale` | `boolean?` | Rounds the scale down to an integer. Useful for pixel-perfect UI where fractional scaling could place elements between pixels. Defaults to `false`. |
| `minScale` | `number?` | The smallest scale allowed after calculating the screen scale. |
| `maxScale` | `number?` | The largest scale allowed after calculating the screen scale. |

```luau
Scaling.simpleScale(
    space,
    Vector2.new(844, 390),
    true
)
```

Here `space` is the Space to scale, `Vector2.new(844, 390)` is the design resolution the UI is laid out for, and `true` enables integer scale steps. This is a good default for pixel-oriented UI because it avoids half pixels and keeps edges and text arranged cleanly. Use `false` or omit the value when smoother fractional scaling matters more than pixel alignment. I really recommend putting low reference resolution and setting `floorScale` to `true`.

## Reference resolutions

The reference resolution is the design baseline your UI is laid out for. Pick the resolution that matches the device class you are designing against, then lay out your widgets in that resolution's pixels.

| Device class | Reference resolution | Notes |
|---|---|---|
| Phone (portrait) | `Vector2.new(390, 844)` | iPhone 12/13/14 logical size. |
| Phone (landscape) | `Vector2.new(844, 390)` | Same device rotated — matches the example above. |
| Small phone | `Vector2.new(320, 568)` | iPhone SE / older devices. |
| Large phone | `Vector2.new(430, 932)` | iPhone 14 Pro Max. |
| Tablet (portrait) | `Vector2.new(768, 1024)` | iPad 9.7"/10.2". |
| Tablet (landscape) | `Vector2.new(1024, 768)` | iPad rotated. |
| Desktop / laptop | `Vector2.new(1920, 1080)` | 1080p baseline. |
| Desktop (1440p) | `Vector2.new(2560, 1440)` | Higher-res desktop. |
| Ultrawide | `Vector2.new(3440, 1440)` | 21:9 monitors. |
| Console / TV | `Vector2.new(1920, 1080)` | Same as desktop 1080p. |
| Roblox default | `Vector2.new(1280, 720)` | Common Roblox UI design baseline. |

```luau
Scaling.simpleScale(space, Vector2.new(844, 390), true)   -- landscape phone, pixel-perfect
Scaling.simpleScale(space, Vector2.new(390, 844))         -- portrait phone, smooth scaling
Scaling.simpleScale(space, Vector2.new(1920, 1080), true) -- desktop, integer steps
```

## Why reference resolution matters

The reference resolution is what makes your layout resolution-independent. You design once at a fixed size, and `simpleScale` maps that design onto whatever screen the player actually has.

- **It defines "1 design pixel".** Every pixel value you write in your widgets is interpreted relative to the reference. A `100`px button is `100` design pixels, not `100` screen pixels. Change the reference and the whole UI grows or shrinks together.
- **It keeps proportions.** `simpleScale` uses the **smaller** of the width and height scale factors, so the UI never overflows the shorter axis. The reference's aspect ratio is what the layout is guaranteed to fit inside.
- **Orientation matters.** A portrait baseline (`390, 844`) and its landscape twin (`844, 390`) behave differently on the same screen, because the smaller-axis rule picks a different factor. Pick the orientation your UI is actually laid out for.
- **It pairs with `floorScale`.** Pixel-oriented baselines (phone, desktop) work well with `floorScale = true` to avoid half pixels; fluid layouts can leave it off for smoother fractional scaling.
- **It is per-Space.** Because scaling is per-Space, a `ScreenSpace` and a `BillboardSpace` can each use a different reference resolution.

## Why Scaling?

`Scaling` exists so you can lay out your UI in plain pixels and never think about scaling again. You declare a reference resolution once, and the framework keeps the whole tree proportional on every screen.

- **You don't have to care about scaling at all.** You write `Units.Size(150, 150)` and it just works on every screen. There is no scale factor threaded through your layout code and no downscaling of `AbsoluteSize` reads.
- **It scales the whole tree at once.** `Scaling` installs a scale function on the Space, so every widget in the tree scales together through the Space's `ScaleChanged` signal, and the factor is recomputed for you on every resize.
- **It is reactive and reversible.** The installed scale function converts in both directions: `scaleFn(px)` scales a design value up to the screen, and `scaleFn(px, true)` recovers the original design value. That makes it safe to read back design-space numbers without breaking your layout.
- **It respects pixel alignment.** `floorScale` rounds the scale down to an integer so edges and text stay crisp, and `minScale` / `maxScale` clamp the result.

In short: declare a baseline once and forget it.

## How it works

`simpleScale` creates a full-size, non-interactive `Frame` named `ScalingRoot` inside the Space's `LayerCollector`, then watches its `AbsoluteSize`. On every size change it recomputes the scale and, if the scale changed, fires the Space's `ScaleChanged` signal. Widgets listen to that signal to redraw their scaled properties.

The scale function it installs converts pixel values in both directions:

- `scaleFn(px)` — scales a design pixel value up to the current screen.
- `scaleFn(px, true)` — reverses the scale, recovering the original design value.

## Notes

- **One scale function per Space.** `simpleScale` calls `changeScaleFn`, replacing any scale function already installed on the Space. Calling it twice on the same Space replaces the first.
- **The Space must be a real Space.** `simpleScale` expects a Space-like object whose object is a `GuiBase`. Passing anything else errors.
- **Scaling is per-Space.** Each Space scales independently, so a `ScreenSpace` and a `BillboardSpace` can use different reference resolutions.
