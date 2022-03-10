---
title: 查看组织中的用户是否已启用 2FA
intro: 您可以查看哪些组织所有者、成员和外部协作者已启用双因素身份验证。
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
---

{% note %}

**注：**您可以要求所有成员{% ifversion fpt or ghec %}（包括组织中的所有者、帐单管理员和{% else %}{% endif %} 外部协作者）均启用双因素身份验证。 更多信息请参阅“[您的组织中需要双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)”。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. 要查看已启用或已禁用双因素身份验证的组织成员（包括组织所有者），在右侧单击 **2FA**，然后选择 **Enabled（启用）**或 **Disabled（禁用）**。 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. 要查看组织中的外部协作者，在“People（人员）”选项卡下，单击 **Outside collaborators（外部协作者）**。 ![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. 要查看哪些外部协作者已启用或已禁用双因素身份验证，在右侧单击 **2FA**，然后选择 **Enabled（启用）**或 **Disabled（禁用）**。 ![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## 延伸阅读

- “[查看组织中人员的角色](/articles/viewing-people-s-roles-in-an-organization)”
