---
title: Accesos directos del teclado
intro: 'Prácticamente, todas las páginas de {% data variables.product.prodname_dotcom %} tienen métodos abreviados de teclado para realizar acciones más rápido.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180781'
---
## Acerca de los atajos del teclado

Al escribir <kbd>?</kbd> en {% data variables.product.prodname_dotcom %} se abre un cuadro de diálogo en el que se enumeran los métodos abreviados de teclado disponibles para esa página. Puedes aprovechar estos atajos del teclado para realizar acciones en todo el sitio sin recurrir al mouse para navegar.

{% ifversion keyboard-shortcut-accessibility-setting %} Puedes deshabilitar los métodos abreviados de teclado de teclas de caracteres, a la vez que permites los que usan teclas modificadores en la configuración de accesibilidad. Para más información, vea "[Administración de la configuración de accesibilidad](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)".{% endif %}

{% ifversion command-palette %} En {% data variables.product.prodname_command_palette %}, también se proporciona acceso rápida a una amplia variedad de acciones, sin necesidad de recordar los métodos abreviados de teclado. Para más información, vea "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

En las secciones siguientes se enumeran algunos de los métodos abreviados de teclado disponibles, organizados por las páginas donde puedes usarlos en {% data variables.location.product_location %}.

## Atajos en todo el sitio

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>S</kbd> o <kbd>/</kbd> | Se concentra en la barra de búsqueda. Para más información, vea "[Acerca de la búsqueda en {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".
|<kbd>G</kbd> <kbd>N</kbd> | Dirige a tus notificaciones. Para más información, vea "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications)".
|<kbd>Esc</kbd> | Cuando se concentra en la hovercard de un usuario, de una propuesta o de una solicitud de extracción, se cierra la hovercard y se vuelve a centrar en el elemento en el que está la hovercard
{% ifversion command-palette %}|<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Abre la {% data variables.product.prodname_command_palette %}. Si va a editar texto de Markdown, abra la paleta de comandos con <kbd>Comando</kbd>+<kbd>Opción</kbd>+<kbd>K</kbd> o <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. Para más información, vea "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

## Repositorios

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Ir a la pestaña **Código**
|<kbd>G</kbd> <kbd>I</kbd> | Ir a la pestaña **Incidencias**. Para más información, vea "[Acerca de las incidencias](/articles/about-issues)".
|<kbd>G</kbd> <kbd>P</kbd> | Ir la pestaña **Solicitudes de incorporación de cambios**. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Ir a la pestaña **Acciones**. Para más información, vea "[Acerca de las acciones](/actions/getting-started-with-github-actions/about-github-actions)".{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Ir a la pestaña **Proyectos**. Para más información, vea "[Acerca de los paneles de proyecto](/articles/about-project-boards)".
|<kbd>G</kbd> <kbd>W</kbd> | Ir a la pestaña **Wiki**. Para obtener más información, consulta "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)".{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Ir a la pestaña **Debates**. Para más información, vea "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".{% endif %}

## Edición del código fuente

| Método abreviado de teclado | Descripción |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | Abre un repositorio o una solicitud de incorporación de cambios en el editor basado en web en la misma pestaña del explorador. Debes haber iniciado sesión para usar el editor. Para obtener más información, consulta "[Editor basado en web](/codespaces/developing-in-codespaces/web-based-editor)".
|<kbd>></kbd>| Abre un repositorio o una solicitud de incorporación de cambios en el editor basado en web en una pestaña nueva del explorador. Debes haber iniciado sesión para usar el editor. Para más información, vea "[Editor basado en web](/codespaces/developing-in-codespaces/web-based-editor)".{% endif %} |<kbd>Comando</kbd>+<kbd>B</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Inserta formato de Markdown para texto en negrita |<kbd>Comando</kbd>+<kbd>I</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Inserta formato de Markdown para texto en cursiva |<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) Inserta formato de Markdown para crear un vínculo{% ifversion fpt or ghec or ghae or ghes > 3.3 %}|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>7</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>7</kbd> (Windows/Linux) | Inserta formato de Markdown para una lista ordenada |<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>8</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>8</kbd> (Windows/Linux) | Inserta formato de Markdown para una lista sin ordenar |<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>.</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>.</kbd> (Windows/Linux) | Inserta formato de Markdown para una cita{% endif %} |<kbd>E</kbd> | Abrir el archivo de código fuente en la pestaña **Editar archivo** |<kbd>Comando</kbd>+<kbd>F</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | Iniciar la búsqueda en el editor de archivos |<kbd>Comando</kbd>+<kbd>G</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Buscar siguiente |<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>G</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>G</kbd> (Windows/Linux) | Buscar siguiente |<kbd>Comando</kbd>+<kbd>Opción</kbd>+<kbd>F</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>F</kbd> (Windows/Linux) | Reemplazar |<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>Opción</kbd>+<kbd>F</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>R</kbd> (Windows/Linux) | Reemplazar todo |<kbd>Alt</kbd>+<kbd>G</kbd> | Ir a la línea |<kbd>Comando</kbd>+<kbd>Z</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux) | Deshacer |<kbd>Comando</kbd>+<kbd>Y</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux) | Rehacer |<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> | Alterna entre las pestañas **Editar archivo** y **Vista previa de los cambios** |<kbd>Comando</kbd>+<kbd>S</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) | Escribir un mensaje de confirmación

