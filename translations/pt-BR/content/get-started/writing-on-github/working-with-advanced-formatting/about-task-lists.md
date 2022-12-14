---
title: Sobre listas de tarefas
intro: 'Você pode usar listas de tarefas para dividir o trabalho de um problema ou pull request em tarefas menores e, em seguida, rastrear o conjunto completo de trabalho a ser concluído.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
ms.openlocfilehash: dcb8d7972e83d8d35ed2425d57e2950d64ef1352
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159332'
---
{% ifversion projects-v2-tasklists %} {% note %}

**Nota:** para obter mais informações sobre a nova iteração de Listas de Tarefas, que está atualmente em versão beta privada, confira "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/about-tasklists)".

{% endnote %} {% endif %}

## Sobre listas de tarefas

Uma lista de tarefas é um conjunto de tarefas que cada uma interpreta em uma linha separada com uma caixa de seleção clicável. Você pode selecionar ou desmarcar as caixas de seleção para marcar as tarefas como concluídas ou não concluídas. 

Você pode usar Markdown para criar uma lista de tarefas em qualquer comentário em {% data variables.product.product_name %}. {% ifversion fpt or ghec %}Se você fizer referência a um problema, solicitação de pull ou discussão em uma lista de tarefas, a referência será desenrolada para mostrar o título e o estado.{% endif %} 

{% ifversion not fpt or ghec %} Você poderá exibir informações de resumo da lista de tarefas em listas de solicitações de pull e problemas quando a lista de tarefas estiver no comentário inicial.
{% else %}

## Sobre listas de tarefas do problema

Se você adicionar uma lista de tarefas ao texto de um problema, isso significa que a lista adicionou a funcionalidade.

- Para ajudar você a acompanhar o trabalho da sua equipe em um problema, o progresso da lista de tarefas de um problema aparece em vários lugares em {% data variables.product.product_name %} como, por exemplo, em uma lista de problemas de um repositório.
- Se uma tarefa fizer referência a outro problema e alguém fechar esse problema, a caixa de seleção da tarefa será automaticamente marcada como concluída. 
- Se uma tarefa exigir mais rastreamento ou discussão, você poderá convertê-la em um problema, passando o mouse sobre a tarefa e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para adicionar mais detalhes antes de criar o problema, você pode usar atalhos de teclado para abrir o formulário do novo problema. Para obter mais informações, confira "[Atalhos de teclado](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)".
- Quaisquer problemas referenciados na lista de tarefas especificarão que são rastreados no problema de referência.

![Lista de tarefas gerada](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Criar listas de tarefas

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**Dica:** você não pode criar itens de lista de tarefas em problemas fechados ou problemas com solicitações de pull vinculadas.

{% endtip %}

## Reordenar tarefas

Você pode reordenar os itens de uma lista de tarefas clicando à esquerda da caixa de seleção de uma tarefa arrastando a tarefa para uma nova localidade e soltando a tarefa. Você pode reordenar tarefas em diferentes listas no mesmo comentário, mas você não pode reordenar tarefas em diferentes comentários.

{% ifversion fpt %} ![Lista de tarefas reordenada](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![Lista de tarefas reordenada](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## Navegação de problemas monitorizados

Todos os problemas referenciados em uma lista de tarefas especificam que são acompanhados pelo problema que contém a lista de tarefas. Para acessar o problema de rastreamento desde o problema rastreado, clique no número de rastreamento na seção **Rastreado** ao lado do status do problema.

![Rastreado no exemplo](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## Leitura adicional

{% ifversion code-scanning-task-lists %}
* "[Rastreamento de alertas do {% data variables.product.prodname_code_scanning %} em problemas usando listas de tarefas](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)"{% endif %}
