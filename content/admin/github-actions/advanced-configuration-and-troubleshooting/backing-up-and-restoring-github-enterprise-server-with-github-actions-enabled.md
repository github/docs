---
title: Backing up and restoring GitHub Enterprise Server with GitHub Actions enabled
shortTitle: Backing up and restoring
intro: 'To restore a backup of {% data variables.product.product_location %} when {% data variables.product.prodname_actions %} is enabled, you must configure {% data variables.product.prodname_actions %} before restoring the backup with {% data variables.product.prodname_enterprise_backup_utilities %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
---

## About backups of {% data variables.product.product_name %} when using {% data variables.product.prodname_actions %}

You can use {% data variables.product.prodname_enterprise_backup_utilities %} to back up and restore the data and configuration for {% data variables.product.product_location %} to a new instance. For more information, see "[Configuring backups on your appliance](/admin/configuration/configuring-backups-on-your-appliance)."

However, not all the data for {% data variables.product.prodname_actions %} is included in these backups. {% data reusables.actions.enterprise-storage-ha-backups %}

## Restoring a backup of {% data variables.product.product_name %} when {% data variables.product.prodname_actions %} is enabled

To restore a backup of {% data variables.product.product_location %} with {% data variables.product.prodname_actions %}, you must manually configure network settings and external storage on the destination instance before you restore your backup from {% data variables.product.prodname_enterprise_backup_utilities %}. 

1. Confirm that the source instance is offline.
1. Manually configure network settings on the replacement {% data variables.product.prodname_ghe_server %} instance. Network settings are excluded from the backup snapshot, and are not overwritten by `ghe-restore`. For more information, see "[Configuring network settings](/admin/configuration/configuring-network-settings)."
1. SSH into the destination instance. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Configure the destination instance to use the same external storage service for {% data variables.product.prodname_actions %} as the source instance by entering one of the following commands.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %}
{% data reusables.actions.configure-storage-provider %}
1. To prepare to enable {% data variables.product.prodname_actions %} on the destination instance, enter the following command.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. After {% data variables.product.prodname_actions %} is configured and enabled, to restore the rest of the data from the backup, use the `ghe-restore` command. For more information, see "[Restoring a backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)."
1. Re-register your self-hosted runners on the destination instance. For more information, see "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."
