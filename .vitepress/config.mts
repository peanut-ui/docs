import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "PeanutUI Docs",
  description: "Documentation for PeanutUI framework for Roblox",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },

    editLink: {
      pattern: "https://github.com/peanut-ui/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub"
    },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "v0.1.0",
        items: [
          { text: "Changelog", link: "https://github.com/peanut-ui/docs/releases" },
          { text: "Report an issue", link: "https://github.com/peanut-ui/docs/issues" }
        ]
      },
      {
        text: "Guides",
        items: [
          { text: "Quick Start", link: "/guides/quick-start" },
          { text: "Thinking in PeanutUI", link: "/guides/thinking-in-peanut" },
          { text: "Spaces", link: "/guides/spaces" },
          { text: "Widgets", link: "/guides/widgets" },
          { text: "Component", link: "/guides/component" },
          {
            text: "Reactivity",
            items: [
              { text: "Values", link: "/guides/reactive/values" },
              { text: "Computed", link: "/guides/reactive/computed" },
              { text: "Conditionals & Loops", link: "/guides/reactive/control-flow" }
            ]
          },
          { text: "Best Practices", link: "/guides/best-practices" },
          { text: "Animations", link: "/guides/animations" },
          { text: "Transitions", link: "/guides/transitions" }
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "API", link: "/reference/api" },
          { text: "Space", link: "/reference/space" },
          { text: "Units", link: "/reference/units" },
          { text: "Scaling", link: "/reference/scaling" },
          { text: "Scheduler", link: "/reference/scheduler" },
          { text: "Ease Curves", link: "/reference/ease" },
          {
            text: "Widgets",
            items: [
              { text: "Frame", link: "/reference/widgets/frame" },
              { text: "CanvasGroup", link: "/reference/widgets/canvas-group" },
              { text: "ImageLabel", link: "/reference/widgets/image-label" },
              { text: "ImageButton", link: "/reference/widgets/image-button" },
              { text: "TextLabel", link: "/reference/widgets/text-label" },
              { text: "TextButton", link: "/reference/widgets/text-button" },
              { text: "TextBox", link: "/reference/widgets/text-box" },
              { text: "ScrollingFrame", link: "/reference/widgets/scrolling-frame" },
              { text: "ViewportFrame", link: "/reference/widgets/viewport-frame" },
              { text: "VideoFrame", link: "/reference/widgets/video-frame" }
            ]
          },
          {
            text: "Modifiers",
            items: [
              { text: "Flex", link: "/reference/modifiers/flex" },
              { text: "CornerRadius", link: "/reference/modifiers/corner-radius" },
              { text: "Padding", link: "/reference/modifiers/padding" },
              { text: "Stroke", link: "/reference/modifiers/stroke" },
              { text: "Gradient", link: "/reference/modifiers/gradient" },
              { text: "Shadow", link: "/reference/modifiers/shadow" },
              { text: "List", link: "/reference/modifiers/list" },
              { text: "Grid", link: "/reference/modifiers/grid" },
              { text: "Table", link: "/reference/modifiers/table" },
              { text: "AspectRatio", link: "/reference/modifiers/aspect-ratio" },
              { text: "SizeConstraint", link: "/reference/modifiers/size-constraint" },
              { text: "TextSizeConstraint", link: "/reference/modifiers/text-size-constraint" },
              { text: "Scale", link: "/reference/modifiers/scale" }
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: "Guides",
        items: [
          // How to start quickly :3
          { text: "Quick Start", link: "/guides/quick-start" },
          // Yk
          { text: "Thinking in PeanutUI", link: "/guides/thinking-in-peanut" },
          // Quick guide about spaces and code examples
          { text: "Spaces", link: "/guides/spaces" },
          // Quick guide about widgets and code examples
          { text: "Widgets", link: "/guides/widgets" },
          // Component and its lifecycle
          { text: "Component", link: "/guides/component" },
          {
            text: "Reactivity",
            collapsed: false,
            items: [
              // ref, reactive and other primitives
              { text: "Values", link: "/guides/reactive/values" },
              // Computed value
              { text: "Computed", link: "/guides/reactive/computed" },
              // If, For, and ReactiveFor. And examples.
              { text: "Conditionals & Loops", link: "/guides/reactive/control-flow" }
            ]
          },
          // Best practices yeah
          { text: "Best Practices", link: "/guides/best-practices" },
          // Continuous animations
          { text: "Animations", link: "/guides/animations" },
          // Animations on change
          { text: "Transitions", link: "/guides/transitions" },
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "API", link: "/reference/api" },
          { text: "Space", link: "/reference/space" },
          { text: "Units", link: "/reference/units" },
          { text: "Scaling", link: "/reference/scaling" },
          { text: "Scheduler", link: "/reference/scheduler" },
          { text: "Ease Curves", link: "/reference/ease" },
          {
            text: "Widgets",
            collapsed: true,
            link: "/reference/widgets/",
            items: [
              { text: "Frame", link: "/reference/widgets/frame" },
              { text: "CanvasGroup", link: "/reference/widgets/canvas-group" },
              { text: "ImageLabel", link: "/reference/widgets/image-label" },
              { text: "ImageButton", link: "/reference/widgets/image-button" },
              { text: "TextLabel", link: "/reference/widgets/text-label" },
              { text: "TextButton", link: "/reference/widgets/text-button" },
              { text: "TextBox", link: "/reference/widgets/text-box" },
              { text: "ScrollingFrame", link: "/reference/widgets/scrolling-frame" },
              { text: "ViewportFrame", link: "/reference/widgets/viewport-frame" },
              { text: "VideoFrame", link: "/reference/widgets/video-frame" }
            ]
          },
          {
            text: "Modifiers",
            collapsed: true,
            link: "/reference/modifiers/",
            items: [
              { text: "Flex", link: "/reference/modifiers/flex" },
              { text: "CornerRadius", link: "/reference/modifiers/corner-radius" },
              { text: "Padding", link: "/reference/modifiers/padding" },
              { text: "Stroke", link: "/reference/modifiers/stroke" },
              { text: "Gradient", link: "/reference/modifiers/gradient" },
              { text: "Shadow", link: "/reference/modifiers/shadow" },
              { text: "List", link: "/reference/modifiers/list" },
              { text: "Grid", link: "/reference/modifiers/grid" },
              { text: "Table", link: "/reference/modifiers/table" },
              { text: "AspectRatio", link: "/reference/modifiers/aspect-ratio" },
              { text: "SizeConstraint", link: "/reference/modifiers/size-constraint" },
              { text: "TextSizeConstraint", link: "/reference/modifiers/text-size-constraint" },
              { text: "Scale", link: "/reference/modifiers/scale" }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/peanut-ui" }
    ]
  }
})
