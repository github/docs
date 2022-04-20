---
title: 关于依赖项审查
intro: 依赖项审查可让您在将有漏洞的依赖项引入您的环境之前找到它们，并提供关于许可证、依赖项和依赖项存在时间的信息。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: 依赖项审查
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
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
---

{% data reusables.dependency-review.beta %}

## 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

如果拉取请求针对仓库的默认分支并且包含对包清单或锁定文件的更改，您可以显示依赖项审查以查看更改的内容。 依赖项审查包括对锁定文件中间接依赖项的更改详情，并告诉您任何已添加或更新的依赖项是否包含已知漏洞。

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 有关依赖项审查工作的更多信息，请参阅“[审查拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

有关配置依赖项评审的详细信息，请参阅“[配置依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)”。

{% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

{% ifversion ghec or ghes %}
## 启用依赖项审查

启用依赖关系图时，依赖项审查功能可用。 更多信息请参阅“{% ifversion ghec %}[启用依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[为企业启用依赖关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## 依赖项审查实施

{% data reusables.dependency-review.dependency-review-action-beta-note %}

可以使用存储库中的依赖项审查 GitHub 操作对拉取请求强制执行依赖项审查。 该操作将扫描由拉取请求中的包版本更改是否引入有漏洞的依赖项版本，并向您示警相关的安全漏洞。 这便于您更好地了解拉取请求中发生的变化，并有助于防止将漏洞添加到存储库中。 更多信息请参阅 [`dependency-review-action`](https://github.com/actions/dependency-review-action)。

![依赖项审查操作示例](/assets/images/help/graphs/dependency-review-action.png)

依赖项审查 GitHub 操作检查在发现任何易受攻击的包时会失败，但只有在存储库所有者要求在合并之前通过检查时，才会阻止合并拉取请求。 更多信息请参阅“[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”。

该操作使用依赖项审查 REST API 来获取基本提交和头部提交之间的依赖项更改差异。 您可以使用依赖项审查 API 来获取存储库上任意两个提交之间的依赖项更改差异（包括漏洞数据）。 更多信息请参阅“[依赖项审查](/rest/reference/dependency-graph#dependency-review)”。
{% endif %}
