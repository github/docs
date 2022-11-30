---
title: Configurar o Git para o GitHub Desktop
shortTitle: Configuring Git
intro: 'Você pode gerenciar as definições de configuração do Git nos repositórios locais com o {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058513'
---
## Sobre a configuração do Git para o {% data variables.product.prodname_desktop %}

O {% data variables.product.prodname_desktop %} usa as definições de configuração locais do Git e oferece a opção de definir algumas dessas configurações, como as informações de autor global e o branch padrão usado ao criar repositórios.

O {% data variables.product.prodname_desktop %} permite que você defina o nome e o endereço de email que deseja associar aos commits que faz nos repositórios. Se o nome e o endereço de email já tiverem sido definidos na configuração global do Git no computador, o {% data variables.product.prodname_desktop %} detectará e usará esses valores. O {% data variables.product.prodname_desktop %} também permite que você defina um nome e um endereço de email diferentes para um repositório individual. Isso é útil quando você precisa usar um endereço de email de trabalho separado para um repositório específico.

Se o endereço de email que foi definido na configuração do Git não corresponder a um endereço de email associado à conta do {% data variables.product.product_name %} conectada no momento, o {% data variables.product.prodname_desktop %} mostrará um aviso antes de fazer commit.

O {% data variables.product.prodname_desktop %} também permite alterar o nome do branch padrão que você quer usar ao criar repositórios. Por padrão, o {% data variables.product.prodname_desktop %} usa `main` como o nome do branch padrão em todos os repositórios criados.

{% tip %}

**Dica**: se você fizer commits públicos, qualquer pessoa poderá ver o endereço de email da sua configuração do Git. Para obter mais informações, confira "[Como definir seu endereço de email de commit](/articles/setting-your-commit-email-address/)".

{% endtip %}

## Como configurar as informações de autor global

A configurações das informações de autor global no {% data variables.product.prodname_desktop %} atualizará o nome e o endereço de email na configuração global do Git. Esse será o nome e o endereço de email padrão para todos os repositórios locais que você criar no {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. Na janela Preferências, clique em **Git**.
  ![O painel do Git no menu Preferências](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![O campo de nome da configuração do Git](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Endereço de email selecionado no campo de configuração do Git](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Botão Salvar no campo de configuração do Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. Na janela Opções, clique em **Git**.
![O painel do Git no menu Opções](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![O campo de nome da configuração do Git](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Endereço de email selecionado no campo de configuração do Git](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Botão Salvar no campo de configuração do Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Como configurar diferentes informações de autor para um repositório individual

Você pode alterar o nome e o endereço de email usados para criar commits em um repositório específico. Essa configuração local do Git substituirá as configurações globais do Git somente para este repositório.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Como configurar o branch padrão para novos repositórios

Você pode configurar o branch padrão que será usado ao criar um repositório no {% data variables.product.prodname_desktop %}. Para obter mais informações sobre o branch padrão, confira "[Sobre o branch padrão](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. Na janela Preferências, clique em **Git**.
  ![O Painel do Git no menu Preferências](/assets/images/help/desktop/mac-select-git-pane.png)
1. Em "Nome do branch padrão para novos repositórios", selecione o nome de branch padrão que você quer usar ou, para inserir um nome personalizado, selecione "Outros.."..
  ![Opções de seleção de nome de branch padrão](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Botão Salvar no campo de configuração do Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. Na janela Opções, clique em **Git**.
  ![O Painel do Git no menu Opções](/assets/images/help/desktop/windows-select-git-pane.png)
1. Em "Nome do branch padrão para novos repositórios", selecione o nome de branch padrão que você quer usar ou selecione "Outros..". para inserir um nome personalizado.
  ![Opções de seleção de nome de branch padrão](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Botão Salvar no campo de configuração do Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Leitura adicional

- "[Como adicionar um endereço de email à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Como configurar seu endereço de email de commit](/articles/setting-your-commit-email-address/)"
- "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches)"
