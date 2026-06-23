---
title: Revoking your credentials
intro: 'If you believe your account credentials may be compromised, you can revoke all your authorizations to protect any enterprises you have access to. If you are a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you can also choose to delete all your credentials.'
versions:
  feature: single_user_cred_revocation
shortTitle: Revoke your credentials
category:
  - Manage access credentials
---

If you believe your account may be compromised, your hardware was lost or stolen, or you otherwise need to immediately revoke all access associated with your account, you can take action on all of your credentials at once to quickly reduce risk.

Depending on your account type, the following actions are available:

* **Revoke all SSO authorizations**: Remove your credentials' access to SSO-protected resources in an enterprise. This action removes SSO authorizations but does not delete the credentials themselves.
* **Delete all keys and tokens**: Permanently delete all your tokens and SSH keys. This option is available for members of an {% data variables.enterprise.prodname_emu_enterprise %}.

> [!WARNING] These actions are irreversible. Once you revoke authorizations or delete credentials, you cannot restore them. You will need to create new credentials and re-authorize them for any organizations or processes that require access.

## Understanding the impact

Before taking action, consider the following:

* **Automations will break**: Any scripts, CI/CD pipelines, or automated processes that use your tokens will stop working.
* **Re-authorization required**: After revoking SSO authorizations, you will need to create new credentials and authorize them with each organization.
* **SSH access**: If you delete your SSH keys, you will need to generate new keys and add them to your account to continue using SSH.

## Revoking all SSO authorizations

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, click **Credentials**.
1. Under "Danger zone", click **Revoke all**.
1. From the **Enterprise** dropdown, select the enterprise where you want to revoke your authorizations.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with your username).
1. Click **Revoke authorizations**.

## Deleting all keys and tokens

You can bulk-delete your credentials if you are a member of an {% data variables.enterprise.prodname_emu_enterprise %}.

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, click **Credentials**.
1. Under "Danger zone", click **Delete all**.
1. To confirm, type `USERNAME credentials` (replacing `USERNAME` with your username).
1. Click **Delete keys and tokens**.

## After revoking or deleting credentials

After taking action on your credentials:

1. **Create new credentials**: Generate new {% data variables.product.pat_generic_plural %} and SSH keys as needed. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and [AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
1. **Re-authorize for SSO**: If your organizations require SSO, authorize your new credentials. See [AUTOTITLE](/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on) and [AUTOTITLE](/authentication/authenticating-with-single-sign-on/authorizing-an-ssh-key-for-use-with-single-sign-on).
1. **Update automations**: Update any scripts, CI/CD pipelines, or other automated processes with your new credentials.
1. **Review your security**: Consider enabling two-factor authentication and reviewing your authorized applications. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access).

## Further reading

* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)
* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)
* [AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)
