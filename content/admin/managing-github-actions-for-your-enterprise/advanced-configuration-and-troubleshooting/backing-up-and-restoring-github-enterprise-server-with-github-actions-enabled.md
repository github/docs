---
title: Backing up and restoring GitHub Enterprise Server with GitHub Actions enabled
shortTitle: Backing up and restoring
intro: 'To restore a backup of {% data variables.location.product_location %} when {% data variables.product.prodname_actions %} is enabled, you must configure {% data variables.product.prodname_actions %} before restoring the backup with {% data variables.product.prodname_enterprise_backup_utilities %}.'
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
  - /admin/github-actions/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
---

## About backups of {% data variables.product.prodname_ghe_server %} when using {% data variables.product.prodname_actions %}

You can use {% data variables.product.prodname_enterprise_backup_utilities %} to back up and restore the data and configuration for {% data variables.location.product_location %} to a new instance. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).

However, not all the data for {% data variables.product.prodname_actions %} is included in these backups. {% data reusables.actions.enterprise-storage-ha-backups %}

## Restoring a backup of {% data variables.product.prodname_ghe_server %} when {% data variables.product.prodname_actions %} is enabled

To restore a backup of {% data variables.location.product_location %} with {% data variables.product.prodname_actions %}, you must manually configure network settings and external storage on the destination instance before you restore your backup from {% data variables.product.prodname_enterprise_backup_utilities %}.

1. Create a new instance with the "New Install" option. For installation instructions for the virtualization platform of your choice, see [AUTOTITLE](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance).
1. In the {% data variables.enterprise.management_console %}, configure network settings and external storage for {% data variables.product.prodname_actions %} on the destination instance. See [AUTOTITLE](/admin/configuring-settings).
1. After {% data variables.product.prodname_actions %} is configured and enabled, to restore the rest of the data from the backup, use the `ghe-restore` command. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#restoring-a-backup).
1. Re-register your self-hosted runners on the destination instance. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners).
1. To ensure that the bundled actions that are pre-installed on your new instance are up to date, enter the following command.

   ```shell copy
   ghe-config --unset 'app.actions.actions-repos-sha1sum'
   ```

   {% data reusables.enterprise.apply-configuration %}
