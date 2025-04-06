---
  title: Upgrading with an upgrade package
  intro: 'Learn how to use an upgrade package to upgrade {% data variables.product.product_name %} to a newer feature release.'
  redirect_from:
    - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#upgrading-a-standalone-instance-using-an-upgrade-package
    - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package
  versions:
    ghes: '*'
  type: how_to
  topics:
    - Enterprise
    - Upgrades
  shortTitle: Upgrade with an upgrade package
---

Using the administrative shell, you can install an upgrade package with the `ghe-upgrade` utility.

If you're running back-to-back feature version upgrades, you must ensure background jobs are complete before proceeding with the following upgrade to a feature release. {% data variables.product.prodname_dotcom %} recommends waiting 24 hours between upgrades to allow any background upgrade tasks to complete before upgrading a second time. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)."

While you can use a hotpatch to upgrade to the latest patch release within a feature series, you must use an upgrade package to upgrade to a newer feature release. For example, to upgrade from 2.11.10 to 2.12.4 you must use an upgrade package since these are in different feature series.

## Upgrading a standalone instance using an upgrade package

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Select the appropriate platform and copy the URL for the upgrade package (_.pkg_ file).
{% data reusables.enterprise_installation.download-package %}
1. Enable maintenance mode and wait for all active processes to complete on the {% data variables.product.prodname_ghe_server %} instance. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

   > [!NOTE] When upgrading the primary node in a high availability configuration, the instance should already be in maintenance mode if you are following the instructions in "[Upgrading the primary node with an upgrade package](#upgrading-the-primary-node-with-an-upgrade-package)."

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
1. Optionally, during an upgrade to a feature release, you can monitor the status of database migrations using the `ghe-migrations` utility. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-migrations)."
{%- endif %}
1. After the instance restarts, the upgrade will continue in the background. You cannot unset maintenance mode until the process completes.

   {% ifversion ghes-upgrade-complete-indicator %}
   To check the status of background jobs, use the `ghe-check-background-upgrade-jobs` utility. If you're running back-to-back upgrades, you must ensure background jobs are complete before proceeding with the following upgrade to a feature release.

   {%- ifversion ghes < 3.12 %} To use this utility with {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}, your instance must run version {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.9 %}7{% elsif ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} or later.{% endif %}{%- endif %} See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-check-background-upgrade-jobs)."

   To monitor progress of the configuration run, read the output in `/data/user/common/ghe-config.log`. For example, you can tail the log by running the following command:

   ```shell
   tail -f /data/user/common/ghe-config.log
   ```

{% ifversion ip-exception-list %}
1. Optionally, after the upgrade, validate the upgrade by configuring an IP exception list to allow access to a specified list of IP addresses. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)."
{% endif %}
1. For single node upgrades, perform any post-upgrade tasks including disabling maintenance mode so users can use {% data variables.location.product_location %}.

    > [!NOTE] After you upgrade an instance in a high availability configuration, you should remain in maintenance mode until you have upgraded all of the replica nodes and replication is current. See "[Upgrading additional nodes with an upgrade package](#upgrading-additional-nodes-with-an-upgrade-package)."

## Upgrading an instance with multiple nodes using an upgrade package

To upgrade an instance that comprises multiple nodes using an upgrade package, you must upgrade the primary node, then upgrade any additional nodes.

* [Upgrading the primary node with an upgrade package](#upgrading-the-primary-node-with-an-upgrade-package)
* [Upgrading additional nodes with an upgrade package](#upgrading-additional-nodes-with-an-upgrade-package)

### Upgrading the primary node with an upgrade package

> [!WARNING] When replication is stopped, if the primary fails, any work from before the replica is upgraded and the replication begins again will be lost.

1. On the primary node, enable maintenance mode and wait for all active processes to complete. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
{% data reusables.enterprise_installation.replica-ssh %}
1. To stop replication on all nodes, run `ghe-repl-stop` on each node.{% ifversion ghes > 3.13 %} Alternatively, if there are multiple replicas, run `ghe-repl-stop-all` on the primary node instead, which will stop replication in a single run.{% endif %}
1. To upgrade the primary node, follow the instructions in "[Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)."

### Upgrading additional nodes with an upgrade package

1. Upgrade the node by following the instructions in "[Upgrading a standalone instance using an upgrade package](#upgrading-a-standalone-instance-using-an-upgrade-package)."
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}
{% data reusables.enterprise_installation.start-replication %}{% ifversion ghes > 3.13 %} Alternatively, if there are mutliple replicas, run `ghe-repl-start-all` on the primary node instead, which will start replications in a single run.{% endif %}
{% data reusables.enterprise_installation.replication-status %} {% data reusables.enterprise_installation.replication-status-upgrade %}
{% data reusables.enterprise_installation.multiple-node-repeat-upgrade-process %}
{% data reusables.enterprise_installation.disable-maintenance-mode-after-replica-upgrade %}
