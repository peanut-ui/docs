---
title: Component
---

# Component {#header}

A component is a function that returns a widget, with lifecycle hooks attached. Components are how you package reusable UI.

```luau
PeanutUI.defineComponent
PeanutUI.onSetup
PeanutUI.onCreated
PeanutUI.onBeforeDestroyed
PeanutUI.onDestroyed
PeanutUI.makeStory

PeanutUI.TextLabel
PeanutUI.Ref
PeanutUI.Computed
PeanutUI.Reactive
PeanutUI.toRef
```

## Defining a component {#define}

`PeanutUI.defineComponent` takes a function that receives props and returns a widget:

```luau
const Counter = PeanutUI.defineComponent(function(props: { start: number })
    const count = PeanutUI.Ref(props.start)

    return PeanutUI.TextLabel {
        text = PeanutUI.Computed(function()
            return `Count: {count.value}`
        end),
    }
end)
```

Call it like a function:

```luau
const counter = Counter({ start = 0 })
```

## Lifecycle hooks

Hooks must be called **while the component is being defined** — inside the `defineComponent` function body.

| Hook | When it runs |
|---|---|
| `PeanutUI.onSetup(fn)` | After the component function creates its widget. Receives the root widget. |
| `PeanutUI.onCreated(fn)` | When the Roblox GUI object is created. Receives the object. |
| `PeanutUI.onBeforeDestroyed(fn)` | Before destruction. Widget and object still available. |
| `PeanutUI.onDestroyed(fn)` | After destruction. Widget, refs, and object are gone. |

```luau
const Test = PeanutUI.defineComponent(function(props: { test: string })
    PeanutUI.onSetup(function(widget)
        print("Widget setup!")
    end)

    PeanutUI.onCreated(function(object)
        print("Roblox object created!")
    end)

    PeanutUI.onBeforeDestroyed(function()
        print("Cleaning up!")
    end)

    PeanutUI.onDestroyed(function()
        print("Widget is dead...")
    end)

    return PeanutUI.TextLabel {
        text = props.test
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

You can pass a reactive table as props and read individual fields with `PeanutUI.toRef`:

```luau
const props = PeanutUI.Reactive({ test = "Hello" })

const Test = PeanutUI.defineComponent(function(props)
    const test = PeanutUI.toRef(props, "test")

    return PeanutUI.TextLabel {
        text = PeanutUI.Computed(function()
            return test.value
        end),
    }
end)
```

Mutating `props.test` updates the component.

## Stories

`PeanutUI.makeStory` defines a story for FlipBook/UILabs:

```luau
const story = PeanutUI.makeStory(function()
    return Counter({ start = 0 })
end)
```

Stories are useful when you want to preview your components without play-testing.
`makeStory` just returns a function, if you need more advanced functional that UILabs provides, you will have to implement it yourself, and there's Space specifically for stories that is made using `Space.createStorySpace(frame)`.
