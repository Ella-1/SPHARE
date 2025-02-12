import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpareModule = buildModule("SphearListenToEarn", (m) => {
  // const SphearTokenTransfer = m.contract("SphearToken");
    const SphearTransfer = m.contract("SphearListenToEarn");

    return {SphearTransfer};
});

module.exports =  SpareModule;