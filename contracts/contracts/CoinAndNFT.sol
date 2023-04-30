// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// Import thirdweb contracts
import "@thirdweb-dev/contracts/drop/DropERC1155.sol"; // For my collection of Corns
import "@thirdweb-dev/contracts/token/TokenERC20.sol"; // For my ERC-20 Token contract
import "@thirdweb-dev/contracts/openzeppelin-presets/utils/ERC1155/ERC1155Holder.sol";

// OpenZeppelin (ReentrancyGuard)
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CoinAndNFT is ReentrancyGuard, ERC1155Holder {
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

    // Mapping of player address until last time they staked/withdrew/claimed their rewards
    // By default, player has no last time. They will not be in the mapping.
    mapping(address => MapValue) public playerLastUpdate;


    function stake(uint256 _tokenId) external nonReentrant {
        // Transfer the Corn to the contract
        cornNFTCollection.safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId,
            1,
            "Staking your corn"
        );

        // Update the playerCorn mapping
        playerCorn[msg.sender].value = _tokenId;
        playerCorn[msg.sender].isData = true;

        // Update the playerLastUpdate mapping
        playerLastUpdate[msg.sender].isData = true;
        playerLastUpdate[msg.sender].value = block.timestamp;
    }

    function getCoin() public {
        uint256 amount = 1 * 10**18; // 1 ERC20 coin
        rewardsToken.transfer(msg.sender, amount);
    }
}
