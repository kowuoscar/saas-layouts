# Exercise 03 — Medium · Topic 02: Utility fundamentals for SaaS UI

## Objective

Use Tailwind typography utilities to build a styled hero text block with clear visual hierarchy: a main heading, a subtitle, a body paragraph, and a label. This exercise trains you to control font size, weight, line height, letter spacing, and text truncation — the tools you reach for every time you build a SaaS page header or card title.

## Materials

### Typography scale

| Class | font-size / line-height |
|---|---|
| `text-xs` | 12px / 16px |
| `text-sm` | 14px / 20px |
| `text-base` | 16px / 24px |
| `text-lg` | 18px / 28px |
| `text-xl` | 20px / 28px |
| `text-2xl` | 24px / 32px |
| `text-3xl` | 30px / 36px |
| `text-4xl` | 36px / 40px |

### Font weight

| Class | weight |
|---|---|
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |

### Letter spacing

| Class | tracking |
|---|---|
| `tracking-tight` | -0.025em (use on large headings) |
| `tracking-normal` | 0 |
| `tracking-wide` | 0.025em |
| `tracking-widest` | 0.1em (use on uppercase labels) |

### Overflow & line clamping

```
truncate        → white-space: nowrap; overflow: hidden; text-overflow: ellipsis
line-clamp-2    → clamps to 2 lines with ellipsis
line-clamp-3    → clamps to 3 lines with ellipsis
```

### SaaS hero heading pattern

```tsx
<div className="max-w-2xl">
  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
    New in v2.0
  </p>
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
    The dashboard your team has been waiting for
  </h1>
  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
    Everything in one place — metrics, alerts, and team activity.
    Designed to reduce noise and surface what matters.
  </p>
</div>
```

## Acceptance Criteria

- [ ] A page renders a hero text block with four distinct typographic levels: uppercase label, main heading (h1), subtitle (h2 or p), body paragraph
- [ ] The heading uses `text-3xl` or larger, `font-bold`, and `tracking-tight`
- [ ] The label uses `uppercase` and `tracking-widest`
- [ ] The body paragraph uses `leading-relaxed` for comfortable reading
- [ ] A secondary text element (e.g., a long card title) uses `truncate` or `line-clamp-2` to handle overflow
- [ ] All four levels use distinct `text-gray-*` shades to create hierarchy without color
- [ ] No custom CSS — all typography is done via Tailwind utilities

## Constraints

- No inline `style` attributes
- No hardcoded font sizes in pixels
- No third-party UI libraries

## Suggested resources

- https://tailwindcss.com/docs/font-size
- https://tailwindcss.com/docs/font-weight
- https://tailwindcss.com/docs/letter-spacing
- https://tailwindcss.com/docs/line-clamp

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
