---
title: 管理组织的安全性和分析设置
intro: '您可以控制功能以保护组织在 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: 组织所有者可以管理组织中仓库的安全性和分析设置。
versions:
  free-pro-team: '*'
---

### 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可帮助保护组织中的仓库。 您可以管理成员在组织中创建的所有现有或新仓库的安全性和分析功能。
{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Displaying the security and analysis settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable security and analysis features for the repositories in your organization.

### Enabling or disabling a feature for all existing repositories

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
1. （可选）为组织中的新仓库默认启用该功能。 ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
1. 单击 **Disable FEATURE（禁用功能）**或 **Enable FEATURE（启用功能）**以禁用或启用组织中所有仓库的功能。 ![用于禁用或启用功能的按钮](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Enabling or disabling a feature for all new repositories when they are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. 在功能右侧的“Configure security and analysis features（配置安全和分析功能）”下，默认对组织中的新仓库启用或禁用该功能。 ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Allowing Dependabot to access private repositories

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to the targeted dependency files. By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository. For more information, including details of limitations to private dependency support, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. In the "{% data variables.product.prodname_dependabot %} repository access" section, click the settings button **{% octicon "gear" aria-label="The Gear icon" %}**. ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png) A list is displayed showing all of the private repositories in your organization. ![The Repositories list](/assets/images/help/organizations/repositories-dialog.png)
1. Select the repositories that {% data variables.product.prodname_dependabot %} can access.
1. Click **Select repositories**.


### 延伸阅读

{% if currentVersion == "free-pro-team@latest" %}- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[关于密码扫描](/github/administering-a-repository/about-secret-scanning)"
- "[自动更新依赖项](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
