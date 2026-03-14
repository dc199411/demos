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
- **Fallback:** deploy from repo root using root `package.json` + root `vercel.json` wrappers.
- This repo now also includes `three-card-monte/vercel.json` so either root-mode or subdirectory-mode deployments are explicitly configured.


### Vercel troubleshooting

If Vercel shows:

- `No Next.js version detected. Make sure your package.json has "next"...`

then ensure one of the following:

1. **Root Directory** in Vercel is set to `three-card-monte`, **or**
2. Deploy from repository root with the included `vercel.json` + root `package.json` wrapper scripts.

This repository now includes both a root `package.json` (with `next` and delegated scripts) and `three-card-monte/vercel.json` to support either Vercel Root Directory configuration.

## Documentation

- App documentation and brand/design details: `three-card-monte/README.md`
- Contributor operating guidance: `three-card-monte/AGENTS.md`
- Base docs LLM index: https://docs.base.org/llms.txt

## License

This project is licensed under the terms of the included LICENSE file.
