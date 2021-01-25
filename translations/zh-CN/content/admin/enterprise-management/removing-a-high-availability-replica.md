---
title: 移除高可用性副本
intro: '您可以暂时停止对 {% data variables.product.prodname_ghe_server %} 副本的复制，也可以永久地移除复制。'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### 暂时停止复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在您希望暂时停止复制的副本上，运行 ghe-repl-stop。
  ```shell
  $ ghe-repl-stop
  ```
3. 要再次开始复制，请运行 `ghe-repl-start`。
  ```shell
  $ ghe-repl-start
  ```

### 永久移除复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在您希望移除复制的副本上，运行 `ghe-repl-stop`。
  ```shell
  $ ghe-repl-stop
  ```
3. 在副本上，要移除复制状态，请运行 `ghe-repl-teardown`。
  ```shell
  $ ghe-repl-teardown
  ```

  {% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% note %}

  **Note:** If you have {% data variables.product.prodname_actions %} enabled, you should decommission the former replica server or update its {% data variables.product.prodname_actions %} configuration to use different external storage. For more information, see "[High availability for {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)."

  {% endnote %}
  {% endif %}
