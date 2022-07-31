The webhook REST APIs enable you to manage repository, organization, and app webhooks.{% ifversion fpt or ghes > 3.2 or ghae or ghec %} You can use this API to list webhook deliveries for a webhook, or get and redeliver an individual delivery for a webhook, which can be integrated into an external app or service.{% endif %} You can also use the REST API to change the configuration of the webhook. Por exemplo, você pode modificar a URL da carga, tipo de conteúdo, verificação de SSL e segredo. Para obter mais informações, consulte:

- [API REST para os webhooks dos repositórios](/rest/reference/webhooks#repository-webhooks)
- [Organization Webhooks REST API](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} Webhooks REST API](/rest/reference/apps#webhooks)
