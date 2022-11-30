---
title: Clusterknoten ersetzen
intro: 'Zum Ersetzen eines {% data variables.product.prodname_ghe_server %}-Knotens musst du die betroffenen Knoten in der Clusterkonfigurationsdatei (`cluster.conf`) als offline markieren und die Ersatzknoten hinzufügen. Dies ist ggf. erforderlich, wenn bei einem Knoten ein Fehler auftritt, oder um zur Leistungssteigerung einen Knoten mit mehr Ressourcen hinzuzufügen.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/replacing-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Infrastructure
ms.openlocfilehash: 4b4a34424803179d27aa245ad6ccb416ff926c59
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104984'
---
{% warning %}

**Warnung:** Zum Vermeiden von Konflikten muss der Ersatzknoten einen Hostnamen verwenden, der noch nicht im Cluster verwendet wurde.

{% endwarning %}

## Funktionierenden Knoten ersetzen
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## Knoten in einem Notfall ersetzen
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
