---
title: 关于 GitHub 高级安全
intro: '{% data variables.product.prodname_dotcom %} 为拥有 {% data variables.product.prodname_advanced_security %} 许可的客户提供额外的安全功能。 这些功能还对 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库启用。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### 关于 {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} 有许多功能可帮助您改进和维护代码的质量。 其中某些功能包含在所有计划中，例如依赖关系图和 {% data variables.product.prodname_dependabot_alerts %}。 其他功能需要 {% data variables.product.prodname_GH_advanced_security %} 许可才能在 {% data variables.product.prodname_dotcom_the_website %} 公共仓库以外的仓库上运行。 （即，{% data variables.product.prodname_dotcom_the_website %} 上的私有和内部仓库，以及 {% data variables.product.prodname_ghe_server %} 上的所有仓库。）

关于所有安全功能的概述，请参阅“[关于保护仓库](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)”。 有关安全功能相关操作的权限要求的信息，请参阅“[组织的仓库权限级别](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)”。

### 关于 {% data variables.product.prodname_advanced_security %} 功能

{% data variables.product.prodname_GH_advanced_security %} 许可提供以下额外功能：

- **{% data variables.product.prodname_code_scanning_capc %}** - 搜索代码中潜在的安全漏洞和编码错误。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

- **{% data variables.product.prodname_secret_scanning_caps %}** - 检测已检入仓库的密码（例如密钥和令牌）。 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)”。

{% if currentVersion == "free-pro-team@latest" %}
- **依赖项审查** - 在合并拉取请求之前显示依赖项更改的全部影响以及任何有漏洞版本的详情。 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。
{% endif %}

有关正在开发中的 {% data variables.product.prodname_advanced_security %} 功能，请参阅“[{% data variables.product.prodname_dotcom %} 公开路线图](https://github.com/github/roadmap)”。

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### 在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

站点管理员必须为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_advanced_security %}，您才能使用这些功能。 更多信息请参阅“[配置高级安全功能](/admin/configuration/configuring-advanced-security-features)”。

设置系统后，您可以在组织或仓库级别启用和禁用这些功能。 更多信息请参阅“[管理组织的安全性和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
有关购买

{% data variables.product.prodname_GH_advanced_security %} 许可的信息，请联系 {% data variables.contact.contact_enterprise_sales %}。
{% endif %}

### 在 {% data variables.product.prodname_dotcom_the_website %} 上启用 {% data variables.product.prodname_advanced_security %} 功能

对于 {% data variables.product.prodname_dotcom_the_website %} 上的公共仓库，这些功能是永久性的，仅当您更改项目的可见性使代码不再公开时才会禁用。

对于所有其他仓库，一旦您拥有许可，就可以在组织或仓库级别启用和禁用这些功能。 {% if currentVersion == "free-pro-team@latest" %}更多信息请参阅“[管理组织的安全性和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”或“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
有关购买

{% data variables.product.prodname_GH_advanced_security %} 许可的信息，请联系 {% data variables.contact.contact_enterprise_sales %}。
{% endif %}
