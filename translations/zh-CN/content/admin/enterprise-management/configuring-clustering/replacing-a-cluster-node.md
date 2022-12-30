---
title: 替换集群节点
intro: '要替换 {% data variables.product.prodname_ghe_server %} 节点，必须在群集配置文件 (`cluster.conf`) 中将受影响的节点标记为离线，然后添加替换节点。 如果节点发生故障，或者添加具有更多资源的节点以提高性能，则可能需要执行此操作。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099087'
---
{% warning %}

警告：替换节点必须使用先前未在群集中使用的主机名以避免冲突。

{% endwarning %}

## 替换功能节点
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## 在紧急情况下替换节点
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %} {% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
