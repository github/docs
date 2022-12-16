---
title: Vorgeschlagene Änderungen in einem Pull Request überprüfen
intro: 'In einem Pull Request kannst du Commits, geänderte Dateien und die Differenzen (Diffs) zwischen den Dateien im Basisbranch und in den Vergleichsbranches überprüfen und besprechen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: f4d9e710a628b8c3c47c8816dc3c183328894958
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108339'
---
## Informationen zum Review von Pull Requests

Du kannst die Änderungen in einem Pull Request eine Datei nach der anderen überprüfen. Beim Überprüfen der Dateien in einem Pull Request kannst du einzelne Kommentare zu bestimmten Änderungen hinterlassen. Nachdem du den Review der einzelnen Dateien abgeschlossen hast, kannst du sie als „gesehen“ markieren. Dadurch wird die Datei ausgeblendet, so dass du die noch nicht geprüften Dateien leichter findest. Eine Statusleiste im Pull Request-Header zeigt die Anzahl der eingesehenen Dateien an. Nachdem du so viele Dateien wie gewünscht überprüft hast, kannst du den Pull Request genehmigen oder zusätzliche Änderungen anfordern, indem du den Review mit einem Zusammenfassungskommentar übermittelst.

{% data reusables.search.requested_reviews_search_tip %}

## Review starten

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   Du kannst das Format der Diff-Ansicht auf dieser Registerkarte ändern, indem du auf {% octicon "gear" aria-label="The Settings gear" %} klickst und die einheitliche oder geteilte Ansicht auswählst. Die getroffene Auswahl wird angewendet, wenn du die Diff-Ansicht für andere Pull Requests anzeigst.

   ![Einstellungen für die Diff-Ansicht](/assets/images/help/pull_requests/diff-view-settings.png)

   Du kannst auch Leerzeichenunterschiede ausblenden. Die getroffene Auswahl gilt nur für diesen Pull Request und wird für deinen nächsten Besuch dieser Seite gespeichert.
{% endif %}
1. Wahlweise kannst du die Dateien filtern, um nur die Dateien anzuzeigen, die du überprüfen möchtest{% ifversion pr-tree-view %}, oder die Dateistruktur verwenden, um zu einer bestimmten Datei zu navigieren{% endif %}. Weitere Informationen findest du unter „[Filtern von Dateien in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)“.
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. Wenn du fertig bist, klicke auf **Review starten**. Wenn du bereits einen Review gestartet hast, kannst du auf **Reviewkommentar hinzufügen** klicken.

   ![Schaltfläche „Start a review“ (Review starten)](/assets/images/help/pull_requests/start-a-review-button.png)

Vor dem Absenden des Reviews haben deine Zeilenkommentare den Status _Ausstehend_ und sind nur für dich sichtbar. Ausstehende Kommentare kannst du vor dem Absenden des Reviews jederzeit bearbeiten. Zum Abbrechen eines ausstehenden Reviews einschließlich der ausstehenden Kommentare blätterst du auf der Registerkarte „Unterhaltung“ zum Ende der Zeitleiste und klickst auf **Review abbrechen**.

![Schaltfläche „Review abbrechen“](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

Du kannst [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) verwenden, um Pull Requests zu testen, auszuführen und zu überprüfen.

{% data reusables.codespaces.review-pr %}

Weitere Informationen zum Überprüfen von Pull Requests in {% data variables.product.prodname_github_codespaces %} findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} für Pull Requests](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests).

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Überprüfen von Abhängigkeitsänderungen

Wenn der Pull Request Änderungen an Abhängigkeiten enthält, kannst du mithilfe der Abhängigkeitsüberprüfung für eine Manifest- oder Sperrdatei feststellen, was geändert wurde und ob die Änderungen Sicherheitsrisiken einführen. Weitere Informationen findest du unter „[Überprüfen von Abhängigkeitsänderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)“.

{% data reusables.repositories.changed-files %}

1. Zeige rechts neben dem Header für eine Manifest- oder Sperrdatei den Abhängigkeitsreview an, indem du auf die Rich-Diff-Schaltfläche **{% octicon "file" aria-label="The rich diff icon" %}** klickst.

   ![Die Rich-Diff-Schaltfläche](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## Datei als „gesehen“ markieren

Wenn du den Review einer Datei abgeschlossen hast, kannst du sie als „gesehen“ markieren, um sie auszublenden. Falls die Datei nach deiner Überprüfung geändert wird, wird die Markierung aufgehoben.

{% data reusables.repositories.changed-files %}
2. Aktiviere rechts neben dem Header der überprüften Datei das Kontrollkästchen **Gesehen**.

   ![Kontrollkästchen „Viewed“ (Gesehen)](/assets/images/help/pull_requests/viewed-checkbox.png)

## Review absenden

Wenn du den Review aller von Dir im Pull Request einzuschließenden Dateien abgeschlossen hast, sende den Review ab.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. Wähle die Art des Review aus, den du absenden möchtest:

   ![Optionsfelder mit Review-Optionen](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - Wähle **Kommentar** aus, um ein allgemeines Feedback abzugeben, ohne die Änderungen explizit zu genehmigen oder weitere Änderungen anzufordern.
    - Wähle **Genehmigen** aus, um dein Feedback abzusenden und das Zusammenführen der im Pull Request vorgeschlagenen Änderungen zu genehmigen.
    - Wähle **Änderungen anfordern** aus, um Feedback abzusenden, auf das eingegangen werden muss, bevor der Pull Request zusammengeführt werden kann.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Weitere Informationsquellen

- [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)
- „[Filtern von Pull Requests nach Reviewstatus](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)“
