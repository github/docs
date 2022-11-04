---
title: Configuring authentication and provisioning for your enterprise using Azure AD
shortTitle: Configure with Azure AD
intro: 'You can use a tenant in Azure Active Directory (Azure AD) as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
---

## About authentication and user provisioning with Azure AD

Azure Active Directory (Azure AD) is a service from Microsoft that allows you to centrally manage user accounts and access to web applications. For more information, see [What is Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) in the Microsoft Docs.

To manage identity and access for {% data variables.product.product_name %}, you can use an Azure AD tenant as a SAML IdP for authentication. You can also configure Azure AD to automatically provision accounts and access membership with SCIM, which allows you to create {% data variables.product.product_name %} users and manage team and organization membership from your Azure AD tenant.

{% data reusables.scim.ghes-beta-note %}

After you enable SAML SSO and SCIM for {% data variables.product.product_name %} using Azure AD, you can accomplish the following from your Azure AD tenant.

* Assign the {% data variables.product.product_name %} application on Azure AD to a user account to automatically create and grant access to a corresponding user account on {% data variables.product.product_name %}.
* Unassign the {% data variables.product.product_name %} application to a user account on Azure AD to deactivate the corresponding user account on {% data variables.product.product_name %}.
* Assign the {% data variables.product.product_name %} application to an IdP group on Azure AD to automatically create and grant access to user accounts on {% data variables.product.product_name %} for all members of the IdP group. In addition, the IdP group is available on {% data variables.product.product_name %} for connection to a team and its parent organization.
* Unassign the {% data variables.product.product_name %} application from an IdP group to deactivate the {% data variables.product.product_name %} user accounts of all IdP users who had access only through that IdP group and remove the users from the parent organization. The IdP group will be disconnected from any teams on {% data variables.product.product_name %}.

For more information about managing identity and access for your enterprise on {% data variables.location.product_location %}, see "[Managing identity and access for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise)." For more information about synchronizing teams with IdP groups, see "[Synchronizing a team with an identity provider group](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)."

## Prerequisites

- To configure authentication and user provisioning for {% data variables.product.product_name %} using Azure AD, you must have an Azure AD account and tenant. For more information, see the [Azure AD website](https://azure.microsoft.com/free/active-directory) and [Quickstart: Create an Azure Active Directory tenant](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) in the Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %}
{%- endif %}

- {% data reusables.saml.assert-the-administrator-attribute %} For more information about including the `administrator` attribute in the SAML claim from Azure AD, see [How to: customize claims issued in the SAML token for enterprise applications](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in the Microsoft Docs.

- {% data reusables.saml.create-a-machine-user %}

## Configuring authentication and user provisioning with Azure AD

In your Azure AD tenant, add the application for {% data variables.product.product_name %}, then configure provisioning.

{% ifversion ghae %}

1. In Azure AD, add the {% data variables.enterprise.ae_azure_ad_app_link %} to your tenant and configure single sign-on. For more information, see [Tutorial: Azure Active Directory single sign-on (SSO) integration with {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) in the Microsoft Docs.

1. In {% data variables.product.product_name %}, enter the details for your Azure AD tenant.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - If you've already configured SAML SSO for {% data variables.location.product_location %} using another IdP and you want to use Azure AD instead, you can edit your configuration. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)."

1. Enable user provisioning in {% data variables.product.product_name %} and configure user provisioning in Azure AD. For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)."

{% elsif scim-for-ghes %}

1. In the Azure AD tenant, in the left sidebar, click **Provisioning**.

1. Under "Tenant URL", type the full endpoint URL for SCIM on {% data variables.location.product_location %}. For more information, see "[SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls)" in the REST API documentation.

1. Under "Secret Token", type the {% data variables.product.pat_v1 %} that you created in step 4 of "[Configuring user provisioning with SCIM for your enterprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)."

1. To ensure a successful connection from Azure AD to {% data variables.location.product_location %}, Click **Test Connection**.

1. After you ensure a successful connection, at the top of the page, click **Save**.

{% endif %}
