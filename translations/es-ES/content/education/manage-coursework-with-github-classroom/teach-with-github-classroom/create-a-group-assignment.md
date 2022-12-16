---
title: Crear una tarea de grupo
intro: Puedes crear una tarea colaborativa para que los equipos de alumnos participen en tu curso.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179764'
---
## Acerca de las tareas de grupo

{% data reusables.classroom.assignments-group-definition %} Los alumnos pueden trabajar en conjunto en las tareas de grupo dentro de un repositorio compartido, como un equipo de desarrolladores profesionales.

Cuando un alumno acepta una tarea grupal, los alumnos pueden crear un equipo nuevo o unirse a uno existente. {% data variables.product.prodname_classroom %} guarda los equipos para una tarea como un conjunto. Puedes nombrar el conjunto de equipos para una tarea específica cuando creas dicha tarea y puedes reutilizar ese conjunto de equipos para una tarea más grande.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Puedes decidir cuántos equipos puede tener una tarea y cuántos miembros puede tener cada equipo. Cada equipo que crea un alumno para una tarea constituye un equipo dentro de tu organización en {% data variables.product.product_name %}. La visibilidad del equipo es secreta. Los equipos que crees en {% data variables.product.product_name %} no aparecerán en {% data variables.product.prodname_classroom %}. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

Para obtener una demostración en vídeo de la creación de una asignación de grupo, vea "[Conceptos básicos de la configuración de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

{% data reusables.classroom.reuse-assignment-link %}

## Requisitos previos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Crear una tarea

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configurar lo básico para una tarea

Nombra tu tarea, decide si quires asignarle una fecha límite, definir equipos o elegir la visibilidad de los repositorios de la misma.

