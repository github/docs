---
title: 管理组织的安全性和分析设置
intro: '您可以控制功能以保护组织在 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: 组织所有者可以管理组织中仓库的安全性和分析设置。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可帮助保护组织中的仓库。 您可以管理成员在组织中创建的所有现有或新仓库的安全性和分析功能。 {% if currentVersion == "free-pro-team@latest" %}如果您拥有 {% data variables.product.prodname_GH_advanced_security %} 许可，则您还可以管理对这些功能的访问。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### 显示安全和分析设置

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

显示的页面允许您为组织中的仓库启用或禁用所有安全和分析功能。 {% if currentVersion == "free-pro-team@latest" %}如果您的组织或拥有它的企业具有 {% data variables.product.prodname_GH_advanced_security %} 许可，则该页面还包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。

![{% data variables.product.prodname_GH_advanced_security %} 功能](/assets/images/help/organizations/security-and-analysis-highlight-ghas.png)
{% endif %}

### 为所有现有仓库启用或禁用功能

您可以启用或禁用所有仓库的功能。 {% if currentVersion == "free-pro-team@latest" %}您的更改对组织中仓库的影响取决于其可见性：

- **依赖项图** - 您的更改仅影响私有仓库，因为该功能对公共仓库始终启用。
- **{% data variables.product.prodname_dependabot_alerts %}** - 您的更改影响所有仓库。
- **{% data variables.product.prodname_dependabot_security_updates %}** - 您的更改影响所有仓库。
- **{% data variables.product.prodname_GH_advanced_security %}** - 您的更改仅影响私有仓库，因为 {% data variables.product.prodname_GH_advanced_security %} 和相关功能对公共仓库始终启用。
- **{% data variables.product.prodname_secret_scanning_caps %}** - 您的更改仅影响还启用了 {% data variables.product.prodname_GH_advanced_security %} 的私有仓库。 {% data variables.product.prodname_secret_scanning_caps %} 对公共仓库始终启用。{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。
   {% if currentVersion == "free-pro-team@latest" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghe.png)
   {% endif %}
2. （可选）为组织中的新仓库默认启用该功能。
   {% if currentVersion == "free-pro-team@latest" %}
   ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default-ghe.png)
   {% endif %}
1. 单击 **Disable FEATURE（禁用功能）**或 **Enable FEATURE（启用功能）**以禁用或启用组织中所有仓库的功能。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于禁用或启用功能的按钮](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![用于禁用或启用功能的按钮](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning-ghe.png)
   {% endif %}

### 添加新仓库时自动启用或禁用功能

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 在功能右侧的“Configure security and analysis features（配置安全和分析功能）”下，默认对组织中的新仓库
{% if currentVersion == "free-pro-team@latest" %} 或所有新私有仓库{% endif %} 启用或禁用该功能。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghe.png)
   {% endif %}

   {% data reusables.advanced-security.note-org-enable-uses-seats %}

{% if currentVersion == "free-pro-team@latest" %}

### 允许 Dependabot 访问私有仓库

{% data reusables.dependabot.beta-note %}

{% data variables.product.prodname_dependabot %} 可以检查项目中过时的依赖项引用，并自动生成拉取请求来更新它们。 为此，{% data variables.product.prodname_dependabot %} 必须有权访问所有目标依赖项文件。 通常，如果一个或多个依赖项无法访问，版本更新将失败。

默认情况下，{% data variables.product.prodname_dependabot %} 无法更新位于私有仓库中的依赖项。 但是，如果依赖项位于与使用该依赖项之项目相同的组织内的私有 {% data variables.product.prodname_dotcom %} 仓库中，则可以通过授予对主机仓库的访问权限来允许 {% data variables.product.prodname_dependabot %} 成功更新版本。 有关更多信息，包括对私有依赖项支持的限制详情，请参阅“[关于 Dependabot 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 在“{% data variables.product.prodname_dependabot %} repository access（仓库访问权限）”部分，单击设置按钮**{% octicon "gear" aria-label="The Gear icon" %}**。 ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) 将显示一个列表，显示组织中的所有私有仓库。 ![仓库列表](/assets/images/help/organizations/repositories-dialog.png)
1. 选择 {% data variables.product.prodname_dependabot %} 可以访问的仓库。
1. 单击 **Select repositories（选择仓库）**。
{% endif %}

### 延伸阅读

- “[关于保护仓库](/github/administering-a-repository/about-securing-your-repository)”
- "[关于密码扫描](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[自动更新依赖项](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
