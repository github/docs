---
title: Utiliza la tarea inicial de Git y GitHub
intro: 'Puedes utilizar la tarea inicial de Git y {% data variables.product.company_short %} para dar a los alumnos una visión general de los fundamentos de Git y {% data variables.product.company_short %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574016'
---
La tarea inicial de Git {% data variables.product.company_short %} es un curso prehecho que resume los puntos básicos de Git y de {% data variables.product.company_short %} y enlaza a los alumnos con recursos para aprender más sobre temas específicos.

## Requisitos previos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Crear la tarea inicial

### Si no hay tareas existentes en el aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. Navegar a un aula.
3. En la pestaña {% octicon "repo" aria-label="The repo icon" %} **Tareas**, haz clic en **Usar la tarea inicial**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### Si ya existen tareas en el aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. Navegar a un aula.
3. En la pestaña {% octicon "repo" aria-label="The repo icon" %} **Tareas**, haz clic en el vínculo del banner azul.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Configurar lo básico para una tarea

Importa el curso de inicio en tu organización, nombra tu tarea, decide si quieres asignar una fecha límite y elige la visibilidad de los repositorios de la tarea.

- [Requisitos previos](#prerequisites)
- [Crear la tarea inicial](#creating-the-starter-assignment)
  - [Si no hay tareas existentes en el aula](#if-there-are-no-existing-assignments-in-the-classroom)
  - [Si ya existen tareas en el aula](#if-there-already-are-existing-assignments-in-the-classroom)
- [Configurar lo básico para una tarea](#setting-up-the-basics-for-an-assignment)
  - [Importar la tarea](#importing-the-assignment)
  - [Nombrar la tarea](#naming-the-assignment)
  - [Asignación de una fecha límite para una asignación](#assigning-a-deadline-for-an-assignment)
  - [Elección de un tipo de visibilidad para los repositorios de asignación](#choosing-a-visibility-for-assignment-repositories)
- [Invitar a los alumnos a una tarea](#inviting-students-to-an-assignment)
- [Pasos siguientes](#next-steps)
- [Lecturas adicionales](#further-reading)

### Importar la tarea

Primero necesitas improtar la tarea inicial de Git {% data variables.product.product_name %} en tu organización.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Nombrar la tarea

Para una tarea individual, {% data variables.product.prodname_classroom %} nombra los repositorios de acuerdo con su prefijo y con el nombre de usuario de {% data variables.product.product_name %} del alumno. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si asigna el nombre "assingment-1" a una asignación y el nombre de usuario del alumno en {% data variables.product.product_name %} es @octocat, el nombre del repositorio de la asignación para @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Elegir un tipo de visibilidad para los repositorios de la tarea

Los repositorios de una tarea pueden ser públicos o privados. Si utilizas repositorios privados, solo el alumno puede ver la retroalimentación que proporciones. Debajo de "Visibilidad del repositorio", selecciona una visibilidad.

Cuando termine, haga clic en **Continuar**. {% data variables.product.prodname_classroom %} creará la tarea y te llevará a la su página.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Invitar a los alumnos a una tarea

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Puedes ver si un alumno se ha unido a la clase y ha aceptado o enviado una tarea en la pestaña **Todos los alumnos** de la tarea. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

La tarea inicial de Git {% data variables.product.company_short %} solo se encuentra disponible para alumnos individuales y no para grupos. Una vez que creas la tarea, los alumnos pueden comenzar a trabajar en ella.

## Pasos siguientes

- Haz tareas adicionales personalizadas para tu curso. Para obtener más información, consulta «[Creación de una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)», «[Creación de una tarea de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)» o «[Volver a usar una tarea](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)».

## Información adicional

- «[{% data variables.product.prodname_global_campus %} para profesores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)»
- "[Conexión de un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
