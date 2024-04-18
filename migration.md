# How to migrate your dapp from Ethereum

1. Most of solidity opcodes are the same

| Sodlity notion   | Differences                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| block.difficulty | always zero                                                                |
| block.coinbase   | always 0x4200000000000000000000000000000000000011                          |
| block.basefee    | NOT SUPPORTED                                                              |
| block.timestamp  | it is not equal with current unix timestamp, and it has maximum 60s delay. |

NOTE: you should always set `evmVersion` to `berlin`, Metis doesn't support `shanghai` hardfork yet.

2. Native token and wrapped

Metis is a native token but also an ERC20 compatible token on Layer 2.

The address is `0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000`, but we don't recommend using it, we will remove it in the future.

Sushiswap team deployed a wMetis, it's the same with WETH9, you can use it on your dapps, and the contract address is [0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481](https://andromeda-explorer.metis.io/address/0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481)

ETH is an ERC20 token on Metis, its addresss is `0x420000000000000000000000000000000000000A`

2. RPC methods

It's the same with Ethereum.

Check out [our documentation](https://docs.metis.io/dev/get-started/metis-connection-details) for rpc endpoints

3. Gas fee

It's the same with Ethereum.

4. Block timestamp

As said before. timestamp is not the same with current unix time, because Metis is a layer 2 chain, it depends on Ethereum layer 1 to get the timestamp.

internally, Metis refreshes the timestamp once 10s for Andromeda. so you can see that many blocks have the same time on explorer or rpc.

by the way, blocks are generated per 2 seconds, but if there is no transactions, no blocks will be created.
