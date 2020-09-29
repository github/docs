---
title: Cambiar la etapa de una solicitud de extracción
intro: 'Puedes marcar un borrador de solicitud de extracción como listo para revisión {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} o convertir la solicitud en borrador{% endif %}.'
permissions: Las personas con permisos de escritura en un repositorio y los autores de las solicitudes de extracción pueden cambiar la etapa de dichas solicitudes.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Marcar una solicitud como lista para revisión

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas marcar como disponibles para revisión.
3. En la caja de fusión, da clic en **Listo para revisión**. ![Botón Ready for review (Disponible para revisión)](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### Convertir una solicitud de extracción en borrador

Puedes convertir una solicitud de extracción en borrador en cualquier momento. Por ejemplo, si accidentalmente abriste una solicitud de extracción en vez de un borrador, o si recibiste retroalimentación en tu solicitud de extracción, la cual necesitas atender, puedes convertirla en borrador para indicar que requiere más cambios. Nadie puede fusionar la solicitud de extracción hasta que la marques nuevamente como lista para revisión. Las personas que ya se han suscrito a las notificaciones de la solicitud de extracción no podrán darse de baja de éstas cuando la conviertas en borrador.

{% data reusables.repositories.sidebar-pr %}
2. En las lista de "Solicitudes de extracción", da clic en aquella que quieras convertir en borrador.
3. En la barra lateral derecha, debajo de "Revisores", da clic en **Convertir en borrador**. ![Enlace para convertir en borrador](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Da clic en **Convertir en borrador**. ![Confirmación de conversión a borrador](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### Leer más

- "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
