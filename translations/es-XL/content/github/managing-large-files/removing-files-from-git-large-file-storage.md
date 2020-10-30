---
title: Eliminar archivos de Git Large File Storage
intro: 'Si has configurado {% data variables.large_files.product_name_short %} para tu repositorio, puedes eliminar todos los archivos o un subconjunto de archivos desde {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Eliminar un único archivo

1.  Elimina el archivo del historial del repositorio de Git utilizando el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre sus usos, consulta "[Eliminar datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. Navega hasta tu archivo *.gitattributes*.

  {% note %}

  **Nota:** Tu archivo *.gitattributes* generalmente se guarda dentro de tu repositorio local. En algunos casos, puede que hayas creado un archivo *.gitattributes* global que contiene todas tus {% data variables.large_files.product_name_short %} asociaciones.

  {% endnote %}
3. Encuentra y elimina la regla de seguimiento {% data variables.large_files.product_name_short %} asociada dentro del archivo *.gitattributes*.
4. Guarda y cierra el archivo *.gitattributes*.

### Eliminar todos los archivos dentro de un repositorio {% data variables.large_files.product_name_short %}

1. Eliminar los archivos del historial de Git del repositorio usando el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre sus usos, consulta "[Eliminar datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. De manera opcional, para desinstalar {% data variables.large_files.product_name_short %} en el repositorio, ejecuta:
  ```shell
  $ git lfs uninstall
  ```
  Para las versiones {% data variables.large_files.product_name_short %} más bajas que 1.1.0, ejecuta:
  ```shell
  $ git lfs uninit
  ```

### objetos {% data variables.large_files.product_name_short %} en tu repositorio

Después de eliminar archivos de {% data variables.large_files.product_name_short %}, los objetos {% data variables.large_files.product_name_short %} siguen existiendo en el almacenamiento remoto{% if currentVersion == "free-pro-team@latest" %} y seguirán contabilizando en tu {% data variables.large_files.product_name_short %} cuota de almacenamiento{% endif %}.

Para eliminar objetos de {% data variables.large_files.product_name_short %} de un repositorio, {% if currentVersion == "free-pro-team@latest" %}bórralo y vuelve a crearlo. Cuando se borra un repositorio también se borra cualquier informe de problemas, estrellas y bifurcaciones asociados al mismo. Para obtener más información, consulta la sección "[Borrar un repositorio](/github/administering-a-repository/deleting-a-repository)".{% else %}contacta a tu administrador de {% data variables.product.prodname_enterprise %} para archivar los objetos. Los objetos archivados se purgan después de tres meses.{% endif %}

{% note %}

**Nota:** Si eliminaste un solo archivo y tienes otros objetos de {% data variables.large_files.product_name_short %} que quieres mantener en tu repositorio, después de borrar y volver a crear dicho repositorio, reconfigura tus archivos asociados de {% data variables.large_files.product_name_short %}. Para obtener más información, consulta la sección "[Eliminar un solo archivo](#removing-a-single-file)" y "[{% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% endnote %}

### Leer más

- "[Acerca de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaborar con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)"
- "[Instalar {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
