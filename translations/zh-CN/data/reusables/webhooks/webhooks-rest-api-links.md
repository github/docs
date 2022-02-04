The webhook REST APIs enable you to manage repository, organization, and app webhooks.{% ifversion fpt or ghes > 3.2 or ghae or ghec %} You can use this API to list webhook deliveries for a webhook, or get and redeliver an individual delivery for a webhook, which can be integrated into an external app or service.{% endif %} You can also use the REST API to change the configuration of the webhook. 例如，您可以修改有效负载 URL、内容类型、SSL 验证和机密。 更多信息请参阅：

- [仓库 web 挂钩 REST API](/rest/reference/webhooks#repository-webhooks)
- [Organization Webhooks REST API](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} web 挂钩 REST API](/rest/reference/apps#webhooks)
