---
title: Configuring two-factor authentication
intro: You can choose among multiple options to add a second source of authentication to your account.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
---
You can configure two-factor authentication using a mobile app{% ifversion fpt or ghec %} or via text message{% endif %}. You can also add a security key.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA.{% ifversion fpt or ghec %} TOTP applications are more reliable than SMS, especially for locations outside the United States.{% endif %} TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

{% warning %}

**Warning:**
- If you're a member{% ifversion fpt or ghec %}, billing manager,{% endif %} or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on {% data variables.location.product_location %}.
- If you disable 2FA, you will automatically lose access to the organization and any private forks you have of the organization's private repositories. To regain access to the organization and your forks, re-enable two-factor authentication and contact an organization owner.

{% endwarning %}

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you cannot configure 2FA for your {% data variables.enterprise.prodname_managed_user %} account unless you're signed in as the setup user. For users other than the setup user, an administrator must configure 2FA on your identity provider (IdP).

{% endif %}

## Configuring two-factor authentication using a TOTP mobile app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. We recommend using cloud-based TOTP apps such as:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Tip**: To configure authentication via TOTP on multiple devices, during setup, scan the QR code using each device at the same time. If 2FA is already enabled and you want to add another device, you must re-configure 2FA from your security settings.

{% endtip %}

1. Download a TOTP app.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghec or ghes > 3.7 %}
5. Under "Setup authenticator app", do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    - If you can't scan the QR code, click **enter this text code** to see a code that you can manually enter in your TOTP app instead.
    ![Click enter this code](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. The TOTP mobile application saves your account on {% data variables.location.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code from the application". 
![TOTP enter code field](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{%- else %}
5. Under "Two-factor authentication", select **Set up using an app** and click **Continue**.
6. Under "Authentication verification", do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    - If you can't scan the QR code, click **enter this text code** to see a code that you can manually enter in your TOTP app instead.
    ![Click enter this code](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. The TOTP mobile application saves your account on {% data variables.location.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code from the application".
![TOTP enter code field](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{%- endif %}
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.backup_options_during_2fa_enrollment %}
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configuring two-factor authentication using text messages

If you're unable to authenticate using a TOTP mobile app, you can authenticate using SMS messages. You can also provide a second number for a fallback device. If you lose access to both your primary device and your recovery codes, a backup SMS number can get you back in to your account.

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

{% warning %}

**Warning:** We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS. {% data variables.product.product_name %} doesn't support sending SMS messages to phones in every country. Before configuring authentication via text message, review the list of countries where {% data variables.product.product_name %} supports authentication via SMS. For more information, see "[Countries where SMS authentication is supported](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Below "Setup authenticator app", select **SMS authentication**

  ![2FA SMS alternative option](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. Under "Setup SMS authentication", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.

  ![2FA SMS screen](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. You'll receive a text message with a security code. On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code sent to your phone" and click **Continue**.

  ![2FA SMS continue field](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.backup_options_during_2fa_enrollment %}
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configuring two-factor authentication using a security key

{% data reusables.two_fa.after-2fa-add-security-key %}

On most devices and browsers, you can use a physical security key over USB or NFC. Some browsers can use the fingerprint reader, facial recognition, or password/PIN on your device as a security key.

Authentication with a security key is *secondary* to authentication with a TOTP application{% ifversion fpt or ghec %} or a text message{% endif %}. If you lose your security key, you'll still be able to use your phone's code to sign in.

1. You must have already configured 2FA via a TOTP mobile app{% ifversion fpt or ghec %} or via SMS{% endif %}.
2. Ensure that you have a WebAuthn compatible security key inserted into your computer.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
5. Next to "Security keys", click **Add**.
  ![Add security keys option](/assets/images/help/2fa/add-security-keys-option.png)
6. Under "Security keys", click **Register new security key**.
  ![Registering a new security key](/assets/images/help/2fa/security-key-register.png)
7. Type a nickname for the security key, then click **Add**.
  ![Providing a nickname for a security key](/assets/images/help/2fa/security-key-nickname.png)
8. Activate your security key, following your security key's documentation.
  ![Prompt for a security key](/assets/images/help/2fa/security-key-prompt.png)
9.  Confirm that you've downloaded and can access your recovery codes. If you haven't already, or if you'd like to generate another set of codes, download your codes and save them in a safe place. For more information, see "[Downloading your 2FA recovery codes](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configuring two-factor authentication using {% data variables.product.prodname_mobile %}

You can use {% data variables.product.prodname_mobile %} for 2FA when signing into your {% data variables.product.prodname_dotcom %} account in a web browser. 2FA with {% data variables.product.prodname_mobile %} does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use {% data variables.product.prodname_mobile %} to authenticate. If, in the future, you no longer have access to {% data variables.product.prodname_mobile %}, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
2. Install [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Sign in to your {% data variables.product.product_name %} account from {% data variables.product.prodname_mobile %}.

After signing in, you can now use your device for 2FA.
{% endif %}

## Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Accessing {% data variables.product.prodname_dotcom %} using two-factor authentication](/articles/accessing-github-using-two-factor-authentication)"
- "[Recovering your account if you lose your 2FA credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
