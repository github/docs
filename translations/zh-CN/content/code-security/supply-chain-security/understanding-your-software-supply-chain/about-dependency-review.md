---
title: 关于依赖项评审
intro: 依赖项审查可让你在将有不安全的依赖项引入你的环境之前找到它们，并提供关于许可证、依赖项和依赖项存在时间的信息。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164112'
---
## 关于依赖项评审

{% data reusables.dependency-review.feature-overview %}  

如果拉取请求针对仓库的默认分支并且包含对包清单或锁定文件的更改，您可以显示依赖项审查以查看更改的内容。 依赖项审查包括对锁定文件中间接依赖项的更改详情，并告诉您任何已添加或更新的依赖项是否包含已知漏洞。

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 有关依赖项审查工作原理的详细信息，请参阅“[查看拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

有关配置依赖项评审的详细信息，请参阅“[配置依赖项评审](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)”。

{% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

有关 {% data variables.product.product_name %} 上提供的供应链功能的详细信息，请参阅“[关于供应链安全性](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”。

{% ifversion ghec or ghes %}
## 启用依赖项审查

启用依赖关系图时，依赖项审查功能可用。 有关详细信息，请参阅“{% ifversion ghec %} [启用依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## 强制实施依赖项审查

该操作适用于所有 {% ifversion fpt or ghec %}公共存储库，以及启用了 {% data variables.product.prodname_GH_advanced_security %} 的专用 {% endif %}存储库。

{% data reusables.dependency-review.action-enterprise %}

可以使用存储库中的 {% data variables.product.prodname_dependency_review_action %} 对拉取请求强制实施依赖项审查。 该操作会扫描拉取请求中包版本更改引入的易受攻击的依赖项版本，并警告你相关的安全漏洞。 这样可以更好地了解拉取请求中发生的变化，并帮助防止漏洞添加到存储库中。 有关详细信息，请参阅 [`dependency-review-action`](https://github.com/actions/dependency-review-action)。

![依赖项审查操作示例](/assets/images/help/graphs/dependency-review-action.png)

默认情况下，如果 {% data variables.product.prodname_dependency_review_action %} 检查发现任何易受攻击的包，它将失败。 当存储库所有者需要依赖项审查检查才能通过时，失败的检查将阻止拉取请求合并。 有关详细信息，请参阅“[关于受保护的分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”。

该操作使用依赖项审查 REST API 来获取基本提交和头提交之间的依赖项更改差异。 可以使用依赖项审查 API 获取存储库上任意两个提交之间的依赖项更改（包括漏洞数据）的差异。 有关详细信息，请参阅“[依赖项审查](/rest/reference/dependency-graph#dependency-review)”。

{% ifversion dependency-review-action-configuration %} 可以配置 {% data variables.product.prodname_dependency_review_action %} 来更好地满足你的需求。 例如，可以指定将导致操作失败的严重级别{% ifversion dependency-review-action-licenses %}，或者为要扫描的许可证设置允许或拒绝列表{% endif %}。 有关详细信息，请参阅“[配置依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)”。 {% endif %}

{% endif %}

