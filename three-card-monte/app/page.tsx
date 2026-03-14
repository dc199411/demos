"use client";

import { useMiniKit, useOpenUrl } from "@coinbase/onchainkit/minikit";
import {
  Wallet,
  ConnectWallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Identity,
  Avatar,
  Name,
  Address,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ThreeCardMonteGame } from "@/components/three-card-monte-game";

function WalletArea() {
  return (
    <Wallet>
      <ConnectWallet className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/20">
        <Avatar className="h-5 w-5" />
        <Name className="text-white" />
      </ConnectWallet>
      <WalletDropdown>
        <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
          <Avatar />
          <Name />
          <Address className={color.foregroundMuted} />
          <EthBalance />
        </Identity>
        <WalletDropdownBasename />
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-20 flex w-[min(480px,90vw)] -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-xs text-white/80 shadow-lg backdrop-blur-xl">
      <span className="font-semibold text-white">Home</span>
      <span>Games</span>
      <span>Profile</span>
    </nav>
  );
}

export default function App() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  const openUrl = useOpenUrl();
  const account = useAccount();
  const [enteredApp, setEnteredApp] = useState(false);
  const [showConnectedPopup, setShowConnectedPopup] = useState(false);

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  useEffect(() => {
    if (account.isConnected) {
      setShowConnectedPopup(true);
      const timer = setTimeout(() => setShowConnectedPopup(false), 2800);
      return () => clearTimeout(timer);
    }
  }, [account.isConnected]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f1027] via-[#101736] to-[#03040a] px-5 py-6 text-white shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,109,255,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(109,40,217,0.25),transparent_35%)]" />

      <header className="relative z-10 flex items-center justify-end">
        <WalletArea />
      </header>

      {showConnectedPopup ? (
        <div className="absolute right-5 top-20 z-20 rounded-xl border border-blue-300/40 bg-blue-500/20 px-4 py-3 text-sm text-blue-100 shadow-lg backdrop-blur-xl">
          Wallet connected successfully.
        </div>
      ) : null}

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center pb-24 pt-8 text-center">
        {!enteredApp ? (
          <>
            <p className="mb-3 rounded-full border border-blue-200/30 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-blue-200/90">
              Welcome to Base Mini App
            </p>
            <h1 className="mb-4 bg-gradient-to-r from-blue-200 via-white to-indigo-300 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-6xl">
              Multiverse Of Games
            </h1>
            <p className="mb-8 max-w-xl text-sm text-blue-100/85 md:text-base">
              A social arcade universe built on Base. Connect your wallet, bring your
              Base Account identity, and jump into immersive mini games with modern
              onchain rewards.
            </p>

            <button
              onClick={() => setEnteredApp(true)}
              className="rounded-2xl border border-blue-200/40 bg-gradient-to-br from-blue-500/55 to-cyan-400/35 px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] backdrop-blur-xl transition hover:scale-[1.02] hover:from-blue-400/65 hover:to-cyan-300/45"
            >
              Enter the App
            </button>

            <button
              onClick={() => openUrl("https://docs.base.org/llms.txt")}
              className="mt-4 text-xs text-blue-200/70 underline-offset-4 hover:underline"
            >
              Built following Base docs
            </button>
          </>
        ) : (
          <div className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-lg">
            <h2 className="mb-3 text-left text-xl font-bold">Three Card Monte</h2>
            <ThreeCardMonteGame />
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
