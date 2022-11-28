---
title: Navegación de archivos con la nueva vista de código (beta)
intro: 'Con la nueva vista de código (beta), puedes ver el código en contexto con un árbol de archivos fácilmente navegable y una búsqueda de símbolos integrada.'
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172191'
---
{% note %}

**Nota:** {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## Acerca de la nueva vista de código (beta)
La nueva vista de código beta mejora la navegación con una vista de árbol de archivos, simplifica la edición de archivos, presenta un panel de símbolos para la búsqueda y navegación de símbolos, y actualiza la vista del último responsable para mantener el contexto del archivo. La nueva vista de código se integra con un nuevo motor y una nueva interfaz de búsqueda de código en una versión beta de acceso público limitado en {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-search-link %}

Para obtener acceso a la nueva vista de código (beta), así como a la nueva búsqueda de código, puedes registrarte en la [lista de espera](https://github.com/features/code-search-code-view/signup).

Para proporcionar comentarios sobre la nueva versión beta de la vista de código, visita el [foro de debate](https://github.com/orgs/community/discussions/categories/repositories).

## Habilitación y deshabilitación de la nueva búsqueda de código y la nueva vista de código (beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Uso de la vista de árbol de archivos
La nueva vista de árbol de archivos es un panel que muestra los directorios y archivos de un repositorio dentro de un árbol de fácil navegación. Puedes navegar entre directorios y archivos rápidamente y comprender el contexto de cada elemento que ves.

1. Selecciona un repositorio y, después, haz clic en uno de los directorios o archivos que contiene para abrir la vista de árbol de archivos.

  ![Captura de pantalla del repositorio "github/docs" con énfasis en la vista de árbol de archivos](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. Para buscar un directorio o archivo específico, haz clic en la barra de búsqueda {% octicon "filter" aria-label="The filter icon" %} **Ir a archivo**, escribe el nombre del directorio o del archivo y selecciona el directorio o el archivo en cuestión en los resultados. Puedes ver la ruta de acceso de un directorio o archivo debajo de cada resultado de búsqueda.

  ![Captura de pantalla de la vista de árbol de archivos con énfasis en la barra de búsqueda "Ir a archivo"](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - Para buscar en el repositorio mediante la barra de búsqueda de {% data variables.product.prodname_dotcom %}, haz clic en {% octicon "search" aria-label="The search icon" %}.

        ![Captura de pantalla de la vista de árbol de archivos con énfasis en el icono de búsqueda](/assets/images/help/repository/file-tree-view-search-icon.png)

1. Para cambiar de rama, selecciona el menú desplegable de ramas {% octicon "git-branch" aria-label="The branch icon" %} y haz clic en la rama que quieras en los resultados. Para ver todas las ramas de un repositorio, haz clic en **Ver todas las ramas**.

  ![Captura de pantalla de la vista de árbol de archivos con énfasis en la pestaña "Ramas" del menú desplegable de ramas](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. Para cambiar de etiqueta, selecciona el menú desplegable de ramas {% octicon "git-branch" aria-label="The branch icon" %}, haz clic en la pestaña **Etiquetas** y, luego, haz clic en la etiqueta que quieras en los resultados. Para ver todas las etiquetas de un repositorio, haz clic en **Ver todas las etiquetas**.

  ![Captura de pantalla de la vista de árbol de archivos con énfasis en la pestaña "Etiquetas" del menú desplegable de ramas](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Trabajar con archivos
La nueva vista de código también incluye actualizaciones en la manera en que trabajas con los archivos. Se han simplificado las funcionalidades existentes, como la edición de archivos, la creación o la carga de archivos, y la eliminación de archivos o directorios. Ahora tienes acceso rápido a la edición de archivos en github.dev o {% data variables.product.prodname_desktop %} y una función integrada de búsqueda dentro de los archivos. 

1. Selecciona un repositorio y haz clic en uno de los archivos que contiene para abrir la nueva vista de código.

  ![Captura de pantalla del repositorio "github/docs" con énfasis en un archivo seleccionado en la vista de árbol de archivos](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Para editar un archivo en el editor de archivos integrado, haz clic en {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Captura de pantalla del editor de archivos en la nueva vista de código con énfasis en el icono de edición](/assets/images/help/repository/code-view-edit-icon.png)

1. Para editar un archivo en el {% data variables.codespaces.serverless %} github.dev o {% data variables.product.prodname_desktop %}, selecciona {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} junto a {% octicon "pencil" aria-label="The pencil icon" %} y haz clic en **github.dev** o en **{% data variables.product.prodname_desktop %}** .

  {% note %}

  **Nota:** El {% data variables.codespaces.serverless %} github.dev se encuentra actualmente en versión preliminar beta. Puedes proporcionar comentarios [en nuestros debates](https://github.com/community/community/discussions/categories/general).

  {% endnote %}

  ![Captura de pantalla del editor de archivos en la nueva vista de código con énfasis en el menú desplegable de edición](/assets/images/help/repository/code-view-edit-dropdown.png)

1. Para buscar caracteres específicos dentro de un archivo, haz clic en el botón **Código** para ver el código sin formato del archivo. Después, presiona <kbd>Comando</kbd>+<kbd>F</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) y escribe los caracteres que quieres buscar. Puedes navegar entre los resultados presionando la tecla <kbd>Retorno</kbd> (Mac) o <kbd>Entrar</kbd> (Windows/Linux) o haciendo clic en {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} y {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  {% note %}

  **Nota:** Para usar la función de búsqueda predeterminada del explorador, presiona <kbd>Comando</kbd>+<kbd>F</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) dos veces. Ten en cuenta que la función de búsqueda predeterminada del explorador no te permite buscar en todo el contenido en archivos grandes, a diferencia de la búsqueda integrada en la nueva vista de código.

  {% endnote %}

  ![Captura de pantalla de la función "Buscar en el archivo" en la nueva vista de código](/assets/images/help/repository/code-view-find-in-file.png)

1. Para agregar un nuevo archivo a un directorio específico, haz clic en ese directorio y, después, haz clic en {% octicon "plus" aria-label="The plus sign icon" %} **Nuevo archivo**, o bien en el icono {% octicon "plus" aria-label="The plus sign icon" %} en la vista de árbol de archivos.

  ![Captura de pantalla de la vista de árbol de archivos con énfasis en el icono del signo más](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. Para eliminar un directorio o un archivo, navega hasta él y haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. Después, haz clic en **Eliminar directorio** o **Eliminar archivo**.

  ![Captura de pantalla del menú de opciones en la nueva vista de código con énfasis en la opción "Eliminar directorio"](/assets/images/help/repository/code-view-delete-directory.png)

1. Para cargar un archivo, ve al directorio elegido y haz clic en {% octicon "upload" aria-label="The upload icon" %} **Cargar archivos**, o bien arrastra y coloca el archivo en el explorador.

  ![Captura de pantalla del botón "Cargar archivos" en la nueva vista de código](/assets/images/help/repository/code-view-upload-files.png)

## Uso del panel de símbolos
Ahora puedes ver y navegar rápidamente entre símbolos, como funciones o clases, en tu código con el panel de símbolos. Puedes buscar un símbolo en un único archivo, en todos los archivos de un repositorio o incluso en todos los repositorios públicos de {% data variables.product.prodname_dotcom %}.

La búsqueda de símbolos es una característica de la nueva búsqueda de código (beta). Para obtener más información, consulta "[Descripción de la sintaxis de la búsqueda de código de GitHub (beta)](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)".

1. Selecciona un repositorio y navega a un archivo que contenga símbolos.
2. Para abrir el panel de símbolos, haz clic en {% octicon "code-square" aria-label="The code square icon" %}.

  ![Captura de pantalla del icono del panel símbolos en la nueva vista de código](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  De forma alternativa, puedes abrir el panel de símbolos haciendo clic en un símbolo reconocido en el archivo. Los símbolos en los que se puede hacer clic se resaltan en amarillo al pasar el puntero sobre ellos.

  ![Captura de pantalla de un archivo en la nueva vista de código con énfasis en un símbolo en el que se puede hacer clic](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Haz clic en el símbolo que quieres buscar en el panel de símbolos o en el propio archivo.

  ![Captura de pantalla del panel de símbolos con énfasis en un símbolo rellenado automáticamente](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - Para buscar un símbolo en todo el repositorio, haz clic en **Buscar este símbolo en este repositorio**. Para buscar un símbolo en todos los repositorios de {% data variables.product.prodname_dotcom %}, haz clic en **todos los repositorios**.

      ![Captura de pantalla del panel de símbolos con énfasis en las opciones para ampliar el ámbito de búsqueda de un símbolo](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. Para navegar entre las referencias a un símbolo, haz clic en {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} o {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  ![Captura de pantalla del panel de símbolos con énfasis en los botones de navegación por la búsqueda](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. Para navegar a una referencia específica a un símbolo, haz clic en uno de los resultados de la búsqueda que aparece en {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **En este archivo**.

  ![Captura de pantalla del panel de símbolos con énfasis en un resultado de la búsqueda de símbolos](/assets/images/help/repository/code-view-symbol-search-result.png)

1. Para salir de la búsqueda de un símbolo específico, haz clic en {% octicon "arrow-left" aria-label="The left arrow icon" %} **Todos los símbolos**.

  ![Captura de pantalla del panel de símbolos con énfasis en el botón "Todos los símbolos"](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Uso de la vista de último responsable
En lugar de perder el contexto del archivo al acceder a la vista de último responsable, ahora puedes usar la nueva vista de código para alternar rápidamente entre la vista de último responsable, la vista de código sin formato y la vista previa de un archivo (según el tipo de archivo).

1. Selecciona un repositorio y haz clic en uno de los archivos que contiene para abrir la nueva vista de código.

  ![Captura de pantalla del repositorio "github/docs" con énfasis en un archivo seleccionado en la vista de árbol de archivos](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Para ver el historial de revisiones del archivo, haz clic en **Último responsable**. Esta vista muestra un historial de revisiones línea a línea, con el código del archivo separado por confirmaciones. Se indica el autor, la descripción y la fecha de cada confirmación.

  ![Captura de pantalla de la nueva vista de código con énfasis en el botón "Último responsable"](/assets/images/help/repository/code-view-blame-button.png)

   - Para ver las versiones de un archivo antes de una confirmación concreta, haz clic en {% octicon "versions" aria-label="The versions icon" %}.

      ![Captura de pantalla de una confirmación en la vista de último responsable con énfasis en el icono de versiones](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - Para ver más detalles sobre una confirmación en concreto, haz clic en su descripción.

      ![Captura de pantalla de una confirmación en la vista de último responsable con énfasis en la descripción de la confirmación](/assets/images/help/repository/code-view-blame-commit-description.png)

1. Para volver a la vista de código sin formato, haz clic en **Código**.

  ![Captura de pantalla de la barra de herramientas de la vista de código con énfasis en el botón Código](/assets/images/help/repository/code-view-button.png)

   - Si estás viendo un archivo Markdown, también puedes hacer clic en **Vista previa** para volver a la vista con el formato de Markdown aplicado.

      ![Captura de pantalla de la barra de herramientas de la vista de código con énfasis en el botón de vista previa de Markdown](/assets/images/help/repository/code-view-preview-button.png)

## Información adicional

- "[Traslado de un archivo a una nueva ubicación](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- "[Acerca de la búsqueda de código de GitHub (beta)](/search-github/github-code-search/about-github-code-search)"
