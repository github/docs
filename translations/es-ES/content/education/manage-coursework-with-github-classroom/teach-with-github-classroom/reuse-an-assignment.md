---
title: Reutilizar una asignación
intro: 'Puedes reutilizar asignaciones existentes en más de un aula, incluidas las aulas de otra organización.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066918'
---
## Acerca de la reutilización de las asignaciones

Puedes reutilizar una asignación individual o de grupo existente en cualquier otra aula a la que tengas acceso, incluidas las aulas de otra organización. También puedes reutilizar varias asignaciones a la vez desde un aula. Si decides reutilizar una asignación, {% data variables.product.prodname_classroom %} copiará dicha asignación en el aula que elijas. Si la asignación usa un repositorio de plantillas y decides reutilizarlo en un aula de otra organización, {% data variables.product.prodname_classroom %} creará una copia del repositorio y de su contenido en la organización de destino.

La asignación copiada incluye los detalles correspondientes a esta, como el nombre, el repositorio de origen, la prueba de clasificación automática y el editor preferido. Puedes editar la asignación una vez que se haya copiado para realizar cambios. No se pueden realizar cambios en el editor preferido. 

## Reutilización de una asignación

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
1. Ve al aula que tiene la asignación que quieres reutilizar.

   ![Aula en la lista de aulas de una organización](/assets/images/help/classroom/click-classroom-in-list.png)

1. En la lista de asignaciones, haz clic en aquella que quieres reutilizar.

   ![Lista de tareas para las tareas de un aula](/assets/images/help/classroom/click-assignment-in-list.png)

1. Selecciona el menú desplegable **{% octicon "pencil" aria-label="The pencil icon" %} Editar** en la parte superior derecha de la página y, después, haz clic en **{% octicon "sync" aria-label="The sync icon" %} Reutilizar asignación**.

   ![Botón Reutilizar asignación](/assets/images/help/classroom/reuse-assignment-button.png)

1. En la ventana modal "Reutilizar asignación", usa el menú desplegable **Elegir una organización** para seleccionar la organización en la que quieres que esté la asignación.  A continuación, usa el menú desplegable **Elegir un aula** para seleccionar el aula de esa organización en la que quieres copiar la asignación.

   ![Ventana modal Reutilizar asignación](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Haz clic en **Crear asignación**.
1. La asignación se copia en el aula seleccionada y se muestra un mensaje de confirmación. Si decides reutilizar una asignación con un repositorio de plantillas, el proceso de copia puede tardar unos minutos en completarse y es posible que tengas que actualizar la página para ver el mensaje de completado.

   ![Mensaje de completado para la asignación reutilizada](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Reutilización de varias asignaciones desde un aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. A la derecha del nombre de un aula, selecciona el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y, luego, haz clic en **Reutilizar asignación**.
   
   ![Captura de pantalla de la página de información general del aula en la que el menú desplegable aparece resaltado](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. En la ventana modal "Reutilizar asignaciones", usa el menú desplegable **Elegir una organización** para seleccionar la organización en la que quieres que esté la asignación.  Luego, usa el menú desplegable **Elegir un aula** para seleccionar el aula de esa organización en la que quieres copiar las asignaciones.
   
   ![Captura de pantalla de la ventana modal de reutilización de asignaciones](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. A la izquierda de cada asignación, selecciona la que quieres reutilizar.

   ![Captura de pantalla de varias asignaciones seleccionadas](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Haz clic en **Crear asignaciones**.
6. Las asignaciones se copian en el aula seleccionada. Si decidiste reutilizar una asignación con un repositorio de plantillas, el proceso de copia puede tardar unos minutos en completarse.
