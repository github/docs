---
title: Störende Kommentare verwalten
intro: 'Du kannst Kommentare zu Issues, Pull Requests und Commits {% ifversion fpt or ghec %}ausblenden, bearbeiten{% else %}bearbeiten{% endif %} oder löschen.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105423'
---
## Einen Kommentar ausblenden

{% ifversion fpt or ghec %}Organisationsmoderatoren und alle anderen Personen {% else %}Personen{% endif %} mit Schreibzugriff auf ein Repository können Kommentare zu Issues, Pull Requests und Commits einblenden.

Wenn ein Kommentar nicht zum Thema passt, veraltet oder gelöst ist, kannst du ihn ausblenden, damit die Diskussion zielgerichtet bleibt oder die Navigation sowie der Review eines Pull Requests vereinfacht wird. Ausgeblendete Kommentare werden minimiert, aber Personen mit Lesezugriff auf das Repository können sie einblenden.

![Minimierter Kommentar](/assets/images/help/repository/hidden-comment.png)

1. Navigiere zum Kommentar, den du ausblenden möchtest.
2. Klicke rechts oben im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Ausblenden**.
  ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden und Löschen](/assets/images/help/repository/comment-menu.png)
3. Wähle im Dropdownmenü „Choose a reason" (Grund auswählen) einen Grund für das Ausblenden des Kommentars aus. Klicke dann auf **Kommentar ausblenden**.
  {% ifversion fpt or ghec %} ![Dropdownmenü zur Auswahl des Grunds für das Ausblenden des Kommentars](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![Dropdownmenü zur Auswahl des Grunds für das Ausblenden des Kommentars](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## Einen ausgeblendeten Kommentar wieder anzeigen

{% ifversion fpt or ghec %}Organisationsmoderatoren und alle anderen Personen {% else %}Personen{% endif %} mit Schreibzugriff auf ein Repository können Kommentare zu Issues, Pull Requests und Commits ausblenden.

1. Navigiere zu dem Kommentar, den du wieder anzeigen möchten.
2. Klicke rechts oben im Kommentar auf **{% octicon "fold" aria-label="The fold icon" %} Kommentar anzeigen**.
   ![Text „Kommentar anzeigen“](/assets/images/help/repository/hidden-comment-show.png)
3. Klicke auf der rechten Seite des angezeigten Kommentars auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Wieder anzeigen**.
   ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Wiederanzeigen und Löschen](/assets/images/help/repository/comment-menu-hidden.png)

## Einen Kommentar bearbeiten

Jeder mit Schreibzugriff auf ein Repository kann Kommentare zu Issues, Pull Requests und Commits bearbeiten.

Es ist angemessen, einen Kommentar zu bearbeiten und Inhalte zu entfernen, die nicht zur Unterhaltung beitragen und gegen den Verhaltenskodex{% ifversion fpt or ghec %} deiner Community oder die [Communityrichtlinien](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %} von GitHub verstoßen.

Mitunter kann es sinnvoll sein, Bearbeitungen und ihre Begründung deutlich anzugeben.

Das heißt, dass jede Person mit Lesezugriff auf ein Repository den Bearbeitungsverlauf eines Kommentars einsehen kann. Das Dropdownmenü **Bearbeitet** oben im Kommentar enthält einen Verlauf der Bearbeitungen mit Benutzer und Zeitstempel jeder Bearbeitung.

![Kommentar mit hinzugefügtem Hinweis, dass Inhalte redigiert wurden](/assets/images/help/repository/content-redacted-comment.png)

## Redigieren sensibler Informationen

Verfasser von Kommentaren und Personen mit Schreibzugriff auf ein Repository können auch vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen. Weitere Informationen findest du unter [Nachverfolgen von Änderungen in einem Kommentar](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment).

1. Navigiere zu dem Kommentar, den du bearbeiten möchtest.
2. Klicke rechts oben im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Bearbeiten**.
  ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden, Löschen und Melden](/assets/images/help/repository/comment-menu.png)
3. Lösche im Kommentarfenster den Inhalt, den du entfernen möchtest, und gib dann `[REDACTED]` ein, um ihn zu ersetzen.
  ![Kommentarfenster mit redigiertem Inhalt](/assets/images/help/issues/redacted-content-comment.png)
4. Gib unten im Kommentar eine Notiz ein, in der du auf die Bearbeitung hinweist und optional den Grund dafür nennst.
  ![Kommentarfenster mit hinzugefügtem Hinweis, dass Inhalte redigiert wurden](/assets/images/help/issues/note-content-redacted-comment.png)
5. Klicke auf **Kommentar aktualisieren**.

## Einen Kommentar löschen

Personen mit Schreibzugriff auf ein Repository können Kommentare zu Issues, Pull Requests und Commits löschen. Organisationsinhaber, Team-Betreuer und die Verfasser des Kommentars können auch einen Kommentar auf einer Teamseite löschen.

Wenn ein Kommentar auch Inhalte aufweist, die einen konstruktiven Beitrag zur Unterhaltung im Issue oder Pull Request darstellen, kannst du den Kommentar bearbeiten, anstatt ihn komplett zu löschen.

Das Löschen eines Kommentars ist die letzte Option für Dich als Moderator. Es ist angemessen, einen Kommentar zu löschen, wenn der gesamte Kommentar keinen konstruktiven Inhalt zu einer Unterhaltung beiträgt und gegen den Verhaltenskodex{% ifversion fpt or ghec %} deiner Community oder die [Communityrichtlinien](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %} von GitHub verstößt.

Das Löschen eines Kommentars erstellt ein Zeitleistenereignis, das für alle Benutzer mit Lesezugriff auf das Repository sichtbar ist. Der Benutzername der Person, die den Kommentar gelöscht hat, ist jedoch nur für Benutzer mit Schreibzugriff auf das Repository zu sehen. Für Personen ohne Schreibzugriff ist das Zeitleistenereignis anonymisiert.

![Anonymisiertes Zeitleistenereignis für einen gelöschten Kommentar](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**Hinweis:** Der anfängliche Kommentar (oder Text) eines Issues oder Pull Requests kann nicht gelöscht werden. Stattdessen kannst du den Text von Issues und Pull Requests bearbeiten und dabei unerwünschte Inhalte entfernen.

{% endnote %}

### Schritte zum Löschen eines Kommentars

1. Navigiere zu dem Kommentar, den du löschen möchtest.
2. Klicke rechts oben im Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Löschen**.
  ![Horizontales 3-Punkte-Symbol und Menü zum Moderieren der Unterhaltung mit den Optionen zum Bearbeiten, Ausblenden, Löschen und Melden](/assets/images/help/repository/comment-menu.png)
3. Verfasse optional einen Kommentar mit dem Hinweis, dass und warum du einen Kommentar gelöscht hast.

{% ifversion fpt or ghec %}
## Weiterführende Themen
- [Verwalten von Moderatoren in deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization) {% endif %} 
