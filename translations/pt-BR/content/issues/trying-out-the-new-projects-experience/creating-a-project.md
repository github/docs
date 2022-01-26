---
title: Criando um projeto (beta)
intro: 'Aprenda a criar um projeto, preencher e adicionar campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

Os projetos são uma coleção personalizável de itens que se mantêm atualizados com os dados do {% data variables.product.company_short %}. Seus projetos podem rastrear problemas, pull requests, e ideias que você anotar. Você pode adicionar campos personalizados e criar visualizações para fins específicos.

{% data reusables.projects.projects-beta %}

## Criando um projeto

### Criando um projeto de organização

{% data reusables.projects.create-project %}

### Criando um projeto de usuário

{% data reusables.projects.create-user-project %}

## Adicionando itens ao seu projeto

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Digite sua ideia e, em seguida, pressione **Enter**.
1. Para adicionar texto, clique no título do problema do rascunho. Na caixa de entrada do markdown que será exibida, digite o texto para o texto do problema do rascunho e clique em **Salvar**.

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see "[Converting draft issues to issues](#converting-draft-issues-to-issues)."

{% note %}

**Note**: Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.

{% endnote %}

### Problemas e pull requests

#### Cole a URL de um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Cole a URL do problema ou pull request.

#### Pesquisando um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite <kbd>#</kbd>.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
4. Opcionalmente, preencha os campos personalizados.

   ![Barra lateral do projeto](/assets/images/help/issues/project_side_bar.png)

## Convertendo rascunhos de problemas em problemas

No layout de tabela:

1. Clique em {% octicon "triangle-down" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Selecione **Converter para problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.
4. Alternatively, edit the `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

Layout do quadro:

1. Clique em {% octicon "kebab-horizontal" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Selecione **Converter para problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.

## Removendo itens do seu projeto

Você pode arquivar um item para manter o contexto sobre o item no projeto, mas removê-lo das visualizações do projeto. Você pode excluir um item para removê-lo do projeto completamente.

1. Selecione o(s) item(ns) para arquivar ou excluir. Para selecionar múltiplos itens, siga um dos passos a seguir:
     - <kbd>Command</kbd>+Click (Mac) ou <kbd>Ctrl</kbd>+Click (Windows/Linux) em cada item.
     - Selecione um item e, em seguida, <kbd>Shift</kbd>+<kbd>↑</kbd> ou <kbd>Shift</kbd>+<kbd>↓</kbd>para selecionar itens adicionais acima ou abaixo do item selecionado inicialmente.
     - Selecione um item e, em seguida, <kbd>Shift</kbd>+ clique em outro item para selecionar todos os itens entre dois itens.
     - Insira <kbd>Command</kbd>+<kbd>A</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) para selecionar todos os itens em uma coluna em um layout de tabuleiro ou em um layout de tabela.
2. Para arquivar todos os itens selecionados, digite <kbd>E</kbd>. Para excluir todos os itens selecionados, digite <kbd>Del</kbd>. Como alternativa, selecione o {% octicon "triangle-down" aria-label="the item menu" %} (no layout de tabela) ou o {% octicon "kebab-horizontal" aria-label="the item menu" %} (no layout do quadro) e, em seguida, selecione a ação desejada.

Você pode restaurar itens arquivados, mas não itens excluídos. Para obter mais informações, consulte [Restaurando itens arquivados](#restoring-archived-items).

## Restaurando itens arquivados

Para restaurar um item arquivado, acesse o problema ou pull request. Na barra lateral do projeto no problema ou pull request, clique em **Restaurar** para o projeto para o qual você deseja restaurar o item. Os rascunhos de problemas não podem ser restaurados.

## Adicionando campos

Como os valores do campo mudam, eles são sincronizados automaticamente para que o seu projeto e os itens que ele rastreia fiquem atualizados.

### Mostrando campos existentes

Your project tracks up-to-date information about issues and pull requests, including any changes to the title, assignees, labels, milestones, repository, reviewers, and linked pull requests. Quando seu projeto é inicializado, são exibidos "título" e "responsáveis". Os outros campos permanecem ocultos. Você pode alterar a visibilidade desses campos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "mostrar".
3. Selecione o comando desejado (por exemplo: "Mostrar: Repositório").

Como alternativa, você pode fazer isso na interface do usuário:

1. Clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho mais à direita. Será exibido um menu suspenso com os campos do projeto. ![Exibir ou ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecione o(s) campo(s) que você deseja exibir ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

### Adicionando campos personalizados

Você pode adicionar campos personalizados ao seu projeto. Campos personalizados serão exibidos na barra lateral de problemas e pull requests no projeto.

Os campos personalizados podem ser texto, número, data, seleção única ou iteração:

- Texto: O valor pode ser qualquer texto.
- Número: O valor deve ser um número.
- Data: O valor deve ser uma data.
- Seleção única: O valor deve ser selecionado a partir de um conjunto de valores especificados.
- Iteração: O valor deve ser selecionado a partir de um conjunto de intervalos de datas (iterações). As iterações anteriores são automaticamente marcadas como "concluídas", e a iteração que cobre o intervalo de datas atual é marcada como "atual".

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.
2. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
3. Uma janela pop-up irá aparecer para inserir informações sobre o novo campo. ![Novo campo](/assets/images/help/issues/projects_new_field.png)
4. Na caixa de texto, digite um nome para o novo campo.
5. Selecione o menu suspenso e clique no tipo desejado.
6. Se você especificou **Seleção única** como o tipo, insira as opções.
7. Se você especificou **Iteração** como o tipo, digite a data de início da primeira iteração e a duração da iteração. Três iterações são criadas automaticamente, e você pode adicionar iterações adicionais na página de configurações do projeto.

Posteriormente, você poderá editar as opções de seleção única e iteração de campos.

{% data reusables.projects.project-settings %}
1. Em **Campos**, selecione o campo que deseja editar.
1. Para campos de seleção única, você pode adicionar, excluir ou reordenar as opções.
2. Para campos de iteração, você pode adicionar ou excluir as iterações, alterar nomes da iteração e alterar a data e a duração de início da iteração.

## Personalizando as suas visualizações

Você pode ver seu projeto como uma tabela ou quadro, agrupar itens por campo, filtrar itens e muito mais. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configurando a automação integrada

{% data reusables.projects.about-workflows %}

Você pode habilitar ou desabilitar os fluxos de trabalho internos para o seu projeto.

{% data reusables.projects.enable-basic-workflow %}

## Adding your project to a repository

You can list relevant projects in a repository. You can only list projects that are owned by the same user or organization that owns the repository.

In order for repository members to see a project listed in a repository, they must have visibility for the project. For more information, see "[Managing the visibility of your projects (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" and "[Managing access to projects (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)."

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your repository.
1. Clique em {% octicon "table" aria-label="the project icon" %} **Projetos**.
1. Click **Projects (Beta)** in the side bar.
1. Click **Add project**.
1. In the search bar that appears, search for projects that are owned by the same user or organization that owns the repository.
1. Click on a project to list it in your repository.
