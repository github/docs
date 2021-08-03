---
title: Configurar la autenticación de dos factores
intro: Puedes elegir entre varias opciones para añadir una segunda fuente de autenticación a tu cuenta.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app/
  - /articles/configuring-two-factor-authentication-via-text-message/
  - /articles/configuring-two-factor-authentication-via-fido-u2f/
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---
Puedes configurar la autenticación de dos factores usando una app móvil {% if currentVersion == "free-pro-team@latest" %} o mediante un mensaje de texto{% endif %}. También puedes agregar una clave de seguridad.

Recomendamos encarecidamente el uso de una contraseña única basada en el tiempo (TOTP) para configurar 2FA.{% if currentVersion == "free-pro-team@latest" %}Las aplicaciones TOTP son más confiables que los SMS, especialmente para las ubicaciones fuera de los EE. UU.{% endif %}Las apps TOTP respaldan las copias de seguridad de los códigos de autenticación en la nube y pueden restaurarse si pierdes acceso a tu dispositivo.

{% warning %}

**Advertencia:**
- Si eres un miembro{% if currentVersion == "free-pro-team@latest" %}, gerente de facturación{% endif %} o colaborador externo de un repositorio privado de una organización que requiere autenticación de dos factores, debes salir de la organización antes de que puedas inhabilitar 2FA en {% data variables.product.product_location %}.
- Si inhabilitas 2FA, automáticamente perderás acceso a la organización y a cualquier bifurcación privada que tengas de los repositorios privados de la organización. Para volver a obtener acceso a la organización y a tus bifurcaciones, habilita nuevamente la autenticación de dos factores y comunícate con un propietario de la organización.

{% endwarning %}

### Configurar la autenticación de dos factores mediante una app móvil TOTP

Una aplicación de contraseña única basada en el tiempo (TOTP) genera automáticamente un código de autenticación que cambia después de un cierto período de tiempo. Recomendamos usar apps TOTP basadas en la nube como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)

{% tip %}

**Sugerencia**: Para configurar la autenticación mediante TOTP en múltiples dispositivos, durante la configuración, escanea el código QR usando todos los dispositivos al mismo tiempo. Si 2FA ya está habilitado y deseas agregar otro dispositivo, debes volver a configurar 2FA desde tus parámetros de seguridad.

{% endtip %}

1. Descargar una app TOTP.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
5. En la página de autenticación de dos factores, haz clic en **Set up using an app** (Configurar mediante una app).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
8. En la página de autenticación de dos factores, realiza una de las siguientes opciones:
    - Escanea el código QR con la app del dispositivo móvil. Luego de escanear, la app muestra un código de seis dígitos que puedes ingresar en {% data variables.product.product_name %}.
    - Si no puedes escanear el código QR, haz clic en **enter this text code** (escribir este código de texto) para ver un código que puedas copiar e ingresar manualmente en {% data variables.product.product_name %}. ![Haz clic para ingresar este código](/assets/images/help/2fa/totp-click-enter-code.png)
9. La aplicación móvil TOTP guarda tu cuenta {% data variables.product.product_name %} y genera un nuevo código de autenticación cada algunos segundos. En {% data variables.product.product_name %}, en la página 2FA, escribe el código y haz clic en **Enable** (Habilitar). ![Campo TOTP Enable (Habilitar TOTP)](/assets/images/help/2fa/totp-enter-code.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% if currentVersion == "free-pro-team@latest" %}

### Configurar la autenticación de dos factores mediante mensajes de texto

Si no puedes habilitar la autenticación mediante una app móvil TOTP, puedes autenticar mediante mensajes SMS. También puedes brindar un segundo número para un dispositivo de reserva. Si pierdes acceso a tu dispositivo primario y a tus códigos de recuperación, un número de SMS de respaldo puede volver a brindarte acceso a tu cuenta.

Antes de usar este método, asegúrate de que puedes recibir mensajes de texto. Es posible que se apliquen tarifas de protador.

{% warning %}

