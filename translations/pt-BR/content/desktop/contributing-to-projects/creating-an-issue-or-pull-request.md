---
title: Criar um problema ou um pull request
intro: É possível criar um problema ou um pull request para propor e colaborar com alterações em um repositório.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### Abrir um problema novo
Ao encontrar um erro ou desejar sugerir uma melhoria ao trabalhar localmente com o {% data variables.product.prodname_desktop %}, você poderá abrir um novo problema no repositório em que se encontra se os problemas estiverem habilitados. Para obter mais informações sobre como trabalhar com problemas, consulte "[Sobre problemas](/github/managing-your-work-on-github/about-issues)".

{% mac %}

1. No canto superior esquerdo da tela, selecione o menu **Repositório**. ![Menu GitHub Desktop na barra de menu do Mac](/assets/images/help/desktop/select-repository-menu-mac.png)
2. Clique em **Criar problema no {% data variables.product.prodname_dotcom %}**. ![Valor do repositório no menu Branch](/assets/images/help/desktop/create-issue-mac.png)
3. Em {% data variables.product.prodname_dotcom %}, clique em **Começar** para abrir um modelo do problema ou clique em **Abrir um problema em branco**. ![Criar novas opções do problema](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. No canto superior esquerdo da janela, selecione o menu **Repositório**. ![Menu GitHub Desktop na barra de menus do Mac](/assets/images/help/desktop/select-repository-menu-windows.png)
2. Clique em **Criar problema no {% data variables.product.prodname_dotcom %}**. ![O valor do repositório no menu Branch](/assets/images/help/desktop/create-issue-windows.png)
3. Em {% data variables.product.prodname_dotcom %}, clique em **Começar** para abrir um modelo do problema ou clique em **Abrir um problema em branco**. ![Criar novas opções do problema](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Observação**: Se os modelos do problema não estiverem habilitados em seu repositório atual, o {% data variables.product.prodname_desktop %} irá direcionar você para um problema em branco no {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Criar um novo pull request
Depois de [criar um branch](/desktop/guides/contributing-to-projects/managing-branches) e [fazer commit das alterações](/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project), você pode abrir uma pull request para receber feedback das alterações propostas.

{% mac %}

1. No canto superior esquerdo da tela, selecione o menu **Branch**. ![Menu GitHub Desktop na barra de menus do Mac](/assets/images/help/desktop/mac-select-branch-menu.png)
2. Clique em **Create Pull Request** (Criar pull request). ![Valor Create pull request (Criar pull request) no menu Branch](/assets/images/help/desktop/create-pull-request-mac.png)
3. No {% data variables.product.prodname_dotcom %}, verifique o padrão do branch _base_ e do branch _compare_ nos menus suspensos e faça a alteração, se necessário. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. No canto superior esquerdo da janela, selecione o menu **Branch**. ![Menu GitHub Desktop na barra de menus do Windows](/assets/images/help/desktop/windows-select-branch-menu.png)
2. Clique em **Create pull request** (Criar pull request). ![Valor Create pull request (Criar pull request) no menu Branch](/assets/images/help/desktop/create-pull-request-win.png)
3. No {% data variables.product.prodname_dotcom %}, verifique o padrão do branch _base_ e do branch _compare_ nos menus suspensos e faça a alteração, se necessário. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}
