---
title: 关于安全性概述
intro: 可在“安全性概述”页查看、筛选和排序组织或团队拥有的存储库的安全警报。
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163750'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## 关于安全性概述

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}有关更多信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} 安全性概述显示了为存储库启用的安全功能，并整合了每个功能的警报。 

- 显示所有存储库中有关 {% data variables.product.prodname_dependabot %} 功能和警报的风险和覆盖范围信息。 
- {% data variables.product.prodname_GH_advanced_security %} 功能（如 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %}）的风险和覆盖范围信息仅对使用 {% data variables.product.prodname_GH_advanced_security %} 的企业显示。

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”和“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。

## 关于筛选和排序警报

安全性概述提供了一种强大的方法来了解一组存储库的安全性。 视图与筛选器交互，可用于钻取聚合数据并确定高风险的来源或低功能覆盖范围。 当应用多个筛选器来专注于更窄的兴趣区域时，视图中的数据会发生变化以反映你的选择。 有关详细信息，请参阅“[在安全概述中筛选警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。

{% ifversion security-overview-alert-views %} 对于每种类型的安全警报，还有专用视图，可用于将分析限制为一组特定的警报，然后使用特定于每个视图的各种筛选器进一步缩小结果范围。 例如，在 {% data variables.product.prodname_secret_scanning %} 警报视图中，可以使用 `Secret type` 筛选器仅查看特定机密（如 GitHub {% data variables.product.pat_generic %}）的 {% data variables.product.prodname_secret_scanning %} 警报。
{% endif %}

{% note %}

注意：安全性概述显示由安全功能引发的活动警报。 如果仓库的安全概述中没有警报，则可能仍然存在未检测到的安全漏洞或代码错误。

{% endnote %}

## 关于组织级安全性概述

{% data reusables.security-overview.beta-org-risk-coverage %}

可以在企业拥有的任何组织的“安全性”选项卡上找到安全性概述。 每个视图显示可以向下钻取的聚合数据，添加每个筛选器时，数据会更新以反映所选的存储库或警报。

公司的应用程序安全团队可以使用不同的视图对组织的安全状态进行广泛和具体的分析。 {% ifversion security-overview-org-risk-coverage %}例如，在推出 {% data variables.product.prodname_GH_advanced_security %} 时，团队可以使用“安全覆盖范围”页来监视整个组织或特定团队对功能的采用情况，或使用“安全风险”页识别具有五个以上打开的 {% data variables.product.prodname_secret_scanning %} 警报的存储库。{% else %}例如，当你向企业推出 {% data variables.product.prodname_GH_advanced_security %} 时，他们可以使用概述页来监视组织或特定团队对功能的采用情况，或者查看组织的所有存储库中特定类型和严重性级别的所有警报。{% endif %}

组织的组织所有者和安全管理员有权访问组织的安全性概述。 {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}组织成员还可以访问组织级安全性概述，以查看他们拥有管理员权限或已被授予安全警报访问权限的存储库的结果。 有关管理安全警报访问权限的详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。{% endif %}

{% ifversion security-overview-org-risk-coverage %}
### “安全风险”视图

此视图显示有关受不同类型的安全警报影响的存储库的数据。 

- 使用“类型”和“团队”下拉列表添加存储库类型和团队筛选器。 
- 单击“打开警报”或“受影响的存储库”，仅显示具有特定安全警报类型的存储库。 

此外，在搜索框中单击时，将显示全套可用筛选器的列表。

![组织的“安全风险”视图的屏幕截图](/assets/images/help/security-overview/security-risk-view.png)

### “安全覆盖范围”视图

此视图显示有关哪些存储库正在使用安全功能的数据。 

- 使用“类型”和“团队”下拉列表添加存储库类型和团队筛选器。 
- 单击“已启用警报”和标头中列出的其他功能，仅查看启用了这些功能的存储库。
- 在搜索框中将任何 `FEATURE:enabled` 筛选器更改为 `FEATURE:not-enabled`，以查看尚未启用某个功能的存储库。
- 对于任何存储库，请单击省略号 (...)，然后单击“安全性设置”以启用其他功能。

此外，在搜索框中单击时，将显示全套可用筛选器的列表。

![组织的“安全覆盖范围”视图的屏幕截图](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### 了解主要安全性概述

![组织的安全性概述的屏幕截图](/assets/images/help/security-overview/security-overview-org-legacy.png)

对于安全概述中的每个存储库，您将看到每种类型的安全功能的图标以及每种类型的警报数。 如果没有为存储库启用安全功能，则该功能的图标将显示为灰色。此外，还会根据代码扫描、Dependabot 和机密扫描警报为每个存储库计算风险评分。 此分数处于测试阶段，应谨慎使用。 它的算法和方法可能会发生变化。

![安全概述中的图标](/assets/images/help/security-overview/security-overview-icons.png)

| 图标 | 含义 |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} 警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。 |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %} 警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。 |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %} 的通知。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。 |
| {% octicon "check" aria-label="Check" %} | 安全功能已启用，但不会在此存储库中引发警报。 |
| {% octicon "x" aria-label="x" %} | 此存储库不支持该安全功能。 |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 关于企业级安全性概述

可以在企业的“代码安全性”选项卡上找到安全性概述。 每个概述都显示了企业的聚合和特定于存储库的安全信息。 可以查看企业拥有的具有安全警报的存储库、查看整个企业的所有安全警报或特定于安全功能的警报。

企业所有者可以查看所有者或安全经理所属组织的警报。{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} 企业所有者可以作为组织所有者加入组织，以在企业级安全性概述中查看所有警报。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。{% endif %}

企业中组织的组织所有者和安全管理员有权访问企业级安全性概述。 他们可以查看他们具有完全访问权限的组织的存储库和警报。
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## 关于团队级安全性概述

可以在企业拥有的组织中的任何团队的“安全性”选项卡上找到安全性概述。

在团队级别，安全概述显示团队拥有管理权限的仓库特定安全信息。 有关详细信息，请参阅“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。
{% endif %}

## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository)
- “[保护组织](/code-security/getting-started/securing-your-organization)”
- “[大规模采用 GitHub Advanced Security 简介](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)”{% endif %}
