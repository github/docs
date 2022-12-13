---
title: GitHub Móvil
intro: 'Clasifica, colabora y administra tu trabajo en {% data variables.product.product_name %} desde tu dispositivo móvil.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: a9af0848fdc26c5efd3dfb2d00076e3af5fb00bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508452'
---
## Acerca de {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} le permite realizar trabajos de alto impacto en {% data variables.product.product_name %} de una manera rápida y desde cualquier lugar. {% data variables.product.prodname_mobile %} es una manera segura de acceder a sus datos de {% data variables.product.product_name %} desde una aplicación cliente propia de confianza.

Con {% data variables.product.prodname_mobile %} puedes:

- Administrar, clasificar y borrar las notificaciones
- Leer, revisar y colaborar en informes de problemas y solicitudes de extracción
- Buscar, navegar e interactuar con usuarios, repositorios y organizaciones
- Recibir una notificación push cuando alguien mencione tu nombre de usuario {% ifversion fpt or ghec %}- Protege tu cuenta de GitHub.com con autenticación en dos fases
- Comprobar tus intentos de inicio de sesión en dispositivos no reconocidos{% endif %}

Para obtener más información sobre las notificaciones de {% data variables.product.prodname_mobile %}, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".

{% ifversion fpt or ghec %}- Para obtener más información sobre la autenticación en dos fases mediante {% data variables.product.prodname_mobile %}, consulta "[Configurar {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) y [Autenticarte utilizando {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)". {% endif %}

## Instalación de {% data variables.product.prodname_mobile %}

Para instalar {% data variables.product.prodname_mobile %} para Android o iOS, consulte [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Administración de cuentas

Puedes iniciar sesión simultáneamente en la versión móvil con una cuenta personal en {% data variables.product.prodname_dotcom_the_website %} y otra en {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre nuestros diferentes productos, consulte los productos de "[{% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)".

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} podría no funcionar en tu empresa si se te pide acceso a nuestra empresa a través de una VPN.

### Prerrequisitos

Debes instalar {% data variables.product.prodname_mobile %} 1.4 o posterior en tu dispositivo para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}.

Para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} debe estar en su versión 3.0 o posterior, y tu propietario de empresa debe habilitar la compatibilidad con la versión móvil en tu empresa. Para obtener más información, consulte {% ifversion ghes %}"[Notas de la versión](/enterprise-server/admin/release-notes)" y {% endif %}"[Administración de {% data variables.product.prodname_mobile %} para su empresa]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% else %}".{% endif %}

Durante la versión beta para {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, debes haber iniciado sesión con una cuenta personal en {% data variables.product.prodname_dotcom_the_website %}.

### Agregar, cambiar o cerrar sesión en las cuentas

Puedes iniciar sesión en la versión móvil con una cuenta personal en {% data variables.product.prodname_ghe_server %}. En la parte inferior de la aplicación, mantenga pulsado {% octicon "person" aria-label="The person icon" %} **Profile** y pulse {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account**. Siga las indicaciones para iniciar sesión.

Después de que inicies sesión en la versión móvil con una cuenta personal de {% data variables.product.prodname_ghe_server %}, puedes cambiar entre esa cuenta y la de {% data variables.product.prodname_dotcom_the_website %}. En la parte inferior de la aplicación, mantenga pulsado {% octicon "person" aria-label="The person icon" %} **Profile** y, a continuación, pulse la cuenta a la que quiera cambiar.

Si ya no necesitas acceso a los datos de tu cuenta personal en {% data variables.product.prodname_ghe_server %} desde {% data variables.product.prodname_mobile %}, puedes cerrar la sesión de la cuenta. En la parte inferior de la aplicación, mantenga pulsado {% octicon "person" aria-label="The person icon" %} **Profile**, deslice el dedo hacia la izquierda en la cuenta para cerrar sesión y, a continuación, pulse **Sign out**.

## Idiomas compatibles para {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} se encuentra disponible en los siguientes idiomas.

- Inglés
- Japonés
- Portugués (Brasil)
- Chino simplificado
- Español

Si configuras el idioma en tu dispositivo para que sea uno de los compatibles, {% data variables.product.prodname_mobile %} estará predeterminadamente en este idioma. Puede cambiar el idioma de {% data variables.product.prodname_mobile %} en el menú **Settings** de {% data variables.product.prodname_mobile %}.

## Administrar Enlaces Universales para {% data variables.product.prodname_mobile %} en iOS

{% data variables.product.prodname_mobile %} habilita automáticamente los Enlaces Universales para iOS. Cuando tocas en cualquier enlace de {% data variables.product.product_name %}, la URL destino se abrirá en {% data variables.product.prodname_mobile %} en vez de en Safari. Para obtener más información, consulte [Vínculos universales](https://developer.apple.com/ios/universal-links/) en el sitio para desarrolladores de Apple.

Para deshabilitar los vínculos universales, mantenga pulsado cualquier vínculo de {% data variables.product.product_name %} y, a continuación, pulse **Open**. Cada vez que pulse un vínculo de {% data variables.product.product_name %} a partir de ahora, la URL de destino se abrirá en Safari en vez de en {% data variables.product.prodname_mobile %}.

Para volver a habilitar los vínculos universales, mantenga pulsado cualquier vínculo de {% data variables.product.product_name %} y, a continuación, pulse **Open in {% data variables.product.prodname_dotcom %}** .

## Compartir la retroalimentación

Puedes enviar solicitudes de características u otros comentarios sobre {% data variables.product.prodname_mobile %} en [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Abandonar los lanzamientos beta para iOS

Si estás probando un lanzamiento beta de {% data variables.product.prodname_mobile %} para iOS utilizando TestFlight, puedes abandonar el beta en cualquier momento.

1. En tu dispositivo iOS, abre la aplicación de TestFlight.
2. En "Apps", pulse **{% data variables.product.prodname_dotcom %}** .
3. En la parte inferior de la página, pulse **Stop Testing**.
