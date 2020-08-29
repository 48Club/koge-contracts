require("dotenv").config();

usePlugin("@nomiclabs/buidler-waffle");

const BSC_TESTNET_RPC = process.env.BSC_TESTNET_RPC;
const BSC_TESTNET_PRIVATE_KEY = process.env.KEY_0;

module.exports = {
  solc: {
    version: "0.5.16",
    optimizer: {
      enabled: false,
      runs: 200,
    },
  },
  paths: {
    sources: "./contracts",
  },
  networks: {
    bsc_testnet: {
      url: `${BSC_TESTNET_RPC}`,
      accounts: [`0x${BSC_TESTNET_PRIVATE_KEY}`],
    },
  },
};
