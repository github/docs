---
title: À propos du clustering
intro: 'Le clustering {% data variables.product.prodname_ghe_server %} permet d’effectuer un scale-out pour les services qui composent {% data variables.product.prodname_ghe_server %} sur plusieurs nœuds.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 5da017898f1f0e205685dcf1fc29b5088030421a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332479'
---
## Architecture de clustering

{% data variables.product.prodname_ghe_server %} se compose d’un ensemble de services. Dans un cluster, ces services s’exécutent sur plusieurs nœuds et les demandes dont ils font l’objet sont gérées par un équilibreur de charge. Les modifications sont automatiquement stockées avec des copies redondantes sur les différents nœuds. La plupart des services sont des homologues égaux d’autres instances du même service. Les services `mysql-server` et `redis-server` sont des exceptions à ce principe. Ils fonctionnent avec un nœud _principal_ unique avec un ou plusieurs nœuds _réplicas_.

Découvrez plus en détails les [services nécessaires au clustering](/enterprise/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

## Le clustering est-il indiqué pour mon organisation ?

{% data reusables.enterprise_clustering.clustering-scalability %} Cependant, configurer un cluster redondant et scalable peut être une tâche complexe qui demande en outre une planification minutieuse. Il convient de prendre en compte cette complexité supplémentaire pendant l’installation, les scénarios de reprise d’activité après sinistre et les mises à niveau.

{% data variables.product.prodname_ghe_server %} exige une faible latence entre les nœuds et n’est pas destiné à la redondance entre les emplacements géographiques.

Le clustering assure la redondance, mais n’est pas destiné à remplacer une configuration à haute disponibilité. Pour plus d’informations, consultez [Configuration à haute disponibilité](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). Une configuration de basculement principal/secondaire est beaucoup plus simple que le clustering et servira les besoins de nombreuses organisations. Pour plus d’informations, consultez [Différences entre le clustering et la haute disponibilité](/enterprise/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

{% data reusables.package_registry.packages-cluster-support %}

## Comment accéder au clustering ?

Le clustering est conçu pour des situations de mise à l’échelle spécifiques et ne s’adresse pas à chaque organisation. Si le clustering est quelque chose que vous voulez prendre en considération, contactez votre représentant dédié ou l’{% data variables.contact.contact_enterprise_sales %}.
