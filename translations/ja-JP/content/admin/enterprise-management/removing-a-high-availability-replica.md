---
title: High Availabilityレプリカの削除
intro: '{% data variables.product.prodname_ghe_server %} レプリカへのレプリケーションを一時的に停止することも、レプリケーションを恒久的に削除することもできます。'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### 一時的なレプリケーションの停止

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを一時的に停止させたいレプリカで、ghe-repl-stop を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリケーションを再開するには、`ghe-repl-start` を実行します。
  ```shell
  $ ghe-repl-start
  ```

### レプリケーションの恒久的な削除

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを削除するレプリカで、`ghe-repl-stop` を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリカでレプリケーション状態を解除するには、`ghe-repl-teardown` を実行します。
  ```shell
  $ ghe-repl-teardown
  ```

  {% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% note %}

  **注釈:** {% data variables.product.prodname_actions %} を有効化している場合は、以前のレプリカサーバーを使用停止するか、その {% data variables.product.prodname_actions %} 設定を更新して別の外部ストレージを使用する必要があります。 詳しい情報については、「[{% data variables.product.prodname_actions %} の High Availability 設定](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)」を参照してください。

  {% endnote %}
  {% endif %}
