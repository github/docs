---
title: Acerca de Large File Storage de Git
intro: '{% data variables.product.product_name %} limits the size of files allowed in repositories. To track files beyond this limit, you can use {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage/
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Almacenamiento de archivos de gran tamaño Git
---

## Acerca de {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} maneja archivos grandes almacenando referencias del archivo en el repositorio, pero no el archivo real. Para trabajar en la arquitectura de Git, {% data variables.large_files.product_name_short %} crea un archivo puntero que actúa como una referencia del archivo real (que se almacena en otro lugar). {% data variables.product.product_name %} administra este archivo puntero en tu repositorio. Cuando clonas el repositorio, {% data variables.product.product_name %} usa el archivo puntero como un mapa para ir y buscar el archivo grande por ti.

{% ifversion fpt %}
Con {% data variables.large_files.product_name_short %} puedes subier archivos de hasta:

| Producto                                          | Tamaño máximo de archivo |
| ------------------------------------------------- | ------------------------ |
| {% data variables.product.prodname_free_user %} | 2 GB                     |
| {% data variables.product.prodname_pro %}         | 2 GB                     |
| {% data variables.product.prodname_team %}        | 4 GB                     |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
 Si utilizas {% data variables.large_files.product_name_short %}, puedes almacenar archivos de hasta 5 GB en tu repositorio.
{% endif %}

Tambié puedes usar {% data variables.large_files.product_name_short %} con {% data variables.product.prodname_desktop %}. Para obtener más información acerca de cómo clonar repositorios LFS de Git en {% data variables.product.prodname_desktop %}, consulta "[Cómo clonar un repositorio desde GitHub hasta GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Formato de archivo puntero

El archivo puntero de {% data variables.large_files.product_name_short %} se ve así:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Hace un seguimiento de la `version` de {% data variables.large_files.product_name_short %} que estás usando, seguido de un identificador único para el archivo (`oid`). También almacena el `size` del archivo final.

{% note %}

**Notas**:
- {% data variables.large_files.product_name_short %} no puede utilizarse con los sitios de {% data variables.product.prodname_pages %}.
- {% data variables.large_files.product_name_short %} no se puede utilizar con repositorios de plantilla.

{% endnote %}

## Leer más

- "[Colaborar con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)"
