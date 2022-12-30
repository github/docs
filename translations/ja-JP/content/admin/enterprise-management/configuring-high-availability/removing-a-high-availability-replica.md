---
title: High Availabilityレプリカの削除
intro: '{% data variables.product.prodname_ghe_server %} レプリカへのレプリケーションを一時的に停止することも、レプリケーションを恒久的に削除することもできます。'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116774'
---
## 一時的なレプリケーションの停止

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを一時的に停止させたいレプリカで、ghe-repl-stop を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリケーションを再開するには、`ghe-repl-start` を実行します。
  ```shell
  $ ghe-repl-start
  ```

## レプリケーションの恒久的な削除

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを削除するレプリカで `ghe-repl-stop` を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリカでレプリケーションの状態を破棄するには、`ghe-repl-teardown` を実行します。
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %} {% note %}
  
  **注:** {% data variables.product.prodname_actions %} を有効化している場合は、以前のレプリカ サーバーを使用停止するか、その {% data variables.product.prodname_actions %} 設定を更新して別の外部ストレージを使用する必要があります。 詳細については、「[{% data variables.product.prodname_actions %} の高可用性](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)」を参照してください。
  
  {% endnote %} {% endif %}
