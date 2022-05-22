---
title: 关于组织的 SCIM
intro: '通过“跨域身份管理系统”(System for Cross-domain Identity Management, SCIM)，管理员可以在系统之间自动交换用户身份信息。'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## 关于组织的 SCIM

如果您的组织使用 [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)，则可以实施 SCIM 来添加、管理和删除组织成员对 {% data variables.product.product_name %} 的访问。 例如，管理员可以使用 SCIM 撤销配置组织成员，以及从组织中自动删除成员。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

如果您使用 SAML SSO 而不实施 SCIM，将不能自动撤销配置。 当组织成员的会话在其访问权限从 IdP 删除后到期时，他们就会自动从组织中删除。 即使会话已到期，通过授权的令牌也可授予对组织的访问。 如果未使用 SCIM，要完全移除成员的访问权限，组织所有者必须在 IdP 中删除该成员的访问权限，并在 {% data variables.product.prodname_dotcom %} 上手动从组织中删除该成员。

{% data reusables.scim.changes-should-come-from-idp %}

## 支持的身份提供程序

这些身份提供程序 (IdP) 兼容组织的 {% data variables.product.product_name %} SCIM API。 更多信息请参阅 {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 文档中的 [SCIM](/rest/scim) 。
- Azure AD
- Okta
- OneLogin

## 关于组织的 SCIM 配置

{% data reusables.scim.dedicated-configuration-account %}

在授权 {% data variables.product.prodname_oauth_app %} 之前，您必须具有活动的 SAML 会话。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”。

{% note %}

**注意：** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## 延伸阅读

- "[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
