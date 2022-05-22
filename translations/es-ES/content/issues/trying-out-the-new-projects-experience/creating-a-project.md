---
title: Crear un proyecto (beta)
intro: 'Aprende cómo crear un proyecto, llénalo y agrega campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

Los proyectos son una colección personalizable de elementos que se mantienen actualizados con los datos de {% data variables.product.company_short %}. Tus proyectos pueden rastrear propuestas, solicitudes de cambios e ideas que aterrices. Puedes agregar campos personalizados y vistas creativas para propósitos específicos.

{% data reusables.projects.projects-beta %}

## Crear un proyecto

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## Agregar elementos a tu proyecto

Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios.

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente.

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Teclea tu ida y luego presiona **Enter**.

You can convert draft issues into issues. For more information, see [Converting draft issues to issues](#converting-draft-issues-to-issues).

### Propuestas y solicitudes de extracción

#### Pegar la URL de una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
1. Pega la URL de la propuesta o solicitud de cambios.

#### Buscar una propuesta o solicitud de cambios

1. Coloca tu cursor en la fila inferior del proyecto, junto al {% octicon "plus" aria-label="plus icon" %}.
2. Ingresa `#`.
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.

#### Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haz clic en **Proyectos**.
3. Selecciona el proyecto al cual quieras agregar la propuesta o solicitud de cambios.
4. Opcionalmente, llena los campos personalizados.

   ![Barra lateral del proyecto](/assets/images/help/issues/project_side_bar.png)

## Converting draft issues to issues

In table layout:

1. Click the {% octicon "triangle-down" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.
4. Alternatively, edit the `assignee`, `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

In board layout:

1. Click the {% octicon "kebab-horizontal" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.

## Removing items from your project

You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

1. Select the item(s) to archive or delete. To select multiple items, do one of the following:
     - `cmd + click` (Mac) or `ctrl + click` (Windows/Linux) each item.
     - Select an item then `shift + arrow-up` or `shift + arrow-down` to select additional items above or below the intitially selected item.
     - Select an item then `shift + click` another item to select all items between the two items.
     - Enter `cmd + a` (Mac) or `ctrl + a` (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter `e`. To delete all selected items, enter `del`. Alternatively, select the {% octicon "triangle-down" aria-label="the item menu" %} (in table layout) or the {% octicon "kebab-horizontal" aria-label="the item menu" %} (in board layout), then select the desired action.

You can restore archived items but not deleted items. For more information, see [Restoring archived items](#restoring-archived-items).

## Restoring archived items

To restore an archived item, navigate to the issue or pull request. In the project side bar on the issue or pull request, click **Restore** for the project that you want to restore the item to. Draft issues cannot be restored.

## Agregar campos

Conforme cambian los valores de los campos, estos se sincronizan automáticamente para que tu proyecto y los elementos que rastrea estén actualizados.

### Mostrar campos existentes

Tu proyecto rastrea la información actualizada de las propuestas y solicitudes de cambio, incluyendo cualquier cambio al título, asignados, etiquetas, hitos y repositorio. Cuando tu proyecto inicializa, se muestran el "título" y los "asignados"; los otros campos están ocultos. Puedes cambiar la visibilidad de estos campos en tu proyecto.

1. {% data reusables.projects.open-command-palette %}
2. Comienza a teclear "show".
3. Selecciona el comando deseado (por ejemplo: "Show: Repository").

Como alternativa, puedes hacer esto en la IU:

1. Haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está hasta la derecha. Aparecerá un menú desplegable con los campos de proyecto. ![Mostrar u ocultar los campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecciona el(los) campo(s) que quieras desplegar u ocultar. Un {% octicon "check" aria-label="check icon" %} indica qué campos se muestran.

### Agregar campos personalizados

Puedes agregar campos personalizados a tu proyecto. Los campos personalizados se mostrarán en la bara lateral de las propuestas y solicitudes de cambio en el proyecto.

Custom fields can be text, number, date, single select, or iteration:

- Text: The value can be any text.
- Number: The value must be a number.
- Date: The value must be a date.
- Single select: The value must be selected from a set of specified values.
- Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current".

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.
2. Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haz clic en **Campo nuevo**.
3. Se mostrará una ventana emergente para que ingreses la información sobre el campo nuevo. ![Campo nuevo](/assets/images/help/issues/projects_new_field.png)
4. En la caja de texto, ingresa un nombre para el campo nuevo.
5. Selecciona el menú desplegable y haz clic en el tipo deseado.
6. If you specified **Single select** as the type, enter the options.
7. If you specified **Iteration** as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.

You can later edit the drop down options for single select and iteration fields.

{% data reusables.projects.project-settings %}
1. Under **Fields**, select the field that you want to edit.
1. For single select fields, you can add, delete, or reorder the options.
2. For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.

## Customizing your views

Puedes ver tu proyecto como una tabla o tablero, agrupar los elementos por campo, elemento de filtrado y más. Para obtener más información, consulta la sección "[Personalizar las vistas de tu proyecto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configuring built-in automation

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}
