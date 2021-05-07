---
title: Ver el historial de cambios de una wiki
intro: 'Debido a que las wikis son repositorios de Git, cada cambio que realices es una confirmación que puedes ver.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

### Ver el historial de una wiki

El historial de una wiki incluye:
- El usuario que realizó el cambio
- El mensaje de confirmación que proporcionó
- Cuándo se realizó el cambio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Utilizando la barra lateral de wiki, desplázate hasta la página cuyo historial deseas ver.
4. En la parte superior de la wiki, haz clic en el vínculo de revisión. ![Vínculo de revisión de wiki](/assets/images/help/wiki/wiki_revision_link.png)

### Ver el contenido previo

En la tabla del historial de wiki, puedes hacer clic en el [hash SHA-1](http://en.wikipedia.org/wiki/SHA-1) (la secuencia de letras y números al extremo derecho) para ver una página de wiki tal como existía en un punto determinado en el tiempo.

![Número SHA de wiki](/assets/images/help/wiki/wiki_sha_number.png)

### Comparar dos revisiones

1. Selecciona dos filas que deseas comparar.
2. En la parte superior de la tabla del historial, haz clic en **Compare Revisions (Comparar revisiones)**. ![Botón de revisiones de comparación de wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Verás una diferencia de los cambios que muestra qué líneas se agregaron, se eliminaron y se modificaron.

### Revertir los cambios previos

Puedes únicamente revertir cambios si tienes permiso para editar la wiki.

1. Selecciona una fila que deseas revertir.
2. En la parte superior de la tabla del historial, haz clic en **Compare Revisions (Comparar revisiones)**. ![Botón de revisiones de comparación de wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Verás una diferencia de los cambios que muestra qué líneas se agregaron, se eliminaron y se modificaron. ![Diferencia de revisión de wiki](/assets/images/help/wiki/wiki_revision_diff.png)
4. Para revertir los cambios más recientes, haz clic en **Revert Changes (Revertir cambios)**. ![Botón para revertir cambios de wiki](/assets/images/help/wiki/wiki_revert_changes.png)
