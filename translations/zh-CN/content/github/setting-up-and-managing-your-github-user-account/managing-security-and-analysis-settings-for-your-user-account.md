---
title: Managing security and analysis settings for your user account
intro: 'You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
---

### 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)."

### 启用或禁用现有仓库的功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. （可选）为组织中的新仓库默认启用该功能。 ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own. ![用于禁用或启用功能的按钮](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

### 对新仓库启用或禁用功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. 在功能右侧的“Configure security and analysis features（配置安全和分析功能）”下，默认对组织中的新仓库启用或禁用该功能。 ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### 延伸阅读

- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
{% if currentVersion == "free-pro-team@latest" %}- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
