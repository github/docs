---
title: Sudo mode
intro: 'To confirm access to your account before you perform a potentially sensitive action, {% data variables.product.product_location %} prompts for authentication.'
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

## About sudo mode

To maintain the security of your account when you perform a potentially sensitive action on {% data variables.product.product_location %}, you must authenticate even though you're already signed in. For example, {% data variables.product.company_short %} considers the following actions sensitive because each action could allow a new person or system to access your account.

- Modification of an associated email address
- Authorization of a third-party application
- Addition of a new SSH key

You can authenticate using your password{% ifversion totp-and-mobile-sudo-challenge %}. Optionally, you can authenticate using a security key or authentication code for two-factor authentication (2FA), or with {% data variables.product.prodname_mobile %}{% endif %}.

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. {% data variables.product.product_location %} will wait a few hours before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

{% ifversion ghes %}

{% note %}

**Note**: If {% data variables.product.product_location %} uses an external authentication method like CAS or SAML SSO, you will not receive prompts to enter sudo mode. For more information, contact your site administrator.

{% endnote %}

{% endif %}

"sudo" is a reference to a program on Unix systems, where the name is short for "**su**peruser **do**." For more information, see [sudo](https://wikipedia.org/wiki/Sudo) on Wikipedia.

{% ifversion totp-and-mobile-sudo-challenge %}

## Confirm access using a security key

If you [configured two-factor authentication using a security key](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key), you can use your security key to confirm sudo mode access.

1. Choose "Use security key" and follow the browser specific prompts.
  ![Sudo Mode Prompt Security Key](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

    - If the security key is authenticated, the sudo access request will be completed.

{% endif %}

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

{% ifversion totp-and-mobile-sudo-challenge %}

## Confirm access with a two-factor authentication code

If you have [configured two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), you will be prompted to provide an authentication code from {% ifversion fpt or ghec %}a text message or{% endif %} your TOTP app.

### Generating a code through a TOTP application

If you chose to set up two-factor authentication using a TOTP application on your smartphone, you can generate an authentication code for {% data variables.product.product_name %} at any time. In most cases, just launching the application will generate a new code. You should refer to your application's documentation for specific instructions.

1. Enter the authentication code from your TOTP application.
  ![Sudo Mode Prompt TOTP App](/assets/images/help/settings/sudo_mode_prompt_totp_app.png)

    - If the authentication code is correct, the sudo access request will be completed.

{% endif %}

{% ifversion fpt or ghec %}

### Receiving a text message

If you set up two-factor authentication via text messages, {% data variables.product.product_name %} will send you a text message with your authentication code.

1. When your phone is available, choose "Send SMS".
  ![Sudo Mode Prompt TOTP send SMS](/assets/images/help/settings/sudo_mode_prompt_totp_sms_prompt.png)
2. Enter the authentication code received.
  ![Sudo Mode Prompt TOTP verify SMS](/assets/images/help/settings/sudo_mode_prompt_totp_sms.png)

    - If the authentication code is correct, the sudo access request will be completed.

{% endif %}

## Confirm access using your password

1. Enter your password and choose "Confirm".
  ![Sudo Mode Prompt Password](/assets/images/help/settings/sudo_mode_prompt_password.png)

    - If the password is correct, the sudo access request will be completed.
    - If you've forgotten your password, you will need to [request a new password](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials#requesting-a-new-password) before you are able to perform any sudo-protected action.

## Further reading

- [Unix `sudo` command](http://en.wikipedia.org/wiki/Sudo)
{% ifversion totp-and-mobile-sudo-challenge %}- [Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication){% endif %}
{% ifversion fpt or ghec %}- [Using {% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).{% endif %}
