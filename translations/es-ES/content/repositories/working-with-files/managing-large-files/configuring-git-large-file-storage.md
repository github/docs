---
title: Configurar el almacenamiento de archivos Git de gran tamaño
intro: 'Una vez que {[{% data variables.large_files.product_name_short %} está instalado], (/articles/installing-git-large-file-storage/), deberás asociarlo con un archivo de gran tamaño en tu repositorio.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configurar el LFS de Git
---

Si hay archivos existentes en tu repositorio con los que te gustaría usar {% data variables.product.product_name %}, primero debes eliminarlos del repositorio y luego agregarlas a {% data variables.large_files.product_name_short %} localmente. Para obtener más información, consulta "[Mover un archivo en tu repositorio a {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Nota:** Antes de que intentes subir un archivo grande a {% data variables.product.product_name %}, asegúrate de haber habilitado {% data variables.large_files.product_name_short %} en tu empresa. Para obtener más información, consulta "[Configurar almacenamiento de archivos Git de gran tamaño en GitHub Enterprise Server](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)".

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia tu directorio de trabajo actual a un repositorio existente que desees usar con {% data variables.large_files.product_name_short %}.
3. Para asociar un tipo de archivo en tu repositorio con {% data variables.large_files.product_name_short %}, escribe `git {% data variables.large_files.command_name %} track` seguido por el nombre de la extensión de archivo a la que deseas cargar automáticamente {% data variables.large_files.product_name_short %}.

  Por ejemplo, para asociar un archivo _.psd_, escribe el siguiente comando:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Cada tipo de archivo que desees asociar con {% data variables.large_files.product_name_short %} deberá agregarse con `got{% data variables.large_files.command_name %} track`. Este comando enmienda tu archivo *.gitattributes* del repositorio y asocia archivos de gran tamaño {% data variables.large_files.product_name_short %}.

  {% note %}

  **Nota:** Te recomendamos ampliamente que confirmes tu archivo local de *.gitatributes* en tu repositorio.

    - Basándose en un archivo global *.gitattributes* asociado con {% data variables.large_files.product_name_short %} puede causar conflictos al contribuir con otros proyectos Git.
    - El incluir el archivo *.gitattributes* en el repositorio le permite a las personas crear bifurcaciones o clones nuevos para colaborar más fácilmente utilizando {% data variables.large_files.product_name_short %}.
    - El incluir el archivo *.gitattributes* en el repositorio permite que los objetos de {% data variables.large_files.product_name_short %} se incluyan opcionalmente en los archivos .tar y ZIP.

  {% endnote %}

4. Agrega un archivo al repositorio que coincide con la extensión que has asociado:
  ```shell
  $ git add path/to/file.psd
  ```
5. Confirma el archivo y súbelo a {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  Deberías ver información de diagnóstico sobre la carga del archivo:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## Leer más

- "[Colaboración con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% ifversion fpt or ghec %}
- "[Administrar objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
