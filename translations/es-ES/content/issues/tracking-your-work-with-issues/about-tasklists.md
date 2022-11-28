---
title: Acerca de las listas de tareas
intro: Puedes usar listas de tareas para dividir las propuestas en subtareas más pequeñas.
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180789'
---
{% data reusables.projects.tasklists-release-stage %}

## Acerca de las listas de tareas

Las listas de tareas agregan compatibilidad con jerarquías de propuestas en {% data variables.product.product_name %}, lo que te ayuda a realizar un seguimiento de las propuestas, dividirlas en subtareas más pequeñas y crear nuevas relaciones entre ellas.

Las listas de tareas se basan en la iteración anterior de las [listas de tareas beta](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists), y conservan la capacidad de convertir elementos en propuestas, mostrar el progreso de una lista de tareas y crear una relación de "Sigue/Seguido por" entre las propuestas.

Las propuestas que agregues a las listas de tareas se rellenarán automáticamente para mostrar sus asignados y las etiquetas aplicadas.

![Imagen que muestra Listas de tareas en acción](/assets/images/help/issues/tasklist-hero.png)

### Acerca de la integración con {% data variables.projects.projects_v2 %}

 El panel lateral del proyecto muestra el lugar de una propuesta en la jerarquía en un menú de ruta de navegación, lo que te permite navegar por las propuestas incluidas en las Listas de tareas. También puedes agregar los campos Sigue y Seguido por a las vistas del proyecto para ver rápidamente las relaciones entre tus propuestas. Para obtener información, consulta "[Acerca de los campos Sigue y Seguido por ](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)".

## Creación de listas de tareas

Puedes crear una lista de tareas con Markdown en una descripción de una propuesta. Crea un bloque de código cercado e incluye `[tasklist]` junto a las comillas inversas de apertura. Puedes anteponer `- [ ]` a cada elemento e incluir vínculos a otras propuestas o texto. Opcionalmente, puedes incluir un título como encabezado de Markdown en la parte superior de la lista. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
El markdown se representará mediante {% data variables.product.product_name %} como lista de tareas. Después, puedes realizar cambios y agregar y redactar propuestas mediante la interfaz de usuario. Si editas la descripción de la propuesta, podrás modificar el markdown directamente o copiarlo para duplicar la lista de tareas en otras propuestas.

También puede hacer clic en {% octicon "checklist" aria-label="The checklist icon" %} en la barra de herramientas de formato para insertar una lista de tareas al crear una nueva incidencia o editar una descripción de la incidencia.

![Captura de pantalla en la que se muestra el botón "Agregar lista de tareas".](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## Adición de propuestas a una lista de tareas

1. En la parte inferior de la lista de tareas, haz clic en **Agregar elemento a tareas**.
   
   ![Captura de pantalla que muestra el botón "Agregar elemento a tareas"](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Selecciona la propuesta que se va a agregar a la lista de tareas.
   
   * Para agregar una propuesta actualizada recientemente desde el repositorio, haz clic en la propuesta en la lista desplegable o usa las teclas de dirección para seleccionarla y, después, presiona <kbd>Entrar</kbd>. 
     
     ![Captura de pantalla que muestra propuestas recientes](/assets/images/help/issues/select-recent-issue.png)
     
   * Para buscar una propuesta en el repositorio, empieza a escribir el título de una propuesta o su número y haz clic en el resultado, o usa las teclas de dirección para seleccionarla y presiona <kbd>Entrar</kbd>.
     
     ![Captura de pantalla en la que se muestra la búsqueda de una propuesta](/assets/images/help/issues/search-for-issue.png)
     
   * Para agregar una propuesta directamente mediante su dirección URL, pega la dirección URL de la propuesta y presiona <kbd>Entrar</kbd>.
        
     ![Captura de pantalla que muestra una dirección URL de la propuesta pegada](/assets/images/help/issues/paste-issue-url.png)
     

## Creación de borradores de propuestas en una lista de tareas

Los borradores de propuestas son útiles para capturar rápidamente ideas que más adelante puedes convertir en propuestas. A diferencia de las propuestas y las solicitudes de incorporación de cambios a las que se hace referencia desde los repositorios, los borradores de propuestas solo existen en el proyecto.

1. En la parte inferior de la lista de tareas, haz clic en **Agregar elemento a tareas**.
   
   ![Captura de pantalla que muestra el botón "Agregar elemento a tareas"](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Escribe el título del borrador de propuesta y presiona <kbd>Entrar</kbd>.
   
   ![Captura de pantalla que muestra un título del borrador de propuesta](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## Conversión de borradores de propuestas a propuestas en una lista de tareas

Puedes convertir los borradores de propuestas en propuestas. Las propuestas se crean en el mismo repositorio que la propuesta primaria de la lista de tareas.

1. Junto al borrador de propuesta que quieras convertir, haz clic en el {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de pantalla en la que se muestra el icono de menú](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. Haz clic en **Convertir en propuesta**.
   
   ![Captura de pantalla en la que se muestra la opción "Convertir en propuesta"](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## Eliminación de una propuesta o un borrador de propuesta de una lista de tareas

Puedes quitar propuestas y borradores de propuesta de la lista de tareas. Las propuestas quitadas de una lista de tareas no se quitan del repositorio.

1. Junto al borrador de propuesta que quieras quitar, haz clic en el {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de pantalla en la que se muestra el icono de menú](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. En el menú, haz clic en **Quitar**.
   
   ![Captura de pantalla que muestra la opción "Quitar"](/assets/images/help/issues/tasklist-remove.png)
   
## Cambio del título de una lista de tareas

Al crear una nueva lista de tareas, el título predeterminado es "Tareas". Para modificarlo, edita el markdown de la propuesta.

1. En la parte superior derecha del cuerpo de la propuesta, haz clic en el {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de pantalla que muestra la ubicación del icono del menú](/assets/images/help/issues/comment-menu.png)
   
1. En el menú, haz clic en **Editar**.
   
   ![Captura de pantalla que muestra la opción de edición](/assets/images/help/issues/comment-menu-edit.png)
   
1. Modifica el encabezado del bloque de código cercado al nuevo título. Por ejemplo, cambie `### Tasks` a `### My new title`. 
   
   ![Captura de pantalla que muestra la opción de edición](/assets/images/help/issues/edit-tasklist-title.png)
   
1. Haga clic en **Update comment** (Actualizar comentario).

## Copiado de una lista de tareas

Al copiar la lista de tareas con la opción "Copiar markdown", {% data variables.product.product_name %} copia el markdown en el Portapapeles e incluye el nombre de la propuesta para que puedas pegar la lista de tareas fuera de GitHub sin perder contexto. 

1. En la parte superior derecha de la lista de tareas, haz clic en el {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de pantalla en la que se muestra el icono de menú](/assets/images/help/issues/tasklist-kebab.png)
   
1. En el menú, haz clic en **Copiar markdown**.
   
   ![Captura de pantalla que muestra la opción "Copiar markdown"](/assets/images/help/issues/tasklist-copy-markdown.png)
   
