---
  title: Overview of the upgrade process
  intro: 'Learn the recommendations and requirements for upgrading {% data variables.product.product_name %}, so you can plan and test your upgrade strategy.'
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
    - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server
  versions:
    ghes: '*'
  type: overview
  topics:
    - Enterprise
    - Upgrades
  shortTitle: Upgrading overview
---

{% data reusables.enterprise.constantly-improving %} You are responsible for upgrades to your instance. See "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)."

To upgrade an instance, you must:
1. **Plan your upgrade strategy** by choosing your upgrade version and the appropriate upgrade package, and scheduling a maintenance window.
1. **Communicate the upgrade** before and during the upgrade process.
1. **Prepare your backup strategy** by creating a backup and taking a virtual machine snapshot.
1. **Install the upgrade package** using the appropriate package and method.
1. **Complete post-upgrade tasks**.

The process you must follow to apply an upgrade package depends on how many nodes are in your deployment topology. This article provides general information for upgrading instances in a standalone or high availability configuration only.

## Planning your upgrade strategy

### Plan your upgrade

* Review the release notes and documented known issues before performing an upgrade. See "[AUTOTITLE](/admin/release-notes)" and "[AUTOTITLE](/admin/upgrading-your-instance/troubleshooting-upgrades/known-issues-with-upgrades-to-your-instance)."
* Review "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)" to ensure you understand the requirements and recommendations for upgrading.
* Check that {% data variables.location.product_location %}'s data disk is at least 15% free. {% data variables.product.company_short %} recommends ensuring there is additional free storage on the disk. In some rare cases, for customers with large data volumes, this threshold may differ. See "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)."
* Check that you have sufficient hardware resources for {% data variables.product.product_name %}. {% data reusables.enterprise_installation.preflight-checks %}
* Ensure you have a copy of all custom firewall rules for {% data variables.location.product_location %}, as customized rules will not persist post-upgrade. You must reapply any custom rules following the upgrade. See "[AUTOTITLE](/admin/configuring-settings/configuring-network-settings/configuring-built-in-firewall-rules)."
* For instances in a high availability configuration, check that the status of replication reports `OK` before upgrading. See "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/monitoring-a-high-availability-configuration)."
* Consider configuring the IP exception list for maintenance mode, so you can temporarily limit access to {% data variables.location.product_location %} to validate your server health after an upgrade. See "[AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)."

### Choose your upgrade version and package

* Determine an upgrade strategy and choose a version to upgrade to.
  * You can upgrade a {% data variables.product.product_name %} instance to a new patch release or to a new feature release.
  * Refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version, to a new patch or feature release version.
* Choose an upgrade package (hotpatch or upgrade package).
  * To upgrade to a patch release, you can use a hotpatch or an upgrade package. To upgrade to a feature release, you must use an upgrade package.
  * If you use an upgrade package, schedule a maintenance window for {% data variables.product.prodname_ghe_server %} end users. If you are using a hotpatch, maintenance mode is not required.
  * If you have enabled automatic update checks, site administrators will be notified that an upgrade package has been downloaded and is available. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/enabling-automatic-update-checks)".
  * Release candidate builds are intended solely for use in a test environment. Do not install a release candidate build in a production environment. Do not upgrade from the release candidate to later versions, including generally available releases.

### Consider if other application updates are required

Check if you need to upgrade the following applications:

