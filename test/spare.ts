// import { expect } from "chai";
// // import  hre  from "hardhat";
// import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { Signer, Contract } from "ethers";
// import hre from "hardhat";

// describe("SphearListenToEarn", function () {
//   // Define the fixture for deployment
//   async function deployContractsFixture() {
//     const [owner, user1, user2] = await hre.ethers.getSigners();

//     // Deploy the SphearToken contract (simple ERC20 mock)
//     const SphearToken = await ethers.getContractFactory("SphearToken");
//     const sphearToken = await SphearToken.deploy();

//     // Deploy the SphearListenToEarn contract
//     const SphearListenToEarn = await ethers.getContractFactory("SphearListenToEarn");
//     const listenToEarn = await SphearListenToEarn.deploy(sphearToken.address);

//     return { sphearToken, listenToEarn, owner, user1, user2 };
//   }

//   describe("Deployment", function () {
//     it("Should deploy the contracts correctly", async function () {
//       const { listenToEarn, sphearToken } = await loadFixture(deployContractsFixture);
//       expect(await listenToEarn.sphearToken()).to.equal(sphearToken.address);
//     });
//   });

//   describe("Device Registration", function () {
//     it("Should allow users to register a device", async function () {
//       const { listenToEarn, user1 } = await loadFixture(deployContractsFixture);
//       const deviceHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("device1"));
//       await listenToEarn.connect(user1).registerDevice(deviceHash);
//       expect(await listenToEarn.registeredDevice(await user1.getAddress())).to.equal(deviceHash);
//     });
//   });

//   describe("Listening and Rewards", function () {
//     it("Should allow users to start and stop listening", async function () {
//       const { listenToEarn, sphearToken, user1 } = await loadFixture(deployContractsFixture);
//       const deviceHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("device1"));
//       await listenToEarn.connect(user1).registerDevice(deviceHash);

//       // Start listening
//       await listenToEarn.connect(user1).startListening();
//       expect(await listenToEarn.isListening(await user1.getAddress())).to.be.true;

//       // Wait for 10 seconds (simulate listening)
//       await time.increase(10); // Increase time by 10 seconds

//       // Stop listening and claim rewards
//       await listenToEarn.connect(user1).stopListening();

//       // Check if rewards were distributed
//       const user1Balance = await sphearToken.balanceOf(await user1.getAddress());
//       expect(user1Balance).to.be.gt(0);
//     });

//     it("Should reset earnings after 4 hours", async function () {
//       const { listenToEarn, sphearToken, user1 } = await loadFixture(deployContractsFixture);
//       const deviceHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("device1"));
//       await listenToEarn.connect(user1).registerDevice(deviceHash);

//       // Start listening
//       await listenToEarn.connect(user1).startListening();

//       // Fast-forward time by 4 hours
//       await time.increase(4 * 60 * 60); // Increase time by 4 hours

//       // Stop listening
//       await listenToEarn.connect(user1).stopListening();

//       // Check if earnings were reset
//       const user1Balance = await sphearToken.balanceOf(await user1.getAddress());
//       expect(user1Balance).to.be.gt(0);
//     });
//   });

//   describe("Errors and Edge Cases", function () {
//     it("Should prevent unregistered devices from listening", async function () {
//       const { listenToEarn, user2 } = await loadFixture(deployContractsFixture);
//       await expect(listenToEarn.connect(user2).startListening()).to.be.revertedWith(
//         "Device not registered"
//       );
//     });

//     it("Should prevent double listening", async function () {
//       const { listenToEarn, user1 } = await loadFixture(deployContractsFixture);
//       const deviceHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("device1"));
//       await listenToEarn.connect(user1).registerDevice(deviceHash);

//       // Start listening
//       await listenToEarn.connect(user1).startListening();

//       // Try to start listening again
//       await expect(listenToEarn.connect(user1).startListening()).to.be.revertedWith(
//         "Already listening"
//       );
//     });
//   });
// });
