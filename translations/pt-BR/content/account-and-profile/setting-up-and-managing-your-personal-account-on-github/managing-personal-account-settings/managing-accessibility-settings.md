---
title: Gerenciando configurações de acessibilidade
shortTitle: Manage accessibility settings
intro: 'A interface do usuário do {% data variables.product.product_name %} pode se adaptar às suas necessidades motoras, cognitivas, de visão, audição ou aprendizado.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d4811368ab825f0b24864283f8be54672f72a787
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614316'
---
## Sobre as configurações de acessibilidade

Para criar uma experiência sobre {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} que atenda as suas necessidades, você pode personalizar a interface do usuário. As configurações de acessibilidade podem ser essenciais para pessoas com deficiência, mas podem ser úteis para qualquer pessoa. Por exemplo, a personalização de atalhos de teclado é essencial para pessoas que navegam usando o controle de voz, mas podem ser úteis para qualquer pessoa quando um atalho de teclado para dados {% data variables.product.product_name %} entra em conflito com outro atalho de aplicativo.

## Gerenciando configurações de acessibilidade

Você pode decidir se deseja usar alguns ou todos os atalhos de teclado no {% ifversion fpt or ghec %}{% data variables.product.product_location %}{% elsif ghes or ghae %}site do {% data variables.product.product_location %}{% endif %} e pode controlar a exibição de imagens animadas.

### Como gerenciar atalhos de teclado

Você pode executar ações no site do {% data variables.product.product_name %}, usando o teclado sozinho. Atalhos de teclado podem ser úteis para economizar tempo, mas podem ser ativados acidentalmente ou interferir na tecnologia adaptativa.

Por padrão, todos os atalhos de teclado são habilitados em {% data variables.product.product_name %}. Para obter mais informações, confira "[Atalhos de teclado](/get-started/using-github/keyboard-shortcuts)".

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Em "Atalhos de teclado", gerencie as configurações dos atalhos de teclado.

   - Para desabilitar teclas de atalho que não usam teclas modificadoras, como <kbd>Control</kbd> ou <kbd>Comando</kbd>, em "Geral", desmarque a opção **Teclas de caractere**.
     - Se você desabilitar as chaves de caractere, ainda poderá disparar atalhos para o navegador da Web e ainda poderá disparar atalhos para {% data variables.product.product_name %} que usam uma tecla modificadora.
   {%- ifversion command-palette %}
   - Para personalizar os atalhos de teclado para disparar a paleta de comandos, em "Paleta de comandos", use os menus suspensos para escolher um atalho de teclado. Para obter mais informações, confira "[Paleta de comandos do {% data variables.product.company_short %}](/get-started/using-github/github-command-palette)."
   {%- endif %}

{% ifversion motion-management %}

### Como gerenciar o movimento

Você pode controlar como {% data variables.product.product_name %} exibe imagens _.gif_ animadas.

Por padrão, {% data variables.product.product_name %} sincroniza-se com a sua preferência de nível do sistema para reduzir o movimento. Para obter mais informações, confira a documentação ou as configurações do seu sistema operacional.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Em "Movimento", gerencie as configurações de movimento.

   - Para controlar como {% data variables.product.product_name %} exibe imagens animadas, em "Reprodução automática de imagens animadas", selecione **Sincronizar com o sistema**, **Habilitado** ou **Desabilitado**.

{% endif %}
