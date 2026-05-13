# CementHub Tools — Design System

## Tone & Aesthetic
Industrial/utilitarian, technical precision. Inspired by engineering dashboards and cement plant control rooms. No decorative frills; every element serves information clarity and technical accuracy.

## Color Palette
| Role | Light | Dark | OKLCH |
|------|-------|------|-------|
| Background | Off-white | Charcoal | `0.99 0 0` / `0.08 0 0` |
| Foreground | Charcoal | Off-white | `0.12 0 0` / `0.94 0 0` |
| Primary | Charcoal | Off-white | `0.08 0 0` / `0.94 0 0` |
| Accent (Orange) | Safety Orange | Safety Orange | `0.65 0.18 55` |
| Success (Green) | Green-50 | Green-900/30 | `0.62 0.19 142` |
| Warning (Amber) | Amber-50 | Amber-900/30 | `0.68 0.16 142` |
| Destructive (Red) | Red-50 | Red-900/30 | `0.54 0.24 27` |

## Typography
- **Display/Body**: General Sans (geometric, technical)
- **Monospace**: JetBrains Mono (code-like precision for numerical values)
- **Scale**: 12px (labels), 14px (body), 18px (results), 24px+ (headings)

## Layout & Structure
Mobile-first responsive grid. Dark mode default. Input fields left, outputs right (2-column on desktop, 1-column on mobile). Dense information appropriate for technical users.

## Zones
| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header/Nav | Minimal, text-only | Site identity |
| Calculator Form | Input grid with inline units | Data entry |
| Results Panel | Highlight background, large type | Output emphasis |
| Benchmark Cards | Side-by-side comparison | Performance context |
| Badges | Color-coded (green/yellow/red) | Status indicators |

## Component Patterns
- **Input Fields**: Border-only, 0.5rem radius, focus ring with orange accent
- **Result Values**: Large monospace type on light background
- **Badges**: Compact, color-coded status (Good/Average/Poor)
- **Cards**: Subtle borders, minimal shadow, spare padding

## Elevation & Depth
Minimal elevation. Borders and background shifts for depth, not layered shadows. Accent color (orange) for interactive focus states.

## Motion
Smooth transitions (0.3s cubic-bezier) on focus and hover states. No animations beyond state changes.

## Custom Utilities
- `.badge-good` / `.badge-average` / `.badge-poor` — status indicators
- `.input-field` — standardized form control styling
- `.output-panel` — result emphasis background
- `.calculator-section` — layout grid for form/output pairs
