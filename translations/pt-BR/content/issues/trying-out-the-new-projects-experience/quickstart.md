---
title: Início rápido para projetos (beta)
intro: Experimente a velocidade, flexibilidade e personalização de projetos (beta) criando um projeto neste guia interativo.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126562"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>Introdução

Este guia demonstra como usar projetos (beta) para planejar e acompanhar o trabalho. Neste guia, você irá criar um novo projeto e adicionar um campo personalizado para acompanhar as prioridades das suas tarefas. Você também aprenderá como criar visualizações salvas que ajudem a comunicar as prioridades e o progresso com seus colaboradores.

## <a name="prerequisites"></a>Pré-requisitos

Você pode criar um projeto de organização ou um projeto de usuário. Para criar um projeto de organização, você precisa de uma organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre como criar uma organização, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Neste guia, você adicionará problemas existentes de repositórios pertencentes à sua organização (para projetos de organização) ou por você (para projetos de usuário) ao seu novo projeto. Para obter mais informações sobre como criar problemas, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".

## <a name="creating-a-project"></a>Criando um projeto

Primeiro, crie um projeto de organização ou um projeto de usuário.

### <a name="creating-an-organization-project"></a>Criando um projeto de organização

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Criando um projeto de usuário

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>Configurando a descrição e o README do seu projeto

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>Adicionando problemas ao seu projeto

Em seguida, adicione alguns problemas ao seu projeto.

Quando seu novo projeto for iniciado, ele irá solicitar que você adicione itens ao seu projeto. Se você perder esta visualização ou desejar adicionar mais problemas posteriormente, coloque seu cursor na linha inferior do projeto, ao lado de {% octicon "plus" aria-label="plus icon" %}.

1. Digite `#`.
2. Selecione o repositório onde o problema está localizado. Para restringir as opções, você pode começar a digitar parte do nome do repositório.
3. Selecione o seu problema. Para restringir as opções, você pode começar a digitar uma parte do título do problema.

Repita os passos acima algumas vezes para adicionar vários problemas ao seu projeto.

Para obter mais informações sobre outras maneiras de adicionar problemas ao seu projeto ou sobre outros itens que você pode adicionar ao projeto, confira "[Como criar um projeto](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)".

## <a name="adding-draft-issues-to-your-project"></a>Adicionando rascunhos de problemas ao seu projeto

Em seguida, adicione um rascunho ao seu projeto.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Digite sua ideia e pressione **ENTER**.
1. Clique no título do rascunho do problema. Na caixa de entrada markdown exibida, insira mais informações sobre sua ideia e clique em **Salvar**.

## <a name="creating-a-field-to-track-priority"></a>Criando um campo para monitorar a prioridade

Agora, crie um campo personalizado chamado `Priority` para conter os valores: `High`, `Medium` ou `Low`.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Criar novo campo".
3. Selecione **Criar campo**.
4. No pop-up resultante, insira `Priority` na caixa de texto.
5. No menu suspenso, selecione **Selecionar único**.
6. Adicionar opções para `High`, `Medium` e `Low`. Você também pode incluir emojis nas suas opções.
   ![Exemplo de novo campo de seleção única](/assets/images/help/projects/new-single-select-field.png)
7. Clique em **Salvar**.

Especifique uma prioridade para todos os problemas no seu projeto.

![Prioridades de exemplo](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>Agrupar problemas por prioridade

Em seguida, agrupe todos os itens do seu projeto por prioridade para facilitar o foco nos itens de alta prioridade.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Agrupar por".
3. Selecione **Agrupar por: Prioridade**.

Agora, transfira os problemas entre grupos para mudar a sua prioridade.

1. Escolha um problema.
2. Arraste e solte o problema em um grupo de prioridade diferente. Ao fazer isso, a prioridade do problema passará a ser a prioridade do seu novo grupo.

![Transferir problemas entre grupos](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>Salvando a visualização da prioridade

Quando você agrupou os seus problemas por prioridade na etapa anterior, seu projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve essas alterações para que os seus colaboradores vejam as tarefas agrupadas por prioridade.

1. Selecione o menu suspenso ao lado do nome da visualização.
2. Clique em **Salvar alterações**.

Para indicar o propósito da visão, dê um nome descritivo.

1. Coloque o cursor no nome da exibição atual, **Exibição 1**.
2. Substitua o texto existente pelo novo nome, `Priorities`.

Você pode compartilhar a URL com seu time para manter todos alinhados com as prioridades do projeto.

Quando a visualização é salva, qualquer pessoa que abrir o projeto verá a visualização salva. Aqui, você agrupou por prioridade, mas você também pode adicionar outros modificadores como ordenação, filtro ou layout. Em seguida, você criará uma nova exibição com o layout modificado.

## <a name="adding-a-board-layout"></a>Adicionando um layout de quadro

Para ver o progresso dos problemas do seu projeto, você pode alternar para o layout do quadro.

O layout do quadro é baseado no campo de status. Portanto, especifique um status para cada problema no seu projeto.

![Status do exemplo](/assets/images/help/projects/status_example.png)

Em seguida, crie uma nova visualização.

1. Clique em {% octicon "plus" aria-label="the plus icon" %} **Nova exibição** ao lado da exibição mais à direita.

Em seguida, mude para o layout do quadro.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de "Layout Switch: Board".
3. Selecione **Alterar layout: Quadro**.
   ![Exemplos de prioridades](/assets/images/help/projects/example_board.png)

Quando você alterou o layout, o projeto exibiu um indicador para mostrar que a visualização foi modificada. Salve esta visualização para que você e seus colaboradores possam acessá-la facilmente no futuro.

1. Selecione o menu suspenso ao lado do nome da visualização.
2. Clique em **Salvar alterações**.

Para indicar o propósito da visão, dê um nome descritivo.

1. Coloque o cursor no nome da exibição atual, **Exibição 2**.
2. Substitua o texto existente pelo novo nome, `Progress`.

![Prioridades de exemplo](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>Configure a automação integrada

Por fim, adicione um fluxo de trabalho interno para definir o status como **Tarefas Pendentes** quando um item for adicionado ao projeto.

1. No seu projeto, clique em {% octicon "workflow" aria-label="the workflow icon" %}.
2. Em **Fluxos de trabalho padrão**, clique em **Item adicionado ao projeto**.
3. Ao lado de **Quando**, verifique se `issues` e `pull requests` estão selecionados.
4. Ao lado de **Definir**, selecione **Status:Tarefa Pendente**.
5. Clique na alternância **Desabilitado** para habilitar o fluxo de trabalho.

## <a name="next-steps"></a>Próximas etapas

Você pode usar projetos para uma ampla gama de finalidades. Por exemplo:

- Acompanhar o trabalho para uma versão
- Planejar um sprint
- Priorizar um backlog

Veja alguns recursos úteis para dar seus próximos passos com o {% data variables.product.prodname_github_issues %}:

- Para fornecer comentários sobre a experiência de projetos (beta), acesse o [repositório de comentários do GitHub](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Para saber mais sobre como os projetos podem ajudar você com o planejamento e o acompanhamento, confira "[Sobre os projetos](/issues/trying-out-the-new-projects-experience/about-projects)".
- Para saber mais sobre os campos e os itens que você pode adicionar ao projeto, confira "[Como criar um projeto](/issues/trying-out-the-new-projects-experience/creating-a-project)".
- Para saber mais sobre maneiras de exibir as informações necessárias, confira "[Como personalizar as exibições do projeto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".
