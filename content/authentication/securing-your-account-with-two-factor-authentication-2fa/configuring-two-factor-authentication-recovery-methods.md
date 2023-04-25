---
title: Configuring two-factor authentication recovery methods
intro: You can set up a variety of recovery methods to access your account if you lose your two-factor authentication credentials.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
---
In addition to securely storing your two-factor authentication recovery codes, we strongly recommend configuring one or more additional authentication methods.

## Downloading your two-factor authentication recovery codes

{% data reusables.two_fa.about-recovery-codes %} You can also download your recovery codes at any point after enabling two-factor authentication.

To keep your account secure, don't share or distribute your recovery codes. We recommend saving them with a secure password manager, such as:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

If you generate new recovery codes or disable and re-enable 2FA, the recovery codes in your security settings automatically update.{% ifversion 2fa-reconfiguration-inline-update %} Reconfiguring your 2FA settings without disabling 2FA will not change your recovery codes.{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
1. Save your recovery codes in a safe place. Your recovery codes can help you get back into your account if you lose access.
    - To save your recovery codes on your device, click **Download**.
    - To save a hard copy of your recovery codes, click **Print**.
    - To copy your recovery codes for storage in a password manager, click **Copy**.

## Generating a new set of recovery codes

Once you use a recovery code to regain access to your account, it cannot be reused. If you've used all 16 recovery codes, you can generate another list of codes. Generating a new set of recovery codes will invalidate any codes you previously generated.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
1. Under "Generate new recovery codes", click **Generate new recovery codes**.

## Configuring a security key as an additional two-factor authentication method

You can set up a security key as a secondary two-factor authentication method, and use the security key to regain access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

## Further reading

- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)"
