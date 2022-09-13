---
title: Uso de la API de registro de auditoría para la empresa
intro: 'Puedes recuperar mediante programación eventos empresariales con la {% ifversion ghec or ghes > 3.2 %} API REST o{% endif %} GraphQL API.'
shortTitle: Audit log API
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
ms.openlocfilehash: 2fca8bbb9ccabe8fcb8fa8d48e4b7b8b1b5d1f3b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717913'
---
## Utilizar la API de bitácoras de auditoría

Puede interactuar con el registro de auditoría mediante GraphQL API{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %} o la API REST{% endif %}. 

Las marcas de tiempo y los campos de fecha de la respuesta de la API se miden en [milisegundos desde la época UTC](http://en.wikipedia.org/wiki/Unix_time).

## Consulta de GraphQL API del registro de auditoría

Para garantizar que la propiedad intelectual está segura y que mantiene el cumplimiento para la empresa, puede usar GraphQL API del registro de auditoría para de mantener copias de los datos del registro auditoría y la supervisión: {% data reusables.audit_log.audit-log-api-info %}

Tenga en cuenta que no puede recuperar eventos de Git mediante la {% ifversion not ghec %}API de registro de auditoría.{% else %}GraphQL API. Para recuperar eventos de Git, utiliza mejor la API de REST. Para más información, vea las acciones de categoría `git` en "[Acciones de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)" y también los puntos de conexión del registro de auditoría "[Administrar la empresa](/rest/reference/enterprise-admin#audit-log)" y "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization) en la documentación de la API REST". {% endif %}

La respuesta de GraphQL puede incluir datos de hasta 90 a 120 días.

### Ejemplo 1: Miembros agregados o quitados de organizaciones de una empresa

La consulta siguiente captura los registros de auditoría de la empresa `avocado-corp` y devuelve las primeras 10 organizaciones de la empresa, donde las únicas acciones realizadas han sido agregar o quitar un miembro de una organización. Se devuelven las primeras 20 entradas del registro de auditoría de cada organización. 

Esta consulta usa el campo [auditlog](/graphql/reference/objects) del objeto Organization y los objetos [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) y [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). La cuenta de {% data variables.product.prodname_dotcom %} que consulta el registro de auditoría de la empresa debe ser propietaria en cada organización dentro de la empresa.

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

GraphQL API devolverá como máximo 100 nodos por consulta. Para recuperar resultados adicionales, tendrá que implementar la paginación. Para más información, vea "[Limitaciones de recursos](/graphql/overview/resource-limitations#node-limit)" en la documentación de GraphQL API y [Paginación](https://graphql.org/learn/pagination/) en la documentación oficial de GraphQL.
### Ejemplo 2: Eventos de una organización, para una fecha y un actor específicos

Puede especificar varias frases de búsqueda, como `created` y `actor`, si las separa en la cadena de consulta con un espacio.

La consulta siguiente captura todos los registros de auditoría de la empresa `avocado-corp` relacionados con la organización `octo-org`, donde el usuario `octocat` ha realizado las acciones el 1 de enero de 2022 o después. Se devuelven las primeras 20 entradas del registro de auditoría, con la más reciente en primer lugar. 

Esta consulta usa la interfaz [AuditEntry](/graphql/reference/interfaces#auditentry). La cuenta de {% data variables.product.prodname_dotcom %} que consulta el registro de auditoría de la empresa debe ser propietaria de la organización `octo-org`.

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

Para obtener más ejemplos de consultas, vea el [repositorio platform-samples](https://github.com/github/platform-samples/blob/master/graphql/queries).

{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
## Consulta de la API REST del registro de auditoría

Para garantizar que la propiedad intelectual está segura y que mantiene el cumplimiento para la empresa, puede usar la API REST del registro de auditoría para de mantener copias de los datos del registro auditoría y la supervisión: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Para más información sobre la API REST del registro de auditoría, vea "[Administración de la empresa](/rest/reference/enterprise-admin#audit-log)" y "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

### Ejemplo 1: Todos los eventos de una empresa, para una fecha específica, con paginación

La consulta siguiente busca eventos de registro de auditoría creados el 1 de enero de 2022 en la empresa `avocado-corp` y devuelve la primera página con un máximo de 100 elementos por página mediante la [paginación de la API REST](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: Bearer <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Ejemplo 2: Eventos para solicitudes de incorporación de cambios en una empresa, para una fecha y un actor específicos

Puede especificar varias frases de búsqueda, como `created` y `actor`, si las separa en la dirección URL formada con el símbolo `+` o el código de caracteres ASCII `%20`.

La consulta siguiente busca eventos de registro de auditoría para las solicitudes de incorporación de cambios, donde el evento se ha producido el 1 de enero de 2022 o después en la empresa `avocado-corp` y la acción la ha realizado el usuario `octocat`:

```shell
curl -H "Authorization: Bearer <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

{% endif %}
