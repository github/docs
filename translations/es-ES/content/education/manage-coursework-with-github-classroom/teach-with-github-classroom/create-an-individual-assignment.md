---
title: Crear una tarea individual
intro: Puedes crear una tarea individual para que los alumnos de tu curso la completen individualmente.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: 4f5fab2f63ff686762a4fb6ccd5964b7f4d9cb3c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573872'
---
## Acerca de las tareas individuales

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Para obtener una demostración en vídeo de la creación de una asignación individual, vea "[Conceptos básicos de la configuración de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

{% data reusables.classroom.reuse-assignment-link %}

## Requisitos previos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Crear una tarea

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configurar lo básico para una tarea

Nombra tu tarea, decide si quieres asignar una fecha límite y elige la visibilidad de los repositorios de la misma.

- [Denominación de una asignación](#naming-an-assignment)
- [Asignación de una fecha límite para una asignación](#assigning-a-deadline-for-an-assignment)
- [Elección de un tipo de asignación](#choosing-an-assignment-type)
- [Elección de un tipo de visibilidad para los repositorios de asignación](#choosing-a-visibility-for-assignment-repositories)

### Nombrar una tarea

Para una tarea individual, {% data variables.product.prodname_classroom %} nombra los repositorios de acuerdo con su prefijo y con el nombre de usuario de {% data variables.product.product_name %} del alumno. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si asigna el nombre "assingment-1" a una asignación y el nombre de usuario del alumno en {% data variables.product.product_name %} es @octocat, el nombre del repositorio de la asignación para @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Elegir un tipo de tarea

En "Individual or group assignment", seleccione el menú desplegable y haga clic en **Individual assignment**. No puedes cambiar el tipo de tarea después de crearla. Si prefiere crear una asignación de grupo, vea "[Creación de una asignación de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Elegir un tipo de visibilidad para los repositorios de la tarea

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Agergar un código de inicio y configurar un ambiente de desarrollo

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Elección de un repositorio de plantilla](#choosing-a-template-repository)
- [Elección de un entorno de desarrollo integrado (IDE)](#choosing-an-integrated-development-environment-ide)

### Elegir un repositorio de plantilla

Predeterminadamente, una tarea nueva creará un repositorio en blanco para cada alumno del registro de alumnos del aula. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Elegir un ambiente de desarrollo integrado (IDE)

{% data reusables.classroom.about-online-ides %} Para más información, vea "[Integración de {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Proporcionar retroalimentación para una tarea

Opcionalmente, puedes calificar tareas automáticamente y crear un espacio para debatir cada entrega con el alumno.

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

Puede ver si un alumno se ha unido a la clase y ha aceptado o enviado una asignación en la pestaña **Classroom roster** para la asignación. También puede vincular los alias de {% data variables.product.prodname_dotcom %} de los alumnos a sus listas de identificadores asociadas y viceversa en esta pestaña. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## Monitorear el progreso de los alumnos
La página de vista general de la tarea te proporciona una vista general de las aceptaciones de tu tarea y del progreso de los alumnos. Podrías tener información de resumen diferente con base en las configuraciones de tus tareas.

- **Alumnos en la lista**: cantidad de alumnos en la lista del aula.
- **Alumnos agregados**: cantidad de cuentas de {% data variables.product.prodname_dotcom %} que han aceptado la asignación y no están asociadas con un identificador de lista.
-  **Alumnos aceptados**: cantidad de cuentas que han aceptado esta asignación.
-  **Envíos de asignación**: cantidad de alumnos que han enviado la asignación. Las emisiones se activan en la fecha límite de la tarea.
-  **Alumnos aprobados**: cantidad de alumnos que actualmente han superado las pruebas de autoevaluación de esta asignación.

## Pasos siguientes

- Después de que creas la tarea, los alumnos pueden comenzar a trabajar en ella utilizando las características de Git y {% data variables.product.product_name %}. Los alumnos pueden clonar el repositorio, subir confirmaciones, administrar ramas, crear y revisar solicitudes de cambio, tratar los confluctos de fusión y debatir los cambios con propuestas. Tanto tú como el alumno pueden revisar el historial de confirmaciones del repositorio. Para más información, vea "[Introducción a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)", "[Repositorios](/repositories)" y "[Colaboración con incidencias y solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests)".

- Cuando un alumno termina una tarea, puedes revisar los archivos en el repositorio, o puedes revisar el historial y las visualizaciones del repositorio para entender mejor su trabajo. Para más información, vea "[Visualización de datos del repositorio con gráficos](/github/visualizing-repository-data-with-graphs)".

- Puedes proporcionar retroalimentación para una tarea si comentas en confirmaciones o líneas individuales dentro de una solicitud de cambios. Para más información, vea "[Comentarios sobre una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" y "[Apertura de una incidencia desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para más información sobre cómo crear respuestas guardadas para proporcionar comentarios sobre errores comunes, vea "[Acerca de las respuestas guardadas](/github/writing-on-github/about-saved-replies)".

## Información adicional

- «[{% data variables.product.prodname_global_campus %} para profesores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)»
- "[Conexión de un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
