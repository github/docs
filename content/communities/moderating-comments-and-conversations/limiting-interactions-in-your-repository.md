---
title: Limiting interactions in your repository
intro: You can temporarily enforce a period of limited activity for certain users on a public repository, and set a maximum number of concurrent open pull requests for non-collaborators.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository and set a maximum number of concurrent open pull requests for non-collaborators.'
shortTitle: Limit interactions in repo
category:
  - Moderate comments and conversations
---

## About temporary interaction limits

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your repository.

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your personal account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see [AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account) and [AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization).

## Limiting interactions in your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, select **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Moderation options**, then click **Interaction limits**.
{% data reusables.community.set-interaction-limit %}

## Limiting concurrent open pull requests for non-collaborators

You can set a maximum number of pull requests that a non-collaborator can have open at the same time in your repository. When a non-collaborator reaches the limit, they must close or get an existing pull request merged before they can open a new one.

This setting helps maintainers manage contribution volume by preventing users from opening an excessive number of pull requests, which can overwhelm review queues and trigger unnecessary CI runs. The limit only applies to non-collaborators — users with collaborator access to the repository are not affected.

### Adding trusted contributors to the allowlist

You can add trusted contributors to an allowlist so they can bypass the pull request limit without being granted full collaborator access. This is useful for regular external contributors who need to open multiple pull requests but don't require the additional permissions that come with collaborator access, such as push access or label management.

### Configuring the pull request limit

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, select **{% octicon "comment-discussion" aria-hidden="true" aria-label="comment-discussion" %} Moderation options**, then click **Interaction limits**.
1. Under "Pull request limits", select the maximum number of concurrent open pull requests allowed for non-collaborators.
1. Optionally, to allow specific users to bypass the limit, under "Allowlist", search for and select the users you want to add.

## Further reading

* [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