- [Denominación de una asignación](#naming-an-assignment)
- [Asignación de una fecha límite para una asignación](#assigning-a-deadline-for-an-assignment)
- [Elección de un tipo de asignación](#choosing-an-assignment-type)
- [Definición de equipos para una asignación](#defining-teams-for-an-assignment)
- [Elección de un tipo de visibilidad para los repositorios de asignación](#choosing-a-visibility-for-assignment-repositories)

### Nombrar una tarea

En las tareas grupales, {% data variables.product.prodname_classroom %} nombra a los repositorios de acuerdo con el prefijo de los mismos y el nombre del equipo. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si asigna el nombre "assingment-1" a una asignación y el nombre del equipo en {% data variables.product.product_name %} es "student-team", el nombre del repositorio de la asignación para los miembros del equipo será `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Elegir un tipo de tarea

En "Individual or group assignment" (Asignación individual o de grupo), seleccione el menú desplegable y haga clic en **Group assignment** (Asignación de grupo). No puedes cambiar el tipo de tarea después de crearla. Si prefieres crear una asignación individual, consulta "[Crear una asignación individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)".

### Definir los equipos para una tarea

Si ya creaste una tarea grupal para el aula, puedes reutilizar un conjunto de equipos para la tarea nueva. Para crear un conjunto nuevo con los equipos que crean tus alumnos para la tarea, teclea el nombre de dicho conjunto. Opcionalmente, teclea la cantidad máxima de miembros de los equipos y el total de los equipos.

{% tip %}

**Sugerencias**:

- Te recomendamos incluir detalles sobre el conjunto de equipos en el nombre de dicho conjunto. Por ejemplo, si quieres utilizar un conjunto de equipos en un segmente, nómbralo como la tarea. Si quieres reutilizar el conjunto a lo largo de un semesre o curso, nombra el conjunto como el semestre o curso.

- Si te gustaría asignar alumnos a un equipo específico, proporciónales un nombre de equipo y una lista de mimebros.

{% endtip %}

![Parámetros para los equipos que participan en una tarea grupal](/assets/images/help/classroom/assignments-define-teams.png)

### Elegir un tipo de visibilidad para los repositorios de la tarea

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Agergar un código de inicio y configurar un ambiente de desarrollo

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Elección de un repositorio de plantilla](#choosing-a-template-repository)
- [Elección de un entorno de desarrollo integrado (IDE)](#choosing-an-integrated-development-environment-ide)

### Elegir un repositorio de plantilla

Predeterminadamente, una tarea nueva creará un repositorio en blanco para cada equipo que cree el alumno. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Elegir un ambiente de desarrollo integrado (IDE)

{% data reusables.classroom.about-online-ides %} Para más información, vea "[Integración de {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Comentarios

Opcionalmente, puedes calificar tareas automáticamente y crear un espacio para debatir cada entrega con el equipo.

- [Prueba automática de las tareas](#testing-assignments-automatically)
- [Creación de una solicitud de incorporación de cambios para comentarios](#creating-a-pull-request-for-feedback)

### Probar las tareas automáticamente

{% data reusables.classroom.assignments-guide-using-autograding %}

### Crear una solicitud de cambios para retroalimentación

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Invitar a los alumnos a una tarea

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Puede ver los equipos que han enviado una asignación o que están trabajando en ella en la pestaña **Teams** (Equipos) de dicha asignación. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Monitorear el progreso de los alumnos
La página de resumen de la tarea muestra la información de las aceptaciones de la misma y del progreso del equipo. Podrías tener información de resumen diferente con base en las configuraciones de tus tareas.

- **Total teams** (Total de equipos): el número de equipos que se han creado.
- **Alumnos en la lista**: cantidad de alumnos en la lista del aula.
- **Students not on a team** (Alumnos que no están en un equipo): el número de alumnos en la lista del aula que aún no se han unido a un equipo.
-  **Accepted teams** (Equipos que han aceptado): el número de equipos que han aceptado esta asignación.
-  **Assignment submissions** (Entregas de asignaciones): el número de equipos que han enviado la asignación. Las emisiones se activan en la fecha límite de la tarea.
-  **Passing teams** (Equipos que han aprobado): el número de equipos que actualmente han superado las pruebas de autoevaluación de esta asignación.

## Pasos siguientes

- Después de que creas una tarea y de que tus alumnos forme equipos, los miembros de dichos equipos pueden comenzar a trabajar en la tarea utilizando las características de Git y de {% data variables.product.product_name %}. Los alumnos pueden clonar el repositorio, subir confirmaciones, administrar ramas, crear y revisar solicitudes de cambio, tratar los confluctos de fusión y debatir los cambios con propuestas. Tanto tú como el equipo pueden revisar el historial de confirmaciones del repositorio. Para obtener más información, consulta "[Introducción a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)", "[Repositorios](/repositories)", "[Uso de Git](/github/getting-started-with-github/using-git)" y "[Colaboración con incidencias y solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests)", así como el curso gratuito sobre la [resolución de conflictos de combinación](https://github.com/skills/resolve-merge-conflicts) de {% data variables.product.prodname_learning %}.

- Cuando un equipo termina una tarea, puedes revisar los archivos en el repositorio, o puedes revisar el historial y visualizaciones del mismo para entender mejor cómo colaboró el equipo. Para más información, vea "[Visualización de datos del repositorio con gráficos](/github/visualizing-repository-data-with-graphs)".

- Puedes proporcionar retroalimentación para una tarea si comentas en confirmaciones o líneas individuales dentro de una solicitud de cambios. Para más información, vea "[Comentarios sobre una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" y "[Apertura de una incidencia desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para más información sobre cómo crear respuestas guardadas para proporcionar comentarios sobre errores comunes, vea "[Acerca de las respuestas guardadas](/github/writing-on-github/about-saved-replies)".

## Información adicional

- [{% data variables.product.prodname_global_campus %} para profesores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- "[Conexión de un curso de un sistema de administración del aprendizaje a una clase](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- [Uso de equipos existentes en asignaciones de grupo](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) en la comunidad de {% data variables.product.prodname_education %}
