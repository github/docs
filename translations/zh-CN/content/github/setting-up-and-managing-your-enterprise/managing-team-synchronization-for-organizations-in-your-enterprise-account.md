---
title: 管理企业帐户中组织的团队同步
intro: 'You can enable team synchronization between an identity provider (IdP) and {% data variables.product.product_name %} to allow organizations owned by your enterprise account to manage team membership through IdP groups.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  free-pro-team: '*'
---

### About team synchronization for enterprise accounts

If you use Azure AD as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

您也可以配置和管理单个组织的团队同步。 更多信息请参阅“[管理组织的团队同步](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)”。

### 基本要求

您或您的 Azure AD 管理员必须是 Azure AD 中的全局管理员或特权角色管理员。

您必须使用受支持的 IdP 为企业帐户中的组织启用 SAML 单点登录。 更多信息请参阅“[为企业帐户中的组织启用 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。

您必须使用 SAML SSO 和支持的 IdP 向企业帐户进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

### 管理 Azure AD 的团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Review the details for the IdP tenant you want to connect to your enterprise account, then click **Approve**. ![启用特定 IdP 租户团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)
8. 要禁用团队同步，单击 **Disable team synchronization（禁用团队同步）**。 ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)
