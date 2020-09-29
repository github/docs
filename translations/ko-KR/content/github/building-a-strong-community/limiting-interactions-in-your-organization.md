---
title: Limiting interactions in your organization
intro: 'Organization owners can temporarily restrict certain users from commenting, opening issues, or creating pull requests in the organization''s public repositories to enforce a period of limited activity.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

After 24 hours, users can resume normal activity in your organization's public repositories. When you enable organization-wide activity limitations, you can't enable or disable interaction limits on individual repositories. For more information on per-repository activity limitation, see "[Limiting interactions in your repository](/articles/limiting-interactions-in-your-repository)."

{% tip %}

**Tip:** Organization owners can also block users for a specific amount of time. After the block expires, the user is automatically unblocked. For more information, see "[Blocking a user from your organization](/articles/blocking-a-user-from-your-organization)."

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. In your organization's Settings sidebar, click **Interaction limits**. ![Interaction limits in organization settings ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. Under "Temporary interaction limits", click one or more options. ![Temporary interaction limit options](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - **Limit to existing users**: Limits activity for organization users with accounts that are less than 24 hours old who do not have prior contributions and are not collaborators.
   - **Limit to prior contributors**: Limits activity for organization users who have not previously contributed and are not collaborators.
   - **Limit to repository collaborators**: Limits activity for organization users who do not have write access or are not collaborators.

### 더 읽을거리
- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"
- "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
