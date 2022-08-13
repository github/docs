---
title: Managing your views
intro: 'Learn how to create, save, and manage your project views.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---


## Crear una vista de proyecto

Las vistas de proyecto te permiten ver los aspectos específicos de tu proyecto rápidamente. Cada vista se muestra en una pestaña por separado en tu proyecto.

Por ejemplo, puedes tener:
- Una vista que muestre todos los elementos que aún no han iniciado (filtrar en "Estado").
- Una vista que muestre la carga de trabajo para cada equipo (agrupar por un campo personalizado de "Equipo").
- Una vista que muestre los elementos con la fecha de envío destino más reciente (ordenar por campo de fecha).

Para agregar una vista nueva:

{% data reusables.projects.new-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "New view."

La vista nueva se guarda automáticamente.

## Duplicating a view

You can duplicate an existing view and use it as a base to make further changes.

1. Switch to the view you want to duplicate.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "versions" aria-label="the versions icon" %} **Duplicate view**. ![Screenshot showing the duplicate menu item](/assets/images/help/projects-v2/duplicate-view.png)

## Guardar los cambios en una vista

Cuando haces cambios en una vista, por ejemplo: clasificar, reordenar, filtrar o agrupar los datos en una vista, se muestra un punto junto al nombre de la vista para indicar que hay cambios sin guardar.

![Indicador de cambios sin guardar](/assets/images/help/projects/unsaved-changes.png)

Si no quieres guardar los cambios, puedes ignorar este indicador. Nadie verá tus cambios.

{% data reusables.projects.save-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Save view."

## Reordenar las vistas guardadas

Para cambiar el orden de las pestañas que contienen tus vistas guardadas, haz clic y arrastra una pestaña a una ubicación nueva. El orden de pestañas nuevo se guardará automáticamente.

## Renombrar una vista guardada

You can rename your saved views. El cambio de nombre se guarda automáticamente.

1. Switch to the view you want to rename.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save your changes, press <kbd>Return</kbd>.

## Borrar una vista guardada

1. Switch to the view you want to delete.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "trash" aria-label="the trasj icon" %} **Delete view**. ![Screenshot showing the rename delete item](/assets/images/help/projects-v2/delete-view.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Delete view."
