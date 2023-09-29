---
title: Known issues with backups for your instance
intro: 'See an overview of workarounds for issues that impact the backup or restoration process for {% data variables.product.prodname_ghe_server %}.'
versions:
  feature: backup-utilities-encryption-bug
type: overview
topics:
  - Enterprise
  - Troubleshooting
  - Backups
shortTitle: Known issues with backups
redirect_from:
  - /admin/configuration/configuring-your-enterprise/known-issues-with-backups-for-your-instance
---

## About known issues with {% data variables.product.prodname_ghe_server %} backups

{% data variables.product.company_short %} provides workarounds for the following issues that could impact backup or restoration of data for a {% data variables.product.prodname_ghe_server %} instance. For more information, see "Known issues" in the [{% data variables.product.prodname_ghe_server %} release notes](/admin/release-notes).

{% ifversion backup-utilities-encryption-bug %}

## Users cannot sign in after restoration of a backup

{% note %}

**Note:** This known issue has been fixed in {% data variables.product.prodname_enterprise_backup_utilities %} {% ifversion ghes = 3.7 %}3.7.1{% elsif ghes = 3.8 %}3.8.1{% elsif ghes = 3.9 %}3.9.1{% endif %}.

{% endnote %}

If you used {% data variables.product.prodname_enterprise_backup_utilities %} {% ifversion ghes = 3.7 %}3.7.0{% elsif ghes = 3.8 %}3.7.0 or 3.8.0{% elsif ghes = 3.9 %}3.7.0, 3.8.0, or 3.9.0{% endif %} to back up an instance running any release in the {% data variables.product.product_name %} 3.7{% ifversion ghes = 3.8 or ghes = 3.9 %} or 3.8{% endif %} series, after you restore the backup to a new instance, users cannot sign in. Though users cannot sign in, the backup itself is unaffected and all data is intact.

After you restore an existing backup affected by this issue, you can resolve the issue by modifying the configuration on the new instance.

### Restoring from an existing backup

If you've restored an existing backup from {% data variables.product.prodname_enterprise_backup_utilities %} {% ifversion ghes = 3.7 %}3.7.0{% elsif ghes = 3.8 %}3.8.0{% elsif ghes = 3.9%}3.7.0, 3.8.0, or 3.9.0{% endif %} to a new instance and users cannot sign in, you must output configuration data from the source {% data variables.product.product_name %} instance and adjust the configuration on the target instance.

To ensure users can sign into the new target instance, ensure that your environment meets the following requirements.

- The source {% data variables.product.product_name %} instance must be running and accessible via SSH.
- You must have an existing backup from {% data variables.product.prodname_enterprise_backup_utilities %} {% ifversion ghes = 3.7 %}3.7.0{% elsif ghes = 3.8 %}3.7.0 or 3.8.0{% elsif ghes = 3.9 %}3.7.0, 3.8.0, or 3.9.0{% endif %}.
- You must have provisioned a new target {% data variables.product.product_name %} instance and restored the backup. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-instance)."

1. SSH into the source {% data variables.product.product_name %} instance that you backed up. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. Replace HOSTNAME with the actual hostname of your instance. For more information about SSH access, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

{%- ifversion ghes = 3.7 %}
1. To display a list of encryption and decryption keys, run the following command.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material
   ```

{%- elsif ghes = 3.8 or ghes = 3.9 %}
1. To display a list of decryption keys, run the following command.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material
   ```

1. Copy the output to a safe and temporary location.
1. To display a list of encryption keys, run the following command.

   ```shell copy
   ghe-config secrets.github.encrypted-column-current-encryption-key
   ```

1. Copy the output to a safe and temporary location.
{%- endif %}
1. SSH into the destination {% data variables.product.product_name %} instance where you restored the backup. Replace HOSTNAME with the actual hostname of your instance.

   ```shell copy
   ssh -p 122 admin@HOSTNAME
   ```

1. Enable maintenance mode. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#enabling-maintenance-mode-immediately-or-scheduling-a-maintenance-window-for-a-later-time)."
1. To verify that the destination instance is ready for configuration, run the following {% ifversion ghes = 3.7 %}command{% elsif ghes = 3.8 or ghes = 3.9 %}commands{% endif %}. There should be no output displayed.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material
   {%- ifversion ghes = 3.8 or ghes = 3.9 %}
   ghe-config secrets.github.encrypted-column-current-encryption-key
   {%- endif %}
   ```

{%- ifversion ghes = 3.7 %}
1. To update the list of keys on the destination instance, run the following command. Replace KEY-LIST with the output from step 1.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material "KEY-LIST"
   ```

{%- elsif ghes = 3.8 or ghes = 3.9 %}
1. To update the decryption keys on the destination instance, run the following command. Replace DECRYPTION-KEY-LIST with the output from step 1.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material "DECRYPTION-KEY-LIST"
   ```

1. To update the encryption key on the destination instance, run the following command. Replace ENCRYPTION-KEY with the output from step 4.

   ```shell copy
   ghe-config secrets.github.encrypted-column-current-encryption-key "ENCRYPTION-KEY"
   ```

{%- endif %}
1. To apply the configuration, run the following command.

    ```shell copy
    ghe-config-apply
    ```

1. Wait for the configuration run to complete.
1. To ensure that the target instance's configuration contains the keys, run the following {% ifversion ghes = 3.7 %}command{% elsif ghes = 3.8 or ghes = 3.9 %}commands{% endif %} and verify that the output matches step 1{% ifversion ghes = 3.8 or ghes = 3.9 %} and step 4{% endif %}.

   ```shell copy
   ghe-config secrets.github.encrypted-column-keying-material
   {%- ifversion ghes = 3.8 or ghes = 3.9 %}
   ghe-config secrets.github.encrypted-column-current-encryption-key
   {%- endif %}
   ```

1. Have a user sign into the destination instance. If any issues arise, contact {% data variables.contact.enterprise_support %}. For more information, see "[AUTOTITLE](/support/contacting-github-support)."

{% endif %}
