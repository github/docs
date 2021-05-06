---
title: Administrar las notificaciones en tu bandeja de entrada
intro: 'Utiliza tu bandeja de entrada para clasificar y sincronizar rápidamente tus notificaciones a través de tu correo electrónico {% if currentVersion == "free-pro-team@latest" %} y dispositivos móviles{% endif %}.'
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

### Acerca de tu bandeja de entrada

{% if currentVersion == "free-pro-team@latest" %}
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
| Guardar                 | Guarda tu notificación para revisarla posteriormente. Para guardar una notificación, da clic en {% octicon "bookmark" aria-label="The bookmark icon" %} al lado derecho de la misma. <br> <br> Las notificaciones guardadas se mantienen por tiempo indefinido y puedes verlas si das clic en **Guardadas** en la barra lateral o con el query `is:saved`. Si guardas las notificaciones por más de 5 meses y luego las dejas de guardar, estas desaparecerán de tu bandeja de entrada en un día. |
| Done                    | Marca una notificación como completada y elimina la notificación de tu bandeja de entrada. Puedes ver todas las notificaciones completadas dando clic en **Completado** dentro de la barra lateral o con el query `is:done`. Las notificaciones marcadas como **Completado** se guardan por 5 meses.                                                                                                                                                                                                          |
| Darse de baja           | Elimina automáticamente la notificación de tu bandeja de entrada y te da de baja de la conversación hasta que se @mencione a tu usuario o a algún equipo al que pertenezcas, o cuando se te solicite una revisión.                                                                                                                                                                                                                                                                                            |
| Lectura                 | Marca la notificación como leída. Para ver únicamente las notificaciones leídas en tu bandeja de entrada, utiliza el query `is:read`. Este query no incluirá a las notificaciones marcadas como **Completado**.                                                                                                                                                                                                                                                                                               |
| Sin leer                | Mara la notificación como no leída. Para ver únicamente las notificaciones sin leer en tu bandeja de entrada, utiliza el query `is:unread`.                                                                                                                                                                                                                                                                                                                                                                   |

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

4. Haz clic en **Create** (crear).

### Limitaciones de los filtros personalizados

Los filtros personalizados no son compatibles actualmente con:
  - Búsquedas de texto completo en tu bandeja de entrada, incluyendo búsquedas de los títulos de los informes de problemas o solicitudes de extracción.
  - Distinción entre los queries de filtro `is:issue`, `is:pr`, y `is:pull-request`. Estos queries darán como resultado tanto informes de verificación como solicitudes de extracción.
  - Crear más de 15 filtros personalizados.
  - Cambiar los filtros predeterminados o su orden.

### Queries compatibles para filtros personalizados

Existen tres tipos de filtros que puedes utilizar:
  - Filtrar por repositorio con `repo:`
  - Filtrar por tipo de debate con `is:`
  - Filtrar por la razón de la notificación con `reason:`

Para gregar un filtro de `repo:`, debes incluir al dueño del repositorio en la consulta. Por ejemplo, `repo:atom/atom` representa el repositorio de Atom que pertenece a la organización Atom.

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
| `reason:review-requested` | Cuando se solicita a tu usuario o a algún equipo al que pertenezcas revisar una solicitud de extracción.                                                               |
| `reason:security-alert`   | Cuando se emite una alerta de seguridad para un repositorio.                                                                                                           |
| `reason:state-change`     | Cuando el estado de un informe de problemas o solicitud de extracción cambia. Por ejemplo, se cierra un informe de problemas o se fusiona una solicitud de extracción. |
| `reason:team-mention`     | Cuando se @menciona a algún equipo al que pertenezcas.                                                                                                                 |
| `reason:ci-activity`      | Cuando un repositorio tiene una actualización de IC, tal como un nuevo estado de ejecución en un flujo de trabajo.                                                     |

#### Queries de tipo `is:` compatibles

Para filtrar las notificaciones para una actividad específica en {% data variables.product.product_name %}, puedes utililzar la consulta `is`. Por ejemplo, para ver únicamente las actualizaciones de invitación a un repositorio, utiliza `is:repository-invitation`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:team-discussion`

También puedes utilizar la consulta `is:` para describir cómo se clasificó la notificación.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`
