---
title: Crear nuevos archivos
intro: 'Puedes crear nuevos archivos directamente en {% data variables.product.product_name %} en cualquier repositorio al que tengas acceso de escritura.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136572'
---
Cuando crees un archivo en {% data variables.product.product_name %}, ten en cuenta lo siguiente:

- Si intentas crear un archivo en un repositorio al que no tienes acceso, bifurcaremos el proyecto a tu cuenta personal y te ayudaremos a enviar [una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) al repositorio original después de confirmar el cambio.
- Los nombres de archivo creados desde la interfaz web solo pueden contener caracteres alfanuméricos y guiones (`-`). Para usar otros caracteres, [cree y confirme los archivos localmente y, a continuación, insértelos en el repositorio en {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. En tu repositorio, dirígete a la carpeta en la que deseas crear un archivo.
{% data reusables.files.add-file %}
4. En el campo de nombre, teclea el nombre y la extensión del archivo. Para crear subdirectorios, escriba el separador de directorios `/`.
![Nuevo nombre de archivo](/assets/images/help/repository/new-file-name.png)
5. En la pestaña **Edit new file**, agregue contenido al archivo.
![Contenido del nuevo archivo](/assets/images/help/repository/new-file-content.png)
6. Para revisar el nuevo contenido, haga clic en **Preview**.
![Botón de vista previa del nuevo archivo](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
