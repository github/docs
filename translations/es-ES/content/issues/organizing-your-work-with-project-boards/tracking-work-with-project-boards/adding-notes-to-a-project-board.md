---
title: 'Adición de notas a una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes agregar notas a una instancia de {% data variables.projects.projects_v1_board %} que sirvan como recordatorios de tareas, o bien para agregar información relacionada con la instancia de {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110141'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Sugerencias:**
- Puedes dar formato a tu nota usando la sintaxis de Markdown. Por ejemplo, puedes usar encabezados, enlaces, listas de tareas o emojis. Para más información, vea "[Sintaxis básica de escritura y formato](/articles/basic-writing-and-formatting-syntax)".
- Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Las instancias de {% data variables.projects.projects_v1_board %} deben tener al menos una columna para poder agregar notas. Para obtener más información, consulte "[Creación de un panel de proyecto](/articles/creating-a-project-board)".

{% endtip %}

Cuando agregas una URL para una incidencia, solicitud de incorporación de cambios u otra instancia de {% data variables.projects.projects_v1_board %} a una nota, verás una vista previa en una tarjeta de resumen debajo del texto.

![Tarjetas de tableros de proyecto mostrando una vista previa de una propuesta y otro tablero de proyecto](/assets/images/help/projects/note-with-summary-card.png)

## Adición de notas a una instancia de {% data variables.projects.projects_v1_board %}

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} en la que quieras agregar notas.
2. En la columna en la que desee agregar una nota, haga clic en {% octicon "plus" aria-label="The plus icon" %}.
![Icono de adición en el encabezado de la columna](/assets/images/help/projects/add-note-button.png)
3. Escriba la nota y, a continuación, haga clic en **Add**.
![Campo para escribir una nota y botón Add card](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Sugerencia:** Puede hacer referencia a una incidencia o solicitud de incorporación de cambios en su nota escribiendo la URL en la tarjeta.

  {% endtip %}

## Convertir una nota en una propuesta

Si has creado una nota y consideras que no es suficiente para tus necesidades, puedes convertirla en una propuesta.

Cuando conviertes una nota en una propuesta, la propuesta se crea automáticamente usando el contenido de la nota. La primera línea de la nota será el título de la propuesta y cualquier información adicional de la nota se agregará a la descripción de la propuesta.

{% tip %}

**Sugerencia:** Puede agregar contenido en el cuerpo de la nota para @mention a alguien, vincularla a otra incidencia o solicitud de incorporación de cambios y agregar emoji. Estas características de formato Markdown de {% data variables.product.prodname_dotcom %} no son compatibles con las notas de {% data variables.projects.projects_v1_board %}, pero una vez que la nota se convierte en una incidencia, aparecerán correctamente. Para obtener más información sobre el uso de estas características, consulte "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Desplázate hasta la nota que deseas convertir en propuesta.
{% data reusables.project-management.project-note-more-options %}
3. Haga clic en **Convert to issue**.
  ![Botón Convert to issue](/assets/images/help/projects/convert-to-issue.png)
4. Si la tarjeta está en una instancia de {% data variables.projects.projects_v1_board %} para toda la organización, en el menú desplegable, elige el repositorio al que quieres agregar la incidencia.
  ![Menú desplegable que contiene los repositorios donde puede crear la incidencia](/assets/images/help/projects/convert-note-choose-repository.png)
5. Opcionalmente, edita el título de la propuesta completada previamente, y escribe el cuerpo de la propuesta.
  ![Campos para el título y el cuerpo de la incidencia](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Haga clic en **Convert to issue**.
7. La nota se convertirá automáticamente en una propuesta. En la instancia de {% data variables.projects.projects_v1_board %}, la nueva tarjeta de incidencia estará en la misma ubicación que la nota anterior.

## Editar o eliminar una nota

1. Desplázate hasta la nota que deseas editar o eliminar.
{% data reusables.project-management.project-note-more-options %}
3. Para editar el contenido de la nota, haga clic en **Edit note**.
  ![Botón Edit note](/assets/images/help/projects/edit-note.png)
4. Para eliminar el contenido de las notas, haga clic en **Delete note**.
  ![Botón Delete note](/assets/images/help/projects/delete-note.png)

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Creación de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Edición de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
