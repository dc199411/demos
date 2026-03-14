"use client";

import { useMiniKit, useOpenUrl } from "@coinbase/onchainkit/minikit";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletModal,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Badge,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ThreeCardMonteGame } from "@/components/three-card-monte-game";

type Tab = "home" | "games" | "profile";

function WalletActionButton({
  isConnected,
  onOpenModal,
}: {
  isConnected: boolean;
  onOpenModal: () => void;
}) {
  if (!isConnected) {
    return (
      <button
        onClick={onOpenModal}
        className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/20"
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <Wallet>
      <ConnectWallet className="rounded-full border border-blue-200/30 bg-blue-500/20 p-1.5 backdrop-blur-xl transition hover:bg-blue-500/30">
        <Avatar className="h-7 w-7" />
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

function BottomNav({ activeTab, onChange }: { activeTab: Tab; onChange: (tab: Tab) => void }) {
  const tabs: Tab[] = ["home", "games", "profile"];

  return (
    <nav className="fixed bottom-4 left-1/2 z-20 flex w-[min(520px,92vw)] -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-xs text-white/80 shadow-lg backdrop-blur-xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-lg px-4 py-2 capitalize transition ${
            activeTab === tab
              ? "bg-blue-500/35 text-white"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

function HomeView({ onEnterGames, onOpenDocs }: { onEnterGames: () => void; onOpenDocs: () => void }) {
  return (
    <>
      <p className="mb-3 rounded-full border border-blue-200/30 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-blue-200/90">
        Welcome to Base Mini App
      </p>
      <h1 className="mb-4 bg-gradient-to-r from-blue-200 via-white to-indigo-300 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-6xl">
        Multiverse Of Games
      </h1>
      <p className="mb-8 max-w-xl text-sm text-blue-100/85 md:text-base">
        A social arcade universe built on Base. Connect with Base Account or wallet
        connect, bring your identity onchain, and jump into immersive mini games.
      </p>

      <button
        onClick={onEnterGames}
        className="rounded-2xl border border-blue-200/40 bg-gradient-to-br from-blue-500/55 to-cyan-400/35 px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] backdrop-blur-xl transition hover:scale-[1.02] hover:from-blue-400/65 hover:to-cyan-300/45"
      >
        Enter the App
      </button>

      <button
        onClick={onOpenDocs}
        className="mt-4 text-xs text-blue-200/70 underline-offset-4 hover:underline"
      >
        Built following Base docs
      </button>
    </>
  );
}

function GamesView() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-lg">
      <h2 className="mb-3 text-left text-xl font-bold">Three Card Monte</h2>
      <ThreeCardMonteGame />
    </div>
  );
}

function ProfileView({ isConnected, onOpenModal }: { isConnected: boolean; onOpenModal: () => void }) {
  if (!isConnected) {
    return (
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black/25 p-5 text-left backdrop-blur-lg">
        <h2 className="mb-3 text-xl font-bold">Profile</h2>
        <div className="inline-flex items-center rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
          Connect wallet to see profile.
        </div>
        <p className="mt-3 text-sm text-blue-100/80">
          Sign in with Base Account or Wallet Connect to view your avatar, basename,
          address, and balance.
        </p>
        <button
          onClick={onOpenModal}
          className="mt-4 rounded-xl border border-blue-200/40 bg-blue-500/30 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500/40"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4 rounded-2xl border border-white/15 bg-black/25 p-5 text-left backdrop-blur-lg">
      <h2 className="text-xl font-bold">Profile</h2>
      <Identity className="rounded-xl border border-white/10 bg-white/5 p-4" hasCopyAddressOnClick>
        <Avatar className="h-12 w-12" />
        <div className="mt-2 flex items-center gap-2">
          <Name className="text-lg font-semibold text-white" />
          <Badge />
        </div>
        <Address className="mt-1 text-blue-100/80" />
        <EthBalance className="mt-2 text-sm text-cyan-100" />
      </Identity>

      <Wallet>
        <ConnectWallet className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl hover:bg-white/20">
          Wallet options
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
    </div>
  );
}

export default function App() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  const openUrl = useOpenUrl();
  const account = useAccount();
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showConnectedPopup, setShowConnectedPopup] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  useEffect(() => {
    if (account.isConnected) {
      setShowConnectedPopup(true);
      setIsWalletModalOpen(false);
      const timer = setTimeout(() => setShowConnectedPopup(false), 2800);
      return () => clearTimeout(timer);
    }
  }, [account.isConnected]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f1027] via-[#101736] to-[#03040a] px-5 py-6 text-white shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,109,255,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(109,40,217,0.25),transparent_35%)]" />

      <header className="relative z-10 flex items-center justify-end">
        <WalletActionButton
          isConnected={account.isConnected}
          onOpenModal={() => setIsWalletModalOpen(true)}
        />
      </header>

      <WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />

      {showConnectedPopup ? (
        <div className="absolute right-5 top-20 z-20 rounded-xl border border-blue-300/40 bg-blue-500/20 px-4 py-3 text-sm text-blue-100 shadow-lg backdrop-blur-xl">
          Wallet connected successfully.
        </div>
      ) : null}

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center pb-24 pt-8 text-center">
        {activeTab === "home" ? (
          <HomeView
            onEnterGames={() => setActiveTab("games")}
            onOpenDocs={() => openUrl("https://docs.base.org/llms.txt")}
          />
        ) : null}

        {activeTab === "games" ? <GamesView /> : null}

        {activeTab === "profile" ? (
          <ProfileView
            isConnected={account.isConnected}
            onOpenModal={() => setIsWalletModalOpen(true)}
          />
        ) : null}
      </main>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
