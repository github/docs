---
title: Zugriff auf die Projektboards Deines Benutzerkontos verwalten
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088891"
---
Ein Mitarbeiter ist eine Person, die Berechtigungen für eines Deiner Projektboards besitzt. Die Berechtigung eines Mitarbeiters ist standardmäßig der Lesezugriff. Weitere Informationen findest du unter [Berechtigungsstufen für benutzereigene Projektboards](/articles/permission-levels-for-user-owned-project-boards).

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>Mitarbeiter in ein Benutzer-Projektboard einladen

1. Navigiere zu dem Projektboard, zu dem Du einen Mitarbeiter hinzufügen möchtest.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Gib unter „Search by username, full name or email address“ (Nach Benutzernamen, vollständigem Namen oder E-Mail-Adresse suchen) den Namen, den Benutzernamen oder die {% data variables.product.prodname_dotcom %}-E-Mail-Adresse des Mitarbeiters ein.
   ![Der Abschnitt „Mitarbeiter“ mit Octocat-Benutzernamen im Suchfeld](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Der neue Mitarbeiter besitzt standardmäßig Leseberechtigung. Wähle optional im Dropdownmenü neben dem Namen des neuen Mitarbeiters eine andere Berechtigungsebene aus.
  ![Der Abschnitt „Mitarbeiter“ mit ausgewähltem Dropdownmenü „Berechtigungen“](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>Mitarbeiter aus einem Benutzer-Projektboard entfernen

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
