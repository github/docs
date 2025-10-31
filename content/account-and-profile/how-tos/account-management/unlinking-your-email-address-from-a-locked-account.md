---
title: Unlinking your email address from a locked account
intro: If you have lost your two-factor authentication (2FA) credentials and are unable to recover access, you can remove the connection between your email address and a 2FA locked account.
redirect_from:
  - /early-access/account-and-profile/unlinking-your-email-address-from-a-locked-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - 2FA
shortTitle: Unlink your email
contentType: how-tos
---

> [!WARNING]
> Following these steps will not disable 2FA or provide access to a locked account, but will instead unlink the associated email address so it may be used for a different account. If you cannot regain access to the 2FA locked account, these steps will permanently break the link between the account and the linked email address. Before continuing, be sure you have lost all access to your account. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials).

### Unlinking with your password

If you know your password, you can sign in with your password to unlink your email address.

{% data reusables.accounts.prompt-for-2fa-recovery-code %}
{% data reusables.accounts.start-automated-recovery-with-password %}
{% data reusables.accounts.unlinking-email-address %}

### Unlinking without your password

If you do not know your account password, you can request a password reset link to unlink your email address.

{% data reusables.accounts.request-password-reset-link %}
{% data reusables.accounts.start-automated-recovery-without-password %}
{% data reusables.accounts.unlinking-email-address %}
