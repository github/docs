---
title: Automatización de los formularios de lanzamiento con parámetros de consulta
intro: 'Para crear lanzamientos al completar automáticamente el nuevo formulario de lanzamiento con información personalizada, puedes agregar los parámetros de consulta a la URL para la página del formulario de lanzamiento.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193567'
---
Los parámetros de consulta son partes opcionales de una URL que puedes personalizar para compartir una vista de página web específica, como los resultados de filtro de búsqueda, una plantilla de propuestas o la página del formulario de lanzamiento en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debes tener permiso para crear lanzamientos para completar previamente los formularios de lanzamiento. Para obtener más información, vea "[Administrar versiones en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)".

Si creas una URL no válida usando los parámetros de consulta o si no tienen los permisos adecuados, la URL devolverá una página de error 404.  

## Parámetros de consulta admitidos

Parámetro de consulta | Ejemplo
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` crea una versión basada en una etiqueta denominada "v1.0.1".
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` crea una versión basada en la confirmación más reciente en la rama "release-1.0.1".
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` crea una versión llamada "octo-1.0.1" basada en una etiqueta denominada "v1.0.1".
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` crea una versión con la descripción "Agrega compatibilidad con widgets" en el cuerpo de la versión.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` crea una versión que se identificará como lista para entornos que no son de producción.

## Información adicional

- "[Creación de una incidencia desde una consulta de URL](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)"
- "[Uso de parámetros de consulta para crear una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/)"
