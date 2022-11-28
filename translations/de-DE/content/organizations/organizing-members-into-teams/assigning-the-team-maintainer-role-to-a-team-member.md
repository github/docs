---
title: Zuweisen der Rolle des Teambetreuers zu einem Teammitglied
intro: 'Du kannst einem Teammitglied die Berechtigung erteilen, die Teammitgliedschaft und Einstellungen zu verwalten, indem du diesem die Rolle „Teambetreuer“ zuweist.'
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145125537'
---
## Informationen zu Teambetreuern

Personen mit der Rolle des Teambetreuers können Teammitglieder und Einstellungen verwalten.

- [Ändern des Namens und der Beschreibung des Teams](/articles/renaming-a-team)
- [Ändern der Sichtbarkeit des Teams](/articles/changing-team-visibility)
- [Anfordern der Hinzufügung eines untergeordneten Teams](/articles/requesting-to-add-a-child-team)
- [Anfordern der Hinzufügung oder Änderung eines übergeordneten Teams](/articles/requesting-to-add-or-change-a-parent-team)
- [Festlegen des Teamprofilbild](/articles/setting-your-team-s-profile-picture)
- [Bearbeiten von Teamdiskussionen](/articles/managing-disruptive-comments/#editing-a-comment)
- [Löschen von Teamdiskussionen](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Hinzufügen von Organisationsmitgliedern zum Team](/articles/adding-organization-members-to-a-team)
- [Entfernen von Organisationsmitgliedern aus dem Team](/articles/removing-organization-members-from-a-team)
- Entfernen der Zugriffsberechtigungen des Teams für Repositorys
- [Verwalten der Code Review-Zuweisung für das Team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [Verwalten geplanter Erinnerungen für Pull Requests](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Ein Organisationsmitglied zum Team-Betreuer ernennen

Damit du ein Organisationsmitglied zum Teambetreuer hochstufen kannst, muss die Person bereits Mitglied des Teams sein.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. Wähle die Person(en) aus, die du zum Team-Betreuer ernennen möchtest.
![Kontrollkästchen neben dem Organisationsmitglied](/assets/images/help/teams/team-member-check-box.png)
5. Klicke oberhalb der Liste der Teammitglieder auf das Dropdownmenü und dann auf **Rolle ändern...**. ![Dropdownmenü mit Option zum Ändern der Rolle](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Wähle eine neue Rolle aus, und klicke auf **Rolle ändern**.
![Optionsfelder für die Rollen „Betreuer“ oder „Mitglied“](/assets/images/help/teams/team-role-modal.png)
