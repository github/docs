---
title: Detallar las bifurcaciones de un repositorio
intro: El Gráfico de miembros muestra todas las bifurcaciones de un repositorio.
redirect_from:
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Las bifurcaciones se detallan alfabéticamente por el nombre de usuario de la persona que bifurcó el repositorio. Puedes hacer clic en el nombre de usuario para ser redirigido a la página de perfil del usuario {% data variables.product.product_name %} o hacer clic en el nombre de la bifurcación para ser redirigido a la bifurcación específica del repositorio.

{% if currentVersion == "free-pro-team@latest" %}

![Gráfico de miembros del repositorio](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Gráfico de miembros del repositorio](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Acceder al Gráfico de miembros

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral izquierda, haz clic en **Forks** (Bifurcaciones). ![Pestaña Forks (Bifurcaciones)](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)
