---
title: Configurar la autenticación de dos factores
intro: Puedes elegir entre varias opciones para añadir una segunda fuente de autenticación a tu cuenta.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configurar la 2FA
---

Puedes configurar la autenticación de dos factores usando una app móvil {% ifversion fpt or ghec %} o mediante un mensaje de texto{% endif %}. También puedes agregar una clave de seguridad.

Recomendamos encarecidamente el uso de una contraseña única basada en el tiempo (TOTP) para configurar 2FA.{% ifversion fpt or ghec %}Las aplicaciones TOTP son más confiables que los SMS, especialmente para las ubicaciones fuera de los EE. UU.{% endif %}Las apps TOTP respaldan las copias de seguridad de los códigos de autenticación en la nube y pueden restaurarse si pierdes acceso a tu dispositivo.

{% warning %}

**Advertencia:**
- Si eres un miembro{% ifversion fpt or ghec %}, gerente de facturación{% endif %} o colaborador externo de un repositorio privado de una organización que requiere autenticación de dos factores, debes salir de la organización antes de que puedas inhabilitar 2FA en {% data variables.product.product_location %}.
- Si inhabilitas 2FA, automáticamente perderás acceso a la organización y a cualquier bifurcación privada que tengas de los repositorios privados de la organización. Para volver a obtener acceso a la organización y a tus bifurcaciones, habilita nuevamente la autenticación de dos factores y comunícate con un propietario de la organización.

{% endwarning %}

{% ifversion fpt or ghec %}

Si eres miembro de una {% data variables.product.prodname_emu_enterprise %}, no puedes configurar la 2FA para tu cuenta de {% data variables.product.prodname_managed_user %} a menos de que hayas iniciado sesión como el usuario configurado. Para los usuarios diferentes al usuario configurado, un administrador debe configurar la 2FA en tu proveedor de identidad (IdP).

{% endif %}

## Configurar la autenticación de dos factores mediante una app móvil TOTP

