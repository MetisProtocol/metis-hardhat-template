import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "./ts-src/scripts/accounts";

dotenv.config();

if (!process.env.PRIVATE_KEY) {
  throw new Error("No private key");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      // There is a bug of explorer here
      // If you use this, you won't be able to verify your contract
      // metadata: {
      //   bytecodeHash: "none",
      // },
    },
  },
  networks: {
    stardust: {
      url: "https://stardust.metis.io/?owner=588",
      accounts: [process.env.PRIVATE_KEY],
      verify: {
        etherscan: {
          // just use api-key
          apiKey: "api-key",
          apiUrl: "https://stardust-explorer.metis.io",
        },
      },
    },
    andromeda: {
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [process.env.PRIVATE_KEY],
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
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  paths: {
    tests: "ts-src/test",
    deploy: "ts-src/deploy",
  },
};

export default config;
