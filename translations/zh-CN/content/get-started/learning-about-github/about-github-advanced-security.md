---
title: 关于 GitHub 高级安全性
intro: '{% data variables.product.prodname_dotcom %} 为拥有 {% data variables.product.prodname_advanced_security %} 许可的客户提供额外的安全功能。{% ifversion fpt or ghec %} 这些功能还对 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库启用。{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: d3bb278c4e6f19bed12dc60d1e2cdbcc99f7329b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525727'
---
## 关于 {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} 有许多功能可帮助您改进和维护代码的质量。 其中一些功能包含在所有计划中{% ifversion not ghae %}，例如依赖项关系图和 {% data variables.product.prodname_dependabot_alerts %}{% endif %}。 其他安全功能需要 {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} 许可证才能在 {% data variables.product.prodname_dotcom_the_website %}{% endif %} 上的公共存储库之外的存储库上运行。{% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security)。{% endif %}

{% ifversion ghes or ghec %}有关购买 {% data variables.product.prodname_GH_advanced_security %} 许可证的信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)。”{% elsif ghae %}在 beta 版期间，{% data variables.product.prodname_ghe_managed %} 上的 {% data variables.product.prodname_GH_advanced_security %} 是免费的。{% elsif fpt %}若要购买 {% data variables.product.prodname_GH_advanced_security %} 许可证，必须使用 {% data variables.product.prodname_enterprise %}。 有关使用 {% data variables.product.prodname_GH_advanced_security %} 升级到 {% data variables.product.prodname_enterprise %} 的信息，请参阅“[GitHub 产品](/get-started/learning-about-github/githubs-products)”和“[关于 {% data variables.product.prodname_GH_advanced_security %} 计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”。{% endif %}

{% ifversion not fpt %}

## 关于 {% data variables.product.prodname_advanced_security %} 功能

{% data variables.product.prodname_GH_advanced_security %} 许可提供以下额外功能：

- **{% data variables.product.prodname_code_scanning_capc %}** - 搜索代码中潜在的安全漏洞和编码错误。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”。

- {% data variables.product.prodname_secret_scanning_caps %} - 检测已签入存储库的机密，例如密钥和令牌。{% ifversion secret-scanning-push-protection %} 如果启用了推送保护，则还会在机密被推送到存储库时检测这些机密。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)”和“[使用 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。{% else %}有关详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)”。{% endif %}

- **依赖关系评审** - 显示更改对依赖项的完整影响，并在合并拉取请求之前查看全部有漏洞的版本的详细信息。 有关详细信息，请参阅“[关于依赖项检查](/code-security/supply-chain-security/about-dependency-review)”。

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae-issue-7114 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **安全概述** - 查看组织的安全配置和警报，并识别风险最大的存储库。 有关详细信息，请参阅“[关于安全概述](/code-security/security-overview/about-the-security-overview)”。
{% endif %}

{% ifversion fpt or ghec %} 下表总结了公共和专用存储库的 {% data variables.product.prodname_GH_advanced_security %} 功能的可用性。

|                   | 公共存储库           | 不含 {% data variables.product.prodname_advanced_security %} 的私有存储库 | 包含 {% data variables.product.prodname_advanced_security %} 的私有存储库 |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| 代码扫描     | 是                         | 否                                           | 是                                        |
| 机密扫描   | 是（功能受限） | 否                                           | 是                                       |
| 依赖项检查 | 是                         | 否                                           | 是                                       |
{% endif %}

有关正在开发的 {% data variables.product.prodname_advanced_security %} 功能的信息，请参阅“[{% data variables.product.prodname_dotcom %} 公共路线图](https://github.com/github/roadmap)”。 有关所有安全功能的概述，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

{% ifversion fpt or ghec %} {% data variables.product.prodname_GH_advanced_security %} 功能已针对 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库启用。 将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 一起使用的组织还可以为私有和内部存储库启用这些功能。 {% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features)。{% endif %} {% endif %}

{% ifversion ghes > 3.1 or ghec or ghae %}
## 在企业中部署 GitHub Advanced Security

如需了解在高级别规划 {% data variables.product.prodname_GH_advanced_security %} 部署所需了解的内容，请参阅“[大规模采用 {% data variables.product.prodname_GH_advanced_security %}](/code-security/adopting-github-advanced-security-at-scale)”。

{% endif %}

{% ifversion not fpt %}
## 启用 {% data variables.product.prodname_advanced_security %} 功能

{%- ifversion ghes %} 站点管理员必须为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_advanced_security %}，然后才能使用这些功能。 有关详细信息，请参阅“[配置高级安全功能](/admin/configuration/configuring-advanced-security-features)”。

设置系统后，您可以在组织或仓库级别启用和禁用这些功能。

{%- elsif ghec %} 对于公共存储库，这些功能是永久性的，仅当更改项目的可见性使代码不再公开时才会禁用。

对于其他仓库，一旦您拥有企业帐户的许可，就可以在组织或仓库级别启用和禁用这些功能。

{%- elsif ghae %} 可以在组织或存储库级别启用和禁用这些功能。
{%- endif %} 有关详细信息，请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理存储库的安全性和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

{% ifversion ghec or ghes %} 如果有企业帐户，则整个企业的许可证使用情况将显示在企业许可证页上。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”。
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## 关于 {% data variables.product.prodname_advanced_security %} 的入门工作流程

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

有关入门工作流的详细信息，请参阅“[使用入门工作流设置 {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)”和“[使用入门工作流](/actions/using-workflows/using-starter-workflows)”。

{% endif %}

{% ifversion ghec or ghes or ghae %}
## 延伸阅读

- [在企业帐户中强制实施 {% data variables.product.prodname_advanced_security %} 策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)

{% endif %} {% endif %}
