---
title: Usando insights com projetos (beta)
intro: Você pode visualizar e personalizar gráficos construídos a partir dos dados do seu projeto.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064703"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>Sobre insights

Você pode usar os insights para visualizar e personalizar gráficos que usam os itens adicionados ao seu projeto como seus dados de origem. O gráfico padrão "Burn up" mostra o status do item ao longo do tempo, permitindo visualizar o progresso e detectar padrões ao longo do tempo. 

![Captura de tela que mostra um exemplo do gráfico padrão Burn up para a iteração atual](/assets/images/help/issues/burnup-example.png)

Você pode aplicar filtros ao gráfico padrão e criar seus gráficos. Quando você cria um gráfico, o tipo de gráfico, as informações exibidas e os filtros são definidos, e o gráfico fica disponível para qualquer pessoa que possa ver o projeto.

![Captura de tela que mostra um gráfico de colunas empilhadas com os tipos de itens para cada iteração](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>Criar um gráfico

{% data reusables.projects.access-insights %}
3. No menu à esquerda, clique em **Novo gráfico**.
4. Opcionalmente, para alterar o nome do novo gráfico, clique em {% octicon "triangle-down" aria-label="The triangle icon" %}, digite um novo nome e pressione <kbd>Return</kbd>.
5. Acima do gráfico, digite os filtros para alterar os dados utilizados para a construção do gráfico. Para obter mais informações, confira "[Filtragem de projetos](/issues/trying-out-the-new-projects-experience/filtering-projects)".
6. À direita da caixa de texto do filtro, clique em **Salvar alterações**.

## <a name="configuring-a-chart"></a>Como configurar um gráfico

{% data reusables.projects.access-insights %}
1. No menu à esquerda, clique no gráfico que deseja configurar.
1. No lado direito da página, clique em **Configurar**. Um painel será aberto à direita.
1. Para alterar o tipo de gráfico, selecione o menu suspenso **Layout** e clique no tipo de gráfico que deseja usar.
1. Para alterar o campo usado para o eixo X do gráfico, selecione o menu suspenso **Eixo X** e clique no campo que deseja usar.
1. Opcionalmente, para agrupar os itens do eixo X por outro campo, selecione **Agrupar por** e clique no campo que deseja usar ou clique em "Nenhum" para desabilitar o agrupamento.
1. Opcionalmente, se o projeto contiver campos numéricos e você quiser que o eixo Y exiba a soma, a média, o mínimo ou o máximo de um desses campos numéricos, selecione **Eixo Y** e clique em uma opção. Em seguida, selecione o menu suspenso exibido abaixo e clique no campo de número que deseja usar. 
1. Para salvar o gráfico, clique em **Salvar alterações**.
