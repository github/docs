---
title: 增加 CPU 或内存资源
intro: '如果 {% data variables.product.prodname_ghe_server %} 上的操作速度较慢，您可能需要增加 CPU 或内存资源。'
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
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331862'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

注意：在增加 CPU 或内存资源之前，请将实例置于维护模式。{% ifversion ip-exception-list %} 可以通过配置 IP 异常列表验证更改，以允许从指定 IP 地址进行访问。 {% endif %} 有关详细信息，请参阅“[启用和排定维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

{% endnote %}

## 为 AWS 增加 CPU 或内存资源

{% note %}

注意：要为 AWS 增加 CPU 或内存资源，必须能够熟练使用 AWS 管理控制台或 `aws ec2` 命令行接口管理 EC2 实例。 有关使用所选 AWS 工具执行重设大小的背景和详细信息，请参阅关于[重设 Amazon EBS 支持的实例大小](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)的 AWS 文档。

{% endnote %}

### 调整的考量因素

在为 {% data variables.product.product_location %} 增加 CPU 或内存资源之前，回顾以下建议。

- 通过 CPU 扩大内存。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- 将弹性 IP 地址分配给实例。 如果未分配弹性 IP，则在重启后您必须调整 {% data variables.product.prodname_ghe_server %} 主机的 DNS A 记录，以反映公共 IP 地址的变更。 在实例重新启动后，如果它启动到 VPC 中，会自动保留弹性 IP (EIP)。 如果实例启动到 EC2-Classic 中，则必须手动重新关联弹性 IP。

### 支持的 AWS 实例类型

您需要根据 CPU/内存规范确定升级的目标实例类型。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### 针对 AWS 进行调整

{% note %}

注意：对于启动到 EC2-Classic 中的实例，请记下与实例关联的弹性 IP 地址以及实例的 ID。 重启实例后，请重新关联弹性 IP 地址。

{% endnote %}

无法将 CPU 或内存资源添加到现有的 AWS/EC2 实例。 相反，您必须执行以下操作：

1. 停止实例。
2. 更改实例类型。
3. 启动实例。
{% data reusables.enterprise_installation.configuration-recognized %}

## 在 Microsoft Azure 上添加 CPU 或内存资源

{% note %}

注意：要在 Microsoft Azure 中添加 CPU 或内存资源，必须熟悉使用 Azure Portal、Azure CLI 或 Azure PowerShell 来管理 VM 实例。 有关使用所选 Azure 工具执行重设大小的背景和详细信息，请参阅 Azure 文档中有关[更改虚拟机大小](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)的内容。

{% endnote %}

### 调整的考量因素

在为 {% data variables.product.product_location %} 增加 CPU 或内存资源之前，回顾以下建议。

- 通过 CPU 扩大内存。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- 为实例分配静态 IP 地址。 如果您尚未为实例分配静态 IP，则可能必须在重新启动后调整 {% data variables.product.prodname_ghe_server %} 主机的 DNS A 记录，以应对 IP 地址的更改。

### 支持的 Microsoft Azure 实例大小

您需要根据 CPU/内存规格确定要升级到的实例大小。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### 针对 Microsoft Azure 调整大小

可以通过更改 VM 大小来纵向扩展虚拟机。 更改其大小将会导致它重新启动。 在某些情况下，必须先解除分配 VM。 如果新大小在当前托管 VM 的硬件群集上不可用，则可能会出现这种情况。 

1. 所需步骤，请参阅 Azure 文档中有关[更改虚拟机大小](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)的内容。
{% data reusables.enterprise_installation.configuration-recognized %}

## 为 OpenStack KVM 增加 CPU 或内存资源

无法将 CPU 或内存资源添加到现有的 OpenStack KVM 实例。 相反，您必须执行以下操作：

1. 生成当前实例的快照。
2. 停止实例。
3. 选择包含所需 CPU 和/或内存资源的新实例。

## 为 VMWare 增加 CPU 或内存资源

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. 使用 vSphere Client 连接到 VMware ESXi 主机。
2. 关闭 {% data variables.product.product_location %}。
3. 选择虚拟机，然后单击“编辑设置”。
4. 在“硬件”下，根据需要调整分配给虚拟机的 CPU 和/或内存资源：![VMware 设置资源](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. 要启动虚拟机，请单击“确定”。
{% data reusables.enterprise_installation.configuration-recognized %}
