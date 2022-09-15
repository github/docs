---
title: 关于供应链安全性
intro: '{% data variables.product.product_name %} 有助于保护供应链，通过从了解环境中的依赖项到了解这些依赖项中的漏洞{% ifversion fpt or ghec or ghes > 3.2 %}并修补它们{% endif %}得以实现。'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 2ad16960d0445994d5414390a62e16d719a10e6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064888'
---
## 关于 GitHub 上的供应链安全性

随着开放源代码的加速使用，大多数项目都依赖于数百个开源依赖项。 这就带来了一个安全问题：如果你正在使用的依赖项有漏洞，该怎么办？ 你可能会使用户面临供应链攻击的风险。 保护供应链最重要的操作之一就是修补易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %}并替换任何恶意软件{% endif %}。

当你在清单文件或锁定文件中指定依赖项时，可以直接将它们添加到供应链。 依赖项也可以通过可传递方式包含在内，也就是说，即使你没有指定某个特定的依赖项，但你的某个依赖项使用了它，那么你也会依赖于该依赖项。

{% data variables.product.product_name %} 提供了一系列功能，可帮助你了解环境中的依赖项{% ifversion ghes < 3.3 or ghae %}，并了解这些依赖项中的漏洞{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}，了解这些依赖项中的漏洞并进行修补{% endif %}。 

{% data variables.product.product_name %} 上的供应链功能包括：
- **依赖项关系图**
- **依赖项审查**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes > 3.2 %}- {% data variables.product.prodname_dependabot_updates %}
  - {% data variables.product.prodname_dependabot_security_updates %}
  - {% data variables.product.prodname_dependabot_version_updates %}{% endif %}

依赖项关系图是供应链安全性的核心。 依赖项关系图标识了存储库或包的所有上游依赖项和公共下游依赖项。 你可以在存储库的依赖项关系图上看到存储库的依赖项和它们的一些属性，例如漏洞信息。 

{% data variables.product.prodname_dotcom %} 上的其他供应链功能依赖于依赖项关系图提供的信息。

- 依赖项审查使用依赖项关系图来标识依赖项更改，在你审查拉取请求时，可帮助你了解这些更改的安全影响。
- {% data variables.product.prodname_dependabot %} 通过 {% data variables.product.prodname_advisory_database %} 中发布的公告列表交叉引用依赖项关系图提供的依赖项数据，扫描依赖项并在检测到潜在漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时生成 {% data variables.product.prodname_dependabot_alerts %}。
{% ifversion fpt or ghec or ghes > 3.2 %}- {% data variables.product.prodname_dependabot_security_updates %}通过依赖项关系图和 {% data variables.product.prodname_dependabot_alerts %}来帮助你更新存储库中有已知漏洞的依赖项。

{% data variables.product.prodname_dependabot_version_updates %}不使用依赖项关系图，而是依赖于依赖项的语义版本控制。 {% data variables.product.prodname_dependabot_version_updates %}可帮助你使依赖项保持最新，即使它们没有任何漏洞。
{% endif %}

{% ifversion fpt or ghec or ghes %} 有关端到端供应链安全性的最佳做法指南，包括如何保护个人帐户、代码和生成流程，请参阅“[保护端到端供应链](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)”。
{% endif %}

## 功能概述

### 什么是依赖项关系图

为了生成依赖项关系图，{% data variables.product.company_short %} 会查看清单和锁定文件中声明的存储库显式依赖项。 启用后，依赖项关系图会自动分析存储库中的所有已知包清单文件，并以此来构造一个包含已知依赖项名称和版本的关系图。

- 依赖项关系图包含有关直接依赖项和可传递依赖项的信息。  
- 当你将提交推送到 {% data variables.product.company_short %} 以更改受支持的清单或锁定文件或者将其添加到默认分支时，以及当任何人将更改推送到某个依赖项的存储库时，依赖项关系图会自动更新。
- 可以通过打开 {% data variables.product.product_name %} 上的存储库主页，并导航到“见解”选项卡来查看依赖项关系图。

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

有关依赖项关系图的详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

### 什么是依赖项审查

依赖项审查可帮助审阅者和参与者了解每个拉取请求中的依赖项更改及其安全性影响。 

- 依赖项审查会在拉取请求中告知你已经添加、移除或更新了哪些依赖项。 你可以使用发布日期、依赖项的受欢迎程度和漏洞信息来帮助决定是否接受更改。
- 可以通过在“已更改的文件”选项卡上显示多差异来查看拉取请求的依赖项审查。

有关依赖项审查的详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

### 什么是 Dependabot

{% data variables.product.prodname_dependabot %} 通过告知你的依赖项中的任何安全漏洞使依赖项保持最新{% ifversion fpt or ghec or ghes > 3.2 or ghae %}，并自动提交拉取请求，以便在触发 {% data variables.product.prodname_dependabot %} 警报时将依赖项升级到下一个可用的安全版本，或者在版本发布时将依赖项升级到最新版本，{% else %}这样你就可以更新该依赖项{% endif %}。

{% ifversion fpt or ghec or ghes > 3.2 %}术语“{% data variables.product.prodname_dependabot %}”包含了以下功能：
- {% data variables.product.prodname_dependabot_alerts %} - 在存储库的“安全性”选项卡上以及存储库的依赖项关系图中显示通知。 该警报包括指向项目中受影响的文件的链接，以及有关修复的版本的信息。
- {% data variables.product.prodname_dependabot_updates %}：
   - {% data variables.product.prodname_dependabot_security_updates %} - 触发更新以在触发警报时将依赖项升级到安全版本。
   - {% data variables.product.prodname_dependabot_version_updates %} - 计划更新以使依赖项始终是最新版本。
{% endif %}

