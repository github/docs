---
title: Gerenciar as configurações de temas
intro: 'Você pode gerenciar como {% data variables.product.product_name %} se parece com você definindo uma preferência de tema que segue as configurações do seu sistema ou sempre usa um modo claro ou escuro.'
versions:
  fpt: '*'
  ghes: '>=3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Gerenciar configurações de tema
---

Por escolha e flexibilidade sobre como e quando você usa {% data variables.product.product_name %}, você pode configurar configurações de tema para mudar como {% data variables.product.product_name %} fica para você. Você pode escolher entre temas claros e escuros ou você pode configurar {% data variables.product.product_name %} para seguir as configurações do seu sistema.

Você deverá usar um tema escuro para reduzir o consumo de energia em certos dispositivos, reduzir o cansaço ocular em condições com pouca luz, ou porque você prefere a aparência do tema.{% ifversion fpt or ghae-issue-4618 %} Pessoas com deficiência visual podem beneficiar-se do tema de alto contraste escuro, com maior contraste entre primeiro plano e elementos de fundo.{% endif %}

{% data reusables.user_settings.access_settings %}
1. Na barra lateral de configurações do usuário, clique em **Aparência**. ![Aba "Aparência" na barra lateral de configurações do usuário](/assets/images/help/settings/appearance-tab.png)
2. Em "Modo do tema", selecione o menu suspenso e clique em uma preferência de tema. ![Menu suspenso em "Modo tema" para seleção de preferência de tema](/assets/images/help/settings/theme-mode-drop-down-menu.png)
3. Clique no tema que deseja usar.
    - Se você escolheu um único tema, clique em um tema.
      {% ifversion fpt or ghae-issue-4618 %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Se você escolheu seguir as configurações do sistema, clique em um tema diurno e um tema noturno.
      {% ifversion fpt or ghae-issue-4618 %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}

## Leia mais

- "[Configurar tema para o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
