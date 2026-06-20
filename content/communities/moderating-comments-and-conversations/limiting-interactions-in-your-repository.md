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

## Limiting concurrent open pull requests for users without write access

In a public repository, you can set a maximum number of pull requests that a user without write access can have open at the same time. When a user without write access reaches the limit, they can close or merge an existing pull request before they can open a new one.

This setting helps maintainers manage contribution volume by preventing users from opening an excessive number of pull requests, which can overwhelm review queues and trigger unnecessary CI runs. The limit only applies to users without write access — users with write access or higher are not affected.

Draft pull requests do not count toward a user's limit. Only open, non-draft pull requests are counted when determining whether a user has reached the maximum.

### Adding trusted contributors to the bypass list

Rather than granting full collaborator access, you can add trusted contributors to a bypass list, allowing them to exceed the pull request limit while keeping their permissions otherwise unchanged. This bypass is ideal for regular external contributors who routinely open multiple pull requests but do not need the additional permissions that come with collaborator access.

You can manage the bypass list through either the UI or the API. The bypass list supports up to 100 users.

### Configuring the pull request limit

To configure the pull request limit, navigate to the **Interaction limits** settings page following the same steps described in [AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository), then:

1. Under **Pull request limits**, select the maximum number of concurrent open pull requests allowed for users without write access.
1. Optionally, under **Bypass list**, search for and select the users you want to allow to bypass the pull request limit.

## Further reading

* [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
