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
---

## 关于 {% data variables.product.prodname_dotcom %} 安全功能

{% data variables.product.prodname_dotcom %} 具有安全功能，有助于在仓库和组织间保持代码和秘密安全。 {% data reusables.advanced-security.security-feature-availability %}

{% data variables.product.prodname_advisory_database %} 包含您可以查看、搜索和过滤的安全漏洞列表。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## 适用于所有仓库
{% endif %}
### 安全策略

让您的用户能够轻松地秘密报告他们在仓库中发现的安全漏洞。 更多信息请参阅“[添加安全政策到仓库](/code-security/getting-started/adding-a-security-policy-to-your-repository)”。

{% ifversion fpt or ghec %}
### 安全通告

私下讨论并修复仓库代码中的安全漏洞。 然后，您可以发布安全通告，提醒您的社区注意漏洞并鼓励社区成员升级。 For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% endif %}
{% ifversion fpt or ghec or ghes > 3.2 %}

### {% data variables.product.prodname_dependabot_alerts %} 和安全更新

查看有关已知包含安全漏洞的依赖项的警报，并选择是否自动生成拉取请求以更新这些依赖项。 更多信息请参阅“[关于漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”和“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。
{% endif %}

{% ifversion ghes < 3.3 or ghae-issue-4864 %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

查看有关已知包含安全漏洞的依赖项的警报，并管理这些警报。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### {% data variables.product.prodname_dependabot %} 版本更新

使用 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 这有助于减少您暴露于旧版本依赖项。 如果发现安全漏洞，使用更新后的版本就更容易打补丁，{% data variables.product.prodname_dependabot_security_updates %} 也更容易成功地提出拉取请求以升级有漏洞的依赖项。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)”。
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### 依赖关系图
依赖关系图允许您探索仓库所依赖的生态系统和包，以及依赖于您的仓库的仓库和包。

您可以在仓库的 **Insights（洞察）**选项卡上找到依赖项图。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
{% endif %}

### 存储库的安全概述
对于所有公共存储库，安全概述显示为存储库启用了哪些安全功能，并提供配置当前未启用的任何可用安全功能的选项。

## 通过 {% data variables.product.prodname_GH_advanced_security %} 可用

{% ifversion fpt %}
The following {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can use the full set of features in any of their repositories. For a list of the features available with {% data variables.product.prodname_ghe_cloud %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Many {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that has a {% data variables.product.prodname_GH_advanced_security %} license can use all the following features on their repositories. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %}
{% data variables.product.prodname_GH_advanced_security %} features are available for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %}
{% data variables.product.prodname_GH_advanced_security %} features are available for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

自动检测新代码或修改代码中的安全漏洞和编码错误。 潜在的问题被高亮显示，并附有详细信息，允许您在将代码合并到默认分支之前修复它。 更多信息请参阅“[关于代码扫描](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Automatically detect leaked secrets across all public repositories. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

{% ifversion not fpt %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

自动检测已签入存储库的令牌或凭据。 You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, so that you know which tokens or credentials to treat as compromised. 更多信息请参阅“[关于密钥扫描](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)”。
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
### 依赖项审查

在合并拉取请求之前显示依赖项更改的全部影响以及任何有漏洞版本的详情。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。
{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae-issue-4554 %}
### 组织{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}、企业、{% endif %} 和团队的安全概述

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

检查组织的安全配置和警报，并确定风险最大的存储库。 更多信息请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”。
{% endif %}

## 延伸阅读
- “[{% data variables.product.prodname_dotcom %} 的产品](/github/getting-started-with-github/githubs-products)”
- "[{% data variables.product.prodname_dotcom %} 语言支持](/github/getting-started-with-github/github-language-support)"
