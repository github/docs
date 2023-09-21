---
title: Installing GitHub Enterprise Server on Azure
intro: 'To install {% data variables.product.prodname_ghe_server %} on Azure, you must deploy onto a memory-optimized instance that supports premium storage.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
---
You can deploy {% data variables.product.prodname_ghe_server %} on global Azure or Azure Government.

## Prerequisites

- {% data reusables.enterprise_installation.software-license %}
- You must have an Azure account capable of provisioning new machines. For more information, see the [Microsoft Azure website](https://azure.microsoft.com).
- Most actions needed to launch your virtual machine (VM) may also be performed using the Azure Portal. However, we recommend installing the Azure command line interface (CLI) for initial setup. Examples using the Azure CLI 2.0 are included below. For more information, see Azure's guide [Install Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest).

## Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determining the virtual machine type

Before launching {% data variables.location.product_location %} on Azure, you'll need to determine the machine type that best fits the needs of your organization. For more information about memory optimized machines, see [Memory optimized virtual machine sizes](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory) in the Microsoft Azure documentation. To review the minimum resource requirements for {% data variables.product.product_name %}, see "[Minimum requirements](#minimum-requirements)."

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## Creating the {% data variables.product.prodname_ghe_server %} virtual machine

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Find the most recent {% data variables.product.prodname_ghe_server %} appliance image. For more information about the `vm image list` command, see "[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" in the Microsoft documentation.

   ```shell
   az vm image list --all -f GitHub-Enterprise | grep '"urn": "GitHub:' | sort -V
   ```

1. Create a new VM using the appliance image you found. For more information, see [az vm create](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create) in the Microsoft documentation.

   Pass in options for the name of your VM, the resource group, the size of your VM, the name of your preferred Azure region, the name of the appliance image VM you listed in the previous step, and the storage SKU for premium storage. For more information about resource groups, see [Resource groups](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups) in the Microsoft documentation.

   ```shell
   az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
   ```

1. Configure the security settings on your VM to open up required ports. We recommend opening network ports selectively based on the network services you need to expose for administrative and user purposes. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/network-ports#administrative-ports)," and [az vm open-port](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port) in the Microsoft documentation. See the table below for a description of each port to determine what ports you need to open.

   ```shell
   az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
   ```

   This table identifies what each port is used for.

   {% data reusables.enterprise_installation.necessary_ports %}

1. Create and attach a new unencrypted data disk to the VM, and configure the size based on your user license count. For more information, see [az vm disk attach](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach) in the Microsoft documentation.

   Pass in options for the name of your VM (for example, `ghe-acme-corp`), the resource group, the premium storage SKU, the size of the disk (for example, `200`), and a name for the resulting VHD.

   ```shell
   az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
   ```

   {% note %}

   **Note:** For non-production instances to have sufficient I/O throughput, the recommended minimum disk size is 150 GiB with read/write cache enabled (`--caching ReadWrite`).

   {% endnote %}

## Configuring the {% data variables.product.prodname_ghe_server %} virtual machine

To configure the instance, you must confirm the instance's status, upload a license file, set the {% ifversion enterprise-management-console-multi-user-auth %}root {% endif %} {% data variables.enterprise.management_console %} password, configure the instance's settings, and restart the instance.

{% data reusables.enterprise_installation.new-instance-attack-vector-warning %}

1. Before configuring the VM, you must wait for it to enter ReadyRole status. Check the status of the VM with the `vm list` command. For more information, see [az vm list](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list) in the Microsoft documentation.

   ```shell
   $ az vm list -d -g RESOURCE_GROUP -o table
   > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
   > ------  ---------------  ------------  ------------  -------  ----------  -------
   > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

   ```

   {% note %}

   **Note:** Azure does not automatically create a FQDNS entry for the VM. For more information, see the Azure guide [Create a fully qualified domain name in the Azure portal for a Linux VM](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn).

   {% endnote %}

   {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
   {% data reusables.enterprise_installation.upload-a-license-file %}
   {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise)."
   {% data reusables.enterprise_installation.instance-will-restart-automatically %}
   {% data reusables.enterprise_installation.visit-your-instance %}

## Azure extension features

{% data variables.product.product_name %} does not support the installation of Azure extension features. The {% data variables.product.prodname_ghe_server %} image is shipped with a customized `waagent` package which only supports basic VM management functions and blocks advanced VM management functions.

To avoid system instability of your {% data variables.product.prodname_ghe_server %} instance, the `walinuxagent` service is intentionally run in {% data variables.product.prodname_ghe_server %} in a restricted mode, explicitly disallowing the agent from being able to install other agents. VM management features that rely on additional agents and extensions beyond that which ships with {% data variables.product.prodname_ghe_server %} image, such as the Monitoring Agent extension for Azure Insights or Azure Backups, are unsupported.

Because {% data variables.product.product_name %} runs a customized Linux operating system with only the necessary applications and services, installing or updating operating system packages manually will overwrite these customizations and can cause unexpected behavior. For more information, see "[AUTOTITLE](/admin/overview/system-overview)."

## Further reading

- "[AUTOTITLE](/admin/overview/system-overview)"{% ifversion ghes %}
- "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
