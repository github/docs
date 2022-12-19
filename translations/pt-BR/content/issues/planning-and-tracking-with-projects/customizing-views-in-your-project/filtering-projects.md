---
title: 'Filtrar {% data variables.projects.projects_v2 %}'
intro: Use filtros para escolher quais itens aparecem nas exibições do seu projeto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 680d6cff10dfc063ebaef0ebc9f8f7d0c15ba2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158938'
---
Você pode personalizar as visualizações usando filtros para os metadados do item, como os responsáveis e as etiquetas aplicadas aos problemas e pelos campos no seu projeto. Você pode combinar filtros e salvá-los como visualizações. Para obter mais informações, confira "[Como personalizar as exibições do projeto](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

Para filtrar um projeto, clique em {% octicon "filter" aria-label="The Filter icon" %} e comece a digitar os campos e valores que você gostaria de filtrar. À medida que você digita, serão exibidos os possíveis valores. Você também pode abrir a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e digitar "Filtrar por" para escolher os filtros disponíveis.

O uso de vários filtros funcionará como um filtro AND lógico. Por exemplo, `label:bug status:"In progress"` retornará itens com a etiqueta `bug`, com o status "Em andamento". Os {% data variables.product.prodname_projects_v2 %} atualmente não dão suporte a filtros OR lógicos em vários campos.

Os mesmos filtros estão disponíveis para gráficos criados usando insights para {% data variables.product.prodname_projects_v2 %}, permitindo que você filtre os dados usados para criar seus gráficos. Para obter mais informações, confira "[Como usar insights com projetos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)".

Quando você filtrar uma exibição e adicionar um item, os metadados filtrados serão aplicados ao item adicionado. Por exemplo, se você estiver filtrando por `status:"In progress"` e adicionar um item, o novo item terá o status definido como "Em andamento".

## Filtrando itens

Clique em {% octicon "filter" aria-label="the filter icon" %} na parte superior da tabela para mostrar a barra "Filtrar por palavra-chave ou por campo". Comece a digitar o nome do campo e o valor que você deseja filtrar. À medida que você digita, serão exibidos os possíveis valores.

{% data reusables.projects.projects-filters %}

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Filtrar por".

No layout da tabela, você pode clicar nos dados de item para filtrar para itens com esse valor. Por exemplo, clique em um responsável para mostrar apenas itens para ele. Para remover o filtro, clique nos dados do item novamente.
