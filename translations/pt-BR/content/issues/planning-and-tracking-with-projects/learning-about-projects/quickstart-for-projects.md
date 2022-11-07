---
title: 'Início Rápido para {% data variables.product.prodname_projects_v2 %}'
intro: 'Experimente a velocidade, a flexibilidade e a personalização de {% data variables.product.prodname_projects_v2 %} criando um projeto neste guia interativo.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108231'
---
## Introdução

Este guia demonstra como usar {% data variables.product.prodname_projects_v2 %} para planejar e acompanhar um trabalho. Neste guia, você irá criar um novo projeto e adicionar um campo personalizado para acompanhar as prioridades das suas tarefas. Você também aprenderá como criar visualizações salvas que ajudem a comunicar as prioridades e o progresso com seus colaboradores.

## Pré-requisitos

Você pode criar um projeto de organização ou um projeto de usuário. Para criar um projeto de organização, você precisa de uma organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre como criar uma organização, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Neste guia, você adicionará problemas existentes de repositórios pertencentes à sua organização (para projetos de organização) ou por você (para projetos de usuário) ao seu novo projeto. Para obter mais informações sobre como criar problemas, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

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

Para obter mais informações sobre outras maneiras de adicionar problemas ao seu projeto ou sobre outros itens que você pode adicionar ao projeto, confira "[Adicionar itens ao seu projeto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)".

## Adicionando rascunhos de problemas ao seu projeto

Em seguida, adicione um rascunho ao seu projeto.

{% data reusables.projects.add-draft-issue %}

## Adicionar um campo de iteração

Em seguida, crie um campo de iteração para que você possa planejar e acompanhar seu trabalho ao longo de blocos de tempo que se repetem. As iterações podem ser configuradas de acordo com a maneira com que você e a sua equipe trabalham, com durações personalizáveis e a capacidade de inserir quebras.

{% data reusables.projects.new-field %}
1. Selecione **Iteração**
   ![Captura de tela mostrando a opção Iteração](/assets/images/help/projects-v2/new-field-iteration.png)
3. Para alterar a duração de cada iteração, digite um novo número, selecione o menu suspenso e clique em **dias** ou **semanas**.
   ![Captura de tela mostrando a duração da iteração](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Criando um campo para monitorar a prioridade

Agora, crie um campo personalizado nomeado `Priority` e que contenha os valores: `High`, `Medium` ou `Low`.

{% data reusables.projects.new-field %}
1. Selecione **Seleção única**
   ![Captura de tela mostrando a opção Seleção única](/assets/images/help/projects-v2/new-field-single-select.png)
1. Abaixo de "Opções", digite a primeira opção, "Alto".
   ![Captura de tela mostrando a opção Seleção única](/assets/images/help/projects-v2/priority-example.png)
1. Para adicionar campos adicionais, para "Médio" e "Baixo", clique em **Adicionar opção**.
1. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save.png)

Especifique uma prioridade para todos os problemas no seu projeto.

![Prioridades de exemplo](/assets/images/help/projects/priority_example.png)

## Agrupar problemas por prioridade

Em seguida, agrupe todos os itens do seu projeto por prioridade para facilitar o foco nos itens de alta prioridade.

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "rows" aria-label="the rows icon" %} **Agrupar**.
   ![Captura de tela mostrando o item de menu Agrupar](/assets/images/help/projects-v2/group-menu-item.png)
1. Clique em **Prioridade**.
   ![Captura de tela mostrando o menu Agrupar](/assets/images/help/projects-v2/group-menu.png)

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
1. Em "Layout", clique em **Quadro**.
   ![Captura de tela mostrando a opção Layout](/assets/images/help/projects-v2/table-or-board.png)

![Prioridades de exemplo](/assets/images/help/projects/example_board.png)

Quando você alterou o layout, o projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve esta visualização para que você e seus colaboradores possam acessá-la facilmente no futuro.

{% data reusables.projects.save-view %}

Para indicar o propósito da visão, dê um nome descritivo.

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "pencil" aria-label="the pencil icon" %} **Renomear exibição**.
   ![Captura de tela mostrando o item de menu Renomear](/assets/images/help/projects-v2/rename-view.png)
1. Digite o novo nome da sua exibição.
1. Para salvar as alterações, pressione <kbd>Return/Enter</kbd>.

![Prioridades de exemplo](/assets/images/help/projects/project-view-switch.gif)

## Configure a automação integrada

Por fim, adicione um fluxo de trabalho interno para definir o status como **Tarefas Pendentes** quando um item for adicionado ao projeto.

1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="The menu icon" %} para abrir o menu.
  ![Captura de tela mostrando o ícone de menu](/assets/images/help/projects-v2/open-menu.png)
1. No menu, clique em {% octicon "workflow" aria-label="The workflow icon" %} **Fluxos de trabalho**.
  ![Captura de tela mostrando o item de menu 'Fluxos de Trabalho'](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Em **Fluxos de trabalho padrão**, clique em **Item adicionado ao projeto**.
  ![Captura de tela mostrando fluxos de trabalho padrão](/assets/images/help/projects-v2/default-workflows.png)
1. Ao lado de **Quando**, verifique se `issues` e `pull requests` estão selecionados.
  ![Captura de tela mostrando a configuração "quando" para um fluxo de trabalho](/assets/images/help/projects-v2/workflow-when.png)
1. Ao lado de **Definir**, selecione **Status:Tarefa Pendente**.
  ![Captura de tela mostrando a configuração "definir" para um fluxo de trabalho](/assets/images/help/projects-v2/workflow-set.png)
1. Clique na alternância **Desabilitado** para habilitar o fluxo de trabalho.
  ![Captura de tela mostrando o controle "habilitar" para um fluxo de trabalho](/assets/images/help/projects-v2/workflow-enable.png)

## Leitura adicional

- "[Adicionar itens ao seu projeto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Personalizar uma exibição](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"
