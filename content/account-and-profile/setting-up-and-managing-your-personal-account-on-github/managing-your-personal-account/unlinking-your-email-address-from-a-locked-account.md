---
title: Unlinking your email address from a locked account
intro: 'If you have lost your two-factor authentication (2FA) credentials and are unable to recover access, you can remove the connection between your email address and a 2FA locked account. The email address is then available for you to link it to a new or existing account, maintaining your commit history.'
redirect_from:
  - /early-access/account-and-profile/unlinking-your-email-address-from-a-locked-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - 2FA
shortTitle: Unlink your email
---

## About unlinking your email address

Since an email address can only be associated with a single {% data variables.product.prodname_dotcom %} account, when you've lost your 2FA credentials and are unable to recover access, unlinking your email address from the locked account allows you to link that email address to a new or existing account. Additionally, linking a previously used commit email address to a new account will connect your commit history to that account. Unless you have chosen to keep your email address private, your account's commit email address is the same as your account's primary email address. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

> [!NOTE]
> The {% data variables.product.github %}-provided `noreply` email address cannot be unlinked from an account. Commits authored with a `noreply` address cannot be reconnected to a different account.

Be aware that nothing else associated with your 2FA locked account, including your repositories, permissions, and profile, will transfer to your new account.

## Unlinking your email address

Unlinking email addresses is only available for accounts with 2FA enabled. If you do not have 2FA enabled, you can sign in and remove your email address from your account settings.

> [!WARNING]
> Following these steps will not disable 2FA or provide access to a locked account, but will instead unlink the associated email address so it may be used for a different account. If you cannot regain access to the 2FA locked account, these steps will permanently break the link between the account and the linked email address. Before continuing with this article, be sure you have lost all access to your account. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials).
>
> Educational benefits and discounts cannot be transferred after an email address is unlinked and associated with a different account. To keep these benefits, you must continue using the original account that was used to apply.

### Unlinking with your password

If you know your password, you can sign in with your password to unlink your email address

1. Navigate to [https://github.com/login](https://github.com/login).
1. To prompt two-factor authentication, type your username and password, then click **Sign in**.
1. Under "Having problems?", click **Use a recovery code or begin 2FA account recovery**.
1. Under "Locked out?", click **Try 2FA account recovery, or unlink your account email address(es)**.
1. In the modal that appears, click **I understand, get started**.
1. You may be required to verify an email address. To send an email containing a one-time password to each email address associated with your account, click **Send one-time password**.
1. To verify your identity, type the one-time password from your email in the "One-time password" text field, then click **Verify email address**.
{% data reusables.accounts.unlinking-email-address %}

### Unlinking without your password

If you do not know your account password, you can request a password reset link to unlink your email address.

{% data reusables.accounts.request-password-reset-link %}

1. On {% data variables.product.prodname_dotcom %}, you will be prompted for your 2FA credentials. Under "Having problems?", click **Start a 2FA recovery request or unlink your account email address(es)**.
1. In the modal that appears, click **I understand, get started**.
{% data reusables.accounts.unlinking-email-address %}
