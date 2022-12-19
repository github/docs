---
title: Cargar cambios en GitHub
shortTitle: Pushing changes
intro: 'De manera que confirmes cambios localmente en tu proyecto, puedes cargarlos a {% data variables.product.prodname_dotcom %} para que otros puedan acceder a ellos desde el repositorio remoto.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092311'
---
## Acerca de cargar cambios a {% data variables.product.prodname_dotcom %}

Cuando cargas cambios, envías los cambios confirmados en tu repositorio local al repositorio remoto en {% data variables.product.prodname_dotcom %}. Si cambias tu proyecto localmente y quieres que otros tengan acceso a los cambios, deberás cargar los cambios a {% data variables.product.prodname_dotcom %}.

Antes de cargar los cambios, debes actualizar tu rama local para que incluya cualquier confirmación que se haya agregado al repositorio remoto. Si alguien hizo confirmaciones en la rama remota, las cuales no están en tu rama local, {% data variables.product.prodname_desktop %} te solicitará conseguir las confirmaciones nuevas antes de cargar tus cambios para evitar conflictos de fusión. Para más información, vea "[Sincronización de la rama](/desktop/contributing-to-projects/syncing-your-branch)".

{% data reusables.desktop.protected-branches %}

## Cargar cambios a {% data variables.product.prodname_dotcom %}

{% note %}

**Nota:** {% data variables.product.prodname_desktop %} rechazará una inserción si excede determinados límites.

- Una subida contiene un archivo grande de más de {% data variables.large_files.max_github_size %}.
- Una subida es de más de {% data variables.large_files.max_file_size %} en total.

Si configuras a {% data variables.large_files.product_name_long %} para rastrear tus archivos grandes, puedes subir aquellos que normalmente se rechazarían. Para más información, vea ["Acerca de {% data variables.large_files.product_name_long %} y {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)".

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Si {% data variables.product.prodname_desktop %} le pide que recupere las confirmaciones nuevas de la rama remota, haga clic en **Fetch** (Recuperar).
  ![El botón Fetch (Recuperar)](/assets/images/help/desktop/fetch-newer-commits.png)
3. Opcionalmente, haga clic en **Create Pull Request** (Crear solicitud de incorporación de cambios) para abrir una solicitud de incorporación de cambios y colaborar en los cambios. Para más información, vea "[Creación de una incidencia o una solicitud de incorporación de cambios](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" ![Botón Crear solicitud de incorporación de cambios](/assets/images/help/desktop/create-pull-request.png)

## Información adicional
- "[Inserción](/github/getting-started-with-github/github-glossary/#push)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Confirmación y revisión de cambios en el proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)"
