---
title: Limiting interactions in your organization
intro: You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
topics:
  - Community
---

### About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

When you enable organization-wide activity limitations, you can't enable or disable interaction limits on individual repositories. For more information on limiting activity for an individual repository, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."

Organization owners can also block users for a specific amount of time. After the block expires, the user is automatically unblocked. For more information, see "[Blocking a user from your organization](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."

### Limiting interactions in your organization


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the organization settings sidebar, click **Moderation settings**.
  !["Moderation settings" in the organization settings sidebar](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**.
  !["Interaction limits" in the organization settings sidebar](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Temporary interaction limit options](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### Further reading
- "[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
