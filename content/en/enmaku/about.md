---
title: About
description: Enmaku is a fully decentralized protocol for private transactions on Ubiq.
createdAt: 2021-01-01T00:00:10.966Z
---

## Why Enmaku?

The complete transparency of blockchains is great for accountability, however it exposes individual users to unnecessary risk, every person you interact with, can now see your entire transaction history, when those transactions took place, and your current asset balances. Privacy tools are a necessary addition to blockchian, allowing users to protect their transaction data from potentially malicious parties.

## How It Works
### Deposit
A user generates a random key (note) and deposits Ubiq or an ERC20, along with submitting a hash of the note to the Enmaku smart contract.

### Wait
After depositing, users should wait some amount of time before withdrawing to improve their privacy.

### Withdraw
A user submits a proof of having the valid key to one of the notes deposited and the contract transfers Ubiq or the ERC20 to a specified recipient.

## How Enmaku achieves privacy

Enmaku improves transaction privacy by breaking the on-chain link between source and destination addresses. It uses a smart contract that accepts UBQ deposits that can be withdrawn by a different address. To preserve privacy a relayer can be used to withdraw to an address with no UBQ balance. Whenever UBQ is withdrawn by the new address, there is no way to link the withdrawal to the deposit, ensuring complete privacy.

## Decentralized

Enmaku is fully decentralized and owned by the community: The initial developers have no control over it and are not running any servers.

## Compliance

Maintaining financial privacy is essential to preserving our freedoms. Enmaku has built-in tools for proving your transaction history and selectively disclosing Enmaku deposits.

## Trusted Setup Ceremony

Enmaku uses the same trusted circuits produced by the [Tornado Cash](https://tornado.cash/) Trusted setup Ceremony.

with over 1114 contributions, as long as at least 1 contribution is honest, the zkSNARK keys are secure.

