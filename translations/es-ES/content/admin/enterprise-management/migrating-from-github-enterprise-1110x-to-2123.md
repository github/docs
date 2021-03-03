---
title: Migrating from GitHub Enterprise 11.10.x to 2.1.23
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating/
  - /enterprise/admin/articles/migrating-github-enterprise/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x/
  - /enterprise/admin/articles/upgrading-to-a-newer-release/
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: 'To migrate from {% data variables.product.prodname_enterprise %} 11.10.x to 2.1.23, you''ll need to set up a new appliance instance and migrate data from the previous instance.'
versions:
  enterprise-server: '*'
---

Migrations from {% data variables.product.prodname_enterprise %} 11.10.348 and later are supported. Migrating from {% data variables.product.prodname_enterprise %} 11.10.348 and earlier is not supported. You must first upgrade to 11.10.348 in several upgrades. For more information, see the 11.10.348 upgrading procedure, "[Upgrading to the latest release](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)."

To upgrade to the latest version of {% data variables.product.prodname_enterprise %}, you must first migrate to {% data variables.product.prodname_ghe_server %} 2.1, then you can follow the normal upgrade process. For more information, see "[Upgrading {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".

### Prepare for the migration

1. Review the Provisioning and Installation guide and check that all prerequisites needed to provision and configure {% data variables.product.prodname_enterprise %} 2.1.23 in your environment are met. For more information, see "[Provisioning and Installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)."
2. Verify that the current instance is running a supported upgrade version.
3. Set up the latest version of the {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - If you have already configured scheduled backups using {% data variables.product.prodname_enterprise_backup_utilities %}, make sure you have updated to the latest version.
    - If you are not currently running scheduled backups, set up {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Take an initial full backup snapshot of the current instance using the `ghe-backup` command. If you have already configured scheduled backups for your current instance, you don't need to take a snapshot of your instance.

   {% tip %}

   **Tip:** You can leave the instance online and in active use during the snapshot. You'll take another snapshot during the maintenance portion of the migration. Since backups are incremental, this initial snapshot reduces the amount of data transferred in the final snapshot, which may shorten the maintenance window.

   {% endtip %}

5. Determine the method for switching user network traffic to the new instance. After you've migrated, all HTTP and Git network traffic directs to the new instance.
    - **DNS** - We recommend this method for all environments, as it's simple and works well even when migrating from one datacenter to another. Before starting migration, reduce the existing DNS record's TTL to five minutes or less and allow the change to propagate. Once the migration is complete, update the DNS record(s) to point to the IP address of the new instance.
    - **IP address assignment** - This method is only available on VMware to VMware migration and is not recommended unless the DNS method is unavailable. Before starting the migration, you'll need to shut down the old instance and assign its IP address to the new instance.
6. Schedule a maintenance window. The maintenance window should include enough time to transfer data from the backup host to the new instance and will vary based on the size of the backup snapshot and available network bandwidth. During this time your current instance will be unavailable and in maintenance mode while you migrate to the new instance.

### Perform the migration

1. Provision a new {% data variables.product.prodname_enterprise %} 2.1 instance. For more information, see the "[Provisioning and Installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)" guide for your target platform.
2. In a browser, navigate to the new replica appliance's IP address and upload your {% data variables.product.prodname_enterprise %} license.
3. Set an admin password.
5. Click **Migrate**.
![Choosing install type](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Paste your backup host access SSH key into "Add new SSH key".
![Authorizing backup](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Click **Add key** and then click **Continue**.
8. Copy the `ghe-restore` command that you'll run on the backup host to migrate data to the new instance.
![Starting a migration](/assets/images/enterprise/migration/migration-restore-start.png)
9. Enable maintenance mode on the old instance and wait for all active processes to complete. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% note %}

  **Note:** The instance will be unavailable for normal use from this point forward.

  {% endnote %}

10. On the backup host, run the `ghe-backup` command to take a final backup snapshot. This ensures that all data from the old instance is captured.
11. On the backup host, run the `ghe-restore` command you copied on the new instance's restore status screen to restore the latest snapshot.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Return to the new instance's restore status screen to see that the restore completed.
![Restore complete screen](/assets/images/enterprise/migration/restore-complete-screen.png)
13. Click **Continue to settings** to review and adjust the configuration information and settings that were imported from the previous instance.
![Review imported settings](/assets/images/enterprise/migration/migration-status-complete.png)
14. Click **Save settings**.

  {% note %}

  **Note:** You can use the new instance after you've applied configuration settings and restarted the server.

  {% endnote %}

15. Switch user network traffic from the old instance to the new instance using either DNS or IP address assignment.
16. Upgrade to the latest patch release of {{ currentVersion }}. For more information, see "[Upgrading {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)."
