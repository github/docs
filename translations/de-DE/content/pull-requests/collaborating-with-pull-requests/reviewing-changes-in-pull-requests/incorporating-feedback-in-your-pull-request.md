---
title: Feedback in Deinen Pull Request aufnehmen
intro: 'Wenn Reviewer Änderungen in einem Pull Request vorschlagen, kannst du diese Änderungen automatisch in den Pull Request aufnehmen oder einen Issue öffnen, um Vorschläge außerhalb des Geltungsbereichs zu verfolgen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133866'
---
## Umsetzung von vorgeschlagenen Änderungen

Andere Personen können spezifische Änderungen für Deinen Pull Request vorschlagen. Du kannst diese vorgeschlagenen Änderungen direkt in einem Pull Request anwenden, wenn Du Schreibzugriff auf das Repository hast. Wenn der Pull Request von einem Fork erstellt wurde und der Autor Bearbeitungen durch Betreuer zugelassen hat, kannst Du vorgeschlagene Änderungen auch dann anwenden, wenn Du Schreibzugriff auf das vorgelagerte Repository besitzt. Weitere Informationen findest du unter [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) und [Zulassen von Änderungen an einem aus einem Fork erstellten Pull Request-Branch](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

Um schnell mehrere vorgeschlagene Änderungen in einem einzigen Commit zu implementieren, kannst Du die vorgeschlagenen Änderungen auch als Stapel anwenden. Beim Anwenden einer vorgeschlagenen Änderungen oder eines Stapels an vorgeschlagenen Änderungen wird ein einzelner Commit auf dem Vergleichsbranch des Pull Requests erstellt.

Jede Person, die eine der Änderungen des Commits vorgeschlagen hat, wird Co-Autor des Commits. Die Person, die die vorgeschlagenen Änderungen übernimmt, wird Co-Autor und Beitragender des Commits. Weitere Informationen zum Benennungscommitter in Git findest du unter [Git-Grundlagen – Anzeigen des Commitverlaufs](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) auf der Buchwebsite _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, auf den Du eine vorgeschlagene Änderung anwenden möchtest.
3. Navigiere zur ersten vorgeschlagenen Änderung, die Du anwenden möchtest.
    - Um die Änderung in ihrem eigenen Commit anzuwenden, klicke auf **Vorschlag committen**.
  ![Schaltfläche „Vorschlag committen“](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Um den Vorschlag zu einem Batch mit Änderungen hinzuzufügen, klicke auf **Vorschlag zu Batch hinzufügen**. Füge alle anderen vorgeschlagenen Änderungen hinzu, die Du in einen einzelnen Commit einfügen möchtest. Wenn du mit dem Hinzufügen der vorgeschlagenen Änderungen fertig bist, klicke auf **Vorschläge committen**.
  ![Schaltfläche „Vorschlag zu Batch hinzufügen“](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. Gib im Feld für die Commit-Mitteilung eine kurze, aussagekräftige Commit-Mitteilung ein, die die Änderung beschreibt, die Du an der Datei oder den Dateien vorgenommen hast.
![Feld für Commitnachricht](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Klicke auf **Änderungen committen**.
![Schaltfläche „Änderungen committen“](/assets/images/help/pull_requests/commit-changes-button.png)

## Erneutes Anfordern eines Reviews

{% data reusables.pull_requests.re-request-review %}

## Öffnen eines Issue für Vorschläge außerhalb des Geltungsbereichs

Wenn jemand Änderungen an Deinem Pull Request vorschlägt und die Änderungen nicht in den Pull-Request-Geltungsbereich fallen, kannst Du einen neuen Issue öffnen, um das Feedback zu verfolgen. Weitere Informationen findest du unter [Einen Issue aus einem Kommentar öffnen](/github/managing-your-work-on-github/opening-an-issue-from-a-comment).

## Weiterführende Themen

- [Informationen zu Pull Request-Reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
- [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
- [Anfordern eines Pull Request-Reviews](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)
- [Öffnen eines Issues aus einem Kommentar](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)
