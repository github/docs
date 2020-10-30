---
title: 配置自动安全更新
intro: 您可以使用自动或手动拉取请求轻松更新易受攻击的依赖项。
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
versions:
  free-pro-team: '*'
---

### 关于自动安全更新

您可以为任何使用安全警报和依赖关系图的仓库启用自动安全更新。 您可以对个别仓库或所有由您的用户帐户或组织拥有的仓库禁用自动安全更新。

收到有关仓库中易受攻击依赖项的安全警报时，您可以使用与安全警报对应的拉取请求中的自动安全更新来解决漏洞。 使用依赖关系图的仓库中提供自动安全更新功能。 默认情况下，{% data variables.product.prodname_dotcom %} 会自动在您的仓库中创建拉取请求，以将易受攻击的依赖项升级到避免漏洞所需的最低安全版本。 如果您愿意，可以禁用自动拉取请求，只在需要时选择手动创建拉取请求以升级依赖项。

自动安全请求包含快速安全地审查并将提议的修复合并到项目中所需的一切，包括有关漏洞的信息，如版本说明、更改日志条目和提交详细信息。

自动安全更新由 Dependabot 代表 {% data variables.product.prodname_dotcom %} 开启。 Dependabot {% data variables.product.prodname_github_app %} 会自动安装在每个启用了自动安全更新的仓库中。

有权访问仓库安全警报的人可以看到指向相关安全警报的链接，但有权访问拉取请求的其他人无法看到拉取请求要解决的漏洞。

当您合并包含自动安全更新的拉取请求时，仓库的相应安全警报将被标记为已解决。

{% note %}

**注：**自动安全更新只解决安全漏洞。 自动安全更新的目标不是解决托管在私有仓库中的私有注册表或包中的漏洞。

{% endnote %}

### 支持的仓库

{% data variables.product.prodname_dotcom %} 自动为符合这些要求的每个仓库启用自动安全更新。

{% note %}

**注**：对于 2019 年 11 月之前创建的仓库，如果仓库满足以下条件，并且自 2019 年 5 月 23 日以来至少收到过一次推送，{% data variables.product.prodname_dotcom %} 已自动启用自动安全更新。

{% endnote %}

| 要求                                                                                             | 更多信息                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 存储库不是复刻                                                                                        | "[关于复刻](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                                   |
| 仓库未存档                                                                                          | "[存档仓库](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                                        |
| 仓库是公共的，或者仓库是私有的但您在仓库的设置中启用了 {% data variables.product.prodname_dotcom %} 只读分析、依赖关系图和漏洞警报。 | "[选择加入私有仓库的数据使用](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)" |
| 仓库包含软件包生态系统中 {% data variables.product.prodname_dotcom %} 支持的依赖项清单文件                      | "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"                                              |
| 未对仓库禁用自动安全更新                                                                                   | "[管理仓库的自动安全更新](#managing-automated-security-updates-for-your-repository)"                                                                                                                   |
| 仓库尚未使用集成进行依赖项管理                                                                                | “[关于集成](/github/customizing-your-github-workflow/about-integrations)”                                                                                                                       |

如果未为存储库启用自动安全更新，而您不知道原因，您可以 [联系支持](https://support.github.com/contact)。

### 关于兼容性分数

自动安全更新还包括兼容性分数，以便您了解更新漏洞是否可能导致对项目的重大更改。 我们从已生成特定自动安全更新的公共仓库中查看此前通过的 CI 测试，以了解更新是否会导致测试失败。 更新的兼容性分数是在依赖项的相关版本之间进行更新时，CI 运行被视为通过的百分比。

### 管理仓库的自动安全更新

您可以对个别仓库启用或禁用自动安全更新。

自动更新安全需要特定的仓库设置。 更多信息请参阅“[支持的仓库](#supported-repositories)”。

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
4. 在警报列表的上方，使用下拉菜单并选择或取消选择 **Automated security updates（自动安全更新）**。 ![包含启用自动安全更新的选项的下拉菜单](/assets/images/help/repository/enable-automated-security-updates-drop-down.png)

### 管理用户帐户的自动安全更新

You can disable automated security updates for all repositories owned by your user account. If you do, you can still enable automated security updates for individual repositories owned by your user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### 管理组织的自动安全更新

Organization owners can disable automated security updates for all repositories owned by the organization. If you do, anyone with admin permissions to an individual repository owned by the organization can still enable automated security updates on that repository.

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### 延伸阅读

- “[关于易受攻击依赖项的安全警报](/articles/about-security-alerts-for-vulnerable-dependencies)”
- "[选择加入私有仓库的数据使用](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)"
- "[支持的软件包生态系统](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"
