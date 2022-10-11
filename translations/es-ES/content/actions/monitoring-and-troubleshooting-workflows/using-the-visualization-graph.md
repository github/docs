---
title: Utilizar la gráfica de visualización
intro: Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los flujos de trabajo.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: '*'
shortTitle: Utiliza la gráfica de visualización
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

1. La gráfica muestra cda job en el flujo de trabajo. Un icono a la izquierda del nombre del job indica el estado del mismo. Las líneas entre los jobs indican las dependencias. ![Gráfica del flujo de trabajo](/assets/images/help/images/workflow-graph.png)

2. Da clic en un job para ver la bitácora del mismo.![Gráfica del flujo de trabajo](/assets/images/help/images/workflow-graph-job.png)
