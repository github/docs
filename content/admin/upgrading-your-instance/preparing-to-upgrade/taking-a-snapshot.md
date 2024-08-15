---
  title: Taking a snapshot
  intro: 'To save your {% data variables.product.product_name %} data before upgrading, take a virtual machine snapshot.'
  redirect_from:
    - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot
    - /enterprise/admin/installation/upgrading-github-enterprise-server#taking-a-snapshot
  versions:
    ghes: '*'
  type: how_to
  topics:
    - Enterprise
    - Upgrades
  shortTitle: Take a snapshot
---

## About snapshots

A snapshot stores the state of a virtual machine (VM) at a point in time. {% data variables.product.company_short %} highly recommends taking a hypervisor level snapshot before upgrading your VM so that if an upgrade fails, you can revert your VM back to the snapshot.

## Types of snapshots

There are two types of snapshots:

* **VM snapshots** save your entire VM state, including user data and configuration data. This snapshot method requires a large amount of disk space and is time consuming.
* **Data disk snapshots** only save your user data.

## Creating a snapshot

{% data variables.product.company_short %} only recommends taking a VM snapshot when the instance's VM is powered down, or when the instance is in maintenance mode and all background jobs have finished.

The type of snapshot you can take depends on the platform you use.

* Some platforms don't allow you to take a snapshot of just your data disk. For these platforms, you'll need to take a snapshot of the entire VM.
* If your hypervisor does not support full VM snapshots, you should take a snapshot of the root disk and data disk in quick succession.

| Platform | Snapshot method | Documentation |
|---|---|---|
| Amazon AWS | Disk | [Create Amazon EBS snapshots](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html) in the AWS documentation
| Azure | VM | [Create a snapshot of a virtual hard disk on an Azure VM](https://learn.microsoft.com/azure/virtual-machines/snapshot-copy-managed-disk) in Microsoft Learn
| Hyper-V | VM | [Enable or disable checkpoints in Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v) in Microsoft Learn
| Google Compute Engine | Disk | [Create and manage disk snapshots](https://cloud.google.com/compute/docs/disks/create-snapshots) in the Google Cloud documentation
| VMware | VM | [Taking Snapshots of a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html) in VMware Docs
