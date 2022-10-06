---
title: Bloquear las inserciones de la línea de comando que muestran tu dirección de correo electrónico personal
intro: 'Si decidiste mantener tu dirección de correo electrónico privada al realizar operaciones basadas en la web, también puedes optar por bloquear las inserciones de la línea de comando que pueden exponer tu dirección de correo electrónico personal.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: 2c79886af1e35e0f02419610dfca1459a9693731
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165461'
---
Al insertar confirmaciones desde la línea de comandos, la dirección de correo electrónico que ha [establecido en Git](/articles/setting-your-commit-email-address) se asocia a las confirmaciones. Si habilitas este ajuste, cad que subas información a GitHub, verificaremos la confirmación más reciente. Si el correo electrónico del autor de la confirmación es una dirección de correo electrónico privada en tu cuenta de GitHub, bloquearemos la subida y te alertaremos sobre la exposición de tu cuenta de correo electrónico privada.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Para que su dirección de correo electrónico siga siendo privada en las confirmaciones que inserte desde la línea de comandos, seleccione **Block command line pusses that expose my email** (Bloquear inserciones desde la línea de comandos que exponen mi correo electrónico).
![Opción para bloquear las inserciones desde la línea de comandos que exponen sus direcciones de correo electrónico](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## Información adicional

- "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)"
