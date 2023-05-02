﻿# TokenNFTAndCustomSmartContracts
I worked with the thirdweb framework for building third web apps (https://thirdweb.com/dashboard/contracts), their github has great starter code: https://github.com/thirdweb-example. They provide an SDK, and great template smart contracts. I struggled alot with getting the functionality of the custom smart contracts to work. Ultimately, I learned how to interface with smart contracts using the Thirdweb SDK, and build dApps. 

## Videos
1. Introduction: https://youtu.be/8TeNq-5mbq8
2. Demo of Applications: https://youtu.be/Z4-WMwnRHHk

## There are 5 main smart contracts that I deployed that I am working with in 2 web applications in this repository:
1. **Miners Contract - ERC1155** - 0x74e16D7B8C14358f6628eEA75606D6CCc5cb0B94 - A contract for the "Character" NFT. In the first application, you can mint this NFT directly and for free. This application allows you to "select" a character and mint that character as an NFT. So I could easily add various NFT characters and allow the user to select a character in order to play a fun game in the browser. For this application though, I just have 1 NFT character that you can select, after you mint the NFT to your wallet, then you can start the "game".
2. **Corn - ERC1155** - 0x4E87C24D1B1E92E94Ce3B1F261f2d88Bb5172465 - This is also an NFT. The "weakcorn" is free, but the "weirdcorn" costs 1 OFC (my custom ERC20). After you select your character NFT, you should be able to "purchase" corn for my custom ERC-20 coin, called Overflowcoin. In the first application, you can purchase these NFTs, but for some reason I cannot get the equip functionality to work (shown in the video demo). 
3. **Mining - Custom Contract** - 0x3baa300d2c32F2BcaEf395d1E3726cFeC7389641 - This was supposed to be like a play to earn game, based off of the template from Thirdweb, but I couldn't get this to work fully. But I can mint the character NFT, and purchase the corn NFTs with my custom ERC-20 coin. But I cannot call the custom smart contract i made to "equip" the corn. After the user "equips" the corn, then the connected wallet is supposed to start earning OFC indefinitely for free but it currently doesn't work.
4. **Overflowcoin - ERC20** - 0xA8d5dFcB52577c201A0555fb2e929f9433886CBF - This is my custom crypto currency (ticker: OFC). It's like Bitcoin, but way cooler. Starting total supply is 21M. I tried to use this coin in my custom smart contracts for various ways of earning OFC, but I struggled alot with getting it working. I was atleast able to get some basic reward working from a custom smart contract. 
5. **CoinAndNFT2 - Custom Contract** - 0x0446D2391589712B49AFD29C5a30F666fD5b7D9a - This is a very simple custom smart contract that I wanted to be able to call from within my web application. In order to demonstrate functionality, I have a basic web page where the user will select how many stars on their comment. The smart contract will simply reward the OFC to the user. I created a simple "claim" function from within this custom smart contract, published to Thirdweb.com, and then deployed it. Using the SDK, I was successfully able to call this "claim" method in my application so that the connected wallet earns OFC.

## Applications and Custom Smart Contracts
1. **/Application** -
This application was built off of the Thirdweb template application and uses typescript and react. I could not get this application to work, but I was atleast able to get basic functionality working. At first, you connect your wallet and the application checks for a connected wallet in order to proceed. Then if the application notices that you do not have a character NFT in your wallet, then it will ask you to mint the "Miners Contract" character NFT. Once you mint the charater NFT contract for free, then the application routes you to the "play game" button. After clicking the "play game", button, then you will be able to purchase weakcorn, and weirdcorn NFTs with my custom ERC20 coin called Overflowcoin (OFC). I got this part working. Once you purchase corn, you have to choose to "equip" the corn, but that equip button calls a custom method in the custom Mining smart contract and it does not work unfortunately. After you equip the corn, you are supposed to start earning OFC, but that does not happen unfortuantely. I kept getting this error when I called "Equip":
  -  ![1](https://user-images.githubusercontent.com/23727813/235560241-641f6b62-cd82-4612-b9ef-43ca64d71ca4.PNG)
  -  I spent alot of time trying to resolve this error along with many other errors. It's really difficult to debug custom smart contract code. If a custom smart contract compiles correctly, then when you face runtime errors it can be difficult to track down and you'll find little help on the internet. Overall though, i'm really glad with how far i've come with this application. 

2. **/Application2** -
I built this simple application myself using React. This is where I wanted to build my custom application. At first you connect your wallet. Currently, it just shows a comment box, review stars, and a button. If you click the button, then my custom contract (CoinAndNFT2) will be called and then it will reward the connected wallet with free OFC!  I wanted my application to work similiar to Stackoverflow, but where the poster could reward the best answer with some OFC. However, this project proved to be much harder than I thought, and so I focused much less on building software and more on learning how to work with smart contracts in software applications. I managed to get my custom function "claim" working from my custom smart contract. This is great because I personally wrote the code, deployed it to thirdweb, and then published the smart contract. By using the SDK, I was able to call this custom function. 
3. **/contracts** - There are two particular custom smart contracts that I deployed to thirdweb, and published:
   - **Mining.sol** - This is in solidity, and this smart contract code with mostly copied from the template from Thirdweb's github. It takes two arguments: pickaxeNftCollection, and rewardsToken. The pickaxeNftCollection connects to my corn NFT smart contract, and the rewardsToken connects to my Overflowcoin ERC20 smart contract. When I publish this contract in Thirdweb, I have to specify these parameters and I can use these parameters in my smart contract code. In solidity, I can import contracts and use them as inheritence for my custom smart contract. In the image below, I am importing "DropERC1155.sol", "TokenERC20.sol", and "ERC1155Holder.sol" from Thirdweb. I can connect the pickaxeContractAddress and gemsContractAddress to instantiate the ERC1155 and ERC20 contracts and call methods from those smart contracts. I also import "ReentrancyGuard" from openzeppelin. This is great security smart contract that can help prevent reentrancy. 
      - ![image](https://user-images.githubusercontent.com/23727813/235563411-8c197520-602e-4f32-9a51-99721ab8cc4d.png)
   - **CoinAndNFT.sol** - This is my custom smart contract where I have a basic function "claim", that simply rewards some OFC based when the "reward" parameters. I deployed this smart contract to Thirdweb, and the published it. Using the Thirdweb SDK, I was able to call this custom method in Application2. The code for the "claim" method is shown below. 
    - ![image](https://user-images.githubusercontent.com/23727813/235562412-85307322-42e5-4a8d-9cd5-747cb7f02922.png)
    
## Different Smart Contract Interfaces that I worked with
1. **ERC-1155** - Multi-Token Standard (https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/) - I used this interface for building my NFTs, but it can handle many combination of token types such as fungible, non-fungible, semi-fungible and other kinds of tokens.
2. **ERC-20** - Token Standard (https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) - This is the standard token interface for custom fungible tokens on the Ethereum blockchain. This is how I created Overflowcoin (OFC). This is really interesting because most coins that you find on Coinbase are actually made with the ERC20 standard. It was a lot of fun to work with OFC!

## Goals for the future
This project was a huge success for me. I was not trying to build anything novel. I simply wanted to learn how to build dApps. Working with the Thirdweb framework, I think I now have all the tools I need to design and develop software applications that interface with smart contracts. I would like to think about and design a play-to-earn game or some application where you can use some custom ERC20 coin, and custom NFTs. It's a lot of fun working with smart contracts, and I feel like this project has opened the door for a whole bunch of opportunities to build things that could be really cool and novel. I'm not sure that my idea of Stackoverflow with an ERC20 reward idea will work, but maybe something similiar to it. The Thirdweb SDK provides a lot of methods for interfacing with smart contracts. Thirdweb.com provides great tools in the browser to publish, deploy, and directly interact with your smart contracts. I still have a lot to learn if I want to get good at working with Solidity and building dApps, but now I have the tools and knowledge to get started with building dApps on my own.  

  
