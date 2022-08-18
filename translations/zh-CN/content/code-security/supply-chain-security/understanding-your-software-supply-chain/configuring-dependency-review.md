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

{% ifversion dependency-review-action-configuration %}
## 配置 {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}
{% data reusables.dependency-review.dependency-review-action-overview %}

以下是可用的配置选项：

| 选项                 | 必选 | 用法                                                                    |
| ------------------ | -- | --------------------------------------------------------------------- |
| `fail-on-severity` | 可选 | 定义严重性级别的阈值（`低`、`中`、`高`、`严重`）。</br>对于引入指定严重性级别或更高级别的漏洞的任何拉取请求，该操作都将失败。 |
{%- ifversion dependency-review-action-licenses %}
| `allow-licenses` | Optional | Contains a list of allowed licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that do not match the list.|{% endif %}
{%- ifversion dependency-review-action-licenses %}
| `deny-licenses` | Optional | Contains a list of prohibited licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that match the list.|{% endif %}

{% ifversion dependency-review-action-licenses %}
{% tip %}

**提示：**  `allow-licenses` 和 `deny-licenses` 选项是互斥的。

{% endtip %}
{% endif %}

此 {% data variables.product.prodname_dependency_review_action %} 示例文件说明了如何使用这些配置选项。

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
{% ifversion dependency-review-action-licenses %}
          # You can only can only include one of these two options: `allow-licenses` and `deny-licences`
          # ([String]). Only allow these licenses (optional)
          # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # allow-licenses: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # deny-licenses: LGPL-2.0, BSD-2-Clause
{% endif %}
```

有关配置选项的更多详细信息，请参阅 [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme)。
{% endif %}
