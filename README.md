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

2. Native token and wrapped

Metis is a native token but also an ERC20 compatible token on Layer 2.

It is a built-in feature, so there is no need to create a wrapped Metis token.

ETH is an ERC20 token on Metis, its addresss is `0x420000000000000000000000000000000000000A`

2. RPC methods

It's the same with Ethereum.

Check out [our documatation](https://docs.metis.io/dev/get-started/metis-connection-details) for rpc endpoints

3. Gas fee

It's the same with Ethereum.
