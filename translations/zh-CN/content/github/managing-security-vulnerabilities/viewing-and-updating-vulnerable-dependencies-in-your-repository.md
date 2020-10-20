---
title: 查看和更新仓库中有漏洞的依赖项
intro: '如果 {% data variables.product.product_name %} 发现项目中存在有漏洞的依赖项，您可以在仓库的 Dependabot 警报选项卡中查看它们。 然后，您可以更新项目以解决或忽略漏洞。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 仓库管理员和组织所有者可以查看和更新依赖项。
versions:
  free-pro-team: '*'
---

仓库的 {% data variables.product.prodname_dependabot %} 警报选项卡列出所有打开和关闭的 {% data variables.product.prodname_dependabot_alerts %} 以及对应的 {% data variables.product.prodname_dependabot_security_updates %}。 您可以使用下拉菜单对警报列表进行排序，并且可以单击特定警报以获取更多详细信息。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

您可以为使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的任何仓库启用自动安全更新。 更多信息请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)。”

### 关于仓库中有漏洞的依赖项的更新

当我们检测到影响到您的仓库的漏洞时，{% data variables.product.product_name %} 会发出 {% data variables.product.prodname_dependabot_alerts %}。 对于启用了 {% data variables.product.prodname_dependabot_security_updates %} 的仓库，当 {% data variables.product.product_name %} 检测到有漏洞的依赖项时，{% data variables.product.prodname_dependabot_short %} 会创建拉取请求来修复它。 {% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

### 查看和更新有漏洞的依赖项

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 单击您想要查看的警报。 ![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. 查看漏洞的详细信息以及包含自动安全更新的拉取请求（如果有）。
1. （可选）如果还没有针对该警报的 {% data variables.product.prodname_dependabot_security_updates %} 更新，要创建拉取请求以解决该漏洞，请单击 **Create {% data variables.product.prodname_dependabot_short %} security update（创建 Dependabot 安全更新）**。 ![创建 {% data variables.product.prodname_dependabot_short %} 安全更新按钮](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. 当您准备好更新依赖项并解决漏洞时，合并拉取请求。 {% data variables.product.prodname_dependabot_short %} 提出的每个拉取请求都包含可用于控制 {% data variables.product.prodname_dependabot_short %} 的命令的相关信息。 更多信息请参阅“[管理依赖项更新的拉取请求](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-github-dependabot-pull-requests-with-comment-commands)”。
1. （可选）如果警报正在修复、不正确或位于未使用的代码中，请使用“Dismiss（忽略）”，然后单击忽略警报的原因。 ![选择通过 "Dismiss（忽略）"下拉菜单忽略警报的原因](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### 延伸阅读

- “[关于有易受攻击依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”
- "[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)"
- "[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
