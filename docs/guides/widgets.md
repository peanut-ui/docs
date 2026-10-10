---
title: Widgets
---

# Widgets {#header}

Widgets are the declarative constructors you build your UI out of. Each one maps to a Roblox `GuiObject`.

```luau
local Widgets = PeanutUI.Widgets
```

## Calling convention

Every widget takes an optional props table and an optional children table:

```luau
Widgets.Frame(props, children)
```

```luau
Widgets.Frame(
    {
        properties = { size = Units.Size(200, 200) },
        modifiers = { cornerRadius = { all = Units.Unit(12) } },
    },
    {
        Widgets.TextLabel { properties = { text = "Hi" } },
    }
)
```

The single-table form also works:

```luau
Widgets.Frame {
    properties = { size = Units.Size(200, 200) },
    children = { Widgets.TextLabel { properties = { text = "Hi" } } },
}
```

::: warning
Passing both `props.children` and a second `children` argument errors.
:::

## Props

A props table can contain:

| Key | Description |
|---|---|
| `properties` | Widget properties (`size`, `backgroundColor`, `text`, ...). |
| `modifiers` | Styling and layout modifiers. See [Modifiers](/reference/modifiers/). |
| `events` | Event handlers. |
| `transitions` | Animations that run when a property changes. |
| `animations` | Continuous animations. |

## Properties

Properties are the widget's own values. They can be plain values or [Refs](/guides/reactive/values):

```luau
Widgets.TextLabel {
    properties = {
        text = "Static",
        textSize = 18,
    }
}
```

```luau
local ref = PeanutUI.ref
local count = ref(0)

Widgets.TextLabel {
    properties = {
        text = Ref.computed(function()
            return `Count: {count.value}`
        end),
    }
}
```

See the [widget reference](/reference/widgets/) for the full property list per widget.

## Events

Handlers go in the `events` table:

```luau
Widgets.TextButton {
    properties = { text = "Click me" },
    events = {
        Activated = function()
            print("clicked")
        end,
    },
}
```

## Modifiers

Modifiers add styling and layout — corners, padding, strokes, lists:

```luau
Widgets.Frame {
    properties = { size = Units.Size(200, 200) },
    modifiers = {
        cornerRadius = { all = Units.Unit(12) },
        padding = { all = Units.Unit(16) },
        list = { gap = Units.Unit(8) },
    },
}
```

See the [modifier reference](/reference/modifiers/) for the full list.

## Children

Children are widgets nested inside. Pass them as the second argument, or as `props.children`:

```luau
Widgets.Frame(
    { properties = { size = Units.Size(200, 200) } },
    {
        Widgets.TextLabel { properties = { text = "One" } },
        Widgets.TextLabel { properties = { text = "Two" } },
    }
)
```

For reactive children, use [Conditionals & Loops](/guides/reactive/control-flow).

## Widget methods

See [widget reference](/reference/widgets/#methods) for all the methods.
