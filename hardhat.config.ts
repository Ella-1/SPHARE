import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { vars } from "hardhat/config";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
        url: vars.get("SEPOLIA_API_URL"),
        accounts: [vars.get("PRIVATE_KEY")],
        chainId: Number(vars.get("SEPOLIA_CHAIN_ID")),
    },
    skale: {
      url: "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
      accounts: [vars.get("PRIVATE_KEY")],
      chainId: 1444673419,
  },

},

etherscan: {
  apiKey: {
    sepolia: process.env.ETHERSCAN_API ?? "",
  }
}
};

export default config;
