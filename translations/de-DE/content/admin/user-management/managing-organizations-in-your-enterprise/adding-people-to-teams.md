---
title: Hinzufügen von Personen zu Teams
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'Nach der Erstellung eines Teams können Organisationsadministrator*innen Benutzer*innen von {% data variables.product.product_location %} zum Team hinzufügen und festlegen, auf welche Repositorys sie zugreifen dürfen.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884253'
---
Bei jedem Team gibt es eigene individuell definierte [Zugriffsberechtigungen für Repositorys deiner Organisation](/articles/permission-levels-for-an-organization).

- Mitglieder mit der Inhaberrolle können Organisationsmitglieder aus allen Teams hinzufügen oder entfernen.
- Teammitglieder, die Administratorberechtigungen erteilen, können nur die Teammitgliedschaft und die Repositorys für das jeweilige Team ändern.

## Team einrichten

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## Teams zu LDAP-Gruppen (für Instanzen mit LDAP-Synchronisierung für die Benutzerauthentifizierung) zuordnen

{% data reusables.enterprise_management_console.badge_indicator %}

Um ein neues Mitglied zu einem mit einer LDAP-Gruppe synchronisierten Team hinzuzufügen, füge den Benutzer oder die Benutzerin als ein Mitglied der LDAP-Gruppe hinzu, oder wende dich an deine*n LDAP-Administrator*in.

{% endif %}
