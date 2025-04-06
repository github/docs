---
title: Configuring SCIM provisioning {% ifversion ghec %}for Enterprise Managed Users{% else %}to manage users{% endif %}
shortTitle: Configure SCIM provisioning
intro: 'You can manage the lifecycle of your enterprise''s user accounts from your identity provider (IdP) using System for Cross-domain Identity Management (SCIM).'
allowTitleToDifferFromFilename: true
permissions: '{% ifversion scim-for-ghes-public-beta %}Site administrators{% endif %}'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
topics:
  - Accounts
  - Enterprise
---

{% data reusables.scim.ghes-beta-note %}

{% data reusables.enterprise_user_management.about-scim-provisioning %}

If you use a partner IdP, you can simplify the configuration of SCIM provisioning by using the partner IdP's application. If you don't use a partner IdP for provisioning, you can implement SCIM using calls to {% data variables.product.company_short %}'s REST API for SCIM{% ifversion ghec %}, which is in beta and subject to change{% endif %}. For more information, see {% ifversion ghec %}"[AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems)."{% else %}"[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers)."{% endif %}

{% ifversion ghec %}

## About user lifecycle management with SCIM

{% data reusables.enterprise_user_management.scim-manages-user-lifecycle %}

{% endif %}

## Prerequisites

{% ifversion ghec %}

If you're configuring SCIM provisioning for a new enterprise, make sure to complete all previous steps in the initial configuration process. See "[AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users)."

{% else %}

* For authentication, your instance must use SAML SSO, or a mix of SAML and built-in authentication.
  * You cannot mix SCIM with other external authentication methods. If you use CAS or LDAP, you will need to migrate to SAML before using SCIM.
  * After you have configured SCIM, you must keep SAML authentication enabled to continue using SCIM.
* You must have administrative access on your IdP to configure user provisioning for {% data variables.product.product_name %}.
* You must have access to the Management Console on {% data variables.product.product_name %}.
* If you are configuring SCIM on an instance with existing users, ensure you have understood how SCIM will identify and update these users. See "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#what-will-happen-to-existing-users-on-my-instance)."

{% endif %}

{% ifversion ghes %}

## 1. Create a built-in setup user

To ensure you can continue to sign in and configure settings when SCIM is enabled, you'll create an enterprise owner using built-in authentication.

1. Sign in to {% data variables.product.product_name %} as a user with access to the Management Console.
1. If you have **already enabled SAML authentication**, ensure your settings allow you to create and promote a built-in setup user. Go to the "Authentication" section of the Management Console and enable the following settings:

   * Select **Allow creation of accounts with built-in authentication**, so you can create the user.
   * Select **Disable administrator demotion/promotion**, so admin permissions can be granted outside of your SAML provider.

   For help finding these settings, see "[AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."

1. Create a built-in user account to perform provisioning actions on your instance. See "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)."

   >[!NOTE] Ensure the user's email and username are different from any user you plan on provisioning through SCIM. If your email provider supports it, you can modify an email address by adding `+admin`, for example `johndoe+admin@example.com`.

1. Promote the user to an enterprise owner. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#promoting-a-user-from-the-enterprise-settings)."

## 2. Create a {% data variables.product.pat_generic %}

1. Sign in to your instance as the **built-in setup user** you created in the previous section.
1. Create a {% data variables.product.pat_v1 %}. For instructions, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   * The token must have the **admin:enterprise** scope.
   * The token must have **no expiration**. If you specify an expiration date, SCIM will no longer function after the expiration date passes.

1. Store the token securely in a password manager until you need the token again later in the setup process. You'll need the token to configure SCIM on your IdP.

## 3. Enable SAML on your instance

> [!NOTE] Complete this section if either of the following situations applies:
> * If you have **not already enabled SAML authentication**, you will need to do so before you can enable SCIM.
> * If you already use SAML authentication and want to use a **partner IdP for both authentication and provisioning**, you must configure SAML using an application that supports automatic provisioning via SCIM.

