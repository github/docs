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
---

{% ifversion fpt %}

{% note %}

**Observação:** Os gráficos de históricos estão atualmente disponíveis como uma visualização de recursos para organizações que usam {% data variables.product.prodname_team %} e estão geralmente disponíveis para organizações que usam {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 Você pode usar os insights para {% data variables.product.prodname_projects_v2 %} visualizar, criar e personalizar gráficos que usam os itens adicionados ao seu projeto como seus dados de origem. Você pode aplicar filtros ao gráfico padrão e também criar seus próprios gráficos. Ao criar um gráfico, você define os filtros, o tipo de gráfico e as informações exibidas e o gráfico está disponível para qualquer pessoa que possa visualizar o projeto. Você pode gerar dois tipos de gráfico: gráficos atuais e gráficos históricos.

 ### Sobre os gráficos atuais

Você pode criar gráficos atuais para visualizar os itens do seu projeto. Por exemplo, você pode criar gráficos para mostrar quantos itens são atribuídos a cada indivíduo ou quantos problemas seão atribuídos a cada iteração futura.

Você também pode usar filtros para manipular os dados usados para construir seu gráfico. Por exemplo, você pode criar um gráfico que mostra quanto trabalho futuro você tem e limitar esses resultados a etiquetas ou responsáveis específicos. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

 ![Captura de tela que mostra um gráfico de colunas empilhadas com tipos de itens para cada iteração](/assets/images/help/issues/column-chart-example.png)

Para obter mais informações, consulte "[Criando gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)."

 ### Sobre gráficos históricos

 Os gráficos históricos são gráficos baseados no tempo que permitem que você veja as tendências e o progresso de seu projeto. Você pode ver o número de itens, agrupados por status e outros campos, ao longo do tempo.

 O gráfico padrão "Burn up" mostra o status do item ao longo do tempo, permitindo que você visualize o progresso e os padrões de ponto ao longo do tempo.

![Captura de tela que mostra um exemplo do gráfico padrão de burn up para a iteração atual](/assets/images/help/issues/burnup-example.png)

 Para criar um gráfico histórico, defina o eixo X do gráfico como "Tempo". Para obter mais informações, consulte "[Criando gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" e "[Configurando gráficos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)".

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[Desabilitar insights para {% data variables.product.prodname_projects_v2 %} na sua organização](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
