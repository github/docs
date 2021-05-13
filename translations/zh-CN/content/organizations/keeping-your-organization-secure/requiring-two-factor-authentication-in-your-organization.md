---
title: 您的组织中需要双重身份验证
intro: '组织所有者可以要求{% if currentVersion == "free-pro-team@latest" %}组织成员、外部协作者和帐单管理员{% else %}组织成员和外部协作者{% endif %}为其个人帐户启用双重身份验证，从而使恶意行为者更难以访问组织的仓库和设置。'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

### 关于组织的双重身份验证

{% data reusables.two_fa.about-2fa %} 您可以要求组织中的所有{% if currentVersion == "free-pro-team@latest" %}成员、外部协作者和帐单管理员{% else %}成员和外部协作者{% endif %}在 {% data variables.product.product_name %} 上启用双重身份验证。 有关双重身份验证的更多信息，请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”。

{% if currentVersion == "free-pro-team@latest" %}

您还可以要求企业中的组织使用双重身份验证。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)”。

{% endif %}

{% warning %}

**警告：**

- 要求您的组织使用双重身份验证时，不使用 2FA 的{% if currentVersion == "free-pro-team@latest" %}成员、外部协作者和帐单管理员{% else %}成员和外部协作者{% endif %}（包括自动程序帐户）将从组织中删除，并且失去访问其仓库的权限。 他们还会失去对组织私有仓库的复刻的访问权限。 如果他们在从您的组织中删除后的三个月内为其个人帐户启用双重身份验证，您可以[恢复其访问权限和设置](/articles/reinstating-a-former-member-of-your-organization)。
- 如果组织所有者、成员{% if currentVersion == "free-pro-team@latest" %}、帐单管理员{% endif %} 或外部协作者在您启用所需的双重身份验证后为其个人帐户禁用 2FA，则系统会自动将其从组织中删除。
- 如果您是某个要求双重身份验证的组织的唯一所有者，则在不为组织禁用双重身份验证要求的情况下，您将无法为个人帐户禁用双重身份验证。

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### 基本要求

在要求{% if currentVersion == "free-pro-team@latest" %}组织成员、外部协作者和帐单管理员{% else %}组织成员和外部协作者{% endif %}使用双重身份验证之前，您必须对 {% data variables.product.product_name %} 上的帐户启用双重身份验证。 更多信息请参阅“[使用双重身份验证 (2FA) 保护您的帐户](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”。

在您要求使用双重身份验证之前，我们建议您通知{% if currentVersion == "free-pro-team@latest" %}组织成员、外部协作者和帐单管理员{% else %}组织成员和外部协作者{% endif %}，要求他们为其帐户设置 2FA。 您可以查看成员和外部协作者是否已经使用 2FA。 更多信息请参阅“[查看组织中的用户是否已启用 2FA](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)”。

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
    - 删除的外部协作者，请在搜索查询中使用 `action:org.remove_outside_collaborator`{% if currentVersion == "free-pro-team@latest" %}
    - 删除的帐单管理员，请在搜索查询中使用 `action:org.remove_billing_manager`{% endif %}

 您还可以在搜索中使用[时间范围](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)查看从组织中删除的人员。

### 帮助被删除的成员和外部协作者重新加入您的组织

如果在您启用双重身份验证使用要求时有任何成员或外部协作者被从组织中删除，他们将收到通知他们已被删除的电子邮件。 他们应当为个人帐户启用双重身份验证，并联系组织所有者来请求您的组织的访问权限。

### 延伸阅读

- “[查看组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”
- “[使用双重身份验证 (2FA) 保护您的帐户](/articles/securing-your-account-with-two-factor-authentication-2fa)”
- “[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”
- “[恢复前外部协作者对组织的访问权限](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)”
