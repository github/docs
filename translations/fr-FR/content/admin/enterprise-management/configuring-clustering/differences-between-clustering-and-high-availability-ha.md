---
title: Différences entre le clustering et la haute disponibilité (HA)
intro: 'La configuration haute disponibilité (HA) {% data variables.product.prodname_ghe_server %} est une configuration de basculement primaire/secondaire qui assure la redondance, tandis que le clustering assure la redondance et l’évolutivité en distribuant la charge de lecture et d’écriture sur plusieurs nœuds.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332487'
---
## Scénarios de défaillance

La haute disponibilité (HA) et le clustering apportent tous deux la redondance en éliminant le nœud unique correspondant au point de défaillance. Ils peuvent apporter la disponibilité dans les scénarios suivants :

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Extensibilité

{% data reusables.enterprise_clustering.clustering-scalability %} Dans le cadre de la haute disponibilité, l’échelle de l’appliance dépend exclusivement du nœud principal et la charge n’est pas distribuée au serveur réplica.

## Différences dans la méthode et la configuration du basculement

| Fonctionnalité     | Configuration du basculement     | Méthode de basculement |
| :------------- | :------------- | :--- |
| Configuration de la haute disponibilité       | Enregistrement DNS ayant une faible durée de vie faible pointant vers l’appliance principale ou l’équilibreur de charge. | Vous devez promouvoir manuellement l’appliance réplica dans les configurations de basculement DNS et d’équilibreur de charge. |
| Clustering | L’enregistrement DNS doit pointer vers un équilibreur de charge. | En cas de défaillance d’un nœud situé derrière l’équilibreur de charge, le trafic est automatiquement envoyé aux autres nœuds fonctionnels. |

## Sauvegardes et récupération d’urgence

Ni la haute disponibilité ni le clustering ne doivent être considérés comme un remplacement pour les sauvegardes normales. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance) ».

## Surveillance

Les fonctionnalités de disponibilité, en particulier celles proposant un basculement automatique comme le clustering, peuvent masquer une défaillance, car le service n’est généralement pas interrompu en pareil cas. Que vous utilisiez la haute disponibilité ou le clustering, il est important de superviser l’intégrité de chaque instance pour savoir qu’une défaillance se produit. Pour plus d’informations sur la supervision, consultez « [Seuils d’alerte recommandés](/enterprise/admin/guides/installation/recommended-alert-thresholds/) » et « [Supervision des nœuds de cluster](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/) ».

## Pour aller plus loin
- Pour plus d’informations sur le clustering {% data variables.product.prodname_ghe_server %}, consultez « [À propos du clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/) ».
- Pour plus d’informations sur la haute disponibilité, consultez « [Configuration de {% data variables.product.prodname_ghe_server %} pour la haute disponibilité](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/) ».
