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
1. **/Application** - I could not get this application to work, but I was atleast able to get basic functionality working. At first, you connect your wallet. Then if the application see that you do not have a character NFT in your wallet, then it will ask you to mint the "Miners Contract" character NFT. Once you mint the charater NFT contract for free, then the application routes you to the "play game" button. After clicking the "play game", button, then you will be able to purchase weakcorn, and weirdcorn NFTs with my custom ERC20 coin called Overflowcoin (OFC). I got this part working. Once you purchase corn, you have to choose to "equip" the corn, but that equip button calls a custom method in the custom Mining smart contract and it does not work unfortunately. After you equip the corn, you are supposed to start earning OFC, but that does not happen unfortuantely. I kept getting this error when I called "Equip":
![1](https://user-images.githubusercontent.com/23727813/235560241-641f6b62-cd82-4612-b9ef-43ca64d71ca4.PNG)

I spent alot of time trying to resolve this error along with many other errors. It's really difficult to debug custom smart contract code. If a custom smart contract compiles correctly, then when you face runtime errors it can be difficult to track down and you'll find little help on the internet. Overall though, i'm really glad with how far i've come with this application. 1
2. **./Application2** - This is where I wanted to build my custom application. At first you connect your wallet. Currently, it just shows a comment box, review stars, and a button. If you click the button, then my custom contract will be called and then it will reward the connected wallet with free OFC!  I wanted my application to work similiar to Stackoverflow, but where the poster could reward the best answer with some OFC. However, this project proved to be much harder than I thought, and so I focused much less on building software and more on learning how to work with Web3.  2

