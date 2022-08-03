---
title: Sudo mode
intro: '{% data variables.product.product_name %} requires re-authentication before you can modify your email address, authorize third-party applications, or add new public keys, or initiate other *sudo-protected* actions.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
After you've performed a sudo-protected action, you'll only be asked to re-authenticate again after a few hours of inactivity. Every sudo-protected action resets this timer.

{% note %}

**Note**: Depending on the authentication options available on your account, {% data variables.product.product_name %} will prioritize the most secure option for sudo authentication. However, you can always fallback to alternatives (like providing a password).

{% endnote %}

## Confirm access using your password

1. Enter your password and choose "Confirm".
  ![Sudo Mode Prompt Password](/assets/images/help/settings/sudo_mode_prompt_password.png)

    - If the password is correct, the sudo access request will be completed.
    - If you've forgotten your password, you will need to [request a new password](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password) before you are able to perform any sudo-protected action.

## Confirm access using a security key

If you [configured two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key), you can use your security key to confirm sudo mode access.

1. Choose "Use security key" and follow the browser specific prompts.
  ![Sudo Mode Prompt Security Key](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

    - If the security key is authenticated, the sudo access request will be completed.

{% ifversion fpt or ghec %}

## Confirm access with {% data variables.product.prodname_mobile %}

If you have installed and signed in to {% data variables.product.prodname_mobile %}, you may choose to authenticate with {% data variables.product.prodname_mobile %} to confirm sudo access.

1. When your phone is available, choose "Use GitHub Mobile".
  ![Sudo Mode Prompt GitHub Mobile prompt](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
2. {% data variables.product.product_name %} will send you a push notification to confirm access. Opening the push notification or opening the {% data variables.product.prodname_mobile %} app will display a prompt, asking you to approve or reject the authentication attempt to enter sudo mode.
  ![Sudo Mode Prompt GitHub Mobile verification](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)

    - Upon approving the authentication attempt using {% data variables.product.prodname_mobile %}, your browser will complete the sudo access request automatically.
    - Rejecting the authentication attempt will deny the sudo access request.

{% endif %}

## Confirm access with a two-factor authentication code

If you have [configured two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), you will be prompted to provide an authentication code from {% ifversion fpt or ghec %}a text message or{% endif %} your TOTP app.

### Generating a code through a TOTP application

If you chose to set up two-factor authentication using a TOTP application on your smartphone, you can generate an authentication code for {% data variables.product.product_name %} at any time. In most cases, just launching the application will generate a new code. You should refer to your application's documentation for specific instructions.

1. Enter the authentication code from your TOTP application.
  ![Sudo Mode Prompt TOTP App](/assets/images/help/settings/sudo_mode_prompt_totp_app.png)

    - If the authentication code is correct, the sudo access request will be completed.

{% ifversion fpt or ghec %}

### Receiving a text message

If you set up two-factor authentication via text messages, {% data variables.product.product_name %} will send you a text message with your authentication code.

1. When your phone is available, choose "Send SMS".
  ![Sudo Mode Prompt TOTP send SMS](/assets/images/help/settings/sudo_mode_prompt_totp_sms_prompt.png)
2. Enter the authentication code received.
  ![Sudo Mode Prompt TOTP verify SMS](/assets/images/help/settings/sudo_mode_prompt_totp_sms.png)

    - If the authentication code is correct, the sudo access request will be completed.

{% endif %}

## Further reading

- [Unix `sudo` command](http://en.wikipedia.org/wiki/Sudo)
- [Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
{% ifversion fpt or ghec %}- [Using {% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).{% endif %}
