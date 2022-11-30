---
title: 了解安全警报
intro: 您可以在一个地方查看、筛选和排序组织或团队拥有的仓库的安全警报。
product: '{% data reusables.gated-features.security-center %}'
versions:
  free-pro-team: '*'
  github-ae: next
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
---

{% data reusables.security-center.beta %}

### 关于安全概述

您可以使用安全概述来简要了解组织的安全状态，或识别需要干预的问题仓库。 在组织级别，安全概述显示组织拥有的仓库的聚合和仓库特定安全信息。 在团队级别，安全概述显示团队拥有管理权限的仓库特定安全信息。 更多信息请参阅“[管理团队的组织仓库访问权限](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。

安全概述指示是否为组织拥有的仓库启用了 {% data variables.product.prodname_GH_advanced_security %} 功能，并且合并来自 {% data variables.product.prodname_advanced_security %} 功能的警报，包括 {% data variables.product.prodname_code_scanning %} 警报、{% data variables.product.prodname_dependabot_alerts %} 和 {% data variables.product.prodname_secret_scanning %} 警报。 解更多信息请参阅“[保护您的仓库](/code-security/getting-started/securing-your-repository)”和“[保护您的组织](/code-security/getting-started/securing-your-organization)”。

在安全概述中，您可以查看、排序和筛选警报，以了解组织和特定仓库中的安全风险。 您可以应用多个筛选器来关注感兴趣的领域。 例如，您可以识别具有大量 {% data variables.product.prodname_dependabot_alerts %} 的私有仓库或者没有 {% data variables.product.prodname_code_scanning %} 警报的仓库。

![组织的安全概述](/assets/images/help/organizations/security-overview.png)

对于安全概述中的每个仓库，您将看到每种类型的 {% data variables.product.prodname_advanced_security %} 功能的图标，以及每种类型的警报数量。 如果仓库未启用 {% data variables.product.prodname_advanced_security %} 功能，则该功能的图标将变灰。

![安全概述中的图标](/assets/images/help/organizations/security-overview-icons.png)

| 图标                                                            | 含义                                                                                                                                                                                            |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。         |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | {% data variables.product.prodname_secret_scanning_caps %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。 |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %} 的通知。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。                       |
| {% octicon "check" aria-label="Check" %}                      | {% data variables.product.prodname_advanced_security %} 功能已启用，但没有在此仓库中发出警报。                                                                                                                 |
| {% octicon "x" aria-label="x" %}                              | 此仓库不支持 {% data variables.product.prodname_advanced_security %} 功能。                                                                                                                          |

默认情况下，存档的仓库被排除在组织的安全概览之外。 您可以应用筛选来查看安全概述中存档的仓库。 更多信息请参阅“[筛选警报列表](#filtering-the-list-of-alerts)”。

安全概述显示由 {% data variables.product.prodname_GH_advanced_security %} 功能引起的主动警报。 如果仓库的安全概述中没有警报，则可能仍然存在未检测到的安全漏洞或代码错误。

### 查看组织的安全概述

组织所有者可以查看组织的安全概述。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. 要查看有关警报类型的汇总信息，请单击 **Show more（显示更多）**。 ![显示更多按钮](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

### 查看团队的安全概述

团队成员可以看到团队具有管理权限的仓库的安全概述。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

### 过滤警报列表

#### 按仓库的风险级别筛选

仓库的风险级别取决于来自 {% data variables.product.prodname_advanced_security %} 功能的警报数量和严重程度。 如果仓库未启用一个或多个 {% data variables.product.prodname_advanced_security %} 功能，则仓库的风险级别未知。 如果仓库没有 {% data variables.product.prodname_advanced_security %} 功能检测到的风险，则仓库具有明显的风险级别。

| 限定符            | 描述               |
| -------------- | ---------------- |
| `risk:high`    | 显示高风险仓库。         |
| `risk:medium`  | 显示中风险仓库。         |
| `risk:low`     | 显示低风险仓库。         |
| `risk:unknown` | 显示风险级别未知的仓库。     |
| `risk:clear`   | 显示没有检测到的风险级别的仓库。 |

#### 按警报数量筛选

| 限定符                       | 描述                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_code_scanning %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。     |
| <code>secret-scanning-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_secret_scanning %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。   |
| <code>dependabot-alerts:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 此限定符可以使用 &gt 和 &lt 比较运算符。 |

#### 通过是否启用 {% data variables.product.prodname_advanced_security %} 功能进行筛选

| 限定符                             | 描述                                                                     |
| ------------------------------- | ---------------------------------------------------------------------- |
| `enabled:code-scanning`         | 显示启用了 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `not-enabled:code-scanning`     | 显示未启用 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `enabled:secret-scanning`       | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `not-enabled:secret-scanning`   | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `enabled:dependabot-alerts`     | 显示启用了 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `not-enabled:dependabot-alerts` | 显示未启用 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |

#### 按仓库类型筛选

| 限定符             | 描述       |
| --------------- | -------- |
| `is:public`     | 显示公共仓库。  |
| `is:internal`   | 显示内部仓库。  |
| `is:private`    | 显示私有仓库。  |
| `archived:true` | 显示存档的仓库。 |

#### 按团队筛选

| 限定符                       | 描述                         |
| ------------------------- | -------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 *TEAM-NAME* 具有管理员权限的仓库。 |

#### 按主题筛选

| 限定符                       | 描述                      |
| ------------------------- | ----------------------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示分类为 *TOPIC-NAME* 的仓库。 |

#### 对警报列表进行排序

| 限定符                           | 描述                                                                          |
| ----------------------------- | --------------------------------------------------------------------------- |
| `sort:risk`                   | 根据风险对安全概述中的仓库进行排序。                                                          |
| `sort:repos`                  | 按名称的字母顺序对安全概述中的仓库排序。                                                        |
| `sort:code-scanning-alerts`   | 按 {% data variables.product.prodname_code_scanning %} 警报的数量对安全概述中的仓库排序。   |
| `sort:secret-scanning-alerts` | 按 {% data variables.product.prodname_secret_scanning %} 警报的数量对安全概述中的仓库排序。 |
| `sort:dependabot-alerts`      | 将 {% data variables.product.prodname_dependabot_alerts %} 数量对安全概述中的仓库排序。  |
