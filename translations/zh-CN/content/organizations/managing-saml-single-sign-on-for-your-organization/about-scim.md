---
title: 关于 SCIM
intro: '通过“跨域身份管理系统”(System for Cross-domain Identity Management, SCIM)，管理员可以在系统之间自动交换用户身份信息。'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.enterprise-accounts.emu-scim-note %}

如果在组织中使用 [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)，您可以实施 SCIM 来添加、管理和删除组织成员对 {% data variables.product.product_name %} 的访问权限。 例如，管理员可以使用 SCIM 撤销配置组织成员，以及从组织中自动删除成员。

如果您使用 SAML SSO 而不实施 SCIM，将不能自动撤销配置。 当组织成员的会话在其访问权限从 IdP 删除后到期时，他们就会自动从组织中删除。 即使会话已到期，通过授权的令牌也可授予对组织的访问。 要删除访问权限，组织管理员可以手动从组织删除授权的令牌，或者通过 SCIM 自动执行删除。

这些身份提供程序兼容组织的 {% data variables.product.product_name %} SCIM API。 更多信息请参阅 {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 文档中的 [SCIM](/rest/reference/scim) 。
- Azure AD
- Okta
- OneLogin

{% note %}

**注：**{% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

{% data reusables.scim.changes-should-come-from-idp %}

{% data reusables.scim.enterprise-account-scim %}

## 延伸阅读

- "[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
