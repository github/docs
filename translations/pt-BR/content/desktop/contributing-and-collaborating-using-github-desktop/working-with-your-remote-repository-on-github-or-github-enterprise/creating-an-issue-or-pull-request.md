---
title: Criar um problema ou um pull request
intro: É possível criar um problema ou um pull request para propor e colaborar com alterações em um repositório.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  free-pro-team: '*'
---
### Sobre problemas e pull requests

Você pode usar problemas para rastrear ideias, erros, tarefas e outras informações importantes para o seu projeto. Você pode criar um problema no repositório do seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações sobre os problemas, consulte "[Sobre os problemas](/github/managing-your-work-on-github/about-issues)".

Após criar um branch e fazer alterações nos arquivos em um projeto, você poderá criar um pull request. Com um pull request, você pode propor, discutir e repetir alterações antes de fazer merge das alterações no projeto. Você pode criar um pull request no repositório do seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações sobre pull requests, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

### Pré-requisitos

Antes de criar um pull request, você deverá fazer push das alterações em um branch em {% data variables.product.prodname_dotcom %}.
- Salve e faça o commit de quaisquer alterações no seu branch local. Para obter mais informações, consulte "[Fazer o commit e revisar as alterações no seu projeto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".
- Faça push dos seus commits locais para o repositório remoto. Para obter mais informações, consulte "[Fazer push de alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".
- Publique seu branch atual no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Gerenciar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

### Criar um problema

{% mac %}

1. Na barra de menu, use o menu suspenso **Repositório** e, em seguida, clique em **Criar problema em {% data variables.product.prodname_dotcom %}**. ![Valor do repositório no menu Branch](/assets/images/help/desktop/create-issue-mac.png)
2. Em {% data variables.product.prodname_dotcom %}, clique em **Começar** para abrir um modelo do problema ou clique em **Abrir um problema em branco**. ![Criar novas opções do problema](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. Na barra de menu, use o menu suspenso **Repositório** e, em seguida, clique em **Criar problema em {% data variables.product.prodname_dotcom %}**. ![O valor do repositório no menu Branch](/assets/images/help/desktop/create-issue-windows.png)
2. Em {% data variables.product.prodname_dotcom %}, clique em **Começar** para abrir um modelo do problema ou clique em **Abrir um problema em branco**. ![Criar novas opções do problema](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Observação**: Se os modelos do problema não estiverem habilitados em seu repositório atual, o {% data variables.product.prodname_desktop %} irá direcionar você para um problema em branco no {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Criar uma pull request

{% mac %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, consulte "[Alternar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Create Pull Request** (Criar pull request). {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}. ![O botão Criar Pull Request](/assets/images/help/desktop/mac-create-pull-request.png)
4. Em
{% data variables.product.prodname_dotcom %}, confirme que o branch no menu suspenso **base:** é o branch em que você deseja fazer merge das suas alterações. Confirme se o branch no menu suspenso **compare:** é o branch de tópico em que você fez suas alterações.
  ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, consulte "[Alternar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Create Pull Request** (Criar pull request). {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}. ![O botão Criar Pull Request](/assets/images/help/desktop/windows-create-pull-request.png)
3. Em
{% data variables.product.prodname_dotcom %}, confirme que o branch no menu suspenso **base:** é o branch em que você deseja fazer merge das suas alterações. Confirme se o branch no menu suspenso **compare:** é o branch de tópico em que você fez suas alterações.
  ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### Leia mais
- "[Problema ](/github/getting-started-with-github/github-glossary#issue) no glossário de {% data variables.product.prodname_dotcom %}
- "[pull request](/github/getting-started-with-github/github-glossary#pull-request)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Branch de base](/github/getting-started-with-github/github-glossary#base-branch)no glossário de {% data variables.product.prodname_dotcom %}
- "[Branch de tópico](/github/getting-started-with-github/github-glossary#topic-branch)" no glossário de {% data variables.product.prodname_dotcom %}
