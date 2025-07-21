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

If a user is unable to successfully authenticate using SAML, it may be helpful to view information about the single sign-on identity that's linked to the user's account on {% data variables.product.prodname_dotcom %}. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).

{% endif %}

## Username conflicts

{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.github %} normalizes the SCIM `userName` attribute value that is sent by an identity provider (IdP) in a SCIM API call to create each person's username on {% data variables.product.prodname_dotcom %}. If multiple accounts are normalized into the same {% data variables.product.prodname_dotcom %} username, a username conflict occurs, and only the first user account is created. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

{% ifversion ghec %}

## Errors when switching authentication configurations

If you're experiencing problems while switching between different authentication configurations, such as changing your SAML SSO configuration from an organization to an enterprise account or migrating from SAML to OIDC for {% data variables.product.prodname_emus %}, ensure you're following our best practices for the change.

* [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)
* [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)
* [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)

{% endif %}

## Accessing your enterprise when SSO is not available

When a configuration error or an issue with your identity provider IdP prevents you from using SSO, you can use a {% ifversion ghec %}recovery code to access your enterprise. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).{% else %}site admin with access to the Management Console to update your settings, or disable SAML temporarily. For more information, see [AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console).{% endif %}

## SCIM provisioning errors

{% ifversion ghec %}
{% data reusables.scim.emu-scim-rate-limit-details %}
{% endif %}

Microsoft Entra ID (previously known as Azure AD) will retry SCIM provisioning attempts automatically during the next Entra ID sync cycle. The default SCIM provisioning interval for Entra ID is 40 minutes. For more information about this retry behavior, see the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#errors-and-retries) or contact Microsoft support if you need additional assistance.

Okta will retry failed SCIM provisioning attempts with manual Okta admin intervention. For more information about how an Okta admin can retry a failed task for a specific application, see the [Okta documentation](https://support.okta.com/help/s/article/How-to-retry-failed-tasks-for-a-specific-application?language=en_US) or contact Okta support.

In{% ifversion ghec %} an {% data variables.enterprise.prodname_emu_enterprise %}{% else %} your instance{% endif %} where SCIM is generally functioning properly, individual user SCIM provisioning attempts sometimes fail. Users will be unable to sign in until their account is provisioned to {% data variables.product.github %}. These individual SCIM user provisioning failures result in an HTTP 400 range status code and are typically caused by issues with username normalization or username conflicts, where another user with the same normalized username already exists in the enterprise. See [AUTOTITLE](/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication).

## SAML authentication errors

If users are experiencing errors when attempting to authenticate with SAML, see [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication).

{% ifversion scim-for-ghes-ga %}

## SAML and SCIM data mapping errors

If you use SAML with SCIM on your {% data variables.product.prodname_ghe_server %} instance, and a user's SAML data does not match to an existing SCIM provisioned identity, {% data variables.product.github %} will return an error.

For Entra ID, the error will look like:

![Screenshot of an Entra ID SAML and SCIM data mapping error.](/assets/images/help/saml/entra-id-saml-scim-mapping-error.png)

For all other identity providers, the error will look like:

![Screenshot of an Okta SAML and SCIM data mapping error.](/assets/images/help/saml/okta-saml-scim-mapping-error.png)

When this error occurs, please follow the steps below:

1. Ensure that a SCIM identity has been provisioned for the user by searching through the users on your instance. For more information on how to find SCIM provisioned users on your instance, please see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-account-type-saml-and-scim).
    * If the user has not been provisioned yet, it is either because the identity provider has not yet sent a provisioning request, or the provisioning request failed. Enterprise administrators can use their [audit log](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_identity) events to determine which of these two scenarios they are impacted by. For more information, please see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api#troubleshooting-scim-provisioning).
1. If the user has been successfully provisioned on your instance, you will need to ensure that the value for the SAML attribute listed in the error message matches the value of the listed SCIM attribute. To find the value for the SCIM attribute, please see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise?search-overlay-input=saml+identity&search-overlay-ask-ai=true#viewing-a-linked-identity).
    * For example, to troubleshoot the screenshot above, we would look at the user's SCIM "External ID" value. Using that value, we would ensure that the user has the correct value set with the Identity Provider.

For more information on how {% data variables.product.github %} maps SAML and SCIM data for users, please see [AUTOTITLE](/rest/enterprise-admin/scim?apiVersion=2022-11-28#mapping-of-saml-and-scim-data).

{% endif %}

{% ifversion ghec %}

## Conflicting SAML identity errors

{% data reusables.saml.conflicting-identity %}

{% endif %}

## Further reading

{% ifversion scim-for-ghes-public-beta %}
* [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups)
{% elsif ghec %}
* [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups)
* [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)
{% endif %}
