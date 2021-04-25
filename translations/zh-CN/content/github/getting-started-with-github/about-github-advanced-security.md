---
title: 关于 GitHub 高级安全
intro: '{% data variables.product.prodname_dotcom %} 允许客户在 {% data variables.product.prodname_advanced_security %} 许可下使用额外的安全功能。{% if currentVersion == "free-pro-team@latest" %} 这些功能也已对 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库启用。{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - 安全
---

### 关于 {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} 有许多功能可帮助您改进和维护代码的质量。 其中一些包含在所有计划中{% if currentVersion != "github-ae@latest" %}，如依赖关系图和 {% data variables.product.prodname_dependabot_alerts %}{% endif %}。 其他功能需要 {% data variables.product.prodname_GH_advanced_security %} 许可才能在 {% data variables.product.prodname_dotcom_the_website %} 公共仓库以外的仓库上运行。

{% if currentVersion == "free-pro-team@latest" %}更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)”。{% elsif currentVersion ver_gt "enterprise-server@2.22" %}有关购买 {% data variables.product.prodname_GH_advanced_security %} 许可证的信息，请联系 {% data variables.contact.contact_enterprise_sales %}。{% elsif currentVersion == "github-ae@latest" %}在测试期间，{% data variables.product.prodname_ghe_managed %} 上的 {% data variables.product.prodname_GH_advanced_security %} 免费使用。{% endif %}

### 关于 {% data variables.product.prodname_advanced_security %} 功能

{% data variables.product.prodname_GH_advanced_security %} 许可提供以下额外功能：

- **{% data variables.product.prodname_code_scanning_capc %}** - 搜索代码中潜在的安全漏洞和编码错误。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

- **{% data variables.product.prodname_secret_scanning_caps %}** - 检测已检入仓库的密码（例如密钥和令牌）。 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)”。

{% if currentVersion == "free-pro-team@latest" %}
- **依赖项审查** - 在合并拉取请求之前显示依赖项更改的全部影响以及任何有漏洞版本的详情。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。
{% endif %}

有关正在开发中的 {% data variables.product.prodname_advanced_security %} 功能，请参阅“[{% data variables.product.prodname_dotcom %} 公开路线图](https://github.com/github/roadmap)”。 关于所有安全功能的概述，请参阅“[关于保护仓库](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)”。

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 在 {% data variables.product.product_name %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

{% if currentVersion ver_gt "enterprise-server@2.22" %}
站点管理员必须为
{% data variables.product.product_location %} 启用 {% data variables.product.prodname_advanced_security %}，您才能使用这些功能。 更多信息请参阅“[配置高级安全功能](/admin/configuration/configuring-advanced-security-features)”。
{% endif %}

设置系统后，您可以在组织或仓库级别启用和禁用这些功能。 For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### 在 {% data variables.product.prodname_dotcom_the_website %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

对于 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库，这些功能是永久性的，仅当您更改项目的可见性使代码不再公开时才会禁用。

对于其他仓库，一旦您拥有企业帐户的许可，就可以在组织或仓库级别启用和禁用这些功能。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
如果您有企业帐户，则整个企业的许可使用情况将显示在您的企业许可页面上。 更多信息请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 延伸阅读

- "[在企业帐户中执行 {% data variables.product.prodname_advanced_security %} 的策略](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)"

{% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### 延伸阅读

- "[在企业中执行 {% data variables.product.prodname_advanced_security %} 的策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
