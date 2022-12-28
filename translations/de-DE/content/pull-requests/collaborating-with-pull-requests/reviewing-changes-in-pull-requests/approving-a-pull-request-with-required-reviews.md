---
title: Einen Pull Request mit erforderlichen Reviews genehmigen
intro: 'Wenn dein Repository Reviews verlangt, müssen Pull Requests eine bestimmte Anzahl an genehmigenden Reviews von Personen mit _Schreib_- oder _Administratorberechtigungen_ im Repository aufweisen, bevor sie zusammengeführt werden können.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133893'
---
Weitere Informationen zu erforderlichen Reviews findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

Du kannst Pull Requests kommentieren, die Änderungen genehmigen oder vor der Genehmigung Verbesserungen anfordern. Weitere Informationen findest du unter [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Tipp**: Wenn ein Pull Request, den du genehmigt hast, signifikant geändert wurde, kannst du deinen Review verwerfen. Der Pull Request benötigt dann einen neuen Review, bevor er zusammengeführt werden kann. Weitere Informationen findest du unter [Schließen eines Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. Überprüfe die Änderungen am Pull Request, und [kommentiere optional bestimmte Zeilen](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. Wähle **Genehmigen** aus, um das Zusammenführen der im Pull Request vorgeschlagenen Änderungen zu genehmigen.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Weiterführende Themen

- [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
