---
title: Hinzufügen eines untergeordneten Teams anfordern
intro: 'Wenn du in einem Team über Betreuer-Berechtigungen verfügst, kannst du die Verschachtelung eines vorhandenen Teams innerhalb der Hierarchie deiner Organisation unter deinem Team anfordern.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878963'
---
Wenn Du das Hinzufügen eines untergeordneten Teams anforderst, wird an die Betreuer dieses Teams eine Anfrage gesendet. Sobald ein Betreuer dieses Teams Deiner Anfrage zustimmt, wird das Team innerhalb der Hierarchie Deiner Organisation unter Deinem Team eingeordnet.

Wenn Du Organisationsinhaber bist oder über Team-Betreuer-Berechtigungen sowohl im untergeordneten als auch im übergeordneten Team verfügst, kannst Du das untergeordnete Team auch ohne Anforderung einer Genehmigung hinzufügen oder das übergeordnete Team des untergeordneten Teams direkt auf der Einstellungsseite des untergeordneten Teams ändern. Weitere Informationen findest du unter [Verschieben eines Teams in der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy).

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Klicke in der Teamliste auf den Namen des Teams, dem Du das untergeordnete Team hinzufügen möchtest.
  ![Liste der Teams der Organisation](/assets/images/help/teams/click-team-name.png)
5. Klicke oben auf der Teamseite auf {% octicon "people" aria-label="The people icon" %} **Teams**.
  ![Registerkarte „Teams" auf der Teamseite](/assets/images/help/teams/team-teams-tab.png)
6. Klicke auf **Team hinzufügen**.
  ![Schaltfläche zum Hinzufügen eines Teams auf der Teamseite](/assets/images/help/teams/add-a-team.png)
7. Gib den Namen des Teams ein, das Du als untergeordnetes Team hinzufügen möchten, und wähle es aus dem Dropdownmenü aus.
  ![Textfeld für die Eingabe und Dropdownmenü zum Auswählen des untergeordneten Teams](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. Klicke auf **Änderungen bestätigen**, um eine Anfrage zum Hinzufügen des untergeordneten Teams zu senden.
  ![Modales Feld mit Informationen zu den Änderungen an den Berechtigungen für den Repositoryzugriff](/assets/images/help/teams/confirm-new-parent-team.png)

## Weiterführende Themen

- [Informationen zu Teams](/articles/about-teams)
- [Team innerhalb der Hierarchie deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy)
- [Hinzufügen oder Ändern eines übergeordneten Teams anfordern](/articles/requesting-to-add-or-change-a-parent-team)
