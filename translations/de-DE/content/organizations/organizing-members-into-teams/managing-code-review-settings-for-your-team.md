---
title: Verwalten von Code-Review-Einstellungen für dein Team
intro: 'Du kannst Störfaktoren für dein Team durch die Einschränkung von Benachrichtigungen verringern, wenn dein Team aufgefordert wird, einen Pull Request zu überprüfen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
ms.openlocfilehash: eb4711251f7bebc9088ae711ba8a36dc60acba56
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108302'
---
## Informationen zu Code-Review-Einstellungen

{% ifversion only-notify-requested-members %} Damit dein Team nicht unnötig belastet wird und die Verantwortung für die Überprüfung von Pull Requests klar geregelt ist, kannst du Code-Review-Einstellungen konfigurieren.

- Teambenachrichtigungen
- Automatische Zuweisung

## Informationen zu Teambenachrichtigungen

Damit nur angeforderte Teammitglieder benachrichtigt werden, deaktiviere das Senden von Benachrichtigungen an das gesamte Team, wenn das Team aufgefordert wird, einen Pull Request zu überprüfen, sofern ein bestimmtes Mitglied dieses Teams ebenfalls zur Überprüfung angefordert wird. Dies ist besonders nützlich, wenn Teams als Codebesitzer für ein Repository konfiguriert sind, aber die am Repository Mitwirkenden oft eine bestimmte Person kennen, die der passende Reviewer für ihren Pull Request wäre. Weitere Informationen findest du unter [Informationen zu Codebesitzern](/github/creating-cloning-and-archiving-repositories/about-code-owners).

## Informationen zur automatischen Zuweisung
{% endif %}

Wenn du die automatische Zuweisung aktivierst, wird bei jeder Anforderung an dein Team zum Überprüfen eines Pull Request das Team als Reviewer entfernt und eine bestimmte Untergruppe von Teammitgliedern wird an dessen Stelle zugewiesen. Code-Review-Zuweisungen erlauben es Dir zu entscheiden, ob das gesamte Team oder nur eine Teilmenge der Teammitgliedern benachrichtigt wird, wenn ein Team für einen Review angefordert wird.

Wenn Codebesitzer automatisch zur Überprüfung angefordert werden, wird das Team ebenfalls entfernt und durch Einzelpersonen ersetzt, es sei denn, eine Schutzregel für Branches ist so konfiguriert, dass eine Überprüfung von Codebesitzern erforderlich ist. Wenn eine solche Branchschutzregel vorhanden ist, kann die Teamanforderung nicht entfernt werden, sodass die einzelne Anforderung zusätzlich angezeigt wird.

### Routing-Algorithmen

Code-Review-Zuweisungen wählen und weisen Reviewer automatisch aufgrund einem von zwei möglichen Algorithmen zu. 

Der Round-Robin-Algorithmus wählt die Prüfer basierend auf den Empfängern der letzten Review-Anforderungen aus, und fokussiert auf der abwechselnden Auswahl der Mitarbeiter des Teams, unabhängig von der Anzahl ausstehenden Reviews, die die Teammitglieder momentan haben. 

Der Lastenausgleich-Algorithmus (load balance algorithm) wählt Prüfer basierend auf der Gesamtzahl ihrer neuesten Review-Anforderungen aus und berücksichtigt die Anzahl der ausstehenden Reviews jedes Mitglieds. Der Lastenausgleich-Algorithmus versucht sicherzustellen, dass jedes Teammitglied eine gleiche Anzahl von Pull Requests innerhalb eines Zeitraums von 30 Tagen überprüft.

Alle Teammitglieder, die ihren Status auf „Beschäftigt“ festgelegt haben, werden für das Review nicht ausgewählt. Wenn alle Teammitglieder beschäftigt sind, bleibt der Pull Request dem Team zugewiesen. Weitere Informationen zu Benutzerstatus findest du unter [Festlegen eines Status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status).

{% ifversion only-notify-requested-members %}
## Konfigurieren von Teambenachrichtigungen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Klicke auf der linken Seitenleiste auf **{% octicon "code-review" aria-label="The code-review icon" %} Code Review**.
{% else %}
1. Klicke auf der linken Seitenleiste auf die Schaltfläche **Code Review**
![Code Review](/assets/images/help/teams/review-button.png) {% endif %}
1. Wähle **Nur angeforderte Teammitglieder benachrichtigen**
![ Code-Review-Teambenachrichtigungen](/assets/images/help/teams/review-assignment-notifications.png) aus.
1. Klicke auf **Änderungen speichern**.
{% endif %}

## Konfigurieren der automatischen Zuweisung
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Klicke auf der linken Seitenleiste auf **{% octicon "code-review" aria-label="The code-review icon" %} Code Review**.
{% else %}
1. Klicke auf der linken Seitenleiste auf die Schaltfläche **Code Review**
![Code Review](/assets/images/help/teams/review-button.png) {% endif %}
1. Wähle **Automatische Zuweisung aktivieren** aus.
![Schaltfläche „Automatische Zuweisung“](/assets/images/help/teams/review-assignment-enable.png)
1. Benutze unter „How many team members should be assigned to review?" (Wie viele Teammitglieder sollen dem Review zugewiesen werden?) das Dropdownmenü und wähle die Anzahl der Prüfer, die jedem Pull Request zugewiesen werden sollen.
![Dropdownmenü „Anzahl der Reviewer“](/assets/images/help/teams/review-assignment-number.png)
1. Benutze unter „Routing algorithm" (Routing-Algorithmen) das Dropdownmenü und wähle den Algorithmus, den du benutzen möchtest. Weitere Informationen findest du unter [Routingalgorithmen](#routing-algorithms).
![Dropdownmenü „Routingalgorithmus“](/assets/images/help/teams/review-assignment-algorithm.png)
1. Wenn du optional bestimmte Mitglieder des Teams überspringen möchtest, wähle **Nie bestimmte Teammitglieder zuweisen** aus. Dann wähle eines oder mehrere Teammitglieder, die du immer auslassen willst.
![Kontrollkästchen und Dropdownmenü „Bestimmte Teammitglieder nie zuweisen“](/assets/images/help/teams/review-assignment-skip-members.png) {% ifversion ghes < 3.4 %}
1. Um optional nur diejenigen Teammitglieder zu informieren, die durch die Code-Review-Zuweisung für einen Pull-Request-Review ausgewählt sind, wähle unter „Benachrichtigungen“ die Option **Bei der Zuweisung einzelner Teammitglieder nicht das ganze Team benachrichtigen**.
{%- endif %} {% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. Wenn du optional Mitglieder von untergeordneten Teams als potenzielle Reviewer bei der Zuweisung von Anforderungen einschließen möchtest, wähle **Untergeordnete Teammitglieder** aus.
1. Wenn du optional alle Mitglieder zählen möchtest, deren Review bereits angefordert wurde, wähle **Anzahl vorhandener Anforderungen** aus.
1. Wenn du optional die Reviewanforderung aus dem Team entfernen möchtest, wenn du Teammitglieder zuweist, wähle **Teamreviewanforderung** aus.
{%- endif %}
1. Klicke auf **Änderungen speichern**.

## Deaktivieren der automatischen Zuweisung
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Wähle **Automatische Zuweisung aktivieren**, um das Häkchen zu entfernen.
![Schaltfläche „Code-Review-Zuweisung“](/assets/images/help/teams/review-assignment-enable.png)
1. Klicke auf **Änderungen speichern**.
