---
title: Automatización de los formularios de lanzamiento con parámetros de consulta
intro: 'Para crear lanzamientos al completar automáticamente el nuevo formulario de lanzamiento con información personalizada, puedes agregar los parámetros de consulta a la URL para la página del formulario de lanzamiento.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Los parámetros de consulta son partes opcionales de una URL que puedes personalizar para compartir una vista de página web específica, como los resultados de filtro de búsqueda, una plantilla de propuestas o la página del formulario de lanzamiento en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debes tener permiso para crear lanzamientos para completar previamente los formularios de lanzamiento. Para obtener más información, consulta "[Administrar lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)."

Si creas una URL no válida usando los parámetros de consulta o si no tienen los permisos adecuados, la URL devolverá una página de error 404.

### Parámetros de consulta admitidos

| Parámetro de consulta | Ejemplo                                                                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `etiqueta`            | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` create un lanzamiento en función de la etiqueta denominada "v1.0.1".                                                                 |
| `target`              | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` create un lanzamiento en función de la última confirmación a la rama "release-1.0.1".                                      |
| `título`              | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` crea un lanzamiento denominado "octo-1.0.1" basado en una etiqueta denominada "v1.0.1".                         |
| `cuerpo`              | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` crea un lanzamiento con la descripción "Adds widget support" (Agrega soporte de widget) en el cuerpo del lanzamiento. |
| `lanzamiento previo`  | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` crea un lanzamiento que será identificado como listo para no producción.                                                           |

### Leer más

- "[Acerca de la automatización para las propuestas y las solicitudes de extracción con parámetros de consulta ](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
