---
title: Initiating a failover to your replica appliance
intro: 'You can failover to a {% data variables.product.prodname_ghe_server %} replica appliance using the command line for maintenance and testing, or if the primary appliance fails.'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/configuring-high-availability/initiating-a-failover-to-your-replica-appliance
  - /admin/monitoring-managing-and-updating-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
---
The time required to failover depends on how long it takes to manually promote the replica and redirect traffic. The average time ranges between 20-30 minutes.

{% data reusables.enterprise_installation.promoting-a-replica %}

1. If the primary appliance is available, to allow replication to finish before you switch appliances, on the primary appliance, put the primary appliance into maintenance mode.

   * Put the appliance into maintenance mode.

     * To use the management console, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)"

     * You can also use the `ghe-maintenance -s` command.

       ```shell
       ghe-maintenance -s
       ```

   * When the number of active Git operations, MySQL queries, and Resque jobs reaches zero, wait 30 seconds.

     {% note %}

     **Note:** Nomad will always have jobs running, even in maintenance mode, so you can safely ignore these jobs.

     {% endnote %}

   * To verify all replication channels report `OK`, use the `ghe-repl-status -vv` command.

     ```shell
     ghe-repl-status -vv
     ```

1. Enable maintenance mode on all active replica appliances. For more information, see "[AUTOTITLE](/admin/administering-your-instance/enabling-and-scheduling-maintenance-mode)."

1. On the replica appliance you'd like to fail over to, to stop replication and promote the replica appliance to primary status, use the `ghe-repl-promote` command.

   ```shell
   ghe-repl-promote
   ```

   {% note %}

   **Note:** If the primary node is unavailable, warnings and timeouts may occur but can be ignored.

   {% endnote %}

1. Update the DNS record to point to the IP address of the replica. Traffic is directed to the replica after the TTL period elapses. If you are using a load balancer, ensure it is configured to send traffic to the replica.
1. Notify users that they can resume normal operations.
1. If desired, set up replication from the new primary to existing appliances and the previous primary. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#utilities-for-replication-management)."
1. Appliances you do not intend to setup replication to that were part of the high availability configuration prior the failover, need to be removed from the high availability configuration by UUID.
    * On the former appliances, get their UUID via `cat /data/user/common/uuid`.

      ```shell
      cat /data/user/common/uuid
      ```

    * On the new primary, remove the UUIDs using `ghe-repl-teardown`. Please replace `UUID` with a UUID you retrieved in the previous step.

      ```shell
      ghe-repl-teardown -u  UUID
      ```

## Further reading

* "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#utilities-for-replication-management)"
