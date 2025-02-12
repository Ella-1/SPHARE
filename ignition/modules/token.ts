import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SphearTokenModule = buildModule("SphearToken", (m) => {
    const SphearTokenTransfer = m.contract("SphearToken");

    return {SphearTokenTransfer};
});

module.exports =  SphearTokenModule;