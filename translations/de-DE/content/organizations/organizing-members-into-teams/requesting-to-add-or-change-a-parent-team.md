---
title: Hinzufügen oder Ändern eines übergeordneten Teams anfordern
intro: 'Wenn du in einem Team über Betreuer-Berechtigungen verfügst, kannst du die Verschachtelung deiner Teams innerhalb der Hierarchie deiner Organisation unter einem übergeordneten Team anfordern.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880468'
---
Wenn Du das Hinzufügen oder die Änderung Deines übergeordneten Teams anforderst, wird an die Betreuer dieses Teams eine Anfrage gesendet. Sobald ein Betreuer des neuen übergeordneten Teams Deiner Anfrage zustimmt, wird Dein Team innerhalb der Hierarchie Deiner Organisation unter diesem Team eingeordnet.

Wenn Du Organisationsinhaber bist oder über Team-Betreuer-Berechtigungen sowohl im untergeordneten als auch im übergeordneten Team verfügst, kannst Du das übergeordnete Team auch ohne Anforderung einer Genehmigung hinzufügen oder Dein übergeordnetes Team direkt auf der Einstellungsseite Deines Teams ändern. Weitere Informationen findest du unter [Verschieben eines Teams in der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy).

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Klicke in der Teamliste auf den Namen des Teams, dem Du Dein Team unterordnen möchtest.
  ![Liste der Teams der Organisation](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Klicke unter „Parent team“ (Übergeordnetes Team) im Dropdownmenü „Select parent team“ (Übergeordnetes Team auswählen) auf den Namen des neuen übergeordneten Teams.
  ![Dropdownmenü mit einer Liste der Organisationsteams](/assets/images/help/teams/choose-parent-team.png)
7. Klicke auf **Änderungen speichern**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Klicke auf **Änderungen bestätigen**, um eine Anfrage zum Hinzufügen oder Ändern des deinem Team übergeordneten Elements zu senden.
  ![Modales Feld mit Informationen zu den Änderungen an den Berechtigungen für den Repositoryzugriff](/assets/images/help/teams/confirm-new-parent-team.png)

## Weiterführende Themen

- [Informationen zu Teams](/articles/about-teams)
- [Verschieben eines Teams innerhalb der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy)
- [Anfordern des Hinzufügens eines untergeordneten Teams](/articles/requesting-to-add-a-child-team)
