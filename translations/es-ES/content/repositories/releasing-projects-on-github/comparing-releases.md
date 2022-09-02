---
title: Comparar lanzamientos
intro: Puedes comparar etiquetas de lanzamiento para ver los cambios en tu repositorio entre diferentes lanzamientos.
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Da clic en **Comparar** a un costado del lanzamiento que deseas utilizar como tu base.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Menú de comparación de etiquetas de lanzamiento](/assets/images/help/releases/refreshed-compare-tags.png)
  {% else %}
  ![Menú de comparación de etiquetas de lanzamiento](/assets/images/help/releases/compare-tags-menu.png)
  {% endif %}
4. Utiliza el menú desplegable "Comparar" y selecciona las etiquetas que quieras comparar.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Menú de comparación de etiquetas de lanzamiento](/assets/images/help/releases/refreshed-compare-tags-menu-options.png)
  {% else %}
  ![Opciones del menú de comparación de etiquetas de lanzamiento](/assets/images/help/releases/compare-tags-menu-options.png)
  {% endif %}
