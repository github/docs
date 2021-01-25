---
title: Administrar las notificaciones en tu bandeja de entrada
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Acerca de tu bandeja de entrada

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %}Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".
{% endif %}

Para acceder a tu bandeja de notificaciones, en la esquina superior derecha de cualquier página, da clic en {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notificación que indica cualquier mensaje no leído](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Tu bandeja de entrada muestra todas las notificaciones de las cuales aún no te has desuscrito o que no has marcado como **Hecho**. Puedes personalizar tu bandeja de entrada como mejor se acople con tu flujo de trabajo utilizando filtros, visualizando todas las notificaciones o únicamente las que no se han leído, y agrupando tus notificaciones para obtener un resumen rápido.

  ![vista de bandeja de entrada](/assets/images/help/notifications-v2/inbox-view.png)

Predeterminadamente, tu bandeja de entrada mostrará las notificaciones leídas y no leídas. Para solo ver las no leídas, da clic en **No leídas** o utiliza la consulta `is:unread`.

  ![vista de no leídos en bandeja de entrada](/assets/images/help/notifications-v2/unread-inbox-view.png)

### Opciones de clasificación

Tienes varias opciones para clasificar las notificaciones de tu bandeja de entrada.

| Opción de clasificación | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save                    | Guarda tu notificación para revisarla posteriormente. Para guardar una notificación, da clic en {% octicon "bookmark" aria-label="The bookmark icon" %} al lado derecho de la misma. <br> <br> Las notificaciones guardadas se mantienen por tiempo indefinido y puedes verlas si das clic en **Guardadas** en la barra lateral o con el query `is:saved`. Si guardas las notificaciones por más de 5 meses y luego las dejas de guardar, estas desaparecerán de tu bandeja de entrada en un día. |
| Done                    | Marca una notificación como completada y elimina la notificación de tu bandeja de entrada. Puedes ver todas las notificaciones completadas dando clic en **Hecho** dentro de la barra lateral o con el query `is:done`. Las notificaciones marcadas como **Hecho** se guardan por 5 meses.                                                                                                                                                                                                                    |
| Unsubscribe             | Elimina automáticamente la notificación de tu bandeja de entrada y te da de baja de la conversación hasta que se @mencione a tu usuario o a algún equipo al que pertenezcas, o cuando se te solicite una revisión.                                                                                                                                                                                                                                                                                            |
| Read                    | Marca la notificación como leída. Para ver únicamente las notificaciones leídas en tu bandeja de entrada, utiliza el query `is:read`. Este query no incluirá a las notificaciones marcadas como **Hecho**.                                                                                                                                                                                                                                                                                                    |
| Unread                  | Mara la notificación como no leída. Para ver únicamente las notificaciones sin leer en tu bandeja de entrada, utiliza el query `is:unread`.                                                                                                                                                                                                                                                                                                                                                                   |

Para ver los atajos de teclado disponibles, consulta la sección "[Atajos de Teclado](/github/getting-started-with-github/keyboard-shortcuts#notifications)".

Antes de escoger una opción de clasificación, puedes prever los detalles de la notificación e investigar. Para obtener más información, consulta la sección "[Clasificar una sola notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)".

### Clasificar varias notificaciones al mismo tiempo

Para clasificar varias notificaciones de una sola vez, selecciona las notificaciones relevantes y utiliza el menú desplegable de {% octicon "kebab-horizontal" aria-label="The edit icon" %} para elegir una opción de clasificación.

![Menú desplegable con opciones de clasificación y notificaciones seleccionadas](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### Filtros de notificación predeterminados

Predeterminadamente, tu bandeja de entrada tiene filtros para cuando se te asigna, participas en un hilo, se te solicita revisar una solicitud de extracción, o cuando se @menciona a tu usuario directamente o a un equipo del cual eres miembro.

  ![Filtros personalizados predeterminados](/assets/images/help/notifications-v2/default-filters.png)

### Personalizar tu bandeja de entrada con filtros personalizados

Puedes agregar hasta 15 de tus filtros personalizados.

{% data reusables.notifications.access_notifications %}
2. Para abrir la configuración de filtros, en la barra lateral izquierda, a lado de "Filtros", da clic en {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Tip:** Puedes prever rápidamente los resultados del filtro en la bandeja de entrada si creas un query en ella y das clic en **Guardar**, lo cual abrirá la configuración del filtro personalizado.

  {% endtip %}

3. Añade un nombre para tu filtro y query del mismo. Por ejemplo, para ver únicamente las notificaciones de un repositorio específico, puedes crear un filtro utilizando el query `repo:octocat/open-source-project-name reason:participating`. También puedes añadir emojis con un teclado que los tenga como nativos. Para ver una lista de queries de búsqueda compatibles, consulta la sección "[Queries compatibles para filtros personalizados](#supported-queries-for-custom-filters)".

  ![Ejemplo de filtro personalizado](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Da clic en **Crear**.

### Limitaciones de los filtros personalizados

Los filtros personalizados no son compatibles actualmente con:
  - Búsquedas de texto completo en tu bandeja de entrada, incluyendo búsquedas de los títulos de los informes de problemas o solicitudes de extracción.
  - Distinción entre los queries de filtro `is:issue`, `is:pr`, y `is:pull-request`. Estos queries darán como resultado tanto informes de verificación como solicitudes de extracción.
  - Crear más de 15 filtros personalizados.
  - Cambiar los filtros predeterminados o su orden.
  - Busca la [exclusión](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) utilizando `NOT` o `-QUALIFIER`.

### Queries compatibles para filtros personalizados

These are the types of filters that you can use:
  - Filtrar por repositorio con `repo:`
  - Filtrar por tipo de debate con `is:`
  - Filter by notification reason with `reason:`{% if currentVersion == "free-pro-team@latest" %}
  - Filter by notification author with `author:`
  - Filter by organization with `org:`{% endif %}

#### Supported `repo:` queries

To add a `repo:` filter, you must include the owner of the repository in the query: `repo:owner/repository`. An owner is the organization or the user who owns the {% data variables.product.prodname_dotcom %} asset that triggers the notification. For example, `repo:octo-org/octo-repo` will show notifications triggered in the octo-repo repository within the octo-org organization.

#### Queries de tipo `is:` compatibles

Para filtrar las notificaciones para una actividad específica en {% data variables.product.product_name %}, puedes utililzar la consulta `is`. Por ejemplo, para ver únicamente las actualizaciones de las invitaciones al repositorio, utiliza `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}, y para ver únicamente las alertas de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% else %}seguridad{% endif %} del {% data variables.product.prodname_dependabot %}, utiliza `is:repository-vulnerability-alert`.{% endif %}

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}
- `is:repository-vulnerability-alert`
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% if currentVersion == "free-pro-team@latest" %}
- `is:discussions`{% endif %}

{% if currentVersion != "github-ae@latest" %}
Para obtener más información sobre la reducción de ruido de las notificaciones de
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}las alertas de seguridad{% endif %}, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

También puedes utilizar la consulta `is:` para describir cómo se clasificó la notificación.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

#### Queries de tipo `reason:` compatibles

Para filtrar las notificaciones de acuerdo con la razón por la cual recibiste una actualización, puedes utilizar la consulta `reason:`. Por ejemplo, para ver las notificaciones cuando se solicita (a ti o a un equipo al que pertenezcas) revisar una solicitud de extracción, utiliza `reason:review-requested`. Para obtener más información, consulta la sección "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)".

| Consulta                  | Descripción                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason:assign`           | Cuando hay una actualización en un informe de problemas o solicitud de extracción en los que estés asignado.                                                           |
| `reason:author`           | Cuando abres una solicitud de extracción o informe de problemas y ésta ha tenido una actualización o comentario nuevo.                                                 |
| `reason:comment`          | Cuando comentas en un informe de problemas, solicitud de extracción o debate de equipo.                                                                                |
| `reason:participating`    | Cuando comentas en un informe de problemas, solicitud de extracción o debate de equipo en el que te @mencionaron.                                                      |
| `reason:invitation`       | Cuando se te invita a un equipo, organización o repositorio.                                                                                                           |
| `reason:manual`           | Cuando das clic en **Suscribirse** en un informe de problemas o solicitud de extracción al que no estuvieras suscrito.                                                 |
| `reason:mention`          | Cuando te @mencionan directamente.                                                                                                                                     |
| `reason:review-requested` | Ya sea tú o un equipo en el que estás solicitó revisar una solicitud de cambios.{% if currentVersion != "github-ae@latest" %}
| `reason:security-alert`   | Cuando se emite una alerta de seguridad para un repositorio.{% endif %}
| `reason:state-change`     | Cuando el estado de un informe de problemas o solicitud de extracción cambia. Por ejemplo, se cierra un informe de problemas o se fusiona una solicitud de extracción. |
| `reason:team-mention`     | Cuando se @menciona a algún equipo al que pertenezcas.                                                                                                                 |
| `reason:ci-activity`      | Cuando un repositorio tiene una actualización de IC, tal como un nuevo estado de ejecución en un flujo de trabajo.                                                     |

{% if currentVersion == "free-pro-team@latest" %}
#### Supported `author:` queries

To filter notifications by user, you can use the `author:` query. An author is the original author of the thread (issue, pull request, gist, discussions, and so on) for which you are being notified. For example, to see notifications for threads created by the Octocat user, use `author:octocat`.

#### Supported `org:` queries

To filter notifications by organization, you can use the  `org` query. The organization you need to specify in the query is the organization of the repository for which you are being notified on {% data variables.product.prodname_dotcom %}. This query is useful if you belong to several organizations, and want to see notifications for a specific organization.

For example, to see notifications from the octo-org organization, use `org:octo-org`.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot %} custom filters

{% if currentVersion == "free-pro-team@latest" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies up-to-date, you can use and save these custom filters:
- `is:repository_vulnerability_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %} and security update pull requests.
- `author:app/dependabot` to show notifications generated by {% data variables.product.prodname_dependabot %}. This includes {% data variables.product.prodname_dependabot_alerts %}, security update pull requests, and version update pull requests.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About managing vulnerable dependencies](/github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies-up-to-date, you can use and save the `is:repository_vulnerability_alert` custom filter to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
{% endif %}

{% endif %}
