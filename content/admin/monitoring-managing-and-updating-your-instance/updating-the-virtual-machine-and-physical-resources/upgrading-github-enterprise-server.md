---
title: Upgrading GitHub Enterprise Server
intro: 'Upgrade {% data variables.product.product_name %} to get the latest features and security updates.'
permissions: 'Site administrators can upgrade a {% data variables.product.product_name %} instance.'
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
  - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
---

## About upgrades to {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} You are responsible for upgrades to your instance. For more information, see "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)."

To upgrade an instance, you must plan and communicate the upgrade, choose the appropriate package, back up your data, and then perform the upgrade.

## Prerequisites

To successfully upgrade {% data variables.location.product_location %}, the instance's data disk must be at least 15% free. {% data variables.product.company_short %} recommends ensuring there is more free storage on the disk. In some rare cases, for customers with large data volumes, this threshold may differ.

## Preparing to upgrade

To prepare for an upgrade, plan the upgrade path, optionally upgrade {% data variables.product.prodname_actions %} runners, and schedule a maintenance window.

1. Determine an upgrade strategy and choose a version to upgrade to. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.
1. Create a fresh backup of your instance's primary node with the {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see the [README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

   {% note %}

   **Note:** Your {% data variables.product.prodname_enterprise_backup_utilities %} version needs to be the same version as, or at most two versions ahead of, {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)."

   {% endnote %}

1. If {% data variables.location.product_location %} uses ephemeral self-hosted runners for {% data variables.product.prodname_actions %} and you've disabled automatic updates, upgrade your runners to the version of the runner application that your upgraded instance will run.
1. If you are upgrading using an upgrade package, schedule a maintenance window for {% data variables.product.prodname_ghe_server %} end users. If you are using a hotpatch, maintenance mode is not required.

   {% note %}

   **Note:** The maintenance window depends on the type of upgrade you perform. Upgrades using a hotpatch usually don't require a maintenance window. Sometimes a reboot is required, which you can perform at a later time. Following the versioning scheme of MAJOR.FEATURE.PATCH, patch releases using an upgrade package typically require less than five minutes of downtime. Feature releases that include data migrations take longer depending on storage performance and the amount of data that's migrated. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

   {% endnote %}

## Taking a snapshot

A snapshot stores the state of a virtual machine (VM) at a point in time. {% data variables.product.company_short %} highly recommends taking a snapshot before upgrading your VM so that if an upgrade fails, you can revert your VM back to the snapshot. {% data variables.product.company_short %} only recommends taking a VM snapshot when the instance's VM is powered down, or when the instance is in maintenance mode and all background jobs have finished.

If you're upgrading to a new feature release, you must take a VM snapshot. If you're upgrading to a patch release, you can attach the existing data disk.

There are two types of snapshots:

- **VM snapshots** save your entire VM state, including user data and configuration data. This snapshot method requires a large amount of disk space and is time consuming.
- **Data disk snapshots** only save your user data.

   {% note %}

   **Notes:**
    - Some platforms don't allow you to take a snapshot of just your data disk. For these platforms, you'll need to take a snapshot of the entire VM.
    - If your hypervisor does not support full VM snapshots, you should take a snapshot of the root disk and data disk in quick succession.

   {% endnote %}

