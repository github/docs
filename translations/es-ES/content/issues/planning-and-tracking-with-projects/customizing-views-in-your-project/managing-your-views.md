---
title: Administración de las vistas
intro: 'Aprende a crear, guardar y administrar las vistas del proyecto.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110034'
---
## Crear una vista de proyecto

Las vistas de proyecto te permiten ver los aspectos específicos de tu proyecto rápidamente. Cada vista se muestra en una pestaña por separado en tu proyecto. 

Por ejemplo, puedes tener:
- Una vista que muestre todos los elementos que aún no han iniciado (filtrar en "Estado").
- Una vista que muestre la carga de trabajo para cada equipo (agrupar por un campo personalizado de "Equipo").
- Una vista que muestre los elementos con la fecha de envío destino más reciente (ordenar por campo de fecha).

Para agregar una vista nueva:

{% data reusables.projects.new-view %}

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Nueva vista".

La vista nueva se guarda automáticamente.

## Duplicación de una vista

Puedes duplicar una vista existente y usarla como base para realizar más cambios.

1. Cambia a la vista que quieras duplicar.
{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "versions" aria-label="the versions icon" %} **Duplicar vista**.
   ![Captura de pantalla en la que se muestra el elemento de menú Duplicar](/assets/images/help/projects-v2/duplicate-view.png)

## Guardar los cambios en una vista

Cuando haces cambios en una vista, por ejemplo: clasificar, reordenar, filtrar o agrupar los datos en una vista, se muestra un punto junto al nombre de la vista para indicar que hay cambios sin guardar. 

![Indicador de cambios sin guardar](/assets/images/help/projects/unsaved-changes.png)

Si no quieres guardar los cambios, puedes ignorar este indicador. Nadie verá tus cambios.

{% data reusables.projects.save-view %}

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Guardar vista".

## Reordenar las vistas guardadas

Para cambiar el orden de las pestañas que contienen tus vistas guardadas, haz clic y arrastra una pestaña a una ubicación nueva. El orden de pestañas nuevo se guardará automáticamente.

## Renombrar una vista guardada

Puedes cambiar el nombre de las vistas guardadas. El cambio de nombre se guarda automáticamente.

1. Cambia a la vista que quieras cambiar de nombre.
{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "pencil" aria-label="the pencil icon" %} **Cambiar nombre de vista**.
   ![Captura de pantalla en la que se muestra el elemento de menú Cambiar de nombre](/assets/images/help/projects-v2/rename-view.png)
1. Escribe el nuevo nombre de la vista.
1. Para guardar los cambios, presiona <kbd>Intro</kbd>.

## Borrar una vista guardada

1. Cambia a la vista que quieras eliminar.
{% data reusables.projects.open-view-menu %}
1. Haz clic en {% octicon "trash" aria-label="the trasj icon" %} **Eliminar vista**.
   ![Captura de pantalla en la que se muestra el elemento de menú Eliminar](/assets/images/help/projects-v2/delete-view.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Eliminar vista".
