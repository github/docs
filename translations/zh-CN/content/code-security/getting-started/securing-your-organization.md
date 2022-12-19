---
title: 保护你的组织
intro: '您可以使用许多 {% data variables.product.prodname_dotcom %} 功能来帮助保护组织的安全。'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: e64af58fa5ea802b92df20751f2648097ebedf62
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159027'
---
## 简介
本指南向您展示如何配置一个组织的安全功能。 组织的安全需求是独一无二的，您可能不需要启用每个安全功能。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

{% data reusables.advanced-security.security-feature-availability %}

## 管理对组织的访问

您可以使用角色来控制用户可以在组织中执行的操作。 {% ifversion security-managers %}例如，可将安全管理员角色分配给团队，以便他们能够管理整个组织的安全设置，以及拥有对所有存储库的读取访问权限。{% endif %} 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% ifversion fpt or ghes or ghec %}

## 创建默认安全策略

您可以创建默认安全策略，该策略将显示在组织中任何没有自己的安全策略的公共仓库中。 有关详细信息，请参阅“[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

## 管理 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} 检测公共存储库中的漏洞并显示依赖关系图。 您可以为组织拥有的所有公共仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 您可以为组织拥有的所有私有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图。

1. 单击你的个人资料照片，然后单击“组织”。
2. 单击组织旁边的“设置”。
3. 单击“安全性和分析”。
4. 单击你要管理的功能旁边的“全部启用”或“全部禁用” 。
5. （可选）选择“自动对新存储库启用”。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”、“[探索存储库的依赖项](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

## 管理依赖项审查

依赖项评审是一项 {% data variables.product.prodname_advanced_security %} 功能，可让您在将拉取请求合并到存储库之前可视化拉取请求中的依赖项更改。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

{% ifversion fpt or ghec %} 已为所有公共存储库启用了依赖项审查。 {% ifversion fpt %}将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 一起使用的组织还可以对私有和内部存储库启用依赖项审查。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review)。 {% endif %}{% endif %}{% ifversion ghec %}对于组织拥有的私有和内部存储库，您可以通过启用依赖关系图并启用 {% data variables.product.prodname_advanced_security %} 来启用依赖项审查（见下文）。 {% elsif ghes or ghae %} 为 {% data variables.location.product_location %} 启用依赖关系图并为组织启用 {% data variables.product.prodname_advanced_security %} 后，依赖项审查可用（见下文）。{% endif %}

{% ifversion fpt or ghec or ghes %}
## 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。 您也可以为组织的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。

1. 单击你的个人资料照片，然后单击“组织”。
2. 单击组织旁边的“设置”。
3. 单击“安全性和分析”。
4. 单击 {% data variables.product.prodname_dependabot_security_updates %} 旁边的“全部启用”或“全部禁用” 。
5. （可选）选择“自动对新存储库启用”。 

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

## 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)”。

要启用 {% data variables.product.prodname_dependabot_version_updates %}，必须创建 dependabot.yml 配置文件。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

{% endif %}

{% ifversion ghes or ghae or ghec %}
## 管理 {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes or ghec %} 如果你的{% ifversion ghec %}organization is owned by an enterprise that{% else %}企业{% endif %}拥有 {% data variables.product.prodname_advanced_security %} 许可证，则可启用或禁用 {% data variables.product.prodname_advanced_security %} 功能。
{% elsif ghae %} 你可以启用或禁用 {% data variables.product.prodname_advanced_security %} 功能。
{% endif %}

1. 单击你的个人资料照片，然后单击“组织”。
2. 单击组织旁边的“设置”。
3. 单击“安全性和分析”。
4. 单击 {% data variables.product.prodname_GH_advanced_security %} 旁边的“全部启用”或“全部禁用” 。
5. （可选）选择“自动对新专用存储库启用”。 

有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
{% endif %}
## 配置 {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} 是一项 {% data variables.product.prodname_advanced_security %} 功能，用于扫描存储库以查找非安全存储的机密。

已为所有公共存储库启用了 {% ifversion fpt or ghec %}{% data variables.product.prodname_secret_scanning_caps %} 。 将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 结合使用的组织还可以为专用存储库和内部存储库启用 {% data variables.product.prodname_secret_scanning %}。{% endif %} {% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning)。 {% endif %}

如果您的企业使用 {% data variables.product.prodname_advanced_security %}，则{% ifversion ghes or ghae %}{% data variables.product.prodname_secret_scanning_caps %} 可用。{% endif %}

{% ifversion not fpt %} 你可以对已启用 {% data variables.product.prodname_advanced_security %} 的所有存储库启用或禁用 {% data variables.product.prodname_secret_scanning %}。

1. 单击你的个人资料照片，然后单击“组织”。
2. 单击组织旁边的“设置”。
3. 单击“安全性和分析”。
4. 单击 {% data variables.product.prodname_secret_scanning_caps %} 旁边的“全部启用”或“全部禁用”（仅限 {% data variables.product.prodname_GH_advanced_security %} 存储库） 。
5. （可选）选择“自动对添加到 {% data variables.product.prodname_advanced_security %} 的专用存储库启用”。 

有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
{% endif %}

## 配置 {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} 是一项 {% data variables.product.prodname_advanced_security %} 功能，可扫描代码以查找安全漏洞和错误。

{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} 可用于所有公共存储库。 将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 一起使用的组织还可以将 {% data variables.product.prodname_code_scanning %} 用于私有和内部存储库。如果您的企业使用 {% data variables.product.prodname_advanced_security %}，则 {% else %}{% data variables.product.prodname_code_scanning_capc %} 可用 。{% endif %}

{% data variables.product.prodname_code_scanning_capc %} 是在存储库级别配置的。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

## 后续步骤
您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 有关详细信息，请参阅 {% ifversion fpt or ghes or ghec %}“[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”、{% endif %} {% ifversion fpt or ghec or ghes %}“[管理用于依赖项更新的拉取请求](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)”、{% endif %}“[管理存储库的 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”和“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% ifversion fpt or ghec %}如果您存在安全漏洞，您可以创建安全通告，以私下讨论和修复该漏洞。 有关详细信息，请参阅“[关于存储库安全公告](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全公告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}

{% ifversion ghes or ghec or ghae %}你{% elsif fpt %}使用 {% data variables.product.prodname_ghe_cloud %}{% endif %} 的组织可在安全概述中查看、筛选{% ifversion ghes or ghec or ghae %}你的{% elsif fpt %}他们的{% endif %}组织拥有的存储库的安全警报，并对这些警报进行排序。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的{% ifversion ghes or ghec or ghae %}“[关于安全概述](/code-security/security-overview/about-the-security-overview)”。{% elsif fpt %}“[关于安全概述](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)”。{% endif %}

{% ifversion ghec %}
## 延伸阅读

[访问组织的合规性报告](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization) {% endif %}
