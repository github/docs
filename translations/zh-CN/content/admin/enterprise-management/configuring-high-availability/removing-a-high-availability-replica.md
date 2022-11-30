---
title: 移除高可用性副本
intro: '您可以暂时停止对 {% data variables.product.prodname_ghe_server %} 副本的复制，也可以永久地移除复制。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099086'
---
## 暂时停止复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在您希望暂时停止复制的副本上，运行 ghe-repl-stop。
  ```shell
  $ ghe-repl-stop
  ```
3. 若要再次开始复制，请运行 `ghe-repl-start`。
  ```shell
  $ ghe-repl-start
  ```

## 永久移除复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在希望删除复制的副本上，运行 `ghe-repl-stop`。
  ```shell
  $ ghe-repl-stop
  ```
3. 在副本上，若要解除复制状态，请运行 `ghe-repl-teardown`。
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  注意：如果已启用 {% data variables.product.prodname_actions %}，则应停用前一个副本服务器，或更新其 {% data variables.product.prodname_actions %} 配置来使用其他外部存储。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的高可用性](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)”。
  
  {% endnote %} {% endif %}
