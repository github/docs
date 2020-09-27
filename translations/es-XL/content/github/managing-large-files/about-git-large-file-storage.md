---
title: Acerca de Large File Storage de Git
intro: '{{ site.data.variables.large_files.product_name_short }}te permite subir los archivos que sean más grandes que el límite de subida en Git a {{ site.data.variables.product.product_name }}.'
redirect_from:
  - /articles/about-large-file-storage/
  - /articles/about-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.variables.large_files.product_name_short }} maneja archivos grandes almacenando referencias del archivo en el repositorio, pero no el archivo real. Para trabajar en la arquitectura de Git, {{ site.data.variables.large_files.product_name_short }} crea un archivo puntero que actúa como una referencia del archivo real (que se almacena en otro lugar). {{ site.data.variables.product.product_name }} administra este archivo puntero en tu repositorio. Cuando clonas el repositorio, {{ site.data.variables.product.product_name }} usa el archivo puntero como un mapa para ir y buscar el archivo grande por ti.

{% if currentVersion == "free-pro-team@latest" %}
Con {{ site.data.variables.large_files.product_name_short }} puedes subier archivos de hasta:

| Producto                                               | Tamaño máximo de archivo |
| ------------------------------------------------------ | ------------------------ |
| {{ site.data.variables.product.prodname_free_user }} | 2 GB                     |
| {{ site.data.variables.product.prodname_pro }}         | 2 GB                     |
| {{ site.data.variables.product.prodname_team }}        | 4 GB                     |
| {{ site.data.variables.product.prodname_ghe_cloud }} | 5 GB |{% else %}
 Con {{ site.data.variables.large_files.product_name_short }} puedes almacenar archivos de hasta
{% if currentVersion ver_lt "enterprise-server@2.21" %}{{ site.data.variables.large_files.max_lfs_size }}{% else %}5 GB{% endif %} en tu repositorio.
{% endif %}

Tambié puedes usar {{ site.data.variables.large_files.product_name_short }} con {{ site.data.variables.product.prodname_desktop }}. Para obtener más información acerca de cómo clonar repositorios LFS de Git en {{ site.data.variables.product.prodname_desktop }}, consulta "[Cómo clonar un repositorio desde GitHub hasta GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{{ site.data.reusables.large_files.can-include-lfs-objects-archives }}

#### Formato de archivo puntero

El archivo puntero de {{ site.data.variables.large_files.product_name_short }} se ve así:

```
version {{ site.data.variables.large_files.version_name }}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Hace un seguimiento de la `version` de {{ site.data.variables.large_files.product_name_short }} que estás usando, seguido de un identificador único para el archivo (`oid`). También almacena el `size` del archivo final.

{% tip %}

**Sugerencia**: {{ site.data.variables.large_files.product_name_short }} no se puede usar con los sitios {{ site.data.variables.product.prodname_pages }}.

{% endtip %}

### Leer más

- "[Colaborar con {{ site.data.variables.large_files.product_name_long }}](/articles/collaboration-with-git-large-file-storage)"
