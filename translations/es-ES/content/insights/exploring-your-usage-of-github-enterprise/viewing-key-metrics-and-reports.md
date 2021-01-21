---
title: Ver métricas e informes clave
intro: Puedes ver y filtrar métricas e informes clave para ayudarte a comprender y mejorar tu proceso de entrega de software mediante datos.
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /GitHub/Installing-and-Configuring-GitHub-Insights/Viewing-and-Filtering-Key-Metrics-and-Reports
permissions: 'Cualquier persona con acceso a {% data variables.product.prodname_insights %} puede ver los informes y las métricas clave.'
versions:
  enterprise-server: '*'
---

### Acerca de las métricas y los informes

{% data reusables.github-insights.key-metrics-and-reports %} Para obtener más información acerca de las métricas disponibles, consulta "[Métricas disponibles con {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)".

Puedes ver las metas y tasas de éxito para cada métrica clave. Para obtener más información, consulta "[Administrar las metas](/insights/installing-and-configuring-github-insights/managing-goals)"

Solo tendrás acceso a los mismos datos de {% data variables.product.prodname_insights %} que tienes acceso en {% data variables.product.prodname_enterprise %}.

Puedes filtrar los datos incluidos en las métricas o los informes clave por equipos, repositorios o intervalo de fechas.

### Ver métricas clave

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Ver informes

1. En {% data variables.product.prodname_insights %}, haz clic en **{% octicon "file" aria-label="The file icon" %} Reports** (Informes). ![Pestaña Reports (Informes)](/assets/images/help/insights/reports-tab.png)
2. Debajo de **{% octicon "file" aria-label="The file icon" %} Reports** (Informes), haz clic en el nombre del informe que deseas ver. ![Lista de informes](/assets/images/help/insights/reports-list.png)
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Further reading

- "[Administrar colaboradores y equipos](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)"
- "[Administrar repositorios](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[Administrar organizaciones](/insights/installing-and-configuring-github-insights/managing-organizations)"
- "[Administrar eventos](/insights/installing-and-configuring-github-insights/managing-events)"
