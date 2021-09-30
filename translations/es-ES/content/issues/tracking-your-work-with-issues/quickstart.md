---
title: Iniciio rápido para las propuestas de GitHub
intro: 'Sigue esta guía interactiva breve para aprender sobre las {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: quick_start
topics:
  - Issues
  - Project management
---

## Introducción

Esta guía te muestra cómo utilizar las {% data variables.product.prodname_github_issues %} para planear y rastrear un trabajo. En esta guía, crearás una propuesta nueva y agregarás una lista de tareas para rastrear sub-tareas. Tambén aprenderás cómo agregar etiquetas, hitos, asignados y proyectos para comunicar los metadatos sobre tu propuesta.

## Prerrequisitos

Para crear una propuesta, necesitas un repositorio. Puedes utilizar un repositorio existente al cual tengas acceso de escritura o puedes crear un repositorio nuevo. El repositorio debe tener habilitadas las propuestas. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)." Para obtener más información acerca de habilitar las propuestas si están inhabilitadas en tu repositorio, consulta la sección "[Inhabilitar las propuestas](/github/administering-a-repository/managing-repository-settings/disabling-issues)".

## Abrir una propuesta en blanco

Primero, crea una propuesta. Hay varias formas de crear una propuesta; puedes elegir el método más conveniente para tu flujo de trabajo. Este ejemplo utilizará la IU de {% data variables.product.prodname_dotcom %}. Para obtener más información acerca de otras formas de crear una propuesta, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-an-issue)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. En este ejemplo, comenzaremos con una propuesta en blanco. Tu repositorio podría utilizar las plantillas de propuesta{% ifversion fpt %} y formatos de propuesta{% endif %} para exhortar a que los contribuyentes proporcionen información específica. Si tu repositorio utiliza plantillas de propuestas, {% ifversion fpt or ghes %}Haz clic en **Abrir una propuesta en blanco**{% else %}haz clic en **Abrir una propuesta normal.**{% endif %}.

![propuesta en blanco](/assets/images/help/issues/blank-issue.png)

## Llenar la información

Otorga un título descriptivo a tu propuesta. El título debe convenir el tema de la propuesta a primera vista.

Agrega una descripción que explique el propósito de la propuesta, incluyendo cualquier detalle que pueda ayudar a resolverla. Por ejemplo, si este es un informe de errores, describe los pasos para reproducir dicho error, cuál es el resultado que se espera y cuál es el resultado real.

Puedes utilizar el lenguaje de marcado apra agregar formato, enlaces, emojis y más. Para obtener más información, consulta la sección "[Escribir en GitHub](/github/writing-on-github)".

![título y cuerpo de la propuesta](/assets/images/help/issues/issue-title-body.png)

## Agregar una lista de tareas

Puede ser útil desglosar propuestas grandes den tareas más pequeñas o rastrear varias propuestas relacionadas en una sola propuesta más grande. Agrega una lista de tareas a tu propuesta dando una breve introducción con `[ ]`. Referencia las propuestas existentes por número de propuesta o URL. Puedes utilizar texto simple para rastrear las tareas que no tengan una propuesta correspondiente y convertirlas en propuestas posteriormente. Para obtener más información, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/about-task-lists)".

![propuesta con lista de tareas](/assets/images/help/issues/issue-task-list-raw.png)

## Agregar etiquetas

Agrega una etiqueta para categorizar tu propuesta. Por ejemplo, puedes utilizar una etiqueta de `bug` un una de `good first issue` para indicar que una propuesta es un error que pudo haber hecho un contribuyente primerizo. Los usuarios pueden filtrar las propuestas por etiqueta para encontrar todas aquellas que tengan una etiqueta específica.

Puedes utilizar las etiquetas predeterminadas o puedes crear una nueva. Para obtener más información, consulta la sección "[Administrar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

![propuesta con etiquetas](/assets/images/help/issues/issue-with-label.png)

## Agregar hitos

Puedes agregar un hito para rastrear la propuesta como parte de un objetivo basado en una fecha. Un hito mostrará el progreso de las propeustas conforme se acerce la fecha objetivo. Para obtener más información, consulta "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)".

![propuesta con hito](/assets/images/help/issues/issue-milestone.png)

## Asignar la propuesta

Para comunicar la responsabilidad, puedes asignar la propeusta a un miembro de tu organización. Para obtener más informaciónm, consulta la sección "[Asignar propuestas y solicitudes de cambios a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".

![propuesta con asignados](/assets/images/help/issues/issue-assignees.png)

## Agregar la propuesta a un proyecto

Puedes agregar la propuesta a un proyecto existente. {% ifversion fpt %}Si estás utilizando proyectos (beta), también puedes llenar los metadatos del proyecto. {% endif %} Para obtener más información sobre los proyectos, consulta las secciones {% ifversion fpt %}"[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" y {% endif %}"[Organizar tu trabajo con tableros de proyecto](/issues/organizing-your-work-with-project-boards)".

![propuesta con proyectos](/assets/images/help/issues/issue-project.png)

## Emitir tu propuesta

Haz clic en **Emitir propuesta nueva** para crear tu propuesta. Puedes editar cualquiera de los campos anteriores después de crear la propuesta. Tu propuesta tiene una URL única que puedes compartir con los miembros del equipo o referenciar en otras propuestas o solicitudes de cambio.

## Comunicar

Después de que se crea tu propuesta, sigue la conversación agregando comentarios a ella. Puedes @mencionar a los colaboradores o equipos para que se fijen en un comentario. Para enlazar las propuestas relacionadas en el mismo repositorio, puedes teclear `#` seguido de parte del título de la propuesta y luego hacer clic en la propueta que quieras enlazar. Para obtener más información, consulta la sección "[Escribir en GitHub](/github/writing-on-github)".

![comentario de una propuesta](/assets/images/help/issues/issue-comment.png)

## Pasos siguientes

Puedes utilizar las propuestas para una amplia gama de propósitos. Por ejemplo:

- Rastrear ideas
- Recolectar retroalimentación
- Planear tareas
- Reportar errores

Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_github_issues %}:

- Para aprender más sobre las propuestas, consulta la sección "[Acerca de las propuestas](/issues/tracking-your-work-with-issues/about-issues)".
- Para aprender sobre cómo pueden ayudarte los proyectos para planear y hacer rastres, consulta la sección {% ifversion fpt %}"[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" o la sección{% endif %}"[Organizar tu trabajo con tableros de proyecto](/issues/organizing-your-work-with-project-boards)".
- Para aprender más sobre cómo utilizar las plantillas de propuestas{% ifversion fpt %} y emitir formatos{% endif %} para motivar a los contribuyentes a proporcionar información específica, consulta la sección "[Utilizar las plantillas para motivar las propuestas y solicitudes de cambios útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
