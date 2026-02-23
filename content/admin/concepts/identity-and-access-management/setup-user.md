---
title: Setup user
intro: 'The setup user is used to configure authentication and provisioning for {% data variables.product.prodname_emus %}.'
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

## How should I use the setup user?

The setup user is **only** intended to be used for:

* Configuring authentication and provisioning
* SCIM provisioning via its {% data variables.product.pat_generic %}
* Regaining access to your enterprise in the event of an issue with your identity provider, by utilizing the enterprise's recovery codes

For other enterprise administration tasks, such as creating organizations, use a provisioned managed user account with the appropriate administrative role.

## How do I sign in as the setup user?

After we create your enterprise, you will receive an **email** inviting you to choose a password for the setup user.

When you create the password, you should enable two-factor authentication (2FA) for the account.

Unlike provisioned managed users, the setup user cannot sign in via SSO. Instead, the following applies:

* **With 2FA enabled**: All subsequent login attempts for the setup user account will require a successful 2FA challenge response. After completing the 2FA challenge, you will be prompted for a recovery code. You can skip this prompt and navigate directly to {% data variables.product.prodname_dotcom_the_website %} to access the setup user account. However, accessing your enterprise settings will always require a recovery code.
* **Without 2FA enabled**: You must provide a recovery code every time you sign in.

We strongly recommend enabling 2FA on the setup user to avoid needing a recovery code for every sign-in attempt. To avoid being locked out of your account, after enabling single sign-on, **save your recovery codes**. See [AUTOTITLE](/admin/managing-iam/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes#downloading-codes-for-an-enterprise-with-enterprise-managed-users).

{% data reusables.enterprise-accounts.emu-password-reset-session %}
