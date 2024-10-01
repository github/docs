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
topics:
  - Identity
  - Access management
---

## About sudo mode

To maintain the security of your account when you perform a potentially sensitive action on {% data variables.location.product_location %}, you must authenticate even though you're already signed in. For example, {% data variables.product.company_short %} considers the following actions sensitive because each action could allow a new person or system to access your account.

* Modification of an associated email address
* Authorization of a third-party application
* Addition of a new SSH key
* Creation of a PAT or application

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. {% data variables.product.product_name %} has a two-hour session timeout period before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

{% ifversion ghes %}

{% note %}

**Note**: If {% data variables.location.product_location_enterprise %} uses an external authentication method like CAS or SAML SSO, you will not receive prompts to enter sudo mode. For more information, contact your site administrator.

{% endnote %}

{% endif %}
{% ifversion ghec %}

{% note %}

**Note**: If your enterprise uses {% data variables.product.prodname_emus %}, only the setup user will receive prompts to enter sudo mode, as {% data variables.enterprise.prodname_managed_users %} don't have credentials stored on {% data variables.product.product_name %}.

{% endnote %}

{% endif %}

"sudo" is a reference to a program on Unix systems, where the name is short for "**su**peruser **do**." For more information, see [sudo](https://wikipedia.org/wiki/Sudo) on Wikipedia.

## Confirming access for sudo mode

To confirm access for sudo mode, you {% ifversion totp-and-mobile-sudo-challenge %}can{% else %}must{% endif %} authenticate with your password.{% ifversion totp-and-mobile-sudo-challenge %} Optionally, you can use a different authentication method, like {% ifversion passkeys %}a passkey, {% endif %}{% ifversion fpt or ghec %}a security key, {% data variables.product.prodname_mobile %}, or a 2FA code{% elsif ghes %}a security key or a 2FA code{% endif %}.{% endif %}

{%- ifversion passkeys %}
* [Confirming access using a passkey key](#confirming-access-using-a-passkey)
{%- endif %}
{%- ifversion totp-and-mobile-sudo-challenge %}
* [Confirming access using a security key](#confirming-access-using-a-security-key)
{%- ifversion fpt or ghec %}
* [Confirming access using GitHub Mobile](#confirming-access-using-github-mobile)
{%- endif %}
* [Confirming access using a 2FA code](#confirming-access-using-a-2fa-code)
* [Confirming access using your password](#confirming-access-using-your-password)
{%- endif %}

{% ifversion passkeys %}

## Confirming access using a passkey

You must have a passkey registered to your account to confirm access to your account for sudo mode using a passkey. See "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)."
{% endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirming access using a security key

You must configure two-factor authentication (2FA) for your account using a security key to confirm access to your account for sudo mode using the security key. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)."

When prompted to authenticate for sudo mode, click **Use security key**, then follow the prompts.

{% ifversion fpt or ghec %}

### Confirming access using {% data variables.product.prodname_mobile %}

You must install and sign into {% data variables.product.prodname_mobile %} to confirm access to your account for sudo mode using the app. For more information, see "[AUTOTITLE](/get-started/using-github/github-mobile)."

1. When prompted to authenticate for sudo mode, click **Use {% data variables.product.prodname_mobile %}**.
1. Open {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_dotcom %} will display numbers that you must enter in {% data variables.product.prodname_mobile %} to approve the request.
1. In {% data variables.product.prodname_mobile %}, type the numbers displayed.

{% endif %}

### Confirming access using a 2FA code

You must configure 2FA using a TOTP mobile app to confirm access to your account for sudo mode using a 2FA code. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

When prompted to authenticate for sudo mode, type the authentication code from your TOTP mobile app, then click **Verify**.

{% ifversion fpt or ghec %}Text messages are not supported for use on the sudo prompt. If you have registered SMS as the only 2FA method on your account, you'll be asked for your password to enter sudo mode.
{% endif %}

### Confirming access using your password

{% endif %}

When prompted to authenticate for sudo mode, type your password, then click **Confirm**.
