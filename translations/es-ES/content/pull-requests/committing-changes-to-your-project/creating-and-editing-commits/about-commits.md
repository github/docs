---
title: Acerca de las confirmaciones
intro: Puedes guardar grupos pequeños de cambios significativos como confirmaciones.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410527'
---
## Acerca de las confirmaciones

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} Si el repositorio que estás confirmando tiene habilitadas las aprobaciones de confirmación obligatorias y estás realizando la confirmación a través de la interfaz web, aprobarás automáticamente la confirmación como parte del proceso de confirmación. Para obtener más información, consulta "[Administración de la directiva de aprobación de confirmaciones para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)". {% endif %}

Puedes agregar un co-autor en cualquier confirmación en la que colabores. Para más información, vea "[Creación de una confirmación con varios autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".

{% ifversion fpt or ghec %} También puede crear una confirmación en nombre de una organización. Para más información, vea "[Creación de una confirmación en nombre de una organización](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)".{% endif %}

El rebase te permite cambiar varias confirmaciones y puede modificar el órden de éstas en tu línea de tiempo. Para más información, vea "[Acerca de la fusión mediante cambio de base de Git](/github/getting-started-with-github/about-git-rebase)".

## Acerca de las ramas de confirmación y etiquetas

Puedes ver en qué rama está una confirmación si ves las etiquetas debajo de esta en la página de confirmaciones.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Desplázate hasta la confirmación haciendo clic en el enlace del mensaje de confirmación.
   ![Captura de pantalla de la confirmación con un enlace de mensaje de confirmación resaltado](/assets/images/help/commits/commit-message-link.png)
2. Para ver en qué rama está la confirmación, revisa la etiqueta debajo del mensaje de confirmación.
   ![Captura de pantalla de una confirmación con un indicador de rama de confirmación resaltado](/assets/images/help/commits/commit-branch-indicator.png)

Si la confirmación no está en la rama predeterminada (`main`), la etiqueta mostrará las ramas que contienen la confirmación. Si la confirmación es parte de una solicitud de cambios sin fusionar, puedes hacer clic en el enlace para ir a la solicitud de cambios.

Una vez que la confirmación está en la rama por defecto, todas las etiquetas que contienen la confirmación se mostrarán y la rama por defecto será la única rama enumerada. Para más información sobre las etiquetas, vea "[Conceptos básicos de Git: etiquetado](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" en la documentación de Git.

![Captura de pantalla de la confirmación con la etiqueta de confirmación restaltada](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Utilizar el árbol de archivos

Puedes usar el árbol de archivos para navegar entre los archivos de una confirmación.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Desplázate hasta la confirmación haciendo clic en el enlace del mensaje de confirmación.
   ![Captura de pantalla de la confirmación con un enlace de mensaje de confirmación resaltado](/assets/images/help/commits/commit-message-link.png)
1. Haz clic en un archivo en el árbol de archivos para ver el diff de archivo correspondiente. Si el árbol de archivos está oculto, haz clic en {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para mostrarlo.

  {% note %}

  **Nota**: El árbol de archivos no se mostrará si el ancho de tu pantalla es demasiado estrecho o si la confirmación solo incluye un archivo.

  {% endnote %}
  
  ![Captura de pantalla del cuadro de búsqueda de archivos modificados de filtro y árbol de archivos resaltado](/assets/images/help/repository/file-tree.png)
1. Para filtrar por ruta de archivo, introduce parte de la ruta, o la totalidad de esta, en el cuadro de búsqueda **Filter changed files** (Filtrar archivos cambiados).

{% endif %}

## Información adicional
- "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" en {% data variables.product.prodname_desktop %}
