---
title: 限制组织中的交互
intro: 您可以临时为组织拥有的所有公共仓库中的某些用户执行一段时间有限的活动。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: 限制组织中的交互
---

## 关于临时交互限制

限制组织中的交互可对组织拥有的所有公共仓库启用临时交互限制。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 限制期过后，用户可以在组织的公共仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

组织成员不受任何限制类型的影响。

在整个组织范围内启用活动限制时，无法对个别仓库启用或禁用交互限制。 有关限制单个仓库活动的更多信息，请参阅“[限制仓库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”。

组织所有者和版主也可在特定的时间段内阻止用户。 在阻止到期后，该用户会自动解除阻止。 更多信息请参阅“[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”。

## 限制组织中的交互


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. _对于组织所有者：_在侧边栏的“Access（访问）”部分中，选择 **{% octicon "report" aria-label="The report icon" %} 版主** 然后点击 **Interaction limits（互动限制）**。

   _对于组织版主：_ 在边栏中，单击“**Interaction limits（交互限制）**”。

{% data reusables.community.set-interaction-limit %}
  ![临时交互限制选项](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## 延伸阅读
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- “[管理组织中的版主](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)”
