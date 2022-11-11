---
title: 管理企业的 GitHub Advanced Security 功能
intro: '可以控制 {% data variables.product.prodname_GH_advanced_security %} 功能，这些功能保护和分析企业拥有的所有组织中的代码。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107203'
---
## 关于 {% data variables.product.prodname_advanced_security %} 功能的管理

可以使用 {% data variables.product.prodname_advanced_security %} 功能强化企业中组织的安全性。 若要简化 {% data variables.product.prodname_advanced_security %} 的管理，可以为企业拥有的组织内的所有现有和/或新存储库启用或禁用每项功能。

{% ifversion ghes or ghec %}有关购买 {% data variables.product.prodname_GH_advanced_security %} 许可证的信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)。”{% elsif ghae %}在 beta 版期间，{% data variables.product.prodname_ghe_managed %} 上的 {% data variables.product.prodname_GH_advanced_security %} 是免费的。{% endif %}

如果已为某个组织禁用了 {% data variables.product.prodname_GH_advanced_security %}，则为所有现有存储库或所有新存储库启用某项功能不会影响该组织。 有关为组织禁用 {% data variables.product.prodname_GH_advanced_security %} 的详细信息，请参阅“[在企业中执行高级安全策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)”。

当你为现有存储库启用一个或多个安全和分析功能时，你将在几分钟内看到 {% data variables.product.prodname_dotcom %} 上显示的任何结果。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## 管理 {% data variables.product.prodname_advanced_security %} 功能

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“代码安全性和分析”。 
1. （可选）为所有现有存储库启用或禁用功能。

   - 在功能右侧，单击“全部禁用”或“全部启用” 。 {% ifversion ghes or ghec %}如果对“{% data variables.product.prodname_GH_advanced_security %}”的控制被禁用，则 {% data variables.product.prodname_GH_advanced_security %} 中没有可用的席位。{% endif %}
   
   ![“配置安全性和分析”功能的“全部启用”或“全部禁用”按钮的屏幕截图](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - 若要确认更改，请单击“全部启用/禁用”或“为符合条件的存储库启用/禁用” 。
   
     ![用于为组织中所有符合条件的存储库启用功能的按钮的屏幕截图](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. （可选）要在添加新存储库时自动启用或禁用某项功能，请选中该功能下方的复选框。
   
   ![用于对新存储库启用功能的复选框的屏幕截图](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. （可选）若要在消息中包含成员在尝试推送机密时会看到的资源链接，请选择“阻止提交时在 CLI 和 Web UI 中添加资源链接”，然后键入 URL，并单击“保存链接” 。
  
  {% note %}

  注意：为组织配置自定义链接时，组织级别值将覆盖为企业设置的自定义链接。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。

  {% endnote %}

   ![显示用于启用自定义链接的复选框和文本字段的屏幕截图](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

