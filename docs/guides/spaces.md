---
title: Spaces
---

# Spaces {#header}

A [Space](/reference/space) is the renderer root. It wraps a Roblox `LayerCollector` — `ScreenGui`, `BillboardGui`, or `SurfaceGui` — and is what actually puts your widget tree on screen.

Every widget tree needs a Space to live in.

## Creating a Space

Spaces are registered by name. Creating two with the same name errors.

### Screen space

For regular 2D UI, parented to the local player's `PlayerGui`:

```luau
local Space = PeanutUI.Space

local screen = Space.createScreenSpace("Main", {
    displayOrder = 1,
    ignoreGuiInset = true,
})
```

### Billboard space

For UI that floats in 3D space:

```luau
local billboard = Space.createBillboardSpace("HealthBar", {
    adornee = somePart,
    size = Units.Size(200, 50),
})
```

### Surface space

For UI rendered on a part's face:

```luau
local surface = Space.createSurfaceSpace("Sign", {
    adornee = somePart,
    face = Enum.NormalId.Front,
})
```

## Mounting widgets

Add your root widget to the Space:

```luau
screen.addChild(root)
```

You can also remove and clear children:

```luau
screen.removeChild(root)
screen.clearChildren()
```

## Looking up a Space

If you need a Space you created earlier, look it up by name:

```luau
local screen = Space.getScreenSpace("Main")
```

## Scaling

A Space owns the scale function that converts pixel values into the Space's scale, so a single Space can scale its whole tree:

```luau
screen.changeScaleFn(function(px, getOriginal)
    return px * 2
end)
```

## Properties

Each Space type has its own properties — see the [Space reference](/reference/space) for the full list.

## Events

Spaces support lifecycle events:

```luau
screen.listen("ChildAdded", function(child)
    print("Added:", child)
end)
```

See the [Space reference](/reference/space#events) for the full event list.
