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
shortTitle: Recover an account with 2FA
ms.openlocfilehash: 1a93d77d4da76a6efbc96ba5d80d0fe7e800c08a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091763'
---
{% ifversion fpt or ghec %}

{% warning %}

**Advertencias:** 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## Utilizar un código de recuperación de autenticación de dos factores

Utiliza uno de tus códigos de recuperación para recuperar automáticamente el ingreso a tu cuenta. Es posible que hayas guardado tus códigos de recuperación en un administrador de contraseñas o en la carpeta de descargas de tu computadora. El nombre de archivo predeterminado para los códigos de recuperación es `github-recovery-codes.txt`. Para más información sobre los códigos de recuperación, vea "[Configuración de métodos de recuperación de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)".

1. Teclea tu nombre de usuario y contraseña en el prompt de autenticación.

    {% warning %}

    **Advertencia**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. En "¿Tiene problemas?", haga clic en **Usar un código de recuperación o solicitar un restablecimiento**.

   ![Captura de pantalla del vínculo para usar un código de recuperación](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. En la página 2FA, en "¿No tiene el teléfono?", haga clic en **Escribir un código de recuperación de dos fases**.

   ![Captura de pantalla del enlace para utilizar un código de recuperación](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Escriba uno de los códigos de recuperación y, después, haga clic en **Comprobar**.

   ![Campo para escribir un código de recuperación y botón Verificar](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Autenticar con un número de reserva

Si pierdes el acceso a tu app TOTP principal o número de teléfono, puedes proporcionar un código de autenticación de dos factores enviado a tu número de reserva para recuperar automáticamente el acceso a tu cuenta.
{% endif %}

## Autenticar con una clave de seguridad

Si has configurado autenticación de dos factores utilizando una clave de seguridad, puedes utilizar tu clave de seguridad como un método de autenticación secundario para obtener acceso a tu cuenta automáticamente. Para obtener más información, vea "[Configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% ifversion fpt or ghec %}
## Autentificarse con un dispositivo verificado, token SSH, o token de acceso personal

Si conoces tu contraseña de {% data variables.product.product_location %} pero no tienes credenciales de autenticación bifactorial ni códigos de recuperación de autenticación bifactorial, se te puede enviar una contraseña de única ocasión a tu dirección de correo electrónico verificada para comenzar el proceso de verificación y que vuelvas a acceder a tu cuenta.

{% note %}

**Nota**: Por razones de seguridad, la recuperación del acceso a la cuenta mediante la autenticación con una contraseña única podría tardar hasta tres días hábiles. {% data variables.product.company_short %} no revisará solicitudes adicionales que se emitan durante este tiempo.

{% endnote %}

Puedes utilizar tus credenciales de autenticación de dos factores para recobrar el acceso a tu cuenta en cualquier momento durante el periodo de espera de 3 a 5 días.

1. Teclea tu nombre de usuario y contraseña en el prompt de autenticación.

    {% warning %}

    **Advertencia**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. En "¿Tiene problemas?", haga clic en **Usar un código de recuperación o solicitar un restablecimiento**.

   ![Captura de pantalla del enlace en caso de que no tengas tu dispositivo o códigos de recuperación de 2FA](/assets/images/help/2fa/no-access-link.png)
1. A la derecha de "¿Bloqueado?", haga clic en **Intentar recuperar la cuenta**.

   ![Captura de pantalla del enlace para intentar recuperar tu cuenta](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Haga clic en **Comprendo, empezar** para solicitar un restablecimiento de la configuración de autenticación.

    ![Captura de pantalla del botón para comenzar a restablecer los ajustes de autenticación](/assets/images/help/2fa/reset-auth-settings.png)
1. Haga clic en **Enviar contraseña única** para enviar una contraseña única a todas las direcciones aptas asociadas a la cuenta. Solo las direcciones de correo electrónico verificadas serán elegibles para recuperar una cuenta. Si restringiste los restablecimientos de contraseña a tu dirección primaria o de respaldo, estas serán las únicas elegibles para recuperar tu cuenta.

   ![Captura de pantalla del botó para enviar una contraseña de única ocasión](/assets/images/help/2fa/send-one-time-password.png)
1. Debajo de "Contraseña de una sola vez", teclea la contraseña temporal del correo electrónico de recuperación que envió {% data variables.product.prodname_dotcom %}.

   ![Captura de pantalla del campo para teclear la contraseña de única ocasión](/assets/images/help/2fa/one-time-password-field.png)
1. Haga clic en **Comprobar dirección de correo electrónico**.

   ![Captura de pantalla del botón para verificar las direcciones de correo electrónico](/assets/images/help/2fa/verify-email-address.png)
1. Escoge un factor de verificación alterno.
    - Si ha usado el dispositivo actual para iniciar sesión en esta cuenta anteriormente y le gustaría utilizarlo para la verificación, haga clic en **Verificar con este dispositivo**.
    - Si previamente ha configurado una clave SSH en esta cuenta y quiere usarla para la verificación, haga clic en **Clave SSH**.
    - Si previamente ha configurado un token de acceso personal y quiere usarlo para la verificación, haga clic en **Token de acceso personal**.

   ![Captura de pantalla de los botones para verificación alterna](/assets/images/help/2fa/alt-verifications.png)
1. Un miembro de {% data variables.contact.github_support %} revisará tu solicitud y te enviará un correo electrónico en los tres días hábiles siguientes. Si se aprueba tu solicitud, recibirás un enlace para completar el proceso de recuperación de tu cuenta. Si se te niega la solicitud, el mensaje incluirá un medio para contactar a soporte con cualquier pregunta adicional.

{% endif %}
