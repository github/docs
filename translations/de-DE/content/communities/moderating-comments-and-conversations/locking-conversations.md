---
title: Unterhaltungen sperren
intro: 'Repository-Inhaber und -Mitarbeiter sowie Personen mit Schreibzugriff auf ein Repository können Unterhaltungen zu Issues, Pull-Requests und Commits dauerhaft oder temporär sperren, um eine hitzige Diskussion zu entschärfen.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090241'
---
Du solltest eine Unterhaltung sperren, wenn die gesamte Unterhaltung nicht konstruktiv ist oder gegen die Verhaltensregeln deiner Community{% ifversion fpt or ghec %} oder gegen die [Community-Richtlinien](/free-pro-team@latest/github/site-policy/github-community-guidelines) von GitHub{% endif %} verstößt. Wenn Du eine Unterhaltung sperrst, kannst Du auch einen Grund dafür angeben, der dann öffentlich sichtbar ist.

Das Sperren einer Unterhaltung erstellt ein Zeitleistenereignis, das für alle Benutzer mit Lesezugriff auf das Repository sichtbar ist. Der Benutzername der Person, die die Unterhaltung gesperrt hat, ist jedoch nur für Benutzer mit Schreibzugriff auf das Repository zu sehen. Für Personen ohne Schreibzugriff ist das Zeitleistenereignis anonymisiert.

![Anonymisiertes Zeitleistenereignis für eine gesperrte Unterhaltung](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Solange eine Unterhaltung gesperrt ist, können nur [Personen mit Schreibzugriff](/articles/repository-permission-levels-for-an-organization/) sowie [Besitzer und Projektmitarbeiter von Repositorys](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) Kommentare hinzufügen, ausblenden und löschen.

Um nach gesperrten Unterhaltungen in einem nicht archivierten Repository zu suchen, kannst du die Qualifizierer `is:locked` und `archived:false` verwenden. In archivierten Repositorys sind Unterhaltungen automatisch gesperrt. Weitere Informationen findest du unter [Durchsuchen von Issues und Pull Requests](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked).

1. Verfasse optional einen Kommentar, in dem Du erklärst, weshalb Du die Unterhaltung sperrst.
2. Klicke am rechten Rand des Issues bzw. Pull Requests oder über dem Kommentarfeld auf der Commitseite auf **Unterhaltung sperren**.
![Link „Unterhaltung sperren“](/assets/images/help/repository/lock-conversation.png)
3. Optional kannst Du einen Grund für das Sperren der Unterhaltung auswählen.
![Menü „Grund für das Sperren einer Unterhaltung“](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Lies die Informationen zum Sperren von Unterhaltungen, und klicke auf **Unterhaltung zu diesem Issue sperren**, **Unterhaltung zu diesem Pull Request sperren** oder **Unterhaltung zu diesem Commit sperren**.
![Dialogfeld „Bestätigen der Sperre mit Begründung“](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Wenn du die Unterhaltung entsperren möchtest, klicke auf **Unterhaltung entsperren**.
![Link „Unterhaltung entsperren“](/assets/images/help/repository/unlock-conversation.png)

## Weiterführende Themen

- [Einrichten deines Projekts für hilfreiche Beiträge](/communities/setting-up-your-project-for-healthy-contributions)
- [Verwenden von Vorlagen zur Förderung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [Verwalten störender Kommentare ](/communities/moderating-comments-and-conversations/managing-disruptive-comments){% ifversion fpt or ghec %}
- [Aufrechterhalten der Sicherheit auf {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)
- [Missbrauch oder Spam melden](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Interaktionen in deinem Repository begrenzen](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) {% endif %}
