---
title: 'Getting started with {% data variables.product.prodname_emus %}'
shortTitle: Get started with managed users
intro: 'Learn how to create and configure an {% data variables.enterprise.prodname_emu_enterprise %}.'
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
redirect_from:
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users
---

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

## Create a new enterprise account

To use {% data variables.product.prodname_emus %}, you need a **separate type of enterprise account** with {% data variables.product.prodname_emus %} enabled.

* To create an enterprise on {% data variables.product.prodname_dotcom_the_website %}, start a free 30-day trial of {% data variables.product.prodname_ghe_cloud %}, and choose **Enterprise with managed users**. See [AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).
* If you require {% data variables.enterprise.data_residency_short %}, contact {% data variables.contact.contact_enterprise_sales %}.

### Understand where your enterprise is hosted

{% data variables.product.prodname_emus %} are available on {% data variables.product.prodname_dotcom_the_website %} or, if you use {% data variables.enterprise.data_residency_short %}, on your own subdomain of {% data variables.enterprise.data_residency_site %}.

The setup process for the environments is similar. However, you will need to **pay attention** to where your enterprise is hosted as you follow the process. For example, there may be differences in the application you need to use in your identity provider, or the configuration values you need to provide.

## Create the setup user

After we create your enterprise, you will receive an email inviting you to choose a password for the setup user, which is used to configure authentication and provisioning. The username is your enterprise's shortcode (chosen by you or randomly generated), suffixed with `_admin`. For example: `fabrikam_admin`.

Using an **incognito or private browsing window**:

1. Set the user's password.
1. Enable two-factor authentication (2FA), and save the recovery codes. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

   > [!WARNING]
   > All subsequent login attempts for the setup user account will require a successful 2FA challenge response or the use of an enterprise recovery code to complete authentication. To avoid being locked out of your account, after enabling single sign-on, save your enterprise recovery codes. See [AUTOTITLE](/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes#downloading-codes-for-an-enterprise-with-enterprise-managed-users).

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% data reusables.enterprise-accounts.emu-recommend-password-manager %}

   > [!NOTE]
   > Once single sign-on has been configured on the enterprise, the setup user is only intended to be used going forwards for:
   >
   > * SCIM provisioning via its {% data variables.product.pat_generic %}.
   > * To regain access to your enterprise in the event of an issue with your identity provider by utilizing the enterprise's SAML recovery codes.
   >
   > For other enterprise administration tasks, you should use a provisioned managed user account with the enterprise owner role.

## Create a {% data variables.product.pat_generic %}

{% data reusables.enterprise-accounts.emu-create-a-pat %}

## Configure authentication

{% data reusables.enterprise-accounts.emu-configure-authentication %}

{% data variables.product.company_short %} offers a "paved-path" integration and full support if you use a partner IdP for both authentication and provisioning. Alternatively, you can use any system, or combination of systems, that conforms to SAML 2.0 and SCIM 2.0. However, support for resolving problems with these systems may be limited. For more details, see [AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems).

## Configure provisioning

{% data reusables.enterprise-accounts.emu-configure-provisioning %}

## Manage organization membership

{% data reusables.enterprise-accounts.emu-manage-org-membership %}

## Support developers with multiple user accounts

Developers may need to maintain separate, personal accounts for their work outside of your {% data variables.enterprise.prodname_emu_enterprise %}. You can help them manage multiple accounts by providing the following resources:

* **On the command line**, developers can configure Git to simplify the process of using multiple accounts. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).
* **In the web interface**, developers can switch between accounts without always needing to re-authenticate. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/switching-between-accounts).
