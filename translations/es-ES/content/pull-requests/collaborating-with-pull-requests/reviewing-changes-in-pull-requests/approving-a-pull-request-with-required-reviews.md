---
title: Aprobar una solicitud de extracción con revisiones requeridas
intro: 'Si tu repositorio requiere revisiones, las solicitudes de incorporación de cambios deben tener un número específico de revisiones de aprobación de personas con permisos de _escritura_ o _administración_ en el repositorio para que se puedan fusionar.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139573'
---
Para más información sobre las revisiones necesarias, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Puedes comentar una solicitud de extracción, aprobar los cambios o solicitar mejoras antes de aprobarlas. Para más información, vea "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Sugerencia**: Si una solicitud de incorporación de cambios que ha aprobado ha cambiado significativamente, puede descartar la revisión. La solicitud de extracción necesitará una nueva revisión antes de que pueda fusionarse. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. Revise los cambios en la solicitud de incorporación de cambios y, opcionalmente, [comente líneas específicas](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. Seleccione **Aprobar** para aprobar la combinación de los cambios propuestos en la solicitud de incorporación de cambios.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Información adicional

- "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentario de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
