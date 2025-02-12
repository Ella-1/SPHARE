No problem! Here is the information for your smart contract in the format of a `README.md` file, with all the necessary details. You can copy and paste it directly:

---

# Sphear Listen to Earn Smart Contract

This smart contract allows users to earn rewards (in the form of SPHEAR tokens) by listening to content. The contract is built using Solidity and leverages OpenZeppelin's contracts for security and functionality. Users register their devices, start and stop listening sessions, and earn rewards based on the listening duration.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Deployment](#deployment)
- [Security](#security)
- [License](#license)

## Overview

The `SphearListenToEarn` contract allows users to register devices and track listening activity. When users listen to content, they earn SPHEAR tokens as a reward based on the time spent listening. The contract includes features for adjusting the reward rate and reset intervals.

- **SPHEAR token integration**: Rewards are distributed in SPHEAR tokens.
- **Listening sessions**: Users can start and stop listening sessions.
- **Cooldown mechanism**: Users must wait a cooldown period before switching accounts.
- **Device registration**: Users must register a device to start earning rewards.
- **Admin controls**: Only the admin can adjust reward rates and reset intervals.

## Features

- **Device Registration**: Users must register their devices using a unique `deviceHash`.
- **Listening Tracking**: Once a user starts listening, the contract tracks the session and calculates rewards based on the listening duration.
- **Reward Distribution**: Users are rewarded with SPHEAR tokens proportional to the duration of their listening session.
- **Cooldown Period**: After stopping a session, there is a cooldown of 10 minutes before the user can start a new listening session.
- **Admin Control**: The contract owner (admin) can adjust the reward rate and reset interval.




## Deployment

To deploy this contract, you'll need to have a Solidity development environment set up. We recommend using [Hardhat](https://hardhat.org/) for deploying and testing.


<!-- ### Interacting with the Contract

- **Register Device**: Call `registerDevice` with the `deviceHash` when the user first registers their device.
- **Start Listening**: The user can call `startListening` to begin earning rewards.
- **Stop Listening**: The user can call `stopListening` to end the session and receive SPHEAR tokens.
- **Admin Actions**: The admin can adjust the reward rate and reset interval using `setRewardRate` and `setResetInterval`. -->

## Security

This contract uses OpenZeppelin's [ReentrancyGuard](https://openzeppelin.com/contracts) to prevent reentrancy attacks. It's also designed with an admin-only control for reward rate adjustments and reset intervals, ensuring that only authorized users can modify critical contract parameters.

Ensure that your private key is stored securely in the `.env` file, and avoid pushing sensitive data to public repositories.

## License

This project is licensed under the MIT License.

