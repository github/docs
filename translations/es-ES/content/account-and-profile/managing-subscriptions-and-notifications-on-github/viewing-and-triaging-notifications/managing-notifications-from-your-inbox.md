---
title: Administrar las notificaciones en tu bandeja de entrada
intro: 'Usa la bandeja de entrada para evaluar rápidamente las prioridades de las notificaciones y sincronizarlas en el correo electrónico{% ifversion fpt or ghes or ghec %} y el teléfono móvil{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106809'
---
## Acerca de tu bandeja de entrada

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obtener más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."
{% endif %}

Para acceder a la bandeja de notificaciones, en la esquina superior derecha de cualquier página, haga clic en {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notificación que indica un mensaje no leído](/assets/images/help/notifications/notifications_general_existence_indicator.png)

La bandeja de entrada muestra todas las notificaciones a las que esté suscrito o no haya marcado como **Done.** Puede personalizar la bandeja de entrada para que se adapte mejor a su flujo de trabajo mediante filtros, ver todas las notificaciones o solo las no leídas y agrupar las notificaciones para verlas rápidamente de forma general.

  ![vista de bandeja de entrada](/assets/images/help/notifications-v2/inbox-view.png)

Predeterminadamente, tu bandeja de entrada mostrará las notificaciones leídas y no leídas. Para ver solo las notificaciones no leídas, haga clic en **Unread** o use la consulta `is:unread`.

  ![vista de no leídos en bandeja de entrada](/assets/images/help/notifications-v2/unread-inbox-view.png)

## Opciones de clasificación

Tienes varias opciones para clasificar las notificaciones de tu bandeja de entrada.

