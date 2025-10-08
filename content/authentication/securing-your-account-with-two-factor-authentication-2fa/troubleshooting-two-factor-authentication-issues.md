---
title: Troubleshooting two-factor authentication issues
intro: 'If you are having trouble authenticating with 2FA, you can try troubleshooting your configured authentication methods.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - 2FA
  - Authentication
shortTitle: Troubleshooting 2FA
---

If you are receiving a "Two-factor authentication failed" error when authenticating with two-factor authentication (2FA), the authentication code you are entering is incorrect. You can try troubleshooting your configured authentication methods before attempting account recovery.

## Troubleshooting authentication using a TOTP app

### Use the right app

When authenticating with a TOTP app, {% data variables.product.github %} does not send you anything; you need to provide {% data variables.product.github %} with a valid code, based on the secret key that you saved to your TOTP app when 2FA was set up. Find the app or program that you originally used to setup 2FA and retrieve the authentication code from there.

### Check your device’s date and time

TOTP codes are time‑based. If the clock on your phone or computer is out of sync with {% data variables.product.github %}'s server, the code will be invalid. Ensure that your device’s date, time and time zone are set automatically by your network provider. On most mobile devices, this means turning on the **Set automatically** option.

### Wait for a new code and enter it promptly

Codes change every 30 seconds. Open your TOTP app, wait for the next code to appear and enter it immediately. Avoid typing spaces or extra characters as these will make the code invalid.

### Verify you’re using the correct account entry

Most TOTP apps support multiple accounts for a single website. Make sure you’re reading the code from the correct entry in the app. Codes generated for a different account will not work.

### Restore from a TOTP backup

Many TOTP apps support cloud backup or key export. If you lose or reset your device, you may be able restore your 2FA data from the app’s backup to a new device. Consult your app’s documentation for instructions.

{% ifversion fpt or ghec %}

## Troubleshooting authentication using text messages

### Confirm that you can receive text messages

Make sure your device and cellular plan is capable of receiving Short Message Service (SMS) messages. Some "data-only" phone plans and tablet devices connected to a cellular network may not support receiving text messages. Check with your provider and device manufacturer.

Carrier rates may apply for received SMS messages. Ensure your cellular plan covers potential charges.

Disable "Do Not Disturb" mode or spam‑filtering apps that might block receipt of authentication codes.

### Check that you have cellular coverage

Receiving text messages generally requires a strong network signal. Ensure you have adequate coverage before requesting an authentication code.

### Power cycle your phone

Turning your phone off and on will re-register the device with the network, which may resolve some deliverability issues. Enabling and disabling an "Airplane Mode" may also be sufficient, but power cycling your phone is more reliable.

### Consult with your cellular provider

Check with your cellular provider or carrier to see if there are any local outages or delivery issues in your area. They may also be able to investigate delivery issues for your connection. Provide them with the SMS number configured on your {% data variables.product.github %} account and the time that you requested an authentication code from {% data variables.product.github %}.

> [!NOTE]
> {% data variables.product.github %}, along with our SMS delivery partners, proactively monitors our SMS deliverability success rates. Periods of low-deliverability that would indicate a widespread issue are promptly investigated. You can check active and historical incidents affecting SMS delivery in your region on [{% data variables.product.github %}'s status page](https://githubstatus.com).

{% endif %}

## Recovering your account if troubleshooting doesn't help

If you have tried troubleshooting and you are still having trouble, you can try authenticating with another method, such as a passkey, {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %},{% endif %} or a security key, if pre-configured on the account. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication).

{% ifversion fpt or ghec %}

> [!WARNING]
> For security reasons, {% data variables.contact.github_support %} cannot assist with troubleshooting your 2FA methods, including SMS delivery.

{% endif %}

If you don't have another authentication method, you will need to try account recovery. For more information about account recovery, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials).

## Troubleshooting using recovery codes

If you are receiving a "Recovery code authentication failed" error when using a recovery code, the code you are entering is invalid. You can try troubleshooting your recovery codes.

### Use one code at a time

A set of recovery codes contains more than one code. A single code is 10 alphanumeric characters with a hyphen in the middle: `xxxxx-yyyyy`.

### Try using a different code

Each code is single-use only: once it has been used to authenticate, it cannot be used again. Try using a different code from the set.

### Check you're using the right set of codes

When 2FA is disabled and re-enabled, a new set of codes are created which invalidates the previous set. Recovery codes are also invalidated whenever a new set of codes is generated. Even if you think you might not have another set of codes, you could try searching for them in your devices, backups, and password managers. They will have the default filename `github-recovery-codes.txt`.

## Further reading

* [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
* [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication)
* [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)
