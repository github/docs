---
title: Actualizar tus credenciales de acceso de GitHub
intro: 'Las credenciales de {% data variables.product.product_name %} no solo incluyen{% ifversion not ghae %} tu contraseña, sino también{% endif %} los tokens de acceso, llaves de SSH, y tokens de la API de la aplicación que utilizas para comunicarte con {% data variables.product.product_name %}. Si lo necesitas, puedes restablecer todas estas credenciales de acceso tú mismo.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Actualizar las credenciales de acceso
---

{% ifversion not ghae %}
## Solicitar una contraseña nueva

1. Para solicitar una contraseña nueva, visita {% ifversion fpt or ghec %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Ingresa la dirección de correo electrónico asociada con tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} y luego haz clic en **Enviar correo electrónico para restablecer contraseña.** El correo electrónico se enviará a la dirección de respaldo en caso de que la hayas configurado. ![Diálogo de solicitud de correo electrónico de restablecimiento de contraseña](/assets/images/help/settings/password-recovery-email-request.png)
3. Te enviaremos por correo electrónico un enlace que te permitirá restablecer la contraseña. Debes hacer clic en este enlace dentro de las 3 horas posteriores a haber recibido el correo electrónico. Si no recibiste un correo electrónico de nuestra parte, asegúrate de revisar la carpeta de spam.
4. Si habilitaste la autenticación bifactorial, se te pedirán tus credenciales de 2FA:
   * Si tienes {% data variables.product.prodname_mobile %}, se te enviará una notificación de subida para verificar tu identidad. Abre la notificación de subida o la app de {% data variables.product.prodname_mobile %} e ingresa el código de dos dígitos que se muestra en la página de restablecimiento de contraseña en tu buscador. ![Mensaje de autenticación bifactorial de {% data variables.product.prodname_mobile %}](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Para omitir el uso de GitHub Mobile para la verificación, haz clic en **Ingresar autenticación bifactorial o código de recuperación**. ![Mensaje de autenticación bifactorial de GitHub Mobile en {% data variables.product.product_name %} con el mensaje de "ingresar autenticación bifactorial o código de recuperación" resaltado](/assets/images/help/2fa/2fa-github-mobile-password-reset.png)
   * Teclea tu código de autenticación o uno de tus códigos de recuperación y haz clic en **Verificar**. ![Mensaje de autenticación bifactorial](/assets/images/help/2fa/2fa-password-reset.png)
     * Si agregaste una clave de seguridad a tu cuenta, haz clic en **Utilizar llave de seguridad** en vez de teclear un código de autenticación.
     * Si configuraste [{% data variables.product.prodname_mobile %}](https://github.com/mobile), haz clic en **Autenticarse con GitHub Mobile** en su lugar.
5. Teclea una contraseña nueva, confírmala y haz clic en **Cambiar contraseña**. Para recibir ayuda para crear una contraseña segura, consulta "[Crear una contraseña segura](/articles/creating-a-strong-password)."
  {% ifversion fpt or ghec %}![Password recovery box](/assets/images/help/settings/password-recovery-page.png){% else %}
  ![Casilla de recuperación de contraseña](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Para evitar perder tu contraseña en el futuro, te sugerimos utilizar un administrador de contraseñas seguro, tal como [LastPass](https://lastpass.com/) o [1Password](https://1password.com/).

{% endtip %}

## Cambiar una contraseña existente

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} to {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
4. En "Change password" (Cambiar contraseña), escribe tu contraseña antigua, una contraseña segura nueva y confirma tu contraseña nueva. Para recibir ayuda para crear una contraseña segura, consulta "[Crear una contraseña segura](/articles/creating-a-strong-password)"
5. Haz clic en **Update password** (Actualizar contraseña).

{% tip %}

Para mayor seguridad, habilita la autenticación de dos factores además de cambiar la contraseña. Consulta [Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication) para obtener más detalles.

{% endtip %}
{% endif %}
## Actualizar tus tokens de acceso

Consulta "[Revisar tus integraciones autorizadas](/articles/reviewing-your-authorized-integrations)" para recibir indicaciones sobre revisar y eliminar tokens de acceso. Para generar tokens de acceso nuevos, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% ifversion not ghae %}

Si restableciste tu contraseña de cuenta y te gustaría activar un cierre de sesión desde la aplicación de {% data variables.product.prodname_mobile %}, puedes revocar tu autorización de la App de OAuth de "GitHub iOS" o "GitHub Android". Esto saldrá de sesión en todas las instancias de la app de {% data variables.product.prodname_mobile %} asociada con tu cuenta. Para obtener información adicional, consulta la sección "[Revisar tus integraciones autorizadas](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)".

{% endif %}

## Actualizar tus claves SSH

Consulta "[Revisar tus claves SSH](/articles/reviewing-your-ssh-keys)" para obtener indicaciones sobre la revisar y eliminar claves SSH. Para generar y agregar claves SSH nuevas, consulta "[Generar una clave SSH](/articles/generating-an-ssh-key)".

## Restablecer tokens API

Si tienes alguna aplicación registrada con {% data variables.product.product_name %}, querrás restablecer sus tokens de OAuth. Para obtener más información, consulta la terminal de "[Restablecer una autorización](/rest/reference/apps#reset-an-authorization)".

{% ifversion not ghae %}
## Evitar el acceso no autorizado

Para obtener más sugerencias acerca de proteger tu cuenta y evitar el acceso sin autorización, consulta "[Evitar el acceso sin autorización](/articles/preventing-unauthorized-access)".
{% endif %}
