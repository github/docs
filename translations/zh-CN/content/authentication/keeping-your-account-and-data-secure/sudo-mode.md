---
title: Sudo mode
intro: 'To confirm access to your account before you perform a potentially sensitive action, {% data variables.location.product_location %} prompts for authentication.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
---

## About sudo mode

To maintain the security of your account when you perform a potentially sensitive action on {% data variables.location.product_location %}, you must authenticate even though you're already signed in. For example, {% data variables.product.company_short %} considers the following actions sensitive because each action could allow a new person or system to access your account.

- Modification of an associated email address
- Authorization of a third-party application
- Addition of a new SSH key

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. {% data variables.product.product_name %} will wait a few hours before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

{% ifversion ghes %}

{% note %}

**Note**: If {% data variables.location.product_location %} uses an external authentication method like CAS or SAML SSO, you will not receive prompts to enter sudo mode. For more information, contact your site administrator.

{% endnote %}

{% endif %}

"sudo" is a reference to a program on Unix systems, where the name is short for "**su**peruser **do**." For more information, see [sudo](https://wikipedia.org/wiki/Sudo) on Wikipedia.

## Confirming access for sudo mode

To confirm access for sudo mode, you {% ifversion totp-and-mobile-sudo-challenge %}can{% else %}must{% endif %} authenticate with your password.{% ifversion totp-and-mobile-sudo-challenge %} Optionally, you can use a different authentication method, like {% ifversion fpt or ghec %}a security key, {% data variables.product.prodname_mobile %}, or a 2FA code{% elsif ghes %}a security key or a 2FA code{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Confirming access using a security key](#confirming-access-using-a-security-key)
{%- ifversion fpt or ghec %}
- [Confirming access using GitHub Mobile](#confirming-access-using-github-mobile)
{%- endif %}
- [Confirming access using a 2FA code](#confirming-access-using-a-2fa-code)
- [Confirming access using your password](#confirming-access-using-your-password)
{%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirming access using a security key

You must configure two-factor authentication (2FA) for your account using a security key to confirm access to your account for sudo mode using the security key. For more information, see "[Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

When prompted to authenticate for sudo mode, click **Use security key**, then follow the prompts.

![Screenshot of security key option for sudo mode](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Confirming access using {% data variables.product.prodname_mobile %}

You must install and sign into {% data variables.product.prodname_mobile %} to confirm access to your account for sudo mode using the app. For more information, see "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)."

1. When prompted to authenticate for sudo mode, click **Use GitHub Mobile**.

   ![Screenshot of {% data variables.product.prodname_mobile %} option for sudo mode](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Open {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} will display numbers that you must enter on {% data variables.location.product_location %} to approve the request.

   ![Screenshot of numbers from {% data variables.product.prodname_mobile %} to enter on {% data variables.product.product_name %} to approve sudo mode access](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. On {% data variables.product.product_name %}, type the numbers displayed in {% data variables.product.prodname_mobile %}.

{% endif %}

### Confirming access using a 2FA code

You must configure 2FA using a TOTP mobile app{% ifversion fpt or ghec %} or text messages{% endif %} to confirm access to your account for sudo mode using a 2FA code. For more information, see "[Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

When prompted to authenticate for sudo mode, type the authentication code from your TOTP mobile app{% ifversion fpt or ghec %} or the text message{% endif %}, then click **Verify**.

![Screenshot of 2FA code prompt for sudo mode](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Confirming access using your password

{% endif %}

When prompted to authenticate for sudo mode, type your password, then click **Confirm**.

![Screenshot of password prompt for sudo mode](/assets/images/help/settings/sudo_mode_prompt_password.png)
