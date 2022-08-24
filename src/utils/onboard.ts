import Onboard from "bnc-onboard";
import { Subscriptions } from "bnc-onboard/dist/src/interfaces";

import { readNetwork } from "constants/networks";

// const appName = "ZETTA";

const networkId = readNetwork.chainId;
// const rpcUrl = readNetwork.rpcUrl;
// TODO(odd-amphora): Add support for Formatic, Portis, etc. if requested.
export function initOnboard(subscriptions: Subscriptions) {
  const param = {
    hideBranding: true,
    networkId,
    darkMode: true,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: "metamask" },
        {
          walletName: "walletConnect",
          rpc: {
            137: "https://polygon-mainnet.g.alchemy.com/v2/iNYP1WU761lM0iIjC6Ul58CxLKPkuCr6",
            80001:
              "https://polygon-mumbai.g.alchemy.com/v2/iNYP1WU761lM0iIjC6Ul58CxLKPkuCr6",
          },
        },
        { walletName: "coinbase" },
        // { walletName: "walletLink", rpcUrl },
      ],
    },
    walletCheck: [
      { checkName: "derivationPath" },
      { checkName: "connect" },
      { checkName: "accounts" },
      { checkName: "network" },
    ],
  };
  return Onboard(param);
}
