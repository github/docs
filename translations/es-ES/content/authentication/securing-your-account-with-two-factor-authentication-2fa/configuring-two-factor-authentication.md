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
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179961'
---
Puede configurar la autenticación en dos fases mediante una aplicación móvil{% ifversion fpt or ghec %} o un mensaje de texto{% endif %}. También puedes agregar una clave de seguridad.

Se recomienda encarecidamente el uso de contraseñas de un solo uso y duración definida (TOTP) para configurar 2FA.{% ifversion fpt or ghec %}Las aplicaciones TOTP son más fiables que los SMS, especialmente para las ubicaciones fuera de EE. UU.{% endif %}Las aplicaciones TOTP admiten la copia de seguridad de los códigos de autenticación en la nube y se pueden restaurar en caso de perder el acceso al dispositivo.

{% warning %}

**Advertencia**:
- Si eres miembro{% ifversion fpt or ghec %}, administración de facturación{% endif %} o colaborador externo de un repositorio privado de una organización que exige la autenticación en dos fases, tendrás que dejar la organización antes de poder deshabilitar 2FA en {% data variables.location.product_location %}.
- Si inhabilitas 2FA, automáticamente perderás acceso a la organización y a cualquier bifurcación privada que tengas de los repositorios privados de la organización. Para volver a obtener acceso a la organización y a tus bifurcaciones, habilita nuevamente la autenticación de dos factores y comunícate con un propietario de la organización.

{% endwarning %}

{% ifversion fpt or ghec %}

Si eres miembro de una {% data variables.enterprise.prodname_emu_enterprise %}, no podrás configurar la 2FA para tu cuenta de {% data variables.enterprise.prodname_managed_user %} a menos que hayas iniciado sesión como usuario configurador. Para los usuarios distintos del usuario configurador, un administrador debe configurar 2FA en el proveedor de identidades (IdP).

{% endif %}

## Configurar la autenticación de dos factores mediante una app móvil TOTP

Una aplicación de contraseña única basada en el tiempo (TOTP) genera automáticamente un código de autenticación que cambia después de un cierto período de tiempo. Recomendamos usar apps TOTP basadas en la nube como:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Sugerencia**: Para configurar la autenticación mediante TOTP en varios dispositivos, escanee el código QR con todos los dispositivos al mismo tiempo durante la configuración. Si 2FA ya está habilitado y deseas agregar otro dispositivo, debes volver a configurar 2FA desde tus parámetros de seguridad.

{% endtip %}

