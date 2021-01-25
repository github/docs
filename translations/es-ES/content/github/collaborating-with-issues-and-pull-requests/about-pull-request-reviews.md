---
title: Acerca de las revisiones de solicitudes de extracción
intro: 'Las revisiones le permiten a los colaboradores comentar los cambios propuestos en las solicitudes de extracción, aprobar los cambios o solicitar más cambios antes de que se fusione la solicitud de extracción. Los administradores de repositorio pueden solicitar que todas las solicitudes de extracción sean aprobadas antes de ser fusionadas.'
redirect_from:
  - /articles/about-pull-request-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de las revisiones de solicitudes de extracción

Después de abrir una solicitud de extracción, cualquiera con acceso de *lectura* puede revisar y comentar sobre los cambios propuestos. También puedes sugerir cambios específicos a las líneas de código que el autor puede aplicar directamente desde las solicitud de extracción. Para obtener más información, consulta "[Revisar las modificaciones propuestas en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)."

Los colaboradores y los propietarios del repositorio pueden solicitar la revisión de una solicitud de extracción por parte de una persona específica. Los miembros de la organización también pueden solicitar la revisión de una solicitud de extracción por parte de un equipo con acceso de lectura al repositorio. Para obtener más información, consulta "[Solicitar la revisión de una solicitud de extracción](/articles/requesting-a-pull-request-review/)". {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Puedes especificar un subconjunto de miembros de un equipo para que se asignen automáticamente en lugar de que se haga con todo el equipo. Para obtener más información, consulta la sección "[Administrar una tarea de revisión de código para tu equipo](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)".{% endif %}

Las revisiones permiten el debate de los cambios propuestos y ayudan a asegurarse de que los cambios cumplen con las pautas de contribución del repositorio y otras normas de calidad. Puedes definir qué individuos o equipos poseen ciertos tipos o áreas de código en un archivo CODEOWNERS. Cuando una solicitud de extracción modifica un código que tiene un propietario definido, ese individuo o equipo será solicitado automáticamente como revisor. Para obtener más información, consulta "[Acerca de los propietarios del código](/articles/about-code-owners/)".

{% if currentVersion == "free-pro-team@latest" %}Puedes programar recordatorios para solicitudes de cambios que necesiten revisarse. Para obtener más información, consulta la sección "[ Administrar los recordatorios programados para solicitudes de extracción](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)".{% endif %}

![Encabezado de revisión solicitando cambios con comentarios en la línea](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Un revisión tiene tres posibles estado:
- **Comentario**: envía opiniones en general sin aprobar explicitamente los cambios ni solicitar cambios adicionales.
- **Aprobar**: envía opiniones y aprueba la fusión de los cambios propuestos en la solicitud de extracción.
- **Solicitar cambios**: envía opiniones que deben ser abordadas antes de que se pueda fusionar la solicitud de extracción.

![Imagen de los estados de revisión](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Puedes ver todas las revisiones que ha recibido una solicitud de extracción en la cronología de conversaciones y puedes ver las revisiones realizadas por los colaboradores y los propietarios del repositorio en la casilla de fusión de la solicitud de extracción.

![Imagen de las revisiones en una casilla de fusión](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

### Volver a solicitar una revisión

{% data reusables.pull_requests.re-request-review %}

### Revisiones requeridas

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Sugerencia**: De ser necesario, las personas con acceso de *administración* o de *escritura* a un repositorio pueden descartar una revisión de solicitud de extracción. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/articles/dismissing-a-pull-request-review)".

{% endtip %}

### Further reading

- "[Revisar los cambios propuestos en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Ver la revisión de una solicitud de extracción](/articles/viewing-a-pull-request-review)"
- "[Configurar pautas para los colaboradores de repositorios](/articles/setting-guidelines-for-repository-contributors)"
