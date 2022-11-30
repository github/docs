---
title: Ver un resumen de la actividad de un repositorio
intro: 'Puedes ver un resumen de la actividad de un repositorio a través de Pulse. Pulse incluye una lista de solicitudes de extracción abiertas y fusionadas, propuestas abiertas y cerradas y un gráfico que muestra la actividad de confirmación de los 15 usuarios principales que confirmaron la rama por defecto del proyecto en el [período de tiempo] seleccionado [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Los coautores de confirmación están incluidos en el resumen de actividad de confirmación si sus confirmaciones fueron fusionadas dentro de la rama por defecto del repositorio y están en los 15 usuarios principales que contribuyeron en la mayoría de las confirmaciones.

### Acceder a Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

### Filtrar por tiempo

Por defecto, Pulse muestra los últimos siete días de actividad del repositorio. Para elegir un período de tiempo diferente, haz clic en el menú desplegable de **Period (Período)** en el ángulo superior derecho del resumen de Pulse.

![Filtrar la actividad de Pulse por tiempo](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
