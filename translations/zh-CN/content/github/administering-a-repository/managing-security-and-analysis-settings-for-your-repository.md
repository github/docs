---
title: 管理仓库的安全性和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" %}
### 为公共仓库启用或禁用安全和分析功能

您可以管理公共仓库的一部分安全和分析功能。 其他功能是永久启用的，包括依赖项图和密码扫描。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 ![公共仓库中"Configure security and analysis（配置安全性和分析）"功能的"Enable（启用）"或"Disable（禁用）"按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### 为私有仓库启用或禁用安全和分析功能{% if currentVersion == "free-pro-team@latest" %}{% endif %}

您可以管理{% if currentVersion == "free-pro-team@latest" %}私有或内部 {% endif %}仓库的安全性和分析功能。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} 如果您的组织属于拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业，则额外选项可用。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 “
{% data variables.product.prodname_GH_advanced_security %}”的控制被禁用（如果您的企业没有可用的 {% data variables.product.prodname_advanced_security %} 许可）。{% if currentVersion == "free-pro-team@latest" %}
  !["Configure security and analysis（配置安全性和分析）"功能的"Enable（启用）"或"Disable（禁用）"按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png){% else %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  {% note %}
**注意：**如果禁用

  {% data variables.product.prodname_GH_advanced_security %}、{% if currentVersion == "free-pro-team@latest" %}依赖项审核、{% endif %}{% data variables.product.prodname_secret_scanning %} 和 {% data variables.product.prodname_code_scanning %} 都会禁用。 任何工作流程、SARIF上传或 {% data variables.product.prodname_code_scanning %} 的 API 调用都将失败。
  {% endnote %}
  {% endif %}
  {% if currentVersion == "enterprise-server@3.0" %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable（启用）"或"Disable（禁用）"按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% if currentVersion == "github-ae@latest" %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 在可以为您的仓库启用
“{% data variables.product.prodname_secret_scanning %}”之前，您可能需要先启用 {% data variables.product.prodname_GH_advanced_security %}。
   ![为您的仓库启用或禁用 {% data variables.product.prodname_GH_advanced_security %} 或 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

### 授予对安全警报的访问权限

为组织中的仓库启用 {% if currentVersion != "github-ae@latest" %}{% data variables.product.prodname_dependabot %} 或 {% endif %}{% data variables.product.prodname_secret_scanning %} 警报之后，组织所有者和仓库管理员默认可以查看警报。 您可以授予其他团队和人员访问仓库的警报。

{% note %}

组织所有者和仓库管理员只能向具有仓库写入权限的人员授予安全警报的查看权限，如 {% data variables.product.prodname_secret_scanning %} 警报。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Access to alerts（访问警报）”下，在搜索字段中开始键入您要查找的个人或团队的名称，然后单击匹配列表中的名称。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于授予人员或团队访问安全警报的搜索字段](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![用于授予人员或团队访问安全警报的搜索字段](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![用于授予人员或团队访问安全警报的搜索字段](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}

5. 单击 **Save changes（保存更改）**。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   ![用于更改安全警报设置的"Save changes（保存更改）"按钮](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
    {% if currentVersion == "github-ae@latest" %}
   ![用于更改安全警报设置的"Save changes（保存更改）"按钮](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

### 删除对安全警报的访问权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Access to alerts（访问警报）”下，在要删除其访问权限的个人或团队的右侧，单击
{% octicon "x" aria-label="X symbol" %}。
   {% if currentVersion == "free-pro-team@latest" %}
   ![用于删除某人对您仓库的安全警报访问权限的 "x" 按钮](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![用于删除某人对您仓库的安全警报访问权限的 "x" 按钮](/assets/images/help/repository/security-and-analysis-security-alerts-username-x-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![用于删除某人对您仓库的安全警报访问权限的 "x" 按钮](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}

### 延伸阅读

- “[关于保护仓库](/github/administering-a-repository/about-securing-your-repository)”
- “[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”
