---
title: MetaMask
description: Bienvenue dans cet article sur l'ajout d'Ubiq à Metamask, un guide écrit par les membres de la communauté.
---

<v-alert color="secondary" outlined text>
  Pour une expérience optimale sur Ubiq, Sparrow est fortement recommandé. Ce guide est destiné à ceux qui ont déjà installé MetaMask.
</v-alert>

## Qu'est ce que MetaMask ?

Metamask est une extension de chrome qui sert de portefeuille Ethereum. Elle donne aux utilisateurs la possibilité d'interagir avec le réseau par le biais d'applications web, et aux applications web la possibilité d'interagir avec le portefeuille d'un utilisateur, dans Chrome. Pour en savoir plus ou pour l'installer, consultez le site https://metamask.io/.

![MetaMask](/dojo/metamask/2.png "MetaMask")

## Ajouter Ubiq dans MetaMask

*Veuillez noter : Les portefeuilles matériels ne sont pas compatibles avec MetaMask sur Ubiq en raison d'une différence dans les chemins HD entre les deux réseaux. Si vous souhaitez utiliser un portefeuille matériel, nous vous recommandons d'installer le portefeuille interne d'Ubiq, Sparrow*

Lorsqu'on interagit avec une chaîne EVM comme Ethereum ou Ubiq, les nœuds peuvent fonctionner sur n'importe quel ordinateur et on peut interagir avec eux par le biais d'appels Web "RPC".

Si les utilisateurs peuvent exécuter des nœuds locaux et s'y connecter, ils peuvent également utiliser des points de terminaison RPC publics mis en place par d'autres.

Dans ce tutoriel, nous allons utiliser le point d'accès RPC d'Octano pour Ubiq. Une fois MetaMask installé, cliquez sur le menu déroulant en haut de l'extension pour les réseaux, et sélectionnez "RPC personnalisé".

![Custom RPC](/dojo/metamask/3.png "Custom RPC")

Entrez les détails suivants:

```
Network Name:         Ubiq
New RPC URL:          https://rpc.octano.dev
ChainID:              8
Symbol:               UBQ
Block Explorer URL:   https://ubiqscan.io
```

![Custom RPC](/dojo/metamask/4.png "Click save")

Une fois fait, vous deviriez voir Ubiq dans la liste des résaux.

*Veuillez noter qu'à partir de MetaMask v.8.1.3, vous pouvez rencontrer un message indiquant "Réseau personnalisé non valide". Il semble qu'il s'agisse simplement d'un dialogue de confirmation pour protéger l'utilisateur. Dans ce cas, il suffit de saisir à nouveau le ChainID comme 8 dans le même menu Paramètres et le problème devrait être résolu*

![Custom RPC](/dojo/metamask/5.png "success")

Félicitation ! Ubiq est maintenant ajouté dans Metamask !

## Faire des transactions

Maintenant nous allons faire quelques transactions de test avec MetaMask ; une entrée et une sortie.

### Dans MetaMask

![Making Transactions](/dojo/metamask/6.png "Into MetaMask")

Tout d'abord, pour envoyer des UBQ à votre porte-monnaie MetaMask, copiez votre adresse MetaMask.

Ensuite, envoyez des UBQ depuis le portefeuille de votre choix, et attendez la confirmation de la transaction.

![Making Transactions](/dojo/metamask/7.png "Received")

Si tout s'est bien passé, vous verrez les UBQ dans votre portefeuille MetaMask.

### En dehors de MetaMask

Enfin, nous allons envoyer un peu d'UBQ. Cliquez sur envoyer, puis entrez le montant et la destination.

![Making Transactions](/dojo/metamask/8.png "Out of MetaMask")

Puis cliquez sur confirmer:

![Making Transactions](/dojo/metamask/9.png "Confirm")

Une fois la transaction confirmée, vous verrez les soldes mis à jour dans les deux portefeuilles !

## Conclusion

Si vous avez besoin d'aide pour ajouter Metamask, ou si vous souhaitez en savoir plus et discuter avec les développeurs ou d'autres membres de la communauté, rendez-vous sur le serveur [Ubiq Discord](https://discord.gg/XaqzJB4). Nous sommes impatients de vous rencontrer.
