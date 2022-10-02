---
title: Bloquear pushes de linha de comando que mostrem endereços de e-mail pessoais
intro: 'Se você optou por manter seu endereço de e-mail privado ao realizar operações na web, também é possível optar por bloquear pushes de linha de comando que possam mostrar seu endereço de e-mail pessoal.'
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
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145164679'
---
Quando você efetua push de commits por meio da linha de comando, o endereço de email que você [definiu no Git](/articles/setting-your-commit-email-address) fica associado aos commits. Se você habilitar essa configuração, cada vez que você fizer push para o GitHub, verificaremos o commit mais recente. Se o e-mail do autor nesse commit for um e-mail privado na sua conta do GitHub, nós iremos bloquear o push e avisá-lo sobre como expor seu e-mail privado.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. Para manter seu endereço de email privado nos commits enviados por push na linha de comando, selecione **Bloquear pushes na linha de comando que exponham meu email**.
![Opção usada para bloquear pushes na linha de comando que exponham seus emails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## Leitura adicional

- "[Como configurar seu endereço de email de commit](/articles/setting-your-commit-email-address)"
