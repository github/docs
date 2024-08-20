---
  title: Upgrading with a hotpatch
  intro: 'You can use a hotpatch package to upgrade {% data variables.product.product_name %} to a newer patch release within a feature series.'
  redirect_from:
    - /admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch
    - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#upgrading-with-a-hotpatch
  versions:
    ghes: '*'
  type: how_to
  topics:
    - Enterprise
    - Upgrades
  shortTitle: Upgrade with a hotpatch
---

{% data reusables.enterprise_installation.hotpatching-explanation %}

Using the {% data variables.enterprise.management_console %}, you can install a hotpatch immediately or schedule it for later installation. You can use the administrative shell to install a hotpatch with the `ghe-upgrade` utility. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrade-requirements)."

## Upgrading a standalone instance using a hotpatch

If you're upgrading an instance with one node using a hotpatch, and your target is a patch release, you can upgrade using {% data variables.enterprise.management_console %}. To upgrade to a feature release, you must use the administrative shell.

* [Installing a hotpatch using the {% data variables.enterprise.management_console %}](#installing-a-hotpatch-using-the-management-console)
* [Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)

### Installing a hotpatch using the {% data variables.enterprise.management_console %}

You can use the {% data variables.enterprise.management_console %} to upgrade with a hotpatch by enabling automatic updates. You will then be presented with the latest available version of {% data variables.product.prodname_ghe_server %} that you can upgrade to.

If the upgrade target you're presented with is a feature release instead of a patch release, you cannot use the {% data variables.enterprise.management_console %} to install a hotpatch. You must install the hotpatch using the administrative shell instead.

1. Enable automatic updates. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/enabling-automatic-update-checks)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
1. When a new hotpatch has been downloaded, select the **Install package** dropdown menu.
    * To install immediately, click **Now**.
    * To install later, select a later date.
1. Click **Install**.

### Installing a hotpatch using the administrative shell

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

## Upgrading an instance with multiple nodes using a hotpatch

If you are installing a hotpatch, you do not need to enter maintenance mode or stop replication.

* [Upgrading the primary node using a hotpatch](#upgrading-the-primary-node-using-a-hotpatch)
* [Upgrading additional nodes using a hotpatch](#upgrading-additional-nodes-using-a-hotpatch)

### Upgrading the primary node using a hotpatch

For instructions to upgrade the primary node, see "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."

### Upgrading additional nodes using a hotpatch

{% data reusables.enterprise_installation.multiple-node-upgrade-admonishment %}

1. To upgrade the node, follow the instructions in "[Installing a hotpatch using the administrative shell](#installing-a-hotpatch-using-the-administrative-shell)."
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}
{% data reusables.enterprise_installation.multiple-node-repeat-upgrade-process %}
