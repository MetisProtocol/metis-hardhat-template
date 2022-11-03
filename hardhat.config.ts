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
    version: "0.8.17",
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
    metisgoerli: {
      url: "https://goerli.gateway.metisdevops.link",
      accounts: [WALLET_PRIVATE_KEY],
      verify: {
        etherscan: {
          apiKey: "api-key",
          apiUrl: "https://goerli.explorer.metisdevops.link",
        },
      },
    },
    andromeda: {
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [WALLET_PRIVATE_KEY],
      verify: {
        etherscan: {
          // just use api-key
          apiKey: "api-key",
          apiUrl: "https://andromeda-explorer.metis.io",
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
