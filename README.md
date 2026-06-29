# Arabic Grammar Companion — النحو التفاعلي

Interactive Arabic grammar learning site for intermediate students, based on two classical texts:

- **Nahw Mir** (نحو مير) — foundational definitions and rules
- **Al-Kafiyah** (الكافية) by Ibn al-Hajib — intermediate nuances and exceptions

## Features

### Curriculum Modules
1. **The Word (الكلمة)** — Noun, verb, and particle definitions
2. **Sentence Structures (الجمل)** — Nominal and verbal sentences, compound types
3. **Inflection (الإعراب)** — Nominative, accusative, and genitive case systems
4. **Governing Particles (العوامل)** — Prepositions, verb-like particles, negatives
5. **Verb Inflection (إعراب الفعل)** — Present tense: nominative, subjunctive, jussive
6. **Followers (التوابع)** — Adjectives, emphasis, substitution, conjunction

### Interactive Features
- **Parsing Game** — Tap a governing particle (إنَّ, لنْ, لمْ, etc.) and watch the word ending change in real-time with Framer Motion animations
- **Hover Practice** — Hover over Arabic words to see root, classification, and grammatical state in color-coded tooltips

### Color-Coded Grammar Tagging
- 🔵 **Blue** — Nominative (مرفوع)
- 🔴 **Red** — Accusative (منصوب)
- 🟢 **Green** — Genitive (مجرور)
- ⚪ **Gray** — Invariable (مبني)

## Tech Stack

- **Next.js 16** (App Router) with static export
- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev    # Development server
npm run build  # Static export to ./out
```

## Deployment

The site is configured for static export (`output: 'export'` in `next.config.mjs`).

### GitHub Pages Setup
1. Copy `docs/deploy-workflow.yml` to `.github/workflows/deploy.yml` (requires a token with `workflow` scope, or do it through the GitHub UI)
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

## Design

Manuscript-inspired color palette:
- Deep navy `#1a2744` (primary)
- Rich gold `#c9a96e` (accents)
- Parchment off-white `#f5ecd9` (background)

Arabic text uses the [Scheherazade New](https://fonts.google.com/specimen/Scheherazade+New) and [Amiri](https://fonts.google.com/specimen/Amiri) font families.

## Sources

All Arabic examples are extracted directly from the source texts and attributed withBadges:
- `Nahw Mir` badge for foundational definitions
- `Al-Kafiyah` badge for intermediate nuances