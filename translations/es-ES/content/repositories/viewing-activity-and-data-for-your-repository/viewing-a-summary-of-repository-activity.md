---
title: Ver un resumen de la actividad de un repositorio
intro: 'Puedes ver un resumen de la solicitud de cambios, propuesta y actividad de confirmación de un repositorio.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Visualizar la actividad de los repositorios
---

## Acerca de Pulse

Puedes ver un resumen de la actividad de un repositorio a través de Pulse. Pulse incluye una lista de solicitudes de cambios abiertas y fusionadas, propuestas abiertas y cerradas y una gráfica que muestra la actividad de la confirmación para los principales 15 usuarios que hicieron confirmaciones en la rama predeterminada del proyecto en el [periodo de tiempo](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) seleccionado.

Los coautores de confirmación están incluidos en el resumen de actividad de confirmación si sus confirmaciones fueron fusionadas dentro de la rama por defecto del repositorio y están en los 15 usuarios principales que contribuyeron en la mayoría de las confirmaciones.

## Acceder a Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por tiempo

Por defecto, Pulse muestra los últimos siete días de actividad del repositorio. Para elegir un período de tiempo diferente, haz clic en el menú desplegable de **Period (Período)** en el ángulo superior derecho del resumen de Pulse.

![Filtrar la actividad de Pulse por tiempo](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
