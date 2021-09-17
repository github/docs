---
title: Criar uma pull request
intro: 'Crie um pull request para fazer sugestões e colaborar nas alterações de um repositório. Essas alterações são propostas em um *branch*, que garante que o branch-padrão só contém trabalho concluído e aprovado.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Qualquer pessoa com permissões de leitura em um repositório pode criar uma pull request, mas você deve ter permissões de gravação para criar um branch. Se você quiser criar um branch para seu pull request e não tiver permissões de gravação no repositório, é possível bifurcar o repositório primeiro. Para obter mais informações, consulte "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)" e "[Sobre bifurcações](/articles/about-forks)".

É possível especificar em qual branch você deseja fazer merge de suas alterações quando cria sua pull request. As pull requests só podem ser abertas entre dois branches que são diferentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dicas**: é possível criar um pull request usando {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh pr create`](https://cli.github.com/manual/gh_pr_create)" na documentação de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Alterar o intervalo de branches e o repositório de destino

Por padrão, as pull requests são baseadas no [branch padrão](/articles/setting-the-default-branch) do repositório principal. Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

Se o repositório principal padrão não estiver correto, você poderá alterar o repositório principal e o branch com as listas suspensas. Também é possível trocar o head e os branches base com as listas suspensas para estabelecer diffs entre pontos de referência. As referências aqui devem ser nomes de branch no seu repositório do GitHub.

![Branches de edição da pull request](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

Ao pensar em branches, lembre-se de que o *branch base* é **onde** as alterações devem ser aplicadas, o *branch head* contém **o que** você deseja que seja aplicado.

Quando você muda o repositório base, também muda as notificações para a pull request. Cada indivíduo que puder fazer push no repositório base receberá uma notificações de e-mail e verá a nova pull request no respectivo painel na próxima vez que se conectar.

Quando você muda qualquer uma das informações no intervalo de branches, as áreas de visualização de commit e arquivos alterados são atualizadas para mostrar o novo intervalo.

{% tip %}

**Dicas**:
- Usando a exibição de comparação, é possível configurar comparações entre períodos. Para obter mais informações, consulte "[Comparando commits](/github/committing-changes-to-your-project/comparing-commits)."
- Os mantenedores de projeto podem adicionar um modelo de pull request para um repositório. Os modelos incluem solicitações de informações no texto de uma pull request. Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

### Criar a pull request

{% tip %}

**Dica**: Você também pode usar {% data variables.product.prodname_desktop %} para criar uma pull request. Para obter mais informações, consulte “[Criar um problema ou uma pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" na documentação do {% data variables.product.prodname_desktop %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. No menu "Branch", escolha o branch que contém seus commits. ![Menu suspenso Branch](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. Use o menu suspenso do branch _base_ para selecionar o branch em que deseja fazer merge de suas alterações. Em seguida, use o menu suspenso do branch de _comparação_ para escolher o branch de tópico no qual você fez as alterações. ![Menus suspenso para escolher a base e comparar os branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Depois que a pull request tiver sido revisada, ela poderá [sofrer merge no repositório](/articles/merging-a-pull-request).

### Leia mais

- "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)"
- "[Alterar o branch base de uma pull request](/articles/changing-the-base-branch-of-a-pull-request)"
- "[Adicionar problemas e pull requests a um quadro de projeto da barra lateral](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[Sobre automação de problemas e pull requests com parâmetros de consulta](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Atribuir problemas e pull requests a outros usuários do GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Escrevendo no GitHub](/github/writing-on-github)"
