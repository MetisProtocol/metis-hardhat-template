import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

import * as dotenv from "dotenv";
dotenv.config();

import "./ts-src/scripts/accounts";

const WALLET_PRIVATE_KEY = process.env.PRIVATE_KEY as string;
if (!process.env.PRIVATE_KEY) {
  throw new Error("No private key");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      evmVersion: "berlin",
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    "metis-sepolia": {
      url: "https://sepolia.rpc.metisdevops.link",
      accounts: [WALLET_PRIVATE_KEY],
      verify: {
        etherscan: {
          apiKey: "apiKey is not required, just set a placeholder",
          apiUrl: "https://sepolia.explorer.metisdevops.link",
        },
      },
    },
    andromeda: {
      url: "https://andromeda.metis.io",
      accounts: [WALLET_PRIVATE_KEY],
      verify: {
        etherscan: {
          apiKey: "apiKey is not required, just set a placeholder",
          apiUrl:
            "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
        },
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    tests: "ts-src/test",
    deploy: "ts-src/deploy",
  },
};

export default config;
