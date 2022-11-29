---
title: Upgrading GitHub Enterprise Server
intro: 'Upgrade {% data variables.product.prodname_ghe_server %} to get the latest features and security updates.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
---


## Preparing to upgrade

1. Determine an upgrade strategy and choose a version to upgrade to. For more information, see "[Upgrade requirements](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.
1. Create a fresh backup of your primary instance with the {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see the [README.md file](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

  {% note %}

  **Note:** Your {% data variables.product.prodname_enterprise_backup_utilities %} version needs to be the same version as, or at most two versions ahead of, {% data variables.location.product_location %}. For more information, see "[Upgrading GitHub Enterprise Server Backup Utilities](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)."

  {% endnote %}

1. If {% data variables.location.product_location %} uses ephemeral self-hosted runners for {% data variables.product.prodname_actions %} and you've disabled automatic updates, upgrade your runners to the version of the runner application that your upgraded instance will run.
1. If you are upgrading using an upgrade package, schedule a maintenance window for {% data variables.product.prodname_ghe_server %} end users. If you are using a hotpatch, maintenance mode is not required.

  {% note %}

  **Note:** The maintenance window depends on the type of upgrade you perform. Upgrades using a hotpatch usually don't require a maintenance window. Sometimes a reboot is required, which you can perform at a later time. Following the versioning scheme of MAJOR.FEATURE.PATCH, patch releases using an upgrade package typically require less than five minutes of downtime. Feature releases that include data migrations take longer depending on storage performance and the amount of data that's migrated. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% endnote %}

## Taking a snapshot

A snapshot is a checkpoint of a virtual machine (VM) at a point in time. We highly recommend taking a snapshot before upgrading your virtual machine so that if an upgrade fails, you can revert your VM back to the snapshot. We only recommend taking a VM snapshot when the appliance is powered down or in maintenance mode and all background jobs have finished.

If you're upgrading to a new feature release, you must take a VM snapshot. If you're upgrading to a patch release, you can attach the existing data disk. 

There are two types of snapshots:

- **VM snapshots** save your entire VM state, including user data and configuration data. This snapshot method requires a large amount of disk space and is time consuming.
- **Data disk snapshots** only save your user data.

  {% note %}

  **Notes:**
  - Some platforms don't allow you to take a snapshot of just your data disk. For these platforms, you'll need to take a snapshot of the entire VM.
  - If your hypervisor does not support full VM snapshots, you should take a snapshot of the root disk and data disk in quick succession.

  {% endnote %}

| Platform | Snapshot method | Snapshot documentation URL |
|---|---|---|
| Amazon AWS | Disk | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | VM | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | VM | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Disk | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | VM | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Upgrading with a hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %} 

Using the {% data variables.enterprise.management_console %}, you can install a hotpatch immediately or schedule it for later installation. You can use the administrative shell to install a hotpatch with the `ghe-upgrade` utility. For more information, see "[Upgrade requirements](/enterprise/admin/guides/installation/upgrade-requirements/)."

{% note %}

**{% ifversion ghes %}Notes{% else %}Note{% endif %}**:

{% ifversion ghes %}
- If {% data variables.location.product_location %} is running a release candidate build, you can't upgrade with a hotpatch.

- {% endif %}Installing a hotpatch using the {% data variables.enterprise.management_console %} is not available in clustered environments. To install a hotpatch in a clustered environment, see "[Upgrading a cluster](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)."

{% endnote %}

### Upgrading a single appliance with a hotpatch

#### Installing a hotpatch using the {% data variables.enterprise.management_console %}

You can use the {% data variables.enterprise.management_console %} to upgrade with a hotpatch by enabling automatic updates. You will then be presented with the latest available version of {% data variables.product.prodname_ghe_server %} that you can upgrade to.

If the upgrade target you're presented with is a feature release instead of a patch release, you cannot use the {% data variables.enterprise.management_console %} to install a hotpatch. You must install the hotpatch using the administrative shell instead. For more information, see "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."

