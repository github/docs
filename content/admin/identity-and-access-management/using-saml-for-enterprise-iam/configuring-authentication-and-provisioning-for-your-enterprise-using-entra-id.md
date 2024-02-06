---
title: Configuring authentication and provisioning for your enterprise using Entra ID
shortTitle: Configure with Entra ID
intro: 'You can use a tenant in Microsoft Entra ID (previously known as Azure AD) as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
---

## About authentication and user provisioning with Entra ID

Entra ID is a service from Microsoft that allows you to centrally manage user accounts and access to web applications. For more information, see [What is Microsoft Entra ID?](https://learn.microsoft.com/entra/fundamentals/whatis) in the Microsoft Docs.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

After you enable SAML SSO and SCIM for {% data variables.product.product_name %} using Entra ID, you can accomplish the following from your Entra ID tenant.

- Assign the {% data variables.product.product_name %} application on Entra ID to a user account to automatically create and grant access to a corresponding user account on {% data variables.product.product_name %}.
- Unassign the {% data variables.product.product_name %} application to a user account on Entra ID to deactivate the corresponding user account on {% data variables.product.product_name %}.
- Assign the {% data variables.product.product_name %} application to an IdP group on Entra ID to automatically create and grant access to user accounts on {% data variables.product.product_name %} for all members of the IdP group. In addition, the IdP group is available on {% data variables.product.product_name %} for connection to a team and its parent organization.
- Unassign the {% data variables.product.product_name %} application from an IdP group to deactivate the {% data variables.product.product_name %} user accounts of all IdP users who had access only through that IdP group and remove the users from the parent organization. The IdP group will be disconnected from any teams on {% data variables.product.product_name %}.

For more information about managing identity and access for your enterprise on {% data variables.location.product_location %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam)."

## Prerequisites

- To configure authentication and user provisioning for {% data variables.product.product_name %} using Entra ID, you must have an Entra ID account and tenant. For more information, see the [Entra ID website](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) and [Quickstart: Set up a tenant](https://learn.microsoft.com/entra/identity-platform/quickstart-create-new-tenant) in the Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %}
{%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Configuring authentication and user provisioning with Entra ID

{% ifversion scim-for-ghes %}

1. Configure SAML SSO for {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."
1. Configure user provisioning with SCIM for your instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)."

{% endif %}

## Managing enterprise owners

The steps to make a person an enterprise owner depend on whether you only use SAML or also use SCIM. For more information about enterprise owners, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

If you configured provisioning, to grant the user enterprise ownership in {% data variables.product.product_name %}, assign the enterprise owner role to the user in Entra ID.

If you did not configure provisioning, to grant the user enterprise ownership in {% data variables.product.product_name %}, include the `administrator` attribute in the SAML assertion for the user account on the IdP, with the value of `true`. For more information about including the `administrator` attribute in the SAML claim from Entra ID, see [How to: customize claims issued in the SAML token for enterprise applications](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in the Microsoft Docs.
