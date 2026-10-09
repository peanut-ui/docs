---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PeanutUI"
  text: "Framework for Roblox"
  tagline: Peanut-sized API, production-sized UI.
  actions:
    - theme: brand
      text: Quick Start
      link: /guides/quick-start
    - theme: alt
      text: API Reference
      link: /reference/api

features:
  - title: Declarative widgets
    details: Compose UI with callable constructors like Widgets.Frame { ... }. No manual instance wiring.
  - title: Reactive by default
    details: Refs, computed values, and reactive tables drive your UI. Changes flow through the Scheduler, not straight to instances.
  - title: Stable API
    details: The framework's API won't introduce breaking changes whenever is possible. When needed features are going to be just marked deprecated.
  - title: Reactive units
    details: Units.Size, Units.Position, and Units.Unit replace UDim2 and UDim with per-component scaling and ref-driven updates.
  - title: Responsive scaling
    details: Declare a reference resolution once and Scaling keeps the whole tree proportional on every screen.
  - title: Animations & transitions
    details: Continuous animations and on-change transitions, with a full library of easing curves and spring physics.
---

