---
title: Atajos del teclado
intro: 'Prácticamente todas las páginas de {% data variables.product.product_name %} tienen atajos del teclado para realizar acciones más rápido.'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
  - /articles/keyboard-shortcuts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### Acerca de los atajos del teclado

Escribir <kbd>?</kbd> en {% data variables.product.product_name %} genera un cuadro de diálogo que detalla los atajos del teclado disponibles para esa página. Puedes aprovechar estos atajos del teclado para realizar acciones en todo el sitio sin recurrir al mouse para navegar.

A continuación aparece una lista de algunos de los atajos del teclado disponibles.

### Atajos en todo el sitio

| Atajo del teclado           | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>s</kbd> o <kbd>/</kbd> | Se concentra en la barra de búsqueda. Para obtener más información, consulta "[Acerca de buscar en {% data variables.product.company_short %}](/articles/about-searching-on-github)".                                                                                                                                                                                                                                                                                         |
| <kbd>g</kbd> <kbd>n</kbd>   | Dirige a tus notificaciones. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Acerca de las notificaciones](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}". |
| <kbd>esc</kbd>              | Cuando se concentra en la hovercard de un usuario, de una propuesta o de una solicitud de extracción, se cierra la hovercard y se vuelve a centrar en el elemento en el que está la hovercard                                                                                                                                                                                                                                                                                 |

### Repositorios

