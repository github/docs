---
title: Den Zugriff einer Person auf ein Repository einer Organisation verwalten
intro: Du kannst den Zugriff einer Person auf ein Repository deiner Organisation verwalten.
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130726"
---
## Informationen zum Zugriff auf Organisationsrepositorys

Wenn du einen Mitarbeiter aus einem Repository deiner Organisation entfernst, verliert er seinen Lese- und Schreibzugriff auf das Repository. Wenn es sich um ein privates Repository handelt und der Mitarbeiter das Repository geforkt hat, wird dieser Fork gelöscht. Der Mitarbeiter behält jedoch alle lokalen Klone deines Repositorys.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Den Zugriff einer Person auf ein Repository einer Organisation verwalten
In deinen Repositoryeinstellungen kannst du einer Person Zugriff auf ein Repository gewähren oder die Zugriffsebene einer Person auf ein Repository ändern. Weitere Informationen findest du unter [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).
{% else %}
## Einer Person Zugriff auf ein Repository gewähren

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. Beginne im Suchfeld den Namen des Teams oder der Person einzugeben, die du einladen möchtest, und klicke dann in der Liste der Übereinstimmungen auf einen Namen.
  ![Suchfeld, um den Namen eines Teams oder einer Person einzugeben, das/die zu dem Repository eingeladen werden soll](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Wähle unter „Rolle auswählen“ die Repositoryrolle aus, die dem Team oder der Person zugewiesen werden soll, und klicke dann auf **NAME zu REPOSITORY hinzufügen**.
  ![Auswählen von Berechtigungen für ein Team oder eine Person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Den Zugriff einer Person auf ein Repository einer Organisation verwalten

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Klicke entweder auf **Mitglieder** oder **Externe Projektmitarbeiter**, um Personen mit unterschiedlichen Zugriffstypen zu verwalten. ![Schaltfläche zum Einladen von Mitgliedern oder externen Projektmitarbeitern zu einer Organisation](/assets/images/help/organizations/select-outside-collaborators.png)
5. Klicke rechts neben dem Namen der Person, die du verwalten möchtest, verwende das Dropdownmenü {% octicon "gear" aria-label="The Settings gear" %} und klicke auf **Verwalten**.
  ![Link zur Zugriffsverwaltung](/assets/images/help/organizations/member-manage-access.png)
6. Klicke auf der Seite „Zugriff verwalten“ neben dem Repository auf **Zugriff verwalten**.
![Schaltfläche „Zugriff verwalten“ für ein Repository](/assets/images/help/organizations/repository-manage-access.png)
7. Überprüfe den Zugriff der Person auf ein bestimmtes Repository, z. B., ob sie ein Mitarbeiter ist oder als Teammitglied auf das Repository zugreifen kann.
![Repository-Zugriffsmatrix für den Benutzer](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## Weiterführende Themen

{% ifversion fpt or ghec %}- [Begrenzung der Interaktionen mit deinem Repository](/articles/limiting-interactions-with-your-repository){% endif %}
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
