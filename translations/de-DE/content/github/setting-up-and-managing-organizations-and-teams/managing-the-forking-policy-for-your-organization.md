---
title: Die Forking-Richtlinie für Deine Organisation verwalten
intro: 'Du kannst das Forken von privaten{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder internen{% endif %} Repositorys Deiner Organisation erlauben oder verhindern.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
permissions: Organisationsinhaber können die Forking-Richtlinie für eine Organisation verwalten.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Standardmäßig sind neue Organisationen so konfiguriert, dass sie das Forken von privaten{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} und internen{% endif %} Repositorys verbieten.

Wenn Du das Forken von privaten{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} und internen{% endif %} Repositorys auf Organisationsebene zulässt, kannst Du auch die Möglichkeit konfigurieren, ein bestimmtes privates{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder internes{% endif %} Repository zu forken. Weitere Informationen findest Du unter „[Die Forking-Richtlinie für Dein Repository verwalten](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Repository forking" (Forken eines Repositorys) die Option **Allow forking of private repositories** (das Forken von privaten Repositorys zulassen) oder die Option **Allow forking of private and internal repositories** (Forking von privaten und internen Repositorys zulassen). ![Kontrollkästchen, um das Forking in der Organisation zu erlauben oder zu verbieten](/assets/images/help/repository/allow-disable-forking-organization.png)
6. Klicke auf **Save** (Speichern).

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