**Advertencia:** **Recomendamos enérgicamente** el uso de una aplicación TOTP para la autenticación de dos factores en lugar de SMS. {% data variables.product.product_name %} no admite el envío de mensajes SMS a teléfonos en todos los países. Antes de configurar la autenticación a través de mensaje de texto, revisa la lista de países donde {% data variables.product.product_name %} respalda la autenticación mediante SMS. Para obtener más información, consulta "[Países donde es compatible la autenticación SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. En la página de autenticación de dos factores, haz clic en **Set up using SMS** (Configurar mediante SMS).
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
7. Selecciona tu código de país y escribe el número de teléfono móvil, incluido el número de área. Cuando la información es correcta, haz clic en **Send authentication code** (Enviar código de autenticación). ![Pantalla 2FA SMS](/assets/images/help/2fa/2fa_sms_photo.png)
8. Recibirás un mensaje de texto con un código de seguridad. Escribe el código en la página de autenticación de dos factores, y haz clic en **Enable** (Habilitar). ![Campo 2FA SMS continue (Continuación de 2FA SMS)](/assets/images/help/2fa/2fa-sms-code-enable.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

### Configurar la autenticación de dos factores mediante una clave de seguridad

{% data reusables.two_fa.after-2fa-add-security-key %}

En muchos dispositivos y buscadores, puedes utilizar una llave de seguridad física por USB o NFC. Algunos buscadores utilizan un lector de huella digital, reconocimiento facial o contraseña/NIP en tu dispositivo a modo de llave de seguridad.

La autenticación con una clave de seguridad es *secundaria* para la autenticación con una aplicación TOTP{% if currentVersion == "free-pro-team@latest" %} o un mensaje de texto{% endif %}. Si pierdes tu llave de seguridad, aún podrás utilizar tu código de teléfono para ingresar.

1. Ya debes tener configurado 2FA mediante una app móvil TOTP{% if currentVersion == "free-pro-team@latest" %} o mediante SMS{% endif %}.
2. Asegúrate de tener una
clave se seguridad compatible {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}WebAuthn{% else %}FIDO U2F{% endif %} insertada en tu computadora.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
5. Al lado de "Security keys" (Claves de seguridad), haz clic en **Add** (Agregar). ![Agrega la opción de las claves de seguridad](/assets/images/help/2fa/add-security-keys-option.png)
6. En "Security keys" (Claves de seguridad), haz clic en **Register new security key** (Registrar clave de seguridad nueva).
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Registrar una nueva clave de seguridad](/assets/images/help/2fa/security-key-register.png)
  {% else %}
  ![Registrar un nuevo dispositivo FIDO U2F](/assets/images/help/2fa/register_new_fido_u2f_device.png)
  {% endif %}
7. Escribe un sobrenombre para la clave de seguridad, luego haz clic en **Add** (Agregar).
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Porporcionar un sobrenombre para una clave de seguridad](/assets/images/help/2fa/security-key-nickname.png)
  {% else %}
  ![Brindar un sobrenombre para un dispositivo FIDO U2F](/assets/images/help/2fa/fido_u2f_nickname.png)
  {% endif %}
8. Activa tu clave de seguridad, seguida por la documentación de tu clave de seguridad.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
  ![Solicitar una clave de seguridad](/assets/images/help/2fa/security-key-prompt.png)
  {% else %}
  ![Solicitar un dispositivo FIDO U2F](/assets/images/help/2fa/fido_u2f_prompt_key.png)
  {% endif %}
9.  Confirma que has descargado tus códigos de recuperación y puedes acceder a ellos. Si aún no lo has hecho, o si deseas generar otro conjunto de códigos, descarga tus códigos y guárdalos en un lugar seguro. Si pierdes el acceso a tu cuenta, puedes usar tus códigos de recuperación para volver a ingresar a tu cuenta. Para obtener más información, consulta "[Recuperar tu cuenta si pierdes tus credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)". ![Botón Download recovery codes (Descargar códigos de recuperación)](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acceder {% data variables.product.prodname_dotcom %} utilizando autenticación de dos factores](/articles/accessing-github-using-two-factor-authentication)"
- "[Recuperar tu cuenta si pierdes tus credenciales 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
