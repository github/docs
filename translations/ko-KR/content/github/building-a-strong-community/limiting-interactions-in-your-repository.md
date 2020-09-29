---
title: Limiting interactions in your repository
intro: 'People with owner or admin access can temporarily restrict certain users from commenting, opening issues, or creating pull requests in your public repository to enforce a period of limited activity.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---

After 24 hours, users can resume normal activity in your repository.

{% tip %}

**Tip:** Organization owners can enable organization-wide activity limitations. If organization-wide activity limitations are enabled, you can't limit activity for individual repositories. For more information, see "[Limiting interactions in your organization](/articles/limiting-interactions-in-your-organization)."

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. In your repository's Settings sidebar, click **Interaction limits**. ![Interaction limits in repository settings ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. Under "Temporary interaction limits", click one or more options: ![Temporary interaction limit options](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - **Limit to existing users**: Limits activity for users with accounts that are less than 24 hours old who do not have prior contributions and are not collaborators.
    - **Limit to prior contributors**: Limits activity for users who have not previously contributed and are not collaborators.
    - **Limit to repository collaborators**: Limits activity for users who do not have write access or are not collaborators.

### 더 읽을거리
- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"
- "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
