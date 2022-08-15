---
title: Modo sudo
intro: 'To confirm access to your account before you perform a potentially sensitive action, {% data variables.product.product_location %} prompts for authentication.'
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

To maintain the security of your account when you perform a potentially sensitive action on {% data variables.product.product_location %}, you must authenticate even though you're already signed in. For example, {% data variables.product.company_short %} considers the following actions sensitive because each action could allow a new person or system to access your account.

- Modification of an associated email address
- Authorization of a third-party application
- Addition of a new SSH key

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. {% data variables.product.product_name %} will wait a few hours before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

{% ifversion ghes %}

{% note %}

**Note**: If {% data variables.product.product_location %} uses an external authentication method like CAS or SAML SSO, you will not receive prompts to enter sudo mode. Para obtener más información, contacta a tu administrador de sitio.

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
- [Confirmar el acceso utilizando tu contraseña](#confirming-access-using-your-password)
{%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirmar el acceso utilizando una llave de seguridad

You must configure two-factor authentication (2FA) for your account using a security key to confirm access to your account for sudo mode using the security key. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

When prompted to authenticate for sudo mode, click **Use security key**, then follow the prompts.

![Captura de pantalla de la opción de llave de seguridad para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Confirmar acceso utilizando {% data variables.product.prodname_mobile %}

Debes instalar y firmarte en {% data variables.product.prodname_mobile %} para confirmar el acceso a tu cuenta para el modo sudo utilizando la app. Para obtener más información, consulta la sección de "[{% data variables.product.prodname_mobile %}".](/get-started/using-github/github-mobile)

1. Cuando se te pida autenticarte para el modo sudo, haz clic en **Utilizar GitHub Mobile**.

   ![Captura de pantalla de la opción {% data variables.product.prodname_mobile %} para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Abre {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} mostrará los números que debes ingresar en {% data variables.product.product_location %} para aprobar la solicitud.

   ![Captura de pantalla de los números de {% data variables.product.prodname_mobile %} a ingresar en {% data variables.product.product_name %} para aprobar el acceso al modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. En {% data variables.product.product_name %}, escribe los números que se muestran en {% data variables.product.prodname_mobile %}.

{% endif %}

### Confirmar el acceso utilizando un código de 2FA

Debes configurar la 2FA utilizando una aplicación móvil TOTP{% ifversion fpt or ghec %} o mensajes de texto{% endif %} para confirmar el acceso a tu cuenta para el modo sudo utilizando un código de 2FA. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

Cuando se te pida autenticarte para el modo sudo, escribe el código de autenticación de tu aplicación móvil TOTP{% ifversion fpt or ghec %} o del mensaje de texto{% endif %} y haz clic en **Verificar**.

![Captura de pantalla del mensaje de código de 2FA para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Confirmar el acceso utilizando tu contraseña

{% endif %}

Cuando se te pida autenticarte para el modo sudo, escribe tu contraseña y luego haz clic en **Confirmar**.

![Captura de pantalla de la solicitud de contraseña para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
