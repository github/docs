---
title: 管理企业的 IAM
intro: |
  {%- ifversion ghec %}
  您可以邀请 {% data variables.product.product_location %} 上的现有个人帐户成为企业的成员，还可以选择启用 SAML 单点登录 (SSO) 来集中管理访问权限。 或者，您也可以使用 {% data variables.product.prodname_emus %} 和 SAML SSO 来创建和控制企业成员的帐户。
  {%- elsif ghes %}
  您可以使用 {% data variables.product.product_name %} 的内置身份验证，也可以使用 CAS、LDAP 或 SAML 集中管理身份验证和对实例的访问。
  {%- elsif ghae %}
  您必须使用 SAML 单点登录 (SSO) 在 {% data variables.product.product_name %} 集中管理身份验证和对企业的访问。 （可选）当您对身份提供程序 (IdP) 进行更改时，可以使用跨域身份管理系统 (SCIM) 在 {% data variables.product.product_name %} 上自动预置帐户和访问权限。
  {%- endif %}
redirect_from:
  - /enterprise/admin/categories/authentication
  - /enterprise/admin/guides/installation/user-authentication
  - /enterprise/admin/articles/inviting-users
  - /enterprise/admin/guides/migrations/authenticating-users-for-your-github-enterprise-instance
  - /enterprise/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
children:
  - /about-authentication-for-your-enterprise
  - /username-considerations-for-external-authentication
  - /changing-authentication-methods
  - /allowing-built-in-authentication-for-users-outside-your-provider
  - /troubleshooting-identity-and-access-management-for-your-enterprise
shortTitle: 管理企业的 IAM
---

