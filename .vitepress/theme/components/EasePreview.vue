<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: { type: Number, default: 56 },
  width: { type: Number, default: 220 },
  columns: { type: Number, default: 3 }
})

const PI = Math.PI
const HALF_PI = PI / 2

const curves = {
  EaseInQuad: (t) => t * t,
  EaseOutQuad: (t) => 1 - (1 - t) ** 2,
  EaseInOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2),
  EaseInCubic: (t) => t ** 3,
  EaseOutCubic: (t) => 1 - (1 - t) ** 3,
  EaseInOutCubic: (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2),
  EaseInQuart: (t) => t ** 4,
  EaseOutQuart: (t) => 1 - (1 - t) ** 4,
  EaseInOutQuart: (t) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2),
  EaseInQuint: (t) => t ** 5,
  EaseOutQuint: (t) => 1 - (1 - t) ** 5,
  EaseInOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2),
  EaseInSine: (t) => 1 - Math.cos(t * HALF_PI),
  EaseOutSine: (t) => Math.sin(t * HALF_PI),
  EaseInOutSine: (t) => -(Math.cos(PI * t) - 1) / 2,
  EaseInExpo: (t) => (t === 0 ? 0 : 2 ** (10 * t - 10)),
  EaseOutExpo: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
  EaseInOutExpo: (t) => {
    if (t === 0 || t === 1) return t
    return t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2
  },
  EaseInCirc: (t) => 1 - Math.sqrt(1 - t * t),
  EaseOutCirc: (t) => Math.sqrt(1 - (t - 1) ** 2),
  EaseInOutCirc: (t) =>
    t < 0.5
      ? (1 - Math.sqrt(1 - (2 * t) ** 2)) / 2
      : (Math.sqrt(1 - (-2 * t + 2) ** 2) + 1) / 2,
  EaseInBack: (t) => 2.70158 * t ** 3 - 1.70158 * t ** 2,
  EaseOutBack: (t) => {
    const x = t - 1
    return 1 + 2.70158 * x ** 3 + 1.70158 * x ** 2
  },
  EaseInOutBack: (t) => {
    const c = 1.70158 * 1.525
    if (t < 0.5) {
      const x = 2 * t
      return (x ** 2 * ((c + 1) * x - c)) / 2
    }
    const x = 2 * t - 2
    return (x ** 2 * ((c + 1) * x + c) + 2) / 2
  },
  EaseInElastic: (t) => {
    if (t === 0 || t === 1) return t
    return -(2 ** (10 * t - 10)) * Math.sin((t * 10 - 10.75) * ((2 * PI) / 3))
  },
  EaseOutElastic: (t) => {
    if (t === 0 || t === 1) return t
    return 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * ((2 * PI) / 3)) + 1
  },
  EaseInOutElastic: (t) => {
    if (t === 0 || t === 1) return t
    if (t < 0.5) {
      return -(2 ** (20 * t - 10) * Math.sin((20 * t - 11.125) * ((2 * PI) / 4.5))) / 2
    }
    return (2 ** (-20 * t + 10) * Math.sin((20 * t - 11.125) * ((2 * PI) / 4.5))) / 2 + 1
  },
  EaseOutBounce: (t) => {
    const n1 = 7.5625
    const d1 = 2.75
    if (t < 1 / d1) return n1 * t * t
    if (t < 2 / d1) {
      t -= 1.5 / d1
      return n1 * t * t + 0.75
    }
    if (t < 2.5 / d1) {
      t -= 2.25 / d1
      return n1 * t * t + 0.9375
    }
    t -= 2.625 / d1
    return n1 * t * t + 0.984375
  },
  EaseInBounce: (t) => 1 - curves.EaseOutBounce(1 - t),
  EaseInOutBounce: (t) =>
    t < 0.5
      ? (1 - curves.EaseOutBounce(1 - 2 * t)) / 2
      : (1 + curves.EaseOutBounce(2 * t - 1)) / 2
}

const cubicBezier = (x1, y1, x2, y2) => (x) => {
  if (x === 0 || x === 1) return x
  const sampleX = (t) => {
    const omt = 1 - t
    return 3 * omt * omt * t * x1 + 3 * omt * t * t * x2 + t * t * t
  }
  const sampleY = (t) => {
    const omt = 1 - t
    return 3 * omt * omt * t * y1 + 3 * omt * t * t * y2 + t * t * t
  }
  let low = 0
  let high = 1
  for (let i = 0; i < 12; i++) {
    const middle = (low + high) / 2
    if (sampleX(middle) < x) low = middle
    else high = middle
  }
  return sampleY((low + high) / 2)
}

curves.EaseIn = cubicBezier(0.42, 0, 1, 1)
curves.EaseOut = cubicBezier(0, 0, 0.58, 1)
curves.EaseInOut = cubicBezier(0.42, 0, 0.58, 1)
curves.Ease = cubicBezier(0.25, 0.1, 0.25, 1)
curves.Linear = (t) => t

const names = Object.keys(curves)

const range = (fn) => {
  let min = Infinity
  let max = -Infinity
  for (let i = 0; i <= 64; i++) {
    const v = fn(i / 64)
    if (v < min) min = v
    if (v > max) max = v
  }
  return { min, max }
}

const ranges = Object.fromEntries(names.map((name) => [name, range(curves[name])]))

const path = (fn, name) => {
  const steps = 48
  const { min, max } = ranges[name]
  const span = max - min || 1
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = t * props.width
    const y = (1 - (fn(t) - min) / span) * props.height
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
  }
  return pts.join(' ')
}

const viewHeight = computed(() => props.height)

const guideY = (name, value) => {
  const { min, max } = ranges[name]
  const span = max - min || 1
  return (1 - (value - min) / span) * props.height
}
</script>

<template>
  <div class="ease-grid" :style="{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }">
    <div v-for="name in names" :key="name" class="ease-card">
      <div class="ease-card__label">{{ name }}</div>
      <svg
        class="ease-card__svg"
        :viewBox="`0 0 ${width} ${viewHeight}`"
        :width="width"
        :height="viewHeight"
        preserveAspectRatio="none"
      >
        <rect
          class="ease-card__band"
          :x="0"
          :y="0"
          :width="width"
          :height="height"
        />
        <line
          class="ease-card__axis"
          :x1="0"
          :y1="height"
          :x2="width"
          :y2="height"
        />
        <line
          class="ease-card__axis"
          :x1="0"
          :y1="0"
          :x2="0"
          :y2="height"
        />
        <line
          class="ease-card__guide"
          :x1="0"
          :y1="guideY(name, 0)"
          :x2="width"
          :y2="guideY(name, 0)"
        />
        <line
          class="ease-card__guide"
          :x1="0"
          :y1="guideY(name, 1)"
          :x2="width"
          :y2="guideY(name, 1)"
        />
        <path class="ease-card__curve" :d="path(curves[name], name)" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.ease-grid {
  display: grid;
  gap: 12px;
  margin: 16px 0;
}

.ease-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
}

.ease-card__label {
  font-size: 12px;
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.ease-card__svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.ease-card__axis {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}

.ease-card__band {
  fill: var(--vp-c-bg);
  opacity: 0.5;
}

.ease-card__guide {
  stroke: var(--vp-c-text-3);
  stroke-width: 1;
  stroke-dasharray: 3 3;
  opacity: 0.6;
}

.ease-card__curve {
  fill: none;
  stroke: var(--vp-c-brand-1);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
