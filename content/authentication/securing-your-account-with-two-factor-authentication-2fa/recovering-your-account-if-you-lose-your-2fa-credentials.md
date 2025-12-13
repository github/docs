---
title: Recovering your account if you lose your 2FA credentials
intro: 'If you lose access to your two-factor authentication credentials, you can use your recovery codes, or another recovery option, to regain access to your account.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
---
{% ifversion fpt or ghec %}

> [!WARNING]
> {% data reusables.two_fa.support-may-not-help %}

> [!NOTE]
> {% data reusables.two_fa.unlink-email-address %}

{% endif %}

## Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes).

> [!NOTE]
> If you do not know your password, you can use a recovery code after requesting a new password. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password).

{% data reusables.accounts.prompt-for-2fa-recovery-code %}
1. Type one of your recovery codes, then click **Verify**.

> [!NOTE]
> If you are receiving a "Recovery code authentication failed" error when using a recovery code, the code you are entering is invalid. You can try troubleshooting your recovery codes. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/troubleshooting-two-factor-authentication-issues).

## Authenticating with a passkey

If you have added a passkey to your account, you can use your passkey to automatically regain access to your account. Passkeys satisfy both password and 2FA requirements, so you don't need to know your password in order to recover your account. See [AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys).

## Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

{% ifversion fpt or ghec %}

## Authenticating with a fallback number

> [!NOTE]
> Configuring a fallback SMS number in addition to your primary SMS number is no longer supported. Instead, we strongly recommend registering multiple authentication methods.

If you lose access to your preferred TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.

## Authenticating with a verified device, SSH token, or {% data variables.product.pat_generic %}

If you know your password for {% data variables.product.prodname_dotcom %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process. You'll need to verify your identity using a recovery authentication factor, such as an SSH key or previously verified device.

> [!NOTE]
> For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

> [!WARNING]
> {% data reusables.accounts.you-must-know-your-password %}

{% data reusables.accounts.prompt-for-2fa-recovery-code %}
{% data reusables.accounts.start-automated-recovery-with-password %}
{% data reusables.accounts.choose-recovery-verification-factor %}

{% data reusables.accounts.automated-recovery-review-period-notice %}

{% endif %}

{% ifversion 2fa-recovery-flow %}

## Recovering without your password

If you have forgotten your password, you can request a new password and recover your account during the password reset process.

### Using a two-factor authentication recovery code to reset your password

If you have your recovery codes, you can use them to complete the password reset process. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password).

### Recovering without your password or two-factor authentication credentials

If you have lost access to your two-factor authentication credentials and your recovery codes, you can start account recovery request. You'll need to verify your identity using a recovery authentication factor, such as an SSH key or previously verified device.

{% data reusables.accounts.request-password-reset-link %}

{% data reusables.accounts.start-automated-recovery-without-password %}
{% data reusables.accounts.choose-recovery-verification-factor %}

{% data reusables.accounts.automated-recovery-review-period-notice %}

## Unlinking your email address

If you have exhausted your recovery options, you can unlink your email address from your account. The email address is then available for you to link it to a new or existing account, maintaining your commit history. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account).

{% endif %}

## Further reading

* [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/troubleshooting-two-factor-authentication-issues)
* [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
