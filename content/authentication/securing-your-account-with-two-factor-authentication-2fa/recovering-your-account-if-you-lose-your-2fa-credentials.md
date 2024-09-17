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

{% warning %}

**Warnings**:

* {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% note %}

**Note:** {% data reusables.two_fa.unlink-email-address %}

{% endnote %}

{% endif %}

## Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

1. Type your username and password to prompt authentication.

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}

1. Under "Having problems?", click **Use a recovery code{% ifversion fpt or ghec %} or begin 2FA account recovery{% endif %}**.
1. Type one of your recovery codes, then click **Verify**.

{% ifversion passkeys %}

## Authenticating with a passkey

If you have added a passkey to your account, you can use your passkey to automatically regain access to your account. Passkeys satisfy both password and 2FA requirements, so you don't need to know your password in order to recover your account. See "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)."

{% endif %}

## Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

{% ifversion fpt or ghec %}

## Authenticating with a fallback number

{% note %}

**Note:** Configuring a fallback SMS number in addition to your primary SMS number is no longer supported. Instead, we strongly recommend registering multiple authentication methods.

{% endnote %}

If you lose access to your preferred TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.

## Authenticating with a verified device, SSH token, or {% data variables.product.pat_generic %}

If you know your password for {% data variables.product.prodname_dotcom %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

{% endnote %}

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

1. Type your username and password to prompt authentication.

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Under "Having problems?", click **Use a recovery code or begin 2FA account recovery**.
1. Under "Locked out?", click **Try 2FA account recovery, or unlink your account email address(es)**.
1. Click **I understand, get started** to request a reset of your authentication settings.
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.
1. Under "One-time password", type the temporary password from the recovery email {% data variables.product.prodname_dotcom %} sent, then click **Verify email address**.
1. {% data reusables.accounts.alternative-authentication %}
1. {% data reusables.accounts.support-request-recovery %}

{% endif %}

{% ifversion 2fa-recovery-flow %}

## Requesting help with two-factor authentication

If you have forgotten your password and you've lost access to your two-factor authentication credentials, you can start account recovery to regain access to your account. You'll need to verify your identity using a recovery authentication factor, such as an SSH key or previously verified device. If no recovery methods are available, you can choose to unlink your email address from your account.

1. Click **Forgot password?**.
1. Enter a primary or backup email address associated with your account, then click **Send password reset email.**
1. Check your email for a link to reset your password. You must click on this link within three hours of receiving the email. If you don't see an email from us, make sure to check your spam folder.
1. Click on the link in the email, then under "Having problems?", click **Start a 2FA recovery request**.
1. To complete your recovery request, you'll need to verify an alternative authentication factor. {% data reusables.accounts.alternative-authentication %}
1. {% data reusables.accounts.support-request-recovery %}

### Unlinking your email address

Alternatively, if no recovery methods are available, you can choose to unlink your email address from your account. The email address is then available for you to link it to a new or existing account, maintaining your commit history. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account)."

{% data reusables.accounts.unlinking-email-address %}

{% endif %}

## Further reading

* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
