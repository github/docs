---
title: Managing IAM for your enterprise
intro: |
  {%- ifversion ghec %}
  You can invite existing personal accounts on {% data variables.location.product_location %} to be members of your enterprise, and you can optionally enable SAML single sign-on (SSO) to centrally manage access. Alternatively, you can use {% data variables.product.prodname_emus %} with SAML SSO to create and control the accounts of your enterprise members.
  {%- elsif ghes %}
  You can use {% data variables.product.product_name %}'s built-in authentication, or you can centrally manage authentication and access to your instance with CAS, LDAP, or SAML.
  {%- elsif ghae %}
  You must use SAML single sign-on (SSO) to centrally manage authentication and access to your enterprise on {% data variables.product.product_name %}. Optionally, you can use System for Cross-domain Identity Management (SCIM) to automatically provision accounts and access on {% data variables.product.product_name %} when you make changes on your identity provider (IdP).
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
shortTitle: Manage IAM for your enterprise
---

