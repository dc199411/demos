# Multiverse Of Games

Multiverse Of Games is a Base Mini App that starts with a premium landing page and transitions into gameplay (currently Three Card Monte). It is designed as the foundation for a larger game hub with full wallet identity support.

## Location

- `three-card-monte/`

## Product Identity

- **App Name:** Multiverse Of Games
- **Tone:** futuristic, social, arcade
- **Visual Direction:** dark cosmic gradient + glassmorphism + vivid blue accents
- **Core Promise:** seamless wallet-native gaming on Base

## Current UX Structure

1. **Landing page**
   - Dark gradient background
   - Stylized hero text: “Multiverse Of Games”
   - Wallet connect in top-right
   - Blue glassmorphism “Enter the App” CTA
2. **In-app gameplay state**
   - Embedded Three Card Monte game
   - Persistent bottom navigation
3. **Wallet connected feedback**
   - Temporary connected popup after successful connection

## Wallet + Identity Support

Implemented using OnchainKit components:

- `Wallet`, `ConnectWallet`, `WalletDropdown`
- `WalletDropdownBasename`, `WalletDropdownDisconnect`
- `Identity`, `Avatar`, `Name`, `Address`, `EthBalance`

This supports:

- regular wallet connect flows
- Base Account-compatible identity UI
- avatar, display name, balance, basename display (when available)
- disconnect control via dropdown

## Theming

- App-level dark mode enabled in `app/providers.tsx`
- Global palette tuned for deep-space gradients in `app/globals.css`
- Surface styling uses glassmorphism and soft glows

## Key Files

- `app/page.tsx` — landing, wallet area, connected popup, enter-app transition, bottom nav
- `app/providers.tsx` — MiniKitProvider + theme settings
- `app/layout.tsx` — metadata and frame launch config
- `app/globals.css` — core color system

## Base Documentation Links

Use these canonical docs when implementing features:

- Base LLM index: https://docs.base.org/llms.txt
- Base Account LLM index: https://docs.base.org/base-account/llms.txt
- MiniKit: https://docs.base.org/base-app/build-mini-apps/minikit/overview
- OnchainKit overview: https://docs.base.org/onchainkit/latest/overview
- Wallet Island: https://docs.base.org/onchainkit/latest/components/wallet/wallet-island
- Identity components: https://docs.base.org/onchainkit/latest/components/identity
- Connected component: https://docs.base.org/onchainkit/latest/components/connected/connected
- Theme configuration: https://docs.base.org/onchainkit/latest/configuration/themes
- Reown integration: https://docs.base.org/base-account/framework-integrations/reown

## Environment Variables

Set the standard MiniKit/Create Onchain variables:

```bash
NEXT_PUBLIC_URL=
NEXT_PUBLIC_VERSION=
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=Multiverse Of Games
NEXT_PUBLIC_ONCHAINKIT_API_KEY=
NEXT_PUBLIC_ICON_URL=
NEXT_PUBLIC_IMAGE_URL=
NEXT_PUBLIC_SPLASH_IMAGE_URL=
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=

FARCASTER_HEADER=
FARCASTER_PAYLOAD=
FARCASTER_SIGNATURE=

REDIS_URL=
REDIS_TOKEN=
```

## Run

```bash
npm install
npm run dev
```

## Brand Kit (v1)

- **Primary Gradient:** `#0f1027` → `#101736` → `#03040a`
- **Accent Blue:** `#3b82f6`
- **Accent Cyan:** `#22d3ee`
- **Highlight Text Gradient:** blue-200 → white → indigo-300
- **Primary Button Style:** blue/cyan glassmorphism with border glow
- **Card Style:** `bg-black/20` with blur + subtle border

## Roadmap Notes

- Add game selector in bottom navigation
- Add profile page with achievements and inventory
- Add more mini-games under the Multiverse hub architecture

## Vercel Deployment (404 Fix)


> If Vercel reports `No Next.js version detected`, first set Root Directory to `three-card-monte`. If you deploy from repo root, use the repository-level `vercel.json` that explicitly maps `three-card-monte/package.json` to `@vercel/next`.

If deployment reports success but the production URL shows **404**, it usually means Vercel is building from the repository root instead of the app directory.

Use one of these setups:

1. **Recommended:** In Vercel project settings set **Root Directory** to `three-card-monte`.
2. **Fallback (included in this repo):** keep root deploy and use repository-level `vercel.json` with explicit `@vercel/next` build mapping to `three-card-monte/package.json`.
3. Optional: if Root Directory is `three-card-monte`, the local `three-card-monte/vercel.json` is already aligned for standard Next.js commands.

After changing settings, trigger a **Redeploy** from Vercel.
