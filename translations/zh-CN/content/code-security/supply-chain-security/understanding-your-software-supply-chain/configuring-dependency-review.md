---
title: 配置依赖项审查
intro: 可以使用依赖项评审来捕获漏洞，以避免将其添加到项目中。
shortTitle: Configure dependency review
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
ms.openlocfilehash: d032179f1d130509eb81e4629854dada7fd98b4c
ms.sourcegitcommit: b19e5a6ac3fdc0a72c341f9a09e7a24aac060be9
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/27/2022
ms.locfileid: '147424686'
---
{% data reusables.dependency-review.beta %}

## <a name="about-dependency-review"></a>关于依赖项评审

{% data reusables.dependency-review.feature-overview %}   

有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”和“[审查拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

## <a name="about-configuring-dependency-review"></a>关于配置依赖项审查

{% ifversion fpt %} 依赖项审查在所有产品的所有公共存储库中都可用，并且无法禁用。 依赖项审查在使用 GitHub Enterprise Cloud 并拥有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证的组织拥有的专用存储库中可用。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)。

{% elsif ghec %} 依赖项审查包含在公共存储库的 {% data variables.product.product_name %} 中。 若要在组织拥有的专用存储库中使用依赖项审查，必须具有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证并启用依赖项关系图。

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. 如果尚未启用“{% data variables.product.prodname_GH_advanced_security %}”，请单击此功能旁边的“启用”。
   ![GitHub 高级安全功能的屏幕截图，其中突出显示了“启用”按钮](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %}为 {% data variables.product.product_location %} 启用依赖项关系图并为组织或存储库启用 {% data variables.product.prodname_advanced_security %} 后，依赖项审查可用。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)”。

### <a name="checking-if-the-dependency-graph-is-enabled"></a>检查是否已启用依赖项关系图


{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“配置安全性和分析功能”下，检查是否启用了依赖项关系图。 
1. 如果已启用依赖项关系图，请单击“{% data variables.product.prodname_GH_advanced_security %}”旁边的“启用”以启用 {% data variables.product.prodname_advanced_security %}，其中包含了依赖项审查。 如果企业没有可用的 {% data variables.product.prodname_advanced_security %} 许可证，“启用”按钮会禁用。{% ifversion ghes < 3.3 %}![“代码安全和分析”功能的屏幕截图](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %}![“代码安全和分析”功能的屏幕截图](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %} {% endif %}

{% ifversion dependency-review-action-configuration %}
## <a name="configuring-the--data-variablesproductprodname_dependency_review_action-"></a>配置 {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %} {% data reusables.dependency-review.dependency-review-action-overview %}

可用配置选项如下。

| 选项 | 必选 | 使用情况 |
|------------------|-------------------------------|--------|
| `fail-on-severity` | 可选 | 定义严重性级别（`low`、`moderate`、`high`、`critical`）的阈值。</br>对于引入指定严重性级别或更高级别的漏洞的任何拉取请求，该操作都将失败。 |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | 可选 | 包含允许的许可证列表。 可以在 API 文档的[许可证](/rest/licenses)页中找到此参数可能的值。</br>如果拉取请求引入许可证与列表不匹配的依赖项，该操作将失败。|{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | 可选 | 包含禁止的许可证列表。 可以在 API 文档的[许可证](/rest/licenses)页中找到此参数可能的值。</br>如果拉取请求引入许可证与列表匹配的依赖项，该操作将失败。|{% endif %}

{% ifversion dependency-review-action-licenses %} {% tip %}

提示：`allow-licenses` 和 `deny-licenses` 选项互斥。

{% endtip %} {% endif %}

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
