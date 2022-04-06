---
title: Searching the audit log for your enterprise
intro: You can search an extensive list of audited actions in your enterprise.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
---

## About search for the enterprise audit log

You can search your enterprise audit log directly from the user interface by using the **Filters** dropdown, or by typing a search query.

  ![Consulta de pesquisa](/assets/images/enterprise/site-admin-settings/search-query.png)

For more information about viewing your enterprise audit log, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."

You can also use the API to retrieve audit log events. For more information, see "[Using the audit log API for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)."

Observe que não é possível pesquisar as entradas usando texto. No entanto, é possível criar consultas de pesquisa usando diversos filtros. Muitos operadores usados ao consultar o log de auditoria, como `-`, `>`, ou `<`, correspondem ao mesmo formato de pesquisa no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% note %}

**Observação**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

|                         Filtrar | Descrição                                                                                                                                                                                                                             |
| -------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          `Yesterday's activity` | All actions created in the past day.                                                                                                                                                                                                  |
| `Enterprise account management` | All actions in the `business` category.                                                                                                                                                                                               |
|      `Associação à organização` | All actions for when a new user was invited to join an organization.                                                                                                                                                                  |
|               `Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted                |
|         `Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository{% ifversion ghec %}
|               `Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed.{% endif %}
|                 `Hook activity` | All actions for webhooks and pre-receive hooks.                                                                                                                                                                                       |
|           `Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories.                                                                        |

## Sintaxe de consulta de pesquisa

You can compose a search query from one or more `key:value` pairs, separated by AND/OR logical operators. Por exemplo, para ver todas as ações que afetaram o repositório `octocat/Spoon-Knife` desde o início de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

|          Tecla | Valor                                                                                                                                               |
| --------------:| --------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `actor_id` | ID da conta do usuário que iniciou a ação.                                                                                                          |
|        `actor` | Nome da conta do usuário que iniciou a ação.                                                                                                        |
| `oauth_app_id` | ID do aplicativo OAuth associado à ação.                                                                                                            |
|         `Ação` | Nome da ação auditada                                                                                                                               |
|      `user_id` | ID do usuário afetado pela ação.                                                                                                                    |
|      `usuário` | Nome do usuário afetado pela ação.                                                                                                                  |
|      `repo_id` | ID do repositório afetado pela ação (se aplicável).                                                                                                 |
|         `repo` | Nome do repositório afetado pela ação (se aplicável).                                                                                               |
|     `actor_ip` | Endereço IP do qual a ação foi iniciada.                                                                                                            |
|      `created` | Time at which the action occurred{% ifversion ghes %}. If querying the audit log from the site admin dashboard, use `created_at` instead{% endif %}
|         `from` | Exibição da qual a ação foi iniciada.                                                                                                               |
|         `note` | Informações diversas sobre eventos específicos (em texto sem formatação ou formato JSON).                                                           |
|          `org` | Nome da organização afetada pela ação (se aplicável).                                                                                               |
|       `org_id` | ID da organização afetada pela ação (se aplicável).                                                                                                 |
|     `negócios` | Name of the enterprise affected by the action (if applicable)                                                                                       |
|  `business_id` | ID of the enterprise affected by the action (if applicable)                                                                                         |

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

## Pesquisar no log de auditoria

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Pesquisar com base na ação

Para pesquisar eventos específicos, use o qualificador `action` na consulta. Por exemplo:

  * `action:team` localiza todos os eventos agrupados na categoria da equipe;
  * `-action:hook` exclui todos os eventos na categoria de webhook.

Cada categoria tem um conjunto de ações associadas que você pode filtrar. Por exemplo:

  * `action:team.create` localiza todos os eventos em que uma equipe foi criada;
  * `-action:hook.events_changed` exclui todos os eventos nos quais os eventos em um webhook foram alterados.

Actions that can be found in your enterprise audit log are grouped within the following categories:

{% data reusables.audit_log.audit-log-action-categories %}
### Pesquisar com base na hora da ação

Use o qualificador `created` para filtrar eventos no log de auditoria com base na hora que elas ocorreram.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por exemplo:

  * `created:2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014;
  * `created:>=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou depois dessa data;
  * `created:<=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou antes dessa data;
  * `created:2014-07-01..2014-07-31`  localiza todos os eventos ocorridos em julho de 2014.

### Pesquisar com base no local

Ao usar o qualificador `país`, você pode filtrar eventos no log de auditoria com base no país de origem. You can use a country's two-letter short code or full name. Countries with spaces in their name will need to be wrapped in quotation marks. Por exemplo:

  * `country:de` localiza todos os eventos ocorridos na Alemanha;
  * `country:Mexico` localiza todos os eventos ocorridos no México;
  * `country:"United States"` localiza todos os eventos ocorridos nos Estados Unidos.
