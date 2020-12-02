您可以使用仓库、组织和应用 web 挂钩 REST API 来创建、更新、删除和 ping web 挂钩。 {% if currentversion == "free-proteam@latest" or currentversion ver_gt "enterprise-server@2.22" %}您也可以使用 REST API 来更改 web 挂钩的配置。 例如，您可以修改有效负载 URL、内容类型、SSL 验证和机密。 {% endif %}更多信息请参阅：
- [仓库 web 挂钩 REST API](/rest/reference/repos#webhooks)
- [组织 web 挂钩 REST API](/rest/reference/orgs#webhooks){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- [GitHub App web 挂钩 REST API](/rest/reference/apps#webhooks){% endif %}
