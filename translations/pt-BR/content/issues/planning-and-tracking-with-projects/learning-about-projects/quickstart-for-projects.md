---
title: 'Quickstart for {% data variables.product.prodname_projects_v2 %}'
intro: 'Experience the speed, flexibility, and customization of {% data variables.product.prodname_projects_v2 %} by creating a project in this interactive guide.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
---

## Introdução

This guide demonstrates how to use {% data variables.product.prodname_projects_v2 %} to plan and track work. Neste guia, você irá criar um novo projeto e adicionar um campo personalizado para acompanhar as prioridades das suas tarefas. Você também aprenderá como criar visualizações salvas que ajudem a comunicar as prioridades e o progresso com seus colaboradores.

## Pré-requisitos

Você pode criar um projeto de organização ou um projeto de usuário. Para criar um projeto de organização, você precisa de uma organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre a criação de uma organização, consulte "[Criar uma nova organização a partir do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Neste guia, você adicionará problemas existentes de repositórios pertencentes à sua organização (para projetos de organização) ou por você (para projetos de usuário) ao seu novo projeto. Para obter mais informações sobre a criação de problemas, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

## Criando um projeto

Primeiro, crie um projeto de organização ou um projeto de usuário.

### Criando um projeto de organização

{% data reusables.projects.create-project %}

### Criando um projeto de usuário

{% data reusables.projects.create-user-project %}

## Configurando a descrição e o README do seu projeto

{% data reusables.projects.project-description %}

## Adicionando problemas ao seu projeto

Em seguida, adicione alguns problemas ao seu projeto.

{% data reusables.projects.add-item-via-paste %}

Repita os passos acima algumas vezes para adicionar vários problemas ao seu projeto.

For more information and other ways to add issues to your project, or about other items you can add to your project, see "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)."

## Adicionando rascunhos de problemas ao seu projeto

Em seguida, adicione um rascunho ao seu projeto.

{% data reusables.projects.add-draft-issue %}

## Adding an iteration field

Next, create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
3. Para mudar a duração de cada iteração, digite um novo número, em seguida, selecione o menu suspenso e clique em **dias** ou **semanas**. ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Clique em **Salvar**. ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Criando um campo para monitorar a prioridade

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

{% data reusables.projects.new-field %}
1. Select **Single select** ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option, "High". ![Screenshot showing the single select option](/assets/images/help/projects-v2/priority-example.png)
1. To add additional fields, for "Medium" and "Low", click **Add option**.
1. Clique em **Salvar**. ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Especifique uma prioridade para todos os problemas no seu projeto.

![Prioridades de exemplo](/assets/images/help/projects/priority_example.png)

## Agrupar problemas por prioridade

Em seguida, agrupe todos os itens do seu projeto por prioridade para facilitar o foco nos itens de alta prioridade.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**. ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click **Priority**. ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)

Agora, transfira os problemas entre grupos para mudar a sua prioridade.

1. Escolha um problema.
2. Arraste e solte o problema em um grupo de prioridade diferente. Ao fazer isso, a prioridade do problema passará a ser a prioridade do seu novo grupo.

![Transferir problemas entre grupos](/assets/images/help/projects/move_between_group.gif)

## Salvando a visualização da prioridade

Quando você agrupou os seus problemas por prioridade na etapa anterior, seu projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve essas alterações para que os seus colaboradores vejam as tarefas agrupadas por prioridade.

{% data reusables.projects.save-view %}

Você pode compartilhar a URL com seu time para manter todos alinhados com as prioridades do projeto.

Quando a visualização é salva, qualquer pessoa que abrir o projeto verá a visualização salva. Aqui, você agrupou por prioridade, mas você também pode adicionar outros modificadores como ordenação, filtro ou layout. Em seguida, você criará uma nova exibição com o layout modificado.

## Adicionando um layout de quadro

Para ver o progresso dos problemas do seu projeto, você pode alternar para o layout do quadro.

O layout do quadro é baseado no campo de status. Portanto, especifique um status para cada problema no seu projeto.

![Status do exemplo](/assets/images/help/projects/status_example.png)

Em seguida, crie uma nova visualização.

{% data reusables.projects.new-view %}

Em seguida, mude para o layout do quadro.

{% data reusables.projects.open-view-menu %}
1. Under "Layout", click **Board**. ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

![Prioridades de exemplo](/assets/images/help/projects/example_board.png)

Quando você alterou o layout, o projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve esta visualização para que você e seus colaboradores possam acessá-la facilmente no futuro.

{% data reusables.projects.save-view %}

Para indicar o propósito da visão, dê um nome descritivo.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

![Prioridades de exemplo](/assets/images/help/projects/project-view-switch.gif)

## Configure a automação integrada

Por fim, adicione um fluxo de trabalho construído para definir o status como **Todo** quando um item for adicionado ao seu projeto.

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu. ![Screenshot showing the menu icon](/assets/images/help/projects-v2/open-menu.png)
1. In the menu, click {% octicon "workflow" aria-label="The workflow icon" %} **Workflows**. ![Screenshot showing the 'Workflows' menu item](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Em **Fluxos de trabalho padrão**, clique em **Item adicionado ao projeto**. ![Screenshot showing default workflows](/assets/images/help/projects-v2/default-workflows.png)
1. Ao lado de **Quando**, certifique-se de que `problemas` e `pull requests` estejam selecionados. ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when.png)
1. Ao lado de **Definir**, selecione **Status:Todo**. ![Screenshot showing the "set" configuration for a workflow](/assets/images/help/projects-v2/workflow-set.png)
1. Clique na opção **Desabilitada** para habilitar o fluxo de trabalho. ![Screenshot showing the "enable" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)

## Leia mais

- "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Customizing a view](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"
