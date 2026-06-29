# HopeWave v3 — SCSS Architecture

## Folder Structure

```
scss/
├── style.scss              ← Main entry point (compile → css/style.css)
├── home.scss               ← Homepage entry point (compile → css/home.css)
│
├── abstracts/              ← No CSS output — pure SCSS tools
│   ├── _variables.scss     ← All design tokens ($green, $teal, $navy…)
│   ├── _functions.scss     ← rem(), tint(), shade(), z(), a()
│   ├── _mixins.scss        ← Reusable patterns (btn-variant, card-base, flex-center…)
│   └── _index.scss         ← Barrel file — @forward all abstracts
│
├── base/                   ← Global defaults
│   ├── _root.scss          ← :root { --green: …; } — CSS custom properties
│   ├── _reset.scss         ← Box-model reset + Google Fonts @import
│   └── _typography.scss    ← h1–h6, .display-*, .section-label, .text-*
│
├── layout/                 ← Page skeleton
│   ├── _layout.scss        ← .container, .grid-*, .section-*, .layout-*
│   ├── _navbar.scss        ← .hw-nav, .hw-links, .hw-drop, .hw-mobile-nav
│   └── _footer.scss        ← .hw-footer, .footer-grid, .color-bar…
│
├── components/             ← Reusable UI blocks
│   ├── _buttons.scss       ← .btn and all colour/size variants
│   ├── _cards.scss         ← Cause, team, blog, event, testimonial, benefit, role, tier…
│   ├── _forms.scss         ← .form-input, .give-tabs, .amount-opt, auth pages
│   └── _sections.scss      ← Stats strip, counter, hero, FAQ, gallery, newsletter,
│                              CTA, pagination, share row, 404, scroll-top…
│
├── pages/                  ← Page-specific styles
│   └── _home.scss          ← idx-hero, v2 magazine layout, v3 editorial + ticker
│
└── utilities/              ← Atomic helpers
    └── _utilities.scss     ← .reveal, .text-*, .bg-*, .mt-*, .mb-*, event colours
```

## Compile Commands

Install Dart Sass globally (if needed):
```bash
npm install -g sass
```

### One-time build
```bash
# From the project root (HopeWaveV3/)
sass scss/style.scss css/style.css
sass scss/home.scss  css/home.css
```

### Compressed output (production)
```bash
sass scss/style.scss css/style.css --style=compressed
sass scss/home.scss  css/home.css  --style=compressed
```

### Watch mode (development)
```bash
sass --watch scss/style.scss:css/style.css scss/home.scss:css/home.css
```

### npm script (add to package.json)
```json
{
  "scripts": {
    "sass":       "sass scss/style.scss:css/style.css scss/home.scss:css/home.css --style=compressed",
    "sass:watch": "sass --watch scss/style.scss:css/style.css scss/home.scss:css/home.css"
  }
}
```

## Design Token Reference

All tokens live in `scss/abstracts/_variables.scss` as SCSS variables
and are mirrored in `scss/base/_root.scss` as CSS custom properties.

| Token         | Value     | Usage                          |
|---------------|-----------|--------------------------------|
| `$green`      | `#1D7A3A` | Primary brand, buttons, bars   |
| `$green-dark` | `#145C2A` | Hover states                   |
| `$green-pale` | `#E8F5EC` | Light backgrounds               |
| `$teal`       | `#16B7CC` | Accent, badges, links           |
| `$red`        | `#C8372D` | All Donate CTAs                 |
| `$gold`       | `#F5A623` | Stars, highlights, numbers      |
| `$navy`       | `#1A2636` | Navbar, dark sections, footer   |

## Key Mixins

```scss
@use '../abstracts' as a;

// Responsive breakpoints
@include a.below-xl { … }  // ≤ 1080px — hamburger breakpoint
@include a.below-md { … }  // ≤ 768px  — stack layouts
@include a.below-sm { … }  // ≤ 480px  — mobile

// Flex helpers
@include a.flex-center(8px);      // centered flex with gap
@include a.flex-between;          // space-between flex

// Buttons
@include a.btn-variant($bg, $color, $bg-hover);

// Card base + hover
@include a.card-base;
@include a.card-hover(-4px);

// Icon badge
@include a.icon-badge(46px, $green, #fff, 20px);

// Label uppercase
@include a.label-uppercase(11px, .14em, $green);

// Fluid type (clamp)
@include a.fluid-type(1.7rem, 3vw, 2.7rem);

// Full cover (position: absolute; inset: 0)
@include a.cover;

// Section padding
@include a.section(lg);  // xl | lg | md | sm
```
