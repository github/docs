---
title: Einen Pull Request kommentieren
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 'Nachdem du einen Pull Request in einem Repository geöffnet hast, können Mitarbeiter und Teammitglieder den Vergleich der Dateien zwischen den zwei festgelegten Branches kommentieren oder allgemeine Kommentare zum Gesamtprojekt abgeben.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578956'
---
## Informationen zu Pull Requests

Auf der Registerkarte **Unterhaltung** eines Pull Requests kannst du allgemeine Kommentare, Fragen oder Vorschläge posten. Du kannst auch Änderungen vorschlagen, die der Autor des Pull Requests direkt aus deinem Kommentar übernehmen kann.

![Pull-Request-Unterhaltung](/assets/images/help/pull_requests/conversation.png)

Du kannst auf der Registerkarte **Geänderte Dateien** eines Pull Requests auch bestimmte Abschnitte einer Datei kommentieren. Dies kann in Form von einzelnen Zeilenkommentaren oder im Rahmen eines [Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) erfolgen. Zeilenkommentare sind eine großartige Möglichkeit, Fragen zur Implementierung zu besprechen oder dem Autor Feedback zu geben.

Weitere Informationen zum Hinzufügen von Zeilenkommentaren zu einem Pull-Request-Review findest du unter [Überprüfen der vorgeschlagenen Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% note %}

**Hinweis**: Wenn du per E-Mail auf einen Pull Request antwortest, wird dein Kommentar auf der Registerkarte **Unterhaltung** hinzugefügt und ist nicht Teil eines Pull Request-Reviews.

{% endnote %}

Um auf einen vorhandenen Zeilenkommentar zu antworten, musst du auf der Registerkarte **Unterhaltung** oder **Geänderte Dateien** zu dem Kommentar navigieren und unter diesem einen weiteren Zeilenkommentar hinzufügen.

{% tip %}

**Tipps:**
- Pull Request-Kommentare unterstützen dieselbe [Formatierung](/categories/writing-on-github) wie reguläre Kommentare zu {% data variables.product.product_name %}, z. B. @mentions, Emojis und Verweise.
- Du kannst Kommentaren zu Pull Requests auf der Registerkarte **Geänderte Dateien** Reaktionen hinzufügen.

{% endtip %}

## Zeilenkommentare zu einem Pull Request hinzufügen

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, bei dem du Zeilenkommentare einfügen möchtest.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. Wenn du fertig bist, klicke auf **Einzelnen Kommentar hinzufügen**.
  ![Inline-Kommentarfenster](/assets/images/help/commits/inline-comment.png)

Alle, die den Pull Request oder das Repository beobachten, erhalten eine Benachrichtigung über deinen Kommentar.

{% data reusables.pull_requests.resolving-conversations %}

## Weiterführende Themen

- [Schreiben auf GitHub](/github/writing-on-github)" {% ifversion fpt or ghec %}- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)" {% endif %}
