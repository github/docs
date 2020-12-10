---
title: Teams und Personen mit Zugriff auf Dein Repository verwalten
intro: Du kannst alle Personen mit Zugriff auf Dein Repository sehen und die Berechtigungen anpassen.
permissions: Repository-Administratoren können Teams und Personen mit Zugriff auf ein Repository verwalten.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
versions:
  free-pro-team: '*'
---

### Über die Verwaltung von Zugriffen auf Dein Repository

Für jedes Repository, das Du auf {% data variables.product.prodname_dotcom %} verwaltest, kannst Du eine Übersicht aller Teams und Personen sehen, die Zugriff auf das Repository haben. In der Übersicht kannst Du auch neue Teams oder Personen einladen, die Berechtigungen jedes Teams oder jeder Person ändern oder den Zugriff auf das Repository entfernen.

Diese Übersicht kann Dir helfen, den Zugriff auf Dein Repository, Onboard- oder Off-Board-Auftragnehmer oder Mitarbeiter zu überwachen und effektiv auf Sicherheitsvorfälle zu reagieren.

Weitere Informationen zu Repository-Berechtigungsstufen findest Du unter „[Berechtigungsstufen für ein Benutzerkonto-Repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" und „[Repository Berechtigungsstufen für eine Organisation](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)."

![Übersicht Zugriffsverwaltung](/assets/images/help/repository/manage-access-overview.png)

### Filtern der Liste der Teams und Personen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Beginne im Suchfeld unter „Manage access" (Zugriff verwalten) den Namen des Teams oder der Person einzugeben, die Du finden möchtest. ![Suchfeld, um eine Liste von Teams oder Personen mit Zugriff zu filtern](/assets/images/help/repository/manage-access-filter.png)

### Berechtigungen für ein Team oder eine Person ändern

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Finde unter „Manage access" (Zugriff verwalten) das Team oder die Person, deren Zugriffe Du ändern möchtest und benutze dann das **Role**-Dropdownmenü (Rollen) um neue Berechtigungen zu wählen. ![Benutzung des "Role"-Dropdownmenü (Rollen) um neue Berechtigungen für ein Team oder eine Person zu wählen](/assets/images/help/repository/manage-access-role-drop-down.png)

### Eine Person oder ein Team einladen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. Beginne im Suchfeld den Namen des Teams oder der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen. ![Suchfeld, um den Namen eines Teams oder einer Person einzugeben, die in das Repository eingeladen werden soll](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Wähle unter „Choose a role" (Wähle eine Rolle) die zu gewährenden Berechtigungen für das Team oder die Person, dann klicke auf **Add NAME to REPOSITORY** (Füge NAME zum REPOSITORY hinzu). ![Berechtigungen für ein Team oder eine Person auswählen](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

### Zugriff für ein Team oder eine Person entfernen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Finde unter „Manage access" (Zugriffe verwalten) das Team oder die Person, deren Zugriff Du entfernen willst, dann klicke auf {% octicon "trashcan" aria-label="The trashcan icon" %}. ![Trashcan-Symbol zum Entfernen des Zugriffs](/assets/images/help/repository/manage-access-remove.png)

### Weiterführende Informationen

- „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility)“
- „[Basis-Berechtigungen für eine Organisation festlegen](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
