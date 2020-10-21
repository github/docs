---
title: 查看和管理用户对企业帐户的 SAML 访问
intro: '您可以查看和撤销企业成员的链接身份、活动会话和授权凭据。'
permissions: 企业所有者可以查看和管理成员对组织的 SAML 访问。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
---

### 关于对企业帐户的 SAML 访问

对企业帐户启用 SAML 单点登录时，每个企业成员都可以将其在身份提供程序 (IdP) 上的外部身份链接到其现有的 {% data variables.product.product_name %} 帐户。 {% data reusables.saml.about-saml-access-enterprise-account %}

### 查看和撤销链接的身份

{% data reusables.saml.about-linked-identities %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### 查看和撤销活动的 SAML 会话

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### 查看和撤销授权的凭据

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### 延伸阅读

- "[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"
