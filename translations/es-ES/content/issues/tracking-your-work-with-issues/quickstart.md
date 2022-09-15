---
title: Iniciio rápido para las propuestas de GitHub
intro: 'Sigue esta guía interactiva breve para aprender sobre las {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423256'
---
## Introducción

Esta guía te muestra cómo utilizar las {% data variables.product.prodname_github_issues %} para planear y rastrear un trabajo. En esta guía, crearás una propuesta nueva y agregarás una lista de tareas para rastrear sub-tareas. Tambén aprenderás cómo agregar etiquetas, hitos, asignados y proyectos para comunicar los metadatos sobre tu propuesta.

## Requisitos previos

Para crear una propuesta, necesitas un repositorio. Puedes utilizar un repositorio existente al cual tengas acceso de escritura o puedes crear un repositorio nuevo. {% data reusables.enterprise-accounts.emu-permission-repo %} El repositorio debe tener habilitadas las propuestas. Para más información sobre cómo crear un repositorio, vea "[Creación de un repositorio](/articles/creating-a-new-repository)". Para más información sobre cómo habilitar las incidencias si están deshabilitadas en el repositorio, vea "[Deshabilitación de incidencias](/github/administering-a-repository/managing-repository-settings/disabling-issues)".

## Abrir una propuesta en blanco

Primero, crea una propuesta. Hay varias formas de crear una propuesta; puedes elegir el método más conveniente para tu flujo de trabajo. Este ejemplo utilizará la IU de {% data variables.product.prodname_dotcom %}. Para más información sobre otras formas de crear una incidencia, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-an-issue)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. En este ejemplo, comenzaremos con una propuesta en blanco. Es posible que en el repositorio se usen plantillas de incidencia{% ifversion fpt or ghec %} y formularios de incidencia{% endif %} para animar a los colaboradores a proporcionar información específica. Si en el repositorio se usan plantillas de incidencia, {% ifversion fpt or ghes or ghec %}haga clic en **Abrir una incidencia en blanco**{% else %}haga clic en **Abrir una incidencia normal.** {% endif %}.

![propuesta en blanco](/assets/images/help/issues/blank-issue.png)

## Llenar la información

Otorga un título descriptivo a tu propuesta. El título debe convenir el tema de la propuesta a primera vista.

Agrega una descripción que explique el propósito de la propuesta, incluyendo cualquier detalle que pueda ayudar a resolverla. Por ejemplo, si este es un informe de errores, describe los pasos para reproducir dicho error, cuál es el resultado que se espera y cuál es el resultado real.

Puedes utilizar el lenguaje de marcado apra agregar formato, enlaces, emojis y más. Para más información, vea "[Escritura en GitHub](/github/writing-on-github)".

![título y cuerpo de la propuesta](/assets/images/help/issues/issue-title-body.png)

## Agregar una lista de tareas

Puede ser útil desglosar propuestas grandes den tareas más pequeñas o rastrear varias propuestas relacionadas en una sola propuesta más grande. Para agregar una lista de tareas a la incidencia, use `[ ]` como prefijo de los elementos de lista. Referencia las propuestas existentes por número de propuesta o URL. Puedes utilizar texto simple para rastrear las tareas que no tengan una propuesta correspondiente y convertirlas en propuestas posteriormente. Para más información, vea "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/about-task-lists)".

![propuesta con lista de tareas](/assets/images/help/issues/issue-task-list-raw.png)

## Agregar etiquetas

Agrega una etiqueta para categorizar tu propuesta. Por ejemplo, podría usar una etiqueta `bug` y otra `good first issue` para indicar que una incidencia es un error que un colaborador primerizo pudiera detectar. Los usuarios pueden filtrar las propuestas por etiqueta para encontrar todas aquellas que tengan una etiqueta específica.

Puedes utilizar las etiquetas predeterminadas o puedes crear una nueva. Para más información, vea "[Administración de etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

![propuesta con etiquetas](/assets/images/help/issues/issue-with-label.png)

## Agregar hitos

Puedes agregar un hito para rastrear la propuesta como parte de un objetivo basado en una fecha. Un hito mostrará el progreso de las propeustas conforme se acerce la fecha objetivo. Para más información, vea "[Acerca de los hitos](/issues/using-labels-and-milestones-to-track-work/about-milestones)".

![propuesta con hito](/assets/images/help/issues/issue-milestone.png)

## Asignar la propuesta

Para comunicar la responsabilidad, puedes asignar la propeusta a un miembro de tu organización. Para más información, vea "[Asignación de incidencias y solicitudes de incorporación de cambios a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".

![propuesta con asignados](/assets/images/help/issues/issue-assignees.png)

## Agregar la propuesta a un proyecto

Puedes agregar la incidencia a un proyecto existente{% ifversion projects-v2 %} y rellenar los metadatos del proyecto. {% endif %} Para más información sobre los proyectos, consulta {% ifversion projects-v2 %}"[Acerca de los proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".{% else %}"[Organización del trabajo con paneles de proyecto](/issues/organizing-your-work-with-project-boards)".{% endif %}

![propuesta con proyectos](/assets/images/help/issues/issue-project.png)

## Emitir tu propuesta

Haga clic en **Enviar nueva incidencia** para crear la incidencia. Puedes editar cualquiera de los campos anteriores después de crear la propuesta. Tu propuesta tiene una URL única que puedes compartir con los miembros del equipo o referenciar en otras propuestas o solicitudes de cambio.

## Comunicar

Después de que se crea tu propuesta, sigue la conversación agregando comentarios a ella. Puede @mention a colaboradores o equipos para que se fijen en un comentario. Para vincular las incidencias relacionadas en el mismo repositorio, puede escribir `#` seguido de parte del título de la incidencia y luego hacer clic en la que quiera vincular. Para más información, vea "[Escritura en GitHub](/github/writing-on-github)".

![comentario de una propuesta](/assets/images/help/issues/issue-comment.png)

## Pasos siguientes

Puedes utilizar las propuestas para una amplia gama de propósitos. Por ejemplo:

- Rastrear ideas
- Recolectar retroalimentación
- Planear tareas
- Notificación de errores

Estos son algunos recursos útiles para que realice los siguientes pasos con {% data variables.product.prodname_github_issues %}:

- Para más información sobre las incidencias, vea "[Acerca de las incidencias](/issues/tracking-your-work-with-issues/about-issues)".
- Para más información sobre cómo pueden ayudarte los proyectos con la planificación y el seguimiento, consulta {% ifversion projects-v2 %}"[Acerca de los proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".{% else %}"[Organización del trabajo con paneles de proyecto](/issues/organizing-your-work-with-project-boards)".{% endif %}
- Para obtener más información sobre el uso de plantillas de incidencias{% ifversion fpt or ghec %} y formularios de incidencias{% endif %} para animar a los colaboradores a proporcionar información específica, vea "[Uso de plantillas para fomentar incidencias útiles y solicitudes de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