1. Enable automatic updates. For more information, see "[Enabling automatic updates](/enterprise/admin/guides/installation/enabling-automatic-update-checks/)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. When a new hotpatch has been downloaded, use the Install package drop-down menu:
    - To install immediately, select **Now**:
    - To install later, select a later date.
  ![Hotpatch installation date dropdown](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Click **Install**.
  ![Hotpatch install button](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Installing a hotpatch using the administrative shell

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copy the URL for the upgrade hotpackage (*.hpkg* file).
{% data reusables.enterprise_installation.download-package %}
4. Run the `ghe-upgrade` command using the package file name:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. If a reboot is required for updates for kernel, MySQL, Elasticsearch or other programs, the hotpatch upgrade script notifies you.

### Upgrading an appliance that has replica instances using a hotpatch

{% note %}

**Note**: If you are installing a hotpatch, you do not need to enter maintenance mode or stop replication.

{% endnote %}

Appliances configured for high-availability and geo-replication use replica instances in addition to primary instances. To upgrade these appliances, you'll need to upgrade both the primary instance and all replica instances, one at a time.

#### Upgrading the primary instance

1. Upgrade the primary instance by following the instructions in "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."

#### Upgrading a replica instance

{% note %}

**Note:** If you're running multiple replica instances as part of geo-replication, repeat this procedure for each replica instance, one at a time.

{% endnote %}

1. Upgrade the replica instance by following the instructions in "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)." If you are using multiple replicas for Geo-replication, you must repeat this procedure to upgrade each replica one at a time.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

## Upgrading with an upgrade package

While you can use a hotpatch to upgrade to the latest patch release within a feature series, you must use an upgrade package to upgrade to a newer feature release. For example to upgrade from `2.11.10` to `2.12.4` you must use an upgrade package since these are in different feature series. For more information, see "[Upgrade requirements](/enterprise/admin/guides/installation/upgrade-requirements/)."

### Upgrading a single appliance with an upgrade package

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Select the appropriate platform and copy the URL for the upgrade package (*.pkg* file).
{% data reusables.enterprise_installation.download-package %}
4. Enable maintenance mode and wait for all active processes to complete on the {% data variables.product.prodname_ghe_server %} instance. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

  {% note %}

  **Note**: When upgrading the primary appliance in a High Availability configuration, the appliance should already be in maintenance mode if you are following the instructions in "[Upgrading the primary instance](#upgrading-the-primary-instance)."

  {% endnote %}

5. Run the `ghe-upgrade` command using the package file name:
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Confirm that you'd like to continue with the upgrade and restart after the package signature verifies. The new root filesystem writes to the secondary partition and the instance automatically restarts in maintenance mode:
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. Optionally, to validate the upgrade, configure an IP exception list to allow access to a specified list of IP addresses. For more information, see "[Validating changes in maintenance mode using the IP exception list](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}
7. For single appliance upgrades, disable maintenance mode so users can use {% data variables.location.product_location %}.

  {% note %}

  **Note**: When upgrading appliances in a High Availability configuration you should remain in maintenance mode until you have upgraded all of the replicas and replication is current. For more information, see "[Upgrading a replica instance](#upgrading-a-replica-instance)."

  {% endnote %}

### Upgrading an appliance that has replica instances using an upgrade package

Appliances configured for high-availability and geo-replication use replica instances in addition to primary instances. To upgrade these appliances, you'll need to upgrade both the primary instance and all replica instances, one at a time.

#### Upgrading the primary instance

{% warning %}

**Warning:** When replication is stopped, if the primary fails, any work that is done before the replica is upgraded and the replication begins again will be lost.

{% endwarning %}

1. On the primary instance, enable maintenance mode and wait for all active processes to complete. For more information, see "[Enabling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)."
{% data reusables.enterprise_installation.replica-ssh %}
3. On the replica instance, or on all replica instances if you're running multiple replica instances as part of geo-replication, run `ghe-repl-stop` to stop replication.
4. Upgrade the primary instance by following the instructions in "[Upgrading a single appliance with an upgrade package](#upgrading-a-single-appliance-with-an-upgrade-package)."

#### Upgrading a replica instance

{% note %}

**Note:** If you're running multiple replica instances as part of geo-replication, repeat this procedure for each replica instance, one at a time.

{% endnote %}

1. Upgrade the replica instance by following the instructions in "[Upgrading a single appliance with an upgrade package](#upgrading-a-single-appliance-with-an-upgrade-package)." If you are using multiple replicas for Geo-replication, you must repeat this procedure to upgrade each replica one at a time.
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} If the command returns `Replication is not running`, the replication may still be starting. Wait about one minute before running `ghe-repl-status` again.

   {% note %}

   **Note:** While the resync is in progress `ghe-repl-status` may indicate that replication is behind. For example, you may see the following message.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - If you have upgraded each node to {% data variables.product.product_name %} 3.6.0 or later and started replication, but `git replication is behind the primary` continues to appear after 45 minutes, contact {% data variables.contact.enterprise_support %}. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."
   {%- endif %}
   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}Otherwise, if{% else %}If{% endif %} `ghe-repl-status` did not return `OK`, contact {% data variables.contact.enterprise_support %}. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."
6. When you have completed upgrading the last replica, and the resync is complete, disable maintenance mode so users can use {% data variables.location.product_location %}.

## Restoring from a failed upgrade

If an upgrade fails or is interrupted, you should revert your instance back to its previous state. The process for completing this depends on the type of upgrade.

### Rolling back a patch release

To roll back a patch release, use the `ghe-upgrade` command with the `--allow-patch-rollback` switch. Before rolling back, replication must be temporarily stopped by running `ghe-repl-stop` on all replica instances. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Once the rollback is complete, restart replication by running `ghe-repl-start` on all replicas. 

For more information, see "[Command-line utilities](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)."

### Rolling back a feature release

To roll back from a feature release, restore from a VM snapshot to ensure that root and data partitions are in a consistent state. For more information, see "[Taking a snapshot](#taking-a-snapshot)."

{% ifversion ghes %}
## Further reading

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
