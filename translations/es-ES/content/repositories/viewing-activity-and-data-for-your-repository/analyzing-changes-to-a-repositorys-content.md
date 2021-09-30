---
title: Analizar cambios en el contenido de un repositorio
intro: 'Puedes ver los cambios en el contenido de un repositorio al analizar las confirmaciones del repositorio, la frecuencia de confirmación, y las incorporaciones y eliminaciones de contenido.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Analyze changes
---

## Ver confirmaciones en un repositorio

Puedes ver todas las confirmaciones realizadas a un repositorio en el último año (excluidas las confirmaciones de fusión) en el gráfico de confirmación.

El gráfico superior muestra las confirmaciones del año completo por semana.

![Gráfico anual de confirmaciones de un repositorio](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

El gráfico inferior muestra la cantidad promedio de confirmaciones por día de la semana para la semana seleccionada.

![Gráfico semanal de confirmaciones de un repositorio](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Acceder al gráfico de confirmación

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral izquierda, haz clic en **Commits (Confirmaciones)**. ![Pestaña de confirmaciones](/assets/images/help/graphs/commits_tab.png)

## Visualizing additions and deletion to content in a repository

El gráfico de frecuencia de código muestra las incorporaciones y eliminaciones de contenido de cada semana en el historial de un repositorio.

{% ifversion fpt %}

![Gráfico de frecuencia de código](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Acceder al gráfico de frecuencia de código

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral izquierda, haz clic en **Code frequency (Frecuencia del código)**. ![Pestaña de frecuencia de código](/assets/images/help/graphs/code_frequency_tab.png)
