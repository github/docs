You can use the repository, organization, and app webhook REST APIs to create, update, delete, and ping webhooks. {% ifversion fpt or ghes > 2.22 or ghae %}You can also use the REST API to change the configuration of the webhook. For example, you can modify the payload URL, content type, SSL verification, and secret. {% endif %}For more information, see:
- [Repository Webhooks REST API](/rest/reference/repos#webhooks)
- [Organization Webhooks REST API](/rest/reference/orgs#webhooks){% ifversion fpt or ghes > 2.22 or ghae %}
- [GitHub App Webhooks REST API](/rest/reference/apps#webhooks){% endif %}
