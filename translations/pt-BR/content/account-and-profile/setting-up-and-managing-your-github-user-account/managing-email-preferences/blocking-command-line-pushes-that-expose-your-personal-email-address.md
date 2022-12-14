---
title: Bloquear pushes de linha de comando que mostrem endereços de e-mail pessoais
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
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084052"
---
Quando você efetua push de commits por meio da linha de comando, o endereço de email que você [definiu no Git](/articles/setting-your-commit-email-address) fica associado aos commits. Se você habilitar essa configuração, cada vez que você fizer push para o GitHub, verificaremos o commit mais recente. Se o e-mail do autor nesse commit for um e-mail privado na sua conta do GitHub, nós iremos bloquear o push e avisá-lo sobre como expor seu e-mail privado.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Para manter seu endereço de email privado nos commits enviados por push na linha de comando, selecione **Bloquear pushes na linha de comando que exponham meu email**.
![Opção usada para bloquear pushes na linha de comando que exponham seus emails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>Leitura adicional

- "[Como configurar seu endereço de email de commit](/articles/setting-your-commit-email-address)"
