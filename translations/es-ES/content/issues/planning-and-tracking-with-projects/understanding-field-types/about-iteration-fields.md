---
title: About iteration fields
shortTitle: About iteration fields
intro: Puedes crear iteraciones para planear el trabajo y elementos de grupo próximos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
  - Projects
---

Puedes crear un campo de iteración para asociar los elementos con bloques de tiempo repetitivos específicos. Las iteraciones pueden configurarse en cualquier longitud de tiempo, pueden incluir pausas y pueden editarse individualmente para modificar el nombre y rango de fecha. Con los proyectos, puedes agrupar por iteración para visualizar el balance del trabajo próximo, utilizar filtros para enfocarte en una sola iteración y clasificar por iteración.

You can filter for iterations by specifying the iteration name or `@current` for the current iteration, `@previous` for the previous iteration, or `@next` for the next iteration. You can also use operators such as `>`, `>=`, `<`, `<=`, and `..`.  For example, `iteration:>"Iteration 4"` and `iteration:<@current`. Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Cuando creas un campo de iteración por primera vez, se crean tres iteraciones automáticamente.  Puedes agregar iteraciones adicionales y hacer otros cambios en tu página de ajustes de proyecto.

![Captura de pantalla que muestra los ajustes de un campo de iteración](/assets/images/help/issues/iterations-example.png)

## Adding an iteration field

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
2. Optionally, if you don't want the iteration to start today, select the calendar dropdown next to "Starts on" and choose a new start date. ![Screenshot showing the iteration start date](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Para cambiar la duración de cada iteración, escribe un número nuevo y luego selecciona el menú desplegable para hacer clic en ya sea **días** o **semanas**. ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Haz clic en **Save ** (guardar). ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## Agregar iteraciones nuevas

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para agregar una iteración nueva de la misma duración, haz clic en **Agregar iteración**. ![Screenshot the "add iteration" button](/assets/images/help/projects-v2/add-iteration.png)
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-label="The triangle icon" %} **More options**, select a starting date and duration, and click **Add**. ![Screenshot the add iteration options form](/assets/images/help/projects-v2/add-iteration-options.png)
1. Haz clic en **Guardar cambios**. ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## Editar una iteración

Puedes editar las iteraciones en tus ajustes de proyecto. También puedes acceder a los ajustes de un campo de iteración haciendo clic en {% octicon "triangle-down" aria-label="The triangle icon" %} en el encabezado de tabla del campo y haciendo clic en **Editar valores**.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. To change the name of an iteration, click on the name and start typing. ![Screenshot an title field to rename an iteration](/assets/images/help/projects-v2/iteration-rename.png)
1. Para cambiar la fecha o duración de una iteración, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio y luego en el día final para luego hacer clic en **Aplicar**. ![Screenshot showing iteration dates](/assets/images/help/projects-v2/iteration-date.png)
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}. ![Screenshot the delete button](/assets/images/help/projects-v2/iteration-delete.png)
2. Haz clic en **Guardar cambios**. ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## Insertar una pausa

Puedes insertar pausas en tus iteraciones para comunicarte cuando estás descansando del trabajo programado. La duración de una pausa nueva se predetermina a la duración de la iteración que se creó más recientemente.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
2. En la línea divisora sobre una iteración y a la derecha, haz clic en **Insertar pausa**. ![Captura de pantalla que muestra la ubicación del botón "insertar pausa"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para cambiar la duración de esta, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio y luego en el día final para luego hacer clic en **Aplicar**.
4. Haz clic en **Guardar cambios**. ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)
