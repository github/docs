---
title: Actualizar tus credenciales de acceso de GitHub
intro: 'Las credenciales de {% data variables.product.product_name %} no solo incluyen{% if currentVersion != "github-ae@latest" %} tu contraseña, sino también{% endif %} los tokens de acceso, llaves de SSH, y tokens de la API de la aplicación que utilizas para comunicarte con {% data variables.product.product_name %}. Si lo necesitas, puedes restablecer todas estas credenciales de acceso tú mismo.'
redirect_from:
  - /articles/rolling-your-credentials/
  - /articles/how-can-i-reset-my-password/
  - /articles/updating-your-github-access-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% if currentVersion != "github-ae@latest" %}
### Solicitar una contraseña nueva

1. Para solicitar una contraseña nueva, visita {% if currentVersion == "free-pro-team@latest" %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Ingresa la dirección de correo electrónico asociada a tu cuenta personal {% data variables.product.product_name %}, luego haz clic en **Send password reset email** (Enviar correo electrónico de restablecimiento de contraseña). El correo electrónico se enviará a la dirección de correo electrónico de respaldo si tienes configurada una. ![Diálogo de solicitud de correo electrónico de restablecimiento de contraseña](/assets/images/help/settings/password-recovery-email-request.png)
3. Te enviaremos por correo electrónico un enlace que te permitirá restablecer la contraseña. Debes hacer clic en este enlace dentro de las 3 horas posteriores a haber recibido el correo electrónico. Si no recibiste un correo electrónico de nuestra parte, asegúrate de revisar la carpeta de spam.
4. Después de hacer clic en el enlace de tu correo electrónico, se te pedirá que ingreses una contraseña nueva. ![Casilla de recuperación de contraseña](/assets/images/help/settings/password_recovery_page.png)

{% tip %}

Para evitar que vuelvas a perder tu contraseña, sugerimos utilizar un administrador de contraseñas seguro, como [LastPass](https://lastpass.com/), [1Password](https://1password.com/) o [Keeper](https://keepersecurity.com/).

{% endtip %}

### Cambiar una contraseña existente

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} to {% data variables.product.product_name %}.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
4. En "Change password" (Cambiar contraseña), escribe tu contraseña antigua, una contraseña segura nueva y confirma tu contraseña nueva. Para recibir ayuda para crear una contraseña segura, consulta "[Crear una contraseña segura](/articles/creating-a-strong-password)"
5. Haz clic en **Update password** (Actualizar contraseña).

{% tip %}

Para mayor seguridad, habilita la autenticación de dos factores además de cambiar la contraseña. Consulta [Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication) para obtener más detalles.

{% endtip %}
{% endif %}
### Actualizar tus tokens de acceso

Consulta "[Revisar tus integraciones autorizadas](/articles/reviewing-your-authorized-integrations)" para recibir indicaciones sobre revisar y eliminar tokens de acceso. Para generar tokens de acceso nuevos, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Actualizar tus claves SSH

Consulta "[Revisar tus claves SSH](/articles/reviewing-your-ssh-keys)" para obtener indicaciones sobre la revisar y eliminar claves SSH. Para generar y agregar claves SSH nuevas, consulta "[Generar una clave SSH](/articles/generating-an-ssh-key)".

### Restablecer tokens API

Si tienes alguna aplicación registrada con {% data variables.product.product_name %}, querrás restablecer sus tokens de OAuth. Para obtener más información, consulta la terminal de "[Restablecer una autorización](/rest/reference/apps#reset-an-authorization)".

{% if currentVersion != "github-ae@latest" %}
### Evitar el acceso no autorizado

Para obtener más sugerencias acerca de proteger tu cuenta y evitar el acceso sin autorización, consulta "[Evitar el acceso sin autorización](/articles/preventing-unauthorized-access)".
{% endif %}