| Platform | Snapshot method | Documentation |
|---|---|---|
| Amazon AWS | Disk | [Create Amazon EBS snapshots](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html) in the AWS documentation
| Azure | VM | [Back up an Azure VM from the VM settings](https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm) in Microsoft Learn
| Hyper-V | VM | [Enable or disable checkpoints in Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v) in Microsoft Learn
| Google Compute Engine | Disk | [Create and manage disk snapshots](https://cloud.google.com/compute/docs/disks/create-snapshots) in the Google Cloud documentation
| VMware | VM | [Taking Snapshots of a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html) in VMware Docs

## Choosing an upgrade package

You can upgrade a {% data variables.product.product_name %} instance to a new patch release or to a new feature release. To upgrade to a patch release, you can use a hotpatch or an upgrade package. To upgrade to a feature release, you must use an upgrade package.

A {% data variables.product.product_name %} instance comprises one or more nodes. The upgrade process you must follow depends on how many nodes your instance has. For more information, see "[AUTOTITLE](/admin/overview/about-github-enterprise-server#about-deployment-topologies)."

- [Upgrading with a hotpatch](#upgrading-with-a-hotpatch)
  - [Upgrading a standalone instance using a hotpatch](#upgrading-a-standalone-instance-using-a-hotpatch)
  - [Upgrading an instance with multiple nodes using a hotpatch](#upgrading-an-instance-with-multiple-nodes-using-a-hotpatch)
- [Upgrading with an upgrade package](#upgrading-with-an-upgrade-package)
  - [Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)
  - [Upgrading an instance with multiple nodes using an upgrade package](#upgrading-an-instance-with-multiple-nodes-using-an-upgrade-package)

## Upgrading with a hotpatch

{% data reusables.enterprise_installation.hotpatching-explanation %}

Using the {% data variables.enterprise.management_console %}, you can install a hotpatch immediately or schedule it for later installation. You can use the administrative shell to install a hotpatch with the `ghe-upgrade` utility. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)."

{% note %}

**Notes**:

- If {% data variables.location.product_location %} is running a release candidate build, you can't upgrade with a hotpatch.

- Installing a hotpatch using the {% data variables.enterprise.management_console %} is not available for clusters. To install a hotpatch for a cluster, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)."

{% endnote %}

- [Upgrading a standalone instance using a hotpatch](#upgrading-a-standalone-instance-using-a-hotpatch)
- [Upgrading an instance with multiple nodes using a hotpatch](#upgrading-an-instance-with-multiple-nodes-using-a-hotpatch)

### Upgrading a standalone instance using a hotpatch

If you're upgrading an instance with one node using a hotpatch, and your target is a patch release, you can upgrade using {% data variables.enterprise.management_console %}. To upgrade to a feature release, you must use the administrative shell.

- [Installing a hotpatch using the {% data variables.enterprise.management_console %}](#installing-a-hotpatch-using-the-management-console)
- [Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)

#### Installing a hotpatch using the {% data variables.enterprise.management_console %}

You can use the {% data variables.enterprise.management_console %} to upgrade with a hotpatch by enabling automatic updates. You will then be presented with the latest available version of {% data variables.product.prodname_ghe_server %} that you can upgrade to.

If the upgrade target you're presented with is a feature release instead of a patch release, you cannot use the {% data variables.enterprise.management_console %} to install a hotpatch. You must install the hotpatch using the administrative shell instead. For more information, see "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."

1. Enable automatic updates. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/enabling-automatic-update-checks)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
1. When a new hotpatch has been downloaded, select the **Install package** dropdown menu.
    - To install immediately, click **Now**.
    - To install later, select a later date.
1. Click **Install**.

#### Installing a hotpatch using the administrative shell

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copy the URL for the upgrade hotpackage (_.hpkg_ file).
{% data reusables.enterprise_installation.download-package %}
1. Run the `ghe-upgrade` command using the package file name:

   ```shell
   admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
   *** verifying upgrade package signature...
   ```

1. If at least one service or system component requires a reboot, the hotpatch upgrade script notifies you. For example, updates to the kernel, MySQL, or Elasticsearch may require a reboot.

### Upgrading an instance with multiple nodes using a hotpatch

If you are installing a hotpatch, you do not need to enter maintenance mode or stop replication.

- [Upgrading the primary node using a hotpatch](#upgrading-the-primary-node-using-a-hotpatch)
- [Upgrading additional nodes using a hotpatch](#upgrading-additional-nodes-using-a-hotpatch)

#### Upgrading the primary node using a hotpatch

For instructions to upgrade the primary node, see "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."

#### Upgrading additional nodes using a hotpatch

{% data reusables.enterprise_installation.multiple-node-upgrade-admonishment %}

1. To upgrade the node, follow the instructions in "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}
{% data reusables.enterprise_installation.multiple-node-repeat-upgrade-process %}

## Upgrading with an upgrade package

While you can use a hotpatch to upgrade to the latest patch release within a feature series, you must use an upgrade package to upgrade to a newer feature release. For example to upgrade from 2.11.10 to 2.12.4 you must use an upgrade package since these are in different feature series. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)."

- [Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)
- [Upgrading an instance with multiple nodes using an upgrade package](#upgrading-an-instance-with-multiple-nodes-using-an-upgrade-package)

### Upgrading a standalone instance using an upgrade package

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Select the appropriate platform and copy the URL for the upgrade package (_.pkg_ file).
{% data reusables.enterprise_installation.download-package %}
1. Enable maintenance mode and wait for all active processes to complete on the {% data variables.product.prodname_ghe_server %} instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

   {% note %}

   **Note**: When upgrading the primary node in a high availability configuration, the instance should already be in maintenance mode if you are following the instructions in "[Upgrading the primary node](#upgrading-the-primary-node)."

   {% endnote %}

1. Run the `ghe-upgrade` command using the package file name:

   ```shell
   admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
   *** verifying upgrade package signature...
   ```

1. Confirm that you'd like to continue with the upgrade and restart after the package signature verifies. The new root filesystem writes to the secondary partition and the instance automatically restarts in maintenance mode:

   ```shell
   *** applying update...
   This package will upgrade your installation to version VERSION-NUMBER
   Current root partition: /dev/xvda1 [VERSION-NUMBER]
   Target root partition:  /dev/xvda2
   Proceed with installation? [y/N]
   ```

{%- ifversion ghe-migrations-cli-utility %}
1. Optionally, during an upgrade to a feature release, you can monitor the status of database migrations using the `ghe-migrations` utility. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-migrations)."
{%- endif %}
1. After the instance restarts, the upgrade will continue in the background. You cannot unset maintenance mode until the process completes. To monitor progress, read the output in `/data/user/common/ghe-config.log`. For example, you can tail the log by running the following command:

   ```shell
   tail -f /data/user/common/ghe-config.log
   ```

{% ifversion ip-exception-list %}
1. Optionally, after the upgrade, validate the upgrade by configuring an IP exception list to allow access to a specified list of IP addresses. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}
1. For single node upgrades, disable maintenance mode so users can use {% data variables.location.product_location %}.

   {% note %}

   **Note**: After you upgrade an instance in a high availability configuration, you should remain in maintenance mode until you have upgraded all of the replica nodes and replication is current. For more information, see "[Upgrading additional nodes with an upgrade package](#upgrading-additional-nodes-with-an-upgrade-package)."

   {% endnote %}

### Upgrading an instance with multiple nodes using an upgrade package

To upgrade an instance that comprises multiple nodes using an upgrade package, you must upgrade the primary node, then upgrade any additional nodes.

- [Upgrading the primary node with an upgrade package](#upgrading-the-primary-node-with-an-upgrade-package)
- [Upgrading additional nodes with an upgrade package](#upgrading-additional-nodes-with-an-upgrade-package)

#### Upgrading the primary node with an upgrade package

{% warning %}

**Warning:** When replication is stopped, if the primary fails, any work that is done before the replica is upgraded and the replication begins again will be lost.

{% endwarning %}

1. On the primary node, enable maintenance mode and wait for all active processes to complete. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
{% data reusables.enterprise_installation.replica-ssh %}
1. To stop replication on all nodes, run `ghe-repl-stop` on each node.
1. To upgrade the primary node, follow the instructions in "[Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)."

#### Upgrading additional nodes with an upgrade package

{% data reusables.enterprise_installation.multiple-node-upgrade-admonishment %}

1. Upgrade the node by following the instructions in "[Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)."
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}
{% data reusables.enterprise_installation.start-replication %}
{% data reusables.enterprise_installation.replication-status %} If the command returns `Replication is not running`, the replication may still be starting. Wait about one minute before running `ghe-repl-status` again.

   {% note %}

   **Notes:**

   - While the resync is in progress `ghe-repl-status` may indicate that replication is behind. For example, you may see the following message.

     ```text
     CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
     ```

   - If {% data variables.product.prodname_actions %} is enabled on {% data variables.location.product_location %}, you may see a message like the following. This message is expected when replication is paused due to maintenance mode being set on the primary appliance. Once maintenance mode is unset, this message should be resolved.

     ```text
     CRITICAL: mssql replication is down, didn't find Token_Configuration!
     ```

   {% endnote %}

   {% ifversion ghes = 3.6 %}If you have upgraded each node to {% data variables.product.product_name %} 3.6.0 or later and started replication, but `git replication is behind the primary` continues to appear after 45 minutes, contact {% data variables.contact.enterprise_support %}.{% endif %} {% ifversion ghes = 3.6 %}Otherwise, if{% else %}If{% endif %} `ghe-repl-status` did not return `OK`, and the explanation isn't listed in the note above, contact {% data variables.contact.enterprise_support %}. For more information, see "[AUTOTITLE](/support/contacting-github-support)."

{% data reusables.enterprise_installation.multiple-node-repeat-upgrade-process %}
1. After you have upgraded the last replica node and the resync is complete, disable maintenance mode so users can use {% data variables.location.product_location %}.

## Restoring from a failed upgrade

If an upgrade fails or is interrupted, you should revert your instance back to its previous state. The process for completing this depends on the type of upgrade.

### Rolling back a patch release

To roll back a patch release, use the `ghe-upgrade` command with the `--allow-patch-rollback` switch. Before rolling back, replication must be temporarily stopped by running `ghe-repl-stop` on all replica nodes. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

After the rollback is complete, restart replication by running `ghe-repl-start` on all nodes.

For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-upgrade)."

### Rolling back a feature release

To roll back from a feature release, restore from a VM snapshot to ensure that root and data partitions are in a consistent state. For more information, see "[Taking a snapshot](#taking-a-snapshot)."

{% ifversion ghes %}

## Further reading

- "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
