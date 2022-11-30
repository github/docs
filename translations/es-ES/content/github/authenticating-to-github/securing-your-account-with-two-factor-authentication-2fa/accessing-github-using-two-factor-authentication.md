---
title: Acceder a GitHub utilizando la autenticación de dos factores
intro: 'Cuando habilitas la 2FA, se te pedirá que proporciones tu código de 2FA así como tu contraseña al momento de iniciar sesión en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/providing-your-2fa-security-code/
  - /articles/providing-your-2fa-authentication-code/
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc/
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

Al tener la autenticación de dos factores habilitada, necesitarás proporcionar el código de autenticación cuando accedes a {% data variables.product.product_name %} a través de tu buscador. Si accedes a {% data variables.product.product_name %} utilizando otros métodos, tales como la API o la línea de comandos, necesitarás utilizar una forma alterna de autenticación. Para obtener más información, consulta la sección "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)".

### Proporcionar un código 2FA al iniciar sesión en el sitio web

Después de que ingresas a {% data variables.product.product_name %} utilizando tu contraseña, se te pedirá proporcionar un código de autenticación desde {% if currentVersion == "free-pro-team@latest" %}un mensaje de texto o{% endif %} desde tu app de TOTP.

{% data variables.product.product_name %} solo te pedirá que brindes tu código de autenticación 2FA nuevamente si has cerrado sesión, estás usando un dispositivo nuevo o si caduca tu sesión.

#### Generar un código a través de una aplicación TOTP

Si decides configurar una autenticación de dos factores mediante una aplicación TOTP en tu smartphone, puedes generar un código de autenticación para {% data variables.product.product_name %} en cualquier momento. En la mayoría de los casos, el lanzamiento de la aplicación generará un código nuevo. Deberías consultar la documentación de la aplicación para conocer las instrucciones específicas.

Si eliminas las aplicaciones móviles después de configurar la autenticación de dos factores, deberás proporcionar tu código de recuperación para obtener acceso a tu cuenta. Para obtener más información, consulta "[Recuperar tu cuenta si perdiste las credenciales de autenticación de dos factores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"

{% if currentVersion == "free-pro-team@latest" %}

#### Recibir un mensaje de texto

Si configuras una autenticación de dos factores mediante mensajes de texto, {% data variables.product.product_name %} te enviará un mensaje de texto con tu código de autenticación.

{% endif %}

### Usar autenticación de dos factores con la línea de comando

Después de haber habilitado 2FA, debes usar un token de acceso personal o una clave SSH en lugar de tu contraseña al acceder a {% data variables.product.product_name %} en la línea de comando.

#### Autenticar en la línea de comando mediante HTTPS

Después de haber habilitado 2FA, debes crear un token de acceso personal para usar una contraseña al autenticar a {% data variables.product.product_name %} en la línea de comando mediante las URL HTTPS.

Cuando se te solicite el nombre de usuario y la contraseña en la línea de comando, usa tu nombre de usuario {% data variables.product.product_name %} y el token de acceso personal. La indicación de la línea de comando no especificará que debes ingresar tu token de acceso personal cuando se te solicite la contraseña.

Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

#### Autenticar en la línea de comandos mediante SSH

La habilitación de 2FA no cambia el modo de autenticar a {% data variables.product.product_name %} en la línea de comando mediante las URL SSH. Para obtener más información sobre cómo establecer y usar una clave SSH, consulta "[Conectar a {% data variables.product.prodname_dotcom %} con SSH](/articles/connecting-to-github-with-ssh/)".

### Usar autenticación de dos factores para acceder a un repositorio mediante Subversion

Cuando accedas a un repositorio mediante Subversion, debes proporcionar un token de acceso personal en lugar de ingresar tu contraseña. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

### Solución de problemas

Si pierdes el acceso a tus credenciales de autenticación de dos factores, puedes usar tus códigos de recuperación u otro método de recuperación (si has configurado uno) para recuperar el acceso a tu cuenta. Para obtener más información, consulta "[Recuperar tu cuenta si pierdes tus credenciales de 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

Si tu autenticación falla varias veces, es posible que desees sincronizar el reloj de tu teléfono con tu proveedor móvil. Frecuentemente, esto involucra la verificación de la opción "Establecer automáticamente" en el reloj de tu teléfono, en lugar de brindar tu propia zona horaria.

### Leer más

- "[Acerca de la autenticación de dos factores](/articles/about-two-factor-authentication)"
- [Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)"
- [Configurar métodos de recuperación de autenticación de dos factores](/articles/configuring-two-factor-authentication-recovery-methods)"
- [Recuperar tu cuenta si pierdes tus credenciales de autenticación de dos factores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
