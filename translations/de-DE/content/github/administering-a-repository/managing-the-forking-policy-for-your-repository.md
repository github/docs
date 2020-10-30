---
title: Verwalten der Forking-Richtlinie für Dein Repository
intro: 'Du kannst das Forken eines bestimmten privaten{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder internen{% endif %} Repositorys einer Organisation erlauben oder verhindern.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: Personen mit Administratorberechtigungen für ein Repository können die Forking-Richtlinie für das Repository verwalten.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Ein Organisationsinhaber muss Forks von privaten{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} und internen{% endif %} Repositorys auf der Organisationsebene erlauben, bevor Du Forks für ein bestimmtes Repository erlauben oder verbieten kannst. Weitere Informationen findest Du unter „[Die Forking-Richtlinie für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle unter „Features“ (Funktionen) **Allow forking** (Forking erlauben) aus. ![Kontrollkästchen, um das Forking eines privaten Repositorys zu erlauben oder zu verbieten](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
