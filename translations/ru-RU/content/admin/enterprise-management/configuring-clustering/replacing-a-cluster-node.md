---
title: Замена узла кластера
intro: 'Чтобы заменить узел {% data variables.product.prodname_ghe_server %}, необходимо пометить затронутые узлы, переведенные в автономный режим, в файле конфигурации кластера (`cluster.conf`) и добавить узлы для замены. Это может потребоваться, если узел должен был завершиться ошибкой, или добавить узел с дополнительными ресурсами, чтобы повысить производительность.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116779'
---
{% warning %}

**Предупреждение.** Чтобы избежать конфликтов, узел замены должен использовать имя узла, которое ранее не использовалось в кластере.

{% endwarning %}

## Замена функционального узла
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## Замена узла в экстренной ситуации
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
