---
title: 'About insights for {% data variables.product.prodname_projects_v2 %}'
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

**Note:** Historical charts are currently available as a feature preview for organizations using {% data variables.product.prodname_team %} and are generally available for organizations using {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. Você pode aplicar filtros ao gráfico padrão e também criar seus próprios gráficos. When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project. You can generate two types of chart: current charts and historical charts.

 ### About current charts

You can create current charts to visualize your project items. For example, you can create charts to show how many items are assigned to each individual, or how many issues are assigned to each upcoming iteration.

You can also use filters to manipulate the data used to build your chart. For example, you can create a chart showing how much upcoming work you have, but limit those results to particular labels or assignees. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

 ![Captura de tela que mostra um gráfico de colunas empilhadas com tipos de itens para cada iteração](/assets/images/help/issues/column-chart-example.png)

For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)."

 ### About historical charts

 Historical charts are time-based charts that allow you to view your project's trends and progress. You can view the number of items, grouped by status and other fields, over time.

 O gráfico padrão "Burn up" mostra o status do item ao longo do tempo, permitindo que você visualize o progresso e os padrões de ponto ao longo do tempo.

![Captura de tela que mostra um exemplo do gráfico padrão de burn up para a iteração atual](/assets/images/help/issues/burnup-example.png)

 To create a historical chart, set your chart's X-axis to "Time." For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" and "[Configuring charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)."

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[Disabling insights for {% data variables.product.prodname_projects_v2 %} in your organization](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
