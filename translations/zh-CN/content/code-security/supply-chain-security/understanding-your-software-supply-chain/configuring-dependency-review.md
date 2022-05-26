---
title: 配置依赖项审查
intro: 可以使用依赖项评审在将漏洞添加到项目之前捕获这些漏洞。
shortTitle: 配置依赖项审查
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

{% data reusables.dependency-review.beta %}

## 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”和“[查看拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

## 关于配置依赖项审查

{% ifversion fpt %}
依赖项审查在所有产品的所有公共存储库中都可用，并且无法禁用。 依赖项审查在使用 GitHub Enterprise Cloud 并具有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证的组织拥有的私有存储库中可用。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)。

{% elsif ghec %}
依赖项审查包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的私有存储库中使用依赖项审查，您必须具有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证并启用依赖关系图。

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. 如果未启用“{% data variables.product.prodname_GH_advanced_security %}”，请单击该功能旁边的 **Enable（启用）**。 ![强调显示"启用"按钮的 GitHub Advanced Security 功能的屏幕截图](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %}
为 {% data variables.product.product_location %} 启用依赖关系图并为组织或仓库启用{% data variables.product.prodname_advanced_security %} 时，依赖项审查可用。 更多信息请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)”。

### 检查是否启用了依赖关系图


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“Configure security and analysis features（配置安全和分析功能）”下，检查是否启用了依赖关系图。
1. 如果启用了依赖关系图，请单击“{% data variables.product.prodname_GH_advanced_security %}”旁边的 **Enable（启用）**以启用 {% data variables.product.prodname_advanced_security %}，包括依赖项审查。 如果您的企业没有可用于 {% data variables.product.prodname_advanced_security %} 的许可证，则启用按钮处于禁用状态。{% ifversion ghes < 3.3 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %} ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}
{% endif %}
