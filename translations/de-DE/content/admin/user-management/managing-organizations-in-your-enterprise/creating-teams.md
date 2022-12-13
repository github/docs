---
title: Erstellen von Teams
intro: 'Mithilfe von Teams können Organisationen Mitgliedergruppen erstellen und den Zugriff auf Repositorys steuern. Teammitgliedern können Lese-, Schreib- oder Administratorberechtigungen für bestimmte Repositorys erteilt werden.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 83db75485e7967941fdcd3ab651e638aa1eabb3f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332336'
---
Teams sind zentral für viele gemeinschaftliche Features von {% data variables.product.prodname_dotcom %}, beispielsweise Team-@mentions, um die entsprechenden Parteien dahin gehend zu informieren, dass du ihre Beiträge oder Aufmerksamkeit anfordern möchtest. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Ein Team kann eine Gruppe in deinem Unternehmen darstellen oder Personen mit bestimmten Interessen oder Expertenwissen enthalten. So könnte beispielsweise ein Team aus Barrierefreiheitsexpert*innen auf {% data variables.product.product_location %} aus Personen unterschiedlicher Abteilungen bestehen. Teams können funktionale Anliegen vertreten, welche die bestehende Bereichshierarchie eines Unternehmens ergänzen.

Organisationen können mehrere Ebenen untergeordneter Teams erstellen, um die Hierarchiestruktur eines Unternehmens oder einer Gruppe abzubilden. Weitere Informationen findest du unter [Informationen zu Teams](/enterprise/user/articles/about-teams/#nested-teams).

## Ein Team erstellen

Eine umsichtige Kombination von Teams ist ein wirksames Mittel, um den Zugriff auf das Repository zu steuern. Wenn deine Organisation beispielsweise nur deinem Release Engineering-Team erlaubt, Code an den Standardbranch von Repositorys zu pushen, kannst du nur dem Release Engineering-Team **Administratorberechtigungen** für die Repositorys deiner Organisation und allen anderen Teams nur **Leseberechtigungen** zuweisen.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## Teams mit aktivierter LDAP-Synchronisierung erstellen

Instanzen, die LDAP für die Benutzerauthentifizierung verwenden, können die LDAP-Synchronisierung zum Verwalten der Mitglieder eines Teams verwenden. Wenn du den **Distinguished Name** (DN) der Gruppe im Feld **LDAP-Gruppe** festlegst, wird ein Team einer LDAP-Gruppe auf deinem LDAP-Server zugeordnet. Wenn du die LDAP-Synchronisierung zum Verwalten der Mitglieder eines Teams verwendest, kannst du dein Team in {% data variables.product.product_location %} nicht verwalten. Das zugeordnete Team synchronisiert seine Mitglieder im Hintergrund und regelmäßig in dem Intervall, das bei aktivierter LDAP-Synchronisierung konfiguriert wurde. Weitere Informationen findest du unter [Aktivieren der LDAP-Synchronisierung](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).

Du musst Mitglied der Websiteadministrator*innen und Organisationsbesitzer*innen sein, um ein Team mit aktivierter LDAP-Synchronisierung zu erstellen.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Hinweise:**
- Die LDAP-Synchronisierung verwaltet nur die Mitgliederliste des Teams. Du musst die Repositorys und Berechtigungen des Teams auf {% data variables.product.prodname_ghe_server %} verwalten.
- Wenn eine LDAP-Gruppenzuordnung zu einem DN entfernt wird, beispielsweise wenn die LDAP-Gruppe gelöscht wird, dann wird jedes Mitglied aus dem synchronisierten {% data variables.product.prodname_ghe_server %}-Team entfernt. Um dies zu beheben, ordnest du das Team einem neuen DN zu, fügst die Teammitglieder wieder hinzu, und [synchronisierst die Zuordnung manuell](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts).
- Falls bei aktivierter LDAP-Synchronisierung eine Person aus einem Repository entfernt wird, verliert diese den Zugriff, ihre Forks werden jedoch nicht gelöscht. Wenn die Person innerhalb von drei Monaten zu einem Team mit Zugriff auf das ursprüngliche Organisations-Repository hinzugefügt wird, wird ihr Zugriff auf die Forks bei der nächsten Synchronisierung automatisch wiederhergestellt.

{% endwarning %}

1. Stelle sicher, dass die [LDAP-Synchronisierung aktiviert](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) ist.
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. Suche nach dem DN einer LDAP-Gruppe, um diesem das Team zuzuordnen. Falls du den DN nicht kennst, gib den Namen der LDAP-Gruppe ein. {% data variables.product.prodname_ghe_server %} sucht nach Übereinstimmungen und vervollständigt diese automatisch.
![Zuordnen zum DN der LDAP-Gruppe](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}
