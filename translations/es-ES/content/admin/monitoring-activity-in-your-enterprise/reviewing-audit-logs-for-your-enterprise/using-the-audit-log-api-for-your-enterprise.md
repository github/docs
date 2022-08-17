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

La siguiente consulta recupera todas las bitácoras de auditoría para la empresa `avocado-corp` que se relaciona con la organización `octo-org`, en donde el usuario `octocat` realizó las acciones en el 1 de enero de 2022 o después de esta fecha. Se devuelven las primeras 20 entradas de la bitácora de auditoría y la entrada más nueva se muestra primero.

Esta consulta utiliza la interfaz [AuditEntry](/graphql/reference/interfaces#auditentry). La cuenta de {% data variables.product.prodname_dotcom %} que está consultando la bitácora de auditoría empresarial debe ser propietaria de la organización `octo-org`.

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

Para obtener más ejemplos de consultas, dirígete al [repositorio platform-samples](https://github.com/github/platform-samples/blob/master/graphql/queries).

{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
## Consultar la API de REST de la bitácora de auditoría

Para garantizar que tu propiedad intelectual está segura y que mantienes el cumplimiento para tu empresa, puedes utilizar la API de REST para bitácoras de auditoría para mantener copias de tus datos de bitácoras de auditoría y monitorear:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Para obtener más información sobre la API de REST de la bitácora de auditoría, consulta la sección "[Administración de empresas](/rest/reference/enterprise-admin#audit-log)" y "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

### Ejemplo 1: Todos los eventos de una empresa, para una fecha específica, con paginación

La siguiente consulta busca los eventos de la bitácora de auditoría que se crearon el 1 de enero de 2022 en la empresa `avocado-corp` y devolvió la primera página con un máximo de 100 elementos por página utilizando la [Paginación de la API de REST](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Ejemplo 2: Eventos para las solicitudes de cambio en una empresa, para un actor y fecha específicos

Puedes especificar frases de búsqueda múltiples, tales como `created` y `actor`, si las separas en tu URL formada con el símbolo `+` o con el código de caracteres ASCII `%20`.

La siguiente consulta busca los eventos de bitácora de auditoría para las solicitudes de cambios, en donde el evento ocurrió en o después del 1 de enero de 2022 en la empresa `avocado-corp` y el usuario `octocat` realizó la acción:

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

{% endif %}
