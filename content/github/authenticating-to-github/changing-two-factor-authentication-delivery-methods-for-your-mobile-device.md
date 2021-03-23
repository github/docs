---
title: Changing two-factor authentication delivery methods for your mobile device
intro: You can switch between receiving authentication codes through a text message or a mobile application.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods/
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  free-pro-team: '*'
topics:
  - 2fa
---

{% note %}

**Note:** Changing your two-factor authentication method invalidates your current two-factor method setup. However, this doesn't affect your recovery codes or fallback SMS configuration. You can update your recovery codes or fallback SMS configuration on in your personal account's security settings page if desired.

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

### Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
