//lshBYiAl1bWRiacGqd4btyMirPfVrwmG
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    url: 'https://eth-sepolia.g.alchemy.com/v2/pmzpT1090ebm06SqKD9ZHocqmQ6nGBij',
    accounts: [ MetaMaskPK ]
  }
};
