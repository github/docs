---
title: Crear una solicitud de extracción
intro: 'Crea una solicitud de extracción para proponer y colaborar en los cambios en un repositorio. Estos cambios se proponen en una *rama*, lo cual garantiza que la rama predeterminada contenga únicamente trabajo finalizado y aprobado.'
redirect_from:
  - /articles/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Todo usuario que tenga permisos de lectura para un repositorio puede crear una solicitud de extracción, pero tú debes tener permisos de escritura para poder crear una rama. Si deseas crear una rama nueva para tu solicitud de extracción y no tienes permisos de escritura para el repositorio, puedes bifurcar antes el repositorio. Para obtener más información, consulta "[Crear una solicitud de extracción a partir de una bifurcación](/articles/creating-a-pull-request-from-a-fork)" y "
[Acerca de las bifurcaciones](/articles/about-forks)".</p> 

Puedes especificar en qué rama deseas fusionar tus cambios cuando creas tu solicitud de extracción. Las solicitudes de extracción solo se pueden abrir entre dos ramas que sean diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}



### Cambiar el rango de la rama y el repositorio de destino

Predeterminadamente, las solicitudes de cambios se basan en la rama predeterminada del repositorio padre. Para obtener más información, consulta "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

Si el repositorio padre predeterminado no es el correcto, puedes cambiar tanto el repositorio padre como la rama con las listas desplegables. También puedes intercambiar tus ramas base y encabezado con las listas desplegables para establecer diferencias entre los puntos de referencia. Las referencias que aparecen aquí deben ser nombres de ramas en tu repositorio GitHub.

![Ramas para editar la solicitud de extracción](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Cuando pienses en las ramas, recuerda que la *rama base* es **el lugar donde** se deben aplicar los cambios y la *rama encabezado* contiene **los cambios** que deseas que se apliquen.

Cuando cambias el repositorio base, también puedes cambiar las notificaciones de la solicitud de extracción. Cualquier usuario que pueda subir al repositorio base recibirá una notificación por correo electrónico y verá la nueva solicitud de extracción en su tablero la próxima vez que inicie sesión.

Cuando cambies alguna información en el rango de la rama, las áreas de vista previa modificadas Confirmar y Campos se actualizarán para mostrar tu nuevo rango.

{% tip %}

**Tips**:

- Usando la vista comparativa, puedes configurar comparaciones en todo el periodo. Para obtener más información, consulta la sección "[Comparar confirmaciones de cambios](/github/committing-changes-to-your-project/comparing-commits)."
- Los mantenedores de proyecto pueden agregar una plantilla de solicitud de extracción para un repositorio. Las plantillas incluyen indicaciones para la información en el cuerpo de una solicitud de extracción. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/articles/about-issue-and-pull-request-templates)".

{% endtip %}



### Crear una solicitud de extracción

{% tip %}

**Tip**: También puedes utilizar {% data variables.product.prodname_desktop %} para crear una solicitud de extracción. Para obtener más información, consulta la sección “[Crear un informe de problemas o solicitud de extracción](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" en la documentación de {% data variables.product.prodname_desktop %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}

2. En el menú "Branch" (Rama), elige la rama que contiene tus confirmaciones. ![Menú desplegable de ramas](/assets/images/help/pull_requests/branch-dropdown.png) 
   
   {% data reusables.repositories.new-pull-request %}

4. Usa el menú desplegable de la rama _base_ para seleccionar la rama en la que deseas fusionar tus cambios y luego usa el menú desplegable de la rama de _comparación_ para elegir la rama de tema en la que hiciste los cambios. ![Menús desplegables para elegir la base y comparar ramas](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) 
   
   {% data reusables.repositories.pr-title-description %}
   
   
   
   {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Una vez que tu solicitud de extracción ha sido revisada, esta se puede [fusionar en un repositorio](/articles/merging-a-pull-request).



### Leer más

- "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)"
- "[Cambiar la rama base de una solicitud de extracción](/articles/changing-the-base-branch-of-a-pull-request)"
- "[Agregar propuestas y solicitudes de extracción al tablero de proyecto desde la barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