| Atajo del teclado         | Descripción                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>g</kbd> <kbd>c</kbd> | Dirige a la pestaña **Code** (Código)                                                                                                                                                                                                                                                            |
| <kbd>g</kbd> <kbd>i</kbd> | Dirige a la pestaña **Issues** (Propuestas). Para obtener más información, consulta "[Acerca de las propuestas](/articles/about-issues)".                                                                                                                                                        |
| <kbd>g</kbd> <kbd>p</kbd> | Dirige a la pestaña **Pull requests** (Solicitudes de extracción). Para obtener más información, consulta la sección "[Acerca de las solicitudes de cambios](/articles/about-pull-requests)".{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| <kbd>g</kbd> <kbd>a</kbd> | Ve a la pestaña de **Acciones**. Para obtener más información, consulta la sección "[Acerca de las acciones](/actions/getting-started-with-github-actions/about-github-actions)".{% endif %}
| <kbd>g</kbd> <kbd>b</kbd> | Dirige a la pestaña **Projects** (Proyectos). Para obtener más información, consulta "[Acerca de los tableros de proyectos](/articles/about-project-boards)."                                                                                                                                    |
| <kbd>g</kbd> <kbd>w</kbd> | Dirige a la pestaña **Wiki**. Para obtener más información, consulta "[Acerca de las wikis](/communities/documenting-your-project-with-wikis/about-wikis)".                                                                                                                                      |

### Edición del código fuente

| Atajo del teclado                                                 | Descripción                                                                                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <kbd>e</kbd>                                                      | Abre el archivo de código fuente en la pestaña **Editar archivo**                                            |
| <kbd>control f</kbd> o <kbd>comando f</kbd>                       | Comienza la búsqueda en el editor de archivos                                                                |
| <kbd>control g</kbd> o <kbd>comando g</kbd>                       | Busca el siguiente                                                                                           |
| <kbd>shift control g</kbd> o <kbd>shift comando g</kbd>           | Busca el anterior                                                                                            |
| <kbd>shift control f</kbd> o <kbd>opción de comando f</kbd>       | Reemplaza                                                                                                    |
| <kbd>shift control r</kbd> o <kbd>shift opción de comando f</kbd> | Reemplaza todo                                                                                               |
| <kbd>alt g</kbd>                                                  | Salta la línea                                                                                               |
| <kbd>control z</kbd> o <kbd>comando z</kbd>                       | Deshace                                                                                                      |
| <kbd>control y</kbd> o <kbd>comando y</kbd>                       | Rehace                                                                                                       |
| <kbd>cmd + shift + p</kbd>                                        | Alterna entre las pestañas **Edit file** (Editar comentario) y **Preview changes** (Vista previa de cambios) |

Para obtener más atajos del teclado, consulta la [Documentación de CodeMirror](https://codemirror.net/doc/manual.html#commands).

### Exploración del código fuente

| Atajo del teclado | Descripción                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>t</kbd>      | Activa el buscador de archivos                                                                                                                                                                        |
| <kbd>l</kbd>      | Salta a una línea de tu código                                                                                                                                                                        |
| <kbd>w</kbd>      | Cambia a una rama o etiqueta nueva                                                                                                                                                                    |
| <kbd>y</kbd>      | Expande una URL a su forma canónica. Para obtener más información, consulta "[Obtener enlaces permanentes a los archivos](/articles/getting-permanent-links-to-files)".                               |
| <kbd>i</kbd>      | Muestra u oculta comentarios en diferencias. Para obtener más información, consulta "[Comentar en la diferencia de una solicitud de extracción](/articles/commenting-on-the-diff-of-a-pull-request)". |
| <kbd>a</kbd>      | Muestra u oculta las anotaciones en los diffs                                                                                                                                                         |
| <kbd>b</kbd>      | Abre la visualización del último responsable. Para obtener más información, consulta "[Rastrear las modificaciones de un archivo](/articles/tracing-changes-in-a-file)".                              |

### Comentarios

| Atajo del teclado                                                              | Descripción                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>control b</kbd> o <kbd>comando b</kbd>                                    | Inserta el formato Markdown para el texto en negrita                                                                                                                                                                                                                                                |
| <kbd>control i</kbd> o <kbd>comando i</kbd>                                    | Inserta el formato Markdown para el texto en cursiva                                                                                                                                                                                                                                                |
| <kbd>control k</kbd> o <kbd>comando k</kbd>                                    | Inserta el formato Markdown para crear un enlace                                                                                                                                                                                                                                                    |
| <kbd>control shift p</kbd> o <kbd>comando shift p</kbd>                        | Alterna entre las pestañas de comentarios **Write** (Escribir) y **Preview** (Vista previa)                                                                                                                                                                                                         |
| <kbd>control enter</kbd>                                                       | Envía un comentario                                                                                                                                                                                                                                                                                 |
| <kbd>control .</kbd> y luego <kbd>control [número de respuesta guardada]</kbd> | Abre el menú de respuestas guardadas y luego completa automáticamente el campo de comentarios con una respuesta guardada. Para obtener más información, consulta la sección "[Acerca de las respuestas guardadas](/articles/about-saved-replies)".{% if currentVersion == "free-pro-team@latest" %}
| <kbd>control g</kbd> o <kbd>comando g</kbd>                                    | Inserta una sugerencia. Para obtener más información, consulta "[Revisar las modificaciones propuestas en una solicitud de extracción](/articles/reviewing-proposed-changes-in-a-pull-request)." 
{% endif %}
| <kbd>r</kbd>                                                                   | Cita el texto seleccionado en tu respuesta. Para obtener más información, consulta "[Escritura básica y sintaxis de formato](/articles/basic-writing-and-formatting-syntax#quoting-text)".                                                                                                          |

### Listas de propuestas y solicitudes de extracción

| Atajo del teclado                           | Descripción                                                                                                                                                                                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>c</kbd>                                | Crear un informe de problemas                                                                                                                                                                                                                                      |
| <kbd>control /</kbd> o <kbd>comando /</kbd> | Hace que el cursor se concentre en la barra de propuestas o solicitudes de respuesta. Para obtener más información, consulta "[Usar la búsqueda para filtrar propuestas y solicitudes de extracción](/articles/using-search-to-filter-issues-and-pull-requests)".| |
| <kbd>u</kbd>                                | Filtra por autor                                                                                                                                                                                                                                                   |
| <kbd>l</kbd>                                | Filtra por etiquetas o edita etiquetas. Para obtener más información, consulta "[Filtrar propuestas y solicitudes de extracción por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                           |
| <kbd>alt</kbd> y haz clic                   | Al filtrar por etiquetas, excluye etiquetas. Para obtener más información, consulta "[Filtrar propuestas y solicitudes de extracción por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                      |
| <kbd>m</kbd>                                | Filtra por hitos o edita hitos. Para obtener más información, consulta "[Filtrar propuestas y solicitudes de extracción por hito](/articles/filtering-issues-and-pull-requests-by-milestone)".                                                                     |
| <kbd>a</kbd>                                | Filtra por asignatario s o edita asignatarios. Para obtener más información, consulta "[Filtrar propuestas y solicitudes de extracción por asignatarios](/articles/filtering-issues-and-pull-requests-by-assignees)".                                              |
| <kbd>o</kbd> o <kbd>enter</kbd>             | Abre una propuesta                                                                                                                                                                                                                                                 |

### Propuestas y solicitudes de extracción
| Atajo del teclado                                            | Descripción                                                                                                                                                                                                                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>q</kbd>                                                 | Solicita un revisor. Para obtener más información, consulta "[Solicitar una revisión de solicitud de extracción](/articles/requesting-a-pull-request-review/)".                                                                                      |
| <kbd>m</kbd>                                                 | Establece un hito. Para obtener más información, consulta "[Asociar hitos a propuestas y solicitudes de extracción](/articles/associating-milestones-with-issues-and-pull-requests/)".                                                               |
| <kbd>l</kbd>                                                 | Aplica una etiqueta. Para obtener más información, consulta "[Aplicar etiquetas a propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests/)".                                                                  |
| <kbd>a</kbd>                                                 | Establece un asignatario. Para obtener más información, consulta "[Asignar propuestas y solicitudes de extracción a otros{% data variables.product.company_short %} usuarios](/articles/assigning-issues-and-pull-requests-to-other-github-users/)". |
| <kbd>cmd + shift + p</kbd> or <kbd>control + shift + p</kbd> | Alterna entre las pestañas **Write** (Escribir) y **Preview** (Vista previa)                                                                                                                                                                         |

### Modificaciones en las solicitudes de extracción

| Atajo del teclado                      | Descripción                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                           | Abre la lista de confirmaciones de la solicitud de extracción                                                                                                                                                                                                                                                                                                                                   |
| <kbd>t</kbd>                           | Abre la lista de archivos modificados de la solicitud de extracción                                                                                                                                                                                                                                                                                                                             |
| <kbd>j</kbd>                           | Mueve la selección hacia abajo en la lista                                                                                                                                                                                                                                                                                                                                                      |
| <kbd>k</kbd>                           | Mueve la selección hacia arriba en la lista                                                                                                                                                                                                                                                                                                                                                     |
| <kbd>cmd + shift + enter </kbd>        | Agrega un comentario simple en una diferencia de solicitud de extracción                                                                                                                                                                                                                                                                                                                        |
| <kbd>alt</kbd> y haz clic              | Alterna entre colapsar y expandir todos los comentarios de revisión desactualizados en una solicitud de cambios presionando `alt` y dando clic en **Mostrar desactualizados** U **Ocultar.|{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %} desactualizados**                                        |
| Da clic, luego <kbd>shift</kbd> y clic | Comenta en líneas múltiples de una solicitud de extracción dando clic en un número de línea, sosteniendo <kbd>shift</kbd>, y luego dando clic en otro número de línea. Para obtener más información, consulta "[Comentar en una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."
{% endif %}

### Tableros de proyecto

#### Mover una columna

| Atajo del teclado                                                                                 | Descripción                                           |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| <kbd>enter</kbd> o <kbd>space</kbd>                                                               | Comienza a mover la columna enfocada                  |
| <kbd>escape</kbd>                                                                                 | Cancela el movimiento en curso                        |
| <kbd>enter</kbd>                                                                                  | Completa el movimiento en curso                       |
| <kbd>←</kbd> o <kbd>h</kbd>                                                                       | Mueve la columna hacia la izquierda                   |
| <kbd>command + ←</kbd> o <kbd>command + h</kbd> o <kbd>control + ←</kbd> o <kbd>control + h</kbd> | Mueve la columna hacia la posición más a la izquierda |
| <kbd>→</kbd> o <kbd>l</kbd>                                                                       | Mueve la columna hacia la derecha                     |
| <kbd>command + →</kbd> o <kbd>command + l</kbd> o <kbd>control + →</kbd> o <kbd>control + l</kbd> | Mueve la columna hacia la posición más a la derecha   |

#### Mover una tarjeta

| Atajo del teclado                                                                                                                 | Descripción                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <kbd>enter</kbd> o <kbd>space</kbd>                                                                                               | Comienza a mover la tarjeta focalizada                                         |
| <kbd>escape</kbd>                                                                                                                 | Cancela el movimiento en curso                                                 |
| <kbd>enter</kbd>                                                                                                                  | Completa el movimiento en curso                                                |
| <kbd>↓</kbd> o <kbd>j</kbd>                                                                                                       | Mueve la tarjeta hacia abajo                                                   |
| <kbd>command + ↓</kbd> o <kbd>command + j</kbd> o <kbd>control + ↓</kbd> o <kbd>control + j</kbd>                                 | Mueve una tarjeta hacia la parte de abajo de la columna                        |
| <kbd>↑</kbd> o <kbd>k</kbd>                                                                                                       | Mueve una tarjeta hacia arriba                                                 |
| <kbd>command + ↑</kbd> o <kbd>command + k</kbd> o <kbd>control + ↑</kbd> o <kbd>control + k</kbd>                                 | Mueve una tarjeta hacia la parte de arriba de la columna                       |
| <kbd>←</kbd> o <kbd>h</kbd>                                                                                                       | Mueve una tarjeta hacia la parte de abajo de la columna de la izquierda        |
| <kbd>shift + ←</kbd> o <kbd>shift + h</kbd>                                                                                       | Mueve una tarjeta hacia la parte de arriba de la columna de la izquierda       |
| <kbd>command + ←</kbd> o <kbd>command + h</kbd> o <kbd>control + ←</kbd> o <kbd>control + h</kbd>                                 | Mueve una tarjeta hacia la parte de abajo de la columna de más a la izquierda  |
| <kbd>command + shift + ←</kbd> o <kbd>command + shift + h</kbd> o <kbd>control + shift + ←</kbd> o <kbd>control + shift + h</kbd> | Mueve una tarjeta hacia la parte de arriba de la columna de más a la izquierda |
| <kbd>→</kbd>                                                                                                                      | Mueve una tarjeta hacia la parte de abajo de la columna de la derecha          |
| <kbd>shift + →</kbd> o <kbd>shift + l</kbd>                                                                                       | Mueve una tarjeta hacia la parte de arriba de la columna de la derecha         |
| <kbd>command + →</kbd> o <kbd>command + l</kbd> o <kbd>control + →</kbd> o <kbd>control + l</kbd>                                 | Mueve una tarjeta hacia la parte de abajo de la columna de más a la derecha    |
| <kbd>command + shift + →</kbd> o <kbd>command + shift + l</kbd> o <kbd>control + shift + →</kbd> o <kbd>control + shift + l</kbd> | Mueve una tarjeta hacia la parte de abajo de la columna de más a la derecha    |

#### Previsualizar una tarjeta

| Atajo del teclado | Descripción                                  |
| ----------------- | -------------------------------------------- |
| <kbd>esc</kbd>    | Elige el panel de vista previa de la tarjeta |

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_actions %}

| Atajo del teclado                                        | Descripción                                                                                   |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <kbd>command + space </kbd> o <kbd>control + space</kbd> | En el editor del flujo de trabajo, obtén las sugerencias para tu archivo de flujo de trabajo. |
| <kbd>g</kbd> <kbd>f</kbd>                                | Ir al archivo de flujo de trabajo                                                             |
| <kbd>shift + t</kbd> or <kbd>T</kbd>                     | Activa las marcas de tiempo en las bitácoras                                                  |
| <kbd>shift + f</kbd> or <kbd>F</kbd>                     | Activa las bitácoras de pantalla completa                                                     |
| <kbd>esc</kbd>                                           | Sal de las bitácoras de pantalla completa                                                     |

{% endif %}

### Notificaciones
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| Atajo del teclado    | Descripción            |
| -------------------- | ---------------------- |
| <kbd>e</kbd>         | Marcar como completado |
| <kbd>shift + u</kbd> | Marcar como no leído   |
| <kbd>shift + i</kbd> | Marca como leído       |
| <kbd>shift + m</kbd> | Unsubscribe            |

{% else %}

| Atajo del teclado                          | Descripción      |
| ------------------------------------------ | ---------------- |
| <kbd>e</kbd> o <kbd>I</kbd> o <kbd>y</kbd> | Marca como leído |
| <kbd>shift + m</kbd>                       | Silencia el hilo |
{% endif %}

### Gráfica de Red

| Atajo del teclado                           | Descripción                      |
| ------------------------------------------- | -------------------------------- |
| <kbd>←</kbd> o <kbd>h</kbd>                 | Desplaza hacia la izquierda      |
| <kbd>→</kbd> o <kbd>l</kbd>                 | Desplaza hacia la derecha        |
| <kbd>↑</kbd> o <kbd>k</kbd>                 | Desplaza hacia arriba            |
| <kbd>↓</kbd> o <kbd>j</kbd>                 | Desplaza hacia abajo             |
| <kbd>shift + ←</kbd> o <kbd>shift + h</kbd> | Desplaza todo hacia la izquierda |
| <kbd>shift + →</kbd> o <kbd>shift + l</kbd> | Desplaza todo hacia la derecha   |
| <kbd>shift + ↑</kbd> o <kbd>shift + k</kbd> | Desplaza todo hacia arriba       |
| <kbd>shift + ↓</kbd> o <kbd>shift + j</kbd> | Desplaza todo hacia abajo        |
