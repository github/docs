---
title: 关于安全概述
intro: 'You can view, filter, and sort security alerts for repositories owned by your organization or team in one place: the Security Overview page.'
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: issue-4554
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: About security overview
---

{% data reusables.security-center.beta %}

## 关于安全概述

您可以使用安全概述来简要了解组织的安全状态，或识别需要干预的问题仓库。 在组织级别，安全概述显示组织拥有的仓库的聚合和仓库特定安全信息。 在团队级别，安全概述显示团队拥有管理权限的仓库特定安全信息。 更多信息请参阅“[管理团队的组织仓库访问权限](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。

The security overview indicates whether {% ifversion fpt or ghes > 3.1 or ghec %}security{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 or ghec %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 or ghec %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)."

在安全概述中，您可以查看、排序和筛选警报，以了解组织和特定仓库中的安全风险。 您可以应用多个筛选器来关注感兴趣的领域。 例如，您可以识别具有大量 {% data variables.product.prodname_dependabot_alerts %} 的私有仓库或者没有 {% data variables.product.prodname_code_scanning %} 警报的仓库。

![组织的安全概述](/assets/images/help/organizations/security-overview.png)

For each repository in the security overview, you will see icons for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the icon for that feature will be grayed out.

![安全概述中的图标](/assets/images/help/organizations/security-overview-icons.png)

| 图标                                                            | 含义                                                                                                                                                                                            |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。         |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | {% data variables.product.prodname_secret_scanning_caps %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。 |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %} 的通知。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。                       |
| {% octicon "check" aria-label="Check" %}                      | The security feature is enabled, but does not raise alerts in this repository.                                                                                                                |
| {% octicon "x" aria-label="x" %}                              | The security feature is not supported in this repository.                                                                                                                                     |

默认情况下，存档的仓库被排除在组织的安全概览之外。 您可以应用筛选来查看安全概述中存档的仓库。 更多信息请参阅“[筛选警报列表](#filtering-the-list-of-alerts)”。

The security overview displays active alerts raised by security features. 如果仓库的安全概述中没有警报，则可能仍然存在未检测到的安全漏洞或代码错误。

## 查看组织的安全概述

组织所有者可以查看组织的安全概述。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. 要查看有关警报类型的汇总信息，请单击 **Show more（显示更多）**。 ![显示更多按钮](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

## 查看团队的安全概述

团队成员可以看到团队具有管理权限的仓库的安全概述。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

## 过滤警报列表

### 按仓库的风险级别筛选

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk.

| 限定符            | 描述               |
| -------------- | ---------------- |
| `risk:high`    | 显示高风险仓库。         |
| `risk:medium`  | 显示中风险仓库。         |
| `risk:low`     | 显示低风险仓库。         |
| `risk:unknown` | 显示风险级别未知的仓库。     |
| `risk:clear`   | 显示没有检测到的风险级别的仓库。 |

### 按警报数量筛选

| 限定符                       | 描述                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_code_scanning %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。     |
| <code>secret-scanning-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_secret_scanning %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。   |
| <code>dependabot-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。 |

### Filter by whether security features are enabled

| 限定符                             | 描述                                                                     |
| ------------------------------- | ---------------------------------------------------------------------- |
| `enabled:code-scanning`         | 显示启用了 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `not-enabled:code-scanning`     | 显示未启用 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `enabled:secret-scanning`       | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `not-enabled:secret-scanning`   | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `enabled:dependabot-alerts`     | 显示启用了 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `not-enabled:dependabot-alerts` | 显示未启用 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |

### 按仓库类型筛选

| 限定符 | 描述 |
| --- | -- |
|     |    |
{%- ifversion fpt or ghes > 3.1 or ghec %}
| `is:public` | Display public repositories. |
{% elsif ghes or ghec or ghae %}
| `is:internal` | Display internal repositories. |
{%- endif %}
| `is:private` | Display private repositories. | | `archived:true` | Display archived repositories. | | `archived:true` | Display archived repositories. |

### 按团队筛选

| 限定符                       | 描述                         |
| ------------------------- | -------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 *TEAM-NAME* 具有管理员权限的仓库。 |

### 按主题筛选

| 限定符                       | 描述                      |
| ------------------------- | ----------------------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示分类为 *TOPIC-NAME* 的仓库。 |

### 对警报列表进行排序

| 限定符                           | 描述                                                                          |
| ----------------------------- | --------------------------------------------------------------------------- |
| `sort:risk`                   | 根据风险对安全概述中的仓库进行排序。                                                          |
| `sort:repos`                  | 按名称的字母顺序对安全概述中的仓库排序。                                                        |
| `sort:code-scanning-alerts`   | 按 {% data variables.product.prodname_code_scanning %} 警报的数量对安全概述中的仓库排序。   |
| `sort:secret-scanning-alerts` | 按 {% data variables.product.prodname_secret_scanning %} 警报的数量对安全概述中的仓库排序。 |
| `sort:dependabot-alerts`      | 将 {% data variables.product.prodname_dependabot_alerts %} 数量对安全概述中的仓库排序。  |
