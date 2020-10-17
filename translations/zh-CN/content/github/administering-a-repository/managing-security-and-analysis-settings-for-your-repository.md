---
title: 管理仓库的安全性和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
permissions: 拥有仓库管理员权限的人可以管理仓库的安全性和分析设置。
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

### 启用或禁用安全和分析功能

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable（启用）"或"Disable（禁用）"按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### 授予对 {% data variables.product.prodname_dependabot_alerts %} 的访问

为组织中的仓库启用 {% data variables.product.prodname_dependabot_alerts %} 后，组织所有者和仓库管理员默认可以查看警报。 您可以授予其他团队和人员访问仓库的警报。

{% note %}

组织所有者和仓库管理员只能将查看 {% data variables.product.prodname_dependabot_alerts %} 的权限授予对仓库有写入权限的人员或团队。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Dependabot alerts（Dependabot 警报）”下，在搜索字段中开始键入您要查找的个人或团队的名称，然后单击匹配列表中的名称。 ![用于授予人员或团队访问 Dependabot 警报的搜索字段](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. 单击 **Save changes（保存更改）**。 ![用于更改 Dependabot 警报设置的"Save changes（保存更改）"按钮](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### 删除对 {% data variables.product.prodname_dependabot_alerts %} 的访问

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Dependabot alerts（Dependabot 警报）”下，在要删除其访问权限的个人或团队的右侧，单击 {% octicon "x" aria-label="X symbol" %}。 ![用于删除某人对您仓库的 Dependabot 警报访问权限的 "x" 按钮](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### 延伸阅读

- “[关于保护仓库](/github/administering-a-repository/about-securing-your-repository)”
- “[管理组织的安全性和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”
