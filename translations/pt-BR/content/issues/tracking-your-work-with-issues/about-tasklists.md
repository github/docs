---
title: Sobre listas de tarefas
intro: Você pode usar listas de tarefas para dividir os problemas em subtarefas menores.
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180782'
---
{% data reusables.projects.tasklists-release-stage %}

## Sobre listas de tarefas

As listas de tarefas adicionam suporte para hierarquias de problemas no {% data variables.product.product_name %}, ajudando você a acompanhar os problemas, dividi-los em subtarefas menores e criar relações entre os problemas.

As listas de tarefas se baseiam na iteração anterior das [listas de tarefas beta](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists), mantendo a capacidade de converter itens em problemas, exibir o progresso de uma Lista de Tarefas e criar uma relação "Acompanhamentos/Acompanhados por" entre problemas.

Os problemas que você adicionar às listas de tarefas serão preenchidos automaticamente para mostrar os destinatários e os rótulos aplicados.

![Imagem mostrando listas de tarefas em ação](/assets/images/help/issues/tasklist-hero.png)

### Sobre a integração com o {% data variables.projects.projects_v2 %}

 O painel lateral do projeto exibe o local de um problema na hierarquia em um menu estrutural, permitindo que você navegue pelos problemas incluídos nas listas de tarefas. Você também pode adicionar os campos "Acompanhamentos" e "Acompanhados por" às exibições do projeto para ver rapidamente as relações entre os problemas. Para obter informações, confira "[Sobre os campos Acompanhamentos e Acompanhados por](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)".

## Como criar listas de tarefas

Você pode criar uma lista de tarefas usando Markdown em uma descrição de problema. Crie um bloco de código limitado e inclua `[tasklist]` ao lado dos sinais de acento grave iniciais. Então, é possível preceder cada item com `- [ ]` e incluir links para outros problemas ou texto. Você também pode incluir um título como um cabeçalho Markdown na parte superior da lista. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
O Markdown será renderizado pelo {% data variables.product.product_name %} como uma lista de tarefas. Depois você poderá fazer alterações e adicionar problemas e problemas de rascunhos usando a interface do usuário. Se você editar a descrição do problema, poderá modificar o Markdown diretamente ou copiá-lo para duplicar a lista de tarefas em outros problemas.

Você também pode clicar em {% octicon "checklist" aria-label="The checklist icon" %} na barra de ferramentas de formatação para inserir uma lista de tarefas ao criar um problema ou editar a descrição de um problema existente.

![Captura de tela mostrando o botão "Adicionar Lista de Tarefas"](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## Como adicionar problemas a uma lista de tarefas

1. Na parte inferior da lista de tarefas, clique em **Adicionar item a tarefas**.
   
   ![Captura de tela mostrando o botão "Adicionar item a tarefas"](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Selecione o problema a ser adicionado à lista de tarefas.
   
   * Para adicionar um problema atualizado recentemente do repositório, clique nele na lista suspensa ou use as teclas de direção para selecioná-lo e pressione <kbd>Enter</kbd>. 
     
     ![Captura de tela mostrando problemas recentes](/assets/images/help/issues/select-recent-issue.png)
     
   * Para procurar um problema no repositório, comece a digitar o título de um problema ou o número do problema e clique no resultado ou use as teclas de direção para selecioná-lo e pressione <kbd>Enter</kbd>.
     
     ![Captura de tela mostrando a procura de um projeto](/assets/images/help/issues/search-for-issue.png)
     
   * Para adicionar um problema diretamente usando a própria URL, cole a URL de um problema e pressione <kbd>Enter</kbd>.
        
     ![Captura de tela mostrando uma URL de problema colada](/assets/images/help/issues/paste-issue-url.png)
     

## Como criar problemas de rascunho em uma lista de tarefas

Problemas de rascunho são úteis para capturar rapidamente ideias que você pode converter em problemas mais tarde. Ao contrário dos problemas e das solicitações de pull que são referenciados nos repositórios, os rascunhos de problemas só existem na lista de tarefas.

1. Na parte inferior da lista de tarefas, clique em **Adicionar item a tarefas**.
   
   ![Captura de tela mostrando o botão "Adicionar item a tarefas"](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Digite o título do problema de rascunho e pressione <kbd>Enter</kbd>.
   
   ![Captura de tela mostrando um título de problema de rascunho](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## Como converter problemas de rascunho em problemas em uma lista de tarefas

Você pode converter problemas de rascunhos em problemas. Os problemas são criados no mesmo repositório que o problema pai da lista de tarefas.

1. Ao lado do problema de rascunho que você quer converter, clique em {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de tela mostrando o ícone de menu](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. No menu, clique em **Converter em problema**.
   
   ![Captura de tela mostrando a opção "Converter em problema"](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## Como remover um problema ou um problema de rascunho de uma lista de tarefas

Você pode remover problemas e problemas de rascunho da lista de tarefas. Os problemas removidos de uma lista de tarefas não são removidos do repositório.

1. Ao lado do problema de rascunho que você quer remover, clique em {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de tela mostrando o ícone de menu](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. No menu, clique em **Remover**.
   
   ![Captura de tela que mostra a opção "Remover"](/assets/images/help/issues/tasklist-remove.png)
   
## Como alterar o título de uma lista de tarefas

Quando você cria uma lista de tarefas, o título padrão é "Tarefas". Você pode modificar o título editando o markdown do problema.

1. No canto superior direito do corpo do problema, clique em {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de tela mostrando o local do ícone de menu](/assets/images/help/issues/comment-menu.png)
   
1. No menu, clique em **Editar**.
   
   ![Captura de tela mostrando a opção editar](/assets/images/help/issues/comment-menu-edit.png)
   
1. Modifique o cabeçalho no bloco de código limitado inserindo o novo título. Por exemplo, altere `### Tasks` para `### My new title`. 
   
   ![Captura de tela mostrando a opção editar](/assets/images/help/issues/edit-tasklist-title.png)
   
1. Clique em **Atualizar comentário**.

## Como copiar uma lista de tarefas

Quando você copia a lista de tarefas usando a opção "Copiar Markdown", o {% data variables.product.product_name %} copia o Markdown para a área de transferência e inclui o nome do problema para que você possa colar a lista de tarefas fora do GitHub sem perder o contexto. 

1. No canto superior direito da lista de tarefas, clique em {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Captura de tela mostrando o ícone de menu](/assets/images/help/issues/tasklist-kebab.png)
   
1. No menu, clique em **Copiar markdown**.
   
   ![Captura de tela mostrando a opção "Copiar markdown"](/assets/images/help/issues/tasklist-copy-markdown.png)
   
