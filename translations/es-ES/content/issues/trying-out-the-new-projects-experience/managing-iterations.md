---
title: Administración de iteraciones en los proyectos (beta)
intro: Puedes crear iteraciones para planear los próximos elementos de grupo y trabajo.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067574"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>Acerca de las iteraciones

Puedes crear un campo de iteración para asociar elementos con bloques de tiempo de repetición específicos. Las iteraciones se pueden establecer en cualquier período de tiempo, pueden incluir saltos y se pueden editar individualmente para modificar el nombre y el intervalo de fechas. Con los proyectos, puedes agrupar por iteración para visualizar el equilibrio de los trabajos futuros, usar filtros para centrarte en una sola iteración y ordenar por iteración.

Al crear por primera vez un campo de iteración, se crean automáticamente tres iteraciones.  Puedes agregar iteraciones adicionales y realizar otros cambios en la página de configuración del proyecto.

![Captura de pantalla en la que se muestra la configuración de un campo de iteración](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>Creación de un campo de iteración

Puedes crear un campo de iteración mediante la paleta de comandos o la interfaz del proyecto.

1. {% data reusables.projects.open-command-palette %} Comienza a teclear cualquier parte de "Create new field". Cuando se muestre "Create new field" en la paleta de comandos, selecciónalo.

   Como alternativa, haz clic en {% octicon "plus" aria-label="the plus icon" %} en el encabezado de campo que está lo más hacia la derecha. Aparecerá un menú desplegable con los campos de proyecto. Haz clic en **Nuevo campo**.
1. En el cuadro de texto, escribe un nombre para el campo de iteración nuevo.
1. Selecciona el menú desplegable que aparece a continuación y haz clic en **Iteración**.
1. Opcionalmente, si quieres cambiar la fecha de inicio del día actual, selecciona la lista desplegable del calendario junto a "Se inicia el" y haz clic en una nueva fecha de inicio.
2. Para cambiar la duración de cada iteración, escribe un nuevo número y, a continuación, selecciona la lista desplegable y haz clic en **días** o **semanas**.
3. Haz clic en **Guardar y crear**.
  
## <a name="adding-new-iterations"></a>Adición de nuevas iteraciones

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
1. Para agregar una nueva iteración de la misma duración, haz clic en **Agregar iteración**.
1. Opcionalmente, para personalizar la duración de la nueva iteración y cuándo se iniciará, haz clic en {% octicon "triangle-down" aria-label="The triangle icon" %} junto a "Agregar iteración", selecciona una fecha de inicio y una duración y haz clic en **Agregar**.
1. Haga clic en **Guardar cambios**.

## <a name="editing-an-iteration"></a>Edición de una iteración

Puedes editar las iteraciones en la configuración del proyecto. También puedes acceder a la configuración de un campo de iteración haciendo clic en {% octicon "triangle-down" aria-label="The triangle icon" %} en el encabezado de tabla del campo y haciendo clic en **Editar valores**.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
1. Para cambiar el nombre de una iteración, haz clic en el nombre y empieza a escribir.
1. Para cambiar la fecha o la duración de una iteración, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio, haz clic en el día de finalización y, a continuación, haz clic en **Aplicar**.
1. Opcionalmente, para eliminar una iteración, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
1. Haga clic en **Guardar cambios**.

## <a name="inserting-a-break"></a>Inserción de una interrupción

Puedes insertar interrupciones en las iteraciones para comunicar cuando te tomas un descanso del trabajo programado. La duración de la nueva interrupción tiene como valor predeterminado la longitud de la iteración creada más recientemente.

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de iteración que quieras ajustar.
2. En la línea divisoria situada encima de una iteración y a la derecha, haz clic en **Insertar interrupción**.
   ![Captura de pantalla en la que se muestra la ubicación del botón "Insertar interrupción"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para cambiar la duración de la interrupción, haz clic en la fecha para abrir el calendario. Haz clic en el día de inicio, haz clic en el día de finalización y, a continuación, haz clic en **Aplicar**.
4. Haga clic en **Guardar cambios**.
