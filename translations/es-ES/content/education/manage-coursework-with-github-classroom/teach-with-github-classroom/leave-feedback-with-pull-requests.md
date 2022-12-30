---
title: Deja retroalimentación con solicitudes de cambios
intro: Puedes dejar retroalimentación para tus alumnos en una solicitud de cambio especial dentro del repositorio de cada tarea.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119530'
---
## Acerca de las solicitudes de cambio de retroalimentación de las tareas

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Cuando habilita las solicitudes de incorporación de cambios para agregar comentarios a una asignación, {% data variables.product.prodname_classroom %} crea una solicitud de incorporación de cambios especial denominada **Comentarios** en el repositorio de la asignación de cada alumno o equipo. La solicitud de cambios mostrará automáticamente todas las confirmaciones que subió el alumno a la rama predeterminada del repositorio de la tarea.

## Prerrequisitos

Para crear y acceder a la solicitud de cambios de retroalimentación, debes habilitarla cuando creas la tarea. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Dejar retroalimentación en una solicitud de cambios para una tarea

{% data reusables.classroom.sign-into-github-classroom %}
1. En la lista de aulas, da clic en aquella con la tarea que quieres revisar.
  ![Clase en la lista de clases de una organización](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. A la derecha de un envío, haga clic en **Review**.
  ![Botón Review de la asignación en una lista de envíos de una asignación](/assets/images/help/classroom/assignments-click-review-button.png)
1. Revise la solicitud de incorporación de cambios. Para obtener más información, consulte "[Comentarios en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)".

## Información adicional

- "[Integración de {% data variables.product.prodname_classroom %} con un IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".
