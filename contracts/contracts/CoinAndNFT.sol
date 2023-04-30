// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// Import thirdweb contracts
import "@thirdweb-dev/contracts/drop/DropERC1155.sol"; // For my collection of Corns
import "@thirdweb-dev/contracts/token/TokenERC20.sol"; // For my ERC-20 Token contract
import "@thirdweb-dev/contracts/openzeppelin-presets/utils/ERC1155/ERC1155Holder.sol";

// OpenZeppelin (ReentrancyGuard)
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CoinAndNFT2 is ReentrancyGuard, ERC1155Holder {
    // Store our two other contracts here (Edition Drop and Token)
    DropERC1155 public immutable cornNFTCollection;
    TokenERC20 public immutable rewardsToken;

    // Constructor function to set the rewards token and the NFT collection addresses
    constructor(
        DropERC1155 cornContractAddress,
        TokenERC20 coinContractAddress
    ) {
        cornNFTCollection = cornContractAddress;
        rewardsToken = coinContractAddress;
    }

        struct MapValue {
        bool isData;
        uint256 value;
    }

    // Mapping of player addresses to their current corn
    // By default, player has no corn. They will not be in the mapping.
    // Mapping of address to corn is not set until they stake a one.
    // In this example, the tokenId of the corn is the multiplier for the reward.
    mapping(address => MapValue) public playerCorn;

    function claim(uint256 amount) external nonReentrant {
    // Calculate the rewards they are owed, and pay them out.
    uint256 reward = amount;
    rewardsToken.transfer(msg.sender, reward);

    }
}
