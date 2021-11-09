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
shortTitle: Crear un informe de problemas
type: how_to
---

Las propuestas se pueden usar para hacer un seguimiento de los errores, mejoras u otras solicitudes. Para obtener más información, consulta "[Acerca de las propuestas](/issues/tracking-your-work-with-issues/about-issues)".

{% data reusables.repositories.administrators-can-disable-issues %}

## Crear una propuesta desde un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. Si tu repositorio utiliza plantillas, haz clic en **Iniciar** junto al tipo de propuesta que te gustaría abrir. ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png)O haz clic en **Abrir una propuesta en blanco** si el tipo de propuesta que te gustaría abrir no se incluye en las opciones disponibles. ![Enlace para abrir una propuesta en blanco](/assets/images/help/issues/blank_issue_link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Crear una propuesta con {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para aprender más sobre el {% data variables.product.prodname_cli %}, consulta la sección "[Acerca del {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Para crear una propuesta, utiliza el subcomando `gh issue create`. Para omitir los mensajes interactivos, incluye los marcadores `--body` y `--title`.

```shell
gh issue create --title "My new issue" --body "Here are more details".
```

También puedes especificar asignados, etiquetas, hitos y proyectos.

```shell
gh issue create --title "My new issue" --body "Here are more details". --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Crear una propuesta desde un comentario

Puedes abrir una propuesta nueva desde un comentario en otra propuesta o solicitud de cambios. Cuando abres un informe de problemas desde un comentario, este informe contiene un fragmento de código que muestra en dónde se hizo el comentario originalmente.

1. Navega al comentario desde el cual te gustaría abrir una propuesta.
2. Dentro del comentario, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Botón Kebab en el comentario de la revisión de solicitud de extracción](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Haz clic en **Reference in new issue** (Referencia en la propuesta nueva). ![Referencia en el elemento del menú de propuestas nuevas](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Usa el menú desplegable "Repository" (Repositorio) y selecciona el repositorio donde desees abrir la propuesta. ![Repositorio desplegable para nueva propuesta](/assets/images/help/pull_requests/new-issue-repository.png)
5. Escribe un título descriptivo y un cuerpo para la propuesta. ![Título y cuerpo para la nueva propuesta](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Haz clic en **Create issue** (Crear propuesta). ![Botón para crear la nueva propuesta](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Crear una propuesta desde el código

Puedes abrir una nueva propuesta desde una línea específica o líneas de código en un archivo o solicitud de extracción. Cuando abres una propuesta desde el código, la propuesta contiene un fragmento de código que muestra la línea o rango de código que elegiste. Solo puedes abrir una propuesta en el mismo repositorio donde se almacena el código.

![Fragmento de código representado en una propuesta abierta desde el código](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Ubica el código que deseas hacer referencia en una propuesta:
    - Para abrir una propuesta acerca de un código en un archivo, navega hasta el archivo.
    - Para abrir una propuesta acerca de un código en una solicitud de extracción, navega hasta la solicitud de extracción y haz clic en {% octicon "diff" aria-label="The file diff icon" %} **Files changed (Archivos modificados)**. Luego, desplázate hasta el archivo que contiene el código que deseas incluir en tu comentario y haz clic en **Ver**.
{% data reusables.repositories.choose-line-or-range %}
4. Hacia la izquierda del rango de código, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. En el menú desplegable, da clic en **Referenciar en nuevo informe de problemas**. ![Menú Kebab con opción para abrir una propuesta nueva desde una línea seleccionada](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion fpt or ghec %}

## Crear una propuesta a partir de un debate

Las personas con permiso de clasificación en un repositorio pueden crear una propuesta a partir de un debate.

Cuando creas una propuesta a partir de un debate, el contenido de la publicación del debate se incluirá automáticamente en el cuerpo de la propuesta y cualquier etiqueta se retendrá. El crear una propuesta a partir de un debate no convertirá el debate en una propuesta ni borrará el debate existente. Para obtener más información sobre los {% data variables.product.prodname_discussions %}, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, haz clic en {% octicon "issue-opened" aria-label="The issues icon" %} **Crear propuesta a partir de un debate**. ![Botón para crear una propuesta a partir de un debate](/assets/images/help/discussions/create-issue-from-discussion.jpg)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

## Crear una propuesta desde una nota de un tablero de proyecto

Si utilizas un tablero de proyecto para rastrear y priorizar tu trabajo, puedes convertir las notas del mismo en informes de problemas. Para obtener más información, consulta la sección "[Acerca de los tableros de proyecto](/github/managing-your-work-on-github/about-project-boards)" y "[Agregar notas a un tablero de proyecto](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% ifversion fpt or ghec %}

## Crear una propuesta desde un elemento de lista de tareas

Dentro de una propuesta, puedes utilizar las listas de tareas para desglosar el trabajo en tareas más pequeñas y rastrear todo el conjunto del trabajo hasta que se complete. Si se requiere más rastreo o debate, puedes convertir la tarea en una propuesta si deslizas el puntero del mouse sobre la tarea y haces clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la misma. Para obtener más información, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

{% endif %}

## Crear una propuesta desde una consulta de URL

Puedes consultar parámetros para abrir propuestas. Los parámetros de consulta son partes opcionales de una URL que puedes personalizar para compartir una vista de página web específica, como los resultados de filtro de búsqueda o una plantilla de propuestas en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

{% tip %}

**Sugerencia:** También puedes crear plantillas de propuestas que se abran con etiquetas, asignatarios y un título de propuesta predeterminados. Para obtener más información, consulta la sección "[Utilizar plantillas para fomentar las propuestas y solicitudes de cambio útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debes tener permiso para agregar una etiqueta a una propuesta para usar el parámetro de consulta `labels`. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

Si creas una URL inválida utilizando parámetros de consulta o si no tienes los permisos adecuados, la URL devolverá una página de error `404 Not Found`. Si creas una URL que exceda el límite del servidor, esta devolverá una página de error `414 URI Too Long`.

| Parámetro de consulta | Ejemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `título`              | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` crea una propuesta en la etiqueta "error" y el título "Nuevo informe de error".                                                                                                                                                                                                                                                                                                                                                                                                    |
| `cuerpo`              | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` crea una propuesta con el título "New bug report" y el comentario "Describe de problem" en el cuerpo de la misma.                                                                                                                                                                                                                                                                                                                                                  |
| `etiquetas`           | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` crea una propuesta con las etiquetas "help wanted" y "bug".                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `hito`                | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` crea una propuesta con el hito "probando hitos".                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `asignatarios`        | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` crea una propuesta y la asigna a @octocat.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `proyectos`           | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` crea una propuesta con el título "Solución del problema" y la agrega al tablero de proyecto 1 de la organización.                                                                                                                                                                                                                                                                                                                                                                |
| `plantilla`           | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` crea una propuesta con una plantilla en el cuerpo de la propuesta. El parámetro de consulta `template` funciona con plantillas almacenadas en un subdirectorio de `ISSUE_TEMPLATE` dentro de la raíz, el directorio `docs/` o el directorio `.github/` en un repositorio. Para obtener más información, consulta la sección "[Utilizar plantillas para fomentar las propuestas y solicitudes de cambio útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)". |

## Leer más

- "[Escribir en GitHub](/github/writing-on-github)"
