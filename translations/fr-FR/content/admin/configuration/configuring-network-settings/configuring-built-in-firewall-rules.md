---
title: Configuration de règles de pare-feu intégrées
intro: 'Vous pouvez voir les règles de pare-feu par défaut et personnaliser les règles pour {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145106990'
---
## À propos du pare-feu de {% data variables.product.product_location %}

{% data variables.product.prodname_ghe_server %} utilise le pare-feu UFW (Uncomplicated Firewall) d’Ubuntu sur l’appliance virtuelle. Pour plus d’informations, consultez « [UFW](https://help.ubuntu.com/community/UFW) » dans la documentation Ubuntu. {% data variables.product.prodname_ghe_server %} met automatiquement à jour la liste verte des services autorisés par le pare-feu à chaque publication.

Une fois {% data variables.product.prodname_ghe_server %} installé, tous les ports réseau nécessaires sont automatiquement ouverts pour accepter les connexions. Chaque port non obligatoire est automatiquement configuré avec la valeur `deny`, et la stratégie de trafic sortant par défaut est configurée avec la valeur `allow`. Le suivi avec état est activé pour les nouvelles connexions ; il s’agit généralement de paquets réseau avec le jeu de bits `SYN`. Pour plus d’informations, consultez « [Ports réseau](/enterprise/admin/guides/installation/network-ports) ».

Le pare-feu UFW ouvre également plusieurs autres ports nécessaires au bon fonctionnement de {% data variables.product.prodname_ghe_server %}. Pour plus d’informations sur l’ensemble de règles UFW, consultez le [README UFW](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

## Affichage des règles de pare-feu par défaut

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Pour afficher les règles de pare-feu par défaut, utilisez la commande `sudo ufw status`. La sortie doit ressembler à celle-ci :
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## Ajout de règles de pare-feu personnalisées

{% warning %}

**Avertissement :** Avant d’ajouter des règles de pare-feu personnalisées, sauvegardez vos règles actuelles au cas où vous auriez besoin de revenir à un état opérationnel connu. Si vous êtes bloqué sur votre serveur, contactez {% data variables.contact.contact_ent_support %} pour reconfigurer les règles de pare-feu d’origine. La restauration des règles de pare-feu d’origine implique un temps d’arrêt pour votre serveur.

{% endwarning %}

1. Configurez une règle de pare-feu personnalisée.
2. Vérifiez l’état de chaque nouvelle règle avec la commande `status numbered`.
  ```shell
  $ sudo ufw status numbered
  ```
3. Pour sauvegarder vos règles de pare-feu personnalisées, utilisez la commande `cp` pour déplacer les règles dans un nouveau fichier.
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

Après avoir mis à niveau {% data variables.product.product_location %}, vous devez réappliquer vos règles de pare-feu personnalisées. Nous vous recommandons de créer un script pour réappliquer vos règles de pare-feu personnalisées.

## Restauration des règles de pare-feu par défaut

Si un problème se produit après la modification des règles de pare-feu, vous pouvez les réinitialiser à partir de votre sauvegarde d’origine.

{% warning %}

**Avertissement :** Si vous n’avez pas sauvegardé les règles d’origine avant d’apporter des modifications au pare-feu, contactez {% data variables.contact.contact_ent_support %} pour obtenir une aide supplémentaire.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Pour restaurer les règles précédentes sauvegardées, copiez-les sur le pare-feu avec la commande `cp`.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. Redémarrez le pare-feu avec la commande `systemctl`.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Vérifiez que les règles ont retrouvé leurs valeurs par défaut avec la commande `ufw status`.
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