| Opción de clasificación | Descripción |
|-----------------|-------------|
| Save            | Guarda tu notificación para revisarla posteriormente. Para guardar una notificación, a la derecha de la notificación, haga clic en {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Las notificaciones guardadas se conservan de manera indefinida y se pueden ver haciendo clic en **Saved** en la barra lateral o con la consulta `is:saved`. Si la notificación que guardaste tiene más de 5 meses y cambia a no guardada, ésta desaparecerá de tu bandeja de entrada en un día. |
| Listo            | Marca una notificación como completada y elimina la notificación de tu bandeja de entrada. Para ver todas las notificaciones completadas, haga clic en **Done** en la barra lateral o use la consulta `is:done`. Las notificaciones marcadas como **Done** se guardan durante 5 meses.
| Cancelar suscripción     | Se elimina automáticamente la notificación de la bandeja de entrada y se cancela la suscripción a la conversación hasta que se @mentioned a su usuario o se @mentioned a algún equipo al que pertenezca, o bien cuando se le solicite una revisión.
| Lectura            | Marca la notificación como leída. Para ver solo las notificaciones leídas en la bandeja de entrada, use la consulta `is:read`. Esta consulta no incluye las notificaciones marcadas como **Done**.
| Unread          | Mara la notificación como no leída. Para ver solo las notificaciones no leídas en la bandeja de entrada, use la consulta `is:unread`. |

Para ver los métodos abreviados de teclado disponibles, consulte "[Métodos abreviados de teclado](/github/getting-started-with-github/keyboard-shortcuts#notifications)".

Antes de escoger una opción de clasificación, puedes prever los detalles de la notificación e investigar. Para obtener más información, consulte "[Clasificar una sola notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)".

## Clasificar varias notificaciones al mismo tiempo

Para clasificar varias notificaciones a la vez, seleccione las notificaciones relevantes y use el menú desplegable {% octicon "kebab-horizontal" aria-label="The edit icon" %} para elegir una opción de clasificación.

![Menú desplegable con opciones de clasificación y notificaciones seleccionadas](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Filtros de notificación predeterminados

De manera predeterminada, la bandeja de entrada tiene filtros para cuando recibe una asignación, participa en un hilo, se le solicita revisar una solicitud de incorporación de cambios o se @mentioned a su usuario directamente o se @mentioned a un equipo del cual es miembro.

  ![Filtros personalizados predeterminados](/assets/images/help/notifications-v2/default-filters.png)

## Personalizar tu bandeja de entrada con filtros personalizados

Puedes agregar hasta 15 de tus filtros personalizados.

{% data reusables.notifications.access_notifications %}
2. Para abrir la configuración de filtros, en la barra lateral izquierda, haga clic en {% octicon "gear" aria-label="The Gear icon" %} junto a "Filters".

  {% tip %}

  **Sugerencia:** Para obtener una vista previa rápida de los resultados de la bandeja de entrada de un filtro, cree una consulta en la vista de la bandeja de entrada y haga clic en **Save**, con lo que se abre la configuración del filtro personalizado.

  {% endtip %}

3. Añade un nombre para tu filtro y query del mismo. Por ejemplo, para ver solo las notificaciones de un repositorio específico, puede crear un filtro mediante la consulta `repo:octocat/open-source-project-name reason:participating`. También puedes añadir emojis con un teclado que los tenga como nativos. Para obtener una lista de las consultas de búsqueda admitidas, consulte "[Consultas admitidas para filtros personalizados](#supported-queries-for-custom-filters)".

  ![Ejemplo de filtro personalizado](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Haga clic en **Crear**.

## Limitaciones de los filtros personalizados

Los filtros personalizados no son compatibles actualmente con:
  - Búsquedas de texto completo en tu bandeja de entrada, incluyendo búsquedas de los títulos de los informes de problemas o solicitudes de extracción.
  - Distinción entre los filtros de consulta `is:issue`, `is:pr` y `is:pull-request`. Estos queries darán como resultado tanto informes de verificación como solicitudes de extracción.
  - Crear más de 15 filtros personalizados.
  - Cambiar los filtros predeterminados o su orden.
  - [Exclusión de](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) búsqueda mediante `NOT` o `-QUALIFIER`.

## Queries compatibles para filtros personalizados

Estos son los tipos de filtro que puedes utilizar:
  - Filtrar por repositorio con `repo:`
  - Filtrar por tipo de debate con `is:`
  - Filtre por motivo de notificación con `reason:`{% ifversion fpt or ghec %}
  - Filtrar por autor de notificación con `author:`
  - Filtrar por organización con `org:`{% endif %}

### Consultas de `repo:` admitidas

Para agregar un filtro de `repo:`, debe incluir el propietario del repositorio en la consulta: `repo:owner/repository`. Un propietario es el usuario u organización al que pertenece el activo de {% data variables.product.prodname_dotcom %} que activa la notificación. Por ejemplo, `repo:octo-org/octo-repo` mostrará las notificaciones desencadenadas en el repositorio octo-repo dentro de la organización de octo-org.

### Consultas de `is:` admitidas

Para filtrar las notificaciones de una actividad específica en {% data variables.location.product_location %}, puedes usar la consulta `is`. Por ejemplo, para ver solo las actualizaciones de invitación al repositorio, use `is:repository-invitation`{% ifversion not ghae %}, y para ver solo {% data variables.product.prodname_dependabot_alerts %}, use `is:repository-vulnerability-alert`{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

Para información sobre cómo reducir el ruido de las notificaciones de {% data variables.product.prodname_dependabot_alerts %}, consulta "[Configuración de notificaciones de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

También puede utilizar la consulta `is:` para describir cómo se clasificó la notificación.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Consultas de `reason:` admitidas

Para filtrar las notificaciones según el motivo de la recepción de una actualización, puede usar la consulta `reason:`. Por ejemplo, para ver las notificaciones de cuando se le solicita a usted (o a un equipo del que forma parte) que revise una solicitud de incorporación de cambios, use `reason:review-requested`. Para obtener más información, consulte "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)".

| Consultar | Descripción |
|-----------------|-------------|
| `reason:assign` | Cuando hay una actualización en un informe de problemas o solicitud de extracción en los que estés asignado.
| `reason:author` | Cuando abres una solicitud de extracción o informe de problemas y ésta ha tenido una actualización o comentario nuevo.
| `reason:comment`| Cuando comentas en un informe de problemas, solicitud de extracción o debate de equipo.
| `reason:participating` | Cuando comenta en una incidencia, una solicitud de incorporación de cambios o un debate de equipo o cuando se le @mentioned.
| `reason:invitation` | Cuando se te invita a un equipo, organización o repositorio.
| `reason:manual` | Cuando hace clic en **Subscribe** en una incidencia o una solicitud de incorporación de cambios a la que aún no estaba suscrito.
| `reason:mention` | Cuando se le @mentioned directamente.
| `reason:review-requested` | Cuando se solicita a tu usuario o a algún equipo al que pertenezcas revisar una solicitud de extracción.
| `reason:security-alert` | Cuando se emite una alerta de seguridad para un repositorio.
| `reason:state-change`  | Cuando el estado de un informe de problemas o solicitud de extracción cambia. Por ejemplo, se cierra un informe de problemas o se fusiona una solicitud de extracción.
| `reason:team-mention` | Cuando se @mentioned a algún equipo al que pertenece.
| `reason:ci-activity` | Cuando un repositorio tiene una actualización de IC, tal como un nuevo estado de ejecución en un flujo de trabajo.

{% ifversion fpt or ghec %}
### Consultas de `author:` admitidas

Para filtrar las notificaciones por usuario, puede usar la consulta `author:`. Un autor es el autor original del hilo (propuesta, solicitud de cambios, gist, debate, etc.) del cual se te está notificando. Por ejemplo, para ver las notificaciones de los hilos creados por el usuario de Octocat, use `author:octocat`.

### Consultas de `org:` admitidas

Para filtrar las notificaciones por organización, puede usar la consulta `org`. La organización que necesitas especificar en la consulta es aquella del repositorio del cual se te está notificando en {% data variables.product.prodname_dotcom %}. Esta consulta es útil si perteneces a varias organizaciones y quieres ver las notificaciones de una organización específica.

Por ejemplo, para ver las notificaciones de la organización octo-org, use `org:octo-org`. 

{% endif %}

## Filtros personalizados del {% data variables.product.prodname_dependabot %}

{% ifversion fpt or ghec or ghes %} Si usas {% data variables.product.prodname_dependabot %} para actualizar las dependencias, puedes usar y guardar estos filtros personalizados:
- `is:repository_vulnerability_alert` para mostrar las notificaciones de {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` para mostrar las notificaciones de  {% data variables.product.prodname_dependabot_alerts %} y las solicitudes de incorporación de cambios de actualizaciones de seguridad.
- `author:app/dependabot` para mostrar las notificaciones generadas por {% data variables.product.prodname_dependabot %}. Esto incluye las {% data variables.product.prodname_dependabot_alerts %}, solicitudes de cambios para actualizaciones de seguridad y solicitudes de cambio para actualizaciones de versión.

Para obtener más información sobre {% data variables.product.prodname_dependabot %}, consulte "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion ghae %}

Si utilizas {% data variables.product.prodname_dependabot %} para que te informe sobre las dependencias no seguras, puedes usar y guardar estos filtros personalizados para mostrar notificaciones de {% data variables.product.prodname_dependabot_alerts %}:
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

Para obtener más información sobre {% data variables.product.prodname_dependabot %}, consulte "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

