---
title: Crear una tarea individual
intro: Puedes crear una tarea individual para que los alumnos de tu curso la completen individualmente.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
---

### Acerca de las tareas individuales

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Para ver un video demostrativo de la creación de una tarea individual, consulta la sección "[Conceptos básicos para configurar un {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

### Prerrequisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

### Crear una tarea

{% data reusables.classroom.assignments-guide-create-the-assignment %}

### Configurar lo básico para una tarea

Nombra tu tarea, decide si quieres asignar una fecha límite y elige la visibilidad de los repositorios de la misma.

- [Nombrar una tarea](#naming-an-assignment)
- [Asignar una fecha límita para una tarea](#assigning-a-deadline-for-an-assignment)
- [Elegir un tipo de tarea](#choosing-an-assignment-type)
- [Elegir un tipo de visibilidad para los repositorios de la tarea](#choosing-a-visibility-for-assignment-repositories)

#### Nombrar una tarea

Para una tarea individual, {% data variables.product.prodname_classroom %} nombra los repositorios de acuerdo con su prefijo y con el nombre de usuario de {% data variables.product.product_name %} del alumno. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si nombras a una tarea "assingment-1" y el nombre de usuario del alumno en {% data variables.product.product_name %} es @octocat, entonces el nombre del repositorio de la tarea para @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

#### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### Elegir un tipo de tarea

Debajo de "Tarea individual o grupal", selecciona el menú desplegable y da clic en **Tarea individual**. No puedes cambiar el tipo de tarea después de crearla. Si prefieres crear una tarea de grupo, consulta la sección "[Crear una tarea de grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

#### Elegir un tipo de visibilidad para los repositorios de la tarea

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

### Agergar un código de inicio y configurar un ambiente de desarrollo

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Elegir un repositorio de plantilla](#choosing-a-template-repository)
- [Elegir un ambiente de desarrollo integrado (IDE)](#choosing-an-online-integrated-development-environment-ide)

#### Elegir un repositorio de plantilla

Predeterminadamente, una tarea nueva creará un repositorio en blanco para cada alumno del registro de alumnos del aula. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

#### Elegir un ambiente de desarrollo integrado (IDE)

{% data reusables.classroom.about-online-ides %} Para obtener más información, consulta la sección "[Integrar el {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

### Proporcionar retroalimentación para una tarea

Opcionalmente, puedes calificar tareas automáticamente y crear un espacio para debatir cada entrega con el alumno.

- [Probar las tareas automáticamente](#testing-assignments-automatically)
- [Prevenir que se hagan cambios en los archivos importantes](#preventing-changes-to-important-files)
- [Crear una solicitud de cambios para retroalimentación](#preventing-changes-to-important-files)

#### Probar las tareas automáticamente

{% data reusables.classroom.assignments-guide-using-autograding %}

#### Prevenir que se hagan cambios en los archivos importantes

{% data reusables.classroom.assignments-guide-prevent-changes %}

#### Crear una solicitud de cambios para retroalimentación

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

### Invitar a los alumnos a una tarea

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Puedes ver si un alumno se unió al aula y aceptó o emitió una tarea en la pestaña de **Todos los alumnos** de la misma. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Tarea individual" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

### Pasos siguientes

- Después de que creas la tarea, los alumnos pueden comenzar a trabajar en ella utilizando las características de Git y {% data variables.product.product_name %}. Los alumnos pueden clonar el repositorio, subir confirmaciones, administrar ramas, crear y revisar solicitudes de cambio, tratar los confluctos de fusión y debatir los cambios con propuestas. Tanto tú como el alumno pueden revisar el historial de confirmaciones del repositorio. For more information, see "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Creating, cloning, and archiving repositories](/github/creating-cloning-and-archiving-repositories)," "[Using Git](/github/getting-started-with-github/using-git)," and "[Collaborating with issues and pull requests](/github/collaborating-with-issues-and-pull-requests)."

- Cuando un alumno termina una tarea, puedes revisar los archivos en el repositorio, o puedes revisar el historial y las visualizaciones del repositorio para entender mejor su trabajo. Para obtener más información, consulta la sección "[Visualizar los datos del repositorio con gráficas](/github/visualizing-repository-data-with-graphs)".

- Puedes proporcionar retroalimentación para una tarea si comentas en confirmaciones o líneas individuales dentro de una solicitud de cambios. Para obtener más información, consulta la sección "[Comentar en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" y "[Abrir una propuesta desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obtener más información sobre cómo crear respuestas guardadas para proporcionar retroalimentación a los errores comunes, consulta la sección "[Acerca de las respuestas guardadas](/github/writing-on-github/about-saved-replies)".

### Leer más

- "[Utiliza {% data variables.product.prodname_dotcom %} en tu aula y en tu investigación](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
