---
title: Acerca de la autenticación de dos factores
intro: '{% data reusables.two_fa.about-2fa %} Con la 2FA, tendrás que ingresar con tu nombre de usuario y contraseña y proporcionar otra forma de autenticación que solo tú sepas o a la que solo tú tengas acceso.'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: f4b15aeeece76ce5e5afe915e0e0bc4893c4dbb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091780'
---
Para {% data variables.product.product_name %}, la segunda forma de autenticación es un código que genera una aplicación en su dispositivo móvil{% ifversion fpt or ghec %} o que envía como mensaje de texto (SMS){% endif %}. Una vez que activas la 2FA, {% data variables.product.product_name %} genera un código de autenticación cada vez que alguien intenta iniciar sesión en tu cuenta de {% data variables.product.product_location %}. Una persona solo puede iniciar sesión en su cuenta si conoce la contraseña y tiene acceso al código de autenticación en el teléfono.

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} Además de las claves de seguridad, también puede utilizar {% data variables.product.prodname_mobile %} para la autenticación en dos fases después de configurar una aplicación móvil TOTP o mensajes de texto. {% data variables.product.prodname_mobile %} utiliza criptografía de clave pública para proteger tu cuenta, lo cual te permite utilizar cualquier dispositivo móvil que hayas usado para iniciar sesión en {% data variables.product.prodname_mobile %} como segundo factor.
{% endif %}

También puedes configurar métodos de recuperación adicionales en caso de que pierdas el acceso a tus credenciales de autenticación de dos factores. Para obtener más información sobre cómo configurar la autenticación en dos fases, vea "[Configurar la autenticación en dos fases](/articles/configuring-two-factor-authentication)" y "[Configurar métodos de recuperación de autenticación en dos fases](/articles/configuring-two-factor-authentication-recovery-methods)".

Se recomienda **encarecidamente** que habilite la autenticación en dos fases para mantener la seguridad de su cuenta, no solo en {% data variables.product.product_name %}, sino en otros sitios web y aplicaciones que la admitan. Puedes habilitar la 2FA para acceder a {% data variables.product.product_name %} y a {% data variables.product.prodname_desktop %}.

Para obtener más información, vea "[Acceder a {% data variables.product.prodname_dotcom %} mediante la autenticación en dos fases](/articles/accessing-github-using-two-factor-authentication)".

## Códigos de recuperación de autenticación de dos factores

{% data reusables.two_fa.about-recovery-codes %} Para obtener más información, vea "[Recuperar la cuenta en caso de perder las credenciales de la autenticación en dos fases](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

{% ifversion fpt or ghec %}

{% warning %}

**Advertencia**: {% data reusables.two_fa.support-may-not-help %} Para obtener más información, vea "[Recuperar la cuenta en caso de perder las credenciales de la autenticación en dos fases](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)".

{% endwarning %}

{% endif %}

## Requerir autenticación en dos fases en la organización

Los propietarios de la organización pueden solicitar que los miembros{% ifversion fpt or ghec %}, gerentes de facturación{% endif %}y los colaboradores externos usen la autenticación de dos fases para proteger sus cuentas personales. Para más información, vea "[Exigencia de la autenticación en dos fases en la organización](/articles/requiring-two-factor-authentication-in-your-organization)".

{% data reusables.two_fa.auth_methods_2fa %}
