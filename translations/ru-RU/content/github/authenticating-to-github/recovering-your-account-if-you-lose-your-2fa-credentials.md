---
title: Recovering your account if you lose your 2FA credentials
intro: 'If you lose access to your two-factor authentication credentials, you can use your recovery codes, or another recovery option, to regain access to your account.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials/
  - /articles/authenticating-with-an-account-recovery-token/
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Warning**: {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

### Using a two-factor authentication recovery code

Use one of your recovery codes to automatically regain entry into your account. You may have saved your recovery codes to a password manager or your computer's downloads folder. The default filename for recovery codes is `github-recovery-codes.txt`. For more information about recovery codes, see "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

{% data reusables.two_fa.username-password %}{% if currentVersion == "free-pro-team@latest" %}
2. Under "Having Problems?", click **Enter a two-factor recovery code**. ![Link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png){% else %}
2. On the 2FA page, under "Don't have your phone?", click **Enter a two-factor recovery code**. ![Link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
3. Type one of your recovery codes, then click **Verify**. ![Field to type a recovery code and Verify button](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% if currentVersion == "free-pro-team@latest" %}
### Authenticating with a fallback number

If you lose access to your primary TOTP app or phone number, you can provide a two-factor authentication code sent to your fallback number to automatically regain access to your account.
{% endif %}

### Authenticating with a security key

If you configured two-factor authentication using a security key, you can use your security key as a secondary authentication method to automatically regain access to your account. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

{% if currentVersion == "free-pro-team@latest" %}
### Authenticating with a verified device, SSH token, or personal access token
If you lose access to the two-factor authentication credentials and don't have your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take 3-5 business days. Additional requests submitted during this time will not be reviewed.

{% endnote %}

You can use your two-factor authentication credentials or two-factor authentication recovery codes to regain access to your account anytime during the 3-5 day waiting period.

{% data reusables.two_fa.username-password %}
2. Under "Having Problems?", click **Can't access your two factor device or valid recovery codes?** ![Link if you don't have your 2fa device or recovery codes](/assets/images/help/2fa/no-access-link.png)
3. Click **I understand, get started** to request a reset of your authentication settings. ![Reset authentication settings button](/assets/images/help/2fa/reset-auth-settings.png)
4. Click **Send one-time password** to send a one-time password to all email addresses associated with your account. ![Send one-time password button](/assets/images/help/2fa/send-one-time-password.png)
5. Under "One-time password", type the temporary password from the recovery email {% data variables.product.prodname_dotcom %} sent. ![One-time password field](/assets/images/help/2fa/one-time-password-field.png)
6. Click **Verify email address**.
7. Choose an alternative verification factor.
    - If you've used your current device to log into this account before and would like to use the device for verification, click **Verify this device**.
    - If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    - If you've previously set up a personal access token and would like to use the personal access token for verification, click **Personal access token**. ![Alternative verification buttons](/assets/images/help/2fa/alt-verifications.png)
8. A member of {% data variables.contact.github_support %} will review your request and email you within 3-5 business days. If your request is approved, you'll receive a link to complete your account recovery process. If your request is denied, the email will include a way to contact support with any additional questions.

### Authenticating with an account recovery token

If you lose access to the two-factor authentication methods for your {% data variables.product.product_name %} account, you can retrieve your account recovery token from a partner recovery provider and ask {% data variables.product.prodname_dotcom %} Support to review it.

If you don't have access to your two-factor authentication methods or recovery codes and you've stored an account recovery token with Facebook using Recover Accounts Elsewhere, you may be able to use your token to regain access to your account.

If you're unable to regain access to your account, generate a one-time password to regain access. For more information, see "[Authenticating with a verified device, SSH token, or personal access token](#authenticating-with-a-verified-device-ssh-token-or-personal-access-token)."

{% warning %}

**Warnings:**
- Before you retrieve an account recovery token, you should try using your [two-factor authentication codes](/articles/accessing-github-using-two-factor-authentication) or your two-factor authentication recovery codes to regain access to your account. For more information, see "[Recovering your account if you lose your 2FA credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)."

{% endwarning %}

1. On Facebook, navigate to your [Security Settings](https://www.facebook.com/settings?tab=security), then click **Recover Accounts Elsewhere**. ![Facebook security settings page with Recover Accounts Elsewhere link](/assets/images/help/settings/security-facebook-security-settings-page.png)
2. Click the recovery token associated with your {% data variables.product.product_name %} account. ![List of recovery tokens stored on Facebook](/assets/images/help/settings/security-github-rae-token-on-facebook.png)
3. To redeem your account recovery token, click **Recover This Account**. A new window will open, returning you to {% data variables.product.product_name %}. ![Modal box with information about your recovery token and Recover This Account button](/assets/images/help/settings/security-recover-account-facebook.png)
4. Контакт
{% data variables.contact.contact_support %} to let them know that your account recovery token is ready for review.
{% endif %}

### Дополнительная литература

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Accessing {% data variables.product.prodname_dotcom %} using two-factor authentication](/articles/accessing-github-using-two-factor-authentication)"
