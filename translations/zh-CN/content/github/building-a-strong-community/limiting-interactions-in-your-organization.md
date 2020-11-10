---
title: 限制组织中的交互
intro: 'You can temporarily enforce a period of limited activity for certain users in all public repositories owned by your organization.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
permissions: Organization owners can limit interactions in an organization.
---

### About temporary interaction limits

Limiting interactions in your organization enables temporary interaction limits for all public repositories owned by the organization. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your organization's public repositories.

{% data reusables.community.types-of-interaction-limits %}

Members of the organization are not affected by any of the limit types.

在整个组织范围内启用活动限制时，无法对个别仓库启用或禁用交互限制。 For more information on limiting activity for an individual repository, see "[Limiting interactions in your repository](/articles/limiting-interactions-in-your-repository)."

Organization owners can also block users for a specific amount of time. 在阻止到期后，该用户会自动解除阻止。 更多信息请参阅“[阻止用户访问组织](/articles/blocking-a-user-from-your-organization)”。

### 限制组织中的交互

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the organization settings sidebar, click **Moderation settings**. !["Moderation settings" in the organization settings sidebar](/assets/images/help/organizations/org-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. !["Interaction limits" in the organization settings sidebar](/assets/images/help/organizations/org-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

### 延伸阅读
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
