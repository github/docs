---
title: Modo sudo
intro: 'Para confirmar el acceso a la cuenta antes de realizar una acción potencialmente confidencial, {% data variables.product.product_location %} solicita la autenticación.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147540830'
---
## Acerca del modo sudo

Para mantener la seguridad de la cuenta al realizar una acción potencialmente confidencial en {% data variables.product.product_location %}, debes autenticarte incluso si ya has iniciado sesión. Por ejemplo, {% data variables.product.company_short %} considera que las siguientes acciones son confidenciales porque cada acción podría permitir que una nueva persona o sistema acceda a tu cuenta.

- Modificación de una dirección de correo electrónico asociada
- Autorización de una aplicación de terceros
- Adición de una nueva clave SSH

Después de autenticarte para realizar una acción confidencial, la sesión se encontrará temporalmente en «modo sudo». En el modo sudo puedes realizar acciones confidenciales sin autenticación. {% data variables.product.product_name %} esperará unas horas antes de solicitarle la autenticación de nuevo. Durante este tiempo, cualquier acción confidencial que realices reiniciará el temporizador.

{% ifversion ghes %}

{% note %}

**Nota**: Si {% data variables.product.product_location %} usa un método de autenticación externo como CAS o SAML SSO, no se te solicitará que entres en modo sudo. Para obtener más información, contacta a tu administrador de sitio.

{% endnote %}

{% endif %}

«sudo» es una referencia a un programa en los sistemas Unix, donde es el nombre abreviado para «**su** peruser **do**». Para obtener más información, consulta [sudo](https://wikipedia.org/wiki/Sudo) en Wikipedia.

## Confirmación del acceso para el modo sudo

Para confirmar el acceso al modo sudo, {% ifversion totp-and-mobile-sudo-challenge %}puedes{% else %}debes{% endif %} autenticarte con tu contraseña. {% ifversion totp-and-mobile-sudo-challenge %} Opcionalmente, puedes usar un método de autenticación diferente, como {% ifversion fpt or ghec %}una clave de seguridad, {% data variables.product.prodname_mobile %} o un código de 2FA{% elsif ghes %}una clave de seguridad o un código de 2FA{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Confirmación del acceso mediante una clave de seguridad](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [Confirmación del acceso mediante la aplicación móvil de GitHub](#confirming-access-using-github-mobile) {%- endif %}
- [Confirmación del acceso mediante un código 2FA](#confirming-access-using-a-2fa-code)
- [Confirmación del acceso mediante contraseña](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirmación del acceso mediante una clave de seguridad

Debes configurar la autenticación en dos fases (2FA) para tu cuenta mediante una clave de seguridad para confirmar el acceso a la cuenta para el modo sudo mediante la clave de seguridad. Para obtener más información, vea "[Configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

Cuando se te pida que te autentiques para el modo sudo, haz clic en **Usar clave de seguridad** y, después, sigue las indicaciones.

![Captura de pantalla de la opción de clave de seguridad para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Confirmación del acceso mediante {% data variables.product.prodname_mobile %}

Debes instalar e iniciar sesión en {% data variables.product.prodname_mobile %} para confirmar el acceso a tu cuenta para el modo sudo mediante la aplicación. Para obtener más información, consulta «[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)».

1. Cuando se te pida que te autentiques para el modo sudo, haz clic en **Usar la aplicación móvil de GitHub**.

   ![Captura de pantalla de la opción {% data variables.product.prodname_mobile %} para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Abre {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} mostrará los números que debes escribir en {% data variables.product.product_location %} para aprobar la solicitud.

   ![Captura de pantalla de los números de {% data variables.product.prodname_mobile %} que debes escribir en {% data variables.product.product_name %} para aprobar el acceso al modo sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. En {% data variables.product.product_name %}, escribe los números mostrados en {% data variables.product.prodname_mobile %}.

{% endif %}

### Confirmación del acceso mediante un código 2FA

Debes configurar 2FA mediante una aplicación móvil TOTP{% ifversion fpt or ghec %} o mensajes de texto{% endif %} para confirmar el acceso a tu cuenta para el modo sudo mediante un código 2FA. Para obtener más información, vea "[Configuración de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

Cuando se te pida que te autentiques para el modo sudo, escribe el código de autenticación de la aplicación móvil TOTP{% ifversion fpt or ghec %} o el mensaje de texto{% endif %}y, a continuación, haz clic en **Comprobar**.

![Captura de pantalla de la solicitud del código 2FA para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Confirmación del acceso mediante contraseña

{% endif %}

Cuando se te pida que te autentiques para el modo sudo, escribe la contraseña y, después, haz clic en **Confirmar**.

![Captura de pantalla de la solicitud de contraseña para el modo sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
