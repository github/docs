---
title: Organisationskonto löschen
intro: 'Wenn Du eine Organisation löschst, werden alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Projekt- respektive Organisationsseiten ebenfalls gelöscht. {% if currentVersion == "free-pro-team@latest" %}The organization name becomes available for use on a new user or organization account, and your billing will end.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tipp:** Wenn Du Dein bezahltes Abonnement stornieren möchtest, kannst Du [Deine Organisation zu {% data variables.product.prodname_free_team %} herabstufen](/articles/downgrading-your-github-subscription), anstatt die Organisation und ihre Inhalte zu löschen.

{% endtip %}

{% endif %}

### 1. Sichere die Inhalte Deiner Organisation

Wenn Du eine Organisation gelöscht hast, kann GitHub **Deine Inhalte nicht wiederherstellen.**. Therefore, before you delete your organization, make sure you have a copy of all repositories, wikis, issues, and project boards from the account.

### 2. Lösche die Organisation

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Klicke fast am Ende der Seite mit den Einstellungen der Organisation auf **Delete this organization** (Diese Organisation löschen). ![Schaltfläche „Delete this organization“ (Diese Organisation löschen)](/assets/images/help/settings/settings-organization-delete.png)
