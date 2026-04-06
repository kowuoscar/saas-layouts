# Exercise 02 — Easy · Topic 02: Utility fundamentals for SaaS UI

## Objective

Apply Tailwind color and border utilities to style text, backgrounds, and borders. You will build a small UI element (a status badge and a notification banner) that demonstrates the color palette system — shades from 50 to 950 — and border styling.

## Materials

### Color naming pattern

Tailwind color utilities follow the pattern `{property}-{color}-{shade}`:

| Class | Effect |
|---|---|
| `text-gray-900` | dark text (headings) |
| `text-gray-600` | muted text (descriptions) |
| `text-gray-400` | placeholder / disabled text |
| `text-blue-600` | primary action text |
| `text-green-600` | success text |
| `text-red-600` | error text |
| `bg-white` | white background |
| `bg-gray-50` | near-white page background |
| `bg-blue-600` | primary button / accent |
| `bg-green-50` | success banner background |
| `bg-red-50` | error banner background |
| `border-gray-200` | subtle divider / card border |
| `border-blue-500` | focused input ring color |

### Status badge pattern

```tsx
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
  Active
</span>
```

### Banner pattern

```tsx
<div className="rounded-md bg-blue-50 p-4 border border-blue-200">
  <p className="text-sm text-blue-800">Info message here.</p>
</div>
```

## Acceptance Criteria

- [ ] A page renders at least three status badges with different color schemes: one for a success state (green), one for a warning state (yellow or amber), one for an error state (red)
- [ ] Each badge uses `bg-{color}-50` for background and `text-{color}-700` for text (the "tinted" pattern common in SaaS UIs)
- [ ] A notification banner is rendered below the badges using a background color, border, and appropriately colored text
- [ ] The page background uses `bg-gray-50` (not plain white)
- [ ] No custom CSS — all colors are applied via Tailwind utilities

## Constraints

- No inline `style` attributes
- No hardcoded hex colors or RGB values
- No third-party UI libraries

## Suggested resources

- https://tailwindcss.com/docs/background-color
- https://tailwindcss.com/docs/text-color
- https://tailwindcss.com/docs/border-color

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
