---
title: API
description: This section explains the Shinobi Subgraph and how to interact with it.
createdAt: 2021-01-01T00:00:11.966Z
---

<v-alert color="secondary" outlined text>To simplify integration with existing services & codebases the Shinobi API mimics the Uniswap V2 API 1:1, field names may include 'ETH' or 'Uniswap', this is intended to save you time.</v-alert>

## Overview

The Shinobi subgraph indexes data from the Shinobi contracts over time. It organizes data about pairs, tokens, Shinobi as a whole, and more. The subgraph updates any time a transaction is made on Shinobi.

### Resources

* [Shinobi subgraph](https://github.com/octanolabs/shinobi-subgraph) - source code for deployed subgraph

### Usage

Shinobi's subgraph matches Uniswap V2's 1:1, if you already have code that uses Uniswaps subgraph you can simply point your apollo client at the Shinobi endpoint hosted by Octano: https://graphnode.octano.dev/subgraphs/name/octanolabs/shinobi

The subgraph provides a snapshot of the current state of Shinobi and also tracks historical data. It is currently used to power https://shinobi-info.ubiq.ninja. It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).

### Making Queries

To learn more about querying a subgraph refer to [The Graph’s documentation](https://thegraph.com/docs/introduction).

## Entities

Entities define the schema of the subgraph, and represent the data that can be queried. Within each entity are sets of fields that store useful information related to the entity. Below is a list of the available entities within the Uniswap Subgraph, and descriptions for the available fields.

To see an interactive sandbox of all entities see the [Graph Explorer](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2).

Each entity is defined with a value type, which will always be a base AssemblyScript type, or a custom type provided by The Graph's custom TypeScript library. For more information on value types see [here](https://thegraph.com/docs/assemblyscript-api#api-reference).

### Factory

The `UniswapFactory` entity is responsible for storing aggregate information across all Shinobi pairs. It can be used to view stats about total liquidity, volume, amount of pairs and more. There is only one `UniswapFactory` entity in the subgraph.

| Field Name        | Value Type | Description                                                     |
| ----------------- | ---------- | --------------------------------------------------------------- |
| id                | ID         | factory address                                                 |
| pairCount         | Int        | amount of pairs created by the Shinobi factory                  |
| totalVolumeUSD    | BigDecimal | all time USD volume across all pairs (USD is derived)           |
| totalVolumeETH    | BigDecimal | all time volume in UBQ across all pairs (UBQ is derived)        |
| totalLiquidityUSD | BigDecimal | total liquidity across all pairs stored as a derived USD amount |
| totalLiquidityETH | BigDecimal | total liquidity across all pairs stored as a derived UBQ amount |
| txCount           | BigInt     | all time amount of transactions across all pairs                |

### Token

Stores aggregated information for a specific token across all pairs that token is included in.

| Field Name         | Value Type | Description                                                                                                  |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| id                 | ID         | token address                                                                                                |
| symbol             | String     | token symbol                                                                                                 |
| name               | String     | token name                                                                                                   |
| decimals           | BigInt     | token decimals                                                                                               |
| tradeVolume        | BigDecimal | amount of token traded all time across all pairs                                                             |
| tradeVolumeUSD     | BigDecimal | amount of token in USD traded all time across pairs (only for tokens with liquidity above minimum threshold) |
| untrackedVolumeUSD | BigDecimal | amount of token in USD traded all time across pairs (no minimum liquidity threshold)                         |
| txCount            | BigInt     | amount of transactions all time in pairs including token                                                     |
| totalLiquidity     | BigDecimal | total amount of token provided as liquidity across all pairs                                                 |
| derivedETH         | BigDecimal | UBQ per token                                                                                                |

### Pair

Information about a pair. Includes references to each token within the pair, volume information, liquidity information, and more. The pair entity mirrors the pair smart contract, and also contains aggregated information about use.

| Field Name           | Value Type          | Description                                                                                                         |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| id                   | ID                  | pair contract address                                                                                               |
| factory              | UniswapFactory      | reference to Shinobi factory entity                                                                                 |
| token0               | Token               | reference to token0 as stored in pair contract                                                                      |
| token1               | Token               | reference to token1 as stored in pair contract                                                                      |
| reserve0             | BigDecimal          | reserve of token0                                                                                                   |
| reserve1             | BigDecimal          | reserve of token1                                                                                                   |
| totalSupply          | BigDecimal          | total supply of liquidity token distributed to LPs                                                                  |
| reserveETH           | BigDecimal          | total liquidity in pair stored as an amount of UBQ                                                                  |
| reserveUSD           | BigDecimal          | total liquidity amount in pair stored as an amount of USD                                                           |
| trackedReserveETH    | BigDecimal          | total liquidity with only tracked amount (see tracked amounts)                                                      |
| token0Price          | BigDecimal          | token0 per token1                                                                                                   |
| token1Price          | BigDecimal          | token1 per token0                                                                                                   |
| volumeToken0         | BigDecimal          | amount of token0 swapped on this pair                                                                               |
| volumeToken1         | BigDecimal          | amount of token1 swapped on this pair                                                                               |
| volumeUSD            | BigDecimal          | total amount swapped all time in this pair stored in USD (only tracked if USD liquidity is above minimum threshold) |
| untrackedVolumeUSD   | BigDecimal          | total amount swapped all time in this pair stored in USD, no minimum liquidity threshold                            |
| txCount              | BigInt              | all time amount of transactions on this pair                                                                        |
| createdAtTimestamp   | BigInt              | timestamp contract was created                                                                                      |
| createdAtBlockNumber | BigInt              | Ubiq block contract was created                                                                                 |
| liquidityPositions   | [LiquidityPosition] | array of liquidity providers, used as a reference to LP entities                                                    |

### User

A user entity is created for any address that provides liquidity to a pool on Shinobi. This entity
can be used to track open positions for users. LiquidyPosition entities can be referenced to get
specific data about each position.

| Field Name         | Value Type          | Description                                    |
| ------------------ | ------------------- | ---------------------------------------------- |
| id                 | ID                  | user address                                   |
| liquidityPositions | [LiquidityPosition] | array of all liquidity positions user has open |
| usdSwapped         | BigDecimal          | total USD value swapped                        |

### LiquidityPositiion

This entity is used to store data about a user's liquidity position. This information, along with
information from the pair itself can be used to provide position sizes, token deposits, and more.

| Field Name            | Value Type | Description                                               |
| --------------------- | ---------- | ----------------------------------------------------------|
| id                    | ID         | user address and pair address concatenated with a dash    |
| user                  | User       | reference to user                                         |
| pair                  | Pair       | reference to the pair liquidity is being provided on      |
| liquidityTokenBalance | BigDecimal | amount of LP tokens minted for this position              |

### Transaction

Transaction entities are created for each Ubiq transaction that contains an interaction within Shinobi contracts. This subgraph tracks Mint, Burn, and Swap events on the Shinobi core contracts. Each transaction contains 3 arrays, and at least one of these arrays has a length of 1.

| Field Name  | Value Type | Description                                               |
| ----------- | ---------- | --------------------------------------------------------- |
| id          | ID         | Ubiq transaction hash                                 |
| blockNumber | BigInt     | block transaction was mined in                            |
| timestamp   | BigInt     | timestamp for transaction                                 |
| mints       | [Mint]     | array of Mint events within the transaction, 0 or greater |
| burns       | [Burn]     | array of Burn events within transaction, 0 or greater     |
| swaps       | [Swap]     | array of Swap events within transaction, 0 or greater     |

### Mint

Mint entities are created for every emitted Mint event on the Shinobi core contracts. The Mint entity stores key data about the event like token amounts, who sent the transaction, who received the liquidity, and more. This entity can be used to track liquidity provisions on pairs.

| Field Name   | Value Type  | Description                                                 |
| ------------ | ----------- | ----------------------------------------------------------- |
| id           | ID          | Transaction hash plus index in the transaction mint array   |
| transaction  | Transaction | reference to the transaction Mint was included in           |
| timestamp    | BigInt      | timestamp of Mint, used to sort recent liquidity provisions |
| pair         | Pair        | reference to pair                                           |
| to           | Bytes       | recipient of liquidity tokens                               |
| liquidity    | BigDecimal  | amount of liquidity tokens minted                           |
| sender       | Bytes       | address that initiated the liquidity provision              |
| amount0      | BigDecimal  | amount of token0 provided                                   |
| amount1      | BigDecimal  | amount of token1 provided                                   |
| logIndex     | BigInt      | index in the transaction event was emitted                  |
| amountUSD    | BigDecimal  | derived USD value of token0 amount plus token1 amount       |
| feeTo        | Bytes       | address of fee recipient (if fee is on)                     |
| feeLiquidity | BigDecimal  | amount of liquidity sent to fee recipient (if fee is on)    |

### Burn

Burn entities are created for every emitted Burn event on the Shinobi core contracts. The Burn entity stores key data about the event like token amounts, who burned LP tokens, who received tokens, and more. This entity can be used to track liquidity removals on pairs.

| Field Name   | Value Type  | Description                                               |
| ------------ | ----------- | --------------------------------------------------------- |
| id           | ID          | Transaction hash plus index in the transaction burn array |
| transaction  | Transaction | reference to the transaction Burn was included in         |
| timestamp    | BigInt      | timestamp of Burn, used to sort recent liquidity removals |
| pair         | Pair        | reference to pair                                         |
| to           | Bytes       | recipient of tokens                                       |
| liquidity    | BigDecimal  | amount of liquidity tokens burned                         |
| sender       | Bytes       | address that initiated the liquidity removal              |
| amount0      | BigDecimal  | amount of token0 removed                                  |
| amount1      | BigDecimal  | amount of token1 removed                                  |
| logIndex     | BigInt      | index in the transaction event was emitted                |
| amountUSD    | BigDecimal  | derived USD value of token0 amount plus token1 amount     |
| feeTo        | Bytes       | address of fee recipient (if fee is on)                   |
| feeLiquidity | BigDecimal  | amount of tokens sent to fee recipient (if fee is on)     |

### Swap

Swap entities are created for each token swap within a pair. The Swap entity can be used to get things like swap size (in tokens and USD), sender, recipient and more. See the Swap overview page
for more information on amounts.

| Field Name  | Value Type  | Description                                           |
| ----------- | ----------- | ----------------------------------------------------- |
| id          | ID          | transaction hash plus index in Transaction swap array |
| transaction | Transaction | reference to transaction swap was included in         |
| timestamp   | BigInt      | timestamp of swap, used for sorted lookups            |
| pair        | Pair        | reference to pair                                     |
| sender      | Bytes       | address that initiated the swap                       |
| amount0In   | BigDecimal  | amount of token0 sold                                 |
| amount1In   | BigDecimal  | amount of token1 sold                                 |
| amount0Out  | BigDecimal  | amount of token0 received                             |
| amount1Out  | BigDecimal  | amount of token1 received                             |
| to          | Bytes       | recipient of output tokens                            |
| logIndex    | BigInt      | event index within transaction                        |
| amountUSD   | BigDecimal  | derived amount of tokens sold in USD                  |

### Bundle

The Bundle is used as a global store of derived UBQ price in USD. Because there is
no guaranteed common base token across pairs, a global reference of USD price is useful
for deriving other USD values. The Bundle entity stores an updated price retreived from the Octano price oracle (populated using coingecko's API)

| Field Name | Value Type | Description                                           |
| ---------- | ---------- | ----------------------------------------------------- |
| id         | ID         | constant 1                                            |
| ethPrice   | BigDecimal | derived price of UBQ in USD                           |

## Historical Entities

The subgraph tracks aggregated information grouped by days to provide insights to daily activity on Shinobi. While [time travel queries](https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/) can be used for direct comparison against values in the past, it is much more expensive to query grouped data. For this reason the subgraph tracks information grouped in daily buckets, using timestamps provided by contract events. These entities can be used to query things like total volume on a given day, price of a token on a given day, etc.

For each DayData type, a new entity is created each day.

### UniswapDayData

Tracks data across all pairs aggregated into a daily bucket.

| Field Name        | Value Type      | Description                                                                      |
| ----------------- | --------------- | -------------------------------------------------------------------------------- |
| id                | ID              | unix timestamp for start of day / 86400 giving a unique day index                |
| date              | Int             | unix timestamp for start of day                                                  |
| dailyVolumeETH    | BigDecimal      | total volume across all pairs on this day, stored as a derived amount of UBQ     |
| dailyVolumeUSD    | BigDecimal      | total volume across all pairs on this day, stored as a derived amount of USD     |
| totalVolumeETH    | BigDecimal      | all time volume across all pairs in UBQ up to and including this day             |
| totalLiquidityETH | BigDecimal      | total liquidity across all pairs in UBQ up to and including this day             |
| totalVolumeUSD    | BigDecimal      | all time volume across all pairs in USD up to and including this day             |
| totalLiquidityUSD | BigDecimal      | total liquidity across all pairs in USD up to and including this day             |
| maxStored         | Int             | reference used to store most liquid tokens, used for historical liquidity charts |
| mostLiquidTokens  | [TokenDayData!] | tokens with most liquidity in Shinobi                                            |
| txCount           | BigInt          | number of transactions throughout this day                                       |

### Pair Day Data

Tracks pair data across each day.

| Field Name        | Value Type | Description                                                                                      |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| id                | ID         | pair contract address and day id (day start timestamp in unix / 86400) concatenated with a dash  |
| date              | Int        | unix timestamp for start of day                                                                  |
| pairAddress       | Bytes      | address for pair contract                                                                        |
| token0            | Token      | reference to token0                                                                              |
| token1            | Token      | reference to token1                                                                              |
| reserve0          | BigDecimal | reserve of token0 (updated during each transaction on pair)                                      |
| reserve1          | BigDecimal | reserve of token1 (updated during each transaction on pair)                                      |
| totalSupply       | BigDecimal | total supply of liquidity token distributed to LPs                                               |
| reserveUSD        | BigDecimal | reserve of token0 plus token1 stored as a derived USD amount                                     |
| dailyVolumeToken0 | BigDecimal | total amount of token0 swapped throughout day                                                    |
| dailyVolumeToken1 | BigDecimal | total amount of token1 swapped throughout day                                                    |
| dailyVolumeUSD    | BigDecimal | total volume within pair throughout day                                                          |
| dailyTxns         | BigInt     | amount of transactions on pair throughout day                                                    |

### TokenDayData

Tracks token data aggregated across all pairs that include token.

| Field Name          | Value Type    | Description                                                                                                                            |
| ------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| id                  | ID            | token address and day id (day start timestamp in unix / 86400) concatenated with a dash                                                         |
| date                | Int           | unix timestamp for start of day                                                                                                        |
| token               | Token         | reference to token entity                                                                                                              |
| dailyVolumeToken    | BigDecimal    | amount of token swapped across all pairs throughout day                                                                                |
| dailyVolumeETH      | BigDecimal    | amount of token swapped across all pairs throughout day stored as a derived amount of UBQ                                              |
| dailyVolumeUSD      | BigDecimal    | amount of token swapped across all pairs throughout day stored as a derived amount of USD                                              |
| dailyTxns           | BigInt        | amount of transactions with this token across all pairs                                                                                |
| totalLiquidityToken | BigDecimal    | token amount of token deposited across all pairs                                                                                       |
| totalLiquidityETH   | BigDecimal    | token amount of token deposited across all pairs stored as amount of UBQ                                                               |
| totalLiquidityUSD   | BigDecimal    | token amount of token deposited across all pairs stored as amount of USD                                                               |
| priceUSD            | BigDecimal    | price of token in derived USD                                                                                                          |
| maxStored           | Int           | amount of token deposited in pair with highest token liquidity - used only as a reference for storing most liquid pairs for this token |
| mostLiquidPairs     | [PairDayData] | pairs with most liquidity for this token                                                                                               |
