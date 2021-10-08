---
title: À propos de Shinobi
description: Shinobi est un protocole de trading entièrement décentralisé sur Ubiq.
---

## Qu'est ce que Shinobi ?

Shinobi est un protocole pour créer de la liquidité et échanger des jetons ERC-20 sur Ubiq. Il élimine les intermédiaires de confiance et les formes inutiles d'extraction de rente, ce qui permet des échanges rapides et efficaces. Là où il fait des compromis - la décentralisation, la résistance à la censure et la sécurité sont prioritaires. Shinobi est un logiciel open-source, basé sur uniqswapV2, sous licence GPL.

## Comment fonctionne Shinobi ?

Shinobi est un protocole de liquidité automatisé. En termes pratiques, cela signifie qu'il existe des modèles de contrats intelligents qui définissent une manière standard de créer des pools de liquidité et des marchés correspondants compatibles entre eux. Il n'y a pas de carnet d'ordres, pas de partie centralisée et pas de facilitateur central des échanges. Chaque pool est défini par un smart contract qui comprend quelques fonctions permettant d'échanger des jetons, d'ajouter de la liquidité et plus encore. Au cœur du système, chaque pool utilise la fonction x*y=k pour maintenir une courbe le long de laquelle les échanges peuvent avoir lieu. Les pools gardent la trace des réserves (liquidité) et mettent à jour ces réserves à chaque fois que quelqu'un effectue une transaction. Comme les réserves sont automatiquement rééquilibrées, un pool Shinobi peut toujours être utilisé pour acheter ou vendre un jeton sans avoir besoin d'une contrepartie de l'autre côté de la transaction.

## Comment les prix sont-ils déterminés ?

Les prix sont déterminés par la quantité de chaque jeton dans un pool. Le contrat intelligent maintient une constante en utilisant la fonction suivante : x*y=k. Dans ce cas, x = jeton0, y = jeton1, k = constante. Lors de chaque échange, un certain montant d'un jeton est retiré du pool pour un montant de l'autre jeton. Pour maintenir k, les soldes détenus par le contrat intelligent sont ajustés pendant l'exécution de la transaction, modifiant ainsi le prix.

## Comment ajouter un logo pour un jeton ?

Shinobi, tout comme Ubiqscan, utilise le dépôt d'actifs trustwallet sur github forké par octano. https://github.com/octanolabs/assets Ajoutez l'icône de votre jeton à ce dépôt et il apparaîtra sur le frontend et sur les infos.

*note: unlike the original repo, the octano fork does not charge for merges..*

## Comment ajouter un jeton à Shinobi ?

Shinobi est compatible avec tous les jetons ERC-20 de l'écosystème Ubiq. Si vous souhaitez que votre projet soit consultable dans leur interface, vous devez chercher à être ajouté à une liste de jetons réputés ou partager un lien vers votre jeton en utilisant des paramètres de requête. Une fois chargé via le lien, le jeton sera ajouté à leur interface.

Une autre option est d'ouvrir une request en utilisant github issues.

L'équipe octano ne donne aucune garantie et ne fournit aucun délai pour ces demandes. L'équipe ne facturera ni ne demandera jamais de fonds. Nous avons ajouté de nombreuses fonctionnalités UX pour faciliter le partage d'un nouveau jeton avec les communautés - des fonctionnalités telles que la prise en charge du stockage local et les liens personnalisés. Nous vous invitons à les utiliser.