Para obtener más métodos abreviados de teclado, vea la [documentación de CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Exploración del código fuente

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>T</kbd> | Activa el buscador de archivos
|<kbd>L</kbd> | Salta a una línea de tu código
|<kbd>W</kbd> | Cambia a una rama o etiqueta nueva
|<kbd>S</kbd> | Expande una URL a su forma canónica. Para más información, vea "[Obtención de vínculos permanentes en archivos](/articles/getting-permanent-links-to-files)".
|<kbd>I</kbd> | Muestra u oculta comentarios en diferencias. Para más información, vea "[Comentarios sobre la diferencia de una solicitud de incorporación de cambios](/articles/commenting-on-the-diff-of-a-pull-request)".
|<kbd>A</kbd> | Muestra u oculta las anotaciones en los diffs
|<kbd>B</kbd> | Abre la visualización del último responsable. Para más información, vea "[Seguimiento de cambios en un archivo](/articles/tracing-changes-in-a-file)".

## Comentarios

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Comando</kbd>+<kbd>B</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Inserta el formato Markdown para el texto en negrita
|<kbd>Comando</kbd>+<kbd>I</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Inserta el formato Markdown para el texto en cursiva
|<kbd>Comando</kbd>+<kbd>E</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) | Inserta formato de Markdown para el código o un comando dentro de una línea{% ifversion fpt or ghae > 3.3 or ghes or ghec %}.
|<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Inserta formato de Markdown para crear un vínculo{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}.
|<kbd>Comando</kbd>+<kbd>V</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux) | Crea un vínculo de Markdown cuando se aplica sobre texto resaltado{% endif %}
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre las pestañas de comentarios **Escribir** y **Vista previa**{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>Command</kbd>+<kbd>Mayús</kbd>+<kbd>V</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>V</kbd> (Windows/Linux) | Pega el vínculo HTML como texto sin formato{% endif %}.
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>Opción</kbd>+<kbd>V</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | Pega el vínculo HTML como texto sin formato.
|<kbd>Command</kbd>+<kbd>Mayús</kbd>+<kbd>7</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>7</kbd> (Windows/Linux) | Inserta formato de lenguaje de marcado para una lista ordenada
|<kbd>Command</kbd>+<kbd>Mayús</kbd>+<kbd>8</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>8</kbd> (Windows/Linux) | Inserta formato de Markdown para una lista sin ordenar.
|<kbd>Command</kbd>+<kbd>Entrar</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Entrar</kbd> (Windows/Linux) | Envía un comentario
|<kbd>Ctrl</kbd>+ <kbd>.</kbd> y, después, <kbd>Ctrl</kbd>+<kbd>[número de respuesta guardado]</kbd> | Abre el menú de respuestas guardadas y luego completa automáticamente el campo de comentarios con una respuesta guardada. Para más información, vea "[Acerca de las respuestas guardadas](/articles/about-saved-replies)".
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>.</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>.</kbd> (Windows/Linux) | Inserta formato de Markdown para una cita{% ifversion fpt or ghec %}
|<kbd>Comando</kbd>+<kbd>G</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Inserta una sugerencia. Para más información, vea "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)". |{% endif %}
|<kbd>R</kbd> | Cita el texto seleccionado en tu respuesta. Para más información, vea "[Sintaxis básica de escritura y formato](/articles/basic-writing-and-formatting-syntax#quoting-text)". |

## Listas de propuestas y solicitudes de extracción

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>C</kbd> | Crear un problema
|<kbd>Comando</kbd>+<kbd>/</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Hace que el cursor se concentre en la barra de propuestas o solicitudes de respuesta. Para más información, vea "[Filtrado y búsqueda de incidencias y solicitudes de incorporación de cambios](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)".||
|<kbd>U</kbd> | Filtra por autor
|<kbd>L</kbd> | Filtra por etiquetas o edita etiquetas. Para más información, vea "[Filtrado de incidencias y solicitudes de incorporación de cambios por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".
|<kbd>Alt</kbd> y clic | Al filtrar por etiquetas, excluye etiquetas. Para más información, vea "[Filtrado de incidencias y solicitudes de incorporación de cambios por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".
|<kbd>M</kbd> | Filtra por hitos o edita hitos. Para más información, vea "[Filtrado de incidencias y solicitudes de incorporación de cambios por hito](/articles/filtering-issues-and-pull-requests-by-milestone)".
|<kbd>A</kbd> | Filtra por asignatario s o edita asignatarios. Para más información, vea "[Filtrado de incidencias y solicitudes de incorporación de cambios por usuarios asignados](/articles/filtering-issues-and-pull-requests-by-assignees)".
|<kbd>O</kbd> o <kbd>Entrar</kbd> | Propuesta abierta

## Propuestas y solicitudes de extracción
| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Q</kbd> | Solicita un revisor. Para más información, vea "[Solicitud de la revisión de una solicitud de incorporación de cambios](/articles/requesting-a-pull-request-review/)".
|<kbd>M</kbd> | Establece un hito. Para más información, vea "[Asociación de hitos con incidencias y solicitudes de incorporación de cambios](/articles/associating-milestones-with-issues-and-pull-requests/)".
|<kbd>L</kbd> | Aplica una etiqueta. Para más información, vea "[Aplicación de etiquetas a incidencias y solicitudes de incorporación de cambios](/articles/applying-labels-to-issues-and-pull-requests/)".
|<kbd>A</kbd> | Establece un asignatario. Para más información, vea "[Asignación de incidencias y solicitudes de incorporación de cambios a otros usuarios de {% data variables.product.company_short %} ](/articles/assigning-issues-and-pull-requests-to-other-github-users/)".
|<kbd>X</kbd> | Vincula una propuesta o solicitud de cambios desde el mismo repositorio. Para más información, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)".
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre las pestañas **Escribir** y **Vista previa**{% ifversion fpt or ghec %}
|<kbd>Alt</kbd> y clic | Al crear una incidencia desde una lista de tareas, mantenga presionada la tecla <kbd>Alt</kbd> y haga clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la tarea para abrir el formulario de nueva incidencia en la pestaña actual. Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
|<kbd>Mayús</kbd> y clic | Al crear una incidencia desde una lista de tareas, mantenga presionada la tecla <kbd>Mayús</kbd> y haga clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la tarea para abrir el formulario de nueva incidencia en una pestaña nueva. Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
|<kbd>Comando</kbd> y clic (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd> y clic (Windows/Linux) | Al crear una incidencia desde una lista de tareas, mantenga presionadas la teclas <kbd>Comando</kbd> o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>, y haga clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la tarea para abrir el formulario de nueva incidencia en la nueva ventana. Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".{% endif %}

## Pestaña "Archivos cambiados" en las solicitudes de incorporación de cambios

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>C</kbd> | Abre el menú desplegable **Confirmaciones** para filtrar qué confirmaciones se muestran en las diferencias.
|<kbd>T</kbd> | Mueve el cursor al campo "Filtrar archivos modificados"
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>Entrar</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>Entrar</kbd> (Windows/Linux) | Envíe un comentario de revisión |
|<kbd>Opción</kbd> y haga clic en (Mac) o <kbd>Alt</kbd> y haga clic (Windows/Linux) | Para alternar entre contraer y expandir todos los comentarios de revisión obsoletos o resueltos en una solicitud de incorporación de cambios, (por ejemplo, manteniendo presionada la tecla <kbd>Alt</kbd> y haz clic en **Mostrar obsoleto** u **Ocultar obsoleto**) |
|Clic y después, <kbd>Mayús</kbd> y clic | Para realizar comentarios en varias líneas de una solicitud de incorporación de cambios, haga clic en un número de línea, mantenga presionada la tecla <kbd>Mayús</kbd> y, después, haga clic en otro número de línea. Para más información, vea "[Comentarios en una solicitud de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)".|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Navegación por un proyecto

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Comando</kbd>+<kbd>f</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>f</kbd> (Windows/Linux) | Campo de filtro de enfoque
|<kbd>←</kbd> | Mover el enfoque sobre la celda a la izquierda
|<kbd>→</kbd> | Mover el enfoque sobre la celda a la derecha
|<kbd>↑</kbd> | Mover el enfoque sobre la celda hacia arriba
|<kbd>↓</kbd> | Mover el enfoque sobre la celda hacia abajo

### Manipulación de un proyecto

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Entrar</kbd> | Alternar el modo de edición de la celda enfocada
|<kbd>Escape</kbd> | Cancelar la edición de la celda enfocada
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>\</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>\</kbd> (Windows/Linux) | Abrir el menú de acciones de fila
|<kbd>Mayúsculas</kbd>+<kbd>Espacio</kbd> | Seleccionar elemento
|<kbd>Espacio</kbd> | Abrir elemento seleccionado
|<kbd>e</kbd> | Archivar elementos seleccionados

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### Mover una columna

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Entrar</kbd> o <kbd>Espacio</kbd> | Comienza a mover la columna enfocada
|<kbd>Esc</kbd> | Cancela el movimiento en curso
|<kbd>Entrar</kbd> | Completa el movimiento en curso
|<kbd>←</kbd> o <kbd>H</kbd> | Mueve la columna hacia la izquierda
|<kbd>Comando</kbd>+<kbd>←</kbd> o <kbd>Comando</kbd>+<kbd>H</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> o <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Mueve la columna hacia la posición más a la izquierda
|<kbd>→</kbd> o <kbd>L</kbd> | Mueve la columna hacia la derecha
|<kbd>Comando</kbd>+<kbd>→</kbd> o <kbd>Comando</kbd>+<kbd>L</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> o <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Mueve la columna hacia la posición más a la derecha

### Mover una tarjeta

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Entrar</kbd> o <kbd>Espacio</kbd> | Comienza a mover la tarjeta focalizada
|<kbd>Esc</kbd> | Cancela el movimiento en curso
|<kbd>Entrar</kbd> | Completa el movimiento en curso
|<kbd>↓</kbd> o <kbd>J</kbd> | Mueve la tarjeta hacia abajo
|<kbd>Comando</kbd>+<kbd>↓</kbd> o <kbd>Comando</kbd>+<kbd>J</kbd> (Mac), o </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> o <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de abajo de la columna
|<kbd>↑</kbd> o <kbd>K</kbd> | Mueve una tarjeta hacia arriba
|<kbd>Comando</kbd>+<kbd>↑</kbd> o <kbd>Comando</kbd>+<kbd>K</kbd> (Mac), o </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> o <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de arriba de la columna
|<kbd>←</kbd> o <kbd>H</kbd> | Mueve una tarjeta hacia la parte de abajo de la columna de la izquierda
|<kbd>Mayús</kbd>+<kbd>←</kbd> o <kbd>Mayús</kbd>+<kbd>H</kbd> | Mueve una tarjeta hacia la parte de arriba de la columna de la izquierda
|<kbd>Comando</kbd>+<kbd>←</kbd> o <kbd>Comando</kbd>+<kbd>H</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> o <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de abajo de la columna de más a la izquierda
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>←</kbd> o <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>H</kbd> (Mac), o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>←</kbd> o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>H</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de arriba de la columna de más a la izquierda
|<kbd>→</kbd> | Mueve una tarjeta hacia la parte de abajo de la columna de la derecha
|<kbd>Mayús</kbd>+<kbd>→</kbd> o <kbd>Mayús</kbd>+<kbd>L</kbd> | Mueve una tarjeta hacia la parte de arriba de la columna de la derecha
|<kbd>Comando</kbd>+<kbd>→</kbd> o <kbd>Comando</kbd>+<kbd>L</kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> o <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de abajo de la columna de más a la derecha
|<kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>→</kbd> o <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>L</kbd> (Mac), o </br> <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>→</kbd> o <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>L</kbd> (Windows/Linux) | Mueve una tarjeta hacia la parte de abajo de la columna de más a la derecha

### Previsualizar una tarjeta

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Esc</kbd> | Elige el panel de vista previa de la tarjeta

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>Comando</kbd>+<kbd>Espacio </kbd> (Mac) o </br> <kbd>Ctrl</kbd>+<kbd>Espacio</kbd> (Windows/Linux) | En el editor del flujo de trabajo, obtén las sugerencias para tu archivo de flujo de trabajo.
|<kbd>G</kbd> <kbd>F</kbd> | Ir al archivo de flujo de trabajo
|<kbd>Mayús</kbd>+<kbd>T</kbd> o <kbd>T</kbd> | Activa las marcas de tiempo en las bitácoras
|<kbd>Mayús</kbd>+<kbd>F</kbd> o <kbd>F</kbd> | Activa las bitácoras de pantalla completa
|<kbd>Esc</kbd> | Sal de las bitácoras de pantalla completa

{% endif %}

## Notificaciones

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>E</kbd> | Marcar como completado
|<kbd>Mayús</kbd>+<kbd>U</kbd>| Marcar como no leído
|<kbd>Mayús</kbd>+<kbd>I</kbd>| Marcar como leído
|<kbd>Mayús</kbd>+<kbd>M</kbd> | Cancelar suscripción

## Gráfica de Red

| Método abreviado de teclado | Descripción
|-----------|------------
|<kbd>←</kbd> o <kbd>H</kbd> | Desplazarse a la izquierda
|<kbd>→</kbd> o <kbd>L</kbd> | Desplazarse a la derecha
|<kbd>↑</kbd> o <kbd>K</kbd> | Desplazarse hacia arriba
|<kbd>↓</kbd> o <kbd>J</kbd> | Desplazarse hacia abajo
|<kbd>Mayús</kbd>+<kbd>←</kbd> (Mac) o </br> <kbd>Mayús</kbd>+<kbd>H</kbd> (Windows/Linux) | Desplaza todo hacia la izquierda
|<kbd>Mayús</kbd>+<kbd>→</kbd> (Mac) o </br> <kbd>Mayús</kbd>+<kbd>L</kbd> (Windows/Linux) | Desplaza todo hacia la derecha
|<kbd>Mayús</kbd>+<kbd>↑</kbd> (Mac) o </br> <kbd>Mayús</kbd>+<kbd>K</kbd> (Windows/Linux) | Desplaza todo hacia arriba
|<kbd>Mayús</kbd>+<kbd>↓</kbd> (Mac) o </br> <kbd>Mayús</kbd>+<kbd>J</kbd> (Windows/Linux) | Desplaza todo hacia abajo
