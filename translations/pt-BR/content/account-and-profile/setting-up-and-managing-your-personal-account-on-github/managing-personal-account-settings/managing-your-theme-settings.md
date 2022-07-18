---
title: Gerenciar as configurações de temas
intro: 'Você pode gerenciar como {% data variables.product.product_name %} se parece com você definindo uma preferência de tema que segue as configurações do seu sistema ou sempre usa um modo claro ou escuro.'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Gerenciar configurações de tema
---

Por escolha e flexibilidade sobre como e quando você usa {% data variables.product.product_name %}, você pode configurar configurações de tema para mudar como {% data variables.product.product_name %} fica para você. Você pode escolher entre temas claros e escuros ou você pode configurar {% data variables.product.product_name %} para seguir as configurações do seu sistema.

Você pode querer usar um tema escuro para reduzir o consumo de energia em certos dispositivos, reduzir o cansaço da vista em condições com pouca luz, ou porque você prefere o tema.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Se você tiver baixa visão, você poderá aproveitar um tema de alto contraste, com maior contraste entre o primeiro plano e os elementos de segundo plano.{% endif %}{% ifversion fpt or ghae or ghec %} se você for daltônico, você poderá beneficiar-se dos nossos temas de cor clara e escura.

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}

1. Em "Modo do tema", selecione o menu suspenso e clique em uma preferência de tema.

   ![Menu suspenso em "Modo tema" para seleção de preferência de tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Clique no tema que deseja usar.
    - Se você escolheu um único tema, clique em um tema.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Se você escolheu seguir as configurações do sistema, clique em um tema diurno e um tema noturno.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}
    {% ifversion fpt or ghec %}
    - Se você quiser escolher um tema que esteja atualmente em beta público, primeiro você deverá habilitá-lo com pré-visualização de recursos. Para obter mais informações, consulte "[Explorar versões de acesso antecipado com visualização de recursos em](/get-started/using-github/exploring-early-access-releases-with-feature-preview)".{% endif %}

{% ifversion command-palette %}

{% note %}

**Observação:** Você também pode alterar as configurações do seu tema com a paleta de comandos. Para obter mais informações, consulte "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## Leia mais

- "[Configurar tema para o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
