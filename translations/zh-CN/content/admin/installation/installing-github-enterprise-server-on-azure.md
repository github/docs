---
title: 在 Azure 上安装 GitHub Enterprise Server
intro: '要在 Azure 上安装 {% data variables.product.prodname_ghe_server %}，您必须部署到 DS 系列实例上并使用 Premium-LRS 存储。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
---

您可以将 {% data variables.product.prodname_ghe_server %} 部署在全局 Azure 或 Azure Government 上。

### 基本要求

- {% data reusables.enterprise_installation.software-license %}
- 您必须具有能够配置新机器的 Azure 帐户。 更多信息请参阅 [Microsoft Azure 网站](https://azure.microsoft.com)。
- 启动虚拟机 (VM) 所需的大部分操作也可以使用 Azure Portal 执行。 不过，我们建议安装 Azure 命令行接口 (CLI) 进行初始设置。 下文介绍了使用 Azure CLI 2.0 的示例。 更多信息请参阅 Azure 指南“[安装 Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)”。

### 硬件考量因素

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 确定虚拟机类型

在 Azure 上启动 {% data variables.product.product_location %} 之前，您需要确定最符合您的组织需求的虚拟机类型。

#### 支持的 VM 类型和地区

{% data variables.product.prodname_ghe_server %} 设备需要高级存储数据磁盘，可以在支持高级存储的任何 Azure VM 上使用。 更多信息请参阅 Amuze 文档中的“[支持的 VM](https://docs.microsoft.com/azure/storage/common/storage-premium-storage#supported-vms)”。 有关可用 VM 的基本信息，请参阅 [Azure 虚拟机概述页](https://azure.microsoft.com/pricing/details/virtual-machines/#Linux)。

{% data variables.product.prodname_ghe_server %} 可以在支持您的 VM 类型的任何地区使用。 有关各个 VM 的支持地区的更多信息，请参阅 Azure 的“[可用产品（按地区）](https://azure.microsoft.com/regions/services/)”。

#### 建议的 VM 类型

建议使用 RAM 至少为 14 GB 的 DS v2 实例类型。 您可以使用任何受支持的 VM 类型。 根据您的用户许可数量，我们建议使用以下实例类型。

|        席位         |        建议类型        |
|:-----------------:|:------------------:|
| 试用版、演示版或 10 个轻度用户 | Standard_DS11_v2 |
|     10 - 3000     | Standard_DS12_v2 |
|    3000 - 8000    | Standard_DS14_v2 |
|   8000 - 10000+   | Standard_DS15_v2 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### 创建 {% data variables.product.prodname_ghe_server %} 虚拟机

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 找到最新的 {% data variables.product.prodname_ghe_server %} 设备映像。 更多关于 `vm image list` 命令的信息，请参阅 Microsoft 文档中的“[az vm image list](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)”。
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. 使用找到的设备映像创建新的 VM。 更多信息请参阅 Microsoft 文档中的“[az vm 创建](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)”。

  传入以下选项：VM 名称、资源组、VM 大小、首选 Azure 地区名称、上一步中列出的设备映像 VM 的名称，以及用于高级存储的存储 SKU。 更多关于资源组的信息，请参阅 Microsoft 文档中的“[资源组](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)”。

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. 在 VM 上配置安全设置，以打开所需端口。 更多信息请参阅 Microsoft 文档中的 "[az vm open-port](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)"。 请参阅下表中对每个端口的说明，以确定需要打开的端口。

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  此表列出了每个端口的用途。

  {% data reusables.enterprise_installation.necessary_ports %}

4. 创建新的未加密数据磁盘并将其附加至 VM，然后根据用户许可数配置大小。 更多信息请参阅 Microsoft 文档中的“[az vm 磁盘附加](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)”。

  传入以下选项：VM 名称（例如 `ghe-acme-corp`）、资源组、高级存储 SKU、磁盘大小（例如 `100`）以及生成的 VHD 的名称。

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **注：**为确保非生产实例具有足够的 I/O 通量，建议最小磁盘容量为 40 GiB 并启用读/写缓存 (`--caching ReadWrite`)。

   {% endnote %}

### 配置 {% data variables.product.prodname_ghe_server %} 虚拟机

1. 在配置 VM 之前，您必须等待其进入 ReadyRole 状态。 使用 `vm list` 命令检查 VM 的状态。 更多信息请参阅 Microsoft 文档中的“[az vm 列表](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)”。
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **注**：Azure 不会自动为 VM 创建 FQDNS 条目。 更多信息请参阅 Azure 指南中关于如何“[在 Azure 门户中为 Linux VM 创建完全限定域名](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)”的说明。

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}

### 延伸阅读

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
  
