import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

import type { HardhatUserConfig } from "hardhat/config";

// dynamically changes endpoints for local tests
export const zkSyncTestnet =
  process.env.NODE_ENV == "test"
    ? {
        url: "http://127.0.0.1:8011",
        ethNetwork: "http://127.0.0.1:8545",
        zksync: true,
      }
    : {
        url: "https://sepolia.era.zksync.dev",
        ethNetwork: "sepolia",
        zksync: true,
        // contract verification endpoint
        verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
      };

const config: HardhatUserConfig = {
  zksolc: {
    version: "latest",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    hardhat: {
      zksync: false,
    },
    zkSyncTestnet,
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
