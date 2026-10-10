---
title: Animations
---

# Animations {#header}

Animations run continuously — they tick every frame and mutate a property over time. They're different from [transitions](/guides/transitions), which run once when a property changes.

```luau
local Animations = PeanutUI.Animations
```

## Built-in animations {#built-in}

| Animation | Description |
|---|---|
| `Animations.Spin(degreePerSecond)` | Rotates continuously. |
| `Animations.Float(distancePx, cyclesPerSecond)` | Oscillates position. |
| `Animations.Swing(degrees, cyclesPerSecond)` | Oscillates rotation. |
| `Animations.PulseSize(scale, cyclesPerSecond)` | Oscillates size. |
| `Animations.PulseNumber(property, min, max, cyclesPerSecond)` | Oscillates a numeric property. |
| `Animations.ColorCycle(property, cyclesPerSecond)` | Cycles a color property through HSV. |
| `Animations.ColorCycleOklch(property, cyclesPerSecond)` | Cycles a color property through Oklch. |

Attach them in the `animations` table:

```luau
Widgets.TextLabel {
    properties = { text = "Spinning" },
    animations = {
        spin = Animations.Spin(120),
        float = Animations.Float(15, 0.3),
    },
}
```
::: tip
The `animations` table's key is just a key you choose, unlike transitions it doesn't have to be a property name. And just writing `animations = { Animations.Spin(120), ... }` is fine too.
:::

## Custom animations {#custom}

`Animations.makeAnimation` builds a custom animation from a `step` function:

```luau
local OffsetGradient = Animations.makeAnimation(
    function(obj: UIGradient, dt: number, state: { t: number })
        state.t += dt
        local PERIOD = 2
        local offset = 0.75 * math.sin(state.t * (2 * math.pi / PERIOD))
        obj.Offset = Vector2.new(offset, 0)
    end,
    {"Offset"},
    function()
        return { t = 0 }
    end
)
```

The three arguments are:

1. **`step(object, dt, state)`** — runs every frame. Mutate `state` and write to the object.
2. **`properties`** — the Roblox property names the animation touches.
3. **`createState(object, scale?)`** — optional. Returns the initial state.

### The `scale` callback {#scale-callback}

`createState` receives an internal `scale` function that converts pixel values to the current [Space](/reference/space)'s scale. Most custom animations can ignore it — it's only needed when animating pixel values that should respect the Space.

## Animation control {#control}

Animations attached to a widget can be controlled imperatively:

```luau
local control = widget.getAnimationControl("spin")
control.stop()
control.animate()
control.isRunning()
```

## Unresolved animations {#unresolved}

Some animations (`PulseNumber`, `ColorCycle`) take a property name that may need remapping. These return an *unresolved* animation, which the widget resolves against its own property names when attached.