1. Sign in to your instance as a user with access to the Management Console.
1. Go to the "Authentication" section of the Management Console. For instructions, see "[AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."
1. Select **SAML**.
1. Configure the SAML settings according to your requirements and the IdP you're using.

   * So the built-in setup user can continue to authenticate, ensure you select the following settings:
     * **Allow creation of accounts with built-in authentication**
     * **Disable administrator demotion/promotion**
   * If you're using a partner IdP, to find the information you need to configure the settings, follow the "Configure SAML" section of the relevant guide.
     * "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-entra-id#1-configure-saml)"
     * "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate#1-configure-saml)"
     * "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta#1-configure-saml)"

1. Optionally, complete configuration of the SAML settings within the application in your IdP. Alternatively, you can leave this step until later.

## 4. Enable SCIM on your instance

1. Sign in to your instance as the **built-in setup user** you created earlier.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SCIM Configuration", select **Enable SCIM configuration**.

{% endif %}

{% ifversion ghec %}

## Configuring user provisioning for {% data variables.product.prodname_emus %}

{% else %}

## 5. Configure your identity provider

{% endif %}

After completing the setup on {% data variables.product.prodname_dotcom %}, you can configure provisioning on your IdP. The instructions you should follow differ depending on whether you use a partner IdP's application for both authentication and provisioning.

* [Configuring provisioning if you use a partner IdP's application](#configuring-provisioning-if-you-use-a-partner-idps-application)
* [Configuring provisioning for other identity management systems](#configuring-provisioning-for-other-identity-management-systems)

### Configuring provisioning if you use a partner IdP's application

{% ifversion ghec %}

To use a partner IdP's application both authentication and provisioning, review the partner's instructions for configuring provisioning in the links in the following table.

{% rowheaders %}

| IdP | SSO method | More information |
|---|---|---|
| Microsoft Entra ID (previously known as Azure AD) | OIDC | [Tutorial: Configure GitHub Enterprise Managed User (OIDC) for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) on Microsoft Learn |
| Entra ID | SAML | [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) on Microsoft Learn |
| Okta | SAML | "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)" |
| PingFederate | SAML | [Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_configure_pingfederate_for_provisioning_and_sso) and [Managing channels](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saasmanagementtasklet_saasmanagementstate) in the PingFederate documentation |

{% endrowheaders %}

{% else %}

To use a partner IdP's application for both authentication and provisioning, review the instructions that are linked below. Complete the steps for enabling SCIM, plus any SAML configuration that you haven't already performed.

* "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-entra-id)"
* "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-authentication-and-provisioning-with-pingfederate)"
* "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-with-okta)"

{% endif %}

### Configuring provisioning for other identity management systems

If you don't use a partner IdP, or if you only use a partner IdP for authentication, you can manage the lifecycle of user accounts using {% data variables.product.company_short %}'s REST API endpoints for SCIM provisioning. These endpoints are in beta and subject to change. See "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api)."

{% ifversion emu-public-scim-schema %}

{% data reusables.emus.sign-in-as-setup-user %}

   {% note %}

   **Note**: {% data reusables.enterprise-accounts.emu-password-reset-session %}

   {% endnote %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Open SCIM Configuration", select "Enable open SCIM configuration".
1. Manage the lifecycle of your users by making calls to the REST API endpoints for SCIM provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api)."

{% endif %}

{% ifversion scim-for-ghes-public-beta %}

## 6. Disable optional settings

After you have finished the configuration process, you can disable the following settings in the Management Console:

* **Allow creation of accounts with built-in authentication**: Disable this setting if you want all users to be provisioned from your IdP.
* **Disable administrator demotion/promotion**: Disable this setting if you want to be able to grant the enterprise owner role via SCIM.

{% endif %}

## {% ifversion ghec %}Assigning{% else %}7. Assign{% endif %} users and groups

{% data reusables.enterprise-managed.assigning-users %}

{% data reusables.enterprise-managed.assigning-roles %}

Entra ID does not support provisioning nested groups. For more information, see [How Application Provisioning works in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/app-provisioning/how-provisioning-works#assignment-based-scoping) on Microsoft Learn.
