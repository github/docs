---
title: Administrar aulas
intro: Puedes crear y administrar un aula para cada curso que impartes utilizando {% data variables.product.prodname_classroom %}.
permissions: Los propietarios de las organizaciones pueden administrar las aulas de éstas.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
---

### Acerca de las aulas

{% data reusables.classroom.about-classrooms %}

![Aula](/assets/images/help/classroom/classroom-hero.png)

### Acerca de la administración de aulas

{% data variables.product.prodname_classroom %} utiliza cuentas de organización en {% data variables.product.product_name %} para administrar los permisos, la administración y la seguridad de cada aula que crees. Cada organización puede tener varias aulas.

Después de crear un aula, {% data variables.product.prodname_classroom %} te pedirá que invites a los asistentes del maestro (TA) y a los administradores a formar parte de ella. Cada aula puede tener uno o más administradores. Los administradores pueden ser maestros, TA o cualquier otro administrador de curso que quieras tenga control sobre las aulas de {% data variables.product.prodname_classroom %}.

Invita a los TA y administradores a tu aula invitando a sus cuentas de usuario en {% data variables.product.product_name %} para que formen parte de tu organización como propietarios de la misma y compartiendo la URL de tu aula. Los propietarios de la organización pueden administrar cualquier aula en ésta. Para obtener más información, consulta la sección "[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)" y "[Invitar a los usuarios a unirse a tu organización](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)".

Cuando termines de utilizar un aula, puedes archivarla y referirte a ella, a su registro de alumnos o a sus tareas posteriormente, o puedes borrarla si ya no la necesitas.

### Acerca de los registros de alumnos de las aulas

Cada aula tiene un registro de alumnos. Un registro de alumnos es una lista de identificadores para los alumnos que participan en tu curso.

Cuando compartes la URL de una tarea con un alumno por primera vez, dicho alumno debe ingresar en {% data variables.product.product_name %} con una cuenta de usuario para vincularla con un identificador para el aula. Después de que el alumno vinculasu cuenta de usuario, puedes ver la cuenta de usuario asociada en el registro dealumnos. También puedes ver cuando el alumno acepta o emite una tarea.

![Registro de alumnos de un aula](/assets/images/help/classroom/roster-hero.png)

### Prerrequisitos

Debes tener una cuenta de organización en {% data variables.product.product_name %} para administrar las aulas en {% data variables.product.prodname_classroom %}. Para obtener más información, consulta las secciones "[Tipos de cuentas de {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" y "[Crear una organización nueva desde cero](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)".

Debes autorizar a la app de OAuth de {% data variables.product.prodname_classroom %} para que tu organización administre aulas para tu cuenta organizacional. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

### Crear un aula

{% data reusables.classroom.sign-into-github-classroom %}
1. Da clic en **Aula nueva**. ![Botón de "Aula nueva"](/assets/images/help/classroom/click-new-classroom-button.png)
{% data reusables.classroom.guide-create-new-classroom %}

Después de que crees un aula, puedes comenzar a crear tareas para los alumnos. Para obtener más información, consulta la sección "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" o "[Crear una tarea grupal](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Crear un registro de alumnos para tu aula

Puedes crear un registro de alumnos de aquellos que participen en tu curso.

Si tu curso ya tiene un registro de alumnos, puedes actualizar a los alumnos en el registro o borrarlos de éste. Para obtener más información, consulta la sección "[Agregar a un alumno al registro de alumnos de tu aula](#adding-students-to-the-roster-for-your-classroom)" o "[Borrar un registro de alumnos de un aula](#deleting-a-roster-for-a-classroom)".

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Para conectar a {% data variables.product.prodname_classroom %} a tu LMS e importar un registro de alumnos, da clic en {% octicon "mortar-board" aria-label="The mortar board icon" %} **importar desde un sistema de administración de aprendizaje** y sigue las instrucciones. Para obtener más información, consulta la sección "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)". ![Botón de "Importar desde un sistema de administración de aprendizaje"](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Para crear un registro de alumnos manualmente, teclea tus identificadores de alumno. Opcionalmente, da clic en **Cargar un CSV o archivo de texto**para cargar un archivo que contenga los identificadores. ![Campo de texto para teclear los identificadores de alumno y botón de "Cargar un CSV o archivo de texto"](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Da clic en **Crear registro de alumnos**. ![Botón de "Crear registro de alumnos"](/assets/images/help/classroom/click-create-roster-button.png)

### Agregar a los alumnos al registro de alumnos de tu aula

Tu aula debe tener un registro de alumnos existente para agregar alumnos a éste. Para obtener más información sobre crear un registro de alumnos, consulta la sección "[Crear un registro de alumnos para tu aula](#creating-a-roster-for-your-classroom)".

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. A la derecha de "Registro de alumnos del aula", da clic en **Actualizar alumnos**. ![Botón de "Actualizar alumnos" a la derecha del encabezado "Registro de alumnos" sobre la lista de alumnos](/assets/images/help/classroom/click-update-students-button.png)
1. Sigue las instrucciones para agregar a los alumnos al registro de alumnos.
    - Para importar a los alumnos desde un LMS, da clic en **Sincronizar desde un sistema de administración de aprendizaje**. Para obtener más información sobre cómo importar un registro dealumnos desde un LMS, consulta la sección "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    - Para agregar manualmente a los alumnos, debajo de "Agregar manualmente a los alumnos", da clic en **Cargar un CSV o archivo de texto** o teclea los identificadores de los alumnos y luego da clic en **Agregar entradas al registro de alumnos**. ![Modo para elegir un método para agregar alumnos al aula](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

### Renombrar un aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Debajo de "nombre del aula", teclea un nombre nuevo para ésta. ![Campo de texto debajo de "Nombre de aula" para teclear el nombre de un aula](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Da clic en **Renombrar aula**. ![Botón "Renombrar aula"](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

### Archivar o dejar de archivar un aula

Puedes archuivar un aula que ya no utilices en {% data variables.product.prodname_classroom %}. Cuando archivas un aula, no puedes crear tareas nuevas ni editar aquellas existentes en ella. Los alumnos no pueden aceptar invitaciones a las tareas de las aulas archivadas.

{% data reusables.classroom.sign-into-github-classroom %}
1. A la derecha del nombre del aula, selecciona el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y da clic en **Archivar**. ![Menú desplegable del icono de kebab horizontal y elemento "Archive" del menú](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Para dejar de archivar un aula, a la derecha de su nombre, selecciona el menú desplegable {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y da clic en **Dejar de archivar**. ![Menú desplegable desde el icono de kebab horizontal y elemento "Dejar de archivar" del menú](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

### Borrar el registro de alumnos de un aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Debajo de "Borrar este registro de alumnos", da clic en **Borrar registro de alumnos**. ![Botón "Borrar registro de alumnos" debajo de "Borrar este registro de alumnos" en la pestaña "Alumnos" de un aula](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Lee las advertencias y luego da clic en **Borrar registro de alumnos**. ![Botón "Borrar registro de alumnos" debajo de "Borrar este registro de alumnos" en la pestaña "Alumnos" de un aula](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

### Borrar un aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. A la derecha de "Borrar esta aula", da clic en **Borrar aula**. ![Botón de "Borrar un repositorio"](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Lee las advertencias**.
1. Para verificar que estás borrando el aula correcta, teclea el nombre del aula que quieres borrar. ![Modo para borrar un aula con advertencias y campo de texto para el nombre del aula](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Da clic en **Borrar aula**. ![Botón de "Borrar aula"](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
