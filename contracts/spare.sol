// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract SphearListenToEarn is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public sphearToken = IERC20(0x1d90d6b352e12fb9BF979e0d77927C6e483beb2F); 
    uint256 public rewardRate = 0.00005 * 1e18; 
    uint256 public resetInterval = 4 hours;
    address public admin;

    mapping(address => uint256) public lastClaimTime;
    mapping(address => uint256) public listeningStart;
    mapping(address => bool) public isListening;
    mapping(address => bytes32) public registeredDevice;
    mapping(address => uint256) public lastAccountSwitch;

    event ListeningStarted(address indexed user, uint256 timestamp);
    event ListeningStopped(address indexed user, uint256 duration, uint256 reward);
    event DeviceRegistered(address indexed user, bytes32 deviceHash);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    function registerDevice(bytes32 deviceHash) external {
        require(registeredDevice[msg.sender] == bytes32(0), "Device already registered");
        registeredDevice[msg.sender] = deviceHash;
        emit DeviceRegistered(msg.sender, deviceHash);
    }

    function startListening() external {
        require(block.timestamp >= lastAccountSwitch[msg.sender] + 10 minutes, "Cooldown active");
        require(registeredDevice[msg.sender] != bytes32(0), "Device not registered");
        require(!isListening[msg.sender], "Already listening");
        
        listeningStart[msg.sender] = block.timestamp;
        isListening[msg.sender] = true;
        emit ListeningStarted(msg.sender, block.timestamp);
    }

    function stopListening() external nonReentrant {
        require(isListening[msg.sender], "Not currently listening");
        uint256 duration = block.timestamp - listeningStart[msg.sender];
        require(duration > 0, "Invalid duration");

        // Check if 4 hours have passed since the last claim
        if (block.timestamp >= lastClaimTime[msg.sender] + resetInterval) {
            lastClaimTime[msg.sender] = block.timestamp;
        }

        uint256 reward = (duration * rewardRate) / 1e18;
        sphearToken.safeTransfer(msg.sender, reward);

        isListening[msg.sender] = false;
        emit ListeningStopped(msg.sender, duration, reward);
    }

    function setRewardRate(uint256 _rewardRate) external onlyAdmin {
        rewardRate = _rewardRate;
    }

    function setResetInterval(uint256 _resetInterval) external onlyAdmin {
        resetInterval = _resetInterval;
    }
}