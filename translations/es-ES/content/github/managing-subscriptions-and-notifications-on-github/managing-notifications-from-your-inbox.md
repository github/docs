---
title: Administrar las notificaciones en tu bandeja de entrada
intro: 'Utiliza tu bandeja de entrada para clasificar y sincronizar tus notificaciones rápidamente a través de tu correo electrónico{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} y dispositivo móvil{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
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

Estos son los tipos de filtro que puedes utilizar:
  - Filtrar por repositorio con `repo:`
  - Filtrar por tipo de debate con `is:`
  - Filtrar por razón de la notificación con `reason:`{% if currentVersion == "free-pro-team@latest" %}
  - Filtrar por autor de la notificación con `author:`
  - Filtrar por organización con `org:`{% endif %}

#### Consultas de `repo:` compatibles

Para agregar un filtro de `repo:`, debes incluir al propietario del repositorio en la consulta: `repo:owner/repository`. Un propietario es el usuario u organización al que pertenece el activo de {% data variables.product.prodname_dotcom %} que activa la notificación. Por ejemplo, `repo:octo-org/octo-repo` mostrará las notificaciones que se activaron en el repositorio octo-repo dentro de la organización octo-org.

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
#### Consultas de `author:` compatibles

Para filtrar notificaciones por usuario, puedes utilizar la consulta `author:`. Un autor es el autor original del hilo (propuesta, solicitud de cambios, gist, debate, etc.) del cual se te está notificando. Por ejemplo, para ver las notificaciones de los hilos que creó el usuario Octocat, utiliza `author:octocat`.

#### Consultas de `org:` compatibles

Para filtrar las notificaciones por organización, puedes utilizar la consulta `org`. La organización que necesitas especificar en la consulta es aquella del repositorio del cual se te está notificando en {% data variables.product.prodname_dotcom %}. Esta consulta es útil si perteneces a varias organizaciones y quieres ver las notificaciones de una organización específica.

Por ejemplo, para ver las notificaciones de la organización octo-org, utiliza `org:octo-org`.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Filtros personalizados del {% data variables.product.prodname_dependabot %}

{% if currentVersion == "free-pro-team@latest" %}
Si utilizas
al {% data variables.product.prodname_dependabot %} para mantener actualizadas tus dependencias, puedes usar y guardar estos filtros personalizados:
- `is:repository_vulnerability_alert` para mostrar notificaciones para las {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` para mostrar notificaciones para las {% data variables.product.prodname_dependabot_alerts %} y las solicitudes de cambios de las actualizaciones de seguridad.
- `author:app/dependabot` para mostrar las notificaciones que genera el {% data variables.product.prodname_dependabot %}. Esto incluye las {% data variables.product.prodname_dependabot_alerts %}, solicitudes de cambios para actualizaciones de seguridad y solicitudes de cambio para actualizaciones de versión.
Para obtener más información sobre

el {% data variables.product.prodname_dependabot %}, consulta la sección[Acerca de administrar las dependencias vulnerables](/github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Si utilizas
el {% data variables.product.prodname_dependabot %} para mantener actualizadas tus dependencias, puedes utilizar y guardar el filtro personalizado `is:repository_vulnerability_alert` para mostrar las notificaciones para las {% data variables.product.prodname_dependabot_alerts %}.
Para obtener más información sobre

el {% data variables.product.prodname_dependabot %}, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% endif %}
