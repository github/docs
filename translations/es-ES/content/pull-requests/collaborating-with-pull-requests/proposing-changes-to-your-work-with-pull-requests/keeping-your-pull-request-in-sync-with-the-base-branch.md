---
title: Mantener sincronizada tu solicitud de cambios en la rama base
intro: 'Después de que abres una solicitud de cambios, puedes actualizar la rama de encabezado, la cual contiene tus cambios con cualquier otro que se haya hecho en la rama base.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Actualizar la rama de encabezado
---

## Acerca de mantener tu solicitud de cambios sincronizada

Antes de que fusiones tus solicitudes de cambios, podrían fusionarse otros cambios en la rama base, lo cual ocasionaría que tu rama de encabezado de la solicitud de cambios se desincronice. El actualizar tu solicitud de cambios con los últimos cambios de la rama base puede ayudarte a notar problemas antes de la fusión.

Puedes actualizar una rama de encabezado de una solicitud de cambios con la línea de comandos o en la página de la solicitud de cambios. Se mostrará el botón **Actualizar rama** cuando se cumpla con todo esto:

* Que no haya conflictos de fusión entre la rama de la solicitud de cambios y la rama base.
* Que la rama de la solicitud de cambios no esté actualizada con la rama base.
* Que la rama base requiera que las ramas estén actualizadas antes de fusionarlas{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} o que esté habilitada la configuración para que siempre se sugiera actualizar las ramas{% endif %}.

Para obtener más información, consulta las secciones "[Requerir verificaciones de estado antes de fusionar](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}" y "[Adminsitrar las sugerencias para actualizar las ramas de la solicitud de cambios](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}".

Si existen cambios en la rama base que ocasiones conflictos de fusión en la rama de tu solicitud de cambios, no podrás actualizar la rama hasta que se resuelvan todos los conflictos. Para obtener más información, consulta la sección "[Acerca de los conflictos de fusión](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)".

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
Desde la página de la solicitud de cambios, puedes actualizar la rama de tu solicitud de cambios utilizando una fusión tradicional o rebasando. Una fusión tradicional dará como resultado una confirmación de fusión que fusionará la rama base en la rama de encabezado de la solicitud de cambios. El rebase aplica los cambios desde _tu_ rama en la última versión de la rama base. El resultado es una rama con un historial linear, ya que no se crea ninguna confirmación de fusión.
{% else %}
El actualizar tu rama desde la página de solicitudes de cambio realizará una fusión tradicional. La confirmación de fusión resultante fusionará la rama base en la rama de encabezado de la solicitud de cambios.
{% endif %}

## Actualizar tu rama de solicitud de cambios

{% data reusables.repositories.sidebar-pr %}

1. En la lista de "Solicitud de cambios", haz clic en la solicitud que te gustaría actualizar.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. En la sección de fusión cerca de la parte inferior de la página, puedes:
   - Hacer clic en **Actualizar rama** para realizar una fusión tradicional. ![Botón para actualizar la rama](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Haz clic en el menú desplegable de "actualizar rama", luego en **Actualizar con rebase** y luego en **Rebasar rama** para actualizar rebasando en la rama base. ![Menú desplegable que muestra las opciones de rebase y fusión](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)
{% else %}
1. En la sección de fusión cerca de la parte inferior de la página, haz clic en **Actualizar rama** para realizar una fusión tradicional. ![Botón para actualizar una rama](/assets/images/help/pull_requests/pull-request-update-branch.png)
{% endif %}

## Leer más

- "[Acerca de las solicitudes de extracción](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Cambiar el estado de una solicitud de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[Confirmar cambios en una rama de la solicitud de extracción creada desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
