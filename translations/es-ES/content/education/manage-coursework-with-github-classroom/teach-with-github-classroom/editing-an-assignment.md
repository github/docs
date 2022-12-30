---
title: Edición de una asignación
intro: Puedes editar las asignaciones actuales en el curso.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179865'
---
## Acerca de la edición de asignaciones

Después de crear una asignación, puedes editar muchos de sus aspectos para adaptarla mejor a tus necesidades y las de tus alumnos. No obstante, no puedes cambiar el tipo de asignación (ya sea individual o un grupo) ni el entorno de desarrollo integrado (IDE) en línea después de crear la asignación. Para obtener más información, consulta "[Creación de una tarea individual](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" o "[Creación de una tarea de grupo](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)".

## Edición de una asignación que ya existe

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
1. Navegar a un aula.

    ![Captura de pantalla del icono de una clase en GitHub Education con el nombre de la clase resaltado](/assets/images/help/classroom/classroom-card.png)

1. En la pestaña {% octicon "repo" aria-label="The repo icon" %} **Asignaciones**, junto a la asignación que quieras editar, haz clic en {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}
    
    **Nota:** También puedes editar una asignación desde la página de la asignación. Para acceder a la página de la asignación, en la pestaña **Asignaciones**, haz clic en el nombre de la asignación.
    
    {% endnote %}

    ![Captura de pantalla de una asignación con el icono de edición resaltado](/assets/images/help/classroom/edit-assignment.png)

1. En "Título de la asignación", haz clic en el campo de texto, elimina el texto que contiene y escribe el nuevo título para la asignación.

    ![Captura de pantalla del editor de asignaciones con el campo de texto "Título de la asignación" resaltado](/assets/images/help/classroom/edit-assignment-title.png)

1. También puedes editar el prefijo predeterminado del repositorio de asignaciones de cada alumno. Para ello, haz clic en {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Nota:** Al editar el título de una asignación o el prefijo predeterminado de un repositorio, no cambia el nombre de los repositorios de asignación que ya existían.

    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con el icono de edición del prefijo de los repositorios de alumnos resaltado](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    A continuación, escribe el nuevo prefijo en "Prefijo de repositorio personalizado".

    ![Captura de pantalla del editor de asignaciones con el campo de texto "Prefijo de repositorio personalizado" resaltado](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. Debajo de "Fecha límite (opcional)", haz clic en el campo de texto y utiliza el selector de fecha para reasignar una fecha límite. La nueva fecha límite no puede estar en el pasado. La reasignación de una fecha límite actualiza la fecha límite para todos los alumnos.

    ![Captura de pantalla del editor de asignaciones con el campo "Fecha límite (opcional)" resaltado](/assets/images/help/classroom/edit-assignment-deadline.png)

1. Para cambiar el estado de una asignación, selecciona el menú desplegable **Estado de asignación** y haz clic en **Activo** o **Inactivo**.

    {% note %}
  
    **Nota:** Los alumnos no pueden aceptar las asignaciones inactivas. Debes cambiar el estado de una asignación a inactivo cuando no deban aceptarla más alumnos o cuando haya pasado la fecha límite de la asignación.
  
    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con el menú desplegable "Estado de asignación" resaltado](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  Debajo de "Visibilidad del repositorio", selecciona una visibilidad. Si utilizas repositorios privados, solo el alumno o equipo puede ver la retroalimentación que proporciones.

    {% note %}
    
    **Nota:** Al cambiar la visibilidad de los repositorios de asignación, no cambia retroactivamente la visibilidad de los repositorios de asignación que ya existían.
    
    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con los botones de radio de "Visibilidad del repositorio" resaltados](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  Opcionalmente, selecciona o anula la selección de **Conceder a los alumnos acceso de administrador a su repositorio**. Para obtener más información sobre los permisos de administrador para los repositorios, consulta "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

    {% note %}

    **Nota:** Al conceder o revocar el acceso de administrador de los alumnos después de crear una asignación, no cambian retroactivamente los permisos para los repositorios de asignaciones que ya existían.

    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con la casilla "Conceder a los alumnos acceso de administrador a su repositorio" resaltada](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. Para configurar o cambiar el repositorio de plantillas de la asignación, en la sección "Agregar repositorio de plantillas para proporcionar código de inicio a los alumnos", selecciona el menú desplegable **Seleccionar un repositorio**.
       - Para elegir un repositorio de plantillas, empieza a escribir el nombre del repositorio en el campo de texto y haz clic en el repositorio en los resultados de la búsqueda.
       - Para quitar un repositorio de plantillas, elimina cualquier texto del campo de texto.

    {% note %}

    **Nota:** De forma predeterminada, una asignación crea un repositorio vacío para cada alumno de la lista de clase.

    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con la lista desplegable "Seleccionar un repositorio" resaltada](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. Para agregar una nueva prueba de calificación automática, en la sección "Agregar pruebas de calificación automática", selecciona el menú desplegable **Agregar prueba** y haz clic en un método de calificación en las opciones que aparecen. Para obtener más información, consulte "[Uso de calificaciones automáticas](/education/manage-coursework-with-github-classroom/use-autograding)".
    
    ![Captura de pantalla del editor de asignaciones con la lista desplegable "Agregar prueba" resaltada](/assets/images/help/classroom/edit-assignment-add-test.png)

    Además, puedes editar o eliminar pruebas de calificación automática con {% octicon "pencil" aria-label="The pencil icon" %} o {% octicon "trash" aria-label="The trash icon" %}.

    ![Captura de pantalla del editor de asignaciones con los iconos de edición y eliminación de pruebas resaltados](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  Para activar o desactivar las solicitudes de incorporación de cambios (“pull request”) de comentarios, selecciona o anula la selección de la opción **Habilitar “pull request” de comentarios**.

    {% note %}
    
    **Nota:** Al habilitar o deshabilitar las solicitudes de incorporación de cambios (“pull request”) de comentarios para una asignación, no se crean ni eliminan solicitudes de incorporación de cambios de comentarios para los repositorios de asignaciones que ya existían.
    
    {% endnote %}

    ![Captura de pantalla del editor de asignaciones con la casilla "Habilitar “pull request” de comentarios" resaltada](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## Información adicional

- "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)"
- "[Crear una asignación de grupo](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)"
