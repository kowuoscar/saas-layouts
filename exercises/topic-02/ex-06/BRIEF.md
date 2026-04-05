# Exercise 06 — Hard · Topic 02: Utility fundamentals for SaaS UI

## Objective

Build a production-grade SaaS pricing card component using utility composition. This exercise tests whether you can combine spacing, color, typography, border, and flexbox utilities into a polished, reusable UI element — the kind that would pass a design review in a real product. The pricing card is a canonical SaaS pattern that touches every utility category covered in this topic.

## Materials

### Pricing card anatomy

A standard SaaS pricing card has:

```
┌─────────────────────────────┐
│  Plan name (label)          │
│  Price (large number + /mo) │
│  Description (muted text)   │
├─────────────────────────────┤
│  ✓ Feature one              │
│  ✓ Feature two              │
│  ✓ Feature three            │
│  ✓ Feature four             │
├─────────────────────────────┤
│  [Get started →]  (button)  │
└─────────────────────────────┘
```

### Feature list item pattern

```tsx
<li className="flex items-center gap-3 text-sm text-gray-700">
  <svg className="h-4 w-4 flex-shrink-0 text-blue-600" /* checkmark icon */ />
  Feature description
</li>
```

Use an inline SVG checkmark or a simple `✓` character — no icon library.

### Highlighted (popular) card variant

A pricing page typically has three cards: Starter, Pro (highlighted), Enterprise. The "Pro" card stands out:

```tsx
// Regular card
<div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

// Highlighted card
<div className="rounded-2xl border-2 border-blue-600 bg-blue-600 p-8 shadow-xl">
  {/* text colors invert: text-white, text-blue-100 */}
```

### Price display pattern

```tsx
<div className="flex items-baseline gap-1 mt-4">
  <span className="text-4xl font-bold tracking-tight text-gray-900">$49</span>
  <span className="text-sm text-gray-500">/month</span>
</div>
```

Note `items-baseline` — aligns the dollar amount and "/month" on their text baseline, which looks cleaner than `items-center` for mixed font sizes.

### CTA button variants

```tsx
// Standard card button
<button className="w-full mt-8 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
  Get started
</button>

// Highlighted card button (inverted)
<button className="w-full mt-8 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50">
  Get started
</button>
```

## Acceptance Criteria

- [ ] Three pricing cards are rendered side by side using `flex` and `gap-` (or `grid grid-cols-3 gap-6`)
- [ ] Each card has: plan name, price with `/month`, a short description, a feature list (minimum 4 items), and a CTA button
- [ ] The middle ("Pro") card is visually distinguished — different background color, border, or shadow
- [ ] Feature list items are rendered with a checkmark and aligned using `flex items-center gap-`
- [ ] The price uses `items-baseline` alignment between the number and "/month" label
- [ ] The CTA button spans full width (`w-full`) inside the card
- [ ] The component is defined as a TypeScript function component with properly typed props (plan name, price, features array, highlighted boolean)
- [ ] The highlighted card inverts relevant text colors to remain readable on a dark background
- [ ] No custom CSS — all styling via Tailwind utilities

## Constraints

- No inline `style` attributes
- No icon libraries — use inline SVG or Unicode characters for checkmarks
- No third-party UI component libraries
- The component must accept props — no hardcoded content inside the component body

## Suggested resources

- https://tailwindcss.com/docs/align-items (specifically `items-baseline`)
- https://tailwindcss.com/docs/border-width
- https://tailwindcss.com/docs/box-shadow

## Niveau de rigueur

Niveau production. Typage strict, gestion d'erreurs,
bonnes pratiques du framework. Le code doit pouvoir passer une PR review.
