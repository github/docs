---
title: Exibir um resumo da atividade do repositório
intro: 'Você pode ter uma visão geral do pull request, problema e atividade do commit de um repositório.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882300'
---
## Sobre o Pulse

É possível exibir uma visão geral da atividade de um repositório por meio do gráfico Pulse. O Pulse inclui uma lista de solicitações de pull em aberto e mescladas, problemas em aberto e fechados e um grafo mostrando a atividade de commit para os 15 principais usuários que fizeram commit no branch padrão do projeto no [período](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) selecionado.

Os coautores de commit serão incluídos no resumo da atividade de commit caso tenha sido feito merge dos commits deles no branch padrão do repositório e eles estejam entre os 15 principais usuários que contribuíram com a maioria dos commits.

## Acessando o Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por hora

Por padrão, o Pulse mostra os últimos sete dias de atividade do repositório. Para escolher outro período, clique no menu suspenso **Período** no canto superior esquerdo da visão geral do Pulse.

![Filtrar atividade do Pulse por hora](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
