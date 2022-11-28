---
title: 'Sobre {% data variables.product.prodname_projects_v2 %}'
intro: 'O {% data variables.product.prodname_projects_v2 %} é uma ferramenta adaptável e flexível para planejar e acompanhar o trabalho no {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180758'
---
## Sobre {% data variables.product.prodname_projects_v2 %}

Um projeto é uma planilha adaptável que se integra aos seus problemas e solicitações de pull no {% data variables.product.company_short %} para ajudar você a planejar e acompanhar seu trabalho com eficiência. Você pode criar e personalizar várias exibições filtrando, classificando, agrupando seus problemas e solicitações de pull, adicionando campos personalizados para acompanhar metadados específicos à sua equipe e para visualizar o trabalho com gráficos configuráveis. Em vez de impor uma metodologia específica, um projeto fornece recursos flexíveis que você pode personalizar para as necessidades e processos de sua equipe.

### Mantendo-se atualizado

Seus projetos são criados com base nos problemas e nas solicitações de pull que você adiciona, criando referências diretas entre seu projeto e seu trabalho. As informações são sincronizadas de maneira com seu projeto conforme você faz alterações, atualizando suas exibições e gráficos. Essa integração também funciona nos dois sentidos, para que, quando você alterar as informações sobre um problema ou solicitação de pull do seu projeto, o problema ou a solicitação de pull reflita essa informação. Por exemplo, altere um destinatário em seu projeto para que essa alteração seja mostrada em seu problema. Você pode levar essa integração ainda mais longe, agrupar seu projeto por destinatário e fazer alterações na atribuição de problemas arrastando problemas para os diferentes grupos.

### Adicionando metadados aos seus itens

Você pode usar campos personalizados para adicionar metadados aos seus problemas, solicitações de pull e rascunhos de problemas, além de criar uma exibição mais avançada dos atributos de item. Você não está limitado aos metadados internos (destinatários, marcos, etiquetas etc.) que existem atualmente para problemas e solicitações de pull. Por exemplo, você pode adicionar os seguintes metadados como campos personalizados:

- O campo de data para acompanhar as datas de envio de destino.
- O campo numérico para monitorar a complexidade de uma tarefa.
- O único campo de seleção para rastrear se uma tarefa tem prioridade Baixa, Média ou Alta.
- O campo de texto para adicionar uma observação rápida.
- O campo de iteração para planejar o trabalho semanalmente, incluindo suporte para pausas.

{% ifversion projects-v2-tasklists %}

### Explorando as relações entre problemas

{% data reusables.projects.tasklists-release-stage %}

Você pode usar listas de tarefas para criar hierarquias de problemas, dividir seus problemas em subtarefas menores e criar relações entre seus problemas. Para obter mais informações, confira "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/about-tasklists)".

Essas relações são exibidas no problema, bem como os campos Acompanhado por e Acompanhamentos em seus projetos. Você pode filtrar por problemas que são acompanhados por outro problema e também pode agrupar as exibições da sua tabela pelo campo Acompanhado por para mostrar todos os problemas pai com uma lista das respectivas subtarefas.

{% endif %}

### Visualizando seu projeto de diferentes perspectivas

Responda rapidamente às suas perguntas mais urgentes adaptando a exibição do seu projeto para fornecer as informações necessárias. É possível salvar essas exibições, permitindo que você retorne rapidamente a elas quando necessário e disponibilize-as para sua equipe. Além de permitirem definir o escopo dos itens listados, as exibições também oferecem duas opções de layout diferentes.

Você pode ver seu projeto como um layout de tabela de alta densidade:

![Tabela de projeto](/assets/images/help/issues/projects_table.png)

Ou como um quadro:

![Quadro de projeto](/assets/images/help/issues/projects_board.png)

Para ajudar você a concentrar-se em aspectos específicos do seu projeto, você pode agrupar, ordenar ou filtrar itens:

![Visualização do projeto](/assets/images/help/issues/project_view.png)

Para obter mais informações, confira "[Personalizar uma exibição](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".
