---
title: Die Forking-Richtlinie für Deine Organisation verwalten
intro: 'You can allow or prevent the forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

By default, new organizations are configured to disallow the forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories.

If you allow forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository. Weitere Informationen findest Du unter „[Die Forking-Richtlinie für Dein Repository verwalten](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Repository forking" (Forken eines Repositorys) die Option **Allow forking of private repositories** (das Forken von privaten Repositorys zulassen) oder die Option **Allow forking of private and internal repositories** (Forking von privaten und internen Repositorys zulassen). ![Kontrollkästchen, um das Forking in der Organisation zu erlauben oder zu verbieten](/assets/images/help/repository/allow-disable-forking-organization.png)
6. Klicke auf **Save** (Speichern).

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
