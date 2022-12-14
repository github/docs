---
title: Augmentation de la capacité de stockage
intro: 'Vous pouvez augmenter ou modifier la quantité de stockage disponible pour les référentiels Git, les bases de données, les index de recherche et d’autres données d’application persistantes.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: b6542e1f43ce4111358de3940c8e46dea2afd5d5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881121'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

À mesure que le nombre d’utilisateurs rejoignant {% data variables.product.product_location %} augmente, vous pouvez être amené à redimensionner votre volume de stockage. Consultez la documentation de votre plateforme de virtualisation pour plus d’informations sur le redimensionnement du stockage.

## Conditions requises et recommandations

{% note %}

**Remarque :** avant de redimensionner un volume de stockage, mettez votre instance en mode maintenance.{% ifversion ip-exception-list %} Vous pouvez valider les modifications en configurant une liste d’exceptions IP pour autoriser l’accès à partir d’adresses IP spécifiées. {% endif %} Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

{% endnote %}

### Configuration minimale requise

{% data reusables.enterprise_installation.hardware-rec-table %}

## Augmentation de la taille de partition de données

1. Redimensionnez le disque de volume utilisateur existant à l’aide des outils de votre plateforme de virtualisation.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Faites passer l’appliance en mode maintenance. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».
4. Redémarrez l’appliance pour détecter la nouvelle allocation de stockage :
  ```shell
  $ sudo reboot
  ```
5. Exécutez la commande `ghe-storage-extend` pour développer le système de fichiers `/data/user` :
  ```shell
  $ ghe-storage-extend
  ```

## Augmentation de la taille de partition racine en utilisant une nouvelle appliance

1. Configurez une nouvelle instance de {% data variables.product.prodname_ghe_server %} avec un disque racine plus grand utilisant la même version que votre appliance actuelle. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance) ».
2. Arrêtez l’appliance actuelle :
  ```shell
  $ sudo poweroff
  ```
3. Détachez le disque de données de l’appliance actuelle à l’aide des outils de votre plateforme de virtualisation.
4. Attachez le disque de données à la nouvelle appliance avec le disque racine de taille supérieure.

## Augmentation de la taille de partition racine en utilisant une nouvelle appliance

{% warning %}

**Avertissement :** Avant d’augmenter la taille de partition racine, vous devez mettre votre instance en mode maintenance. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

{% endwarning %}

1. Attachez un nouveau disque à votre appliance {% data variables.product.prodname_ghe_server %}.
1. Exécutez la commande `lsblk` pour identifier le nom d’appareil du nouveau disque.
1. Exécutez la commande `parted` pour formater le disque, avec le nom de votre appareil par `/dev/xvdg` :
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. Pour arrêter la réplication, exécutez la commande `ghe-repl-stop`.

   ```shell
   $ ghe-repl-stop
   ```
   
1. Exécutez la commande `ghe-upgrade` pour installer un package complet propre à la plateforme sur le disque nouvellement partitionné. Un package de mise à niveau de type patch à chaud universel, tel que `github-enterprise-2.11.9.hpkg`, ne fonctionnera pas comme prévu. Après que la commande `ghe-upgrade` a abouti, les services d’application se terminent automatiquement.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Arrêtez l’appliance :
  ```shell
  $ sudo poweroff
  ```
1. Dans l’hyperviseur, supprimez l’ancien disque racine et attachez le nouveau au même emplacement que l’ancien disque racine.
1. Démarrez l’appliance.
1. Vérifiez que les services système fonctionnent correctement, puis quittez le mode maintenance. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

Si votre appliance est configurée pour la haute disponibilité ou la géoréplication, pensez à lancer la réplication sur chaque nœud réplica à l’aide de `ghe-repl-start` après que le stockage a été mis à niveau sur tous les nœuds.
