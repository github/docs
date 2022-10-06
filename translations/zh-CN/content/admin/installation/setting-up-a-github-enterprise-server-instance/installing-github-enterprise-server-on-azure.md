---
title: 在 Azure 上安装 GitHub Enterprise Server
intro: '若要在 Azure 上安装 {% data variables.product.prodname_ghe_server %}，必须部署到支持高级存储的内存优化实例上。'
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
ms.openlocfilehash: 52c435b01e830968eaf81dc411727ea2bacabd2d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098040'
---
您可以将 {% data variables.product.prodname_ghe_server %} 部署在全局 Azure 或 Azure Government 上。

## 先决条件

- {% data reusables.enterprise_installation.software-license %}
- 您必须具有能够配置新机器的 Azure 帐户。 有关详细信息，请参阅 [Microsoft Azure 网站](https://azure.microsoft.com)。
- 启动虚拟机 (VM) 所需的大部分操作也可以使用 Azure Portal 执行。 不过，我们建议安装 Azure 命令行接口 (CLI) 进行初始设置。 下文介绍了使用 Azure CLI 2.0 的示例。 有关详细信息，请参阅 Azure 指南“[安装 Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)”。

## 硬件注意事项

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 确定虚拟机类型

在 Azure 上启动 {% data variables.product.product_location %} 之前，您需要确定最符合您的组织需求的设备类型。 有关内存优化计算机的详细信息，请参阅 Microsoft Azure 文档中的“[内存优化虚拟机大小](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory)”。 若要查看 {% data variables.product.product_name %} 的最低资源要求，请参阅“[最低要求](#minimum-requirements)”。


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## 创建 {% data variables.product.prodname_ghe_server %} 虚拟机

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 找到最新的 {% data variables.product.prodname_ghe_server %} 设备映像。 有关 `vm image list` 命令的详细信息，请参阅 Microsoft 文档中的“[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)”。
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. 使用找到的设备映像创建新的 VM。 有关详细信息，请参阅 Microsoft 文档中的“[`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)”。

  传入以下选项：VM 名称、资源组、VM 大小、首选 Azure 地区名称、上一步中列出的设备映像 VM 的名称，以及用于高级存储的存储 SKU。 有关资源组的详细信息，请参阅 Microsoft 文档中的“[资源组](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)”。

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. 在 VM 上配置安全设置，以打开所需端口。 有关详细信息，请参阅 Microsoft 文档中的“[`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)”。 请参阅下表中对每个端口的说明，以确定需要打开的端口。

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  此表列出了每个端口的用途。

  {% data reusables.enterprise_installation.necessary_ports %}

4. 创建新的未加密数据磁盘并将其附加至 VM，然后根据用户许可数配置大小。 有关详细信息，请参阅 Microsoft 文档中的“[`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)”。

  传入以下选项：VM 名称（例如 `ghe-acme-corp`）、资源组、高级存储 SKU、磁盘大小（例如 `100`）以及生成的 VHD 的名称。

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   注意：为确保非生产实例具有足够的 I/O 吞吐量，建议最小磁盘大小为 40 GiB 并启用读/写缓存 (`--caching ReadWrite`)。

   {% endnote %}

## 配置 {% data variables.product.prodname_ghe_server %} 虚拟机

1. 在配置 VM 之前，您必须等待其进入 ReadyRole 状态。 使用 `vm list` 命令检查 VM 的状态。 有关详细信息，请参阅 Microsoft 文档中的“[`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)”。
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  注意：Azure 不会自动为 VM 创建 FQDNS 条目。 有关详细信息，请参阅 Azure 指南，了解如何“[在 Azure 门户中为 Linux VM 创建完全限定域名](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)”。
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 有关详细信息，请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## 延伸阅读
  
- [系统概述](/enterprise/admin/guides/installation/system-overview) {% ifversion ghes %}
- [关于升级到新版本](/admin/overview/about-upgrades-to-new-releases) {% endif %}
