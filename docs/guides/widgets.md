---
title: Widgets
---

# Widgets {#header}

Widgets are the declarative constructors you build your UI out of. Each one maps to a Roblox `GuiObject`.

```luau
PeanutUI.Frame
PeanutUI.TextLabel
PeanutUI.TextButton

PeanutUI.Size
PeanutUI.Unit
```

## Calling convention

Every widget takes an optional props table and an optional children table:

```luau
PeanutUI.Frame(props, children)
```

```luau
PeanutUI.Frame(
    {
        size = PeanutUI.Size(200, 200),
        cornerRadius = { all = PeanutUI.Unit(12) },
    },
    {
        PeanutUI.TextLabel { text = "Hi" },
    }
)
```

The single-table form also works:

```luau
PeanutUI.Frame {
    size = PeanutUI.Size(200, 200),
    children = { PeanutUI.TextLabel { text = "Hi" } },
}
```

::: warning
Passing both `props.children` and a second `children` argument errors.
:::

## Flat props

A widget's props table is **flat**. Each key is classified automatically:

- Keys matching a widget property (`size`, `text`, `backgroundColor`, ...) become properties.
- Keys matching a known event (`Activated`, `InputBegan`, ...) become event handlers.
- Keys matching a modifier (`cornerRadius`, `padding`, `list`, ...) become modifiers.

```luau
PeanutUI.TextButton {
    text = "Click me",
    size = PeanutUI.Size(200, 60),
    cornerRadius = { all = PeanutUI.Unit(12) },
    Activated = function()
        print("clicked")
    end,
}
```

Classification is by name, so a key that is both a property and an event resolves to the event, and a key that is both a property and a modifier resolves to the modifier. In practice the three namespaces don't overlap.

::: tip
Only properties, events, and modifiers can be written flat. Everything else — `children`, `transitions`, `animations`, `onSetup`, `widgetName` — is a reserved key and stays as-is.
:::

## Props

A props table can contain:

| Key | Description |
|---|---|
| *(any property)* | Widget properties (`size`, `backgroundColor`, `text`, ...). |
| *(any modifier)* | Styling and layout modifiers. See [Modifiers](/reference/modifiers/). |
| *(any event)* | Event handlers. |
| `transitions` | Animations that run when a property changes. |
| `animations` | Continuous animations. |
| `children` | Child widgets. Equivalent to the second argument. |
| `onSetup` | `(widget) -> ()` — runs after the widget is set up. |
| `defaultSetupOverride` | `(widget, defaultFn) -> ()` — replaces the default setup; call `defaultFn` to run it. (advanced) |
| `widgetName` | `string` — overrides the widget's name used in logs and errors. |

## Properties

Properties are the widget's own values. They can be plain values or [Refs](/guides/reactive/values):

```luau
PeanutUI.TextLabel {
    text = "Static",
    textSize = 18,
}
```

```luau
const count = PeanutUI.Ref(0)

PeanutUI.TextLabel {
    text = PeanutUI.Computed(function()
        return `Count: {count.value}`
    end),
}
```

See the [widget reference](/reference/widgets/) for the full property list per widget.

## Events

Handlers are written as keys directly on the props table:

```luau
PeanutUI.TextButton {
    text = "Click me",
    Activated = function()
        print("clicked")
    end,
}
```

## Modifiers

Modifiers add styling and layout — corners, padding, strokes, lists:

```luau
PeanutUI.Frame {
    size = PeanutUI.Size(200, 200),
    cornerRadius = { all = PeanutUI.Unit(12) },
    padding = { all = PeanutUI.Unit(16) },
    list = { gap = PeanutUI.Unit(8) },
}
```

See the [modifier reference](/reference/modifiers/) for the full list.

## Children

Children are widgets nested inside. Pass them as the second argument, or as `props.children`:

```luau
PeanutUI.Frame(
    { size = PeanutUI.Size(200, 200) },
    {
        PeanutUI.TextLabel { text = "One" },
        PeanutUI.TextLabel { text = "Two" },
    }
)
```

For reactive children, use [Conditionals & Loops](/guides/reactive/control-flow).

## Widget methods

See [widget reference](/reference/widgets/#methods) for all the methods.
