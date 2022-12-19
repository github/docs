---
title: Gerenciar as configurações de temas
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083735"
---
Por escolha e flexibilidade sobre como e quando você usa {% data variables.product.product_name %}, você pode configurar configurações de tema para mudar como {% data variables.product.product_name %} fica para você. Você pode escolher entre temas claros e escuros ou você pode configurar {% data variables.product.product_name %} para seguir as configurações do seu sistema.

Você pode querer usar um tema escuro para reduzir o consumo de energia em certos dispositivos, reduzir o cansaço da vista em condições com pouca luz, ou porque você prefere o tema.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Se você tiver visão baixa, poderá se beneficiar de um tema de alto contraste, com maior contraste entre os elementos em primeiro plano e em segundo plano.{% endif %}{% ifversion fpt or ghae or ghec %} Se você tiver daltonismo, poderá se beneficiar de nossos temas claros e escuros para daltônicos.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. Em "Modo do tema", selecione o menu suspenso e clique em uma preferência de tema.

   ![Menu suspenso em "Modo do tema" para seleção de preferência de tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Clique no tema que deseja usar.
    - Se você escolheu um único tema, clique em um tema.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Botões de opção para escolher um único tema](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Botões de opção para escolher um único tema](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Se você escolheu seguir as configurações do sistema, clique em um tema diurno e um tema noturno.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Botões para a escolha de um tema a ser sincronizado com a configuração do sistema](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Botões para a escolha de um tema a ser sincronizado com a configuração do sistema](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - Se você quiser escolher um tema que esteja atualmente em beta público, primeiro você deverá habilitá-lo com pré-visualização de recursos. Para obter mais informações, confira "[Como explorar versões de acesso antecipado com a versão prévia do recurso](/get-started/using-github/exploring-early-access-releases-with-feature-preview)".{% endif %}

{% if command-palette %}

{% note %}

**Observação:** você também pode alterar as configurações de tema com a paleta de comandos. Para obter mais informações, confira "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## <a name="further-reading"></a>Leitura adicional

- "[Como configurar um tema para o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
