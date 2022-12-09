# A hardhat template for Metis chain

## Test

```
npm test
```

## Compile

```
npm run compile
```

## Deploy

```
npx hardhat --network metisgoerli deploy
```

## Verify

```
npx hardhat --network metisgoerli etherscan-verify
```

# How to migrate your dapp from Ethereum

1. Most of solidity opcodes are the same

| Sodlity notion   | Differences                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| block.difficulty | always zero                                                                                                                   |
| block.coinbase   | always 0x4200000000000000000000000000000000000011                                                                             |
| block.basefee    | NOT SUPPORTED                                                                                                                 |
| block.timestamp  | it is not equal with current unix timestamp, and it has maximum 60s delay.(NOTE: blocks are not generated at a constant time) |

NOTE: if you're using solidity 0.8.9 or above, the default evm version is `London`, and it's not supported by Metis, you should set `evmVersion` to berlin.

1.1 non-EIP155 txs is disabled for now

you should always use EIP155 to build and sign your transactions.

We will enable non-eip155 txs in next hardfork.

2. Native token and wrapped

Metis is a native token but also an ERC20 compatible token on Layer 2. 

It is a built-in feature, so there is no need to create a wrapped Metis token, and the source code is [here](https://github.com/MetisProtocol/mvm/blob/develop/packages/contracts/contracts/MVM/MVM_Coinbase.sol). 

Sushiswap team deployed a wMetis, it's the same with WETH9, and the contract address is [0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481](https://andromeda-explorer.metis.io/address/0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481/contracts)

ETH is an ERC20 token on Metis, its addresss is `0x420000000000000000000000000000000000000A`

2. RPC methods

It's the same with Ethereum.

Check out [our documentation](https://docs.metis.io/dev/get-started/metis-connection-details) for rpc endpoints

3. Gas fee

It's the same with Ethereum.
