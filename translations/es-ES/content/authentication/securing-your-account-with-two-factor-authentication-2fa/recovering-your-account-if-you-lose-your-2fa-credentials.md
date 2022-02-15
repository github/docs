---
title: Recuperar tu cuenta si pierdes tus credenciales 2FA
intro: 'Si pierdes el acceso a tus credenciales de autenticación de dos factores, puedes utilizar tus códigos de recuperación, o cualquier otra opción de recuperación, para recuperar el acceso a tu cuenta.'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recuperar una cuenta con 2FA
---

{% ifversion fpt or ghec %}

{% warning %}

**Advertencias**:

- {% data reusables.two_fa.support-may-not-help %}
- {% data reusables.accounts.you-must-know-your-password %}

{% endwarning %}

{% endif %}

## Utilizar un código de recuperación de autenticación de dos factores

Utiliza uno de tus códigos de recuperación para recuperar automáticamente el ingreso a tu cuenta. Es posible que hayas guardado tus códigos de recuperación en un administrador de contraseñas o en la carpeta de descargas de tu computadora. El nombre de archivo por defecto para códigos de recuperación es `github-recovery-codes.txt`. Para obtener más información acerca de códigos de recuperación, consulta "[Configurar métodos de recuperación de autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

{% data reusables.two_fa.username-password %}

{% ifversion fpt or ghec %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. En la página 2FA, dentro de "Don't have your phone?" (¿No tienes tu teléfono?), haz clic en **Enter a two-factor recovery code (Ingresar un código de recuperación de dos factores)**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Escribe uno de tus códigos de recuperación, después haz clic en **Verify (Verificar)**.

   ![Campo para escribir un código de recuperación y botón Verificar](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Autenticar con un número de reserva

Si pierdes el acceso a tu app TOTP principal o número de teléfono, puedes proporcionar un código de autenticación de dos factores enviado a tu número de reserva para recuperar automáticamente el acceso a tu cuenta.
{% endif %}

## Autenticar con una clave de seguridad

Si has configurado autenticación de dos factores utilizando una clave de seguridad, puedes utilizar tu clave de seguridad como un método de autenticación secundario para obtener acceso a tu cuenta automáticamente. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% ifversion fpt or ghec %}
## Autentificarse con un dispositivo verificado, token SSH, o token de acceso personal

If you know your password for {% data variables.product.product_location %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

{% endnote %}

Puedes utilizar tus credenciales de autenticación de dos factores para recobrar el acceso a tu cuenta en cualquier momento durante el periodo de espera de 3 a 5 días.

1. Teclea tu nombre de usuario y contraseña en el prompt de autenticación.

    {% warning %}

    **Advertencia**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link if you don't have your 2fa device or recovery codes](/assets/images/help/2fa/no-access-link.png)
1. To the right of "Locked out?", click **Try recovering your account**.

   ![Screenshot of link to try recovering your account](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Da clic en **Entiendo, comenzar** para solicitar un restablecimiento de tu configuración de autenticación.

    ![Screenshot of button to start reset of authentication settings](/assets/images/help/2fa/reset-auth-settings.png)
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.

   ![Screenshot of button to send one-time password](/assets/images/help/2fa/send-one-time-password.png)
1. Debajo de "Contraseña de una sola vez", teclea la contraseña temporal del correo electrónico de recuperación que envió {% data variables.product.prodname_dotcom %}.

   ![Screenshot of field to type one-time password](/assets/images/help/2fa/one-time-password-field.png)
1. Da clic en **Verificar dirección de correo electrónico**.

   ![Screenshot of button to verify email address](/assets/images/help/2fa/verify-email-address.png)
1. Escoge un factor de verificación alterno.
    - Si utilizaste tu dispositivo actual para ingresar en esta cuenta anteriormente y te gustaría utilizarlo para verificación, haz clic en **Verificar con este dispositivo**.
    - Si has configurado una llave SSH previamente en esta cuenta y quieres utilizarla para verificación, da clic en **Llave SSH**.
    - Si configuraste un token de acceso personal previamente y te gustaría utilizarlo para verificación, da clic en **Token de acceso personal**.

   ![Screenshot of buttons for alternative verification](/assets/images/help/2fa/alt-verifications.png)
1. A member of {% data variables.contact.github_support %} will review your request and email you within three business days. Si se aprueba tu solicitud, recibirás un enlace para completar el proceso de recuperación de tu cuenta. Si se te niega la solicitud, el mensaje incluirá un medio para contactar a soporte con cualquier pregunta adicional.

{% endif %}
