---
title: About Shinobi
description: Shinobi is a fully decentralized trading protocol on Ubiq.
createdAt: 2021-01-01T00:00:10.966Z
---

## What is Shinobi 

Shinobi is a protocol for creating liquidity and trading ERC-20 tokens on Ubiq. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Where it makes tradeoffs - decentralization, censorship resistance and security are prioritized. Shinobi is open-source software, based on uniqswapV2, licensed under GPL.

## How does Shinobi work?

Shinobi is an automated liquidity protocol. In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced, a Shinobi pool can always be used to buy or sell a token without requiring a counterparty on the other side of a trade.

## How are prices determined?

Prices are determined by the amount of each token in a pool. The smart contract maintains a constant using the following function: x*y=k. In this case x = token0, y = token1, k = constant. During each trade a certain amount of one token is removed from the pool for an amount of the other token. To maintain k, the balances held by the smart contract are adjusted during the execution of the trade, therefore changing the price.

## How do I add a logo for a token?

Shinobi much like Ubiqscan, pulls from the trustwallet asset repository on github forked by octano. https://github.com/octanolabs/assets Add your token icon to that repo and it will appear on the frontend and on info.

*note: unlike the original repo, the octano fork does not charge for merges..*

## How can I add a token to Shinobi?

Shinobi is compatible with any ERC-20 token in the Ubiq ecosystem. If you want your project to be searchable in their interface, you should seek to be added to a reputable token list or share a link to your token using query parameters. Once loaded via link, the token will be added to their interface.

Another option is to open a request using github issues.

The octano team makes no guarantees nor provides any timeline for such requests. Nor will the team ever charge or request funds. We’ve added many UX features to make it easier to share a new token with communities - features such as local storage support and custom linking. Please make use of them.
