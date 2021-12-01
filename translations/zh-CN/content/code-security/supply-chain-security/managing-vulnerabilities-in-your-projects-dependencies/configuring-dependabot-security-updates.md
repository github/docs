---
title: 配置 Dependabot 安全更新
intro: '您可以使用 {% data variables.product.prodname_dependabot_security_updates %} 或手动拉取请求轻松地更新有漏洞的依赖项。'
shortTitle: 配置安全更新
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于配置 {% data variables.product.prodname_dependabot_security_updates %}

您可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

您可以对个别仓库或所有由您的用户帐户或组织拥有的仓库禁用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅下面的“[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)”。

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## 支持的仓库

{% data variables.product.prodname_dotcom %} 自动为符合这些前提条件的每个仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。

{% note %}

**注**：您可以手动启用 {% data variables.product.prodname_dependabot_security_updates %}，即使仓库不符合以下某些先决条件。 例如，您可以按照“[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)”中的说明，在复刻上或对于不直接支持的包管理器启用 {% data variables.product.prodname_dependabot_security_updates %}。

{% endnote %}

| 自动启用前提条件                                                                                  | 更多信息                                                                                                                                                 |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 存储库不是复刻                                                                                   | "[关于复刻](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                            |
| 仓库未存档                                                                                     | "[Archiving repositories](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| 仓库是公共的，或者仓库是私有的但您在仓库的设置中启用了 {% data variables.product.prodname_dotcom %} 只读分析、依赖关系图和漏洞警报。 | “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”。 
{% endif %}
| 仓库包含软件包生态系统中 {% data variables.product.prodname_dotcom %} 支持的依赖项清单文件                      | "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                              |
| {% data variables.product.prodname_dependabot_security_updates %} 未对仓库禁用                | "[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-dependabot-security-updates-for-your-repositories)"           |

如果未为存储库启用安全更新，并且您不知道原因么，请先尝试使用以下程序部分的说明启用它们。 If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## 管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}

您可以对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}（见下文）。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。 更多信息请参阅“[管理用户帐户的安全和分析设置](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% data variables.product.prodname_dependabot_security_updates %} 需要特定的仓库设置。 更多信息请参阅“[支持的仓库](#supported-repositories)”。

### 对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. 在“Configure security and analysis features（配置安全和分析功能）”下，在“{% data variables.product.prodname_dependabot %} security updates（安全更新）”的右侧，单击 **Enable（启用）**或 **Disable（禁用）**。
  {% ifversion fpt or ghec %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-button.png){% else %}!["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}


## 延伸阅读

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec %}
- "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
