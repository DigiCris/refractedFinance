//npm install dotenv
require('dotenv').config();
//npm install truffle-hdwallet-provider
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
/*
     mumbai: {
       provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mumbai.g.alchemy.com/v2/${process.env.PROJECT_ID}`),
       network_id: 80001,       // Goerli's id
       confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
*/
    development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 8545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
    },
  },

  mocha: {

  },

  compilers: {
    solc: {
      version: "0.8.19"
    }
  }
};
