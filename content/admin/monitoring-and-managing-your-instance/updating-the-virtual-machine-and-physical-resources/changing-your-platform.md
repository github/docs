---
title: Changing your platform
shortTitle: Changing platform
intro: 'How to change the platform that runs {% data variables.location.product_location %}'
type: how_to
topics:
  - Infrastructure
  - Migration
  - Enterprise
versions:
  ghes: '*'
---

In some cases, you may need to change the platform on which {% data variables.location.product_location %} runs, such as moving from VMware to Azure.

## Recommendations

You should carefully plan any out migration procedures and consider first testing on a staging environment. For more information, see [AUTOTITLE](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

Moving platforms using a replica will require the least amount of time for the migration process but will require you to make changes to your live environment in order to setup the replication.

Moving via backup and restore will not require any changes to your live environment, however the migration will take a significant amount of time. The specific amount of time to complete the migration will vary based the performance of your backup host, and the network speeds between your backup host and the new instance. Maintenance mode should also be enabled throughout the process otherwise users may be able to make changes which will not be reflected on your new instance.

> [!WARNING]
> You should not use utilities which convert {% data variables.location.product_location %} from one platform to another. Doing so could cause unintended side effects such as system instability.

## Move platforms using a HA replica

1. Set up a new {% data variables.product.prodname_ghe_server %} instance on your chosen platform. See [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance).
1. Configure your new {% data variables.product.prodname_ghe_server %} instance as a replica. See [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/creating-a-high-availability-replica).
1. Failover to your replica. See [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance).

## Moving platforms using backup and restore

1. Setup backups for your existing {% data variables.product.prodname_ghe_server %} instance. See [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance).
1. Set up a new {% data variables.product.prodname_ghe_server %} instance on your chosen platform. See [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance).
1. Communicate the upcoming downtime to your users and enable maintenance mode. For more information, see the following articles.

   * [AUTOTITLE](/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)
1. Create a new backup of your existing {% data variables.product.prodname_ghe_server %} instance.
1. Restore the backup to your new {% data variables.product.prodname_ghe_server %} instance. If you are using {% data variables.product.prodname_actions %}, see [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)
1. Update the DNS to point to the address of your new {% data variables.product.prodname_ghe_server %} instance.
1. Disable maintenance mode and let users know they can continue normal operations.

## Further reading

* [AUTOTITLE](/admin/overview/about-github-enterprise-server)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration)
* [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance#about-github-enterprise-server-backup-utilities)
