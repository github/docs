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

{% ifversion mandatory-2fa-dotcom-contributors %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

You can configure two-factor authentication (2FA) using a TOTP app on mobile or desktop{% ifversion fpt or ghec %} or via text message{% endif %}. After you have configured 2FA using a TOTP app{% ifversion fpt or ghec %} or via text message{% endif %}, you can then also add security keys as alternate 2FA methods.

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA{% ifversion fpt or ghec %}, and security keys as backup methods instead of SMS. TOTP applications are more reliable than SMS, especially for locations outside the United States{% endif %}. Many TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

{% ifversion 2fa-check-up-period %}

After you configure 2FA, your account will enter a 28-day check up period. You can leave the check up period by successfully performing 2FA in those 28 days. Otherwise, you will be prompted to perform 2FA in an existing {% data variables.product.prodname_dotcom_the_website %} session on the 28th day. If you cannot perform 2FA to pass the checkup, you must use the provided shortcut to reconfigure your 2FA settings and retain access to {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you cannot configure 2FA for your {% data variables.enterprise.prodname_managed_user %} account unless you're signed in as the setup user. For users other than the setup user, an administrator must configure 2FA on your identity provider (IdP).

{% endif %}
{% endif %}

{% warning %}

**Warning:**
- If you're a member{% ifversion fpt or ghec %}, billing manager,{% endif %} or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on {% data variables.location.product_location %}.
- If you disable 2FA, you will automatically lose access to the organization and any private forks you have of the organization's private repositories. To regain access to the organization and your forks, re-enable two-factor authentication and contact an organization owner.

{% endwarning %}

{% ifversion 2fa-reconfiguration-inline-update %}
{% note %}

**Note:** You can reconfigure your 2FA settings without disabling 2FA entirely, allowing you to keep both your recovery codes and your membership in organizations that require 2FA.

{% endnote %}
{% endif %}

## Configuring two-factor authentication using a TOTP app

A time-based one-time password (TOTP) application automatically generates an authentication code that changes after a certain period of time. These apps can be downloaded to your phone or desktop. We recommend using cloud-based TOTP apps. {% data variables.product.prodname_dotcom %} is app-agnostic when it comes to TOTP apps, so you have the freedom to choose any TOTP app you prefer. Just search for `TOTP app` in your browser to find various options. You can also refine your search by adding keywords like `free` or `open source` to match your preferences.

{% tip %}

**Tip**: To configure authentication via TOTP on multiple devices, during setup, scan the QR code using each device at the same time or save the {% ifversion fpt or ghec or ghes > 3.8 %}"setup key"{% else %}"text code"{% endif %}, which is the TOTP secret. If 2FA is already enabled and you want to add another device, you must re-configure your TOTP app from your security settings.

{% endtip %}

1. Download a TOTP app of your choice to your phone or desktop.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghec or ghes > 3.8 %}
1. Under "Setup authenticator app", do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    - If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)
1. The TOTP application saves your account on {% data variables.location.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Verify the code from the app".
{%- else %}
1. Under "Two-factor authentication", select **Set up using an app** and click **Continue**.
1. Under "Authentication verification", do one of the following:
    - Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    - If you can't scan the QR code, click **enter this text code** to see a code that you can manually enter in your TOTP app instead.
    ![Screenshot of the 2FA enablement page. A link with the text "enter this text code" is highlighted in orange.](/assets/images/help/2fa/2fa-wizard-app-click-code.png)
1. The TOTP application saves your account on {% data variables.location.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code from the application".
{%- endif %}
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.backup_options_during_2fa_enrollment %}
{% ifversion ghes < 3.9 %}{% data reusables.two_fa.test_2fa_immediately %}{% endif %}

If you wish to setup a TOTP app manually, and require the parameters encoded in the QR code, they are:
- Type: `TOTP`
- Label: `GitHub:<username>` where `<username>` is your handle on GitHub, for example `monalisa`
- Secret: This is the encoded setup key, shown if you click {%- ifversion fpt or ghec or ghes > 3.8 %}"setup key"{%- else %}"enter this text code"{%- endif %} during configuration
- Issuer: `GitHub`
- Algorithm: The default of SHA1 is used
- Digits: The default of 6 is used
- Period: The default of 30 (seconds) is used

{% ifversion fpt or ghec %}

## Configuring two-factor authentication using text messages

If you're unable to configure a TOTP app, you can also register your phone number to receive SMS messages.

Before using this method, be sure that you can receive text messages. Carrier rates may apply.

{% warning %}

**Warning:** We **strongly recommend** using a TOTP application for two-factor authentication instead of SMS, and security keys as backup methods instead of SMS. {% data variables.product.product_name %} doesn't support sending SMS messages to phones in every country. Before configuring authentication via text message, review the list of countries where {% data variables.product.product_name %} supports authentication via SMS. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
1. At the bottom of the page, next to "SMS authentication", click **Select**.
1. Complete the CAPTCHA challenge, which helps protect against spam and abuse.
1. Under "Setup SMS authentication", select your country code and type your mobile phone number, including the area code. When your information is correct, click **Send authentication code**.
1. You'll receive a text message with a security code. On {% data variables.product.product_name %}, type the code into the field under "Verify the code sent to your phone" and click **Continue**.
   - If you need to edit the phone number you entered, you'll need to complete another CAPTCHA challenge.
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.backup_options_during_2fa_enrollment %}

