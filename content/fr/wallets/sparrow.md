---
title: Sparrow
description: Bienvenue dans une nouvelle série de posts visant à expliquer les composants du DEX d'Ubiq. Ce post vise à expliquer les outils dont un utilisateur a besoin pour interagir avec Ubiq DEX et comment les utiliser en conjonction avec l'infrastructure Ubiq existante.
---

## Qu'est ce que Sparrow ?

Sparrow est un portefeuille basé sur le web qui est construit pour être compatible avec le réseau Ubiq. Il a été initialement forké à partir de MetaMask (l'équivalent Ethereum) en 2017. Entre autres fonctionnalités, il est également utilisé comme principal ensemble d'outils pour interagir avec le DEX Ubiq.

Sparrow peut être installé comme une extension sur les navigateurs Firefox, Chrome, Brave ou Opera.

## Comment l'installer ?

Tout d'abord, il est important de noter qu'il est fortement recommandé d'installer Sparrow sur un navigateur web distinct de celui de MetaMask. En raison de la nature similaire de ces logiciels, des conflits peuvent survenir si vous utilisez le même navigateur.

<v-alert color="primary" text outlined>Vous pouvez désormais installer Sparrow et Metamask sur Chrome si vous utilisez des profils d'utilisateur différents. Nous avons inclus une nouvelle vidéo d'instruction réalisée par le membre de la communauté "Moon" plus loin dans cet article.</v-alert>

Pour installer Sparrow, allez dans le store du navigateur que vous utilisez :

* [Chrome & Brave](https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd)
* [Firefox](https://addons.mozilla.org/addon/ubiq-sparrow/)
* [Opera](https://addons.opera.com/fr/)

Dans chacun de ces stores, il y a une barre de recherche. Recherchez "Sparrow" et recherchez l'oiseau vert dans les résultats.

Cliquez sur le lien de l'extension et vous verrez un bouton pour l'ajouter à votre navigateur.

![chrome web store](/dojo/sparrow/1.png "Chrome web store")

Une fois l'extension ajoutée à votre navigateur, il se peut que vous receviez une popup vous demandant de confirmer l'ajout de Sparrow comme extension à votre navigateur.

![chrome web store](/dojo/sparrow/2.png "Add extension")

Si l'installation ce passe correctement, vous devriez voir l'icône Sparrow sur le bandeau des extentions de votre navigateur.

![chrome web store](/dojo/sparrow/3.png "Extension added")

Chaque fois que vous souhaitez accéder à Sparrow, vous pouvez cliquer sur ce bouton.

## Comment le configurer ?

Une fois que vous avez installé Sparrow, une page de bienvenue s'affiche. Cliquez sur `Démarrer` pour continuer.

![Sparrow](/dojo/sparrow/4.png "Get Started")

Vous aurez alors la possibilité d'importer un portefeuille préexistant ou d'en créer un nouveau. Dans cette partie du guide, nous allons étudier la création d'un tout nouveau portefeuille. Cliquez sur `Créer un portefeuille` pour continuer.

![Sparrow](/dojo/sparrow/5.png "New to Sparrow")

Ensuite, vous serez invité à créer un mot de passe, puis à le taper une seconde fois pour confirmer que vous l'avez mémorisé. Remplissez les deux champs et cliquez ensuite sur `Créer`.

![Sparrow](/dojo/sparrow/6.png "Create Password")

Sparrow va maintenant générer une phrase de sauvegarde pour vous. Cette phrase de sauvegarde est votre `phrase mnémotechnique` mentionnée sur le deuxième écran. N'importe quel utilisateur peut utiliser cette phrase de démarrage pour contourner votre mot de passe s'il y a accès, donc assurez-vous de lire la section de ce rapport concernant la sécurité.

Cliquez pour révéler vos mots secrets, notez-les quelque part et cliquez sur `Suivant`.

![Sparrow](/dojo/sparrow/7.png "Backup")

Il vous sera alors demandé de confirmer votre phrase mnémotechnique que vous venez de noter, dans l'ordre où elle a été présentée. Cliquez sur chacun des mots jusqu'à ce que l'ordre corresponde à celui de l'écran précédent, puis cliquez sur `Confirmer`. Veuillez noter que c'est la dernière fois que Sparrow vous confirme votre phrase mnémotechnique, alors assurez-vous de la conserver en lieu sûr.

![Sparrow](/dojo/sparrow/8.png "Confirm")

Enfin, si vous avez saisi correctement votre phrase mnémotechnique, une page de félicitations s'affichera. Cliquez sur `Tout est terminé` pour continuer.

![Sparrow](/dojo/sparrow/9.png "Congratulations")

Maintenant que votre compte est configuré, vous verrez une page récapitulative des détails de votre compte.

![Sparrow](/dojo/sparrow/10.png "Account details")

Félicitations, vous pouvez maintenant utiliser Sparrow comme portefeuille ! Si vous voulez savoir quelle est votre adresse pour déposer UBQ, vous pouvez copier l'adresse en cliquant sur le bouton du compte. Vous pouvez aussi voir l'adresse de votre compte en appuyant sur le bouton paramètres (3 points) en haut à droite et en cliquant ensuite sur `Détails du compte`.

![Sparrow](/dojo/sparrow/11.png "Two ways to see your account details")

## Commenr récupérer un compte ?

Cette section explique comment restaurer votre compte sur Sparrow en utilisant votre phrase de démarrage. Chargez Sparrow et cliquez sur `Importer à partir de la phrase mnémotechnique du compte`

![Sparrow](/dojo/sparrow/12.png "Welcome back")

Ensuite, saisissez votre phrase mnémotechnique dans l'ordre où elle vous a été présentée initialement, dans la zone de texte " Wallet Seed ". Veillez à séparer chaque mot de la phrase de départ par un espace.

En outre, vous aurez la possibilité de définir un nouveau mot de passe. Remplissez la zone de texte "Nouveau mot de passe" et confirmez en le tapant à nouveau dans la zone située en dessous.

Cliquez ensuite sur `Restaurer`.

![Sparrow](/dojo/sparrow/13.png "Restore")

Une fois que vous aurez fait cela, vous aurez à nouveau accès à votre compte, protégé par votre nouveau mot de passe.

## Remarque sur la sécurité

Les fonds que vous ajoutez à Sparrow seront sécurisés par votre phrase de démarrage et le mot de passe que vous aurez choisi.

Lors de la configuration de Sparrow, il vous sera demandé de noter votre phrase de démarrage. Il est fortement recommandé de ne pas la stocker électroniquement sur un appareil accessible par internet. Écrivez-la sur papier, collez-la dans un fichier texte sur une clé USB, mais ne la rendez pas accessible par Internet. Si votre ordinateur est compromis, les pirates peuvent s'emparer de cette phrase de démarrage et contourner efficacement votre mot de passe.

Lorsque vous choisissez un mot de passe, évitez d'utiliser des mots isolés (par exemple, anniversaire) ou des chiffres ou lettres séquentiels (1234, abcd). D'une manière générale, utilisez un mot de passe aussi long que possible, car chaque caractère supplémentaire ajoute une difficulté exponentielle à son craquage.

Dans le domaine de la crypto-monnaie, il n'y a, par défaut, aucun tiers qui puisse vous rendre vos fonds ou annuler une transaction pour vous. Si vos fonds sont volés, personne ne sera malheureusement là pour vous secourir.

## Guide vidéo

*Guide vidéo sur la configuration de Sparrow sur Chrome (même si vous avez installé MetaMask)*

Merci encore à __Moon__ pour avoir mis au point ce rapide tutoriel vidéo.

<a href="https://www.youtube.com/watch?feature=player_embedded&v=BZRDAfGjB7A" target="_blank"><img src="https://img.youtube.com/vi/BZRDAfGjB7A/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="100%" height="380px" border="10" /></a>

## Se connecter à Shinobi

Tout d'abord, assurez-vous que toutes les étapes précédentes de la configuration de votre portefeuille Sparrow ont été effectuées.

En haut à droite du site web de Shinobi, cliquez sur "Connect to a Wallet".

![Sparrow](/dojo/sparrow/14.png "Connect to Wallet")

Ensuite, sélectionnez Sparrow dans la fenêtre contextuelle et, lorsque vous y êtes invité, entrez le mot de passe que vous avez utilisé lors de la création de votre compte.

![Sparrow](/dojo/sparrow/15.png "Connected")

Shinobi est maintenant connecté à Sparrow et vous pouvez effectuer des transactions ou ajouter des liquidités.

## Je ne peux pas voir mon jeton dans Sparrow !

La version actuelle de Sparrow supporte déjà un certain nombre de jetons Ubiq. Cependant, en raison de la nature décentralisée de Shinobi, un développeur peut créer un nouveau jeton et l'ajouter aux marchés à tout moment

Si vous souhaitez ajouter un jeton à Sparrow, cliquez sur le bouton `Ajouter un jeton`.

![Sparrow](/dojo/sparrow/16.png "Add token")

Vous pouvez alors soit rechercher le jeton, soit l'ajouter sous `Jeton personnalisé`. Pour ce faire, vous aurez besoin de l'adresse du contrat pour le jeton que vous ajoutez. Les jetons sont créés par des tiers individuels. Ils devront vous fournir l'adresse du jeton pour que vous puissiez l'ajouter dans le champ `Adresse du contrat du jeton`

![Sparrow](/dojo/sparrow/17.png "Add tokens")

Une fois que l'adresse du contrat de jeton est ajoutée, le reste des champs se remplit automatiquement. Cliquez ensuite sur le bouton `Suivant` et vous devriez voir vos nouveaux jetons dans Sparrow.

## Je ne peux pas simplement utiliser MetaMask ?

Le réseau Ubiq est également compatible avec le MetaMask.

Veuillez noter qu'il existe quelques différences essentielles entre Sparrow et MetaMask. Vos calculs de consommation d'essence peuvent être par défaut à un prix plus élevé que ce qui est requis avec UBQ, alors assurez-vous de bien vérifier. De plus, il n'y a pas de fonctionnalité de porte-monnaie matériel Ledger ou Trezor lorsque vous utilisez MetaMask avec Ubiq. Comme MetaMask utilise un schéma de chemin HD différent de celui d'Ubiq, il en résultera soit une absence de connexion, soit l'affichage d'adresses d'un chemin différent qui ne contiendra pas vos actifs. Ce problème a été résolu par les développeurs d'Ubiq avec la sortie de la dernière version de Sparrow, où vous pouvez utiliser les portefeuilles Ledger et Trezor de manière transparente.

Spécifiquement pour Trezor : https://github.com/ubiq/ubq-trezor-keyring

et pour Ledger: https://github.com/ubiq/ubq-ledger-bridge-keyring

## Remarque sur le gaz

La consommation de gaz sur le réseau Ethereum a été l'un des principaux moteurs de la mise à disposition d'une version compatible d'Uniswap sur le newtork Ubiq.

Dernièrement, certains utilisateurs d'Uniswap ont été facturés jusqu'à 500 Gwei par transaction. Le réseau Ubiq offre une alternative beaucoup moins coûteuse, chaque transaction étant facturée par défaut à 20 Gwei.

Nous ne prévoyons pas d'augmentation immédiate du coût du gaz, surtout si l'on considère que le réseau Ubiq a été comparé à Ethereum et qu'il a un débit de transaction deux fois plus élevé pour une limite de 40 millions de blocs de gaz.

Si, pour une raison ou une autre, cela devenait un problème à l'avenir, nous chercherions à donner des conseils supplémentaires à la communauté.

Merci d'avoir pris le temps de lire ce guide et de faire partie de la communauté Ubiq. Bien que ce guide vise à répondre aux questions les plus courantes, il y aura toujours des problèmes que nous ne pouvons pas prévoir. Si vous rencontrez des problèmes, nous vous recommandons vivement de poser vos questions dans le canal #Help sur le [Discord Ubiq] (https://discord.gg/XaqzJB4).
