---
title: Bloquear las inserciones de la línea de comando que muestran tu dirección de correo electrónico personal
intro: If you've chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.
redirect_from:
- /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: e085c19339cc530537626d9bf987125aebfd3427
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092272"
---
Al insertar confirmaciones desde la línea de comandos, la dirección de correo electrónico que ha [establecido en Git](/articles/setting-your-commit-email-address) se asocia a las confirmaciones. Si habilitas este ajuste, cad que subas información a GitHub, verificaremos la confirmación más reciente. Si el correo electrónico del autor de la confirmación es una dirección de correo electrónico privada en tu cuenta de GitHub, bloquearemos la subida y te alertaremos sobre la exposición de tu cuenta de correo electrónico privada.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Para que su dirección de correo electrónico siga siendo privada en las confirmaciones que inserte desde la línea de comandos, seleccione **Block command line pusses that expose my email** (Bloquear inserciones desde la línea de comandos que exponen mi correo electrónico).
![Opción para bloquear las inserciones desde la línea de comandos que exponen sus direcciones de correo electrónico](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>Información adicional

- "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)"
