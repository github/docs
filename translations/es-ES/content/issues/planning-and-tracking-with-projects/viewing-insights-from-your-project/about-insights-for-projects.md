---
title: 'About insights for {% data variables.product.prodname_projects_v2 %}'
intro: Puedes ver y personalizar las gráficas que se crean a partir de los datos de tu proyecto.
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

 You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. Puedes aplicar filtros al gráfico predeterminado y también crear los tuyos propios. When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project. You can generate two types of chart: current charts and historical charts.

 ### About current charts

You can create current charts to visualize your project items. For example, you can create charts to show how many items are assigned to each individual, or how many issues are assigned to each upcoming iteration.

You can also use filters to manipulate the data used to build your chart. For example, you can create a chart showing how much upcoming work you have, but limit those results to particular labels or assignees. Para obtener más información, consulta la sección "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

 ![Captura de pantalla que muestra un gráfico de columnas apilado que muestra tipos de elemento para cada iteración](/assets/images/help/issues/column-chart-example.png)

For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)."

 ### About historical charts

 Historical charts are time-based charts that allow you to view your project's trends and progress. You can view the number of items, grouped by status and other fields, over time.

 El gráfico predeterminado de "Burn up" muestra el estado del elemento contra el tiempo, lo cual te permite visualizar el progreso y notar patrones a lo largo del tiempo.

![Captura de pantalla que muestra un ejemplo del gráfico predeterminado de 'burn up' para la iteración actual](/assets/images/help/issues/burnup-example.png)

 To create a historical chart, set your chart's X-axis to "Time." For more information, see "[Creating charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" and "[Configuring charts](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)."

## Leer más

- "[About {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[Disabling insights for {% data variables.product.prodname_projects_v2 %} in your organization](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
