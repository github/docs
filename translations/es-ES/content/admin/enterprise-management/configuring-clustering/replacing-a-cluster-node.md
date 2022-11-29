---
title: Reemplazar un nodo de agrupación
intro: 'Para reemplazar un nodo {% data variables.product.prodname_ghe_server %}, debes marcar los nodos fuera de línea afectados en el archivo de configuración de la agrupación (`cluster.conf`) y agregar los nodos de reemplazo. Esto puede ser necesario en caso de que un nodo falle, o para agregar un nodo con más recursos a fin de aumentar el rendimiento.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116778'
---
{% warning %}

**Advertencia:** El nodo de reemplazo debe usar un nombre de host que no se haya usado antes en el clúster para evitar conflictos.

{% endwarning %}

## Reemplazar un nodo funcional
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## Reemplazar un nodo en una emergencia
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
