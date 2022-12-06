---
title: 'Adición de elementos a {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Aprende a agregar solicitudes de incorporación de cambios, incidencias y borradores de incidencias a los proyectos de forma individual o masiva.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107617'
---
Tu proyecto puede rastrear borradores de propuestas, propuestas, y solicitudes de cambios. 

{% note %}

**Nota**: Un proyecto puede contener un máximo de {% data variables.projects.item_limit %} elementos y {% data variables.projects.archived_item_limit %} elementos archivados. {% ifversion projects-v2-auto-archive %}Para obtener más información sobre el archivado automático de los elementos cuando cumplen criterios específicos, consulta "[Archivado automático de elementos](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)."{% endif %}

{% endnote %}

### Adición de incidencias y solicitudes de incorporación de cambios a un proyecto

#### Pegado de la URL de una incidencia o solicitud de incorporación de cambios

{% data reusables.projects.add-item-via-paste %}

#### Buscar una propuesta o solicitud de cambios

{% data reusables.projects.add-item-bottom-row %}
2. Escriba <kbd>#</kbd> .
3. Selecciona el repositorio en donde se ubica la solicitud de cambios o propuesta. Puedes teclear la parte del nombre de repositorio para reducir tus opciones.
  ![Captura de pantalla en la que se muestra cómo pegar una dirección URL de incidencia para agregarla al proyecto](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Selecciona la propuesta o solicitud de cambios. Puedes teclear parte del título para reducir tus opciones.
  ![Captura de pantalla en la que se muestra cómo pegar una dirección URL de incidencia para agregarla al proyecto](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Adición masiva de incidencias y solicitudes de incorporación de cambios

1. En la fila inferior del proyecto, haz clic en {% octicon "plus" aria-label="plus icon" %}.
  ![Captura de pantalla en la que se muestra el botón + en la parte inferior del proyecto](/assets/images/help/projects-v2/omnibar-add.png)
1. Haz clic en **Agregar elemento desde el repositorio**.
  ![Captura de pantalla en la que se muestra el elemento de menú "Agregar elemento desde el repositorio"](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### Adición de varias incidencias o solicitudes de incorporación de cambios de un repositorio

1. En {% data variables.location.product_location %}, ve al repositorio que contiene las incidencias o solicitudes de incorporación de cambios que quieres agregar al proyecto.
{% data reusables.repositories.sidebar-issue-pr %}
1. A la izquierda de cada uno de los títulos de las incidencias, selecciona aquellas que quieres agregar al proyecto.
  ![Captura de pantalla que muestra la casilla para seleccionar la incidencia o solicitud de incorporación de cambios](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para seleccionar todas las incidencias o solicitudes de incorporación de cambios de la página, en la parte superior de la lista de incidencias o solicitudes de incorporación de cambios, selecciona todas. 
  ![Captura de pantalla que muestra la casilla para seleccionar todo en pantalla](/assets/images/help/issues/select-all-checkbox.png)
1. Encima de la lista de incidencias o solicitudes de incorporación de cambios, haz clic en **Proyectos**. 
  ![Captura de pantalla en la que se muestra la opción Proyectos](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Haz clic en los proyectos a los que quieres agregar las incidencias o solicitudes de incorporación de cambios seleccionadas.
  ![Captura de pantalla que muestra la casilla para seleccionar todo en pantalla](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Asignar un rpoyecto desde dentro de una propuesta o solicitud de cambios

1. Navega a la propuesta o solicitud de cambios que quieras agregar a un proyecto.
2. En la barra lateral, haga clic en **Projects** (Proyectos).
  ![Captura de pantalla en la que se muestra "Proyectos" en la barra lateral de incidencias](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Selecciona el proyecto al cual quieras agregar la propuesta o solicitud de cambios.
  ![Captura de pantalla en la que se muestra la selección de un proyecto en la barra lateral de incidencias](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Opcionalmente, llena los campos personalizados.
  ![Barra lateral del proyecto](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Uso de la paleta de comandos para agregar una incidencia o una solicitud de incorporación de cambios

1. {% data reusables.projects.open-command-palette %}
1. Comienza a escribir "Agregar elementos" y presiona <kbd>Intro</kbd>.
{% data reusables.projects.bulk-add %}

### Crear borradores de propuestas

Los borradores de propuestas son útiles si quieres capturar ideas rápidamente. A diferencia de las incidencias y las solicitudes de incorporación de cambios a las que se hace referencia desde los repositorios, los borradores de incidencias solo existen en el proyecto.

{% data reusables.projects.add-draft-issue %}

Los borradores de propuesta pueden tener un título, cuerpo de texto, asignados y cualquier campo personalizado desde tu proyecto. Para poder poblar el repositorio, las etiquetas o hitos de un borrador de propuesta, primero debes convertirla en una propuesta formal. Para obtener más información, vea "[Conversión de borradores de incidencias a incidencias](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)".

{% note %}

**Nota**: Los usuarios no recibirán notificaciones cuando se les asigne o se les mencione en un borrador de incidencia, a menos de que este se convierta en una incidencia.

{% endnote %}
