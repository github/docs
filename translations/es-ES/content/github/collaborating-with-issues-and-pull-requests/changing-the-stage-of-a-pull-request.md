---
title: Cambiar la etapa de una solicitud de extracción
intro: 'Puedes marcar una solicitud de cambios como lista para su revisión{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} o convertir una solicitud de cambios en un borrador{% endif %}.'
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Marcar una solicitud como lista para revisión

{% data reusables.pull_requests.mark-ready-review %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also mark a pull request as ready for review using the {% data variables.product.prodname_cli %}. For more information, see "[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas marcar como disponibles para revisión.
3. En la caja de fusión, da clic en **Listo para revisión**. ![Botón Ready for review (Disponible para revisión)](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### Convertir una solicitud de extracción en borrador

Puedes convertir una solicitud de extracción en borrador en cualquier momento. Por ejemplo, si accidentalmente abriste una solicitud de extracción en vez de un borrador, o si recibiste retroalimentación en tu solicitud de extracción, la cual necesitas atender, puedes convertirla en borrador para indicar que requiere más cambios. Nadie puede fusionar la solicitud de extracción hasta que la marques nuevamente como lista para revisión. Las personas que ya se han suscrito a las notificaciones de la solicitud de extracción no podrán darse de baja de éstas cuando la conviertas en borrador.

{% data reusables.repositories.sidebar-pr %}
2. En las lista de "Solicitudes de extracción", da clic en aquella que quieras convertir en borrador.
3. En la barra lateral derecha, debajo de "Revisores", da clic en **Convertir en borrador**. ![Enlace para convertir en borrador](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Da clic en **Convertir en borrador**. ![Confirmación de conversión a borrador](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### Leer más

- "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
