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

{% endwarning %}

{% endif %}

## Utilizar un código de recuperación de autenticación de dos factores

Utiliza uno de tus códigos de recuperación para recuperar automáticamente el ingreso a tu cuenta. Es posible que hayas guardado tus códigos de recuperación en un administrador de contraseñas o en la carpeta de descargas de tu computadora. El nombre de archivo por defecto para códigos de recuperación es `github-recovery-codes.txt`. Para obtener más información acerca de códigos de recuperación, consulta "[Configurar métodos de recuperación de autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)."

1. Teclea tu nombre de usuario y contraseña en el prompt de autenticación.

    {% warning %}

    **Advertencia**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}

{% ifversion fpt or ghec %}
1. Debajo de "¿Tienes problemas?", haz clic en **Utiliza un código de recuperación o solicita un restablecimiento**.

   ![Captura de pantalla del enlace para utilizar un código de recuperación](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. En la página 2FA, dentro de "Don't have your phone?" (¿No tienes tu teléfono?), haz clic en **Enter a two-factor recovery code (Ingresar un código de recuperación de dos factores)**.

   ![Captura de pantalla del enlace para utilizar un código de recuperación](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
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

Si conoces tu contraseña de {% data variables.product.product_location %} pero no tienes credenciales de autenticación bifactorial ni códigos de recuperación de autenticación bifactorial, se te puede enviar una contraseña de única ocasión a tu dirección de correo electrónico verificada para comenzar el proceso de verificación y que vuelvas a acceder a tu cuenta.

{% note %}

**Nota**: Por razones de seguridad, el volver a tener acceso a tu cuenta autenticándote con una contraseña de única ocasión podría demorar hasta tres días hábiles. {% data variables.product.company_short %} no revisará solicitudes adicionales que se emitan durante este tiempo.

{% endnote %}

Puedes utilizar tus credenciales de autenticación de dos factores para recobrar el acceso a tu cuenta en cualquier momento durante el periodo de espera de 3 a 5 días.

1. Teclea tu nombre de usuario y contraseña en el prompt de autenticación.

    {% warning %}

    **Advertencia**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Debajo de "¿Tienes problemas?", haz clic en **Utiliza un código de recuperación o solicita un restablecimiento**.

   ![Captura de pantalla del enlace en caso de que no tengas tu dispositivo o códigos de recuperación de 2FA](/assets/images/help/2fa/no-access-link.png)
1. A la derecha de "¿Te quedaste fuera?", haz clic en **Intenta recuperar tu cuenta**.

   ![Captura de pantalla del enlace para intentar recuperar tu cuenta](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Da clic en **Entiendo, comenzar** para solicitar un restablecimiento de tu configuración de autenticación.

    ![Captura de pantalla del botón para comenzar a restablecer los ajustes de autenticación](/assets/images/help/2fa/reset-auth-settings.png)
1. Haz clic en **Enviar contraseña de única ocasión** para que se te envíe a todas las direcciones elegibles asociadas con tu cuenta. Solo las direcciones de correo electrónico verificadas serán elegibles para recuperar una cuenta. Si restringiste los restablecimientos de contraseña a tu dirección primaria o de respaldo, estas serán las únicas elegibles para recuperar tu cuenta.

   ![Captura de pantalla del botó para enviar una contraseña de única ocasión](/assets/images/help/2fa/send-one-time-password.png)
1. Debajo de "Contraseña de una sola vez", teclea la contraseña temporal del correo electrónico de recuperación que envió {% data variables.product.prodname_dotcom %}.

   ![Captura de pantalla del campo para teclear la contraseña de única ocasión](/assets/images/help/2fa/one-time-password-field.png)
1. Da clic en **Verificar dirección de correo electrónico**.

   ![Captura de pantalla del botón para verificar las direcciones de correo electrónico](/assets/images/help/2fa/verify-email-address.png)
1. Escoge un factor de verificación alterno.
    - Si utilizaste tu dispositivo actual para ingresar en esta cuenta anteriormente y te gustaría utilizarlo para verificación, haz clic en **Verificar con este dispositivo**.
    - Si has configurado una llave SSH previamente en esta cuenta y quieres utilizarla para verificación, da clic en **Llave SSH**.
    - Si configuraste un token de acceso personal previamente y te gustaría utilizarlo para verificación, da clic en **Token de acceso personal**.

   ![Captura de pantalla de los botones para verificación alterna](/assets/images/help/2fa/alt-verifications.png)
1. Un miembro de {% data variables.contact.github_support %} revisará tu solicitud y te enviará un correo electrónico en los tres días hábiles siguientes. Si se aprueba tu solicitud, recibirás un enlace para completar el proceso de recuperación de tu cuenta. Si se te niega la solicitud, el mensaje incluirá un medio para contactar a soporte con cualquier pregunta adicional.

{% endif %}
