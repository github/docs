---
title: Acerca de la automatización para propuestas y solicitudes de extracción con parámetros de consulta
intro: Puedes usar los parámetros de consulta para compartir URLs con información personalizada.
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - solicitudes de extracción
---

Los parámetros de consulta son partes opcionales de una URL que puedes personalizar para compartir una vista de página web específica, como los resultados de filtro de búsqueda o una plantilla de propuestas en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

{% tip %}

**Sugerencia:** También puedes crear plantillas de propuestas que se abran con etiquetas, asignatarios y un título de propuesta predeterminados. Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/articles/configuring-issue-templates-for-your-repository)" o "[Crear de forma manual una plantilla de propuesta para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% endtip %}

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debes tener permiso para agregar una etiqueta a una propuesta para usar el parámetro de consulta `labels`.

Si creas una URL no válida usando los parámetros de consulta o si no tienen los permisos adecuados, la URL devolverá una página de error 404.

### Parámetros de consulta admitidos

| Parámetro de consulta | Ejemplo                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cuerpo`              | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&body=Fixes+the+problem.` creates a pull request, comparing the branches `main` and `pull-request-test`, with the comment "Fixes the problem" in the pull request body. |
| `título`              | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` crea una propuesta en la etiqueta "error" y el título "Nuevo informe de error".                                                                                          |
| `etiquetas`           | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&labels=bug` creates a pull request, comparing the branches `main` and `pull-request-test`, with the label "bug."                                                       |
| `plantilla`           | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` crea una propuesta con una plantilla en el cuerpo de la propuesta.                                                                                                                |
| `hito`                | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` crea una propuesta con el hito "probando hitos".                                                                                                                                |
| `asignatarios`        | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` crea una propuesta y la asigna a @octocat.                                                                                                                                                 |
| `proyectos`           | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` crea una propuesta con el título "Solución del problema" y la agrega al tablero de proyecto 1 de la organización.                                                      |

### Completar propuestas y solicitudes de extracción con plantillas personalizadas

{% data reusables.repositories.legacy-issue-template-tip %}

Puedes usar el parámetro de consulta `template` para especificar una plantilla para completar de forma automática la propuesta o el cuerpo de la solicitud de extracción. El parámetro de consulta `template` funciona con las plantillas almacenadas en el subdirectorio `ISSUE_TEMPLATE` o `PULL_REQUEST_TEMPLATE` dentro de la raíz, del directorio `docs/` o `.github/` en un repositorio.

Si un repositorio contiene solo la solicitud de extracción o la plantilla de propuesta predeterminada, cualquier propuesta o solicitud de extracción nueva tendrá la plantilla predeterminada en el cuerpo.

Para obtener más información, consulta "[Crear una plantilla de solicitud de extracción para tu repositorio](/articles/creating-a-pull-request-template-for-your-repository)" o "[Crear de forma manual una plantilla de propuesta para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)".

### Leer más

- "[Automatización para formularios de lanzamiento con parámetros de consulta](/articles/automation-for-release-forms-with-query-parameters)"
