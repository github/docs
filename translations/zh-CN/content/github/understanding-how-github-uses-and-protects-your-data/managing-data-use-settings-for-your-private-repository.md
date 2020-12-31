---
title: 管理私有仓库的数据使用设置
intro: '为帮助 {% data variables.product.product_name %} 连接到相关的工具、人员、项目和信息，您可以配置私有仓库的数据使用。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### 关于私有仓库的数据使用

When you enable data use for your private repository, you'll be able to access the dependency graph, where you can track your repository's dependencies and receive {% data variables.product.prodname_dependabot_alerts %} when {% data variables.product.product_name %} detects vulnerable dependencies. 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

### 启用或禁用数据使用功能

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable（禁用）**或 **Enable（启用）**。 !["Configure security and analysis（配置安全性和分析）"功能的"Enable（启用）"或"Disable（禁用）"按钮](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### 延伸阅读

- "[关于 {% data variables.product.prodname_dotcom %} 对数据的使用](/articles/about-github-s-use-of-your-data)"
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
