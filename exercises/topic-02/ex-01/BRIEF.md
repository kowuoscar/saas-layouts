# Exercise 01 — Easy · Topic 02: Utility fundamentals for SaaS UI

## Objective

Apply Tailwind spacing and sizing utilities to build a centered page container with a simple card inside it. The goal is to internalize the numeric spacing scale (p, m, gap, w, max-w) and understand how Tailwind maps numbers to pixel values.

## Materials

### Spacing scale reminder

| Class     | CSS value                                                  |
| --------- | ---------------------------------------------------------- |
| `p-2`     | padding: 8px                                               |
| `p-4`     | padding: 16px                                              |
| `p-6`     | padding: 24px                                              |
| `p-8`     | padding: 32px                                              |
| `px-6`    | padding-left + padding-right: 24px                         |
| `py-4`    | padding-top + padding-bottom: 16px                         |
| `mb-4`    | margin-bottom: 16px                                        |
| `mx-auto` | margin-left + margin-right: auto (centers a block element) |

### Sizing utilities

| Class          | CSS value         |
| -------------- | ----------------- |
| `w-full`       | width: 100%       |
| `max-w-md`     | max-width: 28rem  |
| `max-w-lg`     | max-width: 32rem  |
| `min-h-screen` | min-height: 100vh |

### Centering pattern

To horizontally center a block with a max-width:

```tsx
<div className='max-w-lg mx-auto'>{/* content */}</div>
```

To center content both axes with flexbox:

```tsx
<div className='flex items-center justify-center min-h-screen'>
  {/* content */}
</div>
```

## Acceptance Criteria

- [ ] A page (`page.tsx`) renders a full-screen centered layout using `min-h-screen` and flexbox centering utilities
- [ ] Inside the layout, a card `<div>` uses `max-w-md` (or `max-w-lg`) and `mx-auto` for horizontal centering
- [ ] The card has visible internal padding using `p-` or `px-`/`py-` utilities (minimum `p-6`)
- [ ] There is a heading and a short paragraph inside the card, separated by a margin utility (`mb-` or `mt-`)
- [ ] No custom CSS is written — all spacing and sizing is done via Tailwind utilities

## Constraints

- No inline `style` attributes
- No external CSS files beyond `globals.css`
- No third-party UI libraries

## Suggested resources

- https://tailwindcss.com/docs/padding
- https://tailwindcss.com/docs/margin
- https://tailwindcss.com/docs/max-width

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
