---
title: Suppression d’un réplica à haute disponibilité
intro: 'Vous pouvez arrêter temporairement la réplication vers un réplica {% data variables.product.prodname_ghe_server %}, ou supprimer définitivement la réplication.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
ms.openlocfilehash: 12fe196d38f93cb29bf49413ef9912028d662130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104982'
---
## Arrêt temporaire de la réplication

1. Si nécessaire, vous pouvez arrêter un réplica de géoréplication dans le traitement du trafic utilisateur en supprimant les entrées GeoDNS du réplica.
2. Sur le réplica où vous voulez arrêter provisoirement la réplication, exécutez ghe-repl-stop.
  ```shell
  $ ghe-repl-stop
  ```
3. Pour redémarrer la réplication, exécutez `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```

## Suppression définitive de la réplication

1. Si nécessaire, vous pouvez arrêter un réplica de géoréplication dans le traitement du trafic utilisateur en supprimant les entrées GeoDNS du réplica.
2. Sur le réplica que vous voulez exclure de la réplication, exécutez `ghe-repl-stop`.
  ```shell
  $ ghe-repl-stop
  ```
3. Sur le réplica, pour supprimer l’état de réplication, exécutez `ghe-repl-teardown`.
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **Remarque :** Si {% data variables.product.prodname_actions %} est activé, vous devez désactiver l’ancien serveur réplica ou mettre à jour sa configuration {% data variables.product.prodname_actions %} pour utiliser un stockage externe différent. Pour plus d’informations, consultez « [Haute disponibilité pour {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas) ».
  
  {% endnote %} {% endif %}
