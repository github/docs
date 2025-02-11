---
title: Changing the hostname for your instance
shortTitle: Change hostname
intro: 'If you want to change the hostname for an existing {% data variables.product.prodname_ghe_server %} instance, you must restore the settings and data to a new instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
redirect_from:
  - /admin/configuration/configuring-network-settings/changing-the-hostname-for-your-instance
---

## About changes to the hostname for {% data variables.product.prodname_ghe_server %}

If you need to use a new hostname for {% data variables.location.product_location %}, you must back up the existing instance's settings and data, configure a new instance, restore the backup to the new instance, and then adjust your DNS configuration to send traffic to the new instance.

Migration to a new instance requires downtime. The amount of downtime required depends on how much data you need to back up, as well as the speed of the network connection between the backup host and the instances.

In this article, the term "source instance" refers to the instance with the old hostname, and "destination instance" refers to the instance with the new hostname.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Migrating to an instance with a new hostname

1. Configure a destination instance of {% data variables.product.prodname_ghe_server %} with the new hostname you'd like to use. For more information, see the following documentation.

   * [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)
   * [AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-the-hostname-for-your-instance)
1. Inform the instance's users of the scheduled downtime. Optionally, you can create a mandatory message that will appear for all users who sign in. For more information, see [Customizing user messages for your enterprise](/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message).
1. On the source instance, enable maintenance mode to prevent deltas from occurring. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-maintenance-mode-immediately-or-scheduling-a-maintenance-window-for-a-later-time).
1. Back up the source instance's data and settings using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance). (This step may take up to several hours to complete.)
1. If your source instance has {% data variables.product.prodname_actions %} enabled, you must configure the external storage provider for {% data variables.product.prodname_actions %} on the destination instance. See [AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).
1. On the destination instance, enable maintenance mode to allow restoration of the backup taken from the source instance.
1. Restore the backup to the destination instance with the desired hostname. Run the `ghe-restore` utility without the `-c` option to prevent overwriting the destination instance's configuration. See [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance).
1. Finalize configuration of the destination instance. For more information, see [AUTOTITLE](/admin/configuration).
1. Optionally, while the destination instance is in maintenance mode, validate the instance's configuration and configuration run log (`/data/user/common/ghe-config.log`) and verify that user data is intact. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list).
1. To direct traffic to the destination instance, update the DNS `CNAME` record with the source instance's hostname to resolve to the IP address of the destination instance.

   > [!NOTE]
   > Restored user-generated content in the instance's web application will likely contain URLs that reference the source instance's old hostname. Optionally, to ensure that these links continue to resolve to the destination instance, you can configure a redirect using DNS. In addition to the `CNAME` record that resolves to the new instance's hostname, configure a second DNS `CNAME` record that directs traffic from the original hostname to the new hostname. For more information, see the documentation for your DNS provider.

1. On the destination instance, disable maintenance mode.
