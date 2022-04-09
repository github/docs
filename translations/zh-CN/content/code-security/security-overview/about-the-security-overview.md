---
title: 关于安全概述
intro: 您可以在一个位置查看、筛选和排序组织或团队拥有的存储库的安全警报：“安全概述”页。
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
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
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: 关于安全概述
---

{% data reusables.security-center.beta %}

## 关于安全概述

{% ifversion ghes or ghec or ghae %}You{% elsif fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can use the security overview for a high-level view of the security status of {% ifversion ghes or ghec or ghae %}your  {% elsif fpt %}their{% endif %} organization or to identify problematic repositories that require intervention. {% ifversion ghes or ghec or ghae %}You {% elsif fpt %}These organizations{% endif %} can view aggregate or repository-specific security information in the security overview. {% ifversion ghes or ghec or ghae %}You {% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %}{% endif %} can also use the security overview to see which security features are enabled for {% ifversion ghes or ghec or ghae %}your {% elsif fpt %}their {% endif %} repositories and to configure any available security features that are not currently in use. {% ifversion fpt %}For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %}
安全概述指示是否为组织拥有的存储库启用了 {% ifversion fpt or ghes > 3.1 or ghec %}安全{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} 功能，并合并每个功能的警报。{% ifversion fpt or ghes > 3.1 or ghec %} 安全功能包括 {% data variables.product.prodname_GH_advanced_security %} 功能，例如 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %}以及 {% data variables.product.prodname_dependabot_alerts %}。{% endif %} 有关 {% data variables.product.prodname_GH_advanced_security %} 功能的详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。{% ifversion fpt or ghes > 3.1 or ghec %} 有关 {% data variables.product.prodname_dependabot_alerts %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。{% endif %}

有关在存储库和组织级别保护代码的详细信息，请参阅“[保护存储库](/code-security/getting-started/securing-your-repository)”和“[保护组织](/code-security/getting-started/securing-your-organization)”。

公司的应用程序安全团队可以使用安全概述对组织的安全状态进行广泛和具体的分析。 例如，他们可以使用概述页来监视组织或特定团队在将 {% data variables.product.prodname_GH_advanced_security %} 部署到企业时采用的功能，或者查看组织中所有存储库中特定类型和严重性级别的所有警报。

### 关于筛选和排序警报

在安全概述中，您可以查看、排序和筛选警报，以了解组织和特定仓库中的安全风险。 安全摘要具有高度交互性，允许您根据警报风险级别、警报类型和功能启用等限定符调查特定类别的信息。 您还可以应用多个筛选器来关注更小的兴趣领域。 例如，您可以识别具有大量 {% data variables.product.prodname_dependabot_alerts %} 的私有仓库或者没有 {% data variables.product.prodname_code_scanning %} 警报的仓库。 更多信息请参阅“[在安全概述中的筛选警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。

{% if security-overview-views %}

在安全概述中，在组织和存储库级别，都有特定安全功能（如机密扫描警报和代码扫描警报）的专用视图。 您可以使用这些视图将分析限制为一组特定的警报，并使用特定于每个视图的一系列筛选器进一步缩小结果范围。 例如，在机密扫描警报视图中，可以使用`机密类型`筛选器仅查看特定机密（如 GitHub 个人访问令牌）的机密扫描警报。 在存储库级别，您可以使用安全概述来评估特定存储库的当前安全状态，并配置存储库中尚未使用的任何其他安全功能。

{% endif %}

![组织的安全概述](/assets/images/help/organizations/security-overview.png)

对于安全概述中的每个存储库，您将看到每种类型的安全功能的图标以及每种类型的警报数。 如果未为存储库启用安全功能，则该功能的图标将灰显。 此外，还会根据其代码扫描、Dependabot 和秘密扫描警报为每个存储库计算风险评分。 此分数处于测试阶段，应谨慎使用。 它的算法和方法可能会发生变化。

![安全概述中的图标](/assets/images/help/organizations/security-overview-icons.png)

| 图标                                                            | 含义                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。                                     |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | {% data variables.product.prodname_secret_scanning_caps %} 警报. 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。                             |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %} 的通知。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。 |
| {% octicon "check" aria-label="Check" %}                      | 安全功能已启用，但不会在此存储库中引发警报。                                                                                                                                                                                                    |
| {% octicon "x" aria-label="x" %}                              | 此存储库不支持该安全功能。                                                                                                                                                                                                             |

安全概述显示由安全功能引发的活动警报。 如果仓库的安全概述中没有警报，则可能仍然存在未检测到的安全漏洞或代码错误。

### 关于组织级安全性概述

在组织级别，安全概述显示组织拥有的仓库的聚合和仓库特定安全信息。 您可以在组织级别按安全功能筛选信息。

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### 关于企业级安全性概述
在企业级别，安全性概述显示企业的综合和存储库特定的安全信息。 您可以查看企业拥有的具有安全警报的存储库，也可以查看整个企业的所有 {% data variables.product.prodname_secret_scanning %} 警报。

企业中组织的组织所有者和安全管理员对企业级安全概述的访问权限也有限。 他们只能查看他们具有完全访问权限的组织的存储库和警报。

{% elsif fpt %}
### 关于企业级安全性概述
在企业级别，安全性概述显示企业的综合和存储库特定信息。 更多信息请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于企业级安全性概述](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)”。
{% endif %}

### 关于团队级安全性概述
在团队级别，安全概述显示团队拥有管理权限的仓库特定安全信息。 For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."
{% endif %}
