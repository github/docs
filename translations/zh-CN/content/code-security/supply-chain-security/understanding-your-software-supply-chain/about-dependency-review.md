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

{% ifversion fpt %}
依赖项审查在所有产品的所有公共存储库中都可用，并且无法禁用。 依赖项审查在使用 GitHub Enterprise Cloud 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织拥有的私有存储库中可用。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)。

{% elsif ghec %}
依赖项审查包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的私有存储库中使用依赖项审查，您必须具有 {% data variables.product.prodname_GH_advanced_security %} 许可证并启用依赖关系图。 更多信息请参阅“[探索仓库的依赖项](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

{% elsif ghes or ghae %}
为 {% data variables.product.product_location %} 启用依赖关系图并为组织或仓库启用{% data variables.product.prodname_advanced_security %} 时，依赖项审查可用。
{% endif %}

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 有关依赖项审查工作的更多信息，请参阅“[审查拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

{% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

{% ifversion ghec or ghes %}
## 启用依赖项审查

启用依赖关系图时，依赖项审查功能可用。 更多信息请参阅“{% ifversion ghec %}[启用依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[为企业启用依赖关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}”。
{% endif %}
