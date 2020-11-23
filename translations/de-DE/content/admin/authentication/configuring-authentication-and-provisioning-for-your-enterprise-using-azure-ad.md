---
title: Configuring authentication and provisioning for your enterprise using Azure AD
shortTitle: Configuring with Azure AD
intro: You can use a tenant in Azure Active Directory (Azure AD) as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.product.product_location %}.
permissions: Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### About authentication and user provisioning with Azure AD

Azure Active Directory (Azure AD) is a service from Microsoft that allows you to centrally manage user accounts and access to web applications. For more information, see [What is Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) in the Microsoft Docs.

To manage identity and access for {% data variables.product.product_name %}, you can use an Azure AD tenant as a SAML IdP for authentication. You can also configure Azure AD to automatically provision accounts and access with SCIM. This configuration allows you to assign or unassign the {% data variables.product.prodname_ghe_managed %} application for a user account in your Azure AD tenant to automatically create, grant access to, or deactivate a corresponding user account on {% data variables.product.product_name %}.

For more information about managing identity and access for your enterprise on {% data variables.product.product_location %}, see "[Managing identity and access for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise)."

### Vorrausetzungen

To configure authentication and user provisioning for {% data variables.product.product_name %} using Azure AD, you must have an Azure AD account and tenant. For more information, see the [Azure AD website](https://azure.microsoft.com/free/active-directory) and [Quickstart: Create an Azure Active Directory tenant](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) in the Microsoft Docs.

{% data reusables.saml.assert-the-administrator-attribute %} For more information about including the `administrator` attribute in the SAML claim from Azure AD, see [How to: customize claims issued in the SAML token for enterprise applications](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in the Microsoft Docs.

{% data reusables.saml.create-a-machine-user %}

### Configuring authentication and user provisioning with Azure AD

{% if currentVersion == "github-ae@latest" %}

1. In Azure AD, add {% data variables.product.ae_azure_ad_app_link %} to your tenant and configure single sign-on. For more information, see [Tutorial: Azure Active Directory single sign-on (SSO) integration with {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) in the Microsoft Docs.

1. In {% data variables.product.prodname_ghe_managed %}, enter the details for your Azure AD tenant.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - If you've already configured SAML SSO for {% data variables.product.product_location %} using another IdP and you want to use Azure AD instead, you can edit your configuration. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)."

1. Enable user provisioning in {% data variables.product.product_name %} and configure user provisioning in Azure AD. For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)."

{% endif %}
