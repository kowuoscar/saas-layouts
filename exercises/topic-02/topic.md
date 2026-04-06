# Topic 02: Utility fundamentals for SaaS UI

Master the core Tailwind spacing, color, typography, and sizing utilities that form the visual vocabulary of every SaaS interface.

## Concepts covered

### 1. The utility-first mental model

Tailwind CSS does not provide components — it provides single-purpose utility classes that you compose directly in your HTML/JSX. Instead of writing `.card { padding: 1.5rem; background: white; }` in a stylesheet, you write `className="p-6 bg-white"` on the element itself.

This feels verbose at first. It becomes fast once you internalize the naming system.

### 2. Spacing scale — `p`, `m`, `gap`

Tailwind uses a numeric scale where each unit equals 4px:

| Class | Value |
|---|---|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-4` | 16px |
| `p-6` | 24px |
| `p-8` | 32px |
| `p-12` | 48px |
| `p-16` | 64px |

Directional variants: `pt-` (top), `pb-` (bottom), `pl-` (left), `pr-` (right), `px-` (horizontal), `py-` (vertical).

Same scale applies to `m-`, `mx-`, `my-`, `mt-`, `mb-`, `ml-`, `mr-`.

In flex/grid containers, `gap-` controls space between children.

```tsx
<div className="px-6 py-4 mb-8">
  <p className="mt-2">Content</p>
</div>
```

### 3. Sizing utilities — `w`, `h`, `max-w`, `min-h`

```
w-full      → width: 100%
w-1/2       → width: 50%
w-64        → width: 256px (64 × 4px)
max-w-sm    → max-width: 24rem
max-w-md    → max-width: 28rem
max-w-lg    → max-width: 32rem
max-w-xl    → max-width: 36rem
max-w-2xl   → max-width: 42rem
max-w-7xl   → max-width: 80rem  ← common SaaS page container width
h-screen    → height: 100vh
min-h-screen → min-height: 100vh
```

### 4. Color system — text, bg, border

Tailwind ships with a full color palette. Each color has shades from 50 (lightest) to 950 (darkest).

```
text-gray-900    → dark text for headings
text-gray-600    → muted text for descriptions
text-blue-600    → primary action color
bg-white         → card background
bg-gray-50       → page background (slightly off-white)
bg-blue-600      → primary button
border-gray-200  → subtle card border
```

In Tailwind CSS 4, colors are still available as utilities. You can also define custom colors using `@theme` (covered in Topic 01 ex-05).

### 5. Typography utilities

| Utility | Controls |
|---|---|
| `text-xs` → `text-9xl` | font-size + line-height |
| `font-normal`, `font-medium`, `font-semibold`, `font-bold` | font-weight |
| `leading-tight`, `leading-normal`, `leading-relaxed` | line-height override |
| `tracking-tight`, `tracking-normal`, `tracking-wide` | letter-spacing |
| `truncate` | single-line overflow ellipsis |
| `line-clamp-2` | multi-line clamp |
| `uppercase`, `capitalize` | text-transform |
| `text-left`, `text-center`, `text-right` | text-align |

SaaS heading pattern:
```tsx
<h1 className="text-3xl font-bold tracking-tight text-gray-900">
  Dashboard
</h1>
<p className="mt-1 text-sm text-gray-500">
  Welcome back, here's what's happening.
</p>
```

### 6. Flexbox utilities

Flexbox is the backbone of SaaS UI layout at the component level.

```
flex            → display: flex
flex-col        → flex-direction: column
items-center    → align-items: center
items-start     → align-items: flex-start
justify-between → justify-content: space-between
justify-center  → justify-content: center
flex-1          → flex: 1 1 0% (takes remaining space)
flex-shrink-0   → prevents shrinking (for icons, avatars)
gap-4           → gap: 16px between children
```

Common SaaS nav row:
```tsx
<div className="flex items-center justify-between px-6 py-4">
  <span className="font-semibold text-gray-900">Logo</span>
  <nav className="flex items-center gap-4">
    <a className="text-sm text-gray-600">Docs</a>
    <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md">
      Sign in
    </button>
  </nav>
</div>
```

### 7. Border & rounding utilities

```
border          → 1px solid
border-2        → 2px solid
border-gray-200 → color
rounded         → border-radius: 4px
rounded-md      → border-radius: 6px
rounded-lg      → border-radius: 8px
rounded-full    → border-radius: 9999px (pills, avatars)
ring-2          → box-shadow ring (for focus states)
ring-blue-500   → ring color
```

### 8. Shadow & opacity

```
shadow-sm       → subtle card shadow
shadow          → standard elevation
shadow-md       → medium elevation
shadow-lg       → higher elevation (modals, dropdowns)
opacity-50      → 50% opacity
```
