---
title: Den Zugriff einer Person auf ein Repository einer Organisation verwalten
intro: Du kannst den Zugriff einer Person auf ein Repository Deiner Organisation verwalten.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program/
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Personen mit Administratorberechtigungen können den Zugriff von Organisationsmitgliedern und externen Mitarbeitern auf ein Repository der Organisation verwalten.

### Den Zugriff auf Repositorys entziehen

Wenn Du einen Mitarbeiter aus einem Repository Deiner Organisation entfernst, verliert er seinen Lese- und Schreibzugriff auf das Repository. Wenn es sich um ein privates Repository handelt und der Mitarbeiter das Repository geforkt hat, wird dieser Fork gelöscht. Der Mitarbeiter behält jedoch alle lokalen Klone Deines Repositorys.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### Den Zugriff einer Person auf ein Repository einer Organisation verwalten

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Klicke auf **Members** (Mitglieder) oder **Outside collaborators** (Externe Mitarbeiter), um Benutzer mit unterschiedlichen Arten des Zugriffs zu verwalten. ![Schaltfläche zum Einladen von Mitgliedern oder externen Mitarbeitern zu einer Organisation](/assets/images/help/organizations/select-outside-collaborators.png)
5. Klicken Sie rechts neben dem Namen der Person, deren Zugriff Sie verwalten möchten, im Dropdownmenü {% octicon "gear" aria-label="The Settings gear" %} auf **Manage** (Verwalten). ![Link zur Zugriffsverwaltung](/assets/images/help/organizations/member-manage-access.png)
6. Klicke auf der Seite „Manage access“ (Zugriff verwalten) neben dem Repository auf **Manage access** (Zugriff verwalten). ![Schaltfläche „Manage Access“ (Zugriff verwalten) für ein Repository](/assets/images/help/organizations/repository-manage-access.png)
7. Überprüfe den Zugriff der Person auf ein bestimmtes Repository, z. B., ob sie ein Mitarbeiter ist oder als Teammitglied auf das Repository zugreifen kann. ![Repository-Zugriffsmatrix für den Benutzer](/assets/images/help/organizations/repository-access-matrix-for-user.png)

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- "[Limiting interactions with your repository](/articles/limiting-interactions-with-your-repository)"{% endif %}
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
