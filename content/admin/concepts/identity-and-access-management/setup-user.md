---
title: Setup user
intro: 'The setup user is used only to configure authentication and provisioning for {% data variables.product.prodname_emus %}.'
versions:
  ghec: '*'
category:
  - Provision and manage enterprise users
---

## How should I use the setup user?

The setup user is an administrative account. It is **only** intended to be used for:

* Configuring authentication and provisioning
* SCIM provisioning via its {% data variables.product.pat_generic %}
* Regaining access to your enterprise in the event of an issue with your identity provider

For other enterprise administration tasks, such as creating organizations, use a **provisioned managed user account** with the appropriate administrative role.

## What is the setup user's username?

If you use **{% data variables.product.prodname_dotcom_the_website %}**, the username is your enterprise's shortcode, suffixed with `_admin`. For example: `fabrikam_admin`. 

If you use **{% data variables.enterprise.data_residency_site %}**, the username is a randomly generated shortcode, suffixed with `_admin`.

## How do I sign in as the setup user?

After we create your enterprise, you will receive an **email** inviting you to choose a password for the setup user. 

When you create the password, we strongly recommend that you **enable two-factor authentication (2FA)** for the account and **save your recovery codes**. 

Unlike provisioned managed users, the setup user cannot sign in via SSO. 

If you need to access enterprise recovery codes:
1. Navigate to github.com/login.
1. Enter the setup user's username (for example, shortcode_admin) and password.
1. Complete your 2FA challenge, or enter an enterprise recovery code if prompted. 

Enterprise recovery codes are not the same as personal two-factor authentication recovery codes. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

- **Without 2FA enabled**, you must provide an enterprise recovery code **every** time you sign in.
- If **2FA is enabled**, you must sign in with a successful 2FA challenge response. You only need to enter an enterprise recovery code to access enterprise settings.

{% data reusables.enterprise-accounts.emu-password-reset-session %}

## Can I change the email address for the setup user?

You can change the email address at any time while signed in to the setup user account. This is useful if the original recipient has left your organization or if you need to route notifications to a different address.

> [!WARNING]
> Ensure you have access to the new email address before making this change. You'll need to verify the new address via email.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
1. Under "Update email address *", type a new email address and click **Update**.
1. {% data variables.product.prodname_dotcom %} will send you an email with a link in it. After you click that link, you'll be taken to your {% data variables.product.prodname_dotcom %} dashboard and see a confirmation banner.

## Can I delete the setup user?

The setup user **cannot** be deleted, because it is essential for maintaining authentication and provisioning. The only way to remove the setup user is to delete your enterprise account. See [AUTOTITLE](/admin/managing-your-enterprise-account/deleting-an-enterprise-account).

## Further reading

- [AUTOTITLE](/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes#downloading-codes-for-an-enterprise-with-enterprise-managed-users)
