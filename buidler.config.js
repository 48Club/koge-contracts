require('dotenv').config();

usePlugin('@nomiclabs/buidler-waffle');

module.exports = {
  solc: {
    version: '0.7.1',
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  paths: {
    sources: './contracts'
  },
  networks: {
    bsc_testnet: {
      url: process.env.BSC_TESTNET_RPC,
      accounts: [process.env.BSC_TESTNET_KEY]
    },
    bsc_mainnet: {
      url: process.env.BSC_MAINNET_RPC,
      accounts: [process.env.BSC_MAINNET_KEY]
    }
  }
};
