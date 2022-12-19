---
title: Team innerhalb der Hierarchie Ihrer Organisation verschieben
intro: Team-Betreuer und Organisationsinhaber können ein Team einem übergeordneten Team unterordnen oder das übergeordnete Team eines untergeordneten Teams ändern oder entfernen.
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125505'
---
Organisationsinhaber können das übergeordnete Team jedes Teams ändern. Team-Betreuer können das übergeordnete Team eines Teams ändern, wenn sie sowohl im untergeordneten als auch im übergeordneten Team Betreuer sind. Team-Betreuer ohne Betreuer-Berechtigungen im untergeordneten Team können das Hinzufügen eines übergeordneten oder untergeordneten Teams anfordern. Weitere Informationen findest du unter [Anfordern der Hinzufügung oder Änderung eines übergeordneten Teams](/articles/requesting-to-add-or-change-a-parent-team) und [Anfordern des Hinzufügens eines untergeordneten Teams](/articles/requesting-to-add-a-child-team).

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Tipps:**
- Du kannst das übergeordnete Team eines Teams nicht zu einem nichtöffentlichen Team ändern. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams).
- Du kannst ein übergeordnetes Team nicht unterhalb eines seiner untergeordneten Teams einordnen.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Klicke in der Liste der Teams auf den Namen des Teams, dessen übergeordnetes Team Du ändern möchtest.
  ![Liste der Teams der Organisation](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Verwende das Dropdownmenü, um ein übergeordnetes Team auszuwählen, oder wähle **Ausgewählten Wert löschen**, um ein vorhandenes übergeordnetes Team zu entfernen.
  ![Dropdownmenü mit einer Liste der Organisationsteams](/assets/images/help/teams/choose-parent-team.png)
7. Klicken Sie auf **Aktualisieren**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Klicke auf **Neues übergeordnetes Team bestätigen**.
  ![Modales Feld mit Informationen zu den Änderungen an den Berechtigungen für den Repositoryzugriff](/assets/images/help/teams/confirm-new-parent-team.png)

## Weiterführende Themen

- [Informationen zu Teams](/articles/about-teams)
