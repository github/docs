Web 挂钩 REST API 可让您管理存储库、组织和应用程序 web 挂钩。{% ifversion fpt or ghes > 3.2 or ghae or ghec %} 您可以使用此 API 列出 web 挂钩的 web 挂钩交付，或者获取并重新交付 web 挂钩的单个交付，这些交付可以集成到外部应用程序或服务中。{% endif %} 您还可以使用 REST API 更改 web 挂钩的配置。 例如，您可以修改有效负载 URL、内容类型、SSL 验证和机密。 更多信息请参阅：

- [仓库 web 挂钩 REST API](/rest/reference/webhooks#repository-webhooks)
- [组织 web 挂钩 REST API](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} web 挂钩 REST API](/rest/reference/apps#webhooks)
