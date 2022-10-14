---
title: Sobre gráficos do repositório
intro: Os gráficos do repositório ajudam a exibir e analisar dados do repositório.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127000'
---
Os grafos de um repositório fornecem informações sobre {% ifversion fpt or ghec %} o tráfego, os projetos que dependem do repositório,{% endif %} os colaboradores e os commits do repositório, além dos forks e da rede de um repositório. Se você mantém um repositório, é possível usar esses dados para entender melhor quem está usando o repositório e por que está usando.

{% ifversion fpt or ghec %}

Alguns gráficos do repositório estão disponíveis somente em repositórios públicos com o {% data variables.product.prodname_free_user %}:
- Pulso
- Colaboradores
- Tráfego
- Confirmações
- Frequência de código
- Rede

Todos os outros gráficos do repositório estão disponíveis em todos os repositórios. Cada gráfico do repositório está disponível em repositórios públicos e privados com o {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} e {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}
