---
title: 管理企业中组织的团队同步
intro: '您可以启用身份提供程序 (IdP) 与 {% data variables.product.product_name %} 之间的团队同步，以允许企业帐户拥有的组织通过 IdP 组管理团队成员身份。'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: 管理团队同步
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## 关于企业帐户的团队同步

如果使用 Azure AD 作为 IdP，您可以为企业帐户启用团队同步，以允许组织所有者和团队维护员将企业帐户拥有的组织中的团队与 IdP 组同步。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

您也可以配置和管理单个组织的团队同步。 更多信息请参阅“[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”。

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 基本要求

您或您的 Azure AD 管理员必须是 Azure AD 中的全局管理员或特权角色管理员。

您必须使用受支持的 IdP 对企业帐户中的组织强制实施 SAML 单点登录。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

您必须使用 SAML SSO 和支持的 IdP 向企业帐户进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

## 管理 Azure AD 的团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. 查看要连接到企业帐户的 IdP 租户的详细信息，然后单击 **Approve（批准）**。 ![启用特定 IdP 租户团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)
8. 要禁用团队同步，单击 **Disable team synchronization（禁用团队同步）**。 ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)
