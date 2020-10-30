---
title: 关于对有漏洞的依赖项发出安全警报
intro: '当我们检测到影响到您的仓库的漏洞时，{% data variables.product.product_name %} 会发出安全警报。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于安全漏洞

{% data reusables.repositories.a-vulnerability-is %}根据漏洞的严重性和项目使用依赖项的方式，漏洞可能对项目或者使用项目的人员造成一系列问题。 您可以跟踪并解决 {% data variables.product.product_name %} 仓库中某些依赖项类型的漏洞。

如果 {% data variables.product.prodname_dotcom %} 从您的仓库依赖关系图中某个依赖项的 {% data variables.product.prodname_advisory_database %} 或 [WhiteSource](https://www.whitesourcesoftware.com/GitHubSecurityAlerts) 中检测到漏洞，我们会向您发送安全警报。 有关 {% data variables.product.prodname_advisory_database %} 的更多信息，请参阅“<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">浏览 {% data variables.product.prodname_advisory_database %} 中的安全漏洞</a>”。

{% if currentVersion == "free-pro-team@latest" %}
### 漏洞依赖项的警报和自动安全更新
{% else %}
### 对有漏洞的依赖项发出安全警报
{% endif %}

当 GitHub Advisory Database 中加入新的漏洞时，我们会识别使用受影响依赖项版本的{% if currentVersion == "free-pro-team@latest" %}公共{% endif %}仓库{% if currentVersion == "free-pro-team@latest" %}（和已经选择加入漏洞检测的私有仓库）{% endif %}{% if currentVersion == "free-pro-team@latest" %}，发送安全警报给仓库维护员，然后生成自动安全更新{% else %}并发送安全警报给仓库维护员{% endif %}。

每个安全警报都包含严重等级{% if currentVersion == "free-pro-team@latest" %}、项目中受影响文件的链接、其中包含可解决漏洞的自动安全更新的拉取请求链接{% else %}，以及项目中受影响文件的链接{% endif %}。 可用时，警报会包含有关漏洞的更多详细信息。

您可以在{% if currentVersion == "free-pro-team@latest" %}仓库的 Alerts（警报）选项卡或{% endif %}仓库的依赖项图表{% if currentVersion == "free-pro-team@latest" %}中查看影响特定项目的所有警报。更多信息请参阅“[查看和更新仓库中的漏洞依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)”。{% endif %}

默认情况下，我们会向具有受影响仓库管理员权限的人员发送安全警报。 {% data variables.product.product_name %} 从不公开披露在任何仓库中发现的漏洞。{% if currentVersion == "free-pro-team@latest" %} 您也可以对操作组织拥有的仓库的其他人或团队启用安全警报。 更多信息请参阅“[管理组织仓库中漏洞依赖项的警报](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)”。{% endif %}

{% data reusables.repositories.enable-security-alerts %}
{% if currentVersion == "free-pro-team@latest" %}
自动安全更新将有漏洞的依赖项更新为可解决该漏洞的最低版本。 自动安全更新会在使用依赖项图表和安全警报的仓库中自动启用，但您可以选择禁用自动拉取请求，改为手动生成安全更新。 更多信息请参阅“[配置自动安全更新](/github/managing-security-vulnerabilities/configuring-automated-security-updates)”。

{% data variables.product.prodname_dotcom %} 默认会检查_公共_仓库中有漏洞的依赖项并发出警报。 要接收_私有_仓库中漏洞依赖项的安全警报，该仓库的所有者或具有管理员权限的人员必须在仓库中启用依赖项图表和安全警报。 更多信息请参阅“[选择加入或退出私有仓库的数据使用](/articles/opting-into-or-out-of-data-use-for-your-private-repository)”。
{% endif %}

有关 {% data variables.product.product_name %} 可以检测漏洞和依赖项的受支持语言列表，请参阅“[列出仓库所依赖的包](/articles/listing-the-packages-that-a-repository-depends-on)”。

{% warning %}

**注**：{% data variables.product.product_name %} 的安全功能（如安全警报）并不要求捕获所有漏洞。 虽然我们一直在努力更新漏洞数据库，向您提醒最新的信息，但我们无法捕获一切或在保证的时间范围内向您警示已知的漏洞。 这些功能不是要替代人工检查每个依赖项的潜在漏洞或任何其他问题，并且我们建议在必要时咨询安全服务或全面检查漏洞。

{% endwarning %}

### 配置安全警报通知

默认情况下，您将通过电子邮件收到安全警报{% if currentVersion == "free-pro-team@latest" %}，这些警报将按特定漏洞分组{% endif %}。 您也可以选择在每周电子邮件（摘要列出最多 10 个仓库的警报）、web 通知或 {% data variables.product.product_name %} 用户界面中接收安全警报。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-options){% else %}“[选择通知递送方式](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %}更多信息请参阅{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}“[关于电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}”。{% endif %}

### 延伸阅读

{% if currentVersion == "free-pro-team@latest" %}- "[配置自动安全更新](/github/managing-security-vulnerabilities/configuring-automated-security-updates)"
- "[查看和更新仓库中的漏洞依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[了解 {% data variables.product.product_name %} 如何使用和保护数据](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
- MITRE 的[“漏洞”定义](https://cve.mitre.org/about/terminology.html#vulnerability)
