---
title: Administrar aulas
intro: 'Puedes crear y administrar un aula para cada curso que impartes utilizando {% data variables.product.prodname_classroom %}.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 0c492f26092e7e9ad47c6237a55de1cf1c90e65f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112154'
---
## Acerca de las aulas

{% data reusables.classroom.about-classrooms %}

![Clase](/assets/images/help/classroom/classroom-hero.png)

## Acerca de la administración de aulas

{% data variables.product.prodname_classroom %} utiliza cuentas de organización en {% data variables.product.product_name %} para administrar los permisos, la administración y la seguridad de cada aula que crees. Cada organización puede tener varias aulas.

Después de crear un aula, {% data variables.product.prodname_classroom %} te pedirá que invites a los asistentes del maestro (TA) y a los administradores a formar parte de ella. Cada aula puede tener uno o más administradores. Los administradores pueden ser maestros, TA o cualquier otro administrador de curso que quieras tenga control sobre las aulas de {% data variables.product.prodname_classroom %}.

Invita a los TA y administradores a tu aula mediante una invitación a sus cuentas personales en {% data variables.product.product_name %} para que formen parte de tu organización como propietarios de la misma y comparte la dirección URL de tu aula. Los propietarios de la organización pueden administrar cualquier aula en ésta. Para obtener más información, consulte "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" e "[Invitar a usuarios para unirse a su organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

Cuando termines de utilizar un aula, puedes archivarla y referirte a ella, a su registro de alumnos o a sus tareas posteriormente, o puedes borrarla si ya no la necesitas. 

{% data reusables.classroom.reuse-assignment-link %}

## Acerca de los registros de alumnos de las aulas

Cada aula tiene un registro de alumnos. Un registro de alumnos es una lista de identificadores para los alumnos que participan en tu curso.

Cuando compartes la dirección URL de una tarea con un alumno por primera vez, dicho alumno debe iniciar sesión en {% data variables.product.product_name %} con una cuenta personal para vincularla con un identificador para el aula. Después de que el alumno vincule una cuenta personal, puedes ver la cuenta personal asociada en el registro de alumnos. También puedes ver cuando el alumno acepta o emite una tarea.

![Registro de alumnos de un aula](/assets/images/help/classroom/roster-hero.png)

## Prerrequisitos

Debes tener una cuenta de organización en {% data variables.product.product_name %} para administrar las aulas en {% data variables.product.prodname_classroom %}. Para obtener más información, consulte "[Tipos de cuentas de {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" y "[Creación de una nueva organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Debes autorizar a la app de OAuth de {% data variables.product.prodname_classroom %} para que tu organización administre aulas para tu cuenta organizacional. Para obtener más información, consulte "[Autorización de aplicaciones de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

## Crear un aula

{% data reusables.classroom.sign-into-github-classroom %}
1. Haga clic en **New classroom**.
  ![Botón "New classroom"](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

Después de que crees un aula, puedes comenzar a crear tareas para los alumnos. Para obtener más información, consulta "[Usar la asignación de inicio de Git y {% data variables.product.company_short %}](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)", "[Crear una asignación individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)", "[Crear una asignación de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)" o "[Reutilizar una asignación](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)".

## Crear un registro de alumnos para tu aula

Puedes crear un registro de alumnos de aquellos que participen en tu curso.

Si tu curso ya tiene un registro de alumnos, puedes actualizar a los alumnos en el registro o borrarlos de éste. Para obtener más información, consulte "[Agregar un alumno a la lista de su clase](#adding-students-to-the-roster-for-your-classroom)" o "[Eliminar una lista de un aula](#deleting-a-roster-for-a-classroom)".

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Para conectar {% data variables.product.prodname_classroom %} a su LMS e importar una lista de alumnos, haga clic en {% octicon "mortar-board" aria-label="The mortar board icon" %} **Import from a learning management system** y siga las instrucciones. Para obtener más información, consulte "[Conexión de un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    ![Botón "Import from a learning management system"](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Proporciona los identificadores de estudiante para tu registro de alumnos.
     - Para importar una lista mediante un archivo que contiene identificadores de alumnos, haga clic en **Upload a CSV or text file**.
     - Para crear un registro de alumnos manualmente, teclea tus identificadores de alumno.
       ![Campo de texto para escribir identificadores de alumnos y botón "Upload a CSV or text file"](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Haga clic en **Create roster**.
  ![Botón "Create roster"](/assets/images/help/classroom/click-create-roster-button.png)

## Agregar a los alumnos al registro de alumnos de tu aula

Tu aula debe tener un registro de alumnos existente para agregar alumnos a éste. Para obtener más información sobre cómo crear una lista, consulte "[Crear una lista de su clase](#creating-a-roster-for-your-classroom)".

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. A la derecha de "Classroom roster", haga clic en **Update students**.
  ![Botón "Update students" a la derecha del encabezado "Classroom roster" encima de la lista de alumnos](/assets/images/help/classroom/click-update-students-button.png)
1. Sigue las instrucciones para agregar a los alumnos al registro de alumnos.
    - Para importar alumnos desde un LMS, haga clic en **Sync from a learning management system**. Para obtener más información sobre cómo importar una lista desde un LMS, consulte "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    - Para agregar manualmente alumnos, en "Manually add students", haga clic en **Upload a CSV or text file** o escriba los identificadores de los alumnos y, a continuación, haga clic en **Add roster entries**.
      ![Modal para elegir un método para agregar alumnos a una clase](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## Renombrar un aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Debajo de "nombre del aula", teclea un nombre nuevo para ésta.
  ![Campo de texto en "Classroom name" para escribir el nombre de la clase](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Haga clic en **Rename classroom**.
  ![Botón "Rename classroom"](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## Archivar o dejar de archivar un aula

Puedes archuivar un aula que ya no utilices en {% data variables.product.prodname_classroom %}. Cuando archivas un aula, no puedes crear tareas nuevas ni editar aquellas existentes en ella. Los alumnos no pueden aceptar invitaciones a las tareas de las aulas archivadas.

{% data reusables.classroom.sign-into-github-classroom %}
1. A la derecha del nombre de la clase, seleccione el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y haga clic en **Archive**.
  ![Menú desplegable del icono de kebab horizontal y elemento de menú "Archive"](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Para anular el archivado de la clase, a la derecha del nombre de la clase, seleccione el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y haga clic en **Unarchive**.
  ![Menú desplegable del icono de kebab horizontal y elemento de menú "Unarchive"](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Borrar el registro de alumnos de un aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. En "Delete this roster", haga clic en **Delete roster**.
  ![Botón "Delete roster" en "Delete this roster" en la pestaña "Alumnos" de una clase](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Lea las advertencias y haga clic en **Delete roster**.
  ![Botón "Delete roster" en "Delete this roster" en la pestaña "Alumnos" de una clase](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## Borrar un aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. A la derecha de "Delete this classroom", haga clic en **Delete classroom**.
  ![Botón "Delete repository"](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Lea las advertencias**.
1. Para verificar que estás borrando el aula correcta, teclea el nombre del aula que quieres borrar.
  ![Modal para borrar una clase con advertencias y campo de texto para el nombre de la clase](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Haga clic en **Delete classroom**.
  ![Botón "Delete classroom"](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