1. Descargar una app TOTP.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. En "Configuración de la aplicación autenticadora", realiza una de las siguientes acciones:
    - Escanea el código QR con la app del dispositivo móvil. Luego de escanear, la app muestra un código de seis dígitos que puedes ingresar en {% data variables.product.product_name %}.
    - Si no puede escanear el código QR, haga clic en **escribir este código de texto** para ver un código que puede escribir manualmente en la aplicación TOTP en su lugar.
    ![Clic para escribir este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. La aplicación móvil TOTP guarda tu cuenta en {% data variables.location.product_location %} y genera un código de autenticación nuevo cada pocos segundos. En {% data variables.product.product_name %}, teclea el código en el campo debajo de "Ingresa el código de seis dígitos de la aplicación". 
![Campo para ingresar código de TOTP](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. En "Autenticación en dos fases", seleccione **Configurar con una aplicación** y haga clic en **Continuar**.
6. Debajo de "Verificación de autenticación", realiza alguan de las siguientes acciones:
    - Escanea el código QR con la app del dispositivo móvil. Luego de escanear, la app muestra un código de seis dígitos que puedes ingresar en {% data variables.product.product_name %}.
    - Si no puede escanear el código QR, haga clic en **escribir este código de texto** para ver un código que puede escribir manualmente en la aplicación TOTP en su lugar.
    ![Clic para escribir este código](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. La aplicación móvil TOTP guarda tu cuenta en {% data variables.location.product_location %} y genera un código de autenticación nuevo cada pocos segundos. En {% data variables.product.product_name %}, teclea el código en el campo debajo de "Ingresa el código de seis dígitos de la aplicación".
![Campo para ingresar código de TOTP](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configurar la autenticación de dos factores mediante mensajes de texto

Si no puedes habilitar la autenticación mediante una app móvil TOTP, puedes autenticar mediante mensajes SMS. También puedes brindar un segundo número para un dispositivo de reserva. Si pierdes acceso a tu dispositivo primario y a tus códigos de recuperación, un número de SMS de respaldo puede volver a brindarte acceso a tu cuenta.

Antes de usar este método, asegúrate de que puedes recibir mensajes de texto. Es posible que se apliquen tarifas de protador.

{% warning %}

**Advertencia:** Se **recomienda encarecidamente** usar una aplicación TOTP para la autenticación en dos fases en lugar de SMS. {% data variables.product.product_name %} no admite el envío de mensajes SMS a teléfonos en todos los países. Antes de configurar la autenticación a través de mensaje de texto, revisa la lista de países donde {% data variables.product.product_name %} respalda la autenticación mediante SMS. Para más información, vea "[Países donde se admite la autenticación por SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. Debajo de "Configuración de la aplicación autenticadora", selecciona **Autenticación por SMS**.

  ![Opción alternativa de SMS de 2FA](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. Debajo de "Configuración de autenticación por SMS", selecciona el código de tu país y teclea tu número de teléfono móvil, incluyendo el código de área. Cuando la información sea correcta, haga clic en **Enviar código de autenticación**.

  ![Pantalla 2FA SMS](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Recibirás un mensaje de texto con un código de seguridad. En {% data variables.product.product_name %}, escriba el código en el campo situado debajo de "Escribir el código de seis dígitos que se ha enviado al teléfono" **Continuar**.

  ![Campo de continuación de SMS de 2FA](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configurar la autenticación de dos factores mediante una clave de seguridad

{% data reusables.two_fa.after-2fa-add-security-key %}

En muchos dispositivos y buscadores, puedes utilizar una llave de seguridad física por USB o NFC. Algunos buscadores utilizan un lector de huella digital, reconocimiento facial o contraseña/NIP en tu dispositivo a modo de llave de seguridad.

La autenticación con una clave de seguridad es *secundaria* a la autenticación con una aplicación TOTP{% ifversion fpt or ghec %} o un mensaje de texto{% endif %}. Si pierdes tu llave de seguridad, aún podrás utilizar tu código de teléfono para ingresar.

1. Ya debe haber configurado 2FA mediante una aplicación móvil TOTP{% ifversion fpt or ghec %} o SMS{% endif %}.
2. Asegúrate de que tengas una llave de seguridad compatible con WebAuthn insertada en tu computadora.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. Junto a "Claves de seguridad", haga clic en **Agregar**.
  ![Opción Agregar claves de seguridad](/assets/images/help/2fa/add-security-keys-option.png)
6. En "Claves de seguridad", haga clic en **Registrar nueva clave de seguridad**.
  ![Registro de una nueva clave de seguridad](/assets/images/help/2fa/security-key-register.png)
7. Escriba un alias para la clave de seguridad y, después, haga clic en **Agregar**.
  ![Escritura de un alias para una clave de seguridad](/assets/images/help/2fa/security-key-nickname.png)
8. Activa tu clave de seguridad, seguida por la documentación de tu clave de seguridad.
  ![Solicitud de una clave de seguridad](/assets/images/help/2fa/security-key-prompt.png)
9.  Confirma que has descargado tus códigos de recuperación y puedes acceder a ellos. Si aún no lo has hecho, o si deseas generar otro conjunto de códigos, descarga tus códigos y guárdalos en un lugar seguro. Para obtener más información, consulta "[Descarga de los códigos de recuperación de 2FA](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)".
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configurar la autenticación bifactorial utilizando {% data variables.product.prodname_mobile %}

Puedes utilizar {% data variables.product.prodname_mobile %} para la 2FA cuando inicies sesión en tu cuenta de {% data variables.product.prodname_dotcom %} en un buscador web. La 2FA con {% data variables.product.prodname_mobile %} no depende de TOTP y, en su lugar, utiliza cifrado de llave pública para asegurar tu cuenta.

Una vez que configuraste la aplicación de TOTP o los SMS, también puedes utilizar {% data variables.product.prodname_mobile %} para autenticarte. Si posteriormente ya no tienes acceso a {% data variables.product.prodname_mobile %}, aún podrás utilizar llaves de seguridad o aplicaciones de TOTP para iniciar sesión.

1. Ya debes haber configurado la 2FA a través de una app móvil de TOTP o a través de SMS.
2. Instale [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Inicia sesión en tu cuenta de {% data variables.product.product_name %} desde {% data variables.product.prodname_mobile %}.

Después de iniciar sesión, ahora puedes utilizar tu dispositivo para la 2FA.
{% endif %}

## Información adicional

- "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)"
- "[Configuración de los métodos de recuperación de la autenticación en dos fases](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Acceso a {% data variables.product.prodname_dotcom %} mediante la autenticación en dos fases](/articles/accessing-github-using-two-factor-authentication)".
- "[Recuperación de la cuenta si se pierden las credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
- "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
