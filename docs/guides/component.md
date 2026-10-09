---
title: Component
---

# Component {#header}

A component is a function that returns a widget, with lifecycle hooks attached. Components are how you package reusable UI.

```luau
local Component = PeanutUI.Component
```

## Defining a component {#define}

`Component.defineComponent` takes a function that receives props and returns a widget:

```luau
local Counter = Component.defineComponent(function(props: { start: number })
    local count = Ref.new(props.start)

    return Widgets.TextLabel {
        properties = {
            text = Ref.computed(function()
                return `Count: {count.value}`
            end),
        },
    }
end)
```

Call it like a function:

```luau
local counter = Counter({ start = 0 })
```

## Lifecycle hooks

Hooks must be called **while the component is being defined** — inside the `defineComponent` function body.

| Hook | When it runs |
|---|---|
| `Component.onSetup(fn)` | After the component function creates its widget. Receives the root widget. |
| `Component.onCreated(fn)` | When the Roblox GUI object is created. Receives the object. |
| `Component.onBeforeDestroyed(fn)` | Before destruction. Widget and object still available. |
| `Component.onDestroyed(fn)` | After destruction. Widget, refs, and object are gone. |

```luau
local Test = Component.defineComponent(function(props: { test: string })
    Component.onSetup(function(widget)
        print("Widget setup!")
    end)

    Component.onCreated(function(object)
        print("Roblox object created!")
    end)

    Component.onBeforeDestroyed(function()
        print("Cleaning up!")
    end)

    Component.onDestroyed(function()
        print("Widget is dead...")
    end)

    return Widgets.TextLabel {
        properties = { text = props.test }
    }
end)
```

## Ref ownership

Refs created inside a component belong to that component's lifecycle. When the component is destroyed, its refs are destroyed too.

::: warning
Do not pass refs created inside a component to places outside it — they'll be destroyed with the component. Refs created **outside** the component and passed in through props are fine.

Passing refs to **children** is okay if they're **never re-parented**.
:::

## Reactive props

You can pass a reactive table as props and read individual fields with `Ref.toRef`:

```luau
local props = Ref.reactive({ test = "Hello" })

local Test = Component.defineComponent(function(props)
    local test = Ref.toRef(props, "test")

    return Widgets.TextLabel {
        properties = {
            text = Ref.computed(function()
                return test.value
            end),
        },
    }
end)
```

Mutating `props.test` updates the component.

## Stories

`Component.makeStory` defines a story for FlipBook/UILabs

```luau
local story = Component.makeStory(function()
    return Counter({ start = 0 })
end)
```

Stories are useful when you want to preview your components without play-testing.
`makeStory` just returns a function, if you need more advanced functional that UILabs provides, you will have to implement it yourself, and there's Space specifically for stories that is made using `Space.createStorySpace(frame)`.
