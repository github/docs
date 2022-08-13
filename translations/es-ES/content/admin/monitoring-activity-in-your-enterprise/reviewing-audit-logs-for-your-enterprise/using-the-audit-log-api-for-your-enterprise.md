---
title: Utilizar la API de bitácora de auditoría para tu empresa
intro: 'Puedes recuperar los eventos de empresa con programación utilizando la API de {% ifversion ghec or ghes > 3.2 %} REST o de{% endif %} GraphQL.'
shortTitle: API de bitácora de auditoría
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
---

## Utilizar la API de bitácoras de auditoría

Puedes interactuar con la bitácora de audotaría si utilizas la API de GraphQL{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %} o la API de REST{% endif %}.

Las marcas de tiempo y campos de fecha en la respuesta de la API se miden en [milisegundos de época UTC](http://en.wikipedia.org/wiki/Unix_time).

## Consultar la API de bitácora de auditoría de GraphQL

Para garantizar que tu propiedad intelectual está segura y que mantienes el cumplimiento para tu empresa, puedes utilizar la API de GraphQL para bitácoras de auditoría para mantener copias de tus datos de bitácoras de auditoría y monitorear:
{% data reusables.audit_log.audit-log-api-info %}

Toma en cuenta que no puedes recuperar eventos de Git utilizando la {% ifversion not ghec %}API de bitácora de auditoría.{% else %}API de GraphQL. Para recuperar eventos de Git, utiliza mejor la API de REST. Para obtener más información, consulta las acciones de la categoría `git` en la sección "[Acciones de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)" y también las terminales de bitácoras de auditoría de [Administración de empresas](/rest/reference/enterprise-admin#audit-log)" y "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization) en la documentación de la API de REST".{% endif %}

La respuesta de GraphQL puede incluir datos de hasta 90 a 120 días.

### Ejemplo 1: Los miembros que se agregaron o eliminaron de las organizaciones en una empresa

La siguiente consulta recupera las bitácoras de auditoría para la empresa `avocado-corp` y devuelve a las primeras 10 organizaciones en ella, en donde las únicas acciones que se llevaron a cabo fue la adición o eliminación de un miembro de una organización. Se devuelven las primeras 20 entradas de bitácora de auditoría para cada organización.

Esta consulta utiliza el campo [auditlog](/graphql/reference/objects) del objeto de organización y los objetos [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) y [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). La cuenta de {% data variables.product.prodname_dotcom %} que está consultando la bitácora de auditoría empresarial debe ser un propietario de organización para cada organización dentro de la empresa.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

La API de GraphQL devolverá por mucho 100 nodos por consulta. Para recuperar los resultados adicionales, necesitarás implementar la paginación. Para obtener más información, consulta la sección "[Limitaciones de recursos](/graphql/overview/resource-limitations#node-limit)" en la documentación de la API de GraphQL y [Paginación](https://graphql.org/learn/pagination/) en la documentación oficial de GraphQL.
### Ejemplo 2: Eventos en una organización para una fecha y actor específicos

Puedes especificar frases de búsqueda múltiples, tales como `created` y `actor`, si las separas en tu secuencia de consulta con un espacio.

The query below fetches all the audit logs for the `avocado-corp` enterprise that relate to the `octo-org` organization, where the actions were performed by the `octocat` user on or after the 1 Jan, 2022. The first 20 audit log entries are returned, with the newest log entry appearing first.

This query uses the [AuditEntry](/graphql/reference/interfaces#auditentry) interface. The {% data variables.product.prodname_dotcom %} account querying the enterprise audit log must be an owner of the `octo-org` organization.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

For more query examples, see the [platform-samples repository](https://github.com/github/platform-samples/blob/master/graphql/queries).

{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
## Querying the audit log REST API

To ensure your intellectual property is secure, and you maintain compliance for your enterprise, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

For more information about the audit log REST API, see "[Enterprise administration](/rest/reference/enterprise-admin#audit-log)" and "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

### Example 1: All events in an enterprise, for a specific date, with pagination

The query below searches for audit log events created on Jan 1st, 2022 in the `avocado-corp` enterprise, and return the first page with a maximum of 100 items per page using [REST API pagination](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Example 2: Events for pull requests in an enterprise, for a specific date and actor

You can specify multiple search phrases, such as `created` and `actor`, by separating them in your formed URL with the `+` symbol or ASCII character code `%20`.

The query below searches for audit log events for pull requests, where the event occurred on or after Jan 1st, 2022 in the `avocado-corp` enterprise, and the action was performed by the `octocat` user:

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

{% endif %}
