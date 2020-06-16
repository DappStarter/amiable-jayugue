require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note praise connect install desert flock genuine'; 
let testAccounts = [
"0xe841ee9e6cebdbb170229b0139049835f86c86b3209a51fa0162e0c77adbceba",
"0xdf76d9b5f3a06e7944096a33cb2fd52bdcb170e461210837e9087b167fcaaf2d",
"0x9cbd97fd7fe09b17066e4f77d2cdfbb29e1c93ab120d47c21d9b68feb935c2a0",
"0x30ccaf28070e0f6e0c877a008207c73f21b80972c889815551ca5e439f42d737",
"0xf671ac4ff9c041f6a2bec92a6f8f4534595b650a112e32b9c8df3ca37d6ebbba",
"0x127b3f5405a25727244103f18a2ee29dc82a1f44da6085db662d0e15f12bd1f7",
"0x2fdedc78fc50d297f7a38654115dfacd65c48c25583c369c9edcc0f19b9305ea",
"0x591e0d5b56b570760afa45fa3233265d25050801f3482a29c566963d3b9502c9",
"0xdff756a729e7bfb4d62a45bfa2280b6ec109e6e10756b372b09f722f491d23f6",
"0xb25a0b60b3368a6a15fcf3d1fbc3f9de5a8408f1e39762c06577068230ceb733"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
