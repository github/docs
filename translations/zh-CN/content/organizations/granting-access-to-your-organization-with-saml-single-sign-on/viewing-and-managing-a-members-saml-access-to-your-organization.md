---
title: 查看和管理成员对组织的 SAML 访问
intro: 您可以查看和撤销组织成员的链接身份、活动会话和授权凭据。
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理 SAML 访问
---

## 关于对组织的 SAML 访问

对组织启用 SAML 单点登录时，每个组织成员都可以将其在身份提供程序 (IdP) 上的外部身份链接到其在 {% data variables.product.product_location %} 上的现有帐户。 要在 {% data variables.product.product_name %} 上访问组织的资源，成员必须在其浏览器中启动 SAML 会话。 要使用 API 或 Git 访问组织的资源，成员必须使用被授权用于组织的个人访问令牌或 SSH 密钥。

您可以在同一页面上查看和撤销每个成员的链接身份、活动会话和授权凭据。

## 查看和撤销链接的身份

{% data reusables.saml.about-linked-identities %}

如果可用，该条目将包含 SCIM 数据。 For more information, see "[About SCIM for organizations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."

{% warning %}

**警告：**对于使用 SCIM 的组织：
- 撤销 {% data variables.product.product_name %} 上链接的用户身份也会删除 SAML 和 SCIM 元数据。 因此，身份提供商无法同步或解除预配已链接的用户身份。
- 管理员必须通过身份提供商撤销链接的身份。
- 要撤销链接的身份并通过身份提供商链接其他帐户，管理员可以删除用户并重新分配给 {% data variables.product.product_name %} 应用程序。 更多信息请参阅身份提供商的文档。

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## 查看和撤销活动的 SAML 会话

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## 查看和撤销授权的凭据

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## 延伸阅读

- "[- "](/articles/about-identity-and-access-management-with-saml-single-sign-on)关于使用 SAML 单点登录管理身份和访问{% ifversion ghec %}
- "[查看和管理用户对企业帐户的 SAML 访问](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"{% endif %}
