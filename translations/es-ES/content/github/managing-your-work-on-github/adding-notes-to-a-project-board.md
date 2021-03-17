---
title: Agregar notas a tu tablero de proyecto
intro: Puedes agregar notas a tu tablero de proyecto para que funcionen como recordatorios de tareas o para agregar información relacionada con el tablero de proyecto.
redirect_from:
  - /articles/adding-notes-to-a-project/
  - /articles/adding-notes-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tips:**
- Puedes dar formato a tu nota usando la sintaxis de Markdown. Por ejemplo, puedes usar encabezados, enlaces, listas de tareas o emojis. Para obtener más información, consulta "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)".
- Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Tu tablero de proyecto debe tener al menos una columna antes de que puedas agregar notas. Para obtener más información, consulta "[Crear un tablero de proyecto](/articles/creating-a-project-board)".

{% endtip %}

Cuando agregas una URL para una propuesta, solicitud de extracción u otro tablero de proyecto para una nota, verás la vista previa en una tarjeta de resumen debajo de tu texto.

![Tarjetas de tableros de proyecto mostrando una vista previa de una propuesta y otro tablero de proyecto](/assets/images/help/projects/note-with-summary-card.png)

### Agregar notas a tu tablero de proyecto

1. Desplázate hasta el tablero de proyecto donde quieres agregar notas.
2. En la columna en la que deseas agregar una nota, haz clic en {% octicon "plus" aria-label="The plus icon" %}. ![Icono de adición en el encabezado de la columna](/assets/images/help/projects/add-note-button.png)
3. Escribe tu nota, luego haz clic en **Add** (Agregar). ![Campo para escribir una nota y botón Add card (Agregar tarjeta)](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Sugerencia:** Puedes hacer referencia a una propuesta o solicitud de extracción en tu nota al escribir su URL en la tarjeta.

  {% endtip %}

### Convertir una nota en una propuesta

Si has creado una nota y consideras que no es suficiente para tus necesidades, puedes convertirla en una propuesta.

Cuando conviertes una nota en una propuesta, la propuesta se crea automáticamente usando el contenido de la nota. La primera línea de la nota será el título de la propuesta y cualquier información adicional de la nota se agregará a la descripción de la propuesta.

{% tip %}

**Sugerencia:** Puedes agregar el contenido en el cuerpo de tu nota para @mencionar a alguien, vincular otra propuesta o solicitud de extracción, y agregar un emoji. Estas características de formato Markdown de {% data variables.product.prodname_dotcom %} no son compatibles con las notas del tablero de proyecto, pero una vez que tu nota se convierte en una propuesta, aparecerán correctamente. Para obtener más información sobre cómo usar estas características, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Desplázate hasta la nota que deseas convertir en propuesta.
{% data reusables.project-management.project-note-more-options %}
3. Haz clic en **Convert to issue** (Convertir en propuesta). ![Botón para convertir en propuesta](/assets/images/help/projects/convert-to-issue.png)
4. Si la tarjeta está en un tablero de proyecto en toda la organización, en el menú desplegable, elige el repositorio en el que deseas agregar la propuesta. ![Menú desplegable enumerando los repositorios donde puedes crear la propuesta](/assets/images/help/projects/convert-note-choose-repository.png)
5. Opcionalmente, edita el título de la propuesta completada previamente, y escribe el cuerpo de la propuesta. ![Campos para título y cuerpo de la propuesta](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Haz clic en **Convert to issue** (Convertir en propuesta).
7. La nota se convertirá automáticamente en una propuesta. En el tablero de proyecto, la nueva tarjeta de propuesta estará en la misma ubicación que la nota anterior.

### Editar o eliminar una nota

1. Desplázate hasta la nota que deseas editar o eliminar.
{% data reusables.project-management.project-note-more-options %}
3. Para editar los contenidos de la nota, haz clic en **Edit note** (Editar nota). ![Botón para editar notas](/assets/images/help/projects/edit-note.png)
4. Para eliminar los contenidos de las notas, haz clic en **Delete note** (Eliminar nota). ![Botón para eliminar notas](/assets/images/help/projects/delete-note.png)

### Leer más

- "[Acerca de los tablero de proyecto](/articles/about-project-boards)"
- "[Crear un tablero de proyecto](/articles/creating-a-project-board)"
- "[Editar un tablero de proyecto](/articles/editing-a-project-board)"
- "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/articles/adding-issues-and-pull-requests-to-a-project-board)"
