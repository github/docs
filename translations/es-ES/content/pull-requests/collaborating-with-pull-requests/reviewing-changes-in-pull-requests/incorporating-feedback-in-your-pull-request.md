---
title: Incorporar comentarios en tu solicitud de extracción
intro: 'Cuando los revisores sugieran cambios en una solicitud de extracción, puedes incorporar automáticamente los cambios a la solicitud de extracción o abrir una propuesta para hacer un seguimiento de las sugerencias que están fuera de alcance.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139522'
---
## Aplicación de los cambios sugeridos

Otras personas pueden sugerir modificaciones específicas a tu solicitud de extracción. Puedes aplicar estas modificaciones sugeridas directamente en una solicitud de extracción si tienes acceso de escritura al repositorio. Si la solicitud de extracción se creó desde una bifurcación, y el autor permitió que los mantenedores realicen ediciones, también puedes aplicar las modificaciones sugeridas si tienes acceso de escritura al repositorio ascendente. Para obtener más información, consulte "[Comentarios sobre una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" y "[Permitir cambios en una rama de solicitud de incorporación de cambios creada a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

Para incorporar rápidamente más de una de las modificaciones sugeridas en una confirmación simple, también puedes aplicar las modificaciones sugeridas como lote. Aplicar una modificación sugerida o un lote de modificaciones sugeridas genera una confirmación simple en la rama comparada de la solicitud de extracción.

Cada una de las personas que sugirieron alguna de las modificaciones incluidas en la confirmación será coautora de la confirmación. La persona que aplica las modificaciones sugeridas será coautora y persona que confirma el cambio de la confirmación. Para obtener más información sobre la persona que confirma el cambio en Git, consulte "[Conceptos básicos de Git: visualización del historial de confirmaciones](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" en el sitio del libro _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción a la que quieras aplicarle una modificación sugerida.
3. Navega hasta la primera modificación sugerida que quieras aplicar.
    - Para aplicar el cambio en su propia confirmación, haga clic en **Commit suggestion**.
  ![Botón Commit suggestion](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Para agregar la sugerencia a un lote de cambios, haga clic en **Add suggestion to batch**. Continúa agregando las modificaciones sugeridas que quieras incluir en una única confirmación. Cuando haya terminado de agregar los cambios sugeridos, haga clic en **Commit suggestions**.
  ![Botón Add suggestion to batch](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. En el campo de mensaje de confirmación, escribe un mensaje de confirmación corto y significativo que describa la modificación que le hiciste al archivo o los archivos.
![Campo para mensaje de confirmación](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Haga clic en **Commit changes.** 
![ Botón Commit changes](/assets/images/help/pull_requests/commit-changes-button.png)

## Volver a solicitar una revisión

{% data reusables.pull_requests.re-request-review %}

## Abrir una propuesta para una sugerencia fuera de alcance

Si alguna persona sugiere cambios para tu solicitud de extracción, y los cambios están fuera del alcance de la solicitud de extracción, puedes abrir una propuesta nueva para hacer el seguimiento de los comentarios. Para más información, vea "[Apertura de una incidencia desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

## Información adicional

- "[Acerca de las revisiones de solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentario de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Solicitar la revisión de una solicitud de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- "[Abrir una incidencia desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
