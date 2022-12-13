---
title: Acceder a GitHub utilizando la autenticación de dos factores
intro: 'Cuando habilitas la 2FA, se te pedirá que proporciones tu código de 2FA así como tu contraseña al momento de iniciar sesión en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 244cc4b45165cbc327729fd6d1c5ac519a6a6d7a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091778'
---
Al tener la autenticación de dos factores habilitada, necesitarás proporcionar el código de autenticación cuando accedes a {% data variables.product.product_name %} a través de tu buscador. Si accedes a {% data variables.product.product_name %} utilizando otros métodos, tales como la API o la línea de comandos, necesitarás utilizar una forma alterna de autenticación. Para más información, vea "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)".

## Proporcionar un código 2FA al iniciar sesión en el sitio web

Después de iniciar sesión en {% data variables.product.product_name %} con la contraseña, se le pedirá que proporcione un código de autenticación desde {% ifversion fpt or ghec %}un mensaje de texto o{% endif %} la aplicación de TOTP.

{% data variables.product.product_name %} solo te pedirá que brindes tu código de autenticación 2FA nuevamente si has cerrado sesión, estás usando un dispositivo nuevo o si caduca tu sesión.

### Generar un código a través de una aplicación TOTP

Si decides configurar una autenticación de dos factores mediante una aplicación TOTP en tu smartphone, puedes generar un código de autenticación para {% data variables.product.product_name %} en cualquier momento. En la mayoría de los casos, el lanzamiento de la aplicación generará un código nuevo. Deberías consultar la documentación de la aplicación para conocer las instrucciones específicas.

Si eliminas las aplicaciones móviles después de configurar la autenticación de dos factores, deberás proporcionar tu código de recuperación para obtener acceso a tu cuenta. Para más información, vea "[Recuperación de la cuenta en caso de perder las credenciales de autenticación en dos fases](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"

{% ifversion fpt or ghec %}

### Recibir un mensaje de texto

Si configuras una autenticación de dos factores mediante mensajes de texto, {% data variables.product.product_name %} te enviará un mensaje de texto con tu código de autenticación.

### Verificar con {% data variables.product.prodname_mobile %}

Si instalaste e iniciaste sesión en {% data variables.product.prodname_mobile %}, podrías elegir autenticarte con {% data variables.product.prodname_mobile %} para la autenticación bifactorial.

1. Inicia sesión en {% data variables.product.product_name %} con tu buscador, utilizando tu usuario y contraseña.
2. Si agregaste una llave de seguridad a tu cuenta, primero se te pedirá insertar y utilizar una llave de seguridad. Para omitir el uso de una clave de seguridad, haga clic en **Autenticar con {% data variables.product.prodname_mobile %}** .
  ![Desafío de la autenticación en dos fases en {% data variables.product.product_name %} con "Autenticación con {% data variables.product.prodname_mobile %}" resaltado](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} te enviará una notificación push para verificar tu intento de inicio de sesión. Abrir la notificación push o abrir la app de {% data variables.product.prodname_mobile %} mostrará un mensaje que te pide aprobar o rechazar este intento de inicio de sesión.
  {% note %}

  **Nota**: Este mensaje podría indicarle que escriba un número de dos dígitos que se muestra dentro del explorador en el que ha iniciado sesión.

  {% endnote %}

  ![El reto de autenticación bifactorial con {% data variables.product.prodname_mobile %} que requiere una entrada de dos dígitos](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Cuando apruebes el intento de inicio de sesión utilizando {% data variables.product.prodname_mobile %}, tu buscador completará el inicio de sesión automáticamente.
    - Si rechazas el intento de inicio de sesión, se prevendrá la finalización de la autenticación. Para más información, vea "[Protección de la cuenta y los datos](/authentication/keeping-your-account-and-data-secure)".

{% endif %}

## Usar autenticación de dos factores con la línea de comando

Después de habilitar 2FA, ya no usarás la contraseña para acceder a {% data variables.product.product_name %} en la línea de comandos. En vez de ello tendrás que usar el Administrador de credenciales de Git, un token de acceso personal o una clave SSH.

### Autenticación en la línea de comandos mediante el Administrador de credenciales de Git

El [Administrador de credenciales de Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) es un asistente de credenciales de Git seguro que se ejecuta en Windows, macOS y Linux. Para obtener más información sobre los asistentes de credenciales de Git, consulta [Evitar repeticiones](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) en el libro de Git de Pro.

Las instrucciones de configuración varían en función del sistema operativo del equipo. Para obtener más información, consulta [Descargar e instalar](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) en el repositorio GitCredentialManager/git-credential-manager.

### Autenticar en la línea de comando mediante HTTPS

Después de haber habilitado 2FA, debes crear un token de acceso personal para usar una contraseña al autenticar a {% data variables.product.product_name %} en la línea de comando mediante las URL HTTPS.

Cuando se te solicite el nombre de usuario y la contraseña en la línea de comando, usa tu nombre de usuario {% data variables.product.product_name %} y el token de acceso personal. La indicación de la línea de comando no especificará que debes ingresar tu token de acceso personal cuando se te solicite la contraseña.

Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Autenticar en la línea de comandos mediante SSH

La habilitación de 2FA no cambia el modo de autenticar a {% data variables.product.product_name %} en la línea de comando mediante las URL SSH. Para más información sobre cómo configurar y usar una clave SSH, vea "[Conexión a {% data variables.product.prodname_dotcom %} con SSH](/articles/connecting-to-github-with-ssh/)".

## Usar autenticación de dos factores para acceder a un repositorio mediante Subversion

Cuando accedas a un repositorio mediante Subversion, debes proporcionar un token de acceso personal en lugar de ingresar tu contraseña. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

## Solución de problemas

Si pierdes el acceso a tus credenciales de autenticación de dos factores, puedes usar tus códigos de recuperación u otro método de recuperación (si has configurado uno) para recuperar el acceso a tu cuenta. Para más información, vea "[Recuperación de la cuenta si se pierden las credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

Si tu autenticación falla varias veces, es posible que desees sincronizar el reloj de tu teléfono con tu proveedor móvil. Frecuentemente, esto involucra la verificación de la opción "Establecer automáticamente" en el reloj de tu teléfono, en lugar de brindar tu propia zona horaria.

## Información adicional

- "[Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication)"
- "[Configuración de la autenticación en dos fases](/articles/configuring-two-factor-authentication)"
- "[Configuración de los métodos de recuperación de la autenticación en dos fases](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Recuperación de la cuenta en caso de perder las credenciales de autenticación en dos fases](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
