# TokenNFTAndCustomSmartContracts
I worked a lot with the thirdweb framework for building third web apps (https://thirdweb.com/dashboard/contracts), their github has great starter code: https://github.com/thirdweb-example. They provide a great SDK, and great template smart contracts, and they also utilize OpenZeppellin. I struggled alot with getting some basic functionality.

## Videos
1. Introduction: https://youtu.be/8TeNq-5mbq8
2. Demo of Applications: https://youtu.be/Z4-WMwnRHHk

## There are 5 main smart contracts that I deployed that I am working with in 2 web applications in this repository:
1. Miners Contract - ERC1155 - 0x74e16D7B8C14358f6628eEA75606D6CCc5cb0B94 - A great contract for my NFT, I was able to mint this NFT from the web application.
2. Corn - ERC1155 - 0x4E87C24D1B1E92E94Ce3B1F261f2d88Bb5172465 - This is also an NFT. The "weakcorn" is free, but the "weirdcorn" costs 1 OFC (my custom ERC20). I managed to handle purchasing this from the web application.
3. Mining - Custom Contract - 0x3baa300d2c32F2BcaEf395d1E3726cFeC7389641 - This was supposed to be like a play to earn game, based off of the template from Thirdweb, but I couldn't get this to work fully. I can atleast mint the NFT, and purchase corn, but I could not get these methods to work.
4. Overflowcoin - ERC20 - 0xA8d5dFcB52577c201A0555fb2e929f9433886CBF - This is my custom crypto currency (ticker: OFC). It's like Bitcoin, but way cooler. Starting total supply is 21M. I wanted my application to work similiar to Stackoverflow, but where the poster could reward the best answer with some OFC. However, this project proved to be much harder than I thought, and so I focused much less on building software and more on learning how to work with Web3. 
5. CoinAndNFT2 - Custom Contract - 0x0446D2391589712B49AFD29C5a30F666fD5b7D9a - This is a very simple custom smart contract that I wanted to be able to call from within my web application. In order to demonstrate functionality, I have a basic web page where the user will select how many stars on their comment. The smart contract will simply reward the OFC to the user.

## There are two applications where I use these smart contracts
1. /Application - I could not get this application to work. At first you connect your wallet, then you mint your character NFT, then you purchase NFT corn with OFC. But the application is suppose to use the custom smart contract to "equip" the corn, but it just cannot do that part. I worked off of the template code from Thirdweb.
2. ./Application2 - This is where I wanted to build my custom application. At first you connect your wallet. Currently, it just shows a comment box, review stars, and a button. If you click the button, then my custom contract will be called and then it will reward the connected wallet with free OFC! 

