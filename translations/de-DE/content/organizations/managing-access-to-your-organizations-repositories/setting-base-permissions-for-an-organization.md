---
title: Festlegen von Basisberechtigungen für eine Organisation
intro: Du kannst Basisberechtigungen für die Repositorys festlegen, die einer Organisation gehören.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179927"
---
## Über Basisberechtigungen für eine Organisation

Du kannst Basisberechtigungen festlegen, die für alle Mitglieder einer Organisation gelten, wenn sie auf eines der Repositorys der Organisation zugreifen. Basisberechtigungen gelten nicht für externen Mitarbeiter.

{% ifversion fpt or ghec %} Standardmäßig verfügen Mitglieder einer Organisation über Berechtigungen zum **Lesen** für die Repositorys der Organisation. {% endif %}

Wenn jemand mit Administratorberechtigungen auf die Repositorys einer Organisation einem Mitglied eine höhere Berechtigungsstufe für das Repository gewährt, überschreibt die höhere Berechtigungsstufe die Basisberechtigung.

{% ifversion custom-repository-roles %} Wenn du eine benutzerdefinierte Repositoryrolle mit einer geerbten Rolle erstellt hast, die eine niedrigere Zugriffsberechtigung als die Basisberechtigungen deiner Organisation hat, werden alle Mitglieder, die dieser Rolle zugewiesen sind, standardmäßig auf die Basisberechtigungen der Organisation statt auf die geerbte Rolle festgelegt. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% endif %}

## Basisberechtigungen festlegen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Wähle unter „Base permissions" (Basisberechtigungen) das Dropdownmenü, um neue Basisberechtigungen auszuwählen.
  ![Neue Berechtigungsstufe aus der Dropdownliste der Basisberechtigungen auswählen](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Überprüfen der Änderungen. Klicke zum Bestätigen auf **Ändern der Standardberechtigung in „PERMISSION“**.
  ![Überprüfen und Bestätigen der Änderung der Basisberechtigungen](/assets/images/help/organizations/base-permissions-confirm.png)

## Weiterführende Themen

- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
