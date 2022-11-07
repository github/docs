---
title: Filtrar archivos en una solicitud de extracción
intro: 'Para ayudarte a revisar rápidamente los cambios en una solicitud de incorporación de cambios de gran tamaño, puedes filtrar los archivos modificados{% ifversion pr-tree-view %} o usar el árbol de archivos para navegar entre archivos{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884177'
---
Puedes filtrar los archivos en una solicitud de incorporación de cambios por tipo de extensión, como `.html` o `.js`, por falta de extensión, por propiedad del código o por dotfiles.{% ifversion pr-tree-view %} También puedes utilizar el árbol de archivos para filtrar por ruta de archivo, navegar entre archivos o tener una vista general de los archivos que han cambiado.{% endif %}

## Utilizar el menú desplegable de filtro de archivos

{% tip %}

**Sugerencia**: Para simplificar tu vista de diferencias de solicitudes de incorporación de cambios, también puedes ocultar temporalmente los archivos borrados o aquellos archivos que ya hayas visto en la diferencia de dicha solicitud, desde el menú desplegable de filtro de archivos.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que deseas filtrar.
{% data reusables.repositories.changed-files %}
4. Usa el menú desplegable para Filtrar archivos y selecciona, elimina la marca de selección o haz clic en los filtros deseados.
  ![Opción Filtrar archivos encima de la diferencia de la solicitud de incorporación de cambios](/assets/images/help/pull_requests/file-filter-option.png)
5. Opcionalmente, para borrar la selección de filtro, en la pestaña **Files changed** (Archivos cambiados), haz clic en **Clear** (Borrar).
  ![Borrar selección de filtro de archivo](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Utilizar el árbol de archivos

{% data reusables.repositories.sidebar-pr %}
1. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que deseas filtrar.
{% data reusables.repositories.changed-files %}

1. Haz clic en un archivo en el árbol de archivos para ver el diff de archivo correspondiente. Si el árbol de archivos está oculto, haz clic en {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para mostrarlo.

   {% note %}

   **Nota**: El árbol de archivos no se mostrará si el ancho de tu pantalla es demasiado estrecho o si la solicitud de incorporación de cambios solo incluye un archivo.

   {% endnote %}
   
   ![Captura de pantalla del cuadro de búsqueda de archivos modificados de filtro y árbol de archivos resaltado](/assets/images/help/repository/file-tree.png)
1. Para filtrar por ruta de archivo, introduce parte de la ruta, o la totalidad de esta, en el cuadro de búsqueda **Filter changed files** (Filtrar archivos cambiados). Como alternativa, utiliza el menú desplegable de filtro de archivos. Para obtener más información, consulta "[Uso de la lista desplegable de filtros de archivos](#using-the-file-filter-dropdown)".

{% endif %}

## Información adicional

- "[Acerca de la comparación de ramas en solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Búsqueda de funciones y métodos cambiados en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"
