---
title: Removing a high availability replica
intro: 'You can stop replication to a {% data variables.product.prodname_ghe_server %} replica temporarily, or permanently remove replication.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/configuring-high-availability/removing-a-high-availability-replica
  - /admin/monitoring-managing-and-updating-your-instance/configuring-high-availability/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: Remove a HA replica
---
## Stopping replication temporarily

1. If necessary, stop a geo-replication replica from serving user traffic by removing the Geo DNS entries for the replica.
1. On the replica where you wish to temporarily stop replication, run ghe-repl-stop.

   ```shell
   ghe-repl-stop
   ```

1. To start replication again, run `ghe-repl-start`.

   ```shell
   ghe-repl-start
   ```

## Removing replication permanently

1. If necessary, stop a geo-replication replica from serving user traffic by removing the Geo DNS entries for the replica.
1. On the replica you wish to remove replication from, run `ghe-repl-stop`.

   ```shell
   ghe-repl-stop
   ```

1. On the replica, to tear down the replication state, run `ghe-repl-teardown`.

   ```shell
   ghe-repl-teardown
   ```

  {% ifversion ghes %}
  {% note %}

  **Note:** If you have {% data variables.product.prodname_actions %} enabled, you should decommission the former replica server or update its {% data variables.product.prodname_actions %} configuration to use different external storage. For more information, see "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/high-availability-for-github-actions#high-availability-replicas)."

  {% endnote %}
  {% endif %}
