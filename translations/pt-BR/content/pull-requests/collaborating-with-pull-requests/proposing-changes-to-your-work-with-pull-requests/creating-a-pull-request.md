---
title: Criar um pull request
intro: 'Crie um pull request para fazer sugestões e colaborar nas alterações de um repositório. Essas alterações são propostas em um *branch*, que garante que o branch-padrão só contém trabalho concluído e aprovado.'
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
---

Caso deseje criar um novo branch para seu pull request e não tenha permissões de gravação no repositório, você pode bifurcar o repositório primeiro. Para obter mais informações, consulte "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)" e "[Sobre bifurcações](/articles/about-forks)".

É possível especificar em qual branch você deseja fazer merge de suas alterações quando cria sua pull request. As pull requests só podem ser abertas entre dois branches que são diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Alterar o intervalo de branches e o repositório de destino

Por padrão, as pull requests são baseadas no [branch padrão](/articles/setting-the-default-branch) do repositório principal. Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

Se o repositório principal padrão não estiver correto, você poderá alterar o repositório principal e o branch com as listas suspensas. Também é possível trocar o head e os branches base com as listas suspensas para estabelecer diffs entre pontos de referência. As referências aqui devem ser nomes de branch no seu repositório do GitHub.

![Branches de edição da pull request](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Ao pensar em branches, lembre-se de que o *branch base* é **onde** as alterações devem ser aplicadas, o *branch head* contém **o que** você deseja que seja aplicado.

Quando você muda o repositório base, também muda as notificações para a pull request. Cada indivíduo que puder fazer push no repositório base receberá uma notificações de e-mail e verá a nova pull request no respectivo painel na próxima vez que se conectar.

Quando você muda qualquer uma das informações no intervalo de branches, as áreas de visualização de commit e arquivos alterados são atualizadas para mostrar o novo intervalo.

{% tip %}

**Dicas**:
- Usando a exibição de comparação, é possível configurar comparações entre períodos. Para obter mais informações, consulte "[Comparando commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)."
- Os mantenedores de projeto podem adicionar um modelo de pull request para um repositório. Os modelos incluem solicitações de informações no texto de uma pull request. Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Criar a pull request

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. No menu "Branch", escolha o branch que contém seus commits. ![Menu suspenso Branch](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. Use o menu suspenso do branch _base_ para selecionar o branch em que deseja fazer merge de suas alterações. Em seguida, use o menu suspenso do branch de _comparação_ para escolher o branch de tópico no qual você fez as alterações. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Depois que a pull request tiver sido revisada, ela poderá [sofrer merge no repositório](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar um pull request, use o subcomando `gh pr create`.

```shell
gh pr create
```

Para atribuir uma pull request a uma pessoa, use os sinalizadores `--assignee` ou `-a`. Você pode usar `@me` para autoatribuir o pull request.

```shell
gh pr create --assignee "@octocat"
```

Para especificar o branch no qual você deseja fazer merge do pull request, use os sinalizadores `--base` ou `-B`. Para especificar o branch que contém commits para o seu pull request, use os sinalizadores `--head` ou `-H`.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

Para incluir um título e texto do novo pull request, use os sinalizadores de `--title` e `--body`.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Para marcar uma pull request como rascunho, use o sinalizador `--draft`.

```shell
gh pr create --draft
```

Para adicionar etiquetas ou marcos ao novo pull request, use os sinalizadores `--label` e `--milestone`.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Para adicionar o novo pull request a um projeto específico, use o sinalizador `--project`.

```shell
gh pr create --project octocat-project
```

Para atribuir um indivíduo ou equipe como revisores, use o sinalizador `--reviewer`.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Para criar um pull request no navegador padrão, use o sinalizador `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, consulte "[Alternar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Create Pull Request** (Criar pull request). {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}. ![O botão Criar Pull Request](/assets/images/help/desktop/mac-create-pull-request.png)
4. Em {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch onde você deseja fazer merge das suas alterações. Confirme se o branch no menu suspenso **compare:** é o branch de tópico em que você fez suas alterações. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, consulte "[Alternar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Create Pull Request** (Criar pull request). {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}. ![O botão Criar Pull Request](/assets/images/help/desktop/windows-create-pull-request.png)
3. Em {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch onde você deseja fazer merge das suas alterações. Confirme se o branch no menu suspenso **compare:** é o branch de tópico em que você fez suas alterações. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Depois de realizar alterações na sua cópia local do repositório, clique no ícone **Criar Pull Request**. ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Verifique se o branch local e o repositório do qual você está fazendo merge, o branch remoto e o repositório no qual você está fazendo merge estão corretos. Em seguida, dê ao pull request um título e uma descrição. ![Barra lateral de pull request do GitHub](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Clique em **Criar**.

For more information on creating pull requests in {% data variables.product.prodname_github_codespaces %}, see "[Using {% data variables.product.prodname_github_codespaces %} for pull requests](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}
## Leia mais

- "[Criar uma pull request de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Mantendo o seu pull request sincronizado com o branch de base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[Alterar o branch base de uma pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[Adicionar problemas e pull requests a um quadro de projeto da barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[Sobre automação de problemas e pull requests com parâmetros de consulta](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Atribuir problemas e pull requests a outros usuários do GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Escrevendo no GitHub](/github/writing-on-github)"
