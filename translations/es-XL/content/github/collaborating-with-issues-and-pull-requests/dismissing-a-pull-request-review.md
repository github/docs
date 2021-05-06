---
title: Descartar una revisión de una solicitud de extracción
intro: 'Si tu repositorio [requiere revisiones(/articles/about-required-reviews-for-pull-requests), puedes descartar las revisiones de solicitudes de extracción que ya no son válidas o que no pueden ser aprobadas por el revisor.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.pull_requests.dismiss_review %}
Esto cambia el estado de la revisión, que pasa a ser un comentario de revisión. Cuando descartas una revisión, debes agregar un comentario que explique por qué la descartaste. Tu comentario se agregará a la conversación de la solicitud de extracción.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
3. En la pestaña "Conversación", desplázate hasta la revisión que deseas descartar y haz clic en {% octicon "chevron-down" aria-label="The down button" %}. ![Icono de comillas angulares en el cuadro de fusión](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego haz clic en **Descartar revisión**. ![Icono de kebab en el cuadro de fusión](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Escribe la razón por la que descartas la revisión y luego haz clic en **Descartar revisión**. ![Botón Dismiss review (Descartar revisión)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% else %}
3. En la pestaña "Conversación", desplázate hasta la revisión que deseas ver y luego haz clic en **Descartar revisión**. ![Opción para descartar una revisión](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
4. Escribe la razón por la que descartas la revisión y luego haz clic en **Descartar revisión**. ![Botón Dismiss review (Descartar revisión)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% endif %}

### Leer más

- "[Acerca de las revisiones de solicitudes de extracción](/articles/about-pull-request-reviews)"
- "[Revisar los cambios propuestos en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Acerca de las revisiones requeridas para las solicitudes de extracción](/articles/about-required-reviews-for-pull-requests)"
