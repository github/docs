---
title: Distribuir binarios grandes
intro: 'Algunos proyectos requieren la distribución de archivos grandes, como los binarios o instaladores, además de la distribución del código fuente.'
redirect_from:
  - /articles/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si necesitas distribuir archivos grandes dentro de tu repositorio, puedes crear lanzamientos en {% data variables.product.product_location %}. Los lanzamientos te permiten empaquetar el software, notas de lanzamiento y enlaces a los archivos binarios para que otras personas puedan utilizarlos. Para obtener más información, consulta la sección "[Acerca de los lanzamientos](/github/administering-a-repository/about-releases)".

{% if currentVersion == "free-pro-team@latest" %}

No limitamos el tamaño total de los archivos binarios en los lanzamientos o anchos de banda que se utilizan para entregarlos. Sin embargo, cada archivo individual debe ser menor a {% data variables.large_files.max_lfs_size %}.

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
