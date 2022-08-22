---
title: Troubleshooting identity and access management for your enterprise
shortTitle: Troubleshoot IAM
intro: Review common issues and solutions for identity and access management for your enterprise.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
---

## Username conflicts

{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalizes an identifier provided by your identity provider (IdP) to create each person's username on {% data variables.product.prodname_dotcom %}. If multiple accounts are normalized into the same {% data variables.product.prodname_dotcom %} username, a username conflict occurs, and only the first user account is created. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

{% ifversion ghec %}
## Errors when switching authentication configurations

If you're experiencing problems while switching between different authentication configurations, such as changing your SAML SSO configuration from an organization to an enterprise account or migrating from SAML to OIDC for {% data variables.product.prodname_emus %}, ensure you're following our best practices for the change.

- "[Switching your SAML configuration from an organization to an enterprise account](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
- "[Migrating from SAML to OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"

## Accessing your enterprise when SSO is not available

When a configuration error or an issue with your identity provider IdP prevents you from using SSO, you can use a recovery code to access your enterprise. For more information, see "[Accessing your enterprise account if your identity provider is unavailable](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)."
{% endif %}

## SAML authentication errors

If users are experiencing errors when attempting to authenticate with SAML, see "[Troubleshooting SAML authentication](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)."

{% ifversion ghec %}
## 参考リンク

- "[Troubleshooting identity and access management for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)"
{% endif %}
