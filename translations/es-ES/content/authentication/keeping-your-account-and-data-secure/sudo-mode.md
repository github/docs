---
title: Modo sudo
intro: 'Para confirmar el acceso a tu cuenta antes de que realices una acción potencialmente sensible, {% data variables.product.product_location %} pide una autenticación.'
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

## Acerca del modo sudo

Para mantener la seguridad de tu cuenta cuando realizas una acción potencialmente sensible en {% data variables.product.product_location %}, debes autenticarte aunque ya hayas iniciado sesión. Por ejemplo, {% data variables.product.company_short %} considera las siguientes acciones como sensibles, ya que cada acción podría permitir que una persona o sistema nuevos accedan a tu cuenta.

- Modificación de una dirección de correo electrónico asociada
- Autorización de una aplicación de terceros
- Adición de una llave SSH nueva

Después de que te autenticas para realizar una acción sensible, tu sesión se queda temporalmente en "modo sudo". En el modo sudo, puedes realizar acciones sensibles sin autenticación. {% data variables.product.product_name %} esperará algunas horas antes de pedirte una autenticación nuevamente. Durante este tiempo, cualquier acción sensible que lleves a cabo restablecerá el cronómetro.

{% ifversion ghes %}

{% note %}

**Nota**: Si {% data variables.product.product_location %} utiliza un método de autenticación externa como CAS o el SSO de SAML, no recibirás mensajes para ingresar en modo sudo. Para obtener más información, contacta a tu administrador de sitio.

{% endnote %}

{% endif %}

"sudo" es una referencia a un programa en los sistemas Unix, en donde es un apócope para "**su**peruser **do**". Para obtener más información, consulta el término [sudo](https://wikipedia.org/wiki/Sudo) en Wikipedia.

## Confirmar el acceso para el modo sudo

Para confirmar el acceso al modo sudo, {% ifversion totp-and-mobile-sudo-challenge %}puedes{% else %}debes{% endif %} autenticarte con tu contraseña.{% ifversion totp-and-mobile-sudo-challenge %} Opcionalmente, puedes utilizar un método de autenticación diferente, como {% ifversion fpt or ghec %}una llave de seguridad, {% data variables.product.prodname_mobile %}o un código de 2FA{% elsif ghes %}una llave de seguridad o un código de 2FA{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Confirmar el acceso utilizando una llave de seguridad](#confirming-access-using-a-security-key)
{%- ifversion fpt or ghec %}
- [Confirmar el acceso utilizando GitHub Mobile](#confirming-access-using-github-mobile)
{%- endif %}
- [Confirmar el acceso utilizando un código de 2FA](#confirming-access-using-a-2fa-code)
- [Confirmar el acceso utilizando tu contraseña](#confirming-access-using-your-password)
{%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirmar el acceso utilizando una llave de seguridad

Debes configurar la autenticación bifactorial (2FA) para tu cuenta utilizando una llave de seguridad para confirmar el acceso a tu cuenta para el modo sudo utilizando la llave de seguridad. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

Cuando se te pide autenticarte para el modo sudo, haz clic en **Utilizar llave de seguridad** y luego sigue las instrucciones de los mensajes.

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
