---
title: Acerca de las listas de tareas
intro: Puedes utilizar listas de tareas para desglosar el trabajo de una propuesta o solicitud de cambios en tareas más pequeñas y luego rastrear el conjunto de trabajos completo hasta que se finalicen.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
---

{% ifversion fpt %}
{% note %}

**Nota:** Las listas de tareas mejoradas se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}
{% endif %}

## Acerca de las listas de tareas

Una lista de tareas es un conjunto de tareas que se interpretan independientemente en una lína separada con una casilla de verificación seleccionable. Puedes seleccionar o deseleccionar estas casillas de verificación para marcar las tareas como completas o incompletas.

Puedes utilizar el lenguaje de marcado para crear una lista de tareas en cualquier comentario en {% data variables.product.product_name %}. {% ifversion fpt %}Si referencias una propuesta, solicitud de cambios o debate en una lista de tareas, la referencia se desplegará para mostrar le título y el estado.{% endif %}

{% ifversion not fpt %}
Puedes ver la información del resúmen de la lista de tareas en las listas de una propuesta y una solicitud de extracción, cuando la lista de tareas está en el comentario inicial.
{% else %}

## Acerca de las listas de tareas para propuestas

Si agregas una lista al cuerpo de una tarea, esta tendrá una funcionalidad agregada.

- Para ayudarte a rastrear el trabajo de tu equipo en una propueta, el rpogreso de una lista de tareas de dicha propuesta aparecerá en varios lugares en {% data variables.product.product_name %}, tal como la lista de propuesta de un repositorio.
- Si una tarea referencia otra propuesta y alguien cierra dicha propuesta, la casilla de verificación de la tarea se marcará como completa automáticamente.
- Si se requiere más rastreo o debate, puedes convertir la tarea en una propuesta si deslizas el puntero del mouse sobre la tarea y haces clic en {% octicon "issue-opened" aria-label="The issue opened icon" %} en la esquina superior derecha de la misma. Para agregar más detalles antes de crear la propuesta, puedes utilizar los atajos de teclado para abrir un formato de propuesta nuevo. Para obtener más información, consulta "[Atajos del teclado](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)".
- Cualquier propuesta que se referencia en la lista de tareas especificará que se rastrean en la propuesta de referencia.

![Lista de tareas generada](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Crear listas de tareas

{% data reusables.repositories.task-list-markdown %}

## Volver a ordenar tareas

Puedes reordenar los elementos en una lista de tareas si haces clic a la izquierda de la casilla de verificación de la tarea, arrastrándola a una ubicación nueva y soltándola. Puedes reordenar las tareas a lo largo de listas diferentes en el mismo comentario, pero no puedes volver a ordenar las tareas a lo largo de comentarios diferentes.

![Volver a ordenar lista de tareas](/assets/images/help/writing/task-list-reordered.gif)

## Navegar en las propuestas rastreadas

Cualquier propuesta que se referencie en una lista de tareas especificará que se rastrean por la propuesta que contiene la lista de tareas. Para navegar a la propuesta rastreadora desde la propuesta rastreada, haz clic en el número de la propuesta rastreadora en la sección **Rastreándose en** junto al estado de la propuesta.

![Ejemplo de rastreado en](/assets/images/help/writing/task_list_tracked.png)

## Leer más

* [Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
