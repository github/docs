---
title: Limiting interactions in your repository
intro: You can temporarily enforce a period of limited activity for certain users on a public repository.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
---

## About temporary interaction limits

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your repository.

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your personal account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)" and "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)."

## Limiting interactions in your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, select **{% octicon "comment-discussion" aria-hidden="true" %} Moderation options**, then click **Interaction limits**.
{% data reusables.community.set-interaction-limit %}

## Further reading

* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
