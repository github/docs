---
title: 关于 GitHub 高级安全
intro: '{% data variables.product.prodname_dotcom %} 允许客户在 {% data variables.product.prodname_advanced_security %} 许可下使用额外的安全功能。{% ifversion fpt or ghec %} 这些功能也已对 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库启用。{% endif %}'
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
---

## 关于 {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} 有许多功能可帮助您改进和维护代码的质量。 其中一些包含在所有计划中{% ifversion not ghae %}，如依赖关系图和 {% data variables.product.prodname_dependabot_alerts %}{% endif %}。 其他功能需要 {% data variables.product.prodname_GH_advanced_security %} 许可才能在 {% data variables.product.prodname_dotcom_the_website %} 公共仓库以外的仓库上运行。

{% ifversion fpt or ghes > 3.0 or ghec %}For more information about purchasing {% data variables.product.prodname_GH_advanced_security %}, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% endif %}

## 关于 {% data variables.product.prodname_advanced_security %} 功能

{% data variables.product.prodname_GH_advanced_security %} 许可提供以下额外功能：

- **{% data variables.product.prodname_code_scanning_capc %}** - 搜索代码中潜在的安全漏洞和编码错误。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

- **{% data variables.product.prodname_secret_scanning_caps %}** - 检测已检入仓库的密码（例如密钥和令牌）。 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)”。

{% ifversion fpt or ghes > 3.1 or ghec or ghae-issue-4864 %}
- **依赖项审查** - 在合并拉取请求之前显示依赖项更改的全部影响以及任何有漏洞版本的详情。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。
{% endif %}

有关正在开发中的 {% data variables.product.prodname_advanced_security %} 功能，请参阅“[{% data variables.product.prodname_dotcom %} 公开路线图](https://github.com/github/roadmap)”。 关于所有安全功能的概述，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

{% ifversion ghes or ghec %}

## Deploying GitHub Advanced Security in your enterprise

To learn about what you need to know to plan your {% data variables.product.prodname_GH_advanced_security %} deployment at a high level, see "[Overview of {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/overview-of-github-advanced-security-deployment)."

To review the rollout phases we recommended in more detail, see "[Deploying {% data variables.product.prodname_GH_advanced_security %} in your enterprise](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)."

{% endif %}

{% ifversion ghes or ghae %}
## 在 {% data variables.product.product_name %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

{% ifversion ghes %}
站点管理员必须为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_advanced_security %}，您才能使用这些功能。 更多信息请参阅“[配置高级安全功能](/admin/configuration/configuring-advanced-security-features)”。
{% endif %}

设置系统后，您可以在组织或仓库级别启用和禁用这些功能。 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

{% endif %}

{% ifversion not ghae %}
## 在 {% data variables.product.prodname_dotcom_the_website %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

对于 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库，这些功能是永久性的，仅当您更改项目的可见性使代码不再公开时才会禁用。

对于其他仓库，一旦您拥有企业帐户的许可，就可以在组织或仓库级别启用和禁用这些功能。 {% ifversion fpt or ghes > 3.0 or ghec %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
如果您有企业帐户，则整个企业的许可使用情况将显示在您的企业许可页面上。 更多信息请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”。

{% endif %}

{% ifversion ghec or ghes > 3.0 or ghae-next  %}

## 延伸阅读

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
