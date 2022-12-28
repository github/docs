---
title: Lancement d’un basculement vers votre appliance réplica
intro: 'Vous pouvez basculer vers une appliance réplica {% data variables.product.prodname_ghe_server %} à l’aide de la ligne de commande pour la maintenance et les tests, ou en cas de défaillance de l’appliance primaire.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: e2c15dab0a812fe6031f78e7edbccaff6a2503c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192992'
---
La durée du basculement dépend du temps nécessaire pour promouvoir manuellement le réplica et rediriger le trafic. La durée moyenne varie entre 20 et 30 minutes.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. Si l’appliance principale est disponible, pour permettre à la réplication d’aboutir avant le changement d’appliance, sur l’appliance principale, faites passer celle-ci en mode maintenance.

    - Faites passer l’appliance en mode maintenance.

       - Pour utiliser la console de gestion, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/) »

       - Vous pouvez également utiliser la commande `ghe-maintenance -s`.
         ```shell
         $ ghe-maintenance -s
         ```

   - Une fois que le nombre d’opérations Git, de requêtes MySQL et de travaux Resque actifs a atteint zéro, patientez 30 secondes. 

      {% note %}

      **Remarque :** Vous trouverez toujours des travaux Nomad en cours d’exécution, même en mode maintenance. Vous pouvez donc les ignorer sans risque.
    
      {% endnote %}

   - Pour vérifier que tous les canaux de réplication indique `OK`, utilisez la commande `ghe-repl-status -vv`.

      ```shell
      $ ghe-repl-status -vv
      ```

4. Sur l’appliance réplica, pour arrêter la réplication et promouvoir l’appliance réplica à l’état principal, utilisez la commande `ghe-repl-promote`. Celle-ci fera aussi passer automatiquement le nœud principal en mode maintenance s’il est accessible.
  ```shell
  $ ghe-repl-promote
  ```

   {% note %}

   **Remarque :** Si le nœud principal n’est pas disponible, des avertissements et des délais d’expiration peuvent se produire, mais peuvent être ignorés.

  {% endnote %}

5. Mettez à jour l’enregistrement DNS pour le faire pointer vers l’adresse IP du réplica. Le trafic est dirigé vers le réplica une fois la période TTL écoulée. Si vous utilisez un équilibreur de charge, vérifiez qu’il est configuré pour envoyer le trafic au réplica.
6. Informez les utilisateurs qu’ils peuvent reprendre le cours normal des opérations.
7. Si vous le souhaitez, configurez la réplication de l’appliance principale vers des appliances existantes et la précédente appliance principale. Pour plus d’informations, consultez « [À propos de la configuration à haute disponibilité](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management) ».
8. Les appliances que vous n’avez pas l’intention de configurer pour la réplication et qui faisaient partie de la configuration à haute disponibilité avant le basculement, doivent être retirées de la configuration à haute disponibilité par UUID.
    - Sur les anciennes appliances, obtenez leur UUID via `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - Sur la nouvelle appliance principale, supprimez les UUID à l’aide de `ghe-repl-teardown`. Remplacez *`UUID`* par un UUID que vous avez récupéré à l’étape précédente.
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## Pour aller plus loin

- « [Utilitaires pour la gestion de la réplication](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management) »
