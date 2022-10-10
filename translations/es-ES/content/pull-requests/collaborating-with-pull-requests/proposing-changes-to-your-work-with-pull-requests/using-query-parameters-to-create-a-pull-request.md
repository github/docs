---
title: Utilizar parámetros de consulta para crear una solicitud de cambios
intro: Utiliza parámetros de consulta para crear URL personalizadas para abrir las solicitudes de cambios con los campos llenados previamente.
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139589'
---
Puedes utilizar parámetros de consulta para abrir solicitudes de cambios. Los parámetros de consulta son partes opcionañles de una URL que puedes personalizar para compartir una vista específica de una página web, tal como los resultados con filtro de búsqueda o una plantilla de solicitud de cambios en {% data variables.product.prodname_dotcom %}. Para crear tus propios parámetros de consulta, debes hacer coincidir el par de clave y valor.

{% tip %}

**Sugerencia:** También puedes crear plantillas de solicitud de incorporación de cambios que se abran con etiquetas, usuarios asignados y un título predeterminados. Para obtener más información, consulta "[Uso de plantillas para fomentar propuestas y solicitudes de incorporación de cambios útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Debes tener los permisos adecuados para cualquier acción para usar el parámetro de consulta equivalente. Por ejemplo, debes tener permiso para agregar una etiqueta a una solicitud de incorporación de cambios para usar el parámetro de consulta `labels`. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Si crea una URL no válida con los parámetros de consulta o si no tiene los permisos adecuados, la URL devolverá una página de error `404 Not Found`. Si crea una dirección URL que supere el límite del servidor, la dirección URL devolverá una página de error `414 URI Too Long`.

Parámetro de consulta | Ejemplo
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` crea una solicitud de incorporación de cambios que compara la rama base `main` y la rama principal `my-branch`. La consulta `quick_pull=1` te lleva directamente a la página "Abrir una solicitud de incorporación de cambios".
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` crea una solicitud de incorporación de cambios con la etiqueta "bug" y el título "Bug fix".
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` crea una solicitud de incorporación de cambios con el título "Bug fix" y el comentario "Describe the fix" en el cuerpo de la solicitud de incorporación de cambios.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` crea una solicitud de incorporación de cambios con las etiquetas "help wanted" y "bug".
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` crea una solicitud de incorporación de cambios con el hito "testing milestones".
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` crea una solicitud de incorporación de cambios y la asigna a @octocat.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` crea una incidencia con el título "Bug fix" y la agrega al panel de proyecto 1 de la organización.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` crea una solicitud de incorporación de cambios con una plantilla en el cuerpo de la solicitud de incorporación de cambios. El parámetro de consulta `template` funciona con plantillas almacenadas en un subdirectorio de `PULL_REQUEST_TEMPLATE` dentro del directorio raíz, `docs/` o el directorio `.github/` de un repositorio. Para obtener más información, consulta "[Uso de plantillas para fomentar propuestas y solicitudes de incorporación de cambios útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
