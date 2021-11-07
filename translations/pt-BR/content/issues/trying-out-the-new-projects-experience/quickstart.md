---
title: Início rápido para projetos (beta)
intro: 'Experimente a velocidade, flexibilidade e personalização de projetos (beta) criando um projeto neste guia interativo.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Introdução

Este guia demonstra como usar projetos (beta) para planejar e acompanhar o trabalho. Neste guia, você irá criar um novo projeto e adicionar um campo personalizado para acompanhar as prioridades das suas tarefas. Você também aprenderá como criar visualizações salvas que ajudem a comunicar as prioridades e o progresso com seus colaboradores.

## Pré-requisitos

You can either create an organization project or a user project. To create an organization project, you need a {% data variables.product.prodname_dotcom %} organization. Para obter mais informações sobre a criação de uma organização, consulte "[Criar uma nova organização a partir do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

In this guide, you will add existing issues from repositories owned by your organization (for organization projects) or by you (for user projects) to your new project. Para obter mais informações sobre a criação de problemas, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

## Criando um projeto

First, create an organization project or a user project.

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## Adicionando problemas ao seu projeto

Em seguida, adicione alguns problemas ao seu projeto.

Quando seu novo projeto for iniciado, ele irá solicitar que você adicione itens ao seu projeto. Se você perder esta visualização ou desejar adicionar mais problemas posteriormente, coloque seu cursor na linha inferior do projeto, ao lado de {% octicon "plus" aria-label="plus icon" %}.

1. Digite `#`.
2. Selecione o repositório onde o problema está localizado. Para restringir as opções, você pode começar a digitar parte do nome do repositório.
3. Selecione o seu problema. Para restringir as opções, você pode começar a digitar uma parte do título do problema.

Repita os passos acima algumas vezes para adicionar vários problemas ao seu projeto.

Para obter mais informações sobre outras formas de adicionar problemas ao seu projeto, ou sobre outros itens que você pode adicionar ao seu projeto, consulte "[Criando um projeto](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)."

## Criando um campo para monitorar a prioridade

Agora, crie um campo personalizado denominado `Prioridade` para conter os valores: `Alto`, `Médio` ou `Baixo`.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Criar novo campo".
3. Selecione **Criar novo campo**.
4. Na janela de pop-up resultante, digite `Prioridade` na caixa de texto.
5. Na lista de seleção, selecione **Seleção única**.
6. Adicionar opções para `Alto`, `Médio` e `Baixo`. Você também pode incluir emojis nas suas opções. ![Novo exemplo de campo de seleção única](/assets/images/help/projects/new-single-select-field.png)
7. Clique em **Salvar**.

Especifique uma prioridade para todos os problemas no seu projeto.

![Prioridades de exemplo](/assets/images/help/projects/priority_example.png)

## Agrupar problemas por prioridade

Em seguida, agrupe todos os itens do seu projeto por prioridade para facilitar o foco nos itens de alta prioridade.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Agrupar por".
3. Selecione **Agrupar por: Prioridade**.

Agora, transfira os problemas entre grupos para mudar a sua prioridade.

1. Escolha um problema.
2. Arraste e solte o problema em um grupo de prioridade diferente. Ao fazer isso, a prioridade do problema passará a ser a prioridade do seu novo grupo.

![Transferir problemas entre grupos](/assets/images/help/projects/move_between_group.gif)

## Salvando a visualização da prioridade

Quando você agrupou os seus problemas por prioridade na etapa anterior, seu projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve essas alterações para que os seus colaboradores vejam as tarefas agrupadas por prioridade.

1. Selecione o menu suspenso ao lado do nome da visualização.
2. Clique em **Save changes** (Salvar alterações).

Para indicar o propósito da visão, dê um nome descritivo.

1. Coloque o cursor no nome atual da visualização, **Visualização 1**.
2. Substitua o texto existente pelo novo nome, `Prioridades`.

Você pode compartilhar a URL com seu time para manter todos alinhados com as prioridades do projeto.

Quando a visualização é salva, qualquer pessoa que abrir o projeto verá a visualização salva. Aqui, você agrupou por prioridade, mas você também pode adicionar outros modificadores como ordenação, filtro ou layout. Em seguida, você criará uma nova exibição com o layout modificado.

## Adding a board layout

Para ver o progresso dos problemas do seu projeto, você pode alternar para o layout do quadro.

The board layout is based on the status field, so specify a status for each issue in your project.

![Status do exemplo](/assets/images/help/projects/status_example.png)

Em seguida, crie uma nova visualização.

1. Clique em {% octicon "plus" aria-label="the plus icon" %} **Nova Visualização** ao lado da visualização mais à direita.

Em seguida, mude para o layout do quadro.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Layout Switch: Board".
3. Selecione **Mudar layout: Board**. ![Prioridades de exemplo](/assets/images/help/projects/example_board.png)

Quando você alterou o layout, o projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve esta visualização para que você e seus colaboradores possam acessá-la facilmente no futuro.

1. Selecione o menu suspenso ao lado do nome da visualização.
2. Clique em **Save changes** (Salvar alterações).

Para indicar o propósito da visão, dê um nome descritivo.

1. Coloque o cursor no nome atual da visualização, **Visualização2**.
2. Substitua o texto existente pelo novo nome, `Progresso`.

![Prioridades de exemplo](/assets/images/help/projects/project-view-switch.gif)

## Configure built-in automation

Finally, add a built in workflow to set the status to **Todo** when an item is added to your project.

1. In your project, click {% octicon "workflow" aria-label="the workflow icon" %}.
2. Under **Default workflows**, click **Item added to project**.
3. Next to **When**, ensure that both `issues` and `pull requests` are selected.
4. Next to **Set**, select **Status:Todo**.
5. Click the **Disabled** toggle to enable the workflow.

## Próximas etapas

Você pode usar projetos para uma ampla gama de finalidades. Por exemplo:

- Acompanhar o trabalho para uma versão
- Plan a sprint
- Priorizar um backlog

Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_github_issues %}:

- Para fornecer feedback sobre os projetos (beta) experiência, acesse o [Repositório de comentários GitHub](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Para saber mais sobre como os projetos podem ajudar você com o planejamento e monitoramento, consulte "[Sobre projetos](/issues/trying-out-the-new-projects-experience/about-projects)".
- Para saber mais sobre os campos e itens que você pode adicionar ao seu projeto, consulte "[Criar um projeto](/issues/trying-out-the-new-projects-experience/creating-a-project)".
- Para aprender mais sobre maneiras de exibir as informações que você precisa, consulte "[Personalizar visualizações de projeto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".
