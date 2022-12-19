---
title: Exibir tráfego para um repositório
intro: 'No gráfico de tráfego, qualquer pessoa com acesso push a um repositório pode visualizar o tráfego dele, inclusive clones completos (e não fetches), visitantes nos últimos 14 dias, sites de referência e conteúdo popular.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-traffic-to-a-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository traffic
ms.openlocfilehash: 75b4900893a0874e42b076962d25babcb4c09233
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126985'
---
A partir dos links indicados nos caminhos especificados, é possível navegar para sites de referência, exceto mecanismos de pesquisa e o {% data variables.product.product_name %} em si. O conteúdo popular tem links para o conteúdo específico que gerou o tráfego.

Os sites de referência e o conteúdo popular são ordenados por exibições e visitantes exclusivos. As informações sobre visitantes e clones completos são atualizadas a cada hora, enquanto que as seções de conteúdo popular e sites de referência são atualizadas diariamente. Todos os dados no gráfico de tráfego usam o fuso horário UTC+0, independentemente de onde você está localizado.

{% tip %}

**Dica:** você pode passar o mouse sobre um dia específico no gráfico de tráfego para exibir os dados exatos desse dia.

{% endtip %}

![Gráficos de tráfego do repositório com dica de ferramenta](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## Acessar o gráfico de tráfego

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Tráfego**.
![Guia Tráfego](/assets/images/help/graphs/traffic_tab.png)
