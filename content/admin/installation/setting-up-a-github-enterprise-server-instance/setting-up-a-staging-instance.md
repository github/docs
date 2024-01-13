---
title: Setting up a staging instance
intro: 'You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
---

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.location.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- Integration with an external ticketing system
- Integration with a continuous integration server
- External scripts or software that use the {% data variables.product.prodname_enterprise_api %}
- External SMTP server for email notifications

## Setting up a staging instance

You can set up a staging instance from scratch and configure the instance however you like. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."

Alternatively, you can create a staging instance that reflects your production configuration by restoring a backup of your production instance to the staging instance.

1. [Back up your production instance](#1-back-up-your-production-instance).
1. [Set up a staging instance](#2-set-up-a-staging-instance).
1. [Configure {% data variables.product.prodname_actions %}](#3-configure-github-actions).
1. [Configure {% data variables.product.prodname_registry %}](#4-configure-github-packages).
1. [Restore your production backup](#5-restore-your-production-backup).
1. [Review the instance's configuration](#6-review-the-instances-configuration).
1. [Apply the instance's configuration](#7-apply-the-instances-configuration).

### 1. Back up your production instance

If you want to test changes on an instance that contains the same data and configuration as your production instance, back up the data and configuration from the production instance using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

{% warning %}

**Warning**: If you use {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %} in production, your backup will include your production configuration for external storage. To avoid potential loss of data by writing to your production storage from your staging instance, you must configure each feature in steps 3 and 4 before you restore your backup.

{% endwarning %}

### 2. Set up a staging instance

Set up a new instance to act as your staging environment. You can use the same guides for provisioning and installing your staging instance as you did for your production instance. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)."

If you plan to restore a backup of your production instance, continue to the next step. Alternatively, you can configure the instance manually and skip the following steps.

### 3. Configure {% data variables.product.prodname_actions %}

Optionally, if you use {% data variables.product.prodname_actions %} on your production instance, configure the feature on the staging instance before restoring your production backup. If you don't use {% data variables.product.prodname_actions %}, skip to "[1. Configure {% data variables.product.prodname_registry %}](#4-configure-github-packages)."

{% warning %}

**Warning**: If you don't configure {% data variables.product.prodname_actions %} on the staging instance before restoring your production backup, your staging instance will use your production instance's external storage, which could result in loss of data. We strongly recommended that you use different external storage for your staging instance. For more information, see "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. To configure the staging instance to use an external storage provider for {% data variables.product.prodname_actions %}, enter one of the following commands.
   {% data reusables.actions.configure-storage-provider-platform-commands %}
{% data reusables.actions.configure-storage-provider %}
1. To prepare to enable {% data variables.product.prodname_actions %} on the staging instance, enter the following command.

   ```shell copy
   ghe-config app.actions.enabled true
   ```

### 4. Configure {% data variables.product.prodname_registry %}

Optionally, if you use {% data variables.product.prodname_registry %} on your production instance, configure the feature on the staging instance before restoring your production backup. If you don't use {% data variables.product.prodname_registry %}, skip to "[1. Restore your production backup](#5-restore-your-production-backup)."

{% warning %}

**Warning**: If you don't configure {% data variables.product.prodname_registry %} on the staging instance before restoring your production backup, your staging instance will use your production instance's external storage, which could result in loss of data. We strongly recommended that you use different external storage for your staging instance.

{% endwarning %}

1. Review the backup you will restore to the staging instance.
   - If you took the backup with {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 or later, the backup includes the configuration for {% data variables.product.prodname_registry %}. Continue to the next step.
   - If you took the backup with {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 or earlier, configure {% data variables.product.prodname_registry %} on the staging instance. For more information, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Configure the external storage connection by entering the following commands, replacing the placeholder values with actual values for your connection.
   - Azure Blob Storage:

     ```shell copy
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```

   - Amazon S3:

     ```shell copy
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```

1. To prepare to enable {% data variables.product.prodname_registry %} on the staging instance, enter the following command.

   ```shell copy
   ghe-config app.packages.enabled true
   ```

### 5. Restore your production backup

Use the `ghe-restore` command to restore the rest of the data from the backup. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#restoring-a-backup)."

If the staging instance is already configured and you want to overwrite settings, certificate, and license data, add the `-c` option to the command. For more information about the option, see [Using the backup and restore commands](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) in the {% data variables.product.prodname_enterprise_backup_utilities %} documentation.

### 6. Review the instance's configuration

To access the staging instance using the same hostname, update your local hosts file to resolve the staging instance's hostname by IP address by editing the `/etc/hosts` file in macOS or Linux, or the `C:\Windows\system32\drivers\etc` file in Windows.

{% note %}

**Note**: Your staging instance must be accessible from the same hostname as your production instance. Changing the hostname for {% data variables.location.product_location %} is not supported. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-a-hostname)."

{% endnote %}

Then, review the staging instance's configuration in the {% data variables.enterprise.management_console %}. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console)."

{% warning %}

**Warning**: If you configured {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %} for the staging instance, to avoid overwriting production data, ensure that the external storage configuration in the {% data variables.enterprise.management_console %} does not match your production instance.

{% endwarning %}

### 7. Apply the instance's configuration

To apply the configuration from the {% data variables.enterprise.management_console %}, click **Save settings**.

## Further reading

- "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)"
