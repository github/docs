---
title: Verwalten der Forking-Richtlinie für Dein Repository
intro: 'You can allow or prevent the forking of a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

An organization owner must allow forks of private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. Weitere Informationen findest Du unter „[Die Forking-Richtlinie für Deine Organisation verwalten](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle unter „Features“ (Funktionen) **Allow forking** (Forking erlauben) aus. ![Kontrollkästchen, um das Forking eines privaten Repositorys zu erlauben oder zu verbieten](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
