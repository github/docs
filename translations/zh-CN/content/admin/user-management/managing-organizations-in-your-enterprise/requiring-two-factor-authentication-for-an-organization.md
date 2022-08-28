---
title: 为组织要求双重身份验证
intro: 您可以要求组织成员和外部协作者为他们在组织中的个人帐户启用双重身份验证，使恶意操作者更难以访问组织的仓库和设置。
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: 需要 2FA
---

使用 LDAP 或内置身份验证时，{% data variables.product.product_location %} 将支持双重身份验证。 组织管理员可以要求成员启用双重身份验证。

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

更多信息请参阅“[关于双重身份验证](/github/authenticating-to-github/about-two-factor-authentication)”。

## 强制执行双重身份验证的要求

在可以要求组织成员和外部协作者使用双重身份验证之前，您必须为自己的个人帐户[启用双重身份验证](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/)。

{% warning %}

**警告：**

- 如果您要求双重身份验证，则不使用双重身份验证的成员和外部协作者（包括自动程序帐户）将从组织中移除，并失去对仓库的访问权限，包括他们的私有仓库分叉。 如果他们在被从组织移除的三个月内为个人帐户启用双重身份验证，您可以[恢复他们的访问权限和设置](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)。
- 如果需要双重身份验证，则禁用双重身份验证的组织成员或外部协作者将被自动从组织中移除。
- 如果您是某个要求双重身份验证的组织的唯一所有者，则在不为组织禁用双重身份验证要求的情况下，您将无法为个人帐户禁用双重身份验证。

{% endwarning %}

在您要求使用双重身份验证之前，我们建议通知组织成员和外部协作者，并要求他们为帐户设置双重身份验证。 您可以在组织的 People 选项卡上[查看成员和外部协作者是否已使用双重身份验证](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

## 查看从您的组织中删除的人员

要查看在您要求双重身份验证时因为不合规而被从组织中自动移除的用户，您可以在搜索字段中使用 `reason:two_factor_requirement_non_compliance` [搜索审核日志](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/)。

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. 使用 `reason:two_factor_requirement_non_compliance` 输入您的搜索查询。 ![显示因双重身份验证不合规而被移除的用户的员工工具审核日志事件](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) 要缩小以下对象的搜索范围，请执行相应地操作：
    - 对于移除的组织成员，请输入 `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - 对于移除的外部协作者，请输入 `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  您还可以在搜索中使用组织名称，查看已从特定组织中移除的用户：
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. 单击 **Search（搜索）**。

## 帮助被删除的成员和外部协作者重新加入您的组织

如果在您启用双重身份验证使用要求时有任何成员或外部协作者被从组织中删除，他们将收到通知他们已被删除的电子邮件。 他们应当为个人帐户启用双重身份验证，并联系组织所有者来请求您的组织的访问权限。

## 延伸阅读

- "[查看组织中的用户是否已启用双重身份验证](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[使用双重身份验证 (2FA) 确保帐户的安全](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[恢复组织的前成员](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)"
- "[恢复前外部协作者对您的组织的访问权限](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
