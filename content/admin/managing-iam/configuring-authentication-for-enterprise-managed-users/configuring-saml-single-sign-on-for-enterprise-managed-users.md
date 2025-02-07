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
  - /admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
---

**Before** following the steps in this article, make sure that your enterprise uses **managed users**. You can do so by checking whether your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen. If you see this, your enterprise uses **managed users** and you can follow the steps in this article.

If your enterprise uses **personal accounts**, you must follow a different process to configure SAML single sign-on. See [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

## About SAML SSO for {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, access to your enterprise's resources on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %} must be authenticated through your identity provider (IdP). Instead of signing in with a {% data variables.product.prodname_dotcom %} username and password, members of your enterprise will sign in through your IdP.

After you configure SAML SSO, we recommend storing your recovery codes so you can recover access to your enterprise in the event that your IdP is unavailable.

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

## Prerequisites

* Understand the integration requirements and level of support for your IdP.

  * {% data variables.product.company_short %} offers a "paved-path" integration and full support if you use a **partner IdP** for both authentication and provisioning.
  * Alternatively, you can use any system or combination of systems that conforms to SAML 2.0 and SCIM 2.0. However, support for resolving problems with these systems may be limited.

  For more details, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems).
* Your IdP must adhere to the SAML 2.0 specification. See the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.
* You must have tenant administrative access to your IdP.
* If you're configuring SAML SSO for a new enterprise, make sure to complete all previous steps in the initial configuration process. See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

## Configure SAML SSO for {% data variables.product.prodname_emus %}

To configure SAML SSO for your {% data variables.enterprise.prodname_emu_enterprise %}, you must configure an application on your IdP, then configure your enterprise on {% data variables.product.github %}. After you configure SAML SSO, you can configure user provisioning.

1. [Configure your IdP](#configure-your-idp)
1. [Configure your enterprise](#configure-your-enterprise)
1. [Enable provisioning](#enable-provisioning)

### Configure your IdP

1. If you use a partner IdP, to install the {% data variables.product.prodname_emu_idp_application %} application, click the link for your IdP and environment.

   {% rowheaders %}

   | Identity provider | App for {% data variables.product.prodname_dotcom_the_website %} | App for {% data variables.enterprise.data_residency_site %} |
   | ----------------- | ------------- | ------------------- |
   | Microsoft Entra ID | [{% data variables.product.prodname_emu_idp_application %}](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview) | [{% data variables.product.prodname_emu_idp_application %}](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview) |
   | Okta | [{% data variables.product.prodname_emu_idp_application %}](https://www.okta.com/integrations/github-enterprise-managed-user) | [{% data variables.product.prodname_emu_idp_application %} - ghe.com](https://www.okta.com/integrations/github-enterprise-managed-user-ghe-com/) |
   | PingFederate | [PingFederate downloads website](https://www.pingidentity.com/en/resources/downloads/pingfederate.html) (navigate to the **Add-ons** tab, then select **{% data variables.product.prodname_dotcom %} EMU Connector 1.0**) | [PingFederate downloads website](https://www.pingidentity.com/en/resources/downloads/pingfederate.html) (navigate to the **Add-ons** tab, then select **{% data variables.product.prodname_dotcom %} EMU Connector 1.0**) |

   {% endrowheaders %}

1. To configure SAML SSO for {% data variables.product.prodname_emus %} on a partner IdP, read the relevant documentation for your IdP and environment.

   {% rowheaders %}

   | Identity provider | Documentation for {% data variables.product.prodname_dotcom_the_website %} | Documentation for {% data variables.enterprise.data_residency_site %} |
   | ----------------- | ------------- | ------------------- |
   | Microsoft Entra ID | [Microsoft Learn](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial) | [Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-ghe-com-tutorial) |
   | Okta | [AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users) | [AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users) |
   | PingFederate | [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate) ("Prerequisities" and "1. Configure SAML" sections) | [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate) ("Prerequisities" and "1. Configure SAML" sections) |

   {% endrowheaders %}

   Alternatively, if you don't use a partner IdP, you can use the SAML configuration reference for {% data variables.product.github %} to create and configure a generic SAML 2.0 application on your IdP. See [AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/saml-configuration-reference).

1. To test and configure your enterprise, assign yourself or the user that will configure SAML SSO for your enterprise on {% data variables.product.github %} to the application you configured for {% data variables.product.prodname_emus %} on your IdP.

   > [!NOTE]
   > In order to test a successful authentication connection upon configuration, at least one user must be assigned to the IdP.

1. To continue configuring your enterprise on {% data variables.product.github %}, locate and note the following information from the application you installed on your IdP.

    | Value | Other names | Description |
    | :- | :- | :- |
    | IdP Sign-On URL | Login URL, IdP URL | Application's URL on your IdP |
    | IdP Identifier URL | Issuer | IdP's identifier to service providers for SAML authentication |
    | Signing certificate, Base64-encoded | Public certificate | Public certificate that IdP uses to sign authentication requests |

### Configure your enterprise

After you configure SAML SSO for {% data variables.product.prodname_emus %} on your IdP, you can configure your enterprise on {% data variables.product.github %}.

After the initial configuration of SAML SSO, the only setting you can update on {% data variables.product.github %} for your existing SAML configuration is the SAML certificate, which can be done by any member with the enterprise owner role. If you need to update the sign-on URL or issuer URL, you must first disable SAML SSO, then reconfigure SAML SSO with the new settings. For more information, see [AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/disabling-authentication-for-enterprise-managed-users).

{% data reusables.emus.sign-in-as-setup-user %}

   > [!NOTE]
   > {% data reusables.enterprise-accounts.emu-password-reset-session %}

1. If you're using a **non-partner IdP** (an IdP other than Okta, PingFederate or Entra ID), before enabling SAML, you must update a setting so that you will be able to set up SCIM using the REST API. See [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#configuring-provisioning-for-other-identity-management-systems).
{% data reusables.enterprise-accounts.access-enterprise-emu %}
{% data reusables.enterprise-accounts.identity-provider-tab %}
{% data reusables.enterprise-accounts.sso-configuration %}

1. Under "SAML single sign-on", select **Add SAML configuration**.
1. Under **Sign on URL**, type the HTTPS endpoint of your IdP for SSO requests that you noted while configuring your IdP.
1. Under **Issuer**, type your SAML issuer URL that you noted while configuring your IdP, to verify the authenticity of sent messages.
1. Under **Public Certificate**, paste the certificate that you noted while configuring your IdP, to verify SAML responses.
1. Under **Public Certificate**, select the **Signature Method** and **Digest Method** dropdown menus, then click the hashing algorithm used by your SAML issuer.
1. Before enabling SAML SSO for your enterprise, to ensure that the information you've entered is correct, click **Test SAML configuration**. {% data reusables.saml.test-must-succeed %}
1. Click **Save SAML settings**.

    > [!NOTE]
    > After you require SAML SSO for your enterprise and save SAML settings, the setup user will continue to have access to the enterprise and will remain signed in to GitHub along with the {% data variables.enterprise.prodname_managed_users %} provisioned by your IdP who will also have access to the enterprise.

{% data reusables.enterprise-accounts.download-recovery-codes %}

### Enable provisioning

After you enable SAML SSO, enable provisioning. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users).

### Enable guest collaborators

You can use the role of guest collaborator to grant limited access to vendors and contractors in your enterprise. Unlike enterprise members, guest collaborators only have access to internal repositories within organizations where they are a member.

If you use Entra ID or Okta for SAML authentication, you may need to update your IdP application to use guest collaborators. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators).
