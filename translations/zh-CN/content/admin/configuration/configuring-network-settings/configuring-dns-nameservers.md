---
title: 配置 DNS 域名服务器
intro: '在 DHCP 租约提供域名服务器时，{% data variables.product.prodname_ghe_server %} 将为 DNS 设置使用动态主机配置协议 (DHCP)。 如果域名服务器不是由动态主机配置协议 (DHCP) 租约提供，或者您需要使用特定的 DNS 设置，可以手动指定域名服务器。'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: b01dc25b9002bf1feb672bbce597c8046b93f12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419711'
---
指定的名称服务器必须解析 {% data variables.product.product_location %} 的主机名。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## 使用虚拟机控制台配置域名服务器

{% data reusables.enterprise_installation.open-vm-console-start %}
2. 为实例配置域名服务器。
{% data reusables.enterprise_installation.vm-console-done %}

## 使用管理 shell 配置域名服务器

{% data reusables.enterprise_installation.ssh-into-instance %}

2. 要编辑名称服务器，请在可视模式下使用 `ghe-setup-network` 命令。 有关详细信息，请参阅“[命令行实用工具](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)”。

  ```shell
  ghe-setup-network -v
  ```

5. 要向 {% data variables.product.product_location %} 添加新的域名服务器条目，请运行以下命令：

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
