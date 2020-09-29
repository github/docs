---
title: 管理组织的团队同步
intro: '您可以在身份提供程序 (IdP) 与 {% data variables.product.product_name %} 上的组织之间启用和禁用团队同步。'
product: '{% data reusables.gated-features.team-synchronization %}'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
permissions: 组织所有者可管理组织的团队同步。
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### 关于团队同步

您可以在 IdP 与 {% data variables.product.product_name %} 之间启用团队同步，以允许组织所有者和团队维护员将组织中的团队与 IdP 组连接起来。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

您还可以为企业帐户拥有的组织启用团队同步。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account)”。

### 启用团队同步

启用团队同步的步骤取决于要使用的 IdP。 有些启用团队同步的基本要求适用于每个 IdP。 每个 IdP 都有额外的基本要求。

#### 基本要求

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

您必须为您的组织和支持的 IdP 启用 SAML 单点登录。 更多信息请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。

您必须使用 SAML SSO 和支持的 IdP 向组织验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

#### 为 Azure AD 启用团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. 查看要与组织连接的身份提供程序租户信息，然后单击 **Approve（批准）**。 ![启用特定 IdP 租户团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)

#### 为 Okta 启用团队同步

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. 在组织名称下，输入有效的 SSWS 令牌和 Okta 实例的 URL。 ![启用团队同步 Okta 组织表单](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. 查看要与组织连接的身份提供程序租户信息，然后单击 **Create（创建）**。 ![启用团队同步创建按钮](/assets/images/help/teams/confirm-team-synchronization-okta.png)

### 禁用团队同步

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. 在“Team synchronization（团队同步）”下，单击 **Disable team synchronization（禁用团队同步）**。 ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)
