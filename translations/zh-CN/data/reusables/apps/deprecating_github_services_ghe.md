{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**注：**GitHub Enterprise 2.17 及更高版本不再允许管理员安装新的 GitHub 服务，并且现有服务将在 GitHub Enterprise 2.20 及更高版本中停用。 您可以使用[替换 GitHub 服务指南](/v3/guides/replacing-github-services)帮助您将服务更新到 web 挂钩。

{% endnote %}
{% endif %}
