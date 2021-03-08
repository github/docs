---
title: 配置 Dependabot 安全更新
intro: '您可以使用 {% data variables.product.prodname_dependabot_security_updates %} 或手动拉取请求轻松地更新有漏洞的依赖项。'
shortTitle: 配置 Dependabot 安全更新
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
versions:
  free-pro-team: '*'
---

### 关于配置 {% data variables.product.prodname_dependabot_security_updates %}

您可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

您可以对个别仓库或所有由您的用户帐户或组织拥有的仓库禁用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅下面的“[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)”。

{% data reusables.dependabot.dependabot-tos %}

### 支持的仓库

{% data variables.product.prodname_dotcom %} 自动为符合这些前提条件的每个仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。

{% note %}

**注**：您可以手动启用 {% data variables.product.prodname_dependabot_security_updates %}，即使仓库不符合以下某些先决条件。 例如，您可以按照“[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)”中的说明，在复刻上或对于不直接支持的包管理器启用 {% data variables.product.prodname_dependabot_security_updates %}。

{% endnote %}

| 自动启用前提条件                                                                                  | 更多信息                                                                                                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 存储库不是复刻                                                                                   | "[关于复刻](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                  |
| 仓库未存档                                                                                     | "[存档仓库](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                       |
| 仓库是公共的，或者仓库是私有的但您在仓库的设置中启用了 {% data variables.product.prodname_dotcom %} 只读分析、依赖关系图和漏洞警报。 | “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”。    |
| 仓库包含软件包生态系统中 {% data variables.product.prodname_dotcom %} 支持的依赖项清单文件                      | "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                    |
| {% data variables.product.prodname_dependabot_security_updates %} 未对仓库禁用                | "[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)" |
| 仓库尚未使用集成进行依赖项管理                                                                           | “[关于集成](/github/customizing-your-github-workflow/about-integrations)”                                                                      |

如果未为存储库启用安全更新，并且您不知道原因么，请先尝试使用以下程序部分的说明启用它们。 如果安全更新还是不工作，您可以[联系支持](https://support.github.com/contact)。

### 管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}

您可以对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}（见下文）。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅“[管理用户帐户的安全和分析设置](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)”或“[管理组织的安全和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”。

{% data variables.product.prodname_dependabot_security_updates %} 需要特定的仓库设置。 更多信息请参阅“[支持的仓库](#supported-repositories)”。

#### 对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. 在“Configure security and analysis features（配置安全和分析功能）”下，在“{% data variables.product.prodname_dependabot %} security updates（安全更新）”的右侧，单击 **Enable（启用）**或 **Disable（禁用）**。 !["配置安全和分析功能"部分中启用 {% data variables.product.prodname_dependabot_security_updates %} 的按钮](/assets/images/help/repository/enable-dependabot-security-updates-button.png)

### 延伸阅读

- “[关于有易受攻击依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”
- “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”
- "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
