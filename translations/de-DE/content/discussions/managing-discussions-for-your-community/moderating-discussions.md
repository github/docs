---
title: Moderieren von Diskussionen
intro: 'Du kannst eine fruchtbare Zusammenarbeit fördern, indem du Kommentare als Antworten markierst, Diskussionen sperrst oder entsperrst, Issues in Diskussionen konvertierst und Kommentare, Diskussionen und Kategorien bearbeitest oder löschst, die nicht mit den {% ifversion fpt or ghec %}Verhaltensregeln deiner Community{% elsif ghes > 3.5 %} Richtlinien für Mitwirkende in deiner Organisation{% endif %} übereinstimmen.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 4d09537a3c38d2eb9ac2650c48f2c44c1b0cbd95
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164473'
---
## Informationen zum Moderieren von Diskussionen

{% data reusables.discussions.about-discussions %} Wenn du über Selektierungsberechtigungen für ein Repository verfügst, kannst du Diskussionen in diesem Repository moderieren, indem du Kommentare als Antworten markierst, Diskussionen sperrst, die nicht mehr von Nutzen sind oder der Community schaden, und Issues in Diskussionen konvertierst, wenn sich eine Idee noch in einem frühen Entwicklungsstadium befindet. Wenn du die Selektierungsberechtigung für das Quellrepository für Organisationsdiskussionen hast, kannst du auch die Diskussionen der jeweiligen Organisation moderieren.

## Markieren eines Kommentars als Antwort

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Sperren von Diskussionen

Du solltest eine Unterhaltung sperren, wenn die gesamte Unterhaltung nicht konstruktiv ist oder gegen die Verhaltensregeln deiner Community oder die [Community-Richtlinien](/free-pro-team@latest/github/site-policy/github-community-guidelines) von {% data variables.product.prodname_dotcom %} verstößt. Du kannst eine Unterhaltung auch sperren, um Kommentare zu einer Diskussion zu verhindern, die du als Ankündigung für die Community nutzen möchtest. Wenn du eine Unterhaltung sperrst, können Personen mit Schreibzugriff auf das Repository bzw. das Quellrepository für Organisationsdiskussionen weiterhin die Diskussion kommentieren.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. Klicke in der Diskussionsliste auf die Diskussion, die du sperren möchtest.
  ![Diskussion sperren](/assets/images/help/discussions/unanswered-discussion.png)
1. Klicke am rechten Rand einer Diskussion auf **Unterhaltung sperren**.
1. Lies die Informationen zum Sperren von Unterhaltungen, und klicke auf **Unterhaltung in dieser Diskussion sperren**.
1. Wenn du bereit bist, die Unterhaltung zu entsperren, klicke auf **Unterhaltung entsperren** und dann auf **Unterhaltung in dieser Diskussion entsperren**.

## Konvertieren eines Issue in eine Diskussion

Wenn du ein Issue in eine Diskussion konvertierst, wird die Diskussion automatisch mithilfe des Inhalts des Issue erstellt. Personen mit Schreibzugriff auf ein Repository oder ein Quellrepository für Organisationsdiskussionen können Issues anhand von Bezeichnungen in einem Massenvorgang konvertieren. Weitere Informationen findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions).

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. Klicke in der Issueliste auf das Issue, das du konvertieren möchtest.
1. Klicke am rechten Rand eines Issue auf **In Diskussion konvertieren**.
1. Wähle die Dropdownliste **Kategorie auswählen** aus, und klicke auf eine Kategorie für deine Diskussion.
1. Klicke auf **Verstanden, dieses Issue in eine Diskussion konvertieren**.

{% ifversion discussions-hide-comments-on-block %}
## Blockieren von Benutzer*innen für deine Organisation

Organisationsbesitzer und Moderatoren können einen Benutzer für die Organisation blockieren, wenn dessen Kommentare nicht den Verhaltensregeln der Community entsprechen. Wenn du einen Benutzer blockierst, kann dieser sich nicht mehr an Diskussionen beteiligen. Du kannst auch alle Kommentare ausblenden, die ein Benutzer in der Organisation verfasst hat. Weitere Informationen findest du unter [Sperren eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).

{% data reusables.organizations.blocking-a-user %} {% endif %}
