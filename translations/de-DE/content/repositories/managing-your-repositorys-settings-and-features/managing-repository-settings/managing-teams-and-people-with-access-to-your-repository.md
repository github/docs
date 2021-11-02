---
title: Teams und Personen mit Zugriff auf Dein Repository verwalten
intro: Du kannst alle Personen mit Zugriff auf Dein Repository sehen und die Berechtigungen anpassen.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Teams & people
---

## About access management for repositories

Für jedes Repository, das Du auf {% data variables.product.prodname_dotcom %} verwaltest, kannst Du eine Übersicht aller Teams und Personen sehen, die Zugriff auf das Repository haben. From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

Diese Übersicht kann Dir helfen, den Zugriff auf Dein Repository, Onboard- oder Off-Board-Auftragnehmer oder Mitarbeiter zu überwachen und effektiv auf Sicherheitsvorfälle zu reagieren.

For more information about repository roles, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

![Übersicht Zugriffsverwaltung](/assets/images/help/repository/manage-access-overview.png)

## Filtern der Liste der Teams und Personen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Beginne im Suchfeld unter „Manage access" (Zugriff verwalten) den Namen des Teams oder der Person einzugeben, die Du finden möchtest. ![Suchfeld, um eine Liste von Teams oder Personen mit Zugriff zu filtern](/assets/images/help/repository/manage-access-filter.png)

## Berechtigungen für ein Team oder eine Person ändern

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", find the team or person whose role you'd like to change, then select the Role drop-down and click a new role. ![Benutzung des "Role"-Dropdownmenü (Rollen) um neue Berechtigungen für ein Team oder eine Person zu wählen](/assets/images/help/repository/manage-access-role-drop-down.png)

## Eine Person oder ein Team einladen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. Beginne im Suchfeld den Namen des Teams oder der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen. ![Suchfeld, um den Namen eines Teams oder einer Person einzugeben, die in das Repository eingeladen werden soll](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**. ![Berechtigungen für ein Team oder eine Person auswählen](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Zugriff für ein Team oder eine Person entfernen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Finde unter „Manage access" (Zugriffe verwalten) das Team oder die Person, deren Zugriff Du entfernen willst, dann klicke auf {% octicon "trash" aria-label="The trash icon" %}. ![trash icon for removing access](/assets/images/help/repository/manage-access-remove.png)

## Weiterführende Informationen

- „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility)“
- „[Basis-Berechtigungen für eine Organisation festlegen](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
