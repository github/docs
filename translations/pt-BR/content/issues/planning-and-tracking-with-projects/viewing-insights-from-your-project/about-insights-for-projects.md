---
title: 'Sobre insights para {% data variables.product.prodname_projects_v2 %}'
intro: Você pode visualizar e personalizar gráficos construídos a partir dos dados do seu projeto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158570'
---
{% ifversion fpt %}

{% note %}

**Observação:** os gráficos históricos estão disponíveis atualmente como uma versão prévia de recurso para organizações que usam o {% data variables.product.prodname_team %} e estão em disponibilidade geral para organizações que usam o {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 Você pode usar os insights dos {% data variables.product.prodname_projects_v2 %} para exibir, criar e personalizar gráficos que usam os itens adicionados ao seu projeto como dados de origem. Você pode aplicar filtros ao gráfico padrão e criar seus gráficos. Quando você cria um gráfico, o tipo de gráfico, as informações exibidas e os filtros são definidos, e o gráfico fica disponível para qualquer pessoa que possa ver o projeto. Você pode gerar dois tipos de gráfico: gráficos atuais e gráficos históricos.

 O Insights controla os itens que você arquivou ou excluiu.

 ### Sobre gráficos atuais

Você pode criar gráficos atuais para visualizar itens do projeto. Por exemplo, você pode criar gráficos para mostrar quantos itens são atribuídos a cada indivíduo ou quantos problemas são atribuídos a cada iteração futura.

Você também pode usar filtros para manipular os dados usados para criar seu gráfico. Por exemplo, você pode criar um gráfico mostrando quanto trabalho ainda precisa ser feito, mas limitar esses resultados a etiquetas ou destinatários específicos. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

 ![Captura de tela que mostra um gráfico de colunas empilhadas com os tipos de itens para cada iteração](/assets/images/help/issues/column-chart-example.png)

Para obter mais informações, confira "[Criar gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)".

 ### Sobre gráficos históricos

 Gráficos históricos são gráficos baseados em tempo que permitem exibir as tendências e o progresso do projeto. Você pode exibir o número de itens, agrupados por status e outros campos, ao longo do tempo.
 
 O gráfico padrão "Burn up" mostra o status do item ao longo do tempo, permitindo visualizar o progresso e detectar padrões ao longo do tempo. 

![Captura de tela que mostra um exemplo do gráfico padrão Burn up para a iteração atual](/assets/images/help/issues/burnup-example.png)

 Para criar um gráfico histórico, defina o eixo x do gráfico como "Tempo". Para obter mais informações, confira "[Criar gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" e "[Configurar gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)".

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[Desabilitar insights de {% data variables.product.prodname_projects_v2 %} em sua organização](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