{% endif %}

{% ifversion passkeys %}

## Configuring two-factor authentication using a passkey

{% data reusables.passkeys.about-passkeys %} For more information, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)."

1. You must have already configured 2FA via a TOTP mobile app{% ifversion fpt or ghec %} or via SMS{% endif %}.
{% data reusables.passkeys.adding-a-passkey %}

{% endif %}

## Configuring two-factor authentication using a security key

{% ifversion passkeys %}

Not all FIDO authenticators can be used as passkeys, but you can still register those authenticators as security keys. Security keys are also webauthn credentials, but unlike passkeys they don't need to require user validation. Since security keys only need to verify user presence, they only count as a second factor and must be used in conjunction with your password.

{% else %}

On most devices and browsers, you can use a physical security key over USB or NFC. Most browsers can use the fingerprint reader, facial recognition, or password/PIN on your device as a security key as well.

{% endif %}

Registering a security key for your account is available after enabling 2FA with a TOTP application{% ifversion fpt or ghec %} or a text message{% endif %}. If you lose your security key, you'll still be able to use your phone's code to sign in.

1. You must have already configured 2FA via a TOTP mobile app{% ifversion fpt or ghec %} or via SMS{% endif %}.
1. Ensure that you have a WebAuthn compatible security key inserted into your device, or that your device has a built-in authenticator such as Windows Hello, Face ID, or Touch ID. Most computers, phones, and tablets support this as an easier-to-use alternative to physical security keys.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
1. Next to "Security keys", click **Add**.

   ![Screenshot of the "two-factor methods" section of the 2FA settings. A gray button labeled "Add" is outlined in orange.](/assets/images/help/2fa/add-security-keys-option.png)

1. Under "Security keys", click **Register new security key**.
1. Type a nickname for the security key, then click **Add**.
1. Following your security key's documentation, activate your security key. If using an authenticator that's built into your device, follow the activation instructions from your operating system. You may need to select options such as `Face`, `PIN`, or `built-in sensor` to access your device's authenticator, depending on your operating system and browser.
1. Confirm that you've downloaded and can access your recovery codes. If you haven't already, or if you'd like to generate another set of codes, download your codes and save them in a safe place. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."
{% ifversion ghes < 3.9 %}{% data reusables.two_fa.test_2fa_immediately %}{% endif %}

{% ifversion fpt or ghec %}

## Configuring two-factor authentication using {% data variables.product.prodname_mobile %}

You can use {% data variables.product.prodname_mobile %} for 2FA when signing into your {% data variables.product.prodname_dotcom %} account in a web browser. 2FA with {% data variables.product.prodname_mobile %} does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use {% data variables.product.prodname_mobile %} to authenticate. If, in the future, you no longer have access to {% data variables.product.prodname_mobile %}, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
1. Install [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
1. Sign in to your {% data variables.product.product_name %} account from {% data variables.product.prodname_mobile %}.

After signing in, you can now use your device for 2FA.
{% endif %}

## Further reading

- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)"
- "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"
