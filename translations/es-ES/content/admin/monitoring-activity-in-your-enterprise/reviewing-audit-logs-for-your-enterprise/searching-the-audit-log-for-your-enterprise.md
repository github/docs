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

  ![Consulta de búsqueda](/assets/images/enterprise/site-admin-settings/search-query.png)

For more information about viewing your enterprise audit log, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."

You can also use the API to retrieve audit log events. Para obtener más información, consulta la sección "[Utilizar la API de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

Nota que no puedes buscar entradas utilizando texto. Sin embargo, puedes construir consultas de búsqueda utilizando una variedad de filtros. Muchos operadores que se utilizan cuando se busca el registro por queries, tales como `-`, `>`, o `<`, empatan con el mismo formato que si se busca con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Buscar en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% note %}

**Nota**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

|                         Filtrar | Descripción                                                                                                                                                                                                                           |
| -------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          `Yesterday's activity` | All actions created in the past day.                                                                                                                                                                                                  |
| `Enterprise account management` | All actions in the `business` category.                                                                                                                                                                                               |
|  `Membresía de la organización` | All actions for when a new user was invited to join an organization.                                                                                                                                                                  |
|               `Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted                |
|         `Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository{% ifversion ghec %}
|               `Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed.{% endif %}
|                 `Hook activity` | All actions for webhooks and pre-receive hooks.                                                                                                                                                                                       |
|           `Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories.                                                                        |

## Buscar sintaxis de consultas

You can compose a search query from one or more `key:value` pairs, separated by AND/OR logical operators. Por ejemplo, para ver todas las acciones que afectaron el repositorio `octocat/Spoon-Knife` desde el inicio de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

|           Clave | Valor                                                                                                                                               |
| ---------------:| --------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `actor_id` | ID de la cuenta de usuario que inició la acción                                                                                                     |
| `actor (actor)` | Nombre de la cuenta de usuario que inició la acción                                                                                                 |
|  `oauth_app_id` | ID de la aplicación OAuth asociada con la acción                                                                                                    |
|        `Acción` | Nombre de la acción auditada                                                                                                                        |
|       `user_id` | ID del usuario afectado por la acción                                                                                                               |
|       `usuario` | Nombre del usuario afectado por la acción                                                                                                           |
|       `repo_id` | ID del repositorio afectado por la acción (si corresponde)                                                                                          |
|          `repo` | Nombre del repositorio afectado por la acción (si corresponde)                                                                                      |
|      `actor_ip` | Dirección IP desde donde se inició la acción                                                                                                        |
|       `created` | Time at which the action occurred{% ifversion ghes %}. If querying the audit log from the site admin dashboard, use `created_at` instead{% endif %}
|          `from` | Vista desde donde se inició la acción                                                                                                               |
|          `note` | Información variada de evento específico (en texto simple o en formato JSON)                                                                        |
|           `org` | Nombre de la organización afectada por la acción (si corresponde)                                                                                   |
|        `org_id` | ID de la organización afectada por la acción (si corresponde)                                                                                       |
|      `business` | Name of the enterprise affected by the action (if applicable)                                                                                       |
|   `business_id` | ID of the enterprise affected by the action (if applicable)                                                                                         |

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

## Buscar el registro de auditoría

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Búsqueda basada en la acción realizada

Para buscar eventos específicos, utiliza el calificador `action` en tu consulta. Por ejemplo:

  * `action:team` encuentra todos los eventos agrupados dentro de la categoría de equipo.
  * `-action:hook` excluye todos los eventos en la categoría de webhook.

Cada categoría tiene un conjunto de acciones asociadas que puedes filtrar. Por ejemplo:

  * `action:team.create` encuentra todos los eventos donde se creó un equipo.
  * `-action:hook.events_changed` excluye todos los eventos en que se modificaron los eventos sobre un webhook.

Actions that can be found in your enterprise audit log are grouped within the following categories:

{% data reusables.audit_log.audit-log-action-categories %}
### Búsqueda basada en el momento de la acción

Utiliza el calificador `created` para filtrar los eventos en la bitácora de auditoría con base en su fecha de ocurrencia.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por ejemplo:

  * `created:2014-07-08` encuentra todos los eventos ocurridos el 8 de julio de 2014.
  * `created:>=2014-07-08` encuentra todos los eventos ocurridos el 8 de julio de 2014 o después.
  * `created:<=2014-07-08` encuentra todos los eventos ocurridos el 8 de julio de 2014 o antes.
  * `created:2014-07-01..2014-07-31` encuentra todos los eventos ocurridos en el mes de julio de 2014.

### Búsqueda basada en la ubicación

Al utilizar el calificador `country`, puedes filtrar los eventos en la bitácora de auditoría con base en el país en donde se originaron. You can use a country's two-letter short code or full name. Countries with spaces in their name will need to be wrapped in quotation marks. Por ejemplo:

  * `country:de` encuentra todos los eventos ocurridos en Alemania.
  * `country:Mexico` encuentra todos los eventos ocurridos en México.
  * `country:"United States"` encuentra todos los eventos que ocurrieron en Estados Unidos.
