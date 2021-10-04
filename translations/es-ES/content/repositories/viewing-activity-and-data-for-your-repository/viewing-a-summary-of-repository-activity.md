---
title: Ver un resumen de la actividad de un repositorio
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Visualizar la actividad de los repositorios
---

## About Pulse

Puedes ver un resumen de la actividad de un repositorio a través de Pulse. Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

Los coautores de confirmación están incluidos en el resumen de actividad de confirmación si sus confirmaciones fueron fusionadas dentro de la rama por defecto del repositorio y están en los 15 usuarios principales que contribuyeron en la mayoría de las confirmaciones.

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por tiempo

Por defecto, Pulse muestra los últimos siete días de actividad del repositorio. Para elegir un período de tiempo diferente, haz clic en el menú desplegable de **Period (Período)** en el ángulo superior derecho del resumen de Pulse.

![Filtrar la actividad de Pulse por tiempo](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
