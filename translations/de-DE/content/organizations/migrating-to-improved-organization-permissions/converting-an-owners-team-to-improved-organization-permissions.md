---
title: Ein Inhaberteam für verbesserte Organisationsberechtigungen umwandeln
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Der „Owner“ (Inhaber) ist jetzt eine administrative Rolle, die einzelnen Mitgliedern Deiner Organisation zugewiesen wird. Mitglieder des alten Inhaberteams erhalten automatisch Inhaberberechtigungen.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880380'
---
Du hast mehrere Möglichkeiten, Dein altes Inhaberteam umzuwandeln:

- Gib dem Team einen neuen Namen, der die Mitglieder kennzeichnet, die einen besonderen Status in der Organisation haben.
- Lösche das Team, nachdem Du sichergestellt hast, dass alle Mitglieder zu Teams hinzugefügt wurden, die den benötigten Zugriff auf die Repositorys der Organisation haben.

## Dem Inhaberteam einen neuen Namen geben

{% tip %}

   **Hinweis**: Da „Administrator“ ein Begriff für Organisationsmitglieder mit spezifischem [Zugriff auf bestimmte Repositorys](/articles/repository-permission-levels-for-an-organization) in der Organisation ist, empfehlen wir, diesen Begriff in allen Teamnamen, die du festlegst, zu vermeiden.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Lege im Feld für den Teamnamen einen neuen Namen für das Inhaberteam fest. Beispiel:
    - Wenn nur sehr wenige Mitglieder Deiner Organisation Mitglieder des Inhaberteams waren, könntest Du das Team beispielsweise „Kern“ nennen.
    - Wenn alle Mitglieder deiner Organisation Mitglieder des Teams „Besitzer“ wären, damit sie [Teams per @mention erwähnen können](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), könntest du das Team beispielsweise „Mitarbeiter“ nennen.
  ![Das Feld für den Teamnamen mit „Kern“ als neuen Namen für das Besitzerteam](/assets/images/help/teams/owners-team-new-name.png)
6. Klicke unter der Teambeschreibung auf **Speichern und fortfahren**.
![Schaltfläche „Speichern und fortfahren“](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Optional kannst du [das Team als *öffentlich* festlegen](/articles/changing-team-visibility).

## Das alte Inhaberteam löschen

{% warning %}

**Warnung**: Wenn dein Besitzerteam Mitglieder umfasst, die keinen anderen Teams angehören, werden diese durch das Löschen des Teams aus der Organisation entfernt. Bevor Du das Team löschst, stelle sicher, dass die Mitglieder direkte Mitglieder der Organisation sind oder Mitarbeiterzugriff auf die benötigten Repositorys haben.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Lies die Warnung unten auf der Seite, und klicke dann auf **Besitzerteam löschen**.
  ![Link zum Löschen des Besitzerteams](/assets/images/help/teams/owners-team-delete.png)
