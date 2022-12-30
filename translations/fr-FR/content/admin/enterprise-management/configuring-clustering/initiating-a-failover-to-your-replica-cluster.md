---
title: Lancement d’un basculement vers votre cluster réplica
intro: 'En cas de défaillance de votre cluster {% data variables.product.prodname_ghe_server %}, vous pouvez effectuer un basculement vers le réplica passif.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
ms.openlocfilehash: 14889e5d861475bc2d887062fb12450194cd6505
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106901'
---
## À propos du basculement vers votre cluster réplica

Si une défaillance se produit dans votre centre de données principal, vous pouvez basculer vers les nœuds réplicas du centre de données secondaire si vous configurez un nœud réplica passif pour chaque nœud de votre cluster actif.

La durée du basculement dépend du temps nécessaire pour promouvoir manuellement le cluster réplica et rediriger le trafic.

Dans le cadre de la promotion d’un cluster réplica, la réplication n’est pas configurée automatiquement pour le cluster existant. Après avoir promu un cluster réplica, vous pouvez reconfigurer la réplication à partir du nouveau cluster actif. Pour plus d’informations, consultez « [Configuration de la haute disponibilité pour un cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover) ».

## Prérequis

Pour basculer vers des nœuds réplicas passifs, vous devez avoir configuré la haute disponibilité pour votre cluster. Pour plus d’informations, consultez « [Configuration de la haute disponibilité pour un cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster) ».

## Lancement d’un basculement vers votre cluster réplica

1. Connectez-vous avec SSH à un nœud passif du centre de données secondaire pour votre cluster. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh) ».

2. Initialisez le basculement vers le cluster secondaire et configurez-le pour qu’il fasse office de nœuds actifs.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Mettez à jour l’enregistrement DNS pour qu’il pointe vers l’adresse IP de l’équilibreur de charge de votre cluster passif. Le trafic est dirigé vers le réplica une fois la période TTL écoulée.

Une fois que {% data variables.product.prodname_ghe_server %} vous a renvoyé à l’invite et que vos mises à jour DNS ont été propagées, le basculement est terminé. Les utilisateurs peuvent accéder à {% data variables.product.prodname_ghe_server %} en utilisant le nom d’hôte habituel de votre cluster.
