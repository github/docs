---
title: Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln
intro: Wenn ein aktuelles Mitglied deiner Organisation nur auf bestimmte Repositorys zugreifen muss, z. B. Berater*innen oder temporäre Mitarbeiter*innen, kannst du das Mitglied in eine*n externe*n Mitarbeiter*in konvertieren.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "146754598"
---
## Informationen zum Umwandeln von Organisationsmitgliedern in externe Projektmitarbeiter*innen

Du kannst ein Mitglied einer Organisation in eine*n externe*n Mitarbeiter*in konvertieren. Weitere Informationen zu externen Mitarbeitern findest du unter [Hinzufügen externer Mitarbeiter zu Repositorys in deiner Organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization).

{% ifversion fpt or ghec %} Wenn die Organisation im Besitz eines Unternehmens ist, kann das Konvertieren{% elsif ghes or ghae %}Converting{% endif %} eines Organisationsmitglieds in eine*n externe*n Mitarbeiter*in eingeschränkt sein. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}."{% elsif fpt %}" in der {% data variables.product.prodname_ghe_cloud %} Dokumentation.{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Wenn Organisationsmitglieder in externe Mitarbeiter umgewandelt wurden, haben sie nur auf die Repositorys Zugriff, auf die sie entsprechend der aktuellen Teammitgliedschaft zugreifen können. Die Person ist kein explizites Mitglied der Organisation mehr und kann Folgendes nicht mehr tun:

- Teams erstellen
- Alle Organisationsmitglieder und Teams sehen
- @mention aller sichtbaren Teams
- Ein Team-Betreuer sein

Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Wir empfehlen Dir, den Zugriff des Organisationsmitglieds auf Repositorys zu überprüfen, um sicherzustellen, dass dessen Zugriff den Erwartungen entspricht. Weitere Informationen findest du unter [Verwalten des Zugriffs einer Einzelperson auf ein Organisationsrepository](/articles/managing-an-individual-s-access-to-an-organization-repository).

Wenn du ein Organisationsmitglied in einen externen Projektmitarbeiter umwandelst, werden seine Berechtigungen als Organisationsmitglied drei Monate lang gespeichert. Dadurch kannst du seine Mitgliedsberechtigungen wiederherstellen, wenn du innerhalb dieser Zeit{% ifversion fpt or ghec %} diesen Mitarbeiter einlädst{% else %} deine Organisation diesem Mitarbeiter einlädt{% endif %}, der Organisation erneut beizutreten. Weitere Informationen findest du unter [Reaktivieren eines ehemaligen Mitglieds deiner Organisation](/articles/reinstating-a-former-member-of-your-organization).

## Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln

{% note %}

**Hinweis:** Möglicherweise kannst du ein Organisationsmitglied nicht in einen externen Projektmitarbeiter umwandeln, wenn ein Organisationsbesitzer{% ifversion not fpt %} oder Unternehmensbesitzer{% endif %} deine Berechtigung eingeschränkt hat, externe Projektmitarbeiter hinzuzufügen.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Wähle die Person(en) aus, die du in externe Mitarbeiter umwandeln möchtest.
  ![Liste der Mitglieder mit zwei ausgewählten Mitgliedern](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Klicke im Dropdownmenü über der Mitgliederliste auf **In externen Projektmitarbeiter umwandeln**.
  ![Dropdownmenü mit der Option, Mitglieder in externe Projektmitarbeiter*innen umzuwandeln](/assets/images/help/teams/user-bulk-management-options.png)
6. Lies die Informationen zum Umwandeln von Mitgliedern in externe Projektmitarbeiter*innen, und klicke dann auf **In externen Projektmitarbeiter umwandeln**.
  ![Informationen zu Berechtigungen für externe Projektmitarbeiter*innen und Schaltfläche „In externen Projektmitarbeiter umwandeln“](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Weiterführende Themen

- [Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Externen Mitarbeiter von einem Organisations-Repository entfernen](/articles/removing-an-outside-collaborator-from-an-organization-repository)
- [Umwandeln eines externen Projektmitarbeiters in ein Organisationsmitglied](/articles/converting-an-outside-collaborator-to-an-organization-member)
