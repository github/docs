---
title: 查看和管理用户对企业的 SAML 访问
intro: 您可以查看和撤销企业成员的链接身份、活动会话和授权凭据。
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### 关于对企业帐户的 SAML 访问

对企业帐户启用 SAML 单点登录时，每个企业成员都可以将其在身份提供程序 (IdP) 上的外部身份链接到其现有的 {% data variables.product.product_name %} 帐户。 {% data reusables.saml.about-saml-access-enterprise-account %}

### 查看和撤销链接的身份

{% data reusables.saml.about-linked-identities %}

{% warning %}

**警告：**对于使用 SCIM 的组织：
- 撤销 {% data variables.product.product_name %} 上链接的用户身份也会删除 SAML 和 SCIM 元数据。 因此，身份提供商无法同步或解除预配已链接的用户身份。
- 管理员必须通过身份提供商撤销链接的身份。
- 要撤销链接的身份并通过身份提供商链接其他帐户，管理员可以删除用户并重新分配给 {% data variables.product.product_name %} 应用程序。 更多信息请参阅身份提供商的文档。

{% endwarning %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

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

- "[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
