---
title: Revisar los cambios propuestos en una solicitud de extracción
intro: 'En una solicitud de extracción, puedes revisar y opinar sobre las confirmaciones, los archivos cambiados y las diferencias (o "diff") entre los archivos de las ramas de base y comparada.'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de revisar las solicitudes de extracción

Puedes revisar los cambios de una solicitud de extracción en un archivo por vez. Mientras revisas los archivos en una solicitud de extracción, puedes dejar comentarios individuales sobre cambios específicos.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} Después de que termines de revisar cada archivo, puedes marcar el archivo como visto. Esto colapsa el archivo, lo cual te ayuda a identificar los archivos que aún debes revisar. Una barra de progreso en el encabezado de la solicitud de extracción muestra la cantidad de archivos que ya viste.{% endif %} Después de revisar tantos archivos como quieras, puedes aprobar la solicitud de extracción o solicitar cambios adicionales enviando tu revisión con un comentario resumen.

{% data reusables.search.requested_reviews_search_tip %}

### Comenzar una revisión

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. Cuando estés listo, haz clic en **Start a review** (Comenzar una revisión). Si ya comenzaste una revisión, puedes hacer clic en **Add review comment** (Agregar comentario de revisión). ![Botón Start a review (Comenzar una revisión)](/assets/images/help/pull_requests/start-a-review-button.png)

Antes de enviar tu revisión, tus comentarios de líneas quedan _pendientes_, y solo tú los puedes ver. Puedes editar los comentarios pendientes en cualquier momento antes de enviar tu revisión. Para cancelar una revisión pendiente, incluidos todos sus comentarios pendientes, desplázate hasta el final de la cronología en la pestaña Conversation (Conversación) y haz clic en **Cancel review** (Cancelar revisión).

![Botón Cancel review (Cancelar revisión)](/assets/images/help/pull_requests/cancel-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
### Marcar un archivo como visto

Después de que hayas terminado de revisar un archivo, puedes marcar el archivo como visto, y el archivo se colapsará. Si el archivo se modifica después de que lo hayas visto, dejará de estar marcado como visto.

{% data reusables.repositories.changed-files %}
2. A la derecha del encabezado del archivo que terminaste de revisar, selecciona **Viewed** (Visto). ![Casilla Viewed (Visto)](/assets/images/help/pull_requests/viewed-checkbox.png)
{% endif %}

### Enviar tu revisión

Después de que hayas terminado de revisar todos los archivos que quieras de la solicitud de extracción, envía tu revisión.

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. Selecciona el tipo de revisión que te gustaría proporcionar: ![Botones de selección con opciones de revisión](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - Selecciona **Comment** (Comentario) para dejar una opinión general sin aprobar de manera explícita los cambios ni solicitar cambios adicionales.
    - Selecciona **Approve** (Aprobar) para enviar tus comentarios y aprobar la fusión de los cambios propuestos en la solicitud de extracción.
    - Selecciona **Request changes** (Solicitar cambios) para enviar comentarios que se deban tener en cuenta antes de que se pueda fusionar la solicitud de extracción.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Leer más

- "[Acerca de las revisiones de solicitudes de extracción](/articles/about-pull-request-reviews)"
- "[Acerca de las revisiones requeridas para las solicitudes de extracción](/articles/about-required-reviews-for-pull-requests)"
- "[Aprobar una solicitud de extracción con revisiones requeridas](/articles/approving-a-pull-request-with-required-reviews)"
- "[Comentar sobre una solicitud de extracción](/articles/commenting-on-a-pull-request)"
- "[Filtrar solicitudes de extracción por estado de revisión](/articles/filtering-pull-requests-by-review-status)"
