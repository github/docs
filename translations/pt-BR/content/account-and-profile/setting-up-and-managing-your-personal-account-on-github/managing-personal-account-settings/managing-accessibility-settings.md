---
title: Gerenciando configurações de acessibilidade
shortTitle: Gerenciar as configurações de acessibilidade
intro: 'A interface de usuário de {% data variables.product.product_name %} pode se adaptar às suas necessidades de visão, audição, motoras, cognitivas ou de aprendizado.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
---

## Sobre as configurações de acessibilidade

Para criar uma experiência em {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} que se adeque às suas necessidades, você pode personalizar a interface do usuário. As definições de acessibilidade podem ser essenciais para pessoas com deficiência, mas podem ser úteis para qualquer pessoa. Por exemplo, a personalização dos atalhos de teclado é essencial para pessoas que navegam usando o controle de voz, mas pode ser útil para qualquer pessoa quando um atalho de teclado, pois {% data variables.product.product_name %} é fechado com outro atalho de aplicativo.

## Gerenciando configurações de acessibilidade

Você pode decidir se deseja usar alguns ou todos os atalhos de teclado no {% ifversion fpt or ghec %}{% data variables.product.product_location %}{% elsif ghes or ghae %}site para {% data variables.product.product_location %}{% endif %}, e você pode controlar a exibição de imagens animadas.

### Gerenciando atalhos de teclado

Você pode executar ações por meio do site {% data variables.product.product_name %} usando o seu teclado sozinho. Os atalhos do teclado podem ser úteis para economizar tempo, mas podem ser ativados acidentalmente ou interferir na tecnologia assistencial.

Por padrão, todos os atalhos de teclado estão habilitados em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Atalhos de teclado](/get-started/using-github/keyboard-shortcuts)".

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Em "atalhos de teclado", gerencie as configurações para seus atalhos de teclado.

   - Para desabilitar as teclas de atalho que não usam teclas modificadoras como <kbd>Control</kbd> ou <kbd>Command</kbd>, em "General", desmarque **Caracteres chaves**.
     - Se você desabilitar as teclas do caracteres, você ainda poderá acionar atalhos ao seu navegador da web, bem como habilitar os atalhos para {% data variables.product.product_name %} que usa uma tecla modificadora.
   {%- ifversion command-palette %}
   - Para personalizar os atalhos de teclado e acionar a paleta de comando, em "Paleta de comando", use os menus suspensos para escolher um atalho de teclado. Para obter mais informações, consulte "[Paleta de Comando de {% data variables.product.company_short %}](/get-started/using-github/github-command-palette)".
   {%- endif %}

{% ifversion motion-management %}

### Gerenciando o movimento

Você pode controlar como {% data variables.product.product_name %} exibe imagens animadas de _.gif_.

Por padrão, {% data variables.product.product_name %} sincroniza com sua preferência no nível de sistema para movimento reduzido. Para obter mais informações, consulte a documentação ou as configurações do seu sistema operacional.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Em "Movimento", gerencia configurações para movimento.

   - Para controlar como {% data variables.product.product_name %} exibe imagens animadas, em "Reproduzir imagens animadas automaticamente", selecione **sincronização com o sistema**, **habilitado** ou **desabilitado**.

{% endif %}
