---
title: Conditionals & Loops
---

# Conditionals & Loops {#header}

`If`, `For`, and `ReactiveFor` build children reactively. They live in the `ControlFlow` module and are re-exported on `Component`.

```luau
local Component = PeanutUI.Component
local If = Component.If
local For = Component.For
local ReactiveFor = Component.ReactiveFor
```

## If

`If` picks a branch based on a condition, which can be a plain boolean or a ref:

```luau
If(condition, function()
    return Widgets.TextLabel { properties = { text = "Yes" } }
end).End()
```

Chain `ElseIf` and `Else`, then call `End()`:

```luau
If(Ref.isEqual(count, 1), function()
    return Widgets.TextLabel { properties = { text = "One" } }
end)
.ElseIf(Ref.isEqual(count, 2), function()
    return Widgets.TextLabel { properties = { text = "Two" } }
end)
.Else(function()
    return Widgets.TextLabel { properties = { text = "Many" } }
end)
.End()
```

When the condition changes, the branch is swapped automatically — the old widget is destroyed and the new one created.

::: tip
For **static** values better use `if value then Widgets.TextLabel else nil`.
:::

::: warning
Do not use `If` for **frequently** changed values because it re-creates the whole widget and Roblox `Instance` because it may cause performance issues. Alternatively use `visible` property of widgets with [computed](/guides/reactive/computed) or [isEqual](/guides/reactive/values#is-equal)
:::

## For

`For` loops over a **static** table and creates a widget per item:

```luau
For({ "a", "b", "c" }, function(value, index)
    return Widgets.TextLabel {
        properties = { text = value }
    }
end)
```

## ReactiveFor {#reactive-for}

`ReactiveFor` loops over a **reactive** table and updates as it changes:

```luau
local items = Ref.reactive({ "a", "b" }, true)

ReactiveFor(items, function(value)
    return Widgets.TextLabel {
        properties = { text = value }
    }
end, function(value, index)
    return value   -- key
end)
```

The third argument is a **key function** — it maps each item to a stable key so widgets are reused rather than recreated when the list changes.

::: warning
`ReactiveFor` requires a reactive table. Passing a plain table errors — use `For` for static tables, or wrap the table in [reactive](/guides/reactive/values#reactive).
:::

::: tip
Use a **shallow** reactive table for `ReactiveFor` so nested tables don't cause unnecessary recalculations.
:::

## Using them in children {#usage}

These return a `Box` widget, so they slot straight into a `children` list:

```luau
Widgets.Frame(
    { properties = { size = Units.Size(200, 200) } },
    {
        Widgets.TextLabel { properties = { text = "Header" } },
        If(Ref.isEqual(count, 0), function()
            return Widgets.TextLabel { properties = { text = "Empty" } }
        end).End(),
        For(items, function(value)
            return Widgets.TextLabel { properties = { text = value } }
        end),
    }
)
```
