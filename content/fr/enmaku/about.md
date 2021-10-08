---
title: À propos d'Enmaku
description: Enmaku est un protocole entièrement décentralisé pour les transactions privées sur Ubiq.
---

## Pourquoi Enmaku?

La transparence totale des blockchains est excellente pour la traçabilité, mais elle expose les utilisateurs à des risques inutiles. Chaque personne avec laquelle vous interagissez peut désormais voir l'historique complet de vos transactions, le moment où elles ont eu lieu et le solde actuel de vos actifs. Les outils de confidentialité sont un ajout nécessaire à la blockchain, permettant aux utilisateurs de protéger les données de leurs transactions contre des tiers potentiellement malveillants.

## Comment ça marche
### Dépot
Un utilisateur génère une clé aléatoire (note) et effectue un dépôt d'Ubiq ou d'ERC20, tout en soumettant un hash de la note au smart contract Enmaku.

### Attente
Après avoir effectué un dépôt, les utilisateurs doivent attendre un certain temps avant d'effectuer un retrait afin d'améliorer leur confidentialité.

### Retrait
Un utilisateur soumet une preuve de possession de la clé valide d'une des notes déposés et le contrat transfère les Ubiq ou les ERC20 vers un destinataire spécifié.

## Comment Enmaku assure la confidentialité

Enmaku améliore la confidentialité des transactions en rompant le lien sur la chaîne entre les adresses d'origine et de destination. Il utilise un smart contract qui accepte des dépôts UBQ qui peuvent être retirés par une adresse différente. Pour préserver la confidentialité, un relais peut être utilisé pour retirer des fonds à une adresse sans solde UBQ. Lorsque l'UBQ est retiré par la nouvelle adresse, il n'y a aucun moyen de lier le retrait au dépôt, ce qui garantit une confidentialité totale.

## Décentralisation

Enmaku est entièrement décentralisé et appartient à la communauté : Les développeurs initiaux n'ont aucun contrôle sur le projet et ne gèrent aucun serveur.

## Conformité

Le maintien de la confidentialité financière est essentiel à la préservation de nos libertés. Enmaku dispose d'outils intégrés permettant de prouver l'historique de vos transactions et de divulguer de manière sélective les dépôts effectués sur Enmaku.

## Trusted Setup Ceremony

L'Enmaku utilise les mêmes circuits de confiance que ceux produits par [Tornado Cash](https://tornado.cash/) Trusted setup Ceremony.

avec plus de 1114 contributions, tant qu'au moins une contribution est honnête, les clés zkSNARK sont sécurisées.

