---
title: Wiederherstellen einer gelöschten Organisation
intro: 'Du kannst eine Organisation teilweise wiederherstellen, die zuvor auf {% data variables.product.product_location %} gelöscht wurde.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063754'
---
## Informationen zur Wiederherstellung der Organisation

Du kannst eine Organisation, die zuvor auf {% data variables.product.product_location %} gelöscht wurde, über das Administratordashboard der Website wiederherstellen, solange die Elasticsearch-Indizes des Überwachungsprotokolls Daten zum `org.delete`-Ereignis enthalten.

Die Organisation ist unmittelbar nach der Wiederherstellung nicht mehr dieselbe wie vor der Löschung. Du musst alle Repositorys manuell wiederherstellen, die sich im Besitz der Organisation befanden. Weitere Informationen findest du unter [Wiederherstellen eines gelöschten Repositorys](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository).

Du kannst auch das Überwachungsprotokoll verwenden, um das manuelle erneute Hinzufügen von Teams und Organisationsmitgliedern zu vereinfachen. Weitere Informationen findest du unter [Wiederherstellen von Mitgliedern und Teams](#restoring-members-and-teams).

## Wiederherstellen einer Organisation

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. Suche unter „Benutzer, Organisationen, Unternehmen, Teams, Repositorys, Gists und Anwendungen durchsuchen“ nach der Organisation.

  ![Screenshot: Das Suchfeld und die Schaltfläche „Suchen“](/assets/images/enterprise/stafftools/search-field.png)

1. Wähle unter „Gelöschte Konten“ rechts neben der wiederherzustellenden Organisation das {% octicon "kebab-horizontal" aria-label="The edit icon" %}-Dropdownmenü aus, und klicke dann auf **Neu erstellen**.

   ![Screenshot: Das Dropdownmenü einer gelöschten Organisation](/assets/images/enterprise/stafftools/recreate-organization.png)

## Wiederherstellen von Mitgliedern und Teams

Im Überwachungsprotokoll findest du eine Liste der vorherigen Mitglieder und Teams der Organisation, anhand derer du diese manuell neu erstellen kannst. Weitere Informationen zur Verwendung des Überwachungsprotokolls findest du unter [Überwachen von Benutzern in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise).

Ersetze in allen unten aufgeführten Suchbegriffen ORGANISATION durch den Namen der Organisation und TEAM durch den Namen des Teams.

### Wiederherstellen von Organisationsmitgliedern

1. Durchsuche das Überwachungsprotokoll nach `action:org.add_member org:ORGANIZATION` und `action:org.remove_member org:ORGANIZATION`, um alle Benutzer*innen zu finden, die der Organisation hinzugefügt und entfernt wurden.
1. Füge der Organisation jeden Benutzer bzw. jede Benutzerin manuell hinzu, der bzw. die noch Mitglied sein sollte. Weitere Informationen findest du unter [Hinzufügen von Personen zu deiner Organisation](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization).

### Wiederherstellen von Teams

1. Durchsuche das Überwachungsprotokoll nach `action:team.create org:ORGANIZATION`, um jeden Teamnamen zu finden.
1. Erstelle das Team manuell neu. Weitere Informationen findest du unter [Erstellen eines Teams](/organizations/organizing-members-into-teams/creating-a-team).
1. Suche nach `action:team.add_member team:"ORGANIZATION/TEAM"`, um die Mitglieder zu finden, die jedem Team hinzugefügt wurden.
1. Füge die Teammitglieder erneut manuell hinzu. Weitere Informationen findest du unter [Hinzufügen von Organisationsmitgliedern zu einem Team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
1. Suche nach `action:team.add_repository team:"ORGANIZATION/TEAM"`, um die Repositorys zu finden, auf die das Team Zugriff hatte.
1. Suche nach `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`, um die Zugriffsebene zu finden, die dem Team für jedes Repository gewährt wurde.
1. Gewähre dem Team erneut manuell Zugriff. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).
