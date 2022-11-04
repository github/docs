---
title: 'Adicionar itens ao seu {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Saiba como adicionar solicitações de pull, problemas e rascunhos de problemas aos seus projetos individualmente ou em massa.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107610'
---
Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests. 

{% note %}

**Observação:** um projeto pode conter no máximo {% data variables.projects.item_limit %} itens e {% data variables.projects.archived_item_limit %} itens arquivados. {% ifversion projects-v2-auto-archive %}Para saber mais sobre o arquivamento automático de itens quando eles atendem a critérios específicos, confira "[Como arquivar itens automaticamente](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)".{% endif %}

{% endnote %}

### Adicionar problemas e solicitações de pull a um projeto

#### Colar a URL de um problema ou de uma solicitação de pull

{% data reusables.projects.add-item-via-paste %}

#### Pesquisando um problema ou pull request

{% data reusables.projects.add-item-bottom-row %}
2. Digite <kbd>#</kbd> .
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
  ![Captura de tela mostrando como colar uma URL de problema para adicioná-la ao projeto](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.
  ![Captura de tela mostrando como colar uma URL de problema para adicioná-la ao projeto](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Adicionar problemas e solicitações de pull em massa

1. Na linha inferior do projeto, clique em {% octicon "plus" aria-label="plus icon" %}.
  ![Captura de tela mostrando o botão + na parte inferior do projeto](/assets/images/help/projects-v2/omnibar-add.png)
1. Clique em **Adicionar item do repositório**.
  ![Captura de tela mostrando o item de menu "Adicionar item do repositório"](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### Adicionar vários problemas ou solicitações de pull de um repositório

1. Em {% data variables.location.product_location %}, navegue até o repositório que contém os problemas ou as solicitações de pull que você deseja adicionar ao projeto.
{% data reusables.repositories.sidebar-issue-pr %}
1. À esquerda de cada título de problema, selecione os problemas que você deseja adicionar ao seu projeto.
  ![Captura de tela mostrando a caixa de seleção para selecionar o problema ou a solicitação de pull](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para selecionar cada problema ou solicitação de pull na página, na parte superior da lista de problemas ou solicitações de pull, selecione todos. 
  ![Captura de tela mostrando a caixa de seleção para selecionar tudo na tela](/assets/images/help/issues/select-all-checkbox.png)
1. Acima da lista de problemas ou solicitações de pull, clique em **Projetos**. 
  ![Captura de tela mostrando a opção Projetos](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Clique nos projetos aos quais você deseja adicionar os problemas selecionados ou efetuar solicitações de pull.
  ![Captura de tela mostrando a caixa de seleção para selecionar tudo na tela](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
  ![Captura de tela mostrando "Projetos" na barra lateral do problema](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
  ![Captura de tela mostrando a seleção de um projeto na barra lateral do problema](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Opcionalmente, preencha os campos personalizados.
  ![Barra lateral do projeto](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Usando a paleta de comandos para adicionar um problema ou uma solicitação de pull

1. {% data reusables.projects.open-command-palette %}
1. Digite "Adicionar itens" e pressione <kbd>Return/Enter</kbd>.
{% data reusables.projects.bulk-add %}

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente. Ao contrário dos problemas e das solicitações de pull referenciadas de seus repositórios, os rascunhos de problemas só existem em seu projeto.

{% data reusables.projects.add-draft-issue %}

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. Para preencher o repositório, etiquetas ou marcos para o rascunho de um problema, você deverá primeiro converter o rascunho do problema em um problema. Para obter mais informações, confira "[Como converter problemas de rascunho em problemas](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)".

{% note %}

**Observação**: os usuários não receberão notificações quando forem atribuídos ou mencionados em um problema de rascunho, a menos que o problema de rascunho seja convertido em um problema.

{% endnote %}
