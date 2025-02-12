import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    "base-sepolia": {
        url: "https://sepolia.base.org",
        accounts: [vars.get("PRIVATE_KEY")],
        chainId: 84532,
    },

},

etherscan: {
  apiKey: {
    // sepolia: 'F1QYMFAQPITGC1T2EJ9ABEQ9F7P8F2MTX4',
    baseSepolia: 'JYE1A113AI54BP438VRS8CPQ33W95DZZ3R'
  }
}
};

export default config;
