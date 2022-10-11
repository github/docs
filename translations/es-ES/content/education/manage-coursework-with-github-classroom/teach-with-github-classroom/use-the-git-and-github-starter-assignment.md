---
title: Utiliza la tarea inicial de Git y GitHub
intro: 'Puedes utilizar la tarea de inicio de Git & {% data variables.product.company_short %} para proporcionar a los alumnos un resumen de lo básic de Git y de {% data variables.product.company_short %}.'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
---

{% note %}

**Nota:** La tarea inicilal de Git & {% data variables.product.company_short %} está en beta y también está sujeta a cambios.

{% endnote %}

La tarea inicial de Git & {% data variables.product.company_short %} es un curso prehecho que resume los puntos básicos de Git y de {% data variables.product.company_short %} y enlaza a los alumnos con recursos para aprender más sobre temas específicos.

### Prerrequisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

### Crear la tarea inicial

#### Si no hay tareas existentes en el aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. Navegar a un aula.
3. En la pestaña de {% octicon "repo" aria-label="The repo icon" %} **Tareas**, haz clic en **Utilizar tarea de inicio**.

<div class="procedural-image-wrapper">
  <img alt="Crear tu primera tarea" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

#### Si ya existen tareas en el aula

1. Inicia sesión en {% data variables.product.prodname_classroom_with_url %}.
2. Navegar a un aula.
3. En la pestaña de {% octicon "repo" aria-label="The repo icon" %}**Tareas**, haz clic en el enlace sobre el letrero azul.

<div class="procedural-image-wrapper">
  <img alt="En el botón de 'Tarea nueva'" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

### Configurar lo básico para una tarea

Importa el curso de inicio en tu organización, nombra tu tarea, decide si quieres asignar una fecha límite y elige la visibilidad de los repositorios de la tarea.

- [Importar la tarea](#importing-the-assignment)
- [Nombrar una tarea](#naming-an-assignment)
- [Asignar una fecha límita para una tarea](#assigning-a-deadline-for-an-assignment)
- [Elegir un tipo de tarea](#choosing-an-assignment-type)
- [Elegir un tipo de visibilidad para los repositorios de la tarea](#choosing-a-visibility-for-assignment-repositories)

#### Importar la tarea

Primero necesitas improtar la tarea inicial de Git & {% data variables.product.product_name %} en tu organización.

<div class="procedural-image-wrapper">
  <img alt="El botón de `importar la tarea`" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

#### Nombrar la tarea

Para una tarea individual, {% data variables.product.prodname_classroom %} nombra los repositorios de acuerdo con su prefijo y con el nombre de usuario de {% data variables.product.product_name %} del alumno. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si nombras a una tarea "assingment-1" y el nombre de usuario del alumno en {% data variables.product.product_name %} es @octocat, entonces el nombre del repositorio de la tarea para @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

#### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### Elegir un tipo de visibilidad para los repositorios de la tarea

Los repositorios de una tarea pueden ser públicos o privados. Si utilizas repositorios privados, solo el alumno puede ver la retroalimentación que proporciones. Debajo de "Visibilidad del repositorio", selecciona una visibilidad.

Cuando termines, haz clic en **Continuar**. {% data variables.product.prodname_classroom %} creará la tarea y te llevará a la su página.

<div class="procedural-image-wrapper">
  <img alt="Botón 'Continuar'" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

### Invitar a los alumnos a una tarea

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Puedes ver si un alumno se unió al aula y aceptó o emitió una tarea en la pestaña de **Todos los alumnos** de la misma. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Tarea individual" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

La tarea inicial de Git & {% data variables.product.company_short %} solo se encuentra disponible para alumnos individuales y no para grupos. Una vez que creas la tarea, los alumnos pueden comenzar a trabajar en ella.

### Pasos siguientes

- Haz tareas adicionales personalizadas para tu curso. Para obtener más información, consulta las secciones "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" y "[Crear una tarea grupal](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Leer más

- "[Utiliza {% data variables.product.prodname_dotcom %} en tu aula y en tu investigación](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
