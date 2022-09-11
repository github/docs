---
title: Descartar una revisión de solicitud de extracción
intro: 'Si tu repositorio requiere revisiones, puedes descartar las revisiones de solicitudes de cambios que ya no son válidas o que el revisor no puede aprobar.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147879296'
---
{% data reusables.pull_requests.dismiss_review %} Esto cambia el estado de la revisión, que pasa a ser un comentario de revisión. Cuando descartas una revisión, debes agregar un comentario que explique por qué la descartaste. Tu comentario se agregará a la conversación de la solicitud de extracción.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. En la pestaña "Conversation" (Conversación), desplácese hasta la revisión que quiere descartar y haga clic en {% octicon "chevron-down" aria-label="The down button" %}. ![Icono de comillas angulares en el cuadro de fusión](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **Dismiss review** (Descartar revisión).
![Icono de kebab en el cuadro de combinación](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Escriba el motivo para descartar la revisión y después haga clic en **Dismiss review** (Descartar revisión).
  ![Botón Dismiss review (Descartar revisión)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## Información adicional

- "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
- "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
