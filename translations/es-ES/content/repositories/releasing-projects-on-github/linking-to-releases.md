---
title: Vincular a lanzamientos
intro: Puedes compartir cada lanzamiento que crees en GitHub con una URL única.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. To copy a unique URL to your clipboard, find the release you want to link to, right click the title, and copy the URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
  ![Release title](/assets/images/help/releases/release-title.png)
{% else %}
  ![Release title](/assets/images/help/releases/release-title-old.png)
{% endif %}
1. Como alternativa, da clic derecho en **Lanzamiento más Reciente** y copia la URL para compartirlo. El sufijo de esta URL siempre es `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Menú de comparación de etiquetas de lanzamiento](/assets/images/help/releases/refreshed-release-latest.png)
   {% else %}
   ![Etiqueta del último lanzamiento](/assets/images/help/releases/release_latest_release_tag.png)
   {% endif %}
Para enlazarlo directamente con una descarga de tu último activo de lanzamiento que se cargó manualmente, enlaza a `/owner/name/releases/latest/download/nombre-de-activo.zip`.
