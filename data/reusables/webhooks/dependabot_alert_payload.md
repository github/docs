Key | Type | Description
---|---|---
`action` | `string` | The action that was performed. Can be one of `created`, `dismissed`, `reopened`, `fixed`, or `reintroduced`.
`alert` | `object` | The Dependabot [`alert`](/rest/dependabot/alerts#get-a-dependabot-alert) involved in the event.
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | If the `action` is `dismissed` or `reopened`, the `sender` is the [`user`](/rest/users/users#get-a-user) that triggered the event. The `sender` is {% ifversion ghes or ghae %}`github-enterprise`{% else %}`github`{% endif %} for all other actions.
