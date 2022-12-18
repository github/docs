---
title: Einen Pull-Request-Review ablehnen
intro: 'Wenn dein Repository Reviews benötigt, kannst du Pull Request-Reviews schließen, die nicht mehr gültig sind oder nicht von Reviewer*innen bestätigt werden können.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876945'
---
{% data reusables.pull_requests.dismiss_review %} Dies ändert den Reviewstatus zu „Reviewkommentar“. Wenn du einen Review verwirfst, musst du einen Kommentar hinzufügen, in dem du den Grund für deine Entscheidung erklärst. Dein Kommentar wird zur Pull-Request-Unterhaltung hinzugefügt.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. Scrolle auf der Registerkarte „Unterhaltung“ zu dem Review, das du schließen möchtest, und klicke dann auf {% octicon "chevron-down" aria-label="The down button" %}. ![Chevron-Symbol (spitze Klammer) im Merge-Feld](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Review schließen**.
![Symbol mit drei Punkten im Mergefeld](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Gib den Grund für die Schließung des Reviews ein, und klicke dann auf **Review schließen**.
  ![Schaltfläche zum Schließen eines Reviews](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## Weitere Informationsquellen

- [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
