---
title: Quick Start
---

# Quick Start {#header}

This guide gets you from an empty place to a widget on screen.

## Install

Coming Soon...

## Require the library

PeanutUI is a library, so where it lives depends on how you installed it:

- **Manual install** — `ReplicatedStorage.PeanutUI`
- **Wally install** — `ReplicatedStorage.Packages.PeanutUI`

```luau
local ReplicatedStorage = game:GetService("ReplicatedStorage")

-- Manual install
local PeanutUI = require(ReplicatedStorage.PeanutUI)

-- Wally install
local PeanutUI = require(ReplicatedStorage.Packages.PeanutUI)
```

## Create a Space

A [Space](/reference/space) is the renderer root — it is a widget that owns a Roblox `LayerCollector`. `Space.createScreenSpace` creates a `ScreenGui`-backed Space (a `ScreenSpace`), which is what puts your tree on screen:

```luau
local Space = PeanutUI.Space

local space = Space.createScreenSpace("Main")
```

## Set auto scaling (optional)

Will auto scale whole UI using reference resolution. So UI always fits on every screen. See reference [here](/reference/scaling).

```luau
Scaling.simpleScale(
    space,
    Vector2.new(844, 390),
    true
)
```

## Define a component

[Components](/guides/component) are the unit of composition. `Component.defineComponent` wraps a function that returns a root widget, and gives you a lifecycle [bucket](/guides/thinking-in-peanut#definitions) for refs and hooks:

```luau
local Component = PeanutUI.Component
local Widgets = PeanutUI.Widgets
local Units = PeanutUI.Units

local Hello = Component.defineComponent(function(props)
    return Widgets.Frame {
        properties = {
            size = Units.Size(200, 200),
            backgroundColor = Color3.fromRGB(30, 30, 30),
        },
        modifiers = {
            cornerRadius = { all = Units.Unit(12) },
            padding = { all = Units.Unit(16) },
        },
        children = {
            Widgets.TextLabel {
                properties = { text = props.text }
            },
        },
    }
end)
```

## Mount it

Create the component and parent its root widget to the Space with `setParent`:

```luau
local root = Hello({ text = "Hello, PeanutUI!" })

root.setParent(space)
```

That's it — you should see a rounded dark frame with a label inside.

## Next steps

- [Thinking in PeanutUI](/guides/thinking-in-peanut) — the mental model.
- [Widgets](/guides/widgets) — the full widget API.
- [Reactivity](/guides/reactive/values) — make it update.
