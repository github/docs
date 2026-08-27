---
title: Limiting interactions in your organization
intro: You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
shortTitle: Limit interactions in org
category:
  - Moderate comments and conversations
---

## About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

When you enable organization-wide activity limitations, you can't enable or disable interaction limits on individual repositories. For more information on limiting activity for an individual repository, see [AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).

Organization owners and moderators can also block users for a specific amount of time. After the block expires, the user is automatically unblocked. For more information, see [AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).

## Limiting interactions in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. _For organization owners:_ In the "Access" section of the sidebar, select **{% octicon "report" aria-hidden="true" aria-label="report" %} Moderation**, then click **Interaction limits**.

   _For organization moderators:_ In the sidebar, click **Interaction limits**.

{% data reusables.community.set-interaction-limit %}

{% ifversion pull-request-limit %}

## Limiting concurrent open pull requests for users without write access

Across all public repositories owned by your organization, you can set a maximum number of pull requests that a user without write access can have open at the same time. This limit applies separately to each repository, so a user without write access can have up to the configured maximum number of open pull requests in _each_ public repository owned by the organization, not across the organization as a whole. When a user without write access reaches the limit in a repository, they must close an existing pull request or wait for someone with write access to merge one before they can open a new one.

This setting helps maintainers manage contribution volume by preventing users from opening an excessive number of pull requests, which can overwhelm review queues and trigger unnecessary CI runs. The limit only applies to users without write access—users with write access or higher are not affected.

Draft pull requests do not count toward a user's limit. Only open, non-draft pull requests are counted when determining whether a user has reached the maximum.

The organization-level limit takes precedence, but if a repository owned by your organization has its own pull request limit configured after the organization-level limit, the repository-level limit overrides the organization-level limit. See [AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository#limiting-concurrent-open-pull-requests-for-users-without-write-access).

### Configuring the pull request limit

To configure the pull request limit, navigate to the **Interaction limits** settings page following the same steps described in [Limiting interactions in your organization](#limiting-interactions-in-your-organization), then under **Pull request limits**, select the maximum number of concurrent open pull requests allowed for users without write access. You can also use the REST API to configure the pull request limit. See [AUTOTITLE](/rest/interactions/orgs#update-pull-request-creation-cap-for-an-org).

{% endif %}

## Further reading

* [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
