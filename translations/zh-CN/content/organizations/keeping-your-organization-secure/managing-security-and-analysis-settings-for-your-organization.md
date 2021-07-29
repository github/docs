---
title: 管理组织的安全性和分析设置
intro: '您可以控制功能以保护组织在 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可帮助保护组织中的仓库。 您可以管理成员在组织中创建的所有现有或新仓库的安全性和分析功能。 {% if currentVersion == "free-pro-team@latest" %}如果您拥有 {% data variables.product.prodname_GH_advanced_security %} 许可，则您还可以管理对这些功能的访问。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### 显示安全和分析设置

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

显示的页面允许您为组织中的仓库启用或禁用所有安全和分析功能。

{% if currentVersion == "free-pro-team@latest" %}如果您的组织属于具有 {% data variables.product.prodname_GH_advanced_security %} 许可的企业，则该页面还包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。 使用 {% data variables.product.prodname_GH_advanced_security %} 的任何仓库都列在页面底部。{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}如果您具有 {% data variables.product.prodname_GH_advanced_security %} 许可，则该页面还包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。 使用 {% data variables.product.prodname_GH_advanced_security %} 的任何仓库都列在页面底部。{% endif %}

{% if currentversion == "github-ae@latest" %}该页面还将包含启用和禁用 {% data variables.product.prodname_advanced_security %} 功能的选项。{% endif %}

### 为所有现有仓库启用或禁用功能

您可以启用或禁用所有仓库的功能。 {% if currentVersion == "free-pro-team@latest" %}您的更改对组织中仓库的影响取决于其可见性：

- **依赖项图** - 您的更改仅影响私有仓库，因为该功能对公共仓库始终启用。
- **{% data variables.product.prodname_dependabot_alerts %}** - 您的更改影响所有仓库。
- **{% data variables.product.prodname_dependabot_security_updates %}** - 您的更改影响所有仓库。
- **{% data variables.product.prodname_GH_advanced_security %}** - 您的更改仅影响私有仓库，因为 {% data variables.product.prodname_GH_advanced_security %} 和相关功能对公共仓库始终启用。
- **{% data variables.product.prodname_secret_scanning_caps %}** - 您的更改仅影响还启用了 {% data variables.product.prodname_GH_advanced_security %} 的私有仓库。 {% data variables.product.prodname_secret_scanning_caps %} 对公共仓库始终启用。{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
2. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}如果您的 {% data variables.product.prodname_GH_advanced_security %} 许可中没有可用的席位，对“{% data variables.product.prodname_GH_advanced_security %}”的控制将会禁用。{% endif %}
   {% if currentVersion == "free-pro-team@latest" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@3.0" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/enterprise/3.0/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "enterprise-server@3.0" %}
3. （可选）为组织中的新仓库默认启用该功能。
   {% if currentVersion == "free-pro-team@latest" %}
   ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![新仓库的"Enable by default（默认启用）"选项](/assets/images/enterprise/3.0/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "enterprise-server@3.0" %}
4. 单击 **Disable FEATURE（禁用功能）**或 **Enable FEATURE（启用功能）**以禁用或启用组织中所有仓库的功能。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于禁用或启用功能的按钮](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![用于禁用或启用功能的按钮](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-secret-scanning.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
3. 单击 **Enable/Disable all（全部启用/禁用）**或 **Enable/Disable for eligible repositories（对合格的仓库启用/禁用）**以确认更改。 ![用于为组织中所有符合条件的仓库启用功能的按钮](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

### 添加新仓库时自动启用或禁用功能

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
2. 在功能右边的“Configure security and analysis features（配置安全性和分析功能）”下，默认为组织中的新仓库{% if currentVersion == "free-pro-team@latest" %} 或所有私有仓库{% endif %} 启用或禁用该功能。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.1" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![用于对新仓库启用或禁用功能的复选框](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 允许 {% data variables.product.prodname_dependabot %} 访问私有依赖项

{% data variables.product.prodname_dependabot %} 可以检查项目中过时的依赖项引用，并自动生成拉取请求来更新它们。 为此，{% data variables.product.prodname_dependabot %} 必须有权访问所有目标依赖项文件。 通常，如果一个或多个依赖项无法访问，版本更新将失败。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot %} 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。

默认情况下，{% data variables.product.prodname_dependabot %} 无法更新位于私有仓库或私有仓库注册表中的依赖项。 但是，如果依赖项位于与使用该依赖项之项目相同的组织内的私有 {% data variables.product.prodname_dotcom %} 仓库中，则可以通过授予对主机仓库的访问权限来允许 {% data variables.product.prodname_dependabot %} 成功更新版本。

如果您的代码依赖于私有注册表中的软件包，您可以在仓库级别进行配置，允许 {% data variables.product.prodname_dependabot %} 更新这些依赖项的版本。 可通过将身份验证详细信息添加到仓库的 _dependabot.yml_ 文件来做到这一点。 更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)。”

要允许 {% data variables.product.prodname_dependabot %} 访问私有 {% data variables.product.prodname_dotcom %} 仓库：

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 在“{% data variables.product.prodname_dependabot %} 私有仓库访问”下，单击 **Add private repositories（添加私有仓库）**或 **Add internal and private repositories（添加内部和私有仓库）**。 ![添加仓库按钮](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. 开始键入要允许的仓库的名称。 ![添加仓库按钮](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. 单击您想要允许的仓库。

1. （可选）要从列表中删除仓库，在仓库右侧单击 {% octicon "x" aria-label="The X icon" %}。 !["X" 按钮来删除仓库。](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### 从组织中的个别仓库中移除对 {% data variables.product.prodname_GH_advanced_security %} 的访问权限

您可以从仓库的“Settings（设置）”选项卡管理对仓库 {% data variables.product.prodname_GH_advanced_security %} 功能的访问。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。 但您也可以从“Settings（设置）”选项卡对仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 功能。

1. 转到组织的安全和分析设置。 更多信息请参阅“[显示安全和分析设置](#displaying-the-security-and-analysis-settings)”。
1. 要查看您组织中启用 {% data variables.product.prodname_GH_advanced_security %} 的所有仓库的列表，请滚动到“{% data variables.product.prodname_GH_advanced_security %} 仓库”部分。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) 表格列出了每个仓库的唯一提交者数量。 这是您可以通过移除 {% data variables.product.prodname_GH_advanced_security %} 访问权限释放的席位数。 {% if currentVersion == "free-pro-team@latest" %}更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)”。{% else %}更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的许可](/admin/advanced-security/about-licensing-for-github-advanced-security)”。{% endif %}
1. 要从仓库删除对 {% data variables.product.prodname_GH_advanced_security %} 的访问，并释放任何提交者使用的对仓库唯一的席位，请单击相邻的 {% octicon "x" aria-label="X symbol" %}。
1. 在确认对话框中，单击击 **Remove repository（移除仓库）** 以移除对 {% data variables.product.prodname_GH_advanced_security %} 功能的访问权限。

{% note %}

**注意：**如果移除对仓库 {% data variables.product.prodname_GH_advanced_security %} 的访问权限， 您应该与受影响的开发团队进行沟通，以便他们知道改变的意图。 这确保他们不会浪费时间调试运行失败的代码扫描。

{% endnote %}

{% endif %}

### 延伸阅读

- "[保护您的仓库](/code-security/getting-started/securing-your-repository)"
- "[关于密码扫描](/github/administering-a-repository/about-secret-scanning)"{% if currentVersion == "free-pro-team@latest" %}
- "[自动更新依赖项](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}{% if currentVersion != "github-ae@latest" %}
- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"{% endif %}
