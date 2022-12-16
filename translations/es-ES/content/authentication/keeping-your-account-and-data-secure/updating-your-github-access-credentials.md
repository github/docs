---
title: Actualizar tus credenciales de acceso de GitHub
intro: 'Las credenciales {% data variables.product.product_name %} no solo incluyen {% ifversion not ghae %} tu contraseña, también los tokens de acceso {% endif %}, las claves SSH y los tokens API de la aplicación que utilizas para comunicarte con {% data variables.product.product_name %}. Si lo necesitas, puedes restablecer todas estas credenciales de acceso tú mismo.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 650c0027b679690def6d1c77d727a87b8688b889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508420'
---
{% ifversion not ghae %}
## Solicitar una contraseña nueva

1. Para solicitar una contraseña nueva, visite {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Escriba la dirección de correo electrónico asociada a la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}y, después, haga clic en **Enviar correo electrónico de restablecimiento de contraseña.** El correo electrónico se enviará a la dirección de correo electrónico de copia de seguridad si ha configurado una.
  ![Cuadro de diálogo de solicitud de correo electrónico de restablecimiento de contraseña](/assets/images/help/settings/password-recovery-email-request.png)
3. Te enviaremos por correo electrónico un enlace que te permitirá restablecer la contraseña. Debes hacer clic en este enlace dentro de las 3 horas posteriores a haber recibido el correo electrónico. Si no recibiste un correo electrónico de nuestra parte, asegúrate de revisar la carpeta de spam.
4. Si has habilitado la autenticación en dos fases, se te pedirán tus credenciales de 2FA: {% ifversion fpt or ghec %}
   * Si tienes {% data variables.product.prodname_mobile %}, se te enviará una notificación push para comprobar tu identidad. Abre la notificación push o la aplicación {% data variables.product.prodname_mobile %} y escribe el código de dos dígitos que se muestra en la página de restablecimiento de contraseña en el explorador.
   ![Mensaje de autenticación de {% data variables.product.prodname_mobile %} en dos fases](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Para omitir el uso de GitHub Mobile para comprobarlo, haz clic en **Especificar autenticación en dos fases o código de recuperación**.
      ![Solicitud de autenticación en dos fases en la aplicación móvil de GitHub {% data variables.product.product_name %} con «Autenticación en dos fases o código de recuperación» resaltado](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * Escriba el código de autenticación o uno de los códigos de recuperación, y haga clic en **Verificar**.
      ![Solicitud de autenticación en dos fases](/assets/images/help/2fa/2fa-password-reset.png)
     * Si has agregado una clave de seguridad a la cuenta, haz clic en **Usar clave de seguridad** en lugar de escribir un código de autenticación.
     {% ifversion fpt or ghec %}
     * Si has configurado [{% data variables.product.prodname_mobile %}](https://github.com/mobile), haz clic en **Autenticar con GitHub Mobile** en su lugar.
     {% endif %}
5. Escriba una contraseña nueva, confírmela y haga clic **Cambiar contraseña**. A fin de obtener ayuda para crear una contraseña segura, vea "[Creación de una contraseña segura](/articles/creating-a-strong-password)".
  {% ifversion fpt or ghec %}![Cuadro de recuperación de contraseña](/assets/images/help/settings/password-recovery-page.png){% else %} ![Password recovery box](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Para evitar perder la contraseña en el futuro, se recomienda usar un administrador de contraseñas seguro, como [LastPass](https://lastpass.com/) o [1Password](https://1password.com/).

{% endtip %}

## Cambiar una contraseña existente

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} to {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. En "Change password" (Cambiar contraseña), escribe tu contraseña antigua, una contraseña segura nueva y confirma tu contraseña nueva. A fin de obtener ayuda para crear una contraseña segura, vea "[Creación de una contraseña segura](/articles/creating-a-strong-password)"
5. Haga clic en **Actualizar contraseña**.

{% tip %}

Para mayor seguridad, habilita la autenticación de dos factores además de cambiar la contraseña. Vea [Acerca de la autenticación en dos fases](/articles/about-two-factor-authentication) para más información.

{% endtip %} {% endif %}
## Actualizar tus tokens de acceso

Vea "[Revisión de las integraciones autorizadas](/articles/reviewing-your-authorized-integrations)" para obtener instrucciones sobre cómo revisar y eliminar tokens de acceso. Para generar nuevos tokens de acceso, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% ifversion not ghae %}

Si has restablecido la contraseña de tu cuenta y también te gustaría activar un cierre de sesión desde la app {% data variables.product.prodname_mobile %}, puedes revocar tu autorización de la aplicación de OAuth de «GitHub iOS» o «GitHub Android». Esto cerrará todas las instancias de la aplicación {% data variables.product.prodname_mobile %} asociada a tu cuenta. Para más información, vea "[Revisión de las integraciones autorizadas](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)".

{% endif %}

## Actualizar tus claves SSH

Vea "[Revisión de las claves SSH](/articles/reviewing-your-ssh-keys)" para obtener instrucciones sobre cómo revisar y eliminar claves SSH. Para generar y agregar nuevas claves SSH, vea "[Generación de una clave SSH](/articles/generating-an-ssh-key)".

## Restablecer tokens API

Si tienes alguna aplicación registrada con {% data variables.product.product_name %}, querrás restablecer sus tokens de OAuth. Para más información, vea el punto de conexión "[Restablecer una autorización](/rest/reference/apps#reset-an-authorization)".

{% ifversion not ghae %}
## Evitar acceso no autorizado

Para obtener más sugerencias sobre cómo proteger la cuenta y evitar el acceso no autorizado, vea "[Prevención del acceso no autorizado](/articles/preventing-unauthorized-access)".
{% endif %}