Una aplicación de contraseña única basada en el tiempo (TOTP) genera automáticamente un código de autenticación que cambia después de un cierto período de tiempo. Recomendamos usar apps TOTP basadas en la nube como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Autenticador de Microsoft](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Sugerencia**: Para configurar la autenticación mediante TOTP en múltiples dispositivos, durante la configuración, escanea el código QR usando todos los dispositivos al mismo tiempo. Si 2FA ya está habilitado y deseas agregar otro dispositivo, debes volver a configurar 2FA desde tus parámetros de seguridad.

{% endtip %}

1. Descargar una app TOTP.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghec or ghes %}
5. Debajo de "Autenticación bifactorial", selecciona **Configurar utilizando una app** y haz clic en **Continuar**.
6. Debajo de "Verificación de autenticación", realiza alguan de las siguientes acciones:
    - Escanea el código QR con la app del dispositivo móvil. Luego de escanear, la app muestra un código de seis dígitos que puedes ingresar en {% data variables.product.product_name %}.
    - Si no puedes escanear el código QR, haz clic en **ingresa este código de texto** para ver un código que puedas ingresar manualmente en tu app de TOTP en su lugar. ![Haz clic para ingresar este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. La aplicación móvil TOTP guarda tu cuenta en {% data variables.product.product_location %} y genera un código de autenticación nuevo cada pocos segundos. En {% data variables.product.product_name %}, teclea el código en el campo debajo de "Ingresa el código de seis dígitos de la aplicación". Si tus códigos de recuperación no se muestran automáticamente, haz clic en **Continuar**. ![Campo para ingresar código de TOTP](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{%- else %}
5. En la página de autenticación de dos factores, haz clic en **Set up using an app** (Configurar mediante una app).
6. Guarda tus códigos de recuperación en un lugar seguro. Tus códigos de recuperación te ayudarán a regresar a tu cuenta si pierdes acceso.
    - Para guardar tus códigos de recuperación en tu dispositivo, haz clic en **Download** (Descargar).
    - Para guardar una copia impresa de tus códigos de recuperación, haz clic en **Print** (Imprimir).
    - Para copiar tus códigos de recuperación a fin de almacenarlo en un administrador de contraseñas, haz clic en **Copy** (Copiar). ![Lista de códigos de recuperación con opción para descargar, imprimir o copiar los códigos](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)
7. Después de guardar tu código de recuperación de dos factores, haz clic en **Next** (Siguiente).
8. En la página de autenticación de dos factores, realiza una de las siguientes opciones:
    - Escanea el código QR con la app del dispositivo móvil. Luego de escanear, la app muestra un código de seis dígitos que puedes ingresar en {% data variables.product.product_name %}.
    - Si no puedes escanear el código QR, haz clic en **enter this text code** (escribir este código de texto) para ver un código que puedas copiar e ingresar manualmente en {% data variables.product.product_name %}. ![Haz clic para ingresar este código](/assets/images/help/2fa/totp-click-enter-code.png)
9. La aplicación móvil TOTP guarda tu cuenta en {% data variables.product.product_location %} y genera un código de autenticación nuevo cada pocos segundos. En {% data variables.product.product_name %}, en la página 2FA, escribe el código y haz clic en **Enable** (Habilitar). ![Campo TOTP Enable (Habilitar TOTP)](/assets/images/help/2fa/totp-enter-code.png)
{%- endif %}
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configurar la autenticación de dos factores mediante mensajes de texto

Si no puedes habilitar la autenticación mediante una app móvil TOTP, puedes autenticar mediante mensajes SMS. También puedes brindar un segundo número para un dispositivo de reserva. Si pierdes acceso a tu dispositivo primario y a tus códigos de recuperación, un número de SMS de respaldo puede volver a brindarte acceso a tu cuenta.

Antes de usar este método, asegúrate de que puedes recibir mensajes de texto. Es posible que se apliquen tarifas de protador.

{% warning %}

**Advertencia:** **Recomendamos enérgicamente** el uso de una aplicación TOTP para la autenticación de dos factores en lugar de SMS. {% data variables.product.product_name %} no admite el envío de mensajes SMS a teléfonos en todos los países. Antes de configurar la autenticación a través de mensaje de texto, revisa la lista de países donde {% data variables.product.product_name %} respalda la autenticación mediante SMS. Para obtener más información, consulta "[Países donde es compatible la autenticación SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Debajo de la "Autenticación bifactorial", selecciona **Configurar utilizando SMS** y haz clic en **Continuar**.
5. Debajo de "Verificación de autenticación", selecciona el código de tu país y teclea tu número de teléfono móvil, incluyendo el código de área. Cuando la información es correcta, haz clic en **Send authentication code** (Enviar código de autenticación).

  ![Pantalla 2FA SMS](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Recibirás un mensaje de texto con un código de seguridad. En {% data variables.product.product_name %}, teclea el código en el campo debajo de "Ingresa el código de seis dígitos que se envió a tu teléfono" y haz clic en **Continuar**.

  ![Campo 2FA SMS continue (Continuación de 2FA SMS)](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configurar la autenticación de dos factores mediante una clave de seguridad

{% data reusables.two_fa.after-2fa-add-security-key %}

En muchos dispositivos y buscadores, puedes utilizar una llave de seguridad física por USB o NFC. Algunos buscadores utilizan un lector de huella digital, reconocimiento facial o contraseña/NIP en tu dispositivo a modo de llave de seguridad.

La autenticación con una clave de seguridad es *secundaria* para la autenticación con una aplicación TOTP{% ifversion fpt or ghec %} o un mensaje de texto{% endif %}. Si pierdes tu llave de seguridad, aún podrás utilizar tu código de teléfono para ingresar.

1. Ya debes tener configurado 2FA mediante una app móvil TOTP{% ifversion fpt or ghec %} o mediante SMS{% endif %}.
2. Asegúrate de que tengas una llave de seguridad compatible con WebAuthn insertada en tu computadora.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
5. Al lado de "Security keys" (Claves de seguridad), haz clic en **Add** (Agregar). ![Agrega la opción de las claves de seguridad](/assets/images/help/2fa/add-security-keys-option.png)
6. En "Security keys" (Claves de seguridad), haz clic en **Register new security key** (Registrar clave de seguridad nueva). ![Registrar una nueva clave de seguridad](/assets/images/help/2fa/security-key-register.png)
7. Escribe un sobrenombre para la clave de seguridad, luego haz clic en **Add** (Agregar). ![Porporcionar un sobrenombre para una clave de seguridad](/assets/images/help/2fa/security-key-nickname.png)
8. Activa tu clave de seguridad, seguida por la documentación de tu clave de seguridad.![Solicitar una clave de seguridad](/assets/images/help/2fa/security-key-prompt.png)
9.  Confirma que has descargado tus códigos de recuperación y puedes acceder a ellos. Si aún no lo has hecho, o si deseas generar otro conjunto de códigos, descarga tus códigos y guárdalos en un lugar seguro. Si pierdes el acceso a tu cuenta, puedes usar tus códigos de recuperación para volver a ingresar a tu cuenta. Para obtener más información, consulta "[Recuperar tu cuenta si pierdes tus credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)". ![Botón Download recovery codes (Descargar códigos de recuperación)](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configurar la autenticación bifactorial utilizando {% data variables.product.prodname_mobile %}

Puedes utilizar {% data variables.product.prodname_mobile %} para la 2FA cuando inicies sesión en tu cuenta de {% data variables.product.prodname_dotcom %} en un buscador web. La 2FA con {% data variables.product.prodname_mobile %} no depende de TOTP y, en su lugar, utiliza cifrado de llave pública para asegurar tu cuenta.

Una vez que configuraste la aplicación de TOTP o los SMS, también puedes utilizar {% data variables.product.prodname_mobile %} para autenticarte. Si posteriormente ya no tienes acceso a {% data variables.product.prodname_mobile %}, aún podrás utilizar llaves de seguridad o aplicaciones de TOTP para iniciar sesión.

1. Ya debes haber configurado la 2FA a través de una app móvil de TOTP o a través de SMS.
2. Instala [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Inicia sesión en tu cuenta de {% data variables.product.product_name %} desde {% data variables.product.prodname_mobile %}.

Después de iniciar sesión, ahora puedes utilizar tu dispositivo para la 2FA.
{% endif %}

## Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acceder {% data variables.product.prodname_dotcom %} utilizando autenticación de dos factores](/articles/accessing-github-using-two-factor-authentication)"
- "[Recuperar tu cuenta si pierdes tus credenciales 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
