---
title: Administrar objetivos
intro: Puedes utilizar objetivos para configurar metas para las métricas clave y medir el éxito al lograr dichas metas.
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
  - /insights/installing-and-configuring-github-insights/managing-goals
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can manage goals.'
versions:
  enterprise-server: '*'
---
### Acerca de las metas

Las metas son objetivos que puedes configurar para que las métricas clave midan el éxito de tu equipo. Cuando configuras una meta para una métrica clave, puedes ver cómo se compara el rendimiento de tu equipo con la meta utilizando una línea de meta en los gráficos y en la métrica de tasa de éxito. Por ejemplo, puedes configurar la meta de `code review turnaround time` para que sea de 4 horas. Una línea de meta en los gráficos de métricas clave muestra qué revisiones de código lograron la meta y cuáles no lo hicieron. Si tu equipo completa la mitad de las revisiones de código en menos de 4 horas, tu `success rate` será de 50%.

Las metas sólo se encuentran disponibles en métricas clave. Algunos reportes también muestran qué trabajo, tal como las solicitudes de extracción individuales, no cumplió con tu meta. Para obtener más información, consulta "[Ver métricas e informes clave](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

Las metas no pueden crearse o borrarse. Cuando editas una meta, esta nueva meta aplica a todo aquél que use tu aplicación de {% data variables.product.prodname_insights %}.

### Editar una meta

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
1. A la derecha de la meta, da clic en {% octicon "gear" aria-label="The gear icon" %}. ![Icono de engrane para editar meta](/assets/images/help/insights/edit-goal.png)
2. En el campo de texto, teclea un nuevo valor para la meta. ![Campo de valor de la meta](/assets/images/help/insights/input-goal.png)
3. Haz clic en **Save (Guardar)**. ![Guardar meta](/assets/images/help/insights/save-goal.png)
