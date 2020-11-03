---
title: 查看和管理成员对组织的 SAML 访问
intro: '您可以查看和撤销组织成员的链接身份、活动会话和授权凭据。'
permissions: 组织所有者可以查看和管理成员对组织的 SAML 访问。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### 关于对组织的 SAML 访问

对组织启用 SAML 单点登录时，每个组织成员都可以将其在身份提供程序 (IdP) 上的外部身份链接到其现有的 {% data variables.product.product_name %} 帐户。 要在 {% data variables.product.product_name %} 上访问组织的资源，成员必须在其浏览器中启动 SAML 会话。 要使用 API 或 Git 访问组织的资源，成员必须使用被授权用于组织的个人访问令牌或 SSH 密钥。

您可以在同一页面上查看和撤销每个成员的链接身份、活动会话和授权凭据。

### 查看和撤销链接的身份

{% data reusables.saml.about-linked-identities %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### 查看和撤销活动的 SAML 会话

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### 查看和撤销授权的凭据

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[查看和管理用户对企业帐户的 SAML 访问](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"
