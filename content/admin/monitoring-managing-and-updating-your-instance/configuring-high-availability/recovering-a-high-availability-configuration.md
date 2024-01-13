---
title: Recovering a high availability configuration
intro: 'After failing over to a {% data variables.product.prodname_ghe_server %} appliance, you should regain redundancy as soon as possible rather than rely on a single appliance.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/configuring-high-availability/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
---

## About recovery for a high availability configuration

You can use the former primary appliance as the new replica appliance if the failover was planned or was not related to the health of the appliance. If the failover was related to an issue with the primary appliance, you may prefer to create a new replica appliance. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)."

{% warning %}

**Warning:** You must enable maintenance mode before configuring a former primary appliance as a new replica. If you do not enable maintenance mode, you will cause a production outage.

{% endwarning %}

## Configuring a former primary appliance as a new replica

1. Connect to the former primary appliance's IP address using SSH.

   ```shell
   ssh -p 122 admin@ FORMER_PRIMARY_IP
   ```

1. Enable maintenance mode on the former primary appliance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
1. On the former primary appliance, run `ghe-repl-setup` with the IP address of the former replica.

   ```shell
   ghe-repl-setup  FORMER_REPLICA_IP
   ```

{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. To verify the connection to the new primary and enable replica mode for the new replica, run `ghe-repl-setup` again.

   ```shell
   ghe-repl-setup  FORMER_REPLICA_IP
   ```

{% data reusables.enterprise_installation.replication-command %}
