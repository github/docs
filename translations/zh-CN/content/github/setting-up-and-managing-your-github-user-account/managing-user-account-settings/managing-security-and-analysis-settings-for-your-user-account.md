---
title: 管理用户帐户的安全和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
versions:
  free-pro-team: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
---

### 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可保护您的仓库。 本主题介绍如何管理所有现有或新仓库的安全和分析功能。

您仍然可以管理单个仓库的安全和分析功能。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

关于仓库级别安全的概述，请参阅“[保护您的仓库](/code-security/getting-started/securing-your-repository)”。

### 启用或禁用现有仓库的功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. （可选）为组织中的新仓库默认启用该功能。 ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. 单击 **Disable FEATURE（禁用功能）**或 **Enable FEATURE（启用功能）**以禁用或启用您拥有的所有仓库的功能。 ![用于禁用或启用功能的按钮](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

{% data reusables.security.displayed-information %}

### 对新仓库启用或禁用功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. 在功能右侧的“Configure security and analysis features（配置安全和分析功能）”下，默认对组织中的新仓库启用或禁用该功能。 ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### 延伸阅读

- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
{% if currentVersion == "free-pro-team@latest" %}- "[自动更新依赖项](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
