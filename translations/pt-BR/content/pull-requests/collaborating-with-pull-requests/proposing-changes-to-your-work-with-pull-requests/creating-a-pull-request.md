---
title: Como criar uma solicitação de pull
intro: 'Crie uma solicitação de pull para propor e colaborar em alterações em um repositório. Essas alterações são propostas em um *branch*, que garante que o branch-padrão só contenha trabalho concluído e aprovado.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110985'
---
Caso deseje criar um novo branch para seu pull request e não tenha permissões de gravação no repositório, você pode bifurcar o repositório primeiro. Para obter mais informações, confira "[Como criar uma solicitação de pull com base em um fork](/articles/creating-a-pull-request-from-a-fork)" e "[Sobre os forks](/articles/about-forks)".

É possível especificar em qual branch você deseja fazer merge de suas alterações quando cria sua pull request. As pull requests só podem ser abertas entre dois branches que são diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Alterar o intervalo de branches e o repositório de destino

Por padrão, as pull requests são baseadas no <a href="/articles/setting-the-default-branch">branch padrão</a> do repositório principal. Para obter mais informações, confira "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

Se o repositório principal padrão não estiver correto, você poderá alterar o repositório principal e o branch com as listas suspensas. Também é possível trocar o head e os branches base com as listas suspensas para estabelecer diffs entre pontos de referência. As referências aqui devem ser nomes de branch no seu repositório do GitHub.

![Branches de edição da pull request](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Ao pensar nos branches, lembre-se de que o *branch base* é **o local** em que as alterações devem ser aplicadas e o *branch principal* contém **o que** você deseja aplicar.

Quando você muda o repositório base, também muda as notificações para a pull request. Cada indivíduo que puder fazer push no repositório base receberá uma notificações de e-mail e verá a nova pull request no respectivo painel na próxima vez que se conectar.

Quando você muda qualquer uma das informações no intervalo de branches, as áreas de visualização de commit e arquivos alterados são atualizadas para mostrar o novo intervalo.

{% tip %}

**Dicas**:
- Usando a exibição de comparação, é possível configurar comparações entre períodos. Para obter mais informações, confira "[Como comparar commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)".
- Os mantenedores de projeto podem adicionar um modelo de pull request para um repositório. Os modelos incluem solicitações de informações no texto de uma pull request. Para obter mais informações, confira "[Sobre os modelos de solicitação de pull e de problema](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Criar a pull request

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. No menu "Branch", escolha o branch que contém seus commits.
  ![Menu suspenso do branch](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. Use o menu suspenso do branch _base_ para selecionar o branch no qual deseja mesclar as alterações e use o menu suspenso do branch de _comparação_ para escolher o branch do tópico no qual você fez as alterações.
  ![Menus suspensos usados para escolher os branches base e de comparação](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Depois que a sua solicitação de pull for revisada, ela poderá ser [mesclada no repositório](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar uma solicitação de pull, use o subcomando `gh pr create`.

```shell
gh pr create
```

Para atribuir uma solicitação de pull a uma pessoa, use o sinalizador `--assignee` ou `-a`. Você pode usar `@me` para atribuir a solicitação de pull automaticamente.

```shell
gh pr create --assignee "@octocat"
```

Para especificar o branch no qual deseja mesclar a solicitação de pull, use o sinalizador `--base` ou `-B`. Para especificar o branch que contém os commits da sua solicitação de pull, use o sinalizador `--head` ou `-H`.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

Para incluir um título e um corpo na nova solicitação de pull, use o sinalizador `--title` ou `--body`.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Para marcar uma solicitação de pull como um rascunho, use o sinalizador `--draft`.

```shell
gh pr create --draft
```

Para adicionar rótulos ou marcos à nova solicitação de pull, use o sinalizador `--label` ou `--milestone`.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Para adicionar a nova solicitação de pull a um projeto específico, use o sinalizador `--project`.

```shell
gh pr create --project octocat-project
```

Para atribuir uma pessoa ou uma equipe como revisor, use o sinalizador `--reviewer`.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Para criar a solicitação de pull no navegador da Web padrão, use o sinalizador `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, confira "[Como alternar entre branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Criar Solicitação de Pull**. {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}.
  ![O botão Criar Solicitação de Pull](/assets/images/help/desktop/mac-create-pull-request.png)
4. No {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch em que deseja mesclar as alterações. Confirme se o branch no menu suspenso **comparação:** é o branch do tópico em que você fez as alterações.
  ![Menus suspensos usados para escolher os branches base e de comparação](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, confira "[Como alternar entre branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Criar Solicitação de Pull**. {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}.
  ![O botão Criar Solicitação de Pull](/assets/images/help/desktop/windows-create-pull-request.png)
3. No {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch em que deseja mesclar as alterações. Confirme se o branch no menu suspenso **comparação:** é o branch do tópico em que você fez as alterações.
  ![Menus suspensos usados para escolher os branches base e de comparação](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Depois de fazer commit das alterações na cópia local do repositório, clique no ícone **Criar Solicitação de Pull**.
![Barra lateral do controle do código-fonte com o botão de preparo realçado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Verifique se o branch local e o repositório do qual você está fazendo merge, o branch remoto e o repositório no qual você está fazendo merge estão corretos. Em seguida, dê ao pull request um título e uma descrição.
![Barra lateral da solicitação de pull no GitHub](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Clique em **Criar**.

Para ver mais informações sobre como criar solicitações de pull no {% data variables.product.prodname_github_codespaces %}, confira "[Como usar {% data variables.product.prodname_github_codespaces %} para solicitações de pull](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)".

{% endcodespaces %}

{% endif %}
## Leitura adicional

- "[Como criar uma solicitação de pull com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Como manter sua solicitação de pull sincronizada com o branch base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[Como alterar o branch base de uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[Como adicionar problemas e solicitações de pull a um quadro de projetos na barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Como atribuir problemas e solicitações de pull a outros usuários do GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Escrita no GitHub](/github/writing-on-github)"
