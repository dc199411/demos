# AGENTS.md — Multiverse Of Games

## Purpose
This file tracks durable project guidance for contributors working on the Multiverse Of Games mini app.

## Product Snapshot
- App name: **Multiverse Of Games**
- Platform: Base Mini App (Next.js + OnchainKit + MiniKit)
- Current primary game: Three Card Monte

## Canonical Base Docs
Always prefer these sources when implementing or updating features:

- Base LLM index: https://docs.base.org/llms.txt
- Base Account docs index: https://docs.base.org/base-account/llms.txt
- Mini Apps docs: https://docs.base.org/base-app/build-mini-apps
- MiniKit docs: https://docs.base.org/base-app/build-mini-apps/minikit/overview
- OnchainKit docs: https://docs.base.org/onchainkit/latest/overview
- Wallet Island: https://docs.base.org/onchainkit/latest/components/wallet/wallet-island
- Wallet components: https://docs.base.org/onchainkit/latest/components/wallet/wallet
- Identity components: https://docs.base.org/onchainkit/latest/components/identity
- Connected component: https://docs.base.org/onchainkit/latest/components/connected/connected
- Theming OnchainKit: https://docs.base.org/onchainkit/latest/configuration/themes
- Reown integration: https://docs.base.org/base-account/framework-integrations/reown

## Design Rules
- Keep the global visual style dark, gradient-led, and modern.
- Prefer glassmorphism surfaces for major CTAs and nav containers.
- Preserve top-right wallet entry point and bottom navigation on primary flows.

## Wallet & Identity Requirements
- Maintain support for both standard wallet connect and Base Account identity flows.
- Keep identity display rich where possible: avatar, name, address/balance, basename.
- Always provide a visible disconnect path in connected state UX.

## Architecture Notes
- Landing and gameplay currently share `app/page.tsx` state-based flow.
- Frame metadata is configured in `app/layout.tsx`.
- OnchainKit/MiniKit configuration lives in `app/providers.tsx`.

## Vercel Deployment Guardrails
- If deploying from the repository root, Vercel must run the app from `three-card-monte/`.
- Prefer setting **Project Settings → Root Directory = `three-card-monte`**.
- If root directory cannot be changed, use repository root `vercel.json` + `package.json` wrapper scripts that delegate into `three-card-monte`.

- For Vercel detection issues (`No Next.js version detected`), verify root directory and ensure wrapper `package.json` + `vercel.json` are present at repo root.

- `three-card-monte/vercel.json` is provided for projects configured with Root Directory set to `three-card-monte`.

## Documentation Hygiene
- Update `README.md` whenever major UI, wallet flow, or brand choices change.
- Add new long-term contributor guidance here rather than scattering notes across commits.
