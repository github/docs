---
title: 查看和更新仓库中有漏洞的依赖项
intro: '如果 {% data variables.product.product_name %} 发现项目中存在有漏洞的依赖项，您可以在仓库的 Dependabot 警报选项卡中查看它们。 然后，您可以更新项目以解决或忽略漏洞。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: 查看和更新有漏洞的依赖项
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---

仓库的 {% data variables.product.prodname_dependabot %} 警报选项卡列出所有打开和关闭的 {% data variables.product.prodname_dependabot_alerts %}{% if currentVersion == "free-pro-team@latest" %} 以及对应的 {% data variables.product.prodname_dependabot_security_updates %}{% endif %}。 您可以使用下拉菜单对警报列表进行排序，并且可以单击特定警报以获取更多详细信息。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

{% if currentVersion == "free-pro-team@latest" %}
您可以为使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的任何仓库启用自动安全更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

{% data reusables.repositories.dependency-review %}

### 关于仓库中有漏洞的依赖项的更新

{% data variables.product.product_name %} 在检测到您的代码库正在使用具有已知漏洞的依赖项时会生成 {% data variables.product.prodname_dependabot_alerts %}。 对于启用了 {% data variables.product.prodname_dependabot_security_updates %} 的仓库，当 {% data variables.product.product_name %} 在默认分支中检测到有漏洞的依赖项时，{% data variables.product.prodname_dependabot %} 会创建拉取请求来修复它。 拉取请求会将依赖项升级到避免漏洞所需的最低安全版本。
{% endif %}

### 查看和更新有漏洞的依赖项

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 单击您想要查看的警报。 ![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. 查看漏洞的详细信息以及包含自动安全更新的拉取请求（如果有）。
1. （可选）如果还没有针对该警报的 {% data variables.product.prodname_dependabot_security_updates %} 更新，要创建拉取请求以解决该漏洞，请单击 **Create {% data variables.product.prodname_dependabot %} security update（创建 Dependabot 安全更新）**。 ![创建 {% data variables.product.prodname_dependabot %} 安全更新按钮](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. 当您准备好更新依赖项并解决漏洞时，合并拉取请求。 {% data variables.product.prodname_dependabot %} 提出的每个拉取请求都包含可用于控制 {% data variables.product.prodname_dependabot %} 的命令的相关信息。 更多信息请参阅“[管理依赖项更新的拉取请求](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)”。
1. （可选）如果警报正在修复、不正确或位于未使用的代码中，请使用“Dismiss（忽略）”，然后单击忽略警报的原因。 ![选择通过 "Dismiss（忽略）"下拉菜单忽略警报的原因](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 单击您想要查看的警报。 ![在警报列表中选择的警报](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. 查看漏洞的详细信息，并确定您是否需要更新依赖项。
1. 当您合并拉取请求以将清单或锁定文件更新为依赖项的安全版本时，这将解决警报。 或者，如果您决定不更新依赖项，请单击 **Dismiss（忽略）**下拉菜单，并选择忽略警报的原因。 ![选择通过 "Dismiss（忽略）"下拉菜单忽略警报的原因](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. 单击有漏洞依赖项的版本号以显示详细信息。 ![关于有漏洞依赖项的详细信息](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. 查看漏洞的详细信息，并确定您是否需要更新依赖项。 当您合并拉取请求以将清单或锁定文件更新为依赖项的安全版本时，这将解决警报。
1. **Dependencies（依赖项）**选项卡顶部的横幅将会显示，直到解决所有漏洞依赖项或者您忽略该横幅。 单击横幅右上角的 **Dismiss（忽略）**并选择忽略警报的原因。 ![忽略安全横幅](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

### 延伸阅读

- "[关于有漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)" {% if currentVersion == "free-pro-team@latest" %}
- "[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"{% endif %}
- "[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- [排除 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
