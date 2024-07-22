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
redirect_from:
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/troubleshooting-identity-and-access-management-for-your-enterprise
---

{% ifversion ghec %}

## Viewing external identity information for a user

If a user is unable to successfully authenticate using SAML, it may be helpful to view information about the single sign-on identity that's linked to the user's account on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

{% endif %}

## Username conflicts

{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalizes an identifier provided by your identity provider (IdP) to create each person's username on {% data variables.product.prodname_dotcom %}. If multiple accounts are normalized into the same {% data variables.product.prodname_dotcom %} username, a username conflict occurs, and only the first user account is created. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

{% ifversion ghec %}

## Errors when switching authentication configurations

If you're experiencing problems while switching between different authentication configurations, such as changing your SAML SSO configuration from an organization to an enterprise account or migrating from SAML to OIDC for {% data variables.product.prodname_emus %}, ensure you're following our best practices for the change.

* "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
* "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"
* "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)"

## Accessing your enterprise when SSO is not available

When a configuration error or an issue with your identity provider IdP prevents you from using SSO, you can use a recovery code to access your enterprise. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)."

## SCIM provisioning errors

{% data reusables.scim.emu-scim-rate-limit-details %}

Microsoft Entra ID (previously known as Azure AD) will retry SCIM provisioning attempts automatically during the next Entra ID sync cycle. The default SCIM provisioning interval for Entra ID is 40 minutes. For more information about this retry behavior, see the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#errors-and-retries) or contact Microsoft support if you need additional assistance.

Okta will retry failed SCIM provisioning attempts with manual Okta admin intervention. For more information about how an Okta admin can retry a failed task for a specific application, see the [Okta documentation](https://support.okta.com/help/s/article/How-to-retry-failed-tasks-for-a-specific-application?language=en_US) or contact Okta support.
{% endif %}

## SAML authentication errors

If users are experiencing errors when attempting to authenticate with SAML, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)."

{% ifversion ghec %}

## Further reading

* "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups)"
* "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)"
{% endif %}
