---
title: Configuring SAML single sign-on for Enterprise Managed Users
shortTitle: Configure SAML
intro: 'You can automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring Security Assertion Markup Language (SAML) single sign-on (SSO).'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
---

## About SAML SSO for {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, access to your enterprise's resources on {% data variables.location.product_location %} must be authenticated through your identity provider (IdP). Instead of signing in to {% data variables.product.prodname_dotcom %} with a {% data variables.product.prodname_dotcom %} username and password, members of your enterprise will sign in through your IdP.

After you configure SAML SSO, we recommend storing your recovery codes so you can recover access to your enterprise in the event that your IdP is unavailable.

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

## Prerequisites

- Ensure that you understand the integration requirements and level of support for your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning)."

- Your IdP must adhere to the SAML 2.0 specification. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

{% ifversion emu-public-scim-schema %}-{% endif %} To configure your IdP for SAML SSO with {% data variables.product.prodname_emus %}, you must have a tenant and administrative access on your IdP.

## Configuring SAML SSO for {% data variables.product.prodname_emus %}

To configure SAML SSO for your {% data variables.enterprise.prodname_emu_enterprise %}, you must configure an application on your IdP, then configure your enterprise on {% data variables.location.product_location %}. After you configure SAML SSO, you can configure user provisioning.

1. [Configure your IdP](#configuring-your-idp)
1. [Configure your enterprise](#configuring-your-enterprise)
1. [Enable provisioning](#enabling-provisioning)

### Configuring your IdP

1. {% ifversion emu-public-scim-schema %}If you use a partner IdP, to install the {% data variables.product.prodname_emu_idp_application %} application, click one of the following links.{% else %}To install the {% data variables.product.prodname_emu_idp_application %} application, click the link for your IdP below:{% endif %}

    - [Microsoft Entra ID application](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview) in Azure Marketplace (Entra ID was previously known as Azure AD)
    - [Okta application](https://www.okta.com/integrations/github-enterprise-managed-user) in Okta's integrations directory
    - [PingFederate downloads website](https://www.pingidentity.com/en/resources/downloads/pingfederate.html)

      - To download the PingFederate connector, navigate to the **Add-ons** tab and select **{% data variables.product.prodname_dotcom %} EMU Connector 1.0**.

1. To configure SAML SSO for {% data variables.product.prodname_emus %} on your IdP, read the following documentation. {% ifversion emu-public-scim-schema %}If you don't use a partner IdP, you can use the SAML configuration reference for {% data variables.product.product_name %} to create and configure a generic SAML 2.0 application on your IdP.{% endif %}

   - [Entra ID](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial) on Microsoft Learn
   - [Okta instructions](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html) in the Okta documentation
   - [PingFederate instructions](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_emu_connector) in the PingIdentity documentation
   {%- ifversion emu-public-scim-schema %}
   - "[AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/saml-configuration-reference)"
   {%- endif %}
1. To test and configure your enterprise, assign yourself or the user that will configure SAML SSO for your enterprise on {% data variables.location.product_location %} to the application you configured for {% data variables.product.prodname_emus %} on your IdP.

   > [!NOTE]
   > In order to test a successful authentication connection upon configuration, at least one user must be assigned to the IdP.

1. To continue configuring your enterprise on {% data variables.location.product_location %}, locate and note the following information from the application you installed on your IdP.

    | Value | Other names | Description |
    | :- | :- | :- |
    | IdP Sign-On URL | Login URL, IdP URL | Application's URL on your IdP |
    | IdP Identifier URL | Issuer | IdP's identifier to service providers for SAML authentication |
    | Signing certificate, Base64-encoded | Public certificate | Public certificate that IdP uses to sign authentication requests |

### Configuring your enterprise

After you configure SAML SSO for {% data variables.product.prodname_emus %} on your IdP, you can configure your enterprise on {% data variables.location.product_location %}.

After the initial configuration of SAML SSO, the only setting you can update on {% data variables.location.product_location %} for your existing SAML configuration is the SAML certificate. If you need to update the sign-on URL or issuer URL, you must first disable SAML SSO, then reconfigure SAML SSO with the new settings. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/disabling-authentication-for-enterprise-managed-users)."

{% data reusables.emus.sign-in-as-setup-user %}

   {% note %}

   **Note**: {% data reusables.enterprise-accounts.emu-password-reset-session %}

   {% endnote %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under "SAML single sign-on", select **Require SAML authentication**.
1. Under **Sign on URL**, type the HTTPS endpoint of your IdP for SSO requests that you noted while configuring your IdP.
1. Under **Issuer**, type your SAML issuer URL that you noted while configuring your IdP, to verify the authenticity of sent messages.
1. Under **Public Certificate**, paste the certificate that you noted while configuring your IdP, to verify SAML responses.
{% data reusables.saml.edit-signature-and-digest-methods %}
1. Before enabling SAML SSO for your enterprise, to ensure that the information you've entered is correct, click **Test SAML configuration**. {% data reusables.saml.test-must-succeed %}
1. Click **Save**.

    {% note %}

    **Note:** After you require SAML SSO for your enterprise, the setup user will no longer have access to the enterprise but will remain signed in to GitHub. Only {% data variables.enterprise.prodname_managed_users %} provisioned by your IdP will have access to the enterprise.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}

### Enabling provisioning

After you enable SAML SSO, enable provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

### Enabling guest collaborators

You can use the role of guest collaborator to grant limited access to vendors and contractors in your enterprise. Unlike enterprise members, guest collaborators only have access to internal repositories within organizations where they are a member.

If you use Entra ID or Okta for SAML authentication, you may need to update your IdP application to use guest collaborators. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators)."
