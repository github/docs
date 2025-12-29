---
title: Increasing CPU or memory resources
intro: 'You can increase the CPU or memory resources for the virtual machine (VM) that runs {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources
  - /admin/monitoring-managing-and-updating-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
---

## About increasing CPU or memory resources

You can accommodate more resource-intensive workloads on {% data variables.location.product_location %} by increasing the VM's CPU or memory resources.

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% data reusables.enterprise_installation.warning-on-scaling %}

## Adding CPU or memory resources on AWS

To add CPU or memory resources for an instance on AWS, you must change the instance's type. You must have access to your company's AWS infrastructure, and you must be familiar with using either the AWS management console or the `aws ec2` command-line interface to manage EC2 instances. For more information, see [Change the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html) in the AWS documentation.

You can review resizing considerations, see supported instance types, and learn how to resize an instance on AWS.

* [Resizing considerations for AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-considerations-for-aws)
* [Supported instance types on AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#supported-instance-types-on-aws)
* [Resizing an instance on AWS](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-an-instance-on-aws)

### Resizing considerations for AWS

Before increasing CPU or memory resources for {% data variables.location.product_location %}, review the following recommendations.

* **Scale your memory with CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
* **Assign an Elastic IP address to the instance**. If you haven't assigned an Elastic IP to your instance, you'll have to adjust the DNS A records for your {% data variables.product.prodname_ghe_server %} host after the restart to account for the change in public IP address. Once your instance restarts, the instance keeps the Elastic IP if you launched the instance in a virtual private cloud (VPC). If you create the instance in an EC2-Classic network, you must manually reassign the Elastic IP to the instance.

### Supported instance types on AWS

{% data reusables.enterprise_installation.increase-resources-view-specifications %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Resizing an instance on AWS

To increase the resources available to a {% data variables.product.prodname_ghe_server %} instance on AWS, you must shut down the instance, change the instance's type, then restart the instance.

1. If your instances runs in EC2-Classic, note both the Elastic IP address associated with the instance and the instance's ID.
{% data reusables.enterprise_installation.increase-resources-communicate-and-enable-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-shut-down %}
1. On AWS, change the instance type.
1. Start the instance.
1. If your instance runs in EC2-Classic, after you restart the instance, re-associate the Elastic IP address.
{% data reusables.enterprise_installation.configuration-recognized %}
{% data reusables.enterprise_installation.increase-resources-test-in-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-disable-message-and-maintenance-mode %}

## Adding CPU or memory resources on Microsoft Azure

To add CPU or memory resources for an instance on Microsoft Azure, you must change the instance's size. You must have access to your company's Microsoft Azure infrastructure, and you must be familiar with the Azure Portal, Azure CLI, or Azure PowerShell to manage Azure instances. For more information, see [Change the size of a virtual machine](https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm?tabs=portal) on Microsoft Learn.

You can review resizing considerations, see supported instance types, and learn how to resize an instance on Microsoft Azure.

* [Resizing considerations for Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-considerations-for-microsoft-azure)
* [Supported instance types on Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#supported-instance-types-on-microsoft-azure)
* [Resizing an instance on Microsoft Azure](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources#resizing-an-instance-on-microsoft-azure)

### Resizing considerations for Microsoft Azure

Before increasing CPU or memory resources for {% data variables.location.product_location %}, review the following recommendations.

* **Scale your memory with CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
* **Assign a static IP address to the instance**. If you haven't assigned a static IP to your instance, you might have to adjust the DNS A records for your {% data variables.product.prodname_ghe_server %} host after the restart to account for the change in IP address.

### Supported instance types on Microsoft Azure

{% data reusables.enterprise_installation.increase-resources-view-specifications %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Resizing an instance on Microsoft Azure

To increase the resources available to a {% data variables.product.prodname_ghe_server %} instance on Microsoft Azure, you must change the VM's size. Changing the VM's size will cause the VM to restart. In some cases, you must deallocate the VM first. You may need to deallocate the VM if the new size is not available on the hardware cluster that is currently hosting the VM.

{% data reusables.enterprise_installation.increase-resources-communicate-and-enable-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-shut-down %}
1. On Azure, to resize the VM, follow the instructions in [Change the size of a virtual machine](https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm?tabs=portal) on Microsoft Learn.
{% data reusables.enterprise_installation.configuration-recognized %}
{% data reusables.enterprise_installation.increase-resources-test-in-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-disable-message-and-maintenance-mode %}

## Adding CPU or memory resources for OpenStack KVM

To increase the resources available to a {% data variables.product.prodname_ghe_server %} instance on OpenStack KVM, you must have access to your company's OpenStack KVM infrastructure, and you must stop the VM and then select a new instance flavor.

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Using OpenStack KVM, take a snapshot of the current instance.
{% data reusables.enterprise_installation.increase-resources-communicate-and-enable-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-shut-down %}
1. On OpenStack KVM, select a new instance flavor that has the desired CPU or memory resources.
{% data reusables.enterprise_installation.configuration-recognized %}
{% data reusables.enterprise_installation.increase-resources-test-in-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-disable-message-and-maintenance-mode %}

## Adding CPU or memory resources for VMware ESXi

To increase the resources available to a {% data variables.product.prodname_ghe_server %} instance on VMware, you must have access to your company's VMware infrastructure, and you must stop the VM and then adjust the resources in VMWare ESXi.

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% data reusables.enterprise_installation.increase-resources-communicate-and-enable-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-shut-down %}
1. To the VM's settings on the VMware ESXi host using the vSphere Client, select the VM, then click **Edit Settings**.
1. Under "Hardware", adjust the CPU or memory resources allocated to the VM.
1. To start the virtual machine, click **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
{% data reusables.enterprise_installation.increase-resources-test-in-maintenance-mode %}
{% data reusables.enterprise_installation.increase-resources-disable-message-and-maintenance-mode %}
