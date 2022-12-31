---
title: Administratorenteams zu verbesserten Organisationsberechtigungen migrieren
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Mitglieder der alten Administratorenteams behalten automatisch die Fähigkeit, Repositorys zu erstellen, bis diese Teams zu dem verbesserten Organisationsberechtigungsmodell migriert wurden.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125586'
---
Standardmäßig können alle Organisationsmitglieder Repositorys erstellen. Wenn du die [Berechtigungen zur Repositoryerstellung](/articles/restricting-repository-creation-in-your-organization) auf Organisationsbesitzer beschränkst und deine Organisation unter der alten Struktur der Organisationsberechtigungen erstellt wurde, können Mitglieder der früheren Administratorenteams nach wie vor Repositorys erstellen.

Frühere Administratorenteams sind Teams, die mit der Administrator-Berechtigungsebene unter der alten Struktur der Organisationsberechtigungen erstellt wurden. Mitglieder dieser Teams konnten Repositorys für die Organisation erstellen, und wir haben diese Fähigkeit in der optimierten Struktur der Organisationsberechtigungen beibehalten.

Du kannst diese Berechtigung entfernen, indem Du Deine früheren Administratorenteams auf die optimierten Organisationsberechtigungen migrierst.

Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% warning %}

**Warnung:** Wenn deine Organisation [Berechtigungen zur Repositoryerstellung](/articles/restricting-repository-creation-in-your-organization) für alle Mitglieder deaktiviert hat, verlieren einige Mitglieder der früheren Administratorenteams möglicherweise Berechtigungen zur Repositoryerstellung. Wenn Deine Organisation die Repository-Erstellung für Mitglieder aktiviert hat, wirkt sich die Migration der früheren Administratorenteams zu den optimierten Organisationsberechtigungen nicht auf die Fähigkeit dieser Teammitglieder aus, Repositorys zu erstellen.

{% endwarning %}

## Alle früheren Administratorenteams der Organisation migrieren

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Überprüfe die früheren Administratorenteams deiner Organisation, und klicke dann auf **Alle Teams migrieren**.
  ![Schaltfläche „Alle Teams migrieren“](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Lies die Informationen zu den Änderungen, die sich für die Berechtigungen der Mitglieder dieser Teams möglicherweise ergeben, und klicke dann auf **Alle Teams migrieren**.
  ![Schaltfläche zur Bestätigung der Migration](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## Ein einzelnes Administratorenteam migrieren

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Klicke im Teambeschreibungsfeld auf **Team migrieren**.
  ![Schaltfläche „Team migrieren“](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
