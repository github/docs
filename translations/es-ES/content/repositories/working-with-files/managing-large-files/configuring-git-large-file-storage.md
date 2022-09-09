---
title: Configurar el almacenamiento de archivos Git de gran tamaño
intro: 'Una vez [instalado {% data variables.large_files.product_name_short %}](/articles/installing-git-large-file-storage/), debes asociarlo con un archivo grande del repositorio.'
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
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331764'
---
Si hay archivos existentes en tu repositorio con los que te gustaría usar {% data variables.product.product_name %}, primero debes eliminarlos del repositorio y luego agregarlas a {% data variables.large_files.product_name_short %} localmente. Para obtener más información, consulte "[Mover un archivo del repositorio a {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Nota:** Antes de intentar subir un archivo grande a {% data variables.product.product_name %}, asegúrese de haber habilitado {% data variables.large_files.product_name_short %} en su empresa. Para obtener más información, consulte "[Configuración de Git Large File Storage en GitHub Enterprise Server](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)".

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia tu directorio de trabajo actual a un repositorio existente que desees usar con {% data variables.large_files.product_name_short %}.
3. Para asociar un tipo de archivo del repositorio con {% data variables.large_files.product_name_short %}, escriba `git {% data variables.large_files.command_name %} track` seguido del nombre de la extensión de archivo que desea cargar automáticamente en {% data variables.large_files.product_name_short %}.

  Por ejemplo, para asociar un archivo _.psd_, escriba el siguiente comando:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Todos los tipos de archivo que quiera asociar con {% data variables.large_files.product_name_short %} deberán agregarse con `git {% data variables.large_files.command_name %} track`. Este comando modifica el archivo *.gitattributes* del repositorio y asocia archivos de gran tamaño con {% data variables.large_files.product_name_short %}.

  {% note %}

  **Nota**: Se recomienda encarecidamente que confirmes el archivo *.gitattributes* local en el repositorio.

    - Basarse en un archivo global *.gitattributes* asociado con {% data variables.large_files.product_name_short %} puede causar conflictos a la hora de contribuir con otros proyectos de Git.
    - La inclusión del archivo *.gitattributes* en el repositorio permite a los usuarios crear bifurcaciones o clones desde cero para colaborar más fácilmente con {% data variables.large_files.product_name_short %}.
    - La inclusión del archivo *.gitattributes* en el repositorio permite que los objetos {% data variables.large_files.product_name_short %} se incluyan opcionalmente en archivos ZIP y tarball.

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

## Información adicional

- "[Colaboración con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% ifversion fpt or ghec %}
- "[Administración de objetos de {% data variables.large_files.product_name_short %} en archivos del repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
