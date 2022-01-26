---
title: Increasing CPU or memory resources
intro: 'You can increase the CPU or memory resources for a {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

## Adding CPU or memory resources for AWS

{% note %}

**Note:** To add CPU or memory resources for AWS, you must be familiar with using either the AWS management console or the `aws ec2` command line interface to manage EC2 instances. For background and details on using the AWS tools of your choice to perform the resize, see the AWS documentation on [resizing an Amazon EBS-backed instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

### Resizing considerations

Before increasing CPU or memory resources for {% data variables.product.product_location %}, review the following recommendations.

- **Scale your memory with CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Assign an Elastic IP address to the instance**. If you haven't assigned an Elastic IP to your instance, you'll have to adjust the DNS A records for your {% data variables.product.prodname_ghe_server %} host after the restart to account for the change in public IP address. Once your instance restarts, the instance keeps the Elastic IP if you launched the instance in a virtual private cloud (VPC). If you create the instance in an EC2-Classic network, you must manually reassign the Elastic IP to the instance.

### Supported AWS instance types

You need to determine the instance type you would like to upgrade to based on CPU/memory specifications.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Resizing for AWS

{% note %}

**Note:** For instances launched in EC2-Classic, write down both the Elastic IP address associated with the instance and the instance's ID. Once you restart the instance, re-associate the Elastic IP address.

{% endnote %}

It's not possible to add CPU or memory resources to an existing AWS/EC2 instance. Instead, you must:

1. Stop the instance.
2. Change the instance type.
3. Start the instance.
{% data reusables.enterprise_installation.configuration-recognized %}

## Adding CPU or memory resources on Microsoft Azure

{% note %}

**Note:** To add CPU or memory resources in Microsoft Azure, you must be familiar with using either the Azure Portal, Azure CLI or Azure PowerShell to manage VM instances. For background and details on using the Azure tools of your choice to perform the resize, please refer to the Azure documentation on [changing the size of a virtual machine](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Resizing considerations

Before increasing CPU or memory resources for {% data variables.product.product_location %}, review the following recommendations.

- **Scale your memory with CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Assign a static IP address to the instance**. If you haven't assigned a static IP to your instance, you might have to adjust the DNS A records for your {% data variables.product.prodname_ghe_server %} host after the restart to account for the change in IP address.

### Supported Microsoft Azure instance sizes

You need to determine the instance size you would like to upgrade to based on CPU/memory specifications.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Resizing for Microsoft Azure

You can scale the VM up by changing the VM size. Changing its size will cause it to be restarted. In some cases, you must deallocate the VM first. This can happen if the new size is not available on the hardware cluster that is currently hosting the VM. 

1. Refer to the Azure documentation on [changing the size of a virtual machine](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm) for the required steps.
{% data reusables.enterprise_installation.configuration-recognized %}

## Adding CPU or memory resources for OpenStack KVM

It's not possible to add CPU or memory resources to an existing OpenStack KVM instance. Instead, you must:

1. Take a snapshot of the current instance.
2. Stop the instance.
3. Select a new instance flavor that has the desired CPU and/or memory resources.

## Adding CPU or memory resources for VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Use the vSphere Client to connect to the VMware ESXi host.
2. Shut down {% data variables.product.product_location %}.
3. Select the virtual machine and click **Edit Settings**.
4. Under "Hardware", adjust the CPU and/or memory resources allocated to the virtual machine as needed:
![VMware setup resources](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. To start the virtual machine, click **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
