import { CdpClient } from "@coinbase/cdp-sdk";
import crypto from "crypto";

const globalWithCrypto = globalThis as typeof globalThis & { crypto?: Crypto };
if (!globalWithCrypto.crypto) {
  globalWithCrypto.crypto = crypto.webcrypto as unknown as Crypto;
}

let cdpClient: CdpClient | null = null;

export function getCdpClient(): CdpClient {
  if (cdpClient) {
    return cdpClient;
  }

  cdpClient = new CdpClient({
    apiKeyId: process.env.CDP_API_KEY_ID,
    apiKeySecret: process.env.CDP_API_KEY_SECRET,
    walletSecret: process.env.CDP_WALLET_SECRET,
  });

  return cdpClient;
}

export type CDPClient = CdpClient;
