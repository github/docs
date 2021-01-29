---
title: Crear una tarea de grupo
intro: 'Puedes crear una tarea colaborativa para que los equipos de alumnos participen en tu curso.'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
---

### Acerca de las tareas de grupo

{% data reusables.classroom.assignments-group-definition %} Los alumnos pueden trabajar en conjunto en las tareas de grupo dentro de un repositorio compartido, como un equipo de desarrolladores profesionales.

Cuando un alumno acepta una tarea grupal, los alumnos pueden crear un equipo nuevo o unirse a uno existente. {% data variables.product.prodname_classroom %} guarda los equipos para una tarea como un conjunto. Puedes nombrar el conjunto de equipos para una tarea específica cuando creas dicha tarea y puedes reutilizar ese conjunto de equipos para una tarea más grande.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Puedes decidir cuántos equipos puede tener una tarea y cuántos miembros puede tener cada equipo. Cada equipo que crea un alumno para una tarea constituye un equipo dentro de tu organización en {% data variables.product.product_name %}. La visibilidad del equipo es secreta. Los equipos que crees en {% data variables.product.product_name %} no aparecerán en {% data variables.product.prodname_classroom %}. Para obtener más información, consulta "[Acerca de equipos](/github/setting-up-and-managing-organizations-and-teams/about-teams)."

Para ver un video demostrativo de la creación de una tarea de grupo, consulta la sección "[Conceptos básicos para configurar un {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

### Prerrequisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

### Crear una tarea

{% data reusables.classroom.assignments-guide-create-the-assignment %}

### Configurar lo básico para una tarea

Nombra tu tarea, decide si quires asignarle una fecha límite, definir equipos o elegir la visibilidad de los repositorios de la misma.

- [Nombrar una tarea](#naming-an-assignment)
- [Asignar una fecha límita para una tarea](#assigning-a-deadline-for-an-assignment)
- [Elegir un tipo de tarea](#choosing-an-assignment-type)
- [Definir los equipos para una tarea](#defining-teams-for-an-assignment)
- [Elegir un tipo de visibilidad para los repositorios de la tarea](#choosing-a-visibility-for-assignment-repositories)

#### Nombrar una tarea

En las tareas grupales, {% data variables.product.prodname_classroom %} nombra a los repositorios de acuerdo con el prefijo de los mismos y el nombre del equipo. Predeterminadamente, el prefijo del repositorio es el título de la tarea. Por ejemplo, si nombras la tarea "assignment-1" y el nombre del equipo en {% data variables.product.product_name %} es "student-team", el nombre del repositorio de la tarea para los miembros del equipo será `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

#### Asignar una fecha límita para una tarea

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### Elegir un tipo de tarea

Debajo de "Tarea individual o grupal", selecciona el menú desplegable y daclic en **Tarea grupal**. No puedes cambiar el tipo de tarea después de crearla. Si prefieres crear una tarea individual, consulta la sección "[Crear una tarea individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)".

#### Definir los equipos para una tarea

Si ya creaste una tarea grupal para el aula, puedes reutilizar un conjunto de equipos para la tarea nueva. Para crear un conjunto nuevo con los equipos que crean tus alumnos para la tarea, teclea el nombre de dicho conjunto. Opcionalmente, teclea la cantidad máxima de miembros de los equipos y el total de los equipos.

{% tip %}

**Tips**:

- Te recomendamos incluir detalles sobre el conjunto de equipos en el nombre de dicho conjunto. Por ejemplo, si quieres utilizar un conjunto de equipos en un segmente, nómbralo como la tarea. Si quieres reutilizar el conjunto a lo largo de un semesre o curso, nombra el conjunto como el semestre o curso.

- Si te gustaría asignar alumnos a un equipo específico, proporciónales un nombre de equipo y una lista de mimebros.

{% endtip %}

![Parámetros para los equipos que participan en una tarea grupal](/assets/images/help/classroom/assignments-define-teams.png)

#### Elegir un tipo de visibilidad para los repositorios de la tarea

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

### Agergar un código de inicio y configurar un ambiente de desarrollo

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Elegir un repositorio de plantilla](#choosing-a-template-repository)
- [Elegir un ambiente de desarrollo integrado (IDE)](#choosing-an-online-integrated-development-environment-ide)

#### Elegir un repositorio de plantilla

Predeterminadamente, una tarea nueva creará un repositorio en blanco para cada equipo que cree el alumno. {% data reusables.classroom.you-can-choose-a-template-repository %} Para obener más información sobre los repositorios de plantilla, consulta la sección "[Crear un repositorio de plantilla](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)".

{% data reusables.classroom.assignments-guide-choose-template-repository %}

#### Elegir un ambiente de desarrollo integrado (IDE)

{% data reusables.classroom.about-online-ides %} Para obtener más información, consulta la sección "[Integrar el {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Proporcionar retroalimentación

Opcionalmente, puedes calificar tareas automáticamente y crear un espacio para debatir cada entrega con el equipo.

- [Probar las tareas automáticamente](#testing-assignments-automatically)
- [Prevenir que se hagan cambios en los archivos importantes](#preventing-changes-to-important-files)
- [Crear una solicitud de cambios para retroalimentación](#creating-a-pull-request-for-feedback)

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

Puedes ver los equipos que están trabajando o que han emitido una tarea en la pestaña de **Equipos** de la misma. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Tarea grupal" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

### Pasos siguientes

- Después de que creas una tarea y de que tus alumnos forme equipos, los miembros de dichos equipos pueden comenzar a trabajar en la tarea utilizando las características de Git y de {% data variables.product.product_name %}. Los alumnos pueden clonar el repositorio, subir confirmaciones, administrar ramas, crear y revisar solicitudes de cambio, tratar los confluctos de fusión y debatir los cambios con propuestas. Tanto tú como el equipo pueden revisar el historial de confirmaciones del repositorio. Para obtener más información, consulta las secciones "[Iniciar con {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)", "[Crear, clonar y archivar repositorios](/github/creating-cloning-and-archiving-repositories)", "[Utilizar Git](/github/using-git)", y "[Colaborar con las propeustas y solicitudes de cambios](/github/collaborating-with-issues-and-pull-requests)", así como el curso gratuito sobre [administrar conflictos de fusión](https://lab.github.com/githubtraining/managing-merge-conflicts) de {% data variables.product.prodname_learning %}.

- Cuando un equipo termina una tarea, puedes revisar los archivos en el repositorio, o puedes revisar el historial y visualizaciones del mismo para entender mejor cómo colaboró el equipo. Para obtener más información, consulta la sección "[Visualizar los datos del repositorio con gráficas](/github/visualizing-repository-data-with-graphs)".

- Puedes proporcionar retroalimentación para una tarea si comentas en confirmaciones o líneas individuales dentro de una solicitud de cambios. Para obtener más información, consulta la sección "[Comentar en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" y "[Abrir una propuesta desde el código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obtener más información sobre cómo crear respuestas guardadas para proporcionar retroalimentación a los errores comunes, consulta la sección "[Acerca de las respuestas guardadas](/github/writing-on-github/about-saved-replies)".

### Further reading

- "[Utilizar {% data variables.product.prodname_dotcom %} en tu aula y en tu investigación](/education/teach-and-learn-with-github-education/use-github-in-your-classroom-and-research)"
- "[Conectar un sistema de administración de aprendizaje a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
- [Utilizar equipos existentes en tareas grupales](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) en la comunidad de {% data variables.product.prodname_education %}
