---
title: Recuperar tu cuenta si pierdes tus credenciales 2FA
intro: 'Si pierdes el acceso a tus credenciales de autenticación de dos factores, puedes utilizar tus códigos de recuperación, o cualquier otra opción de recuperación, para recuperar el acceso a tu cuenta.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials/
  - /articles/authenticating-with-an-account-recovery-token/
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Advertencia**: {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

### Utilizar un código de recuperación de autenticación de dos factores

Utiliza uno de tus códigos de recuperación para recuperar automáticamente el ingreso a tu cuenta. Es posible que hayas guardado tus códigos de recuperación en un administrador de contraseñas o en la carpeta de descargas de tu computadora. El nombre de archivo por defecto para códigos de recuperación es `github-recovery-codes.txt`. Para obtener más información acerca de códigos de recuperación, consulta "[Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

{% data reusables.two_fa.username-password %}{% if currentVersion == "free-pro-team@latest" %}
2. Da clic en **Ingresar un código de recuperación de dos factores** debajo de "¿Tienes Problemas?". ![Link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png){% else %}
2. En la página 2FA, dentro de "Don't have your phone?" (¿No tienes tu teléfono?), haz clic en **Enter a two-factor recovery code (Ingresar un código de recuperación de dos factores)**. ![Link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
3. Escribe uno de tus códigos de recuperación, después haz clic en **Verify (Verificar)**. ![Campo para escribir un código de recuperación y botón Verificar](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% if currentVersion == "free-pro-team@latest" %}
### Autenticar con un número de reserva

Si pierdes el acceso a tu app TOTP principal o número de teléfono, puedes proporcionar un código de autenticación de dos factores enviado a tu número de reserva para recuperar automáticamente el acceso a tu cuenta.
{% endif %}

### Autenticar con una clave de seguridad

Si has configurado autenticación de dos factores utilizando una clave de seguridad, puedes utilizar tu clave de seguridad como un método de autenticación secundario para obtener acceso a tu cuenta automáticamente. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% if currentVersion == "free-pro-team@latest" %}
### Autentificarse con un dispositivo verificado, token SSH, o token de acceso personal
Si pierdes el acceso a tus credenciales de autenticación de dos factores y no tienes tus códigos de recuperación para atutenticación de dos factores, se puede enviar una contraseña de única ocasión a tu dirección de correo electrónico verificada para comenzar el proceso de verificación y recobrar el acceso a tu cuenta.

{% note %}

**Nota**: Por razones de seguridad, recobrar el acceso a tu cuenta autenticándose con una contraseña de una sola ocasión puede demorar de 3 a 5 días hábiles. Las solicitudes adicionales emitidas durante este periodo no se revisarán.

{% endnote %}

Puedes utilizar tus credenciales de autenticación de dos factores para recobrar el acceso a tu cuenta en cualquier momento durante el periodo de espera de 3 a 5 días.

{% data reusables.two_fa.username-password %}
2. Da clic en **¿No puedes acceder a tu dispositivo de dos factores o a tus códigos de recuperación válidos?** debajo de "¿Tienes Problemas ![Enlace si no tienes tu dispositivo de 2fa o códigos de recuperación](/assets/images/help/2fa/no-access-link.png)
3. Da clic en **Entiendo, comenzar** para solicitar un restablecimiento de tu configuración de autenticación. ![Botón de restablecimiento de configuración de autenticación](/assets/images/help/2fa/reset-auth-settings.png)
4. Da clic en **Enviar contraseña de una sola vez** para enviarla a todas las direcciones de correo electrónico asociadas con tu cuenta. ![Botón para enviar contraseña de una sola vez](/assets/images/help/2fa/send-one-time-password.png)
5. Teclea la contraseña recibida en el correo electrónico de recuperación debajo de "Contraseña de una sola vez"{% data variables.product.prodname_dotcom %}. ![Campo para contraseña de una sola vez](/assets/images/help/2fa/one-time-password-field.png)
6. Da clic en **Verificar dirección de correo electrónico**.
7. Escoge un factor de verificación alterno.
    - If you've used your current device to log into this account before and would like to use the device for verification, click **Verify with this device**.
    - Si has configurado una llave SSH previamente en esta cuenta y quieres utilizarla para verificación, da clic en **Llave SSH**.
    - Si configuraste un token de acceso personal previamente y te gustaría utilizarlo para verificación, da clic en **Token de acceso personal**. ![Botones de verificación alternativa](/assets/images/help/2fa/alt-verifications.png)
8. Un miembro de {% data variables.contact.github_support %} revisará tu solicitud y te enviará un mensaje de correo electrónico dentro de los siguientes 3 a 5 días. Si se aprueba tu solicitud, recibirás un enlace para completar el proceso de recuperación de tu cuenta. Si se te niega la solicitud, el mensaje incluirá un medio para contactar a soporte con cualquier pregunta adicional.

### Autenticar con un token de recuperación de cuenta

Si pierdes el acceso a tus métodos de autenticación de dos factores para tu cuenta {% data variables.product.product_name %}, puedes recuperar tu token de recuperación de cuenta desde un proveedor socio de recuperación y solicitarle a Soporte de {% data variables.product.prodname_dotcom %} que lo revise.

Si no tienes acceso a tus métodos de autenticación de dos factores o a tus códigos de recuperación y has almacenado un token de recuperación de cuenta con Facebook utilizando Recuperar cuentas en otro lugar, puedes utilizar tu token para recuperar el acceso a tu cuenta.

Si te es imposible recuperar el acceso a tu cuenta, genera una contraseña de una sola vez para recuperarlo. Para obtener más información, consulta "[Autenticarse con un dispositivo verificado, token, ssh, o token de acceso personal](#authenticating-with-a-verified-device-ssh-token-or-personal-access-token)".

{% warning %}

**Advertencias:**
- Antes de recuperar un token de recuperación de cuenta, deberías tratar de utilizar tus [códigos de autenticación de dos factores](/articles/accessing-github-using-two-factor-authentication) o tus códigos de recuperación de autenticación de dos factores para recuperar el acceso a tu cuenta. Para obtener más información, consulta "[Recuperar tu cuenta si pierdes tus credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

{% endwarning %}

1. En Facebook, desplázate hasta tus [Configuraciones de seguridad](https://www.facebook.com/settings?tab=security), después haz clic en **Recover Accounts Elsewhere (Recuperar cuentas en otro lugar)**. ![Página de configuraciones de seguridad de Facebook con enlace Recuperar cuentas en otro lugar](/assets/images/help/settings/security-facebook-security-settings-page.png)
2. Haz clic en el token de recuperación asociado con tu cuenta {% data variables.product.product_name %}. ![Lista de tokens de recuperación almacenados en Facebook](/assets/images/help/settings/security-github-rae-token-on-facebook.png)
3. Para rescatar tu token de recuperación de cuenta, haz clic en **Recover This Account (Recuperar esta cuenta)**. Se abrirá una nueva ventana, que te llevará de vuelta a {% data variables.product.product_name %}. ![Casilla modal con información acerca de tu token de recuperación y botón Recuperar esta cuenta](/assets/images/help/settings/security-recover-account-facebook.png)
4. Contacto
{% data variables.contact.contact_support %} para hacerles saber que tu token de recuperación de cuenta está listo para revisión.
{% endif %}

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acceder {% data variables.product.prodname_dotcom %} utilizando autenticación de dos factores](/articles/accessing-github-using-two-factor-authentication)"
