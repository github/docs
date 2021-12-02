---
title: Configuring two-factor authentication recovery methods
intro: You can set up a variety of recovery methods to access your account if you lose your two-factor authentication credentials.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes/
  - /articles/setting-a-fallback-authentication-number/
  - /articles/about-recover-accounts-elsewhere/
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere/
  - /articles/generating-and-storing-an-account-recovery-token/
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
In addition to securely storing your two-factor authentication recovery codes, we strongly recommend configuring one or more additional recovery methods.

## Downloading your two-factor authentication recovery codes

{% data reusables.two_fa.about-recovery-codes %} You can also download your recovery codes at any point after enabling two-factor authentication.

To keep your account secure, don't share or distribute your recovery codes. We recommend saving them with a secure password manager, such as:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

If you generate new recovery codes or disable and re-enable 2FA, the recovery codes in your security settings automatically update.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
4. Save your recovery codes in a safe place. Your recovery codes can help you get back into your account if you lose access.
    - To save your recovery codes on your device, click **Download**.
    - To save a hard copy of your recovery codes, click **Print**.
    - To copy your recovery codes for storage in a password manager, click **Copy**.
  ![List of recovery codes with option to download, print, or copy the codes](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Generating a new set of recovery codes

Once you use a recovery code to regain access to your account, it cannot be reused. If you've used all 16 recovery codes, you can generate another list of codes. Generating a new set of recovery codes will invalidate any codes you previously generated.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
3. To create another batch of recovery codes, click **Generate new recovery codes**.
	![Generate new recovery codes button](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Configuring a security key as an additional two-factor authentication method

You can set up a security key as a secondary two-factor authentication method, and use the security key to regain access to your account. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

{% ifversion fpt or ghec %}

## Setting a fallback authentication number

You can provide a second number for a fallback device. If you lose access to both your primary device and your recovery codes, a backup SMS number can get you back in to your account.

You can use a fallback number regardless of whether you've configured authentication via text message or TOTP mobile application.

{% warning %}

**Warning:** Using a fallback number is a last resort. We recommend configuring additional recovery methods if you set a fallback authentication number.
- Bad actors may attack cell phone carriers, so SMS authentication is risky.
- SMS messages are only supported for certain countries outside the US; for the list, see "[Countries where SMS authentication is supported](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Next to "Fallback SMS number", click **Add**.
![Add fallback SMS number button](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. Under "Fallback SMS number", click **Add fallback SMS number**.
![Add fallback SMS number text](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Select your country code and type your mobile phone number, including the area code. When your information is correct, click **Set fallback**.
	![Set fallback SMS number](/assets/images/help/2fa/2fa-fallback-number.png)

After setup, the backup device will receive a confirmation SMS.

{% endif %}

## Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)"
- "[Accessing {% data variables.product.prodname_dotcom %} using two-factor authentication](/articles/accessing-github-using-two-factor-authentication)"
- "[Recovering your account if you lose your two-factor authentication credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
