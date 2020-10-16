---
title: 您的组织中需要双重身份验证
intro: 'Organization owners can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization''s repositories and settings.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About two-factor authentication for organizations

{% data reusables.two_fa.about-2fa %} You can require all {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} in your organization to enable two-factor authentication on {% data variables.product.product_name %}. For more information about two-factor authentication, see "[Securing your account with two-factor authentication (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)."

{% if currentVersion == "free-pro-team@latest" %}

You can also require two-factor authentication for organizations in an enterprise. 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)”。

{% endif %}

{% warning %}

**警告：**

- When you require use of two-factor authentication for your organization, {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} (including bot accounts) who do not use 2FA will be removed from the organization and lose access to its repositories. 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从您的组织中删除后的三个月内为其个人帐户启用双重身份验证，您可以[恢复其访问权限和设置](/articles/reinstating-a-former-member-of-your-organization)。
- If an organization owner, member,{% if currentVersion == "free-pro-team@latest" %} billing manager,{% endif %} or outside collaborator disables 2FA for their personal account after you've enabled required two-factor authentication, they will automatically be removed from the organization.
- 如果您是某个要求双重身份验证的组织的唯一所有者，则在不为组织禁用双重身份验证要求的情况下，您将无法为个人帐户禁用双重身份验证。

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### 基本要求

Before you can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to use two-factor authentication, you must enable two-factor authentication for your account on {% data variables.product.product_name %}. 更多信息请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”。

Before you require use of two-factor authentication, we recommend notifying {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} and asking them to set up 2FA for their accounts. You can see if members and outside collaborators already use 2FA. 更多信息请参阅“[查看组织中的用户是否已启用 2FA](/github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

### 您的组织中需要双重身份验证

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
8. 如果从组织中删除了任何成员或外部协作者，我们建议向他们发送邀请，以恢复其以前对组织的权限和访问权限。 他们必须启用双重身份验证，然后才能接受您的邀请。
{% endif %}

### 查看从您的组织中删除的人员

要查看在您要求双重身份验证时因为不合规而被从组织中自动删除的人员，您可以对从组织中删除的人员[搜索组织的审核日志](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log)。 审核日志事件将显示是否因为 2FA 不合规而删除该人员。

![显示因 2FA 不合规而删除的用户的审核日志事件](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. 输入您的搜索查询。 要搜索：
    - 删除的组织成员，请在搜索查询中使用 `action:org.remove_member`
    - Outside collaborators removed, use `action:org.remove_outside_collaborator` in your search query{% if currentVersion == "free-pro-team@latest" %}
    - 删除的帐单管理员，请在搜索查询中使用 `action:org.remove_billing_manager`{% endif %}

 您还可以在搜索中使用[时间范围](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)查看从组织中删除的人员。

### 帮助被删除的成员和外部协作者重新加入您的组织

如果在您启用双重身份验证使用要求时有任何成员或外部协作者被从组织中删除，他们将收到通知他们已被删除的电子邮件。 他们应当为个人帐户启用双重身份验证，并联系组织所有者来请求您的组织的访问权限。

### 延伸阅读

- “[查看组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”
- “[使用双重身份验证 (2FA) 保护您的帐户](/articles/securing-your-account-with-two-factor-authentication-2fa)”
- “[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”
- “[恢复前外部协作者对组织的访问权限](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)”
