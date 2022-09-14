---
title: Borrar los archivos en un repositorio
intro: 'Puedes eliminar un archivo individual{% ifversion fpt or ghes or ghec %} o un directorio completo{% endif %} en el repositorio en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136566'
---
## Acerca de la eliminación de archivos{% ifversion fpt or ghes or ghec %} y directorios{% endif %}

Puede eliminar un archivo individual en el repositorio{% ifversion fpt or ghes or ghec %} o un directorio completo, incluidos todos los archivos del directorio{% endif %}.

Si intentas eliminar un archivo{% ifversion fpt or ghes or ghec %} o directorio{% endif %} de un repositorio para el que no tengas permisos de escritura, bifurcaremos el proyecto a la cuenta personal y te ayudaremos a enviar una solicitud de incorporación de cambios al repositorio original después de confirmar el cambio. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Si el archivo{% ifversion fpt or ghes or ghec %} o directorio{% endif %} que ha eliminado contiene datos confidenciales, los datos seguirán estando disponibles en el historial de Git del repositorio. Para eliminar el archivo por completo de {% data variables.product.product_name %}, debes eliminar el archivo del historial de tu repositorio. Para más información, vea "[Eliminación de datos confidenciales de un repositorio](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

## eliminar un archivo

1. Dirígete al archivo que deseas eliminar de tu repositorio.
2. En la parte superior del archivo, haga clic en {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## Borrar un directorio

1. Navega hasta el directorio que deseas borrar en tu repositorio.
1. En la esquina superior derecha, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **Eliminar directorio**.
  ![Botón para eliminar un directorio](/assets/images/help/repository/delete-directory-button.png)
1. Revisa los archivos que borrarás.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
