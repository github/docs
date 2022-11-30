---
title: Benutzer aus Teams und aus Organisationen entfernen
intro: 'Wenn ein Mitglied deiner Organisation nicht mehr auf bestimmte Repositorys zugreifen muss, kannst du es aus dem Team entfernen, das diesen Zugriff ermöglicht. Wenn ein Mitglied deiner Organisation nicht mehr auf Repositorys zugreifen muss, die der Organisation gehören, kannst du es aus der Organisation entfernen.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104743'
---
Nur Inhaber oder Teamadministratoren können Organisationsmitglieder entfernen. Wenn ein Benutzer aus einem Team oder aus einer Organisation entfernt wird, bleiben seine Issues, Pull Requests und Kommentare in den Repositorys der Organisation erhalten und sind ihm weiterhin zugeordnet.

{% warning %}

**Warnung**: Wenn du einen Benutzer aus einer Organisation entfernst, verliert dieser den Zugriff auf private Forks, über die er für die **privaten Repositorys** deiner Organisation verfügt. Er besitzt ggf. weiterhin lokale Kopien dieser Forks. Allerdings ist er oder sie jedoch nicht in der Lage, sie mit den Repositorys deiner Organisation zu synchronisieren. Du bist dafür verantwortlich, dass die Personen, denen du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen. Wenn der aus deiner Organisation entfernte Benutzer ein Organisationsmitglied war, kann sein Zugriff auf die privaten Forks der Organisationsrepositorys wiederhergestellt werden, wenn der Benutzer innerhalb von drei Monaten, nachdem er aus einer Organisation entfernt wurde, [wieder als Organisationsmitglied eingesetzt wird](/articles/reinstating-a-former-member-of-your-organization).

{% endwarning %}

## Teammitglied entfernen

{% ifversion ghes %}

{% warning %}

**Hinweis:** {% data reusables.enterprise_management_console.badge_indicator %}

Wende dich an deinen LDAP-Administrator, um ein vorhandenes Mitglied eines mit einer LDAP-Gruppe synchronisierten Teams zu entfernen.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Wähle die Person(en) aus, die du entfernen möchtest.
![Kontrollkästchen neben dem Organisationsmitglied](/assets/images/help/teams/team-member-check-box.png)
5. Klicke im Dropdownmenü über der Liste der Teammitglieder auf **Aus Team entfernen**.
![Dropdownmenü mit Option zum Ändern der Rolle](/assets/images/help/teams/bulk-edit-drop-down.png)

## Benutzer aus einer Organisation entfernen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Aktiviere das Kontrollkästchen neben dem Namen des Benutzers, der aus der Organisation entfernt werden soll.
![Kontrollkästchen zum Entfernen des Benutzers](/assets/images/help/organizations/Organization-remove-user.png)
5. Klicke im oberen Bereich der Seite unterhalb des Namens der Organisation auf **Aus Organisation entfernen**.
![Schaltfläche „Aus Organisation entfernen“](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
