{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
{% if currentversion == "free-proteam@latest"%}默认情况下，您将收到通知：{% endif %}{% if enterpriseServersions contains currentversion and currentversion gt "enterprise-server@3 %}默认情况下，如果您的站点管理员在您的实例上配置了通知电子邮件，您将收到 {% data variables.product.prodname_dependabot_alerts %}︰{% endif %}

- 通过电子邮件，在为仓库启用 {% data variables.product.prodname_dependabot %} 时，当有新的清单文件提交到仓库，以及当发现具有关键或高严重性的新漏洞时，将发送一封电子邮件（**Email each time a vulnerability is found（每次找到漏洞时发送电子邮件）**选项）。
- 在用户界面中接收通知，如有任何漏洞依赖项，将在仓库的文件和代码视图中显示警告（**UI 警报**选项）。
- 在命令行上接收通知，当您推送到具有任何漏洞依赖项的仓库时，警告将显示为回叫（**命令行**选项）。
- 在您的收件箱中，作为 web 通知。 为仓库启用 {% data variables.product.prodname_dependabot %} 时，当有新的清单文件提交到仓库，以及当发现具有关键或高严重性的新漏洞时，将发送 web 通知（**Web** 选项）。
- 在 {% data variables.product.prodname_mobile %} 上，作为 web 通知。 更多信息请参阅“[为移动版 GitHub 启用推送通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)”。

{% note %}

**注意：**电子邮件和 web/{% data variables.product.prodname_mobile %} 通知是：

- _按仓库_ 在存储库中启用 {% data variables.product.prodname_dependabot %} 时，或者当新的清单文件提交到仓库时。

- _按组织_，当发现新的漏洞时。

{% endnote %}
您可以自定义您接收

{% data variables.product.prodname_dependabot_alerts %} 的通知。 例如，您可以使用 **Email a digest summary of vulnerabilities（以电子邮件发送漏洞摘要）**和 **Weekly security email digest（每周安全性电子邮件摘要）**选项通过电子邮件接收最多 10 个仓库的每周警报摘要。
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "enterprise-server@3.1" %}
默认情况下，如果站点管理员配置了使用电子邮件接收实例通知，您将
{% data variables.product.prodname_dependabot_alerts %} 的通知：
- 通过电子邮件收到通知， 每次发现{% if currentVersion ver_gt "enterprise-server@2.23" %}关键或严重性{% endif %}高的漏洞时都会发送电子邮件（**每次发现漏洞时发送电子邮件**选项）
- 在用户界面中接收通知，如有任何漏洞依赖项，将在仓库的文件和代码视图中显示警告（**UI 警报**选项）
- 在命令行上接收通知，当您推送到具有任何漏洞依赖项的仓库时，警告将显示为回叫（**命令行**选项）
- 在收件箱中收到通知，{% if currentVersion ver_gt "enterprise-server@2.23" %}关键或严重性高的新漏洞{% endif %}会显示 Web 通知（**Web** 选项）
您可以自定义您接收

{% data variables.product.prodname_dependabot_alerts %} 的通知。 例如，您可以使用 **Email a digest summary of vulnerabilities（以电子邮件发送漏洞摘要）**和 **Weekly security email digest（每周安全性电子邮件摘要）**选项通过电子邮件接收最多 10 个仓库的每周警报摘要。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
默认情况下，如果站点管理员为您实例上的通知配置了电子邮件，您将收到安全警报：
- 通过电子邮件收到通知， 每次发现漏洞时都会发送电子邮件（**每次发现漏洞时发送电子邮件**选项）
- 在用户界面中，作为仓库文件和代码视图中的警告（**UI 警报**选项）
- 在命令行上接收通知，当您推送到具有漏洞的仓库时，警告将显示为回叫（**命令行**选项）
- 在收件箱中收到警报，作为 web 通知（**Web** 选项）

您可以自定义接收安全警报通知的方式。 例如，您可以使用 **Email a digest summary of vulnerabilities（以电子邮件发送漏洞摘要）**和 **Weekly security email digest（每周安全性电子邮件摘要）**选项通过电子邮件接收最多 10 个仓库的每周警报摘要。
{% endif %}