* {% data variables.product.prodname_actions %} runners must be updated if {% data variables.location.product_location %} uses ephemeral self-hosted runners for {% data variables.product.prodname_actions %} and automatic updates are disabled. Upgrade runners to the minimum version of application required by your upgraded instance, before performing your upgrade. To find the minimum required version for your release, see "[AUTOTITLE](/admin/all-releases#minimum-github-actions-runner-application-versions)."
* {% data variables.product.prodname_enterprise_backup_utilities %}. Your {% data variables.product.prodname_enterprise_backup_utilities %} version needs to be the same version as, or at most two versions ahead of {% data variables.location.product_location %}.
  * You may need to upgrade {% data variables.product.prodname_enterprise_backup_utilities %} to a newer version, prior to upgrading your instance.
  * You may also want to plan to upgrade {% data variables.product.prodname_enterprise_backup_utilities %} to a newer version after upgrading your instance.

   See "[AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)" and the [README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

### Plan a maintenance window

* Depending on your upgrade strategy, significant downtime may be required.
* The best way to determine the expected duration of downtime is to test your upgrade in a staging environment first. See "[AUTOTITLE](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."
* The maintenance window for your upgrade depends on the type of upgrade you perform.
  * Upgrades using a hotpatch usually don't require a maintenance window. Sometimes a reboot is required, which you can perform at a later time.

    > [!NOTE]
    > Hotpatches require a configuration run, which can cause a brief period of errors or unresponsiveness for some or all services on {% data variables.location.product_location %}. You are not required to enable maintenance mode during installation of a hotpatch, but doing so will guarantee that users see a maintenance page instead of errors or timeouts. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
  * Patch releases using an upgrade package typically require less than five minutes of downtime.
  * Upgrading to a new feature release that include data migrations may cause a few hours of downtime, depending on storage performance and the amount of data that is migrated. During this time none of your users will be able to use the enterprise.

## Communicating your upgrade

* Prior to your upgrade, you can publish a global announcement banner to highlight important information to your users, such as incoming changes or possible downtime. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)."
* At the time of the upgrade, you can enable maintenance mode and set a custom message to inform users that the instance is temporarily unavailable. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

## Preparing your backup strategy

### Create a backup snapshot

Ensure you have a recent, successful backup snapshot of your instance's primary node before you start the upgrade process. See "[AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)" and the [README](https://github.com/github/backup-utils#readme) in the {% data variables.product.prodname_enterprise_backup_utilities %} project documentation.

### Create a VM snapshot

If you're upgrading to a new feature release, a virtual machine (VM) snapshot is required. If you're ugprading to a patch release, you can attach the existing data disk.

Create a virtual machine (VM) snapshot of your instance's primary node immediately before upgrading, and only when maintenance mode has been enabled or the instance has been powered down. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/taking-a-snapshot)".

## Installing an upgrade package

Review the considerations for upgrades, and complete any preparation steps as described above, before you start installing an upgrade package.

The instructions for upgrading your {% data variables.product.product_name %} instance differ depending on the type of upgrade you're performing and the number of nodes your instance has.

* [Upgrading with a hotpatch](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch#upgrading-with-a-hotpatch)
  * [Upgrading a standalone instance using a hotpatch](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch#upgrading-a-standalone-instance-using-a-hotpatch)
  * [Upgrading an instance with multiple nodes using a hotpatch](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch#upgrading-an-instance-with-multiple-nodes-using-a-hotpatch)
* [Upgrading with an upgrade package](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-an-upgrade-package#upgrading-with-an-upgrade-package)
  * [Upgrading a standalone instance using an upgrade package](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-an-upgrade-package#upgrading-a-standalone-instance-using-an-upgrade-package)
  * [Upgrading an instance with multiple nodes using an upgrade package](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-an-upgrade-package#upgrading-an-instance-with-multiple-nodes-using-an-upgrade-package)

## Completing post-upgrade tasks

* Check the status of background jobs, and review the upgrade log for errors.
* Check basic {% data variables.product.product_name %} functionality. For example, ensure you can sign in via the user interface, and verify that several of your organizations, repositories and issues can be reached as expected. It's also a good idea to manually run several Git fetches, clones, and pushes using SSH and/or HTTPS, and check that API requests and webhook deliveries complete successfully.
* Reapply any custom firewall rules. See "[AUTOTITLE](/admin/configuring-settings/configuring-network-settings/configuring-built-in-firewall-rules)."
* Delete any VM snapshots taken prior to upgrading. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/taking-a-snapshot)."
* Disable maintenance mode, and update any pre-upgrade communications such as announcement banners. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)" and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
* Monitor all queued background jobs on your instance to ensure they complete successfully. See "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities)."
