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

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see "[Configuring two-factor authentication recovery methods](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

1. Type your username and password to prompt authentication.

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. On the 2FA page, under "Don't have your phone?", click **Enter a two-factor recovery code**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Type one of your recovery codes, then click **Verify**.

   ![Field to type a recovery code and Verify button](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Authenticating with a fallback number

If you lose access to your primary TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.
{% endif %}

## Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see "[Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

{% ifversion fpt or ghec %}
## Authenticating with a verified device, SSH token, or {% data variables.product.pat_generic %}

If you know your password for {% data variables.location.product_location %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

{% endnote %}

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

1. Type your username and password to prompt authentication.

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link if you don't have your 2fa device or recovery codes](/assets/images/help/2fa/no-access-link.png)
1. To the right of "Locked out?", click **Try recovering your account**.

   ![Screenshot of link to try recovering your account](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Click **I understand, get started** to request a reset of your authentication settings.

    ![Screenshot of button to start reset of authentication settings](/assets/images/help/2fa/reset-auth-settings.png)
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.

   ![Screenshot of button to send one-time password](/assets/images/help/2fa/send-one-time-password.png)
1. Under "One-time password", type the temporary password from the recovery email {% data variables.product.prodname_dotcom %} sent.

   ![Screenshot of field to type one-time password](/assets/images/help/2fa/one-time-password-field.png)
1. Click **Verify email address**.

   ![Screenshot of button to verify email address](/assets/images/help/2fa/verify-email-address.png)
1. Choose an alternative verification factor.
    - If you've used your current device to log into this account before and would like to use the device for verification, click **Verify with this device**.
    - If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    - If you've previously set up a {% data variables.product.pat_generic %} and would like to use the {% data variables.product.pat_generic %} for verification, click **{% data variables.product.pat_generic_caps %}**.

   ![Screenshot of buttons for alternative verification](/assets/images/help/2fa/alt-verifications.png)
1. A member of {% data variables.contact.github_support %} will review your request and email you within three business days. If your request is approved, you'll receive a link to complete your account recovery process. If your request is denied, the email will include a way to contact support with any additional questions.

{% endif %}
