---
title: Understanding IAM for enterprises
intro: |
  {%- ifversion ghec %}
  You can invite existing personal accounts on {% data variables.location.product_location %} to be members of your enterprise, and you can optionally enable SAML single sign-on (SSO) to centrally manage access. Alternatively, you can use {% data variables.product.prodname_emus %} with SAML SSO to create and control the accounts of your enterprise members.
  {%- elsif ghes %}
  You can use {% data variables.product.prodname_ghe_server %}'s built-in authentication, or you can centrally manage authentication and access to your instance with CAS, LDAP, or SAML.
  {%- endif %}
redirect_from:
  - /enterprise/admin/categories/authentication
  - /enterprise/admin/guides/installation/user-authentication
  - /enterprise/admin/articles/inviting-users
  - /enterprise/admin/guides/migrations/authenticating-users-for-your-github-enterprise-instance
  - /enterprise/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise
  - /admin/identity-and-access-management/understanding-iam-for-enterprises
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
children:
  - /about-saml-for-enterprise-iam
  - /abilities-and-restrictions-of-managed-user-accounts
  - /getting-started-with-enterprise-managed-users
  - /changing-authentication-methods
  - /allowing-built-in-authentication-for-users-outside-your-provider
  - /troubleshooting-identity-and-access-management-for-your-enterprise
shortTitle: Understand enterprise IAM
---

