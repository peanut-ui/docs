---
title: Conditionals & Loops
---

# Conditionals & Loops {#header}

`If`, `For`, and `ReactiveFor` build children reactively. They are exported directly from PeanutUI.

```luau
PeanutUI.If
PeanutUI.For
PeanutUI.ReactiveFor
PeanutUI.Lazy
```

## If

`If` picks a branch based on a condition, which can be a plain boolean or a ref:

```luau
PeanutUI.If(condition, function()
    return PeanutUI.TextLabel { text = "Yes" }
end).End()
```

Chain `ElseIf` and `Else`, then call `End()`:

```luau
PeanutUI.If(PeanutUI.isEqual(count, 1), function()
    return PeanutUI.TextLabel { text = "One" }
end)
.ElseIf(PeanutUI.isEqual(count, 2), function()
    return PeanutUI.TextLabel { text = "Two" }
end)
.Else(function()
    return PeanutUI.TextLabel { text = "Many" }
end)
.End()
```

When the condition changes, the branch is swapped automatically — the old widget is destroyed and the new one created.

::: tip
For **static** values better use `if value then PeanutUI.TextLabel() else nil`.
:::

::: warning
Do not use `If` for **frequently** changed values because it re-creates the whole widget and Roblox `Instance` because it may cause performance issues. Alternatively use `visible` property of widgets with [computed](/guides/reactive/computed) or [isEqual](/guides/reactive/values#is-equal)
:::

## For

`For` loops over a **static** table and creates a widget per item:

```luau
PeanutUI.For({ "a", "b", "c" }, function(value, index)
    return PeanutUI.TextLabel {
        text = value
    }
end)
```

## ReactiveFor {#reactive-for}

`ReactiveFor` loops over a **reactive** table and updates as it changes:

```luau
const items = PeanutUI.Reactive({ "a", "b" }, true)

PeanutUI.ReactiveFor(items, function(value)
    return PeanutUI.TextLabel {
        text = value
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

## Lazy {#lazy}

`Lazy` defers widget creation until the Roblox tree is being built — when widgets become visible to the user. The `createFn` is not called when the `Box` is built; it runs later, and the resulting widget is added and created then.

```luau
PeanutUI.Lazy(function()
    return PeanutUI.TextLabel { text = "Created later" }
end)
```

Use it to keep expensive widget construction off the initial build path, or to create children only once the surrounding tree is being built. It returns a `Box` widget, so it slots into a `children` list like the other control-flow helpers.

The most common case is an **invisible widget tree**: when a subtree starts hidden, you don't want to build it before it's actually shown. Wrap the subtree in `Lazy` so its widgets aren't created until the tree is being built, rather than eagerly on the initial build.

## Using them in children {#usage}

These return a `Box` widget, so they slot straight into a `children` list:

```luau
PeanutUI.Frame(
    { size = PeanutUI.Size(200, 200) },
    {
        PeanutUI.TextLabel { text = "Header" },
        PeanutUI.If(PeanutUI.isEqual(count, 0), function()
            return PeanutUI.TextLabel { text = "Empty" }
        end).End(),
        PeanutUI.For(items, function(value)
            return PeanutUI.TextLabel { text = value }
        end),
    }
)
```
