---
title: Using generation 2 virtual machines
intro: 'New installs of {% data variables.product.prodname_ghe_server %} 3.14 or later can use generation 2 virtual machines.'
redirect_from:
  - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/using-generation-2-virtual-machines
versions:
  ghes: '>3.13'
type: reference
topics:
  - Enterprise
  - Upgrades
shortTitle: Generation 2 virtual machines
allowTitleToDifferFromFilename: true
---

## About generation 2 virtual machines

Generation 2 virtual machines (Gen 2 VMs) allow you to vertically scale your appliance to cope with increased demand.

Cloud service providers such as Microsoft Azure expect Gen 2 VMs to be bootable in UEFI mode. In new installations of version 3.14 and later, {% data variables.product.prodname_ghe_server %} supports both BIOS mode and UEFI mode. The partition layout has been updated to use four partitions:

* Two for the supported boot modes (BIOS and UEFI)
* Two for the {% data variables.product.prodname_ghe_server %} primary and fallback

## Can I upgrade to a Gen 2 VM?

If you are upgrading from 3.13 or earlier, your instance will **continue to boot** using BIOS firmware, with no changes to the partition layout. There is no upgrade path to the Gen 2 VM in UEFI mode.

## How do I use a Gen 2 VM?

To use a Gen 2 VM, you must deploy a **new** Gen 2 VM instance running version 3.14 or later, then restore your existing data onto this instance. This instance will have the required partition layout. Future upgrades from this point will have four partitions.

Once you are running an instance on a Gen 2 VM with four partitions, during upgrades to a future release, the partition selection prompt will suggest a different default value. The partition selection will be between the third and fourth partitions.
