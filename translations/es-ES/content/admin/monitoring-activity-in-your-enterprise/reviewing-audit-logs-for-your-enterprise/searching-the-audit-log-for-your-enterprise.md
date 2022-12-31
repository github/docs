---
title: Búsqueda en el registro de auditoría de la empresa
intro: Puedes buscar una lista extensa de acciones auditadas en tu empresa.
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
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184000'
---
## Acerca de la búsqueda en el registro de auditoría de empresa

Puede buscar en el registro de auditoría de la empresa directamente desde la interfaz de usuario mediante la lista desplegable **Filtros** o si escribe una consulta de búsqueda.

  ![Consulta de búsqueda](/assets/images/enterprise/site-admin-settings/search-query.png)

Para más información sobre cómo ver el registro de auditoría de la empresa, vea "[Acceso al registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)". 

{% data reusables.audit_log.git-events-not-in-search-results %}

También puede usar la API para recuperar eventos de registro de auditoría. Para más información, vea "[Uso de la API de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

No puedes buscar entradas mediante texto. Sin embargo, puedes construir consultas de búsqueda utilizando una variedad de filtros. Muchos operadores que se utilizan cuando se consulta el registro, tales como `-`, `>` o `<`, coinciden con el mismo formato de búsqueda en {% data variables.product.product_name %}. Para más información, vea "[Búsqueda en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% note %}

**Nota**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Filtros de consulta de búsqueda

Filter| Descripción
--------------:| -----------
`Yesterday's activity` | Todas las acciones creadas en el último día.
`Enterprise account management` | Todas las acciones de la categoría `business`.
`Organization membership` | Todas las acciones para cuando se ha invitado a un nuevo usuario a unirse a una organización.
`Team management` | Todas las acciones relacionadas con la administración de equipos.<br/>- Cuando se ha agregado o quitado una cuenta de usuario o un repositorio de un equipo<br/>- Cuando un mantenedor de equipo se ha promocionado o degradado<br/>- Cuando se ha eliminado un equipo
`Repository management` | Todas las acciones para la administración de repositorios.<br/>- Cuando se ha creado o eliminado un repositorio<br/>- Cuando se ha cambiado la visibilidad del repositorio<br/>- Cuando se ha agregado o quitado un equipo de un repositorio{% ifversion ghec %}
`Billing updates` | Todas las acciones relacionadas con la forma en que la empresa paga por {% data variables.product.prodname_dotcom %} y con cuándo se ha cambiado la dirección de correo electrónico de facturación.{% endif %}
`Hook activity` | Todas las acciones de webhooks y enlaces de recepción previa.
`Security management` | Todas las acciones relacionadas con las claves SSH, las claves de implementación, las claves de seguridad, 2FA y la autorización de credenciales de inicio de sesión único de SAML y las alertas de vulnerabilidades para los repositorios.

## Sintaxis de la consulta de búsqueda

Puede redactar una consulta de búsqueda de uno o más pares `key:value` separados por los operadores lógicos AND/OR. Por ejemplo, para ver todas las acciones que han afectado al repositorio `octocat/Spoon-Knife` desde principios de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Los pares `key:value` que se pueden usar en una consulta de búsqueda son los siguientes:

Clave            | Value
--------------:| --------------------------------------------------------
`actor_id`     | ID de la cuenta de usuario que inició la acción
`actor`        | Nombre de la cuenta de usuario que inició la acción
`oauth_app_id` | ID de la aplicación OAuth asociada con la acción
`action`       | Nombre de la acción auditada
`user_id`      | ID del usuario afectado por la acción
`user`         | Nombre del usuario afectado por la acción
`repo_id`      | ID del repositorio afectado por la acción (si corresponde)
`repo`         | Nombre del repositorio afectado por la acción (si corresponde)
`actor_ip`     | Dirección IP desde donde se inició la acción
`created`      | Hora a la que se ha producido la acción{% ifversion ghes %}. Si consulta el registro de auditoría desde el panel de administración del sitio, use `created_at` en su lugar{% endif %}
`from`         | Vista desde donde se inició la acción
`note`         | Información variada de evento específico (en texto simple o en formato JSON)
`org`          | Nombre de la organización afectada por la acción (si corresponde)
`org_id`       | ID de la organización afectada por la acción (si corresponde)
`business` | Nombre de la empresa afectada por la acción (si procede)
`business_id` | Id. de la empresa afectada por la acción (si procede)
{%- ifversion token-audit-log %} `hashed_token` | El token usado para autenticarse para la acción (si procede, consulta "[Identificación de eventos de registro de auditoría realizados por un token de acceso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)") {%- endif %}

Para ver las acciones agrupadas por categoría, también puede usar el calificador de acción como un par `key:value`. Para más información, vea "[Búsqueda en función de la acción realizada](#search-based-on-the-action-performed)".

Para obtener una lista completa de las acciones del registro de auditoría de la empresa, vea "[Acciones del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Buscar el registro de auditoría

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Búsqueda basada en la acción realizada

Para buscar eventos específicos, use el calificador `action` en la consulta. Por ejemplo:

  * `action:team` busca todos los eventos agrupados dentro de la categoría de equipo.
  * `-action:hook` excluye todos los eventos de la categoría de webhook.

Cada categoría tiene un conjunto de acciones asociadas que puedes filtrar. Por ejemplo:

  * `action:team.create` busca todos los eventos en los que se ha creado un equipo.
  * `-action:hook.events_changed` excluye todos los eventos en los que se han modificado los eventos de un webhook.

Las acciones que se pueden encontrar en el registro de auditoría de la empresa se agrupan en las categorías siguientes:

{% data reusables.audit_log.audit-log-action-categories %}

### Búsqueda basada en el momento de la acción

Use el calificador `created` para filtrar los eventos del registro de auditoría en función de cuándo se hayan producido.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por ejemplo:

  * `created:2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014.
  * `created:>=2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014 o después.
  * `created:<=2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014 o antes.
  * `created:2014-07-01..2014-07-31` busca todos los eventos que se han producido durante el mes de julio de 2014.

### Búsqueda basada en la ubicación

Con el calificador `country`, puede filtrar los eventos del registro de auditoría en función del país de origen. Puede usar un código corto de dos letras del país o el nombre completo. Los países con espacios en el nombre se tendrán que incluir entre comillas. Por ejemplo:

  * `country:de` busca todos los eventos que se han producido en Alemania.
  * `country:Mexico` busca todos los eventos que se han producido en México.
  * `country:"United States"` busca todos los eventos que se han producido en Estados Unidos.

{% ifversion token-audit-log %}
### Búsqueda basada en el token que realizó la acción

Usa el calificador `hashed_token` para buscar en función del token que realizó la acción. Para poder buscar un token, debes generar un hash SHA-256. Para obtener más información, consulta "[Identificación de eventos de registro de auditoría realizados por un token de acceso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)".
{% endif %}
