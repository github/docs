---
title: Increasing storage capacity
intro: 'You can increase or change the amount of storage available for Git repositories, databases, search indexes, and other persistent application data.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

As more users join {% data variables.location.product_location %}, you may need to resize your storage volume. Refer to the documentation for your virtualization platform for information on resizing storage.

## Requirements and recommendations

{% note %}

**Note:** Before resizing any storage volume, put your instance in maintenance mode.{% ifversion ip-exception-list %} You can validate changes by configuring an IP exception list to allow access from specified IP addresses. {% endif %} For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endnote %}

### Minimum requirements

{% data reusables.enterprise_installation.hardware-rec-table %}

## Increasing the data partition size

1. Resize the existing user volume disk using your virtualization platform's tools.
{% data reusables.enterprise_installation.ssh-into-instance %}
3. Put the appliance in maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."
4. Reboot the appliance to detect the new storage allocation:
  ```shell
  $ sudo reboot
  ```
5. Run the `ghe-storage-extend` command to expand the `/data/user` filesystem:
  ```shell
  $ ghe-storage-extend
  ```

## Increasing the root partition size using a new appliance

1. Set up a new {% data variables.product.prodname_ghe_server %} instance with a larger root disk using the same version as your current appliance. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)."
2. Shut down the current appliance:
  ```shell
  $ sudo poweroff
  ```
3. Detach the data disk from the current appliance using your virtualization platform's tools.
4. Attach the data disk to the new appliance with the larger root disk.

## Increasing the root partition size using an existing appliance

{% warning %}

**Warning:** Before increasing the root partition size, you must put your instance in maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endwarning %}

1. Attach a new disk to your {% data variables.product.prodname_ghe_server %} appliance.
1. Run the `lsblk` command to identify the new disk's device name.
1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. To stop replication, run the `ghe-repl-stop` command.

   ```shell
   $ ghe-repl-stop
   ```
   
1. Run the `ghe-upgrade` command to install a full, platform specific package to the newly partitioned disk. A universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`, will not work as expected. After the `ghe-upgrade` command completes, application services will automatically terminate.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. Shut down the appliance:
  ```shell
  $ sudo poweroff
  ```
1. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
1. Start the appliance.
1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.
