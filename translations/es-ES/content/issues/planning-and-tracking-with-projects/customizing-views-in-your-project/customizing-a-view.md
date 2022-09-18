---
title: Personalización de una vista
intro: 'Muestra la información que necesitas mediante el cambio del diseño, la agrupación y la ordenación en el proyecto.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 962a20daac125cdec5510daf3d792e0aaf6a194b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424428'
---
## Cambiar el diseño del proyecto

Puedes ver tu proyecto como una tabla o como un tablero.

{% data reusables.projects.open-view-menu %}
1. En "Diseño", haz clic en **Tabla** o **Panel**.
   ![Captura de pantalla en la que se muestra la opción Diseño](/assets/images/help/projects-v2/table-or-board.png)

 

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Cambiar diseño".

## Mostrar y ocultar campos

Puedes mostrar u ocultar un campo específico.

{% data reusables.projects.open-view-menu %}
1. En "Configuración", haz clic en {% octicon "note" aria-label="the note icon" %} y la lista de campos mostrados actualmente.
   ![Captura de pantalla en la que se muestra la opción de menú Mostrar y ocultar campos](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Selecciona o anula la selección de los campos que quieras mostrar u ocultar.
   ![Captura de pantalla en la que se muestra el menú Mostrar y ocultar campos](/assets/images/help/projects-v2/show-hide-fields.png)

También puedes ocultar campos individuales en la vista de tabla.

1. Junto al campo que quieras ocultar, haz clic en {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Captura de pantalla en la que se muestra el icono de menú Campo](/assets/images/help/projects-v2/modify-field-menu.png)
1. Haz clic en {% octicon "eye-closed" aria-label="the eye closed icon" %} **Ocultar campo**.
   ![Captura de pantalla en la que se muestra la opción de menú Ocultar campo](/assets/images/help/projects-v2/hide-field-via-menu.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "mostrar", "ocultar" o el nombre del campo.

## Reordenar los campos

En el diseño de tabla, puedes cambiar el orden de los campos.

1. Haz clic en el encabezado del campo.
   ![Captura de pantalla en la que se muestra el encabezado del campo](/assets/images/help/projects-v2/select-field-header.png)
2. Mientras haces clic, arrastra el campo a la ubicación requerida.

## Reordenar filas

En el diseño de tabla, puedes cambiar el orden de las filas.

1. Haz clic en el número al inicio de la fila.
   ![Captura de pantalla en la que se muestra el número de fila](/assets/images/help/projects-v2/select-row-number.png)
2. Mientras haces clic, arrastra la fila a la ubicación requerida.

## Clasificar por valor de campo

En el diseño de tabla, puedes organizar los elementos por valor de campo.

{% note %}

**Nota**: Cuando se ordena una tabla, no se pueden reordenar filas manualmente.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Haz clic en **Ordenar**.
   ![Captura de pantalla en la que se muestra el elemento de menú Ordenar](/assets/images/help/projects-v2/sort-menu-item.png)
1. Haz clic el campo por el que quieras ordenar.
   ![Captura de pantalla en la que se muestra el menú Ordenar](/assets/images/help/projects-v2/sort-menu.png)
2. Opcionalmente, para cambiar la dirección de la ordenación, haz clic en {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Captura de pantalla en la que se muestra la opción Criterio de ordenación](/assets/images/help/projects-v2/sort-order.png)
3. Opcionalmente, para quitar una ordenación, haz clic en {% octicon "x" aria-label="the x icon" %} **Sin ordenación** en la parte inferior de la lista.
   ![Captura de pantalla en la que se muestra "Sin ordenación"](/assets/images/help/projects-v2/no-sorting.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Ordenar por".

## Agrupar por valores de campo en el diseño de tabla

En el diseño de tabla, puedes agrupar elementos por un valor de campo personalizado. Cuando los elementos se agrupan, si arrastras un elemento a un grupo nuevo, se aplica el valor de este grupo. Por ejemplo, si agrupa por "Status" (Estado) y, después, arrastra un elemento con un estado de `In progress` al grupo `Done`, el estado del elemento cambiará a `Done`. De forma similar, cuando agregues un elemento nuevo a un grupo, este elemento se poblará con el valor del grupo.

{% note %}

**Nota**: No se puede agrupar por título, etiquetas, revisores o solicitudes de incorporación de cambios vinculadas.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "rows" aria-label="the rows icon" %} **Agrupar**.
   ![Captura de pantalla en la que se muestra el elemento de menú Agrupar](/assets/images/help/projects-v2/group-menu-item.png)
1. Haz clic en el campo por el que quieras agrupar.
   ![Captura de pantalla en la que se muestra el menú Agrupar](/assets/images/help/projects-v2/group-menu.png)
2. Opcionalmente, para deshabilitar la agrupación, haz clic en {% octicon "x" aria-label="the x icon" %} **Sin agrupación** en la parte inferior de la lista.
   ![Captura de pantalla en la que se muestra "Sin agrupación"](/assets/images/help/projects-v2/no-grouping.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Agrupar por".

## Configurar el campo de columna en el diseño del tablero

En el diseño de tablero, puedes elegir cualquier campo simple o de iteración para tus columnas. Si arrastras a un elemento a una columna nueva, el valor de dicha columna se aplicará al elemento que arrastraste. Por ejemplo, si usa el campo "Status" (Estado) para las columnas del panel y, después, arrastra un elemento con un estado de `In progress` a la columna `Done`, el estado del elemento cambiará a `Done`.

{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "columns" aria-label="the columns icon" %} **Campo de columna**.
   ![Captura de pantalla en la que se muestra el elemento Campo de columna](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Haz clic en el campo que quieras usar.
   ![Captura de pantalla en la que se muestra el menú Campo de columna](/assets/images/help/projects-v2/column-field-menu.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Campo de columna por".
