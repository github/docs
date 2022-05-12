---
title: 配置依赖关系图
intro: 您可以通过启用依赖项关系图来允许用户标识其项目的依赖项。
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: 配置依赖关系图
---

## 关于依赖项图

{% data reusables.dependabot.about-the-dependency-graph %}

更多信息请参阅“[关于依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

{% ifversion fpt or ghec %} ## About configuring the dependency graph {% endif %}
{% ifversion fpt or ghec %}要生成依赖关系图，{% data variables.product.product_name %} 需要对仓库的依赖项清单和锁定文件的只读访问权限。 依赖关系图自动为所有公共仓库生成，您可以选择为私有仓库启用它。 有关查看依赖关系图的更多信息，请参阅“[探索存储库的依赖关系](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。{% endif %}

{% ifversion ghes or ghae %} ## Enabling the dependency graph
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### 为私有仓库启用或禁用依赖关系图

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

首次启用依赖关系图时，将立即剖析受支持的生态系统的任何清单和锁定文件。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 启用后，该图将在每次推送到仓库{% ifversion fpt or ghec %}以及每次推送到该图中的其他仓库{% endif %}时自动更新。

## 延伸阅读

{% ifversion ghec %}"[查看用于组织的洞见](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[查看漏洞依赖项的 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
