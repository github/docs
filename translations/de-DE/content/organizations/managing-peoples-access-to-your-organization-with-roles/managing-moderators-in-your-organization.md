---
title: Verwalten von Moderatoren in deiner Organisation
intro: 'Du kannst einer Person oder einem Team in deiner Organisation die Möglichkeit geben, den Zugriff zu blockieren und einzuschränken, indem du die Moderatorenrolle entsprechend zuweist.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076711'
---
## Informationen zu Organisationsmoderatoren

Gelegentlich ist es notwendig, einen Mitwirkenden zu sperren oder Interaktionsbeschränkungen für deine Organisation oder für einzelne Repositorys einzurichten. Als Organisationsbesitzer kannst du diese Aufgaben ausführen, aber vielleicht möchtest du diese Aufgaben an andere Mitglieder deiner Organisation delegieren. Hierzu kannst du einem Organisationsmitglied oder einem Team die Rolle „Moderator“ zuweisen.

Organisationsmoderatoren können folgende Aufgaben ausführen:
* Sperren und Entsperren von Benutzern in der Organisation Weitere Informationen findest du unter [Sperren eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
* Verwalten der Limits für die Organisationsinteraktion Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization).
* Verwalten der Limits für die Repositoryinteraktion Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
* Ausblenden von Kommentaren in allen öffentlichen Repositorys im Besitz der Organisation Weitere Informationen findest du unter [Verwalten von störenden Kommentaren](/communities/moderating-comments-and-conversations/managing-disruptive-comments).

Wenn du jemanden als Organisationsmoderator festlegst, erhält der betreffende Benutzer keine weiteren als die oben aufgeführten Fähigkeiten. Wenn jemand zum Beispiel nur über Lesezugriff für ein Repository verfügt, erhält er keinen Schreibzugriff, wenn er als Moderator festgelegt wird.

Du kannst bis zu 10 Einzelpersonen oder Teams als Moderatoren hinzufügen. Wenn du bereits 10 Einzelpersonen und/oder Teams als Benutzer zugewiesen hast und weitere hinzufügen möchtest, kannst du Personen in einem Moderatorenteam gruppieren und dieses dann verwenden, um eine oder mehrere der vorhandenen Zuweisungen zu ersetzen. Weitere Informationen findest du unter [Erstellen eines Teams](/organizations/organizing-members-into-teams/creating-a-team).

## Hinzufügen eines Organisationsmoderators

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Wähle im Abschnitt „Zugriff“ in der Seitenleiste **{% octicon "report" aria-label="The report icon" %} Moderation** aus, und klicke dann auf **Moderatoren**.
1. Suche unter **Moderatoren** die Person oder das Team, der bzw. dem du die Moderatorenrolle zuweisen möchtest, und wähle sie/es aus. Alle von dir ausgewählten Personen oder Teams werden in einer Liste unterhalb der Suchleiste angezeigt. 
  ![Suchfeld und Liste der Moderatoren](/assets/images/help/organizations/add-moderators.png)


## Entfernen eines Organisationsmoderators

Befolge die oben beschriebenen Schritte 1–3, und klicke dann auf **Moderator entfernen** neben der Person oder dem Team, die/das du als Moderator entfernen möchtest.
