---
title: Changing two-factor authentication delivery methods for your mobile device
intro: You can switch between receiving authentication codes through a text message or a mobile application.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
---
{% note %}

**Note:** Changing your primary method for two-factor authentication invalidates your current two-factor authentication setup, including your recovery codes. Keep your new set of recovery codes safe. Changing your primary method for two-factor authentication does not affect your fallback SMS configuration, if configured. For more information, see "[Configuring two-factor authentication recovery methods](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)."

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Next to "SMS delivery", click **Edit**.
  ![Edit SMS delivery options](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. Under "Delivery options", click **Reconfigure two-factor authentication**.
    ![Switching your 2FA delivery options](/assets/images/help/2fa/2fa-switching-methods.png)
5. Decide whether to set up two-factor authentication using a TOTP mobile app or text message. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)."
    - To set up two-factor authentication using a TOTP mobile app, click **Set up using an app**.
    - To set up two-factor authentication using text message (SMS), click **Set up using SMS**.

## Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
