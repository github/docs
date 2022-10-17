---
title: Criar um problema
intro: 'Os problemas podem ser criados de várias maneiras. Portanto, você pode escolher o método mais conveniente para seu fluxo de trabalho.'
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410080'
---
Os problemas podem ser usados para acompanhar erros, aprimoramentos ou outras solicitações. Para obter mais informações, confira "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)".

{% data reusables.repositories.administrators-can-disable-issues %}

## Criar um problema a partir de um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Se o seu repositório usar modelos de problemas, clique em **Introdução** ao lado do tipo de problema que deseja abrir.
  ![Selecione o tipo de problema que deseja criar](/assets/images/help/issues/issue_template_get_started_button.png) ou clique em **Abrir um problema em branco** se o tipo de problema que deseja abrir não estiver incluído nas opções disponíveis.
   ![Link para abrir um problema em branco](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Criando um problema com {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para saber mais sobre a {% data variables.product.prodname_cli %}, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Para criar um problema, use o subcomando `gh issue create`. Para ignorar os prompts interativos, inclua os sinalizadores `--body` e `--title`.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

Você também pode especificar responsáveis, etiquetas, marcos e projetos.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Criando um problema a partir de um comentário

Você pode abrir um novo problema a partir de um comentário em um problema ou pull request. Quando você abre um problema a partir de um comentário, o problema contém um trecho mostrando onde o comentário foi originalmente publicado.

1. Acesse o comentário que você deseja abrir a partir de um problema.
2. No comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Botão de kebab no comentário de revisão de solicitação de pull](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Clique em **Referência em novo problema**.
  ![Item de menu Referência em um novo problema](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Use o menu suspenso "Repository" (Repositório) para selecionar o repositório em que deseja abrir o problema.
  ![Menu suspenso Repositório do novo problema](/assets/images/help/pull_requests/new-issue-repository.png)
5. Digite um título descritivo e o texto do problema.
  ![Título e corpo do novo problema](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Clique em **Criar problema**.
  ![Botão usado para criar um problema](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Criando um problema a partir do código

É possível abrir um problema novo a partir de uma linha ou linhas específicas de código em um arquivo ou pull request. Quando você abre um problema de código, o problema contém um trecho mostrando a linha ou intervalo de código que você escolheu. Você pode abrir somente um problema no mesmo repositório onde o código é armazenado.

![Trecho de código fornecido em um problema aberto de código](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Localize o código que deseja referenciar em um problema:
    - Para abrir um problema sobre código em um arquivo, navegue até o arquivo.
    - Para abrir um problema sobre um código em uma solicitação de pull, navegue até a solicitação de pull e clique em {% octicon "diff" aria-label="The file diff icon" %} **Arquivos alterados**. Em seguida, procure o arquivo que contém o código que deseja incluir no comentário e clique em **Exibir**.
{% data reusables.repositories.choose-line-or-range %}
4. À esquerda do intervalo do código, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. No menu suspenso, clique em **Referência em um novo problema**.
  ![Menu de kebab com a opção para abrir um novo problema de uma linha selecionada](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Criando um problema da discussão

As pessoas com permissão de triagem para um repositório podem criar um problema a partir de uma discussão.

Ao criar um problema a partir de uma discussão, o conteúdo da postagem na discussão será automaticamente incluído no texto do problema e todas as etiquetas serão mantidas. A criação de um problema a partir de uma discussão não converte a discussão em um problema ou exclui a discussão existente. Para obter mais informações sobre as {% data variables.product.prodname_discussions %}, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "issue-opened" aria-label="The issues icon" %} **Criar um problema com base em uma discussão**.
   ![Botão usado para criar um problema com base em uma discussão](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## Criando um problema a partir de uma observação do quadro de projeto

Se estiver usando um quadro de projeto para rastrear e priorizar seu trabalho, você poderá converter observações do quadro de projeto em problemas. Para obter mais informações, confira "[Sobre os quadros de projetos](/github/managing-your-work-on-github/about-project-boards)" e "[Como adicionar anotações a um quadro de projetos](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% ifversion fpt or ghec %}

## Criando uma problema a partir de um item da lista de tarefas

Dentro de um problema, você pode usar as listas de tarefas para dividir o trabalho em tarefas menores e acompanhar o conjunto completo de trabalho a ser concluído. Se uma tarefa exigir mais rastreamento ou discussão, você poderá convertê-la em um problema, passando o mouse sobre a tarefa e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".

{% endif %}

## Criando um problema a partir de uma consulta de URL

Você pode usar parâmetros de consulta para abrir problemas. Os parâmetros de consulta são partes opcionais de uma URL que podem ser personalizadas para compartilhar uma exibição de página web específica, como resultados do filtro de pesquisa ou um modelo de problemas no {% data variables.product.prodname_dotcom %}. Para criar seus próprios parâmetros de consulta, você deve corresponder o par de chave e valor.

{% tip %}

**Dica:** também é possível criar modelos de problemas que são abertos com rótulos padrão, responsáveis e um título para o problema. Para obter mais informações, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Você deve ter as permissões adequadas para qualquer ação para usar o parâmetro de consulta equivalente. Por exemplo, é preciso ter permissão para adicionar um rótulo a um problema a fim de usar o parâmetro de consulta `labels`. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Se você criar uma URL inválida usando parâmetros de consulta ou se não tiver as permissões adequadas, a URL retornará uma página de erro `404 Not Found`. Se você criar uma URL que exceda o limite do servidor, a URL retornará uma página de erro `414 URI Too Long`.

Parâmetro de consulta | Exemplo
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` cria um problema com o rótulo "bug" e o título "Novo relatório de bugs".
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` cria um problema com o título "Novo relatório de bugs" e o comentário "Descreva o problema" no corpo do problema.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` cria um problema com os rótulos "preciso de ajuda" e "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` cria um problema com o marco "testando marcos".
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` cria um problema e o atribui a @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` cria um problema com o título "Correção de bug" e o adiciona ao quadro de projetos 1 da organização.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` cria um problema com um modelo no corpo do problema. O parâmetro de consulta `template` funciona com modelos armazenados em um subdiretório `ISSUE_TEMPLATE` na raiz no diretório `docs/` ou `.github/` em um repositório. Para obter mais informações, confira "[Como usar modelos para incentivar problemas e solicitações de pull úteis](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion code-scanning-task-lists %}
## Criando uma issue de um alerta de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} Se estiver usando problemas para acompanhar e priorizar seu trabalho, use problemas para acompanhar os alertas da {% data variables.product.prodname_code_scanning %}.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Leitura adicional

- "[Escrita no GitHub](/github/writing-on-github)"
