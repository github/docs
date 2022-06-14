---
title: Configurar o Git para o GitHub Desktop
shortTitle: Configurar o Git
intro: 'Você pode gerenciar as configurações do Git para seus repositórios locais com {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
---

## Sobre a configuração do Git para {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} usa as configurações locais do Git e fornece a opção de configurar algumas dessas configurações, como a informação do autor global e o branch padrão que é usado ao criar um novo repositório.

{% data variables.product.prodname_desktop %} permite que você defina o nome e o endereço de e-mail que você deseja que sejam associados aos commits que você criar nos seus repositórios. Se seu nome e endereço de e-mail já foram definidos na configuração global do Git para seu computador, {% data variables.product.prodname_desktop %} irá detectar e usar esses valores. {% data variables.product.prodname_desktop %} também permite que você defina um nome e endereço de e-mail diferente para um repositório individual. Isso é útil quando você precisa usar um endereço de e-mail trabalho separado para um repositório específico.

Se o endereço de e-mail que foi configurado na configuração do Git não coincide com um endereço de e-mail associado à conta do {% data variables.product.product_name %} à qual você está conectado atualmente, {% data variables.product.prodname_desktop %} mostrará um aviso antes do commit.

O {% data variables.product.prodname_desktop %} também permite que você altere o nome do branch padrão que você gostaria de usar ao criar novos repositórios. Por padrão, {% data variables.product.prodname_desktop %} usa o `principal` como o nome de branch padrão em qualquer novo repositório que você criar.

{% tip %}

**Dica**: Qualquer pessoa poderá ver o endereço de e-mail na configuração do seu Git se fizer commits públicos. Para obter mais informações, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address/)";

{% endtip %}

## Configurando suas informações de autor global

Configurar suas informações de autor global em {% data variables.product.prodname_desktop %} irá atualizar o nome e endereço de e-mail em sua configuração global do Git. Este será o nome e endereço de email padrão para todos os novos repositórios locais que você criar em {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. Na janela de Preferências, clique em **Git**. ![O Painel Git no menu Preferences (Preferências)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![O campo de nome da configuração do Git](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Selecione o endereço de e-mail no campo de configuração do Git](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. Na janela de Opções, clique em **Git**. ![O Painel Git no menu Options (Opções)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![O campo de nome da configuração do Git](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Selecione o endereço de e-mail no campo de configuração do Git](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configurar diferentes informações do autor para um repositório individual

Você pode alterar o nome e o endereço de email usados para commits de autor em um repositório específico. Esta configuração local do Git irá substituir as configurações globais do Git apenas para este repositório.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configurar o branch padrão para novos repositórios

Você pode configurar o branch padrão que será usado quando você criar um novo repositório em {% data variables.product.prodname_desktop %}. Para obter mais informações sobre o branch padrão, consulte "[Sobre o branch padrão](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. Na janela de Preferências, clique em **Git**. ![O Painel Git no menu Preferences (Preferências)](/assets/images/help/desktop/mac-select-git-pane.png)
1. Em "Nome de branch padrão para novos repositórios", selecione o nome padrão do branch que você gostaria de usar, ou, para digitar um nome personalizado, selecione "Outro..." ![Opções de seleção de nome de branch padrão](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. Na janela de Opções, clique em **Git**. ![O Painel Git no menu Options (Opções)](/assets/images/help/desktop/windows-select-git-pane.png)
1. Em "Nome do branch padrão para novos repositórios", selecione o nome padrão do branch que você gostaria de usar, ou selecione "Outro..." para digitar um nome personalizado. ![Opções de seleção de nome de branch padrão](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Leia mais

- "[Adicionar um endereço de e-mail à conta do GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Configurar o endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address/)"
- "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches)"
