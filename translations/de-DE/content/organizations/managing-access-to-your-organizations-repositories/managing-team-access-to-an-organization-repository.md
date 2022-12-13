---
title: Den Teamzugriff auf ein Repository einer Organisation verwalten
intro: Du kannst einem Team Zugriff auf ein Repository gewähren, einem Team den Zugriff auf ein Repository entziehen oder die Berechtigungsebene eines Teams für ein Repository ändern.
redirect_from:
- /articles/managing-team-access-to-an-organization-repository-early-access-program
- /articles/managing-team-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876901"
---
Personen mit Administratorzugriff auf ein Repository können den Zugriff eines Teams auf das Repository verwalten. Teambetreuer*innen können einem Team den Zugriff auf ein Repository entziehen, wenn das Team direkten Zugriff auf ein Repository hat. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, können Teambetreuer*innen entscheiden, die aktuelle Berechtigung zurückzusetzen, damit sie der Berechtigung des übergeordneten Teams entsprechen.

{% warning %}

**Warnungen:**
- Du kannst die Berechtigungsebene eines Teams ändern, wenn das Team direkten Zugriff auf ein Repository hat. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, musst Du den Zugriff des übergeordneten Teams auf das Repository ändern.
- Wenn Du einem übergeordneten Team den Zugriff auf ein Repository gewährst oder entziehst, erhalten oder verlieren auch die untergeordneten Teams den Zugriff auf das Repository. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams).

{% endwarning %}

## Einem Team Zugriff auf ein Repository gewähren

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Du kannst einem Team Zugriff auf ein Repository gewähren oder die Zugriffsebene eines Teams für ein Repository in deinen Repositoryeinstellungen ändern. Weitere Informationen findest du unter [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person). {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Klicke über der Repositoryliste auf **Repository hinzufügen**.
  ![Schaltfläche zum Hinzufügen eines Repositorys](/assets/images/help/organizations/add-repositories-button.png)
6. Gib den Namen eines Repositorys ein, und klicke anschließend auf **Repository zu Team hinzufügen**.
  ![Repository-Suchfeld](/assets/images/help/organizations/team-repositories-add.png)
7. Optional kannst Du im Dropdownmenü rechts neben dem Repository-Namen eine andere Berechtigungsebene für das Team auswählen.
  ![Dropdownmenü mit Zugriffsebene für Repository](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## Einem Team den Zugriff auf ein Repository entziehen

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Du kannst einem Team den Zugriff auf ein Organisationsrepository in deinen Repositoryeinstellungen entziehen. Weitere Informationen findest du unter [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person).

Wenn ein Team über Direktzugriff auf ein Repository verfügt, kannst du diesem Team den Zugriff auf das Repository entziehen. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, musst Du das Repository vom übergeordneten Team entfernen, um es auch von den untergeordneten Teams zu entfernen.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

Du kannst einem Team den Zugriff auf ein Repository entziehen, wenn das Team direkten Zugriff auf ein Repository hat. Wenn der Zugriff des Teams auf das Repository von einem übergeordneten Team geerbt wird, musst Du das Repository vom übergeordneten Team entfernen, um es auch von den untergeordneten Teams zu entfernen.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Wähle alle Repositorys aus, die Du vom Team entfernen möchtest.
  ![Liste der Teamrepositorys mit aktivierten Kontrollkästchen für einige Repositorys](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Klicke im Dropdownmenü über der Repositoryliste auf **Aus Team entfernen**.
  ![Dropdownmenü mit Option zum Entfernen eines Repositorys für ein Team](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Prüfe die zum Entfernen ausgewählten Repositorys, und klicke anschließend auf **Repositorys entfernen**.
  ![Modalfeld mit einer Liste der Repositorys, auf die das Team nicht mehr zugreifen kann](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## Weiterführende Themen

- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
