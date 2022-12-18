---
title: Évacuation d’un nœud de cluster
intro: Vous pouvez évacuer les services de données sur un nœud de cluster.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106909'
---
## À propos de l’évacuation de nœuds de cluster

Dans une configuration de cluster pour {% data variables.product.product_name %}, vous pouvez évacuer un nœud avant de le mettre hors connexion. L’évacuation est l’assurance que les nœuds restants dans un niveau de service contiennent toutes les données du service. Par exemple, quand vous remplacez la machine virtuelle d’un nœud de votre cluster, vous devez d’abord évacuer le nœud.

Pour plus d’informations sur les nœuds et les niveaux de service pour {% data variables.product.prodname_ghe_server %}, consultez « [À propos des nœuds de cluster](/admin/enterprise-management/configuring-clustering/about-cluster-nodes) ».

{% warning %}

**Avertissements** :

- Pour éviter une perte de données, {% data variables.product.company_short %} recommande vivement d’évacuer un nœud avant de le mettre hors connexion. 

- Si vous n’avez que trois nœuds dans votre cluster de services de données, vous ne pouvez pas évacuer les nœuds, car `ghe-spokes` n’a pas d’autre emplacement pour effectuer une copie. Si vous en avez quatre ou plus, `ghe-spokes` déplace tous les dépôts hors du nœud évacué.

{% endwarning %}

## Évacuation d’un nœud de cluster

Si vous envisagez de mettre un nœud hors connexion et que le nœud exécute un rôle de service de données comme `git-server`, `pages-server`ou `storage-server`, évacuez chaque nœud avant de mettre le nœud hors connexion.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. Pour rechercher l’UUID du nœud à évacuer, exécutez la commande suivante. Remplacez `HOSTNAME` par le nom d’hôte du nœud.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Supervisez l’état du nœud pendant que {% data variables.product.product_name %} copie les données. Ne mettez pas le nœud hors connexion tant que la copie n’est pas terminée. Pour superviser l’état de votre nœud, exécutez l’une des commandes suivantes, en remplaçant `UUID` par l’UUID de l’étape 2.

   - **Git** :

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Stockage** :

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. Une fois la copie terminée, vous pouvez évacuer le nœud en exécutant l’une des commandes suivantes, en `UUID` remplaçant par l’UUID de l’étape 2.

   - **Git** :

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - Pour le **stockage**, commencez par mettre le nœud hors connexion en exécutant la commande suivante.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     Une fois le nœud de stockage hors connexion, vous pouvez évacuer le nœud en exécutant la commande suivante.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
