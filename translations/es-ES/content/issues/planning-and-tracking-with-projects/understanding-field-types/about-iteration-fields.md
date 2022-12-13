---
title: Acerca de los campos de iteración
shortTitle: About iteration fields
intro: Puedes crear iteraciones para planear los próximos elementos de grupo y trabajo.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
- Projects
ms.openlocfilehash: 93039327ab7075e0f79c9d5ae5d6652aa635a500
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110136"
---
Puedes crear un campo de iteración para asociar elementos con bloques de tiempo de repetición específicos. Las iteraciones se pueden establecer en cualquier período de tiempo, pueden incluir saltos y se pueden editar individualmente para modificar el nombre y el intervalo de fechas. Con los proyectos, puedes agrupar por iteración para visualizar el equilibrio de los trabajos futuros, usar filtros para centrarte en una sola iteración y ordenar por iteración.

Puedes filtrar por iteraciones si especificas el nombre de iteración o `@current` para la iteración actual, `@previous` para la iteración anterior o `@next` para la siguiente. También puedes usar operadores como `>`, `>=`, `<`, `<=` y `..`.  Por ejemplo, `iteration:>"Iteration 4"` y `iteration:<@current`. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Al crear por primera vez un campo de iteración, se crean automáticamente tres iteraciones.  Puedes agregar iteraciones adicionales y realizar otros cambios en la página de configuración del proyecto.

![Captura de pantalla en la que se muestra la configuración de un campo de iteración](/assets/images/help/issues/iterations-example.png)

## Adición de un campo de iteración

{% data reusables.projects.new-field %}
1. Selecciona **Iteración**
   ![Captura de pantalla en la que se muestra la opción Iteración](/assets/images/help/projects-v2/new-field-iteration.png)
2. Opcionalmente, si no quieres que la iteración se inicie hoy, selecciona la lista desplegable de calendario situada junto a "Se inicia el" y elige una nueva fecha de inicio.
   ![Captura de pantalla en la que se muestra la fecha de inicio de la iteración](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Para cambiar la duración de cada iteración, escribe un nuevo número y, a continuación, selecciona la lista desplegable y haz clic en **días** o **semanas**.
   ![Captura de pantalla en la que se muestra la duración de la iteración](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save-and-create.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Crear campo".

## Adición de nuevas iteraciones

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
   ![Captura de pantalla en la que se muestra un campo de iteración](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para agregar una nueva iteración de la misma duración, haz clic en **Agregar iteración**.
   ![Captura de pantalla del botón "Agregar iteración"](/assets/images/help/projects-v2/add-iteration.png)
1. Opcionalmente, para personalizar la duración de la nueva iteración y cuándo se iniciará, haz clic en {% octicon "triangle-down" aria-label="The triangle icon" %} **Más opciones**, selecciona una fecha de inicio y una duración, y haz clic en **Agregar**.
   ![Captura de pantalla del formulario Agregar opciones de iteración](/assets/images/help/projects-v2/add-iteration-options.png)
1. Haga clic en **Guardar cambios**.
   ![Captura de pantalla del botón Guardar](/assets/images/help/projects-v2/iteration-save.png)

## Edición de una iteración

Puedes editar las iteraciones en la configuración del proyecto. También puedes acceder a la configuración de un campo de iteración haciendo clic en {% octicon "triangle-down" aria-label="The triangle icon" %} en el encabezado de tabla del campo y haciendo clic en **Editar valores**.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
   ![Captura de pantalla en la que se muestra un campo de iteración](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para cambiar el nombre de una iteración, haz clic en el nombre y empieza a escribir.
   ![Captura de pantalla de un campo de título para cambiar el nombre de una iteración](/assets/images/help/projects-v2/iteration-rename.png)
1. Para cambiar la fecha o la duración de una iteración, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio, haz clic en el día de finalización y, a continuación, haz clic en **Aplicar**.
   ![Captura de pantalla en la que se muestran las fechas de iteración](/assets/images/help/projects-v2/iteration-date.png)
1. Opcionalmente, para eliminar una iteración, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
   ![Captura de pantalla del botón Eliminar](/assets/images/help/projects-v2/iteration-delete.png)
2. Haga clic en **Guardar cambios**.
   ![Captura de pantalla del botón Guardar](/assets/images/help/projects-v2/iteration-save.png)

## Inserción de una interrupción

Puedes insertar interrupciones en las iteraciones para comunicar cuando te tomas un descanso del trabajo programado. La duración de la nueva interrupción tiene como valor predeterminado la longitud de la iteración creada más recientemente.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
   ![Captura de pantalla en la que se muestra un campo de iteración](/assets/images/help/projects-v2/select-iteration-field.png)
2. En la línea divisoria situada encima de una iteración y a la derecha, haz clic en **Insertar interrupción**.
   ![Captura de pantalla en la que se muestra la ubicación del botón "Insertar interrupción"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para cambiar la duración de la interrupción, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio, haz clic en el día de finalización y, a continuación, haz clic en **Aplicar**.
4. Haga clic en **Guardar cambios**.
   ![Captura de pantalla del botón Guardar](/assets/images/help/projects-v2/iteration-save.png)
