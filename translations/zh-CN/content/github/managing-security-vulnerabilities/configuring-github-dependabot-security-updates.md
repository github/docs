---
title: 配置 GitHub Dependabot 安全更新
intro: '您可以使用 {% data variables.product.prodname_dependabot_security_updates %} 或手动拉取请求轻松地更新有漏洞的依赖项。'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_short %} 监控安全通告，如 {% data variables.product.prodname_advisory_database %} 和 [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database)，并在仓库的依赖关系图中检测到新的有漏洞依赖项时自动触发拉取请求。 有关 {% data variables.product.prodname_advisory_database %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#about-the-github-advisory-database)”。

{% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

{% data variables.product.prodname_dependabot_short %} 在有漏洞依赖项的警报中包含拉取请求的链接。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”和“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

每个安全更新都包含快速、安全地查看提议的修复程序并将其合并到项目中所需的全部内容。 这包括漏洞的相关信息，如发行说明、变更日志条目和提交详细信息。 无法访问仓库的 {% data variables.product.prodname_dependabot_short %} 警报的任何人都看不到拉取请求所解决的漏洞详细信息。

当您合并包含安全更新的拉取请求时，仓库的相应警报将被标记为已解决。

{% note %}

**注** 
{% data variables.product.prodname_dependabot_security_updates %} 只解决依赖关系图跟踪的依赖项中的安全漏洞。 安全更新创建的目标不是解决托管在私有仓库中的私有注册表或包中的漏洞。 但是，如果间接或过渡的依赖项已在锁定文件或类似文件中明确定义，则会包含在内。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。 此外，对于被检测出漏洞的依赖项，必须强调 {% data variables.product.prodname_dependabot_security_updates %} 自动使用建议用于锁定文件的修复程序创建拉取请求。

{% endnote %}

您可以为任何使用 {% data variables.product.prodname_dependabot_short %} 警报和依赖关系图的仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。 您可以对个别仓库或所有由您的用户帐户或组织拥有的仓库禁用 {% data variables.product.prodname_dependabot_security_updates %}。 For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)" below.

{% data reusables.dependabot.dependabot-tos %}

### 支持的仓库

{% data variables.product.prodname_dotcom %} 自动为符合这些前提条件的每个仓库启用 {% data variables.product.prodname_dependabot_security_updates %}。

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| 自动启用前提条件                                                                                       | 更多信息                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 存储库不是复刻                                                                                        | "[关于复刻](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                              |
| 仓库未存档                                                                                          | "[存档仓库](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                   |
| 仓库是公共的，或者仓库是私有的但您在仓库的设置中启用了 {% data variables.product.prodname_dotcom %} 只读分析、依赖关系图和漏洞警报。 | “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”。                |
| 仓库包含软件包生态系统中 {% data variables.product.prodname_dotcom %} 支持的依赖项清单文件                      | "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                |
| {% data variables.product.prodname_dependabot_security_updates %} 未对仓库禁用                | "[管理仓库的 {% data variables.product.prodname_dependabot_security_updates %}](#managing-github-dependabot-security-updates-for-your-repositories)" |
| 仓库尚未使用集成进行依赖项管理                                                                                | “[关于集成](/github/customizing-your-github-workflow/about-integrations)”                                                                                  |

如果未为存储库启用安全更新，并且您不知道原因么，请先尝试使用以下程序部分的说明启用它们。 如果安全更新还是不工作，您可以[联系支持](https://support.github.com/contact)。

### 关于兼容性分数

{% data variables.product.prodname_dependabot_security_updates %} 还包括兼容性分数，以便您了解更新漏洞是否可能导致对项目的重大更改。 我们从已生成特定安全更新的公共仓库中查看此前通过的 CI 测试，以了解更新是否会导致测试失败。 更新的兼容性分数是在依赖项的相关版本之间进行更新时，CI 运行被视为通过的百分比。

### Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

您可以对单个仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.prodname_dependabot_security_updates %} 需要特定的仓库设置。 更多信息请参阅“[支持的仓库](#supported-repositories)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 在警报列表的上方，使用下拉菜单并选择或取消选择 **{% data variables.product.prodname_dependabot_short %} security updates（Dependabot 安全更新）**。 ![包含启用 {% data variables.product.prodname_dependabot_security_updates %} 的选项的下拉菜单](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### 延伸阅读

- “[关于有易受攻击依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”
- “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”
- "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
