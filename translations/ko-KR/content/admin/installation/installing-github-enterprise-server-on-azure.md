---
title: Installing GitHub Enterprise Server on Azure
intro: 'To install {% data variables.product.prodname_ghe_server %} on Azure, you must deploy onto a DS-series instance and use Premium-LRS storage.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
---

You can deploy {% data variables.product.prodname_ghe_server %} on global Azure or Azure Government.

### 빌드전 요구 사양

- {% data reusables.enterprise_installation.software-license %}
- You must have an Azure account capable of provisioning new machines. For more information, see the [Microsoft Azure website](https://azure.microsoft.com).
- Most actions needed to launch your virtual machine (VM) may also be performed using the Azure Portal. However, we recommend installing the Azure command line interface (CLI) for initial setup. Examples using the Azure CLI 2.0 are included below. For more information, see Azure's guide "[Install Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)."

### Hardware considerations

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determining the virtual machine type

Before launching {% data variables.product.product_location %} on Azure, you'll need to determine the type of virtual machine that best fits the needs of your organization.

#### Supported VM types and regions

The {% data variables.product.prodname_ghe_server %} appliance requires a premium storage data disk, and is supported on any Azure VM that supports premium storage. For more information, see "[Supported VMs](https://docs.microsoft.com/azure/storage/common/storage-premium-storage#supported-vms)" in the Azure documentation. For general information about available VMs, see [the Azure virtual machines overview page](https://azure.microsoft.com/pricing/details/virtual-machines/#Linux).

{% data variables.product.prodname_ghe_server %} supports any region that supports your VM type. For more information about the supported regions for each VM, see Azure's "[Products available by region](https://azure.microsoft.com/regions/services/)."

#### Recommended VM types

We recommend you use a DS v2 instance type with at least 14 GB of RAM. You can use any supported VM type. Based on your user license count, we recommend the following instance types.

|             Seats              |  Recommended type  |
|:------------------------------:|:------------------:|
| Trial, demo, or 10 light users | Standard_DS11_v2 |
|           10 - 3000            | Standard_DS12_v2 |
|          3000 - 8000           | Standard_DS14_v2 |
|         8000 - 10000+          | Standard_DS15_v2 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### Creating the {% data variables.product.prodname_ghe_server %} virtual machine

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Find the most recent {% data variables.product.prodname_ghe_server %} appliance image. For more information about the `vm image list` command, see "[az vm image list](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" in the Microsoft documentation.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Create a new VM using the appliance image you found. For more information, see "[az vm create](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)" in the Microsoft documentation.

  Pass in options for the name of your VM, the resource group, the size of your VM, the name of your preferred Azure region, the name of the appliance image VM you listed in the previous step, and the storage SKU for premium storage. For more information about resource groups, see "[Resource groups](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)" in the Microsoft documentation.

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. Configure the security settings on your VM to open up required ports. For more information, see "[az vm open-port](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)" in the Microsoft documentation. See the table below for a description of each port to determine what ports you need to open.

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  This table identifies what each port is used for.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Create and attach a new unencrypted data disk to the VM, and configure the size based on your user license count. For more information, see "[az vm disk attach](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)" in the Microsoft documentation.

  Pass in options for the name of your VM (for example, `ghe-acme-corp`), the resource group, the premium storage SKU, the size of the disk (for example, `100`), and a name for the resulting VHD.

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Note:** For non-production instances to have sufficient I/O throughput, the recommended minimum disk size is 40 GiB with read/write cache enabled (`--caching ReadWrite`).

   {% endnote %}

### Configuring the {% data variables.product.prodname_ghe_server %} virtual machine

1. Before configuring the VM, you must wait for it to enter ReadyRole status. Check the status of the VM with the `vm list` command. For more information, see "[az vm list](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)" in the Microsoft documentation.
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **Note:** Azure does not automatically create a FQDNS entry for the VM. For more information, see Azure's guide on how to "[Create a fully qualified domain name in the Azure portal for a Linux VM](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)."

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} For more information, see "[Configuring the {% data variables.product.prodname_ghe_server %} appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}

### 더 읽을거리

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
  
