require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const INFURA_API_KEY = "8vHt9D8-L6TnWojx6VYlWZc3Bqy8T36A";
const SEPOLIA_PRIVATE_KEY = "37c2c6b8b6e7050634fd95e9132394bc9b79c41ba2a58bd824698d8c43a9e03e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "G3SMTWSBEAVVQ2B6GYPRBQFUJHJXV3HAC6"
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/8vHt9D8-L6TnWojx6VYlWZc3Bqy8T36A`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    }
  }
};
