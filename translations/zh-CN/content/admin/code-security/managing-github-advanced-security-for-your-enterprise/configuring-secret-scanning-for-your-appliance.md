---
title: 为设备配置密码扫描
shortTitle: Configuring secret scanning
intro: '您可以为 {% data variables.product.product_location %} 启用、配置和禁用 {% data variables.product.prodname_secret_scanning %}。 {% data variables.product.prodname_secret_scanning_caps %} 允许用户扫描代码以寻找意外泄露的密码。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: c44d724293b970ff3075deb1befb2f0eae427d5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066319'
---
{% data reusables.secret-scanning.beta %}

## 关于 {% data variables.product.prodname_secret_scanning %}

如果有人将使用已知模式的机密签入存储库，{% data variables.product.prodname_secret_scanning %} 会在签入机密时对其进行捕获，帮助降低机密被泄的影响。 仓库管理员会收到包含密码的任何提交的通知， 然后他们可以快速查看仓库安全选项卡中所有检测到的密码。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)”。

## 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_secret_scanning %} 的前提条件

- [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470)（补充流式处理 SIMD 扩展 3）CPU 标志需要在运行 {% data variables.product.product_location %} 的 VM/KVM 上启用。

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} 的许可证（请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”）{% endif %}

- 在管理控制台中启用的 {% data variables.product.prodname_secret_scanning_caps %}（请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”）

### 检查您的 vCPU 上的 SSSE3 标志的支持

SSSE3 指令集是必需的，因为 {% data variables.product.prodname_secret_scanning %} 利用硬件加速模式匹配来查找提交给 {% data variables.product.prodname_dotcom %} 仓库的潜在凭据。 大多数现代 CPU 都启用了 SSSE3。 您可以检查您的 {% data variables.product.prodname_ghe_server %} 实例的可用 vCPU 是否启用了 SSSE3。

1. 连接到 {% data variables.product.prodname_ghe_server %} 实例的管理 shell。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
2. 输入以下命令：

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   如果返回值 `0`，则意味着 SSSE3 标志可用并且已启用。 您现在可以为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_secret_scanning %}。 有关详细信息，请参阅下面的“[启用 {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning)”。

   如果不返回 `0`，则 SSSE3 未在 VM/KVM 上启用。 您需要参考硬件/虚拟机监控程序的文档，以了解如何启用该标志，或者如何使其可用于访客 VM。

## 启用 {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“安全性”下，单击 {% data variables.product.prodname_secret_scanning_caps %}。
![用于启用或禁用 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} 的复选框

## 禁用 {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“安全性”下，取消选择 {% data variables.product.prodname_secret_scanning_caps %}。
![用于启用或禁用 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %} 的复选框
