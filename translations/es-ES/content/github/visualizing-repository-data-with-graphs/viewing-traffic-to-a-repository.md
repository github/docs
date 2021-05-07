---
title: Ver el tráfico de un repositorio
intro: 'Cualquier persona con acceso de escritura a un repositorio puede ver su tráfico, incluidos los clones completos (no recuperaciones), los visitantes de los últimos 14 días, sitios de referencia y contenido popular en el gráfico de tráfico.'
product: 'Esta gráfica de perspectivas del repositorio se encuentra disponible en los repositorios públicos con {% data variables.product.prodname_free_user %} y {% data variables.product.prodname_free_team %} para organizaciones, y en los repositorios privados y públicos con {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, y {% data variables.product.prodname_ghe_cloud %}.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta las secciones "[Acerca de las gráficas de los repositorios](/articles/about-repository-graphs)" y "[productos de {% data variables.product.prodname_dotcom %}](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

Puedes desplazarte a los sitios de referencia, excluidos los motores de búsqueda y {% data variables.product.product_name %} propiamente dicho, desde los vínculos donde se hizo la referencia a las rutas específicas. El contenido popular vincula al contenido específico que generó tráfico.

Los sitios de referencia y el contenido popular se ordenan por vistas y visitantes únicos. Los clones completos y la información del visitante se actualizan cada hora, mientras que las secciones de los sitios de referencia y del contenido popular se actualizan diariamente. Todos los datos en el gráfico de tráfico utiliza la zona horaria UTC+0, sin importar tu ubicación.

{% tip %}

**Tip:** Puedes pasar el puntero del mouse sobre un día específico en la gráfica de tráfico para ver los datos exactos para ese día.

{% endtip %}

![Gráficos de tráfico del repositorio con una información de herramienta](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

### Acceder al gráfico de tráfico

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral izquierda, da clic en **Tráfico**. ![Pestaña de tráfico](/assets/images/help/graphs/traffic_tab.png)
