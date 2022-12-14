---
title: Informationen zu Teams
intro: 'Teams sind Gruppen von Organisationsmitgliedern, die Ihr Unternehmen oder die Struktur Ihrer Gruppe mit kaskadierenden Zugriffsberechtigungen und Erwähnungen widerspiegeln.'
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 7b899cf08ca58170acdf8fb2fb2ad13d251b76e3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145149845'
---
![Liste der Teams in einer Organisation](/assets/images/help/teams/org-list-of-teams.png)

Organisationsbesitzer und Teambetreuer können Teams Administrator-, Lese- oder Schreibzugriff auf die Repositorys der Organisation gewähren. Organisationsmitglieder können eine Benachrichtigung an ein ganzes Team senden, indem sie den Namen des Teams erwähnen. Organisationsmitglieder können eine Benachrichtigung auch an ein ganzes Team senden, indem sie eine Überprüfung von diesem Team anfordern. Außerdem können Organisationsmitglieder Überprüfungen von spezifischen Teams mit Lesezugriff auf das Repository anfordern, in dem der Pull Request geöffnet wird. Teams können als Inhaber bestimmter Codetypen oder Codebereiche in einer CODEOWNERS-Datei bestimmt werden.

Weitere Informationen finden Sie unter
- [Verwalten des Teamzugriffs auf ein Organisationsrepository](/articles/managing-team-access-to-an-organization-repository).
- [Erwähnen von Personen und Teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- [Informationen zu Codeinhabern](/articles/about-code-owners/)

![Bild einer Teamerwähnung](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

Du kannst außerdem die LDAP-Synchronisierung verwenden, um {% data variables.product.product_location %}-Teammitglieder und -Teamrollen mit deinen vorhandenen LDAP-Gruppen zu synchronisieren. So kannst du die rollenbasierte Zugriffssteuerung für Benutzer über deinen LDAP-Server statt manuell in {% data variables.product.product_location %} einrichten. Weitere Informationen findest du unter [Aktivieren der LDAP-Synchronisierung](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Sichtbarkeit eines Teams

{% data reusables.organizations.types-of-team-visibility %}

Du kannst auf deinem persönlichen Dashboard alle Teams anzeigen, zu denen du gehörst. Weitere Informationen findest du unter [Informationen zu deinem persönlichen Dashboard](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams).

## Teamseiten

Jedes Team hat seine eigene Seite innerhalb einer Organisation. Auf der Seite eines Teams kannst Du Teammitglieder, untergeordnete Teams und Repositorys des Teams anzeigen. Organisationsinhaber und Team-Betreuer können auf die Teameinstellungen zugreifen und die Beschreibung sowie das Profilbild des Teams über die Seite des Teams aktualisieren.

Organisationsmitglieder können Diskussionen mit dem Team erstellen und daran teilnehmen. Weitere Informationen findest du unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions).

![Teamseite mit einer Auflistung der Teammitglieder und Diskussionen](/assets/images/help/organizations/team-page-discussions-tab.png)

## Verschachtelte Teams

Du kannst die Hierarchie Deiner Gruppe oder Deines Unternehmens innerhalb Deiner {% data variables.product.product_name %}-Organisation mit mehreren Ebenen von verschachtelten Teams abbilden. Ein übergeordnetes Team kann über mehrere untergeordnete Teams verfügen, während jedes untergeordnete Team nur ein übergeordnetes Team aufweist. Du kannst geheime Teams nicht schachteln.

Untergeordnete Teams erben die Zugriffsberechtigungen des übergeordneten Teams, wodurch die Berechtigungsverwaltung für große Gruppen vereinfacht wird. Mitglieder untergeordneter Teams erhalten ebenfalls Benachrichtigungen, wenn das übergeordnete Team per @mentioned erwähnt wird, wodurch die Kommunikation mit mehreren Personengruppen vereinfacht wird.

Wenn deine Teamstruktur beispielsweise „Mitarbeiter > Engineering > Application Engineering > Application Engineering > Identity“ lautet, bedeutet die Gewährung von Schreibzugriff für Engineering auf ein Repository, dass auch Application Engineering und Identity diesen Zugriff erhalten. Wenn du das Identity-Team oder ein Team im unteren Bereich der Organisationshierarchie per @mention erwähnst, erhält nur dieses Team eine Benachrichtigung.

![Teamseite mit einem übergeordneten und einem untergeordneten Team](/assets/images/help/teams/nested-teams-eng-example.png)

Um zu verstehen, wer die Berechtigungen und Erwähnungen eines übergeordneten Teams teilt, kannst Du alle Mitglieder der untergeordneten Teams eines übergeordneten Teams auf der Registerkarte „Members“ (Mitglieder) auf der Seite des übergeordneten Teams sehen. Mitglieder eines untergeordneten Teams sind keine direkten Mitglieder des übergeordneten Teams.

![Seite eines übergeordneten Teams mit allen Mitgliedern der untergeordneten Teams](/assets/images/help/teams/team-and-subteam-members.png)

Du kannst beim Erstellen des Teams ein übergeordnetes Team auswählen oder ein Team in der Hierarchie Deiner Organisation später verschieben. Weitere Informationen findest du unter [Verschieben eines Teams in der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy).

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Die Verschachtelung von Teams in Deiner Organisation vorbereiten

Wenn in Deiner Organisation bereits Teams vorhanden sind, solltest Du die Zugriffsberechtigungen für das Repository jedes Teams überprüfen, bevor Du Teams über- oder unterordnest. Du solltest außerdem die neue Struktur berücksichtigen, die Du für Deine Organisation implementieren möchtest.

An der Spitze der Teamhierarchie solltest Du den übergeordneten Teams nur Zugriffsberechtigungen für Repositorys erteilen, die für jedes Mitglied des übergeordneten Teams und seine untergeordneten Teams sicher sind. Wenn Du Dich in der Hierarchie nach unten bewegst, kannst Du untergeordneten Teams zusätzlichen, detaillierteren Zugriff auf sensiblere Repositorys gewähren.

1. Entferne alle Mitglieder aus vorhandenen Teams
2. Überprüfe und bearbeite die Zugriffsrechte für Repositorys für jedes Team, und weise jedem Team ein übergeordnetes Team zu
3. Erstelle alle gewünschten neuen Teams, wähle ein übergeordnetes Team für jedes neue Team, und gewähre seinen Mitgliedern Zugriff auf Repositorys
4. Füge Personen direkt zu Teams hinzu

## Weiterführende Themen

- [Erstellen eines Teams](/articles/creating-a-team)
- [Hinzufügen von Organisationsmitgliedern zu einem Team](/articles/adding-organization-members-to-a-team)
