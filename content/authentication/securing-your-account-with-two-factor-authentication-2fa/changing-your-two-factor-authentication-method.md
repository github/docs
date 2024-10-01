---
title: Changing your two-factor authentication method
intro: You can change two-factor authentication (2FA) method without disabling 2FA entirely.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /authentication/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /authentication/securing-your-account-with-two-factor-authentication-2fa/changing-your-preferred-two-factor-authentication-method
versions:
  feature: 2fa-reconfiguration-inline-update
topics:
  - 2FA
shortTitle: Change 2FA method
---

You can reconfigure your two-factor authentication (2FA) settings or add new 2FA methods without disabling 2FA entirely, allowing you to keep both your recovery codes and your membership in organizations that require 2FA.

## Changing an existing two-factor authentication method

{% ifversion fpt or ghec %}
You can configure a different authenticator app or change your phone number, without disabling 2FA or creating a new set of recovery codes.

### Changing the TOTP app

{% endif %}

You can change the time-based one-time password (TOTP) application you use to generate authentication codes.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.edit-existing-method %}
{% data reusables.two_fa.enable-totp-app-method %}
{% data reusables.two_fa.save-2fa-method-when-editing%}

{% warning %}

**Warning:** Changes to an existing 2FA method will only take effect after you have provided a valid code from the new method and clicked **Save**. Only replace the existing 2FA method on your device (e.g. the {% data variables.product.prodname_dotcom %} entry in your TOTP app) after your new method is saved to your {% data variables.product.prodname_dotcom %} account completely.

{% endwarning %}

{% data reusables.two_fa.manual-totp-app-setup %}

{% ifversion fpt or ghec %}

### Changing the SMS number

You can change the phone number you use to receive authentication codes via SMS.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.edit-existing-method %}
{% data reusables.two_fa.enable-sms-number-method %}
{% data reusables.two_fa.save-2fa-method-when-editing%}

{% endif %}

## Adding additional two-factor authentication methods

We recommend adding more than one 2FA method to your account. This ensures that you can still sign in to your account, even if you lose one of your methods.

In addition to adding multiple 2FA methods, we strongly recommend setting up multiple recovery methods to avoid losing access to your account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)."

{% ifversion fpt or ghec %}

### Adding a TOTP app

You can add a time-based one-time password (TOTP) application to generate authentication codes.
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.add-additional-method %}
{% data reusables.two_fa.enable-totp-app-method %}
{% data reusables.two_fa.save-2fa-method-when-editing%}
{% data reusables.two_fa.manual-totp-app-setup %}

{% ifversion fpt or ghec %}

### Adding an SMS number

{% data reusables.two_fa.sms-warning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.add-additional-method %}
{% data reusables.two_fa.enable-sms-number-method %}
{% data reusables.two_fa.save-2fa-method-when-editing%}

{% endif %}

## Setting a preferred two-factor authentication method

If you have multiple 2FA methods, you can choose a preferred method that will be shown first when you are asked to authenticate with 2FA.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
1. Under "Two-factor authentication" in "Preferred 2FA method", select your preferred 2FA method from the dropdown.

## Further reading

* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)"
* "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)"