#### 什么是 Dependabot 警报

{% data variables.product.prodname_dependabot_alerts %} 基于依赖项关系图和 {% data variables.product.prodname_advisory_database %} 突出显示了受新发现的漏洞影响的存储库，其中包含已知漏洞{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的公告。 

- {% data variables.product.prodname_dependabot %} 执行扫描以检测不安全的依赖项，并在以下情况下发送 {% data variables.product.prodname_dependabot_alerts %}：{% ifversion fpt or ghec %}
   - 新公告添加到 {% data variables.product.prodname_advisory_database %}。{% else %}
   - 新公告数据每小时从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.product_location %}。 {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - 存储库的依赖关系图发生更改。 
- {% data variables.product.prodname_dependabot_alerts %} 显示在{% ifversion fpt or ghec or ghes %}存储库的“安全性”选项卡上，以及{% endif %}存储库的依赖项关系图中。 警报包括项目中受影响文件的{% ifversion fpt or ghec or ghes %}链接，以及{% endif %}有关已修复的版本的信息。

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)”。

{% ifversion fpt or ghec or ghes > 3.2 %}
#### 什么是 Dependabot 更新

有两种类型的 {% data variables.product.prodname_dependabot_updates %}：{% data variables.product.prodname_dependabot %}安全更新和版本更新。  {% data variables.product.prodname_dependabot %} 会生成自动拉取请求以在这两种情况下更新依赖项，但存在一些差异。

{% data variables.product.prodname_dependabot_security_updates %}：
 - 由 {% data variables.product.prodname_dependabot %} 警报触发
 - 将依赖项更新到可修复已知漏洞的最低版本
 - 支持用于依赖项关系图支持的生态系统
 - 不需要配置文件，但可使用配置文件来替代默认行为
 
{% data variables.product.prodname_dependabot_version_updates %}：
 - 需要配置文件
 - 按配置的计划运行
 - 将依赖项更新到与配置匹配的最新版本
 - 支持用于不同类别的生态系统

有关 {% data variables.product.prodname_dependabot_updates %}的详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”和“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)”。
{% endif %}

## 功能可用性

{% ifversion fpt or ghec %}

公共存储库：
- 依赖项关系图 - 默认已启用，不能禁用。
- 依赖项审查 - 默认已启用，不能禁用。
- {% data variables.product.prodname_dependabot_alerts %} - 默认未启用。 {% data variables.product.prodname_dotcom %} 检测不安全的依赖项，并在依赖项关系图中显示信息，但默认情况下不会生成 {% data variables.product.prodname_dependabot_alerts %}。 存储库所有者或具有管理员访问权限的人员可以启用 {% data variables.product.prodname_dependabot_alerts %}。 
  你也可以为用户帐户或组织拥有的所有存储库启用或禁用 Dependabot 警报。 有关详细信息，请参阅“[管理用户帐户的安全和分析设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”。

专用存储库：
- 依赖项关系图 - 默认未启用。 存储库管理员可以启用该功能。 有关详细信息，请参阅“[探索存储库的依赖项](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。
{% ifversion fpt %}
- 依赖项审查 - 可用于使用 {% data variables.product.prodname_ghe_cloud %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证的组织所拥有的专用存储库。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)。
{% elsif ghec %}
- 依赖项审查 - 在组织拥有的专用存储库中可用，前提是你具有 {% data variables.product.prodname_GH_advanced_security %} 许可证并启用了依赖项关系图。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”和“[浏览存储库的依赖项](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。 {% endif %}
- {% data variables.product.prodname_dependabot_alerts %} - 默认未启用。 私有仓库的所有者或具有管理员权限的人员可以通过为其仓库启用依赖关系图和 {% data variables.product.prodname_dependabot_alerts %} 来启用 {% data variables.product.prodname_dependabot_alerts %}。
  你也可以为用户帐户或组织拥有的所有存储库启用或禁用 Dependabot 警报。 有关详细信息，请参阅“[管理用户帐户的安全和分析设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”。

任意存储库类型：
- {% data variables.product.prodname_dependabot_security_updates %} - 默认未启用。 您可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 若要了解如何启用安全更新，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)”。
- {% data variables.product.prodname_dependabot_version_updates %} - 默认未启用。 拥有存储库写入权限的用户可以启用 {% data variables.product.prodname_dependabot_version_updates %}。 若要了解如何启用版本更新，请参阅“[配置 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)”。
{% endif %}

{% ifversion ghes or ghae %}
- 依赖项关系图和 {% data variables.product.prodname_dependabot_alerts %} - 默认未启用。 这两项功能由企业所有者在企业级别进行配置。 有关详细信息，请参阅 {% ifversion ghes %}“[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)和 {% endif %}“[为企业启用 {% data variables.product.prodname_dependabot %} ](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
- 依赖项审查 - 为 {% data variables.product.product_location %} 启用依赖项关系图并为组织或存储库启用 {% data variables.product.prodname_advanced_security %} 时可用。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。
{% endif %} {% ifversion ghes > 3.2 %}
- {% data variables.product.prodname_dependabot_security_updates %} - 默认未启用。 您可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 若要了解如何启用安全更新，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)”。
- {% data variables.product.prodname_dependabot_version_updates %} - 默认未启用。 拥有存储库写入权限的用户可以启用 {% data variables.product.prodname_dependabot_version_updates %}。 若要了解如何启用版本更新，请参阅“[配置 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)”。
{% endif %}
