---
title: Mover un archivo en tu repositorio a Git Large File Storage
intro: 'Si has configurado {% data variables.large_files.product_name_short %}, y tienes un archivo existente en tu repositorio que debe ser rastreado en {% data variables.large_files.product_name_short %}, debes primero eliminarlo de tu repositorio.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Después de instalar {% data variables.large_files.product_name_short %} y configurar el rastreo de {% data variables.large_files.product_name_short %}, puedes mover archivos del rastreo habitual de Git hacia {% data variables.large_files.product_name_short %}. Para obtener más información, consulta la sección "[Instalar {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)" y "[Configurar {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Sugerencia:** si te aparece un error "esto excede el límite de tamaño de archivo {% data variables.large_files.product_name_short %} de {% data variables.large_files.max_github_size %}" cuando tratas de subir archivos a Git, puedes utilizar `git lfs migrate` en lugar de `filter branch` o del BFG Repo Cleaner, para mover un archivo grande a {% data variables.large_files.product_name_long %}. Para obtener más información acerca del comando `git lfs migrate`, consulta el anuncio de lanzamiento de [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Elimina el archivo del historial del repositorio de Git utilizando el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre sus usos, consulta "[Eliminar datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. Configura el rastreo para tu archivo y súbelo a {% data variables.large_files.product_name_short %}. Para obtener más información sobre este procedimiento, consulta "[Configurar {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)."

### Leer más

- "[Acerca de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaborar con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)"
- "[Instalar {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
