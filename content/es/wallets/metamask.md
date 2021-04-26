---
title: Using MetaMask
description: Welcome to this article on adding Ubiq to Metamask, a guide written by members of the community.
createdAt: 2021-01-01T00:00:02.966Z
---

<v-alert color="secondary" outlined text>
  For an optimal experience on Ubiq, Sparrow is highly recommended. This guide is for those that already have MetaMask installed.
</v-alert>

## What is MetaMask?

Metamask is a chrome extension that serves as an Ethereum wallet. It gives users the ability to interact with the network through web apps, and web apps the ability to interact with a user’s wallet, in Chrome. To read more about it, or to install it, check out https://metamask.io/

![MetaMask](/dojo/metamask/2.png "MetaMask")

## Add Ubiq to MetaMask

*Please note: Hardware wallets are not compatible with MetaMask on Ubiq due to a difference in HD paths between the two networks. If you would like to use a hardware wallet our recommendation is to install Ubiq’s in-house wallet, Sparrow.*

When interacting with an EVM chain like Ethereum or Ubiq, nodes can run on any computer and can be interacted with through “RPC” web calls.

While users can run local nodes and connect to them, they can also use public RPC endpoints set up by others.

In this tutorial, we will be using Octano’s RPC endpoint for Ubiq. Once MetaMask is installed, click the dropdown at the top of the extension for networks, and select “Custom RPC”.

![Custom RPC](/dojo/metamask/3.png "Custom RPC")

Enter the following details:

```
Network Name:         Ubiq
New RPC URL:          https://rpc.octano.dev
ChainID:              8
Symbol:               UBQ
Block Explorer URL:   https://ubiqscan.io
```

![Custom RPC](/dojo/metamask/4.png "Click save")

Once that’s complete, you should see Ubiq in the dropdown for networks.

*Please note that as of MetaMask v.8.1.3, you may encounter a message that reads “Invalid Custom Network”. It appears to simply be a confirmation dialogue to protect the user. In that event, simply re-enter the ChainID as 8 in the same Settings menu and the issue should be resolved.*

![Custom RPC](/dojo/metamask/5.png "success")

Ubiq is now added to MetaMask!

## Making transactions

Now we’ll make a couple of test transactions with MetaMask; one in and one out.

### Into MetaMask

![Making Transactions](/dojo/metamask/6.png "Into MetaMask")

First, to send some UBQ to your MetaMask wallet, copy your MetaMask address.

Next, send some UBQ in from the wallet of your choice, and wait for the transaction to confirm.

![Making Transactions](/dojo/metamask/7.png "Received")

If all went well, you will see UBQ in your MetaMask wallet.

### Out of MetaMask

Finally, we’ll send some UBQ out. Click send, then enter the amount & destination.

![Making Transactions](/dojo/metamask/8.png "Out of MetaMask")

And click confirm:

![Making Transactions](/dojo/metamask/9.png "Confirm")

Once the transaction is confirmed, you’ll see the updated balances in both wallets!

## Conclusion

For help with adding Metamask, or if you’d like to learn more and chat with core devs or other members of the community, drop by the [Ubiq Discord](https://discord.gg/XaqzJB4) server. We’re looking forward to meeting you.