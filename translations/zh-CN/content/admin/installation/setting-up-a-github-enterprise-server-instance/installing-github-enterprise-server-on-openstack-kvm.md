---
title: 在 OpenStack KVM 上安装 GitHub Enterprise Server
intro: '要在 OpenStack KVM 上安装 {% data variables.product.prodname_ghe_server %}，您必须具有 OpenStack 访问权限并下载 {% data variables.product.prodname_ghe_server %} QCOW2 映像。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 105201d2759b333d297278aa7fe32a9544c68839
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098699'
---
## 先决条件

- {% data reusables.enterprise_installation.software-license %}
- 您必须有权访问 OpenStack Horizon，即 OpenStack 服务基于 Web 的用户界面。 有关详细信息，请参阅 [Horizon 文档](https://docs.openstack.org/horizon/latest/)。

## 硬件注意事项

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 下载 {% data variables.product.prodname_ghe_server %} 映像

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. 在“{% data variables.product.prodname_dotcom %} 本地”下，选择“选择虚拟机监控程序”下拉菜单，然后单击“OpenStack KVM (QCOW2)”。
5. 单击“下载 OpenStack KVM (QCOW2)”。

## 创建 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 在 OpenStack Horizon 中，上传您下载的 {% data variables.product.prodname_ghe_server %} 映像。 有关说明，请参阅 OpenStack 指南“[上传和管理映像](https://docs.openstack.org/horizon/latest/user/manage-images.html)”的“上传映像”部分。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 有关说明，请参阅 OpenStack 指南“[创建和管理卷](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)”。
3. 创建安全组，并为下表中的各个端口添加新的安全组规则。 有关说明，请参阅 OpenStack 指南“[为实例配置访问和安全性](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)”

  {% data reusables.enterprise_installation.necessary_ports %}
4. 也可以将浮动 IP 关联到实例。 根据 OpenStack 设置，您可能需要将浮动 IP 分配给项目并将其关联到实例。 请联系您的系统管理员以确定您是否属于这种情况。 有关详细信息，请参阅 OpenStack 文档中的“[将浮动 IP 地址分配给实例](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)”。
5. 使用在前几步创建的映像、数据卷和安全组启动 {% data variables.product.product_location %}。 有关说明，请参阅 OpenStack 指南“[启动和管理实例](https://docs.openstack.org/horizon/latest/user/launch-instances.html)”。

## 配置 {% data variables.product.prodname_ghe_server %} 实例

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 有关详细信息，请参阅“[配置 {% data variables.product.prodname_ghe_server %} 设备](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 延伸阅读

- [系统概述](/enterprise/admin/guides/installation/system-overview) {% ifversion ghes %}
- [关于升级到新版本](/admin/overview/about-upgrades-to-new-releases) {% endif %}
