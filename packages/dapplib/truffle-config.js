require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pulp hockey kiwi once task'; 
let testAccounts = [
"0xfa34a22b2508783a17023763ea76c33d249d13526ef91b0841a053fc7a623025",
"0x400fd14426426e50364a31aab44433d675a16de8dbce1f9391fbaaf0635d5d8a",
"0x624ddac01ac4963547a848bf9721fd26671bcf890582bebc275a81d326d5e7db",
"0x218d3fed2d240408037e2d5164db904415f0912b98c3436f7f71b3a9fb12fdea",
"0x29221cac5bfcf147b5d24bb1732b1c86105ab63dd29b34ad3f72da4fb15a1d44",
"0x1da1520bb9da5aa342deda9501b3c77cbe70f8771673d6a8edac4ae518e8e412",
"0x35c25efffc82d13c50ab79bcb1ee4280af223aec14d75ec3ae164994da93867f",
"0x25a7bdb87ffe7bed3244cd2b8640046067677883fd5c7cc49a40713539f6763b",
"0x90fb01c0f9e9faf0be79ae369fafa3b72123d627d6446f84eae15216a1e550a8",
"0x14f06dbdf1bf04fdd0ca8eb5669d329feb5b1dbfe970ea90136207258d7ec96b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

