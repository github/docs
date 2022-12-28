---
title: Informationen zu Pull-Request-Reviews
intro: 'Bei Reviews können Mitarbeiter*innen die in Pull Requests vorgeschlagenen Änderungen kommentieren, die Änderungen genehmigen oder weitere Änderungen anfordern, bevor der Pull Request gemergt wird. Repositoryadministrator*innen können festlegen, dass alle Pull Requests vor dem Mergen genehmigt werden müssen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179407'
---
## Informationen zu Pull-Request-Reviews

Nachdem ein Pull Request geöffnet wurde, kann jeder mit *Lese*-Zugriff die vorgeschlagenen Änderungen überprüfen und kommentieren. Du kannst auch spezifische Änderungen an Codezeilen vorschlagen, die der Autor direkt aus dem Pull-Request anwenden kann. Weitere Informationen findest du unter [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Repository-Inhaber und -Mitarbeiter können von einer bestimmten Person einen Review des Pull Requests anfordern. Organisationsmitglieder können auch einen Review eines Pull Requests von einem Team mit Lesezugriff auf das Repository anfordern. Weitere Informationen findest du unter [Anfordern einer Pull Request-Überprüfung](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review). Du kannst eine Teilmenge von Teammitgliedern angeben, die automatisch anstelle des gesamten Teams zugewiesen werden sollen. Weitere Informationen findest du unter [Verwalten von Code-Review-Einstellungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

Reviews ermöglichen eine Diskussion der vorgeschlagenen Änderungen und tragen dazu bei, dass die Änderungen den Beitragsrichtlinien des Repositorys wie auch anderen Qualitätsstandards entsprechen. Du kannst definieren, welche Personen oder Teams bestimmte Codetypen oder -bereiche in einer CODEOWNERS-Datei besitzen. Wenn durch einen Pull Request Code mit einem definierten Inhaber geändert wird, wird diese Person oder dieses Team automatisch als Reviewer angefordert. Weitere Informationen findest du unter [Informationen zu Codebesitzern](/articles/about-code-owners/).

{% ifversion fpt or ghec %}Du kannst Erinnerungen für Pull Requests planen, die überprüft werden müssen. Weitere Informationen findest du unter [Verwalten geplanter Erinnerungen für Pull Requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests).{% endif %}

![Header eines Reviews, der Änderungen mit Zeilenkommentaren anfordert](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Ein Review kann drei verschiedene Status haben:
- **Kommentieren**: Sende allgemeines Feedback, ohne die Änderungen ausdrücklich zu genehmigen oder zusätzliche Änderungen anzufordern.
- **Genehmigen**: Sende Feedback und genehmige das Mergen der im Pull Request vorgeschlagenen Änderungen.
- **Änderungen anfordern**: Sende Feedback, auf das eingegangen werden muss, bevor der Pull Request gemergt werden kann.

![Bild des Review-Status](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Du kannst alle Reviews eines Pull Requests in der Zeitleiste der Unterhaltung anzeigen, und du kannst Reviews von Repository-Inhabern und -Mitarbeitern im Merge-Feld des Pull Requests sehen.

![Bild von Reviews in einem Merge-Feld](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Erneutes Anfordern einer Überprüfung

{% data reusables.pull_requests.re-request-review %}

## Erforderliche Reviews

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

{% tip %}

**Tipp**: Bei Bedarf können Personen mit *Administrator*- oder *Schreibzugriff* auf ein Repository eine Pull Request-Überprüfung schließen. Weitere Informationen findest du unter [Schließen eines Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).

{% endtip %}

## Weiterführende Themen

- [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Anzeigen einer Pull Request-Überprüfung](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
- [Festlegen von Richtlinien für Repositorymitwirkende](/articles/setting-guidelines-for-repository-contributors)
