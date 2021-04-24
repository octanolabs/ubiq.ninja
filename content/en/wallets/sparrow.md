---
title: Using Sparrow
description: Welcome to a new series of posts aimed to explain the components of the Ubiq DEX. This post seeks to explain what tools a user needs to interact with the Ubiq DEX and how to use them in conjunction with existing Ubiq infrastructure.
createdAt: 2021-01-01T00:00:01.966Z
---

## What is Sparrow?

Sparrow is a web-based wallet that is built to be compatible with the Ubiq network. It was originally forked from MetaMask (the Ethereum equivalent) in 2017. Among other functionality, it is also used as the main toolset to interact with the Ubiq DEX.

Sparrow can be installed as an extension on either Firefox, Chrome, Brave or Opera internet browsers.

## How do I install it?

First, it is important to note that it is highly recommended that Sparrow is installed on a separate web browser to any MetaMask install. Due to the similar nature of this software there is potential for conflicts to arise if you use the same browser.

<v-alert color="primary" text outlined>You can now install Sparrow and Metamask on Chrome if you use different user profiles. We have included a new instructional video put together by community member ‘Moon’ later in this article.</v-alert>

To install Sparrow, go the store for the browser you want to use:

* [Chrome & Brave](https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd)
* [Firefox](https://addons.mozilla.org/addon/ubiq-sparrow/)
* [Opera](https://addons.opera.com/en/)

In each of these stores, there is a search bar. Search for ‘Sparrow’ and look through the results for the green bird.

Click on the extension entry and there will be a button to add it to your browser.

![chrome web store](/dojo/sparrow/1.png "Chrome web store")

Once you add to your browser, you may get a popup asking to confirm adding Sparrow as an extension to your browser.

![chrome web store](/dojo/sparrow/2.png "Add extension")

If this installs correctly you should now see the Sparrow icon on your browser ribbon.

![chrome web store](/dojo/sparrow/3.png "Extension added")

Any time you would like to access Sparrow you can click this button.

## How do I set it up?

Once you have installed Sparrow, you should be presented with a welcome page. Click `Get Started` to continue.

![Sparrow](/dojo/sparrow/4.png "Get Started")

You will then have the option of importing a pre-existing wallet or setting a new one up. For this part of the guide we will look at setting a brand new wallet up. Click ‘Create a Wallet’ to continue.

![Sparrow](/dojo/sparrow/5.png "New to Sparrow")

Next, you will be prompted to create a password and then have to type it out a second time to confirm that you have memorized it. Fill out both fields and then click `Create`.

![Sparrow](/dojo/sparrow/6.png "Create Password")

Sparrow will now generate a backup phrase for you. This backup phrase is your `seed phrase` mentioned on the second screen. Any user can use this seed phrase to bypass your password if they have access to it, so make sure you read the section of this report around security.

Click to reveal your secret words, write them down somewhere and click `Next`.

![Sparrow](/dojo/sparrow/7.png "Backup")

You will then be asked to confirm the seed phrase you just noted down, in the order it was presented. Click each of the words until the order matches the previous screen, then click ‘Confirm’. Please note, this will be the last time Sparrow confirms your seed phrase to you, so ensure that you have this stored securely.

![Sparrow](/dojo/sparrow/8.png "Confirm")

Lastly, if you entered your seed phrase correctly, you will be presented with a congratulations page. Click `All done` to move on.

![Sparrow](/dojo/sparrow/9.png "Congratulations")

Now your account is set up, you will see a summary page of your account details.

![Sparrow](/dojo/sparrow/10.png "Account details")

Congratulations, you can now use Sparrow as your wallet! If you want to know what your address is to deposit UBQ you can copy the address by clicking on the account button. You may also view your account address by pressing the settings button (3 dots) at the top right and then clicking `Account Details`.

![Sparrow](/dojo/sparrow/11.png "Two ways to see your account details")

## How to restore an account

This section explains how you restore your account on Sparrow using your seed phrase. Load up Sparrow and click `Import using account seed phrase`.

![Sparrow](/dojo/sparrow/12.png "Welcome back")

Next, enter your seed phrase in the order it was initially presented to you, into the ‘Wallet Seed’ text box. Ensure that you separate each seed phrase word with a space.

Additionally, you will have an opportunity to set a new password. Fill out the ‘New Password’ text box and confirm by typing it out again in the box below it.

Then click `Restore`.

![Sparrow](/dojo/sparrow/13.png "Restore")

Once you’ve done this you will have access to your account again, safeguarded by your new password.

## A note on security

Your funds that you add to Sparrow will be secured by both your seed phrase and the password you choose.

When setting up Sparrow you will be prompted to write down your seed phrase. It is highly recommended that you do not store this electronically on a device that can be accessed via the internet. Write it down on paper, paste it on a text file on a USB stick, but do not have this internet-accessible. If your computer ever becomes compromised then hackers can get a hold of this seed phrase and effectively bypass your password.

When you select a password, avoid using single words (e.g. birthday) or sequential numbers or letters (1234, abcd). Generally speaking use as long as a password as possible, as each additional character adds exponential difficulty to cracking it.

In crypto there is, by default, no third party that can return your funds or reverse a transaction for you. If your funds get stolen, unfortunately no-one will be there to rescue you.

## Video Guide

*Video Guide on Setting up Sparrow on Chrome (even if you have MetaMask installed)*

Thanks again to __Moon__ for putting together this quick video tutorial.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=BZRDAfGjB7A" target="_blank"><img src="http://img.youtube.com/vi/BZRDAfGjB7A/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="100%" height="380px" border="10" /></a>

## Connect to Shinobi

First, ensure all previous steps in setting up your Sparrow wallet have been completed.

At the top right hand side of the Shinobi website, click `Connect to a Wallet`.

![Sparrow](/dojo/sparrow/14.png "Connect to Wallet")

Then, select Sparrow from the popup and when prompted, enter the password from when you created your account.

![Sparrow](/dojo/sparrow/15.png "Connected")

Shinobi is now connected to Sparrow and you can place trades or add liquidity.

## Can’t see my token in Sparrow!

The current version of Sparrow has a number of Ubiq tokens already supported. However, due to the decentralized nature of Shinobi, a developer can build a new token and add it for trading at any time.

If you would like to add a token to Sparrow then click the `Add Token` button.

![Sparrow](/dojo/sparrow/16.png "Add token")

You can then either search for the token or add it under `Custom Token`. To do this you will need the contract address for the token you are adding. Tokens are created by individual third parties. They will need to provide you the token address in order for you to add it to the `Token Contract Address` field.

![Sparrow](/dojo/sparrow/17.png "Add tokens")

Once the token contract address is added, the remainder of the fields will auto-populate. Then just click the `Next` Button and you should see your new tokens in Sparrow.

## Can I not just use MetaMask?

The Ubiq network is compatible for use with MetaMask as well.

Please note, there are some key differences between Sparrow and MetaMask. Your gas consumption calculations may default to a price higher than what is required with UBQ, so be sure to double check. Also, there is no Ledger or Trezor hardware wallet functionality when using MetaMask with Ubiq . Because MetaMask uses a different HD path scheme than Ubiq, it will result in either not connecting, or displaying addresses from a different path that will not contain your assets. This is issue was fixed by the Ubiq developers with the release of the newest version of Sparrow, where you can use both Ledger and Trezor wallets seamlessly.

Specifically for Trezor: https://github.com/ubiq/ubq-trezor-keyring

and for Ledger: https://github.com/ubiq/ubq-ledger-bridge-keyring

## A note on gas

Gas consumption on the Ethereum network was one of the main drivers in providing a compatible version of Uniswap on the Ubiq newtork.

Lately, some Uniswap users have been being charged as much as 500 Gwei per transaction. The Ubiq network provides a much less expensive alternative, with each transaction defaulting to 20 Gwei.

We do not anticipate any immediate increase in gas price costs, especially considering that the Ubiq network has been benchmarked against Ethereum and found to have twice the transaction throughput at a 40 million block gas limit.

If for some reason this becomes an issue in the future, we will look to issue further guidance to the community.

Thanks for taking the time to read this and be part of the Ubiq community. Whilst this guide aims to answer the most common questions there will always be issues we cannot foresee. If you are having problems then our strong recommendation it to ask questions in the #Help channel on the [Ubiq Discord](https://discord.gg/XaqzJB4).