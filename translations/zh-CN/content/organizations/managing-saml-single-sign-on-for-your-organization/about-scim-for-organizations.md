---
title: About SCIM for organizations
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

## About SCIM for organizations

If your organization uses [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. 例如，管理员可以使用 SCIM 撤销配置组织成员，以及从组织中自动删除成员。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

如果您使用 SAML SSO 而不实施 SCIM，将不能自动撤销配置。 当组织成员的会话在其访问权限从 IdP 删除后到期时，他们就会自动从组织中删除。 即使会话已到期，通过授权的令牌也可授予对组织的访问。 If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## 支持的身份提供程序

These identity providers (IdPs) are compatible with the {% data variables.product.product_name %} SCIM API for organizations. 更多信息请参阅 {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 文档中的 [SCIM](/rest/scim) 。
- Azure AD
- Okta
- OneLogin

## About SCIM configuration for organizations

{% data reusables.scim.dedicated-configuration-account %}

Before you authorize the {% data variables.product.prodname_oauth_app %}, you must have an active SAML session. 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”。

{% note %}

**注意：** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## 延伸阅读

- "[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
