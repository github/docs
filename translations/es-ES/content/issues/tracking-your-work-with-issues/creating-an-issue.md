---
title: Crear una propuesta
intro: 'Las propuestas pueden crearse de varias formas, así que puedes elegir el método más conveniente para tu flujo de trabajo.'
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410087'
---
Las propuestas se pueden usar para hacer un seguimiento de los errores, mejoras u otras solicitudes. Para más información, vea "[Acerca de las incidencias](/issues/tracking-your-work-with-issues/about-issues)".

{% data reusables.repositories.administrators-can-disable-issues %}

## Crear una propuesta desde un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Si en el repositorio se usan plantillas de incidencia, haga clic en **Comenzar** junto al tipo de incidencia que quiera abrir.
  ![Seleccione el tipo de incidencia que quiera crear](/assets/images/help/issues/issue_template_get_started_button.png), o bien haga clic en **Abrir una incidencia en blanco** si el tipo de incidencia que quiere abrir no está incluido en las opciones disponibles.
   ![Vínculo para abrir una incidencia en blanco](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Crear una propuesta con {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para más información sobre la {% data variables.product.prodname_cli %}, vea "[Acerca de la {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Para crear una incidencia, use el subcomando `gh issue create`. Para omitir las preguntas interactivas, incluya las marcas `--body` y `--title`.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

También puedes especificar asignados, etiquetas, hitos y proyectos.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Crear una propuesta desde un comentario

Puedes abrir una propuesta nueva desde un comentario en otra propuesta o solicitud de cambios. Cuando abres un informe de problemas desde un comentario, este informe contiene un fragmento de código que muestra en dónde se hizo el comentario originalmente.

1. Navega al comentario desde el cual te gustaría abrir una propuesta.
2. En ese comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Botón Kebab en el comentario de la revisión de solicitud de incorporación de cambios](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Haga clic en **Referencia en la nueva incidencia**.
  ![Elemento de menú Referencia en la nueva incidencia](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Usa el menú desplegable "Repository" (Repositorio) y selecciona el repositorio donde desees abrir la propuesta.
  ![Menú desplegable Repositorio para la nueva incidencia](/assets/images/help/pull_requests/new-issue-repository.png)
5. Escribe un título descriptivo y un cuerpo para la propuesta.
  ![Título y cuerpo de la nueva incidencia](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Haga clic en **Crear incidencia**.
  ![Botón para crear una incidencia](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Crear una propuesta desde el código

Puedes abrir una nueva propuesta desde una línea específica o líneas de código en un archivo o solicitud de extracción. Cuando abres una propuesta desde el código, la propuesta contiene un fragmento de código que muestra la línea o rango de código que elegiste. Solo puedes abrir una propuesta en el mismo repositorio donde se almacena el código.

![Fragmento de código representado en una propuesta abierta desde el código](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Ubica el código que deseas hacer referencia en una propuesta:
    - Para abrir una propuesta acerca de un código en un archivo, navega hasta el archivo.
    - Para abrir una incidencia sobre el código de una solicitud de incorporación de cambios, vaya a la solicitud de incorporación de cambios y haga clic en {% octicon "diff" aria-label="The file diff icon" %} **Archivos modificados**. Luego, desplácese hasta el archivo que contiene el código que quiera incluir en el comentario y haga clic en **Ver**.
{% data reusables.repositories.choose-line-or-range %}
4. A la izquierda del rango de código, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. En el menú desplegable, haga clic en **Referencia en la nueva incidencia**.
  ![Menú Kebab con la opción para abrir una incidencia nueva desde una línea seleccionada](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Crear una propuesta a partir de un debate

Las personas con permiso de clasificación en un repositorio pueden crear una propuesta a partir de un debate.

Cuando creas una propuesta a partir de un debate, el contenido de la publicación del debate se incluirá automáticamente en el cuerpo de la propuesta y cualquier etiqueta se retendrá. El crear una propuesta a partir de un debate no convertirá el debate en una propuesta ni borrará el debate existente. Para más información sobre {% data variables.product.prodname_discussions %}, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haga clic en {% octicon "issue-opened" aria-label="The issues icon" %} **Crear incidencia a partir del debate**.
   ![Botón para crear una incidencia a partir de un debate](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## Crear una propuesta desde una nota de un tablero de proyecto

Si utilizas un tablero de proyecto para rastrear y priorizar tu trabajo, puedes convertir las notas del mismo en propuestas. Para más información, vea "[Acerca de los paneles de proyecto](/github/managing-your-work-on-github/about-project-boards)" y "[Adición de notas a un panel de proyecto](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% ifversion fpt or ghec %}

## Crear una propuesta desde un elemento de lista de tareas

Dentro de una propuesta, puedes utilizar las listas de tareas para desglosar el trabajo en tareas más pequeñas y rastrear todo el conjunto del trabajo hasta que se complete. Si se requiere más rastreo o debate, puedes convertir la tarea en una propuesta si deslizas el puntero del mouse sobre la tarea y haces clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la misma. Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

{% endif %}

## Crear una propuesta desde una consulta de URL

Puedes consultar parámetros para abrir propuestas. Los parámetros de consulta son partes opcionales de una URL que puedes personalizar para compartir una vista de página web específica, como los resultados de filtro de búsqueda o una plantilla de propuestas en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

{% tip %}

**Sugerencia:** También puede crear plantillas de incidencias que se abran con etiquetas predeterminadas, usuarios asignados y un título de incidencia. Para más información, vea "[Uso de plantillas para fomentar incidencias útiles y solicitudes de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debe tener permiso para agregar una etiqueta a una incidencia para usar el parámetro de consulta `labels`. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Si crea una URL no válida con los parámetros de consulta o si no tiene los permisos adecuados, la URL devolverá una página de error `404 Not Found`. Si crea una dirección URL que supere el límite del servidor, la dirección URL devolverá una página de error `414 URI Too Long`.

Parámetro de consulta | Ejemplo
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` crea una incidencia con la etiqueta "error" y el título "Nuevo informe de errores".
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` crea una incidencia con el título "Nuevo informe de errores" y el comentario "Describir el problema" en el cuerpo de la incidencia.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` crea una incidencia con las etiquetas "help wanted" y "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` crea una incidencia con el hito "prueba de hitos".
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` crea una incidencia y la asigna a @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` crea una incidencia con el título "Corrección de errores" y la agrega al panel de proyecto 1 de la organización.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` crea una incidencia con una plantilla en el cuerpo. El parámetro de consulta `template` funciona con plantillas almacenadas en un subdirectorio `ISSUE_TEMPLATE` dentro del directorio raíz, `docs/` o `.github/` de un repositorio. Para más información, vea "[Uso de plantillas para fomentar incidencias útiles y solicitudes de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion code-scanning-task-lists %}
## Crear una propuesta desde una alerta del {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} Si usa incidencias para realizar el seguimiento del trabajo y clasificarlo por orden de prioridad, puede utilizar para realizar el seguimiento de las alertas de {% data variables.product.prodname_code_scanning %}.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Información adicional

- "[Escritura en GitHub](/github/writing-on-github)"
