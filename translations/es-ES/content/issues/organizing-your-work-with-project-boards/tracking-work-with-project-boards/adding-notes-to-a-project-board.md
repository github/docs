---
title: 'Agregar notas a un {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes agregar notas a un {% data variables.projects.projects_v1_board %} para que sirvan como recordatorios de tarea o para agregar información relacionada con el {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Agregar notas a {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% tip %}

**Tips:**
- Puedes dar formato a tu nota usando la sintaxis de Markdown. Por ejemplo, puedes usar encabezados, enlaces, listas de tareas o emojis. Para obtener más información, consulta "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)".
- Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Tu {% data variables.projects.projects_v1_board %} debe tener por lo menos una columna para que puedas agregar notas. Para obtener más información, consulta "[Crear un tablero de proyecto](/articles/creating-a-project-board)".

{% endtip %}

When you add a URL for an issue, pull request, or another {% data variables.projects.projects_v1_board %} to a note, you'll see a preview in a summary card below your text.

![Tarjetas de tableros de proyecto mostrando una vista previa de una propuesta y otro tablero de proyecto](/assets/images/help/projects/note-with-summary-card.png)

## Adding notes to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add notes.
2. En la columna en la que deseas agregar una nota, haz clic en {% octicon "plus" aria-label="The plus icon" %}. ![Icono de adición en el encabezado de la columna](/assets/images/help/projects/add-note-button.png)
3. Escribe tu nota, luego haz clic en **Add** (Agregar). ![Campo para escribir una nota y botón Add card (Agregar tarjeta)](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Sugerencia:** Puedes hacer referencia a una propuesta o solicitud de extracción en tu nota al escribir su URL en la tarjeta.

  {% endtip %}

## Convertir una nota en una propuesta

Si has creado una nota y consideras que no es suficiente para tus necesidades, puedes convertirla en una propuesta.

Cuando conviertes una nota en una propuesta, la propuesta se crea automáticamente usando el contenido de la nota. La primera línea de la nota será el título de la propuesta y cualquier información adicional de la nota se agregará a la descripción de la propuesta.

{% tip %}

**Sugerencia:** Puedes agregar el contenido en el cuerpo de tu nota para @mencionar a alguien, vincular otra propuesta o solicitud de extracción, y agregar un emoji. These {% data variables.product.prodname_dotcom %} Flavored Markdown features aren't supported within {% data variables.projects.projects_v1_board %} notes, but once your note is converted to an issue, they'll appear correctly. Para obtener más información sobre cómo usar estas características, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Desplázate hasta la nota que deseas convertir en propuesta.
{% data reusables.project-management.project-note-more-options %}
3. Haz clic en **Convert to issue** (Convertir en propuesta). ![Botón para convertir en propuesta](/assets/images/help/projects/convert-to-issue.png)
4. If the card is on an organization-wide {% data variables.projects.projects_v1_board %}, in the drop-down menu, choose the repository you want to add the issue to. ![Menú desplegable enumerando los repositorios donde puedes crear la propuesta](/assets/images/help/projects/convert-note-choose-repository.png)
5. Opcionalmente, edita el título de la propuesta completada previamente, y escribe el cuerpo de la propuesta. ![Campos para título y cuerpo de la propuesta](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Haz clic en **Convert to issue** (Convertir en propuesta).
7. La nota se convertirá automáticamente en una propuesta. In the {% data variables.projects.projects_v1_board %}, the new issue card will be in the same location as the previous note.

## Editar o eliminar una nota

1. Desplázate hasta la nota que deseas editar o eliminar.
{% data reusables.project-management.project-note-more-options %}
3. Para editar los contenidos de la nota, haz clic en **Edit note** (Editar nota). ![Botón para editar notas](/assets/images/help/projects/edit-note.png)
4. Para eliminar los contenidos de las notas, haz clic en **Delete note** (Eliminar nota). ![Botón para eliminar notas](/assets/images/help/projects/delete-note.png)

## Leer más

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Crear un {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Agregar propuestas y solicitudes de cambios a un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
