---
title: Configuring two-factor authentication
intro: You can choose among multiple options to add a second source of authentication to your account.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app/
  - /articles/configuring-two-factor-authentication-via-text-message/
  - /articles/configuring-two-factor-authentication-via-fido-u2f/
  - /articles/configuring-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---

You can configure two-factor authentication using a mobile app{% if currentVersion == "free-pro-team@latest" %} or via text message{% endif %}. You can also add a security key.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA.{% if currentVersion == "free-pro-team@latest" %} TOTP applications are more reliable than SMS, especially for locations outside the United States.{% endif %} TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

{% warning %}

**Warning:**
- If you're a member{% if currentVersion == "free-pro-team@latest" %}, billing manager,{% endif %} or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on {% data variables.product.product_location %}.
- If you disable 2FA, you will automatically lose access to the organization and any private forks you have of the organization's private repositories. To regain access to the organization and your forks, re-enable two-factor authentication and contact an organization owner.

{% endwarning %}

### Configuring two-factor authentication using a TOTP mobile app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. We recommend using cloud-based TOTP apps such as:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Tip**: To configure authentication via TOTP on multiple devices, during setup, scan the QR code using each device at the same time. If 2FA is already enabled and you want to add another device, you must re-configure 2FA from your security settings.

{% endtip %}

1. Download a TOTP app.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
5. On the Two-factor authentication page, click **Set up using an app**.
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
8. On the Two-factor authentication page, do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    - If you can't scan the QR code, click **enter this text code** to see a code you can copy and manually enter on {% data variables.product.product_name %} instead.
    ![Click enter this code](/assets/images/help/2fa/totp-click-enter-code.png)
9. The TOTP mobile application saves your {% data variables.product.product_name %} account and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, on the 2FA page, type the code and click **Enable**.
	![TOTP Enable field](/assets/images/help/2fa/totp-enter-code.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% if currentVersion == "free-pro-team@latest" %}

### Configuring two-factor authentication using text messages

If you're unable to authenticate using a TOTP mobile app, you can authenticate using SMS messages. You can also provide a second number for a fallback device. If you lose access to both your primary device and your recovery codes, a backup SMS number can get you back in to your account.

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

{% warning %}

**Warning:** We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS. {% data variables.product.product_name %} doesn't support sending SMS messages to phones in every country. Before configuring authentication via text message, review the list of countries where {% data variables.product.product_name %} supports authentication via SMS. For more information, see "[Countries where SMS authentication is supported](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. On the Two-factor authentication page, click **Set up using SMS**.
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
7. Select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
  ![2FA SMS screen](/assets/images/help/2fa/2fa_sms_photo.png)
8. You'll receive a text message with a security code. Type the code on the Two-factor authentication page, and click **Enable**.
![2FA SMS continue field](/assets/images/help/2fa/2fa-sms-code-enable.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

### Configuring two-factor authentication using a security key

{% data reusables.two_fa.after-2fa-add-security-key %}

On most devices and browsers, you can use a physical security key over USB or NFC. Some browsers can use the fingerprint reader, facial recognition, or password/PIN on your device as a security key.

Authentication with a security key is *secondary* to authentication with a TOTP application{% if currentVersion == "free-pro-team@latest" %} or a text message{% endif %}. If you lose your security key, you'll still be able to use your phone's code to sign in.

1. You must have already configured 2FA via a TOTP mobile app{% if currentVersion == "free-pro-team@latest" %} or via SMS{% endif %}.
2. Ensure that you have a WebAuthn compatible security key inserted into your computer.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
5. Next to "Security keys", click **Add**.
  ![Add security keys option](/assets/images/help/2fa/add-security-keys-option.png)
6. Under "Security keys", click **Register new security key**.
  ![Registering a new security key](/assets/images/help/2fa/security-key-register.png)
7. Type a nickname for the security key, then click **Add**.
  ![Providing a nickname for a security key](/assets/images/help/2fa/security-key-nickname.png)
8. Activate your security key, following your security key's documentation.
  ![Prompt for a security key](/assets/images/help/2fa/security-key-prompt.png)
9.  Confirm that you've downloaded and can access your recovery codes. If you haven't already, or if you'd like to generate another set of codes, download your codes and save them in a safe place. If you lose access to your account, you can use your recovery codes to get back into your account. For more information, see "[Recovering your account if you lose your 2FA credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)."
	![Download recovery codes button](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

### Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Accessing {% data variables.product.prodname_dotcom %} using two-factor authentication](/articles/accessing-github-using-two-factor-authentication)"
- "[Recovering your account if you lose your 2FA credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
