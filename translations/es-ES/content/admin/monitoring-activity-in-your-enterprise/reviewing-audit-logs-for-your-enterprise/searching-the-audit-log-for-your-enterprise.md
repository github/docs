---
title: Buscar la bitácora de auditoría para tu empresa
intro: Puedes buscar una lista extensiva de acciones auditadas en tu empresa.
shortTitle: Buscar bitácoras de auditoría
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

## Acerca de la búsqueda para la bitácora de auditoría de la empresa

Puedes buscar la bitácora de auditoría de tu empresa directamente desde la interfaz de usuario si utilizas el menú desplegable de **Filtros** o si tecleas una consulta de búsqueda.

  ![Consulta de búsqueda](/assets/images/enterprise/site-admin-settings/search-query.png)

Para obtener más información sobre cómo ver la bitácora de auditoría de tu empresa, consulta la sección "[Acceder a la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".

{% data reusables.audit_log.git-events-not-in-search-results %}

También puedes utilizar la API para recuperar los eventos de bitácora de auditoría. Para obtener más información, consulta la sección "[Utilizar la API de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

You cannot search for entries using text. Sin embargo, puedes construir consultas de búsqueda utilizando una variedad de filtros. Muchos operadores que se utilizan cuando se busca el registro por queries, tales como `-`, `>`, o `<`, empatan con el mismo formato que si se busca con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Buscar en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% note %}

**Nota**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Filtros de consulta de búsqueda

|                                Filtrar | Descripción                                                                                                                                                                                                                                                          |
| --------------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                    `Actividad de ayer` | Todas las acciones que se crearon en el día anterior.                                                                                                                                                                                                                |
| `Adminsitración de cuenta empresarial` | Todas las acciones en la categoría `business`.                                                                                                                                                                                                                       |
|         `Membresía de la organización` | Todas las acciones para cuando se haya invitado a un usuario nuevo a una organización.                                                                                                                                                                               |
|             `Administración de equipo` | Todas las acciones relacionadas con la administración de equipos.<br/>- Cuando una cuenta de usuario o repositorio se agrega o elimina de un equipo<br/>- Cuando se promueve o degrada a un mantenedor de equipo<br/>- Cuando se borra a un equipo |
|       `Administración de repositorios` | Todas las acciones para la administración de repositorios.<br/>- Cuando se crea o borra un repositorio<br/>- Cuando se cambia la visibilidad del repositorio<br/>- Cuando se agrega o elimina a un equipo del repositorio{% ifversion ghec %}
|       `Actualizaciones de facturación` | Todas las acciones con respecto a cómo tu empresa paga por {% data variables.product.prodname_dotcom %} y para cuando cambia tu dirección de correo electrónico para facturación.{% endif %}
|                 `Actividad de ganchos` | Todas las acciones para los webhooks y ganchos de prerecepción.                                                                                                                                                                                                      |
|          `Administración de seguridad` | Todas las acciones que tienen que ver con llaves SSH, llaves de despliegue, llaves de seguridad, 2FA, y autorización de credenciales para inicio de sesión único de SAML y alertas de vulnerabilidades para repositorios.                                            |

## Buscar sintaxis de consultas

Puedes componer una consulta de búsqueda desde uno o más pares `key:value`, separados por operadores lógicos AND/OR. Por ejemplo, para ver todas las acciones que afectaron el repositorio `octocat/Spoon-Knife` desde el inicio de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Los pares `key:value` que pueden utilizarse en una consulta de búsqueda son:

|           Clave | Valor                                                                                                                                                                                           |
| ---------------:| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `actor_id` | ID de la cuenta de usuario que inició la acción                                                                                                                                                 |
| `actor (actor)` | Nombre de la cuenta de usuario que inició la acción                                                                                                                                             |
|  `oauth_app_id` | ID de la aplicación OAuth asociada con la acción                                                                                                                                                |
|        `Acción` | Nombre de la acción auditada                                                                                                                                                                    |
|       `user_id` | ID del usuario afectado por la acción                                                                                                                                                           |
|       `usuario` | Nombre del usuario afectado por la acción                                                                                                                                                       |
|       `repo_id` | ID del repositorio afectado por la acción (si corresponde)                                                                                                                                      |
|          `repo` | Nombre del repositorio afectado por la acción (si corresponde)                                                                                                                                  |
|      `actor_ip` | Dirección IP desde donde se inició la acción                                                                                                                                                    |
|       `created` | Hora en la que ocurrió la acción{% ifversion ghes %}. Si se está consultando la bitácora de auditoría desde el tablero administrativo del proyecto, utiliza `created_at` en su lugar{% endif %}
|          `from` | Vista desde donde se inició la acción                                                                                                                                                           |
|          `note` | Información variada de evento específico (en texto simple o en formato JSON)                                                                                                                    |
|           `org` | Nombre de la organización afectada por la acción (si corresponde)                                                                                                                               |
|        `org_id` | ID de la organización afectada por la acción (si corresponde)                                                                                                                                   |
|      `business` | Nombre de la empresa afectada por la acción (si aplica)                                                                                                                                         |
|   `business_id` | ID de la empresa afectada por la acción (si aplica)                                                                                                                                             |

Para ver las acciones agrupadas por categoría, también puedes utilizar el calificador de acción como un par `key:value`. Para obtener más información, consulta la sección "[Búsqueda basada en la acción realizada](#search-based-on-the-action-performed)".

Para ver una lista completa de acciones en la bitácora de auditoría de tu empresa, consulta la sección "[Acciones de la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

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

Las acciones que se pueden encontrar en la bitácora de auditoría de tu empresa se agrupan dentro de las siguientes categorías:

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

Al utilizar el calificador `country`, puedes filtrar los eventos en la bitácora de auditoría con base en el país en donde se originaron. Puedes utilizar el código corto de dos letras de un país o el nombre completo. Los países con espacios en sus nombres tendrán que encerrarse entre comillas. Por ejemplo:

  * `country:de` encuentra todos los eventos ocurridos en Alemania.
  * `country:Mexico` encuentra todos los eventos ocurridos en México.
  * `country:"United States"` encuentra todos los eventos que ocurrieron en Estados Unidos.
