import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "PeanutUI Docs",
  description: "Documentation for PeanutUI framework for Roblox",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],

    sidebar: [
      {
        text: "Guides",
        items: [
          { text: "Quick Start", link: "/guides/quick-start" },
          { text: "Thinking in PeanutUI", link: "/guides/thinking-in-peanut" },
          { text: "Code Style", link: "/guides/code-style" },
          { text: "Spaces", link: "/guides/spaces" },
          { text: "Widgets", link: "/guides/widgets" },
          { text: "Component", link: "/guides/component" },
          {
            text: "Reactivity",
            collapsed: false,
            items: [
              { text: "Values", link: "/guides/reactive/values" },
              { text: "Computed", link: "/guides/reactive/computed" },
              { text: "Conditionals & Loops", link: "/guides/reactive/control-flow" }
            ]
          },
          { text: "Best Practices", link: "/guides/best-practices" },
          { text: "Animations", link: "/guide/animations" },
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "API", link: "/reference/api" },
          { text: "Units", link: "/reference/units" },
          {
            text: "Widgets",
            collapsed: true,
            link: "/reference/widgets/index",
            items: [
              // TODO
            ]
          },
          {
            text: "Modifiers",
            collapsed: true,
            link: "/reference/modifiers/index",
            items: [
              // TODO
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
