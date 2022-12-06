---
title: 配置依赖项审查
intro: 可以使用依赖项评审来捕获漏洞，以避免将其添加到项目中。
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163350'
---
## 关于依赖项评审

{% data reusables.dependency-review.feature-overview %}   

有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”和“[审查拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。

## 关于配置依赖项审查

{% ifversion fpt %} 依赖项审查在所有产品的所有公共存储库中都可用，并且无法禁用。 依赖项审查在使用 GitHub Enterprise Cloud 并拥有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证的组织拥有的专用存储库中可用。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)。

{% elsif ghec %} 依赖项审查包含在公共存储库的 {% data variables.product.product_name %} 中。 若要在组织拥有的专用存储库中使用依赖项审查，必须具有 [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) 许可证并启用依赖项关系图。

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. 如果尚未启用“{% data variables.product.prodname_GH_advanced_security %}”，请单击此功能旁边的“启用”。
   ![GitHub 高级安全功能的屏幕截图，其中突出显示了“启用”按钮](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

为 {% data variables.location.product_location %} 启用依赖项关系图并且为组织或存储库启用 {% data variables.product.prodname_advanced_security %} 时，依赖项审查可用。{% ifversion ghes %} 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)”。{% endif %}

### 检查是否已启用依赖项关系图

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“配置安全性和分析功能”下，检查是否启用了依赖项关系图。 
1. 如果已启用依赖项关系图，请单击“{% data variables.product.prodname_GH_advanced_security %}”旁边的“启用”以启用 {% data variables.product.prodname_advanced_security %}，其中包含了依赖项审查。 如果企业没有可用的 {% data variables.product.prodname_advanced_security %} 许可证，“启用”按钮会禁用。{% ifversion ghes %} ![“代码安全性和分析”功能的屏幕截图](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## 关于配置 {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

可用配置选项如下。

| 选项 | 必选 | 使用情况 |
|------------------|-------------------------------|--------|
| `fail-on-severity` | 可选 | 定义严重性级别（`low`、`moderate`、`high`、`critical`）的阈值。</br>对于引入指定严重性级别或更高级别的漏洞的任何拉取请求，该操作都将失败。 |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | 可选 | 包含允许的许可证列表。 可以在 API 文档的[许可证](/rest/licenses)页中找到此参数可能的值。</br>如果拉取请求引入许可证与列表不匹配的依赖项，该操作将失败。|{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | 可选 | 包含禁止的许可证列表。 可以在 API 文档的[许可证](/rest/licenses)页中找到此参数可能的值。</br>如果拉取请求引入了具有与列表匹配的许可证的依赖项，该操作将失败。|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | 可选 | 包含表示要支持的生成环境的字符串列表（`development`、`runtime`、`unknown`）。 </br>对于在与列表匹配的范围内引入漏洞的拉取请求，该操作将失败。|{% endif %} | `allow-ghsas` | 可选 | 包含检测过程中可以跳过的 {% data variables.product.prodname_advisory_database %} ID 列表。 可以在 [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories) 中找到此参数的可能值。 | | `config-file` | 可选 | 指定配置文件的路径。 配置文件可以是存储库的本地文件，也可以是位于外部存储库的文件。| | `external-repo-token` | 可选 | 如果文件驻留在专用外部存储库中，则指定用于提取配置文件的令牌。 令牌必须具有该存储库的读取权限。|

{% ifversion dependency-review-action-licenses %} {% tip %}

提示：`allow-licenses` 和 `deny-licenses` 选项互斥。

{% endtip %} {% endif %}

## 配置 {% data variables.product.prodname_dependency_review_action %}

可以通过两种方法配置 {% data variables.product.prodname_dependency_review_action %}： 
- 在工作流文件中内联配置选项。 
- 在工作流文件中引用配置文件。

请注意，所有示例使用操作 (`v3`) 的短版本号，而不是 semver 版本号（例如，`v3.0.8`）。 这可确保使用操作的最新次要版本。
### 使用内联配置设置 {% data variables.product.prodname_dependency_review_action %}

1. 将新的 YAML 工作流添加到 `.github/workflows` 文件夹。   
   
   {% ifversion ghes %}对于 `runs-on`，默认标签为 `self-hosted`。 可以将默认标签替换为任何运行器的标签。{% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. 指定您的设置。   

   此 {% data variables.product.prodname_dependency_review_action %} 示例文件说明了如何使用可用的配置选项。
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### 使用配置文件设置 {% data variables.product.prodname_dependency_review_action %}

1. 将新的 YAML 工作流添加到 `.github/workflows` 文件夹，并使用 `config-file` 指定正在使用配置文件。

   {% ifversion ghes %}对于 `runs-on`，默认标签为 `self-hosted`。 可以将默认标签替换为任何运行器的标签。{% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. 在指定路径中创建配置文件。   

   此 YAML 示例文件说明了如何使用可用的配置选项。 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
有关配置选项的更多详细信息，请参阅 [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme)。
{% endif %}
