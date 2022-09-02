---
title: Rechazar una tarea
intro: 'Puedes volver a utilizar las tareas existentes en más de un aula, incluyendo a las aulas en una organización diferente.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Rechazar una tarea
---

## Acerca de reutilizar tareas

Puedes reutilizar una tarea grupal o individual existente en cualquier otra aula a la cual tengas acceso, incluyendo aquellas en una organización distinta. También puedes reutilizar tareas múltiples a la vez desde un aula. Si eliges reutilizar una tarea, {% data variables.product.prodname_classroom %} la copiará al aula que elijas. Si la tarea utiliza un repositorio en borrador y eliges reutilizarlo en un aula desde una organización diferente, {% data variables.product.prodname_classroom %} creará una copia del repositorio y de su contenido en la organización destino.

La tarea copiada incluye detalles de esta, tales como el nombre, el repositorio origen, pruebas de autoevaluación y el editor preferido. Puedes editar esta tarea después de que se copió para realizar cambios. No puedes hacer cambios al editor preferido.

## Reutilizar una tarea

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
1. Navega al aula que tiene la tarea que quieras reutilizar.

   ![Aula en la lista de aulas de una organización](/assets/images/help/classroom/click-classroom-in-list.png)

1. En la lista de tareas, haz clic en aquella que quieras reutilizar.

   ![Lista de tareas para las tareas de un aula](/assets/images/help/classroom/click-assignment-in-list.png)

1. Selecciona el menú desplegable de **{% octicon "pencil" aria-label="The pencil icon" %} Editar** en la parte superior derecha de la página y luego haz clic en **{% octicon "sync" aria-label="The sync icon" %} Reutilizar tarea**.

   ![Botón de reutilizar tarea](/assets/images/help/classroom/reuse-assignment-button.png)

1. En el modl de "Reutilizar tarea", utiliza el menú desplegable **Elegir una organización** para seleccionar aquella en la cual quieras que esté la tarea.  Luego, utiliza el menú desplegable **Elegir un aula** para seleccionar el aula dentro de la organización en la que quieres copiar la tarea.

   ![Modal de reutilizar tarea](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Haz clic en **Crear tarea**.
1. La tarea se copiará al aula seleccionada y se mostrará un mensaje de confirmación. Si eliges reutilizar una tarea con una plantilla de repositorio, el proceso de copiado podría llevar unos minutos para completarse y podrías necesitar actualizar la página para ver el mensaje de completado.

   ![Mensaje completado para la tarea reutilizada](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Reutilizar tareas múltiples de un aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. A la derecha del nombre del aula, selecciona el menú desplegable de {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y haz clic en **Reutilizar tarea**.

   ![Captura de pantalla de la página de resumen del aula con énfasis en el menú desplegable](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. En el modal de "Reutilizar tareas", utiliza el menú desplegable **Elige una organización** para seleccionar aquella en la que quieres que estén las tareas.  Luego, utiliza el menú desplegable **Elegir un aula** para seleccionar el aula dentro de la organización en la que quieres copiar la tarea.

   ![Captura de pantalla del modal de reutilización de tareas](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. A la izquierda de cada tarea, selecciona aquella que quieras reutilizar.

   ![Captura de pantalla de múltiples tareas seleccionadas](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Haz clic en **Crear tareas**.
6. Las tareas se copiarán al aula seleccionada. Si eliges reutilizar una tarea con un repositorio de plantilla, el proceso de copiado podrá tomar unos cuantos minutos en completarse.
