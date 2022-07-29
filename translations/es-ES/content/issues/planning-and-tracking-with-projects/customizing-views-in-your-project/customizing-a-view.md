---
title: Customizing a view
intro: 'Display the information you need by changing the layout, grouping, sorting in your project.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
---


## Cambiar el diseño del proyecto

Puedes ver tu proyecto como una tabla o como un tablero.

{% data reusables.projects.open-view-menu %}
1. Under "Layout", click either **Table** or **Board**. ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)



Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Switch layout."

## Mostrar y ocultar campos

Puedes mostrar u ocultar un campo específico.

{% data reusables.projects.open-view-menu %}
1. Under "Configuration", click {% octicon "note" aria-label="the note icon" %} and the list of currently shown fields. ![Screenshot showing show and hide fields menu option](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Select or deselect the fields you want to show or hide. ![Screenshot showing show and hide fields menu](/assets/images/help/projects-v2/show-hide-fields.png)

You can also hide individual fields in table view.

1. Next to the field you want to hide, click {% octicon "kebab-horizontal" aria-label="the kebab icon" %}. ![Screenshot showing field menu icon](/assets/images/help/projects-v2/modify-field-menu.png)
1. Click {% octicon "eye-closed" aria-label="the eye closed icon" %} **Hide field**. ![Screenshot showing hide field menu option](/assets/images/help/projects-v2/hide-field-via-menu.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "show", "hide", or the name of the field.

## Reordenar los campos

In table layout, you can change the order of fields.

1. Click the field header. ![Screenshot showing the field header](/assets/images/help/projects-v2/select-field-header.png)
2. While continuing to click, drag the field to the required location.

## Reordenar filas

En el diseño de tabla, puedes cambiar el orden de las filas.

1. Click the number at the start of the row. ![Screenshot showing the row number](/assets/images/help/projects-v2/select-row-number.png)
2. While continuing to click, drag the row to the required location.

## Clasificar por valor de campo

En el diseño de tabla, puedes organizar los elementos por valor de campo.

{% note %}

**Nota:** Cuando se ordena una tabla, no puedes reordenar las filas manualmente.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Click **Sort**. ![Screenshot showing the sort menu item](/assets/images/help/projects-v2/sort-menu-item.png)
1. Click the field you want to sort by. ![Screenshot showing the sort menu](/assets/images/help/projects-v2/sort-menu.png)
2. Optionally, to change the direction of the sort, click {% octicon "sort-desc" aria-label="the sort icon" %}. ![Screenshot showing sort order option](/assets/images/help/projects-v2/sort-order.png)
3. Optionally, to remove a sort, click {% octicon "x" aria-label="the x icon" %} **No sorting** at the bottom of the list. ![Screenshot showing "no sorting"](/assets/images/help/projects-v2/no-sorting.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Sort by."

## Agrupar por valores de campo en el diseño de tabla

En el diseño de tabla, puedes agrupar elementos por un valor de campo personalizado. Cuando los elementos se agrupan, si arrastras un elemento a un grupo nuevo, se aplica el valor de este grupo. Por ejemplo, si agrupas por "Estado" y luego arrastras un elemento con un estado a `In progress` hacia el grupo `Done`, el estado del elemento cambiará a `Done`. De forma similar, cuando agregues un elemento nuevo a un grupo, este elemento se poblará con el valor del grupo.

{% note %}

**Note:** You cannot group by title, labels, reviewers, or linked pull requests.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**. ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click the field you want to group by. ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)
2. Optionally, to disable grouping, click {% octicon "x" aria-label="the x icon" %} **No grouping** at the bottom of the list. ![Screenshot showing "no grouping"](/assets/images/help/projects-v2/no-grouping.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Group by."

## Configurar el campo de columna en el diseño del tablero

En el diseño de tablero, puedes elegir cualquier campo simple o de iteración para tus columnas. Si arrastras a un elemento a una columna nueva, el valor de dicha columna se aplicará al elemento que arrastraste. Por ejemplo, si utilizas el campo "Estado" para tus columnas de tablero y luego arrastras un elemento con un estado de `In progress` a la columna `Done`, el estado del elemento se cambiará a `Done`.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "columns" aria-label="the columns icon" %} **Column field**. ![Screenshot showing the column field item](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Click the field you want to use. ![Screenshot showing the column field menu](/assets/images/help/projects-v2/column-field-menu.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Column field by."
