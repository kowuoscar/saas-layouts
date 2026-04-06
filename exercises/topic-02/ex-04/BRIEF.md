# Exercise 04 — Medium · Topic 02: Utility fundamentals for SaaS UI

## Objective

Use Tailwind flexbox utilities to build a top navigation bar with a logo on the left, nav links in the center (or right), and a CTA button — the archetypal SaaS nav layout. This exercise deepens your understanding of `flex`, `items-center`, `justify-between`, `gap`, and `flex-1` as tools for distributing space between elements without writing a single line of CSS.

## Materials

### Core flexbox utilities

| Class | CSS |
|---|---|
| `flex` | display: flex |
| `flex-col` | flex-direction: column |
| `items-center` | align-items: center |
| `items-start` | align-items: flex-start |
| `justify-between` | justify-content: space-between |
| `justify-center` | justify-content: center |
| `justify-end` | justify-content: flex-end |
| `flex-1` | flex: 1 1 0% — takes all remaining space |
| `flex-shrink-0` | flex-shrink: 0 — never shrink (icons, logos) |
| `gap-2` | gap: 8px |
| `gap-4` | gap: 16px |
| `gap-6` | gap: 24px |

### Top nav pattern

```tsx
<header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
  {/* Left: Logo */}
  <div className="flex items-center gap-2 flex-shrink-0">
    <div className="h-8 w-8 rounded-md bg-blue-600" />
    <span className="font-semibold text-gray-900">Acme</span>
  </div>

  {/* Center: Nav links */}
  <nav className="flex items-center gap-6">
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Docs</a>
  </nav>

  {/* Right: CTA */}
  <div className="flex items-center gap-3 flex-shrink-0">
    <a href="#" className="text-sm text-gray-600">Sign in</a>
    <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md">
      Get started
    </button>
  </div>
</header>
```

### Why `flex-shrink-0` on logo and CTA?

Without it, when the viewport narrows, flex will shrink the logo and button to make room for the nav links. `flex-shrink-0` pins their size and lets the nav absorb the pressure instead.

### The `flex-1` trick for centering a middle section

```tsx
<header className="flex items-center px-6 py-4">
  <div className="flex-shrink-0">Logo</div>
  <nav className="flex-1 flex justify-center gap-6">Nav</nav>
  <div className="flex-shrink-0">CTA</div>
</header>
```

The middle `flex-1` grows to fill all remaining space, and `justify-center` centers the links within that space — a clean, responsive centering technique.

## Acceptance Criteria

- [ ] A top navigation bar renders with a logo zone on the left, navigation links, and a CTA button on the right
- [ ] The bar uses `flex` and `items-center` to vertically align all children
- [ ] `justify-between` (or the `flex-1` centering trick) is used to distribute the three zones
- [ ] Navigation links use `gap-` to space them rather than `margin` on individual items
- [ ] The logo or icon area uses `flex-shrink-0` to prevent it from compressing
- [ ] The CTA button has appropriate padding (`px-` and `py-`), background color, and rounded corners
- [ ] No custom CSS — all layout is done via Tailwind flexbox utilities

## Constraints

- No inline `style` attributes
- No CSS Grid for this exercise — use Flexbox only (Grid is covered in later topics)
- No third-party UI libraries

## Suggested resources

- https://tailwindcss.com/docs/flex
- https://tailwindcss.com/docs/align-items
- https://tailwindcss.com/docs/justify-content
- https://tailwindcss.com/docs/gap

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
