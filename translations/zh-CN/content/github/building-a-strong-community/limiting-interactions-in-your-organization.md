---
title: 限制组织中的交互
intro: '组织所有者可临时限制某些用户在组织的公共仓库中评论、打开议题或创建拉取请求，在一定的期限内限制活动。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
versions:
  free-pro-team: '*'
---

24 小时后，用户可以恢复在组织公共仓库中的正常活动。 在整个组织范围内启用活动限制时，无法对个别仓库启用或禁用交互限制。 有关每仓库活动限制的更多信息，请参阅“[限制仓库中的交互](/articles/limiting-interactions-in-your-repository)”。

{% tip %}

**提示：**组织所有者也可在特定的时间段内阻止用户。 在阻止到期后，该用户会自动解除阻止。 更多信息请参阅“[阻止用户访问组织](/articles/blocking-a-user-from-your-organization)”。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在组织的 Settings（设置）侧边栏中，单击 **Interaction limits（交互限制）**。 ![组织设置中的交互限制 ](/assets/images/help/organizations/org-settings-interaction-limits.png)
5. 在 "Temporary interaction limits"（临时交互限制）下，单击一个或多个选项。 ![临时交互限制选项](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)
   - **Limit to existing users（限于现有用户）**：限制帐户存在时间不到 24 小时、之前没有贡献也不是协作者的组织用户的活动。
   - **Limit to prior contributors（限于之前的贡献者）**：限制之前没有贡献也不是协作者的组织用户的活动。
   - "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"

### 延伸阅读
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
