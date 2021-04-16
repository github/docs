---
title: Interaktionen in Deiner Organisation begrenzen
intro: You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
topics:
  - community
---

### About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

Wenn Du Einschränkungen für die gesamte Organisation aktivierst, kannst Du keine Beschränkung der Interaktionen für einzelne Repositorys aktivieren oder deaktivieren. For more information on limiting activity for an individual repository, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."

Organization owners can also block users for a specific amount of time. Wenn die Sperre ausläuft, wird der Benutzer automatisch entsperrt. Weitere Informationen findest Du unter „[Benutzer für Deine Organisation blockieren](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).“

### Interaktionen in Deiner Organisation begrenzen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the organization settings sidebar, click **Moderation settings**. !["Moderation settings" in the organization settings sidebar](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. !["Interaction limits" in the organization settings sidebar](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Optionen für die temporäre Interaktionsbeschränkung](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### Weiterführende Informationen
- „[Missbrauch oder Spam melden](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“
- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository)"
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
