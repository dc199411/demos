![Base](logo.webp)

# Multiverse Of Games

Multiverse Of Games is the primary and only application in this repository. It is a Base Mini App experience with a landing-first interface, wallet-native onboarding, and interactive gameplay.

## App Location

- `three-card-monte/`

## Overview

Multiverse Of Games is built with:

- Next.js
- MiniKit
- OnchainKit
- Tailwind CSS

The current experience includes:

- branded landing page
- wallet connection and identity UI
- connected-state feedback
- bottom navigation shell
- Three Card Monte gameplay entry state

## Quick Start

1. Install dependencies:

```bash
npm --prefix three-card-monte install
```

2. Run locally:

```bash
npm --prefix three-card-monte run dev
```

3. Open:

```text
http://localhost:3000
```

## Deployment Notes

- **Recommended:** set Vercel **Root Directory** to `three-card-monte` (this uses `three-card-monte/package.json` directly).
- **Fallback:** deploy from repo root using the repository `vercel.json` that explicitly builds `three-card-monte/package.json` via `@vercel/next`.
- This repo also includes `three-card-monte/vercel.json` for projects whose Root Directory is set directly to `three-card-monte`.


### Vercel troubleshooting

If Vercel shows:

- `No Next.js version detected. Make sure your package.json has "next"...`

then ensure one of the following:

1. **Root Directory** in Vercel is set to `three-card-monte`, **or**
2. Deploy from repository root with the included `vercel.json` that explicitly points Vercel to `three-card-monte/package.json`.

This repository supports both Vercel modes: Root Directory set to `three-card-monte`, or repo-root deploy using explicit `@vercel/next` build mapping.

## Documentation

- App documentation and brand/design details: `three-card-monte/README.md`
- Contributor operating guidance: `three-card-monte/AGENTS.md`
- Base docs LLM index: https://docs.base.org/llms.txt

## License

This project is licensed under the terms of the included LICENSE file.
