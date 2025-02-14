---
title: Increasing storage capacity
intro: 'You can increase or change the amount of storage available for Git repositories, databases, search indexes, and other persistent application data.'
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity
  - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity
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

> [!NOTE]
> Before resizing any storage volume, put your instance in maintenance mode. You can validate changes by configuring an IP exception list to allow access from specified IP addresses. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

### Minimum recommended requirements

{% ifversion ghes > 3.14 %}{% data reusables.enterprise_installation.hardware-rec-table %}{% else %}{% data reusables.enterprise_installation.hardware-rec-table-legacy %}{% endif %}

Root storage refers to the total size of your instance's root disk. The available space on the root filesystem is 50% of the total storage available on the root disk. For more information, see [AUTOTITLE](/admin/overview/system-overview#storage-architecture).

## Increasing the data partition size

1. Resize the existing user volume disk using your virtualization platform's tools.
{% data reusables.enterprise_installation.ssh-into-instance %}
1. Put the appliance in maintenance mode. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).
1. Reboot the appliance to detect the new storage allocation:

   ```shell
   sudo reboot
   ```

1. Run the `ghe-storage-extend` command to expand the `/data/user` filesystem:

   ```shell
   ghe-storage-extend
   ```

1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

## Increasing the root partition size using a new appliance

1. Set up a new {% data variables.product.prodname_ghe_server %} instance with a larger root disk using the same version as your current appliance. For more information, see [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance).
1. Shut down the current appliance:

   ```shell
   sudo poweroff
   ```

1. Detach the data disk from the current appliance using your virtualization platform's tools.
1. Attach the data disk to the new appliance with the larger root disk.

## Increasing the root partition size using an existing appliance

> [!WARNING]
> Before increasing the root partition size, you must put your instance in maintenance mode. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

{% ifversion ghes > 3.13 %}
Before resizing the root partition, determine whether the appliance has a GUID partition table.

On instances created from GHES releases 3.14 and later, follow the instructions for [Increasing the root partition size on a GUID partition table](#increasing-the-root-partition-size-on-a-guid-partition-table).

On instances created from GHES releases prior to 3.14, follow the instructions for [Increasing the root partition size on a legacy partition table](#increasing-the-root-partition-size-on-a-legacy-partition-table).

To verify the partition table type, run the following command. The result should be either `gpt` or `msdos`.

   ```shell
   sudo lsblk -no pttype $(findmnt -no source /)
   ```

{% endif %}

1. Attach a new disk to your {% data variables.product.prodname_ghe_server %} appliance.
1. Run the `lsblk` command to identify the new disk's device name.

{% ifversion ghes > 3.13 %}

### Increasing the root partition size on a GUID partition table

1. Back up your existing EFI boot partition:

   ```shell
   sudo dd if=/dev/disk/by-label/EFIBOOT of=EFIBOOT.bak bs=1M
   ```

1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:

   ```shell
   sudo parted /dev/xvdg mklabel gpt
   sudo parted -a optimal /dev/xvdg mkpart bios fat32 1MiB 2MiB
   sudo parted /dev/xvdg set 1 bios_grub on
   sudo parted -a optimal /dev/xvdg mkpart efi fat32 2MiB 512MiB
   sudo parted /dev/xvdg set 2 esp on
   sudo parted -a optimal /dev/xvdg mkpart primary 512MiB 50%
   sudo parted /dev/xvdg set 3 boot off
   sudo parted /dev/xvdg set 3 esp off
   sudo parted -a optimal /dev/xvdg mkpart primary 50% 100%
   ```

1. If your appliance is configured for high-availability or geo-replication, to stop replication run the `ghe-repl-stop` command on each replica node:

   ```shell
   ghe-repl-stop
   ```

1. To install the {% data variables.product.prodname_ghe_server %} software on the newly partitioned disk, run the `ghe-upgrade` command. You must replace **PACKAGE-NAME.pkg** with the path to a platform-specific upgrade package that matches the version of {% data variables.product.prodname_ghe_server %} already running on the appliance. You cannot use a universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`. After the `ghe-upgrade` command completes, application services will automatically terminate.

   ```shell
   ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg3
   ```

1. Run these commands on the secondary partitions of the newly added disk:

   ```shell
   sudo dd if=/dev/disk/by-label/EFIBOOT of=/dev/xvdg2 bs=1M
   sudo mkfs.ext4 -L fallback /dev/xvdg4
   ```

1. Shut down the appliance:

   ```shell
   sudo poweroff
   ```

1. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
1. Start the appliance.
1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.

### Increasing the root partition size on a legacy partition table

{% endif %}

1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:

   ```shell
   sudo parted /dev/xvdg mklabel msdos
   sudo parted /dev/xvdg mkpart primary ext4 0% 50%
   sudo parted /dev/xvdg mkpart primary ext4 50% 100%
   ```

1. If your appliance is configured for high-availability or geo-replication, to stop replication run the `ghe-repl-stop` command on each replica node:

   ```shell
   ghe-repl-stop
   ```

1. To install the {% data variables.product.prodname_ghe_server %} software on the newly partitioned disk, run the `ghe-upgrade` command. You must replace **PACKAGE-NAME.pkg** with the path to a platform-specific upgrade package that matches the version of {% data variables.product.prodname_ghe_server %} already running on the appliance. You cannot use a universal hotpatch upgrade package, such as `github-enterprise-2.11.9.hpkg`. After the `ghe-upgrade` command completes, application services will automatically terminate.

   ```shell
   ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
   ```

1. Run the command on the secondary partition of the newly added disk:

   ```shell
   sudo mkfs.ext4 -L fallback /dev/xvdg2
   ```

1. Shut down the appliance:

   ```shell
   sudo poweroff
   ```

1. In the hypervisor, remove the old root disk and attach the new root disk at the same location as the old root disk.
1. Start the appliance.
1. Ensure system services are functioning correctly, then release maintenance mode. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.
