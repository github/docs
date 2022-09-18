---
title: GitHub 安全功能
intro: '{% data variables.product.prodname_dotcom %} 安全功能概述。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: fc2e4452e83245535c3d5f7ead70b1b23a5d874a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881483'
---
## 关于 {% data variables.product.prodname_dotcom %} 安全功能

{% data variables.product.prodname_dotcom %} 具有安全功能，有助于在仓库和组织间保持代码和秘密安全。 {% data reusables.advanced-security.security-feature-availability %}

{% data variables.product.prodname_advisory_database %} 包含您可以查看、搜索和过滤的安全漏洞列表。 {% data reusables.security-advisory.link-browsing-advisory-db %}

## 适用于所有仓库
### 安全策略

让您的用户能够轻松地秘密报告他们在仓库中发现的安全漏洞。 有关详细信息，请参阅“[向存储库添加安全策略](/code-security/getting-started/adding-a-security-policy-to-your-repository)”。

{% ifversion fpt or ghec %}
### 安全通知

私下讨论并修复仓库代码中的安全漏洞。 然后，您可以发布安全通告，提醒您的社区注意漏洞并鼓励社区成员升级。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}

### {% data variables.product.prodname_dependabot_alerts %} 和安全更新

查看有关已知包含安全漏洞的依赖项的警报，并选择是否自动生成拉取请求以更新这些依赖项。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”和“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。
{% endif %}

{% ifversion ghes < 3.3 or ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

查看有关已知包含安全漏洞的依赖项的警报，并管理这些警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### {% data variables.product.prodname_dependabot %} version updates

使用 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 这有助于减少您暴露于旧版本依赖项。 如果发现安全漏洞，使用更新后的版本就更容易打补丁，{% data variables.product.prodname_dependabot_security_updates %} 也更容易成功地提出拉取请求以升级有漏洞的依赖项。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)”。
{% endif %}

### 依赖关系图
依赖关系图允许您探索仓库所依赖的生态系统和包，以及依赖于您的仓库的仓库和包。

你可以在存储库的“见解”选项卡上找到依赖项关系图。 有关详细信息，请参阅[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)。

{% ifversion security-overview-displayed-alerts %}
### 安全概述

通过安全概览，可以查看安全配置和警报，从而轻松识别面临最大风险的存储库和组织。 有关详细信息，请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”。

{% else %}
### 存储库的安全概述
安全概览显示为存储库启用了哪些安全功能，并提供用于配置尚未启用的任何可用安全功能的选项。
{% endif %}

## 通过 {% data variables.product.prodname_GH_advanced_security %} 可用

{% ifversion fpt %} {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库免费提供以下 {% data variables.product.prodname_GH_advanced_security %} 功能。 使用具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的 {% data variables.product.prodname_ghe_cloud %} 的组织可以在其任何存储库中使用完整的功能集。 有关 {% data variables.product.prodname_ghe_cloud %} 可用功能的列表，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security)。

{% elsif ghec %} {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库免费提供了许多 {% data variables.product.prodname_GH_advanced_security %} 功能。 企业中具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织可以在其所有存储库上使用以下功能。 {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} {% data variables.product.prodname_GH_advanced_security %} 功能适用于具有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业。 这些功能仅限于组织拥有的存储库。 {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} {% data variables.product.prodname_GH_advanced_security %} 功能可用于组织拥有的存储库。 {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

自动检测新代码或修改代码中的安全漏洞和编码错误。 潜在的问题被高亮显示，并附有详细信息，允许您在将代码合并到默认分支之前修复它。 有关详细信息，请参阅“[关于代码扫描](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

自动检测所有公共存储库中泄露的机密。 {% data variables.product.company_short %} 通知相关服务提供商机密可能已泄露。 有关支持的机密和服务提供商的详细信息，请参阅 “[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} 仅通过 {% data variables.product.prodname_GH_advanced_security %} 的许可证提供。
{% endif %}

自动检测已签入存储库的令牌或凭据。 您可以查看 {% data variables.product.company_short %} 代码中找到的任何机密的警报，以便知道哪些令牌或凭据被视为已泄露。 有关详细信息，请参阅“[关于机密扫描](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)”。
{% endif %}

### 依赖项检查

在合并拉取请求之前显示依赖项更改的全部影响以及任何有漏洞版本的详情。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### 组织{% ifversion ghes > 3.4 or ghae-issue-6199 %}、企业、{% endif %}和团队的安全概览

检查组织的安全配置和警报，并确定风险最大的存储库。 有关详细信息，请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”。
{% endif %}

## 延伸阅读
- [{% data variables.product.prodname_dotcom %} 的产品](/github/getting-started-with-github/githubs-products)
- [{% data variables.product.prodname_dotcom %} 语言支持](/github/getting-started-with-github/github-language-support)
