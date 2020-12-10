---
title: 邀请用户参加您的组织
intro: '您可以使用任何人的 {% data variables.product.product_name %} 用户名或电子邮件地址邀请其成为组织的成员。'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization/
  - /articles/inviting-users-to-join-your-organization
versions:
  free-pro-team: '*'
---

{% tip %}

**提示**：
- 如果您的组织采用付费的每用户订阅，则必须有未使用的许可才可邀请新成员加入组织或恢复前组织成员。 更多信息请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。 {% data reusables.organizations.org-invite-expiration %}
- If your organization requires members to use two-factor authentication, users that you invite must enable two-factor authentication before accepting the invitation. For more information, see "[Requiring two-factor authentication in your organization](/github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization)" and "[Securing your account with two-factor authentication (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)."

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

### 延伸阅读
- "[向团队添加组织成员](/articles/adding-organization-members-to-a-team)"
