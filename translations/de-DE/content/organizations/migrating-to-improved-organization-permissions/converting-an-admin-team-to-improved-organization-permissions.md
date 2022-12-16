---
title: Ein Administratorenteam für verbesserte Organisationsberechtigungen umwandeln
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Mitglieder der alten Administratorenteams behalten automatisch die Fähigkeit, Repositorys zu erstellen, bis diese Teams zu dem verbesserten Organisationsberechtigungsmodell migriert wurden.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125601'
---
Um Mitgliedern der alten Administratorenteams die Berechtigung zum Erstellen von Repositorys zu entziehen, erstelle ein neues Team für diese Mitglieder, stelle dabei sicher, dass das Team den erforderlichen Zugriff auf die Repositorys der Organisation hat, und lösche dann das alte Administratorenteam.

Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% warning %}

**Warnungen:**
- Wenn es Mitglieder in Deinem alten Administratorenteam gibt, die keine Mitglieder anderer Teams sind, werden sie beim Löschen des Teams aus der Organisation entfernt. Bevor Du das Team löschst, stelle sicher, dass die Mitglieder direkte Mitglieder der Organisation sind oder Mitarbeiterzugriff auf die benötigten Repositorys haben.
- Um zu verhindern, dass private Forks der Mitglieder des alten Administratorenteams verloren gehen, musst Du die unten stehenden Schritte 1 bis 3 ausführen, bevor Du das alte Administratorenteam löschst.
- Da „Administrator“ ein Begriff für Organisationsmitglieder mit spezifischem [Zugriff auf bestimmte Repositorys](/articles/repository-permission-levels-for-an-organization) in der Organisation ist, solltest du diesen Begriff in allen Teamnamen vermeiden, die du festlegst.

{% endwarning %}

1. [Erstelle ein neues Team.](/articles/creating-a-team)
2. [Füge jedes Mitglied](/articles/adding-organization-members-to-a-team) deines alten Administratorteams dem neuen Team hinzu.
3. [Gib dem neuen Team gleichwertigen Zugriff](/articles/managing-team-access-to-an-organization-repository) auf alle Repositorys, auf die das alte Team Zugriff hatte.
4. [Lösche das alte Administratorteam](/articles/deleting-a-team).
