---
title: Eliminar archivos de Git Large File Storage
intro: 'Si has configurado {% data variables.large_files.product_name_short %} para tu repositorio, puedes eliminar todos los archivos o un subconjunto de archivos desde {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136495'
---
## Eliminar un único archivo

1.  Elimine el archivo del historial del repositorio de Git mediante el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre su uso, vea "[Eliminación de datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. Vaya al archivo *.gitattributes*.

  {% note %}

  **Nota:** El archivo *.gitattributes* se guarda generalmente en el repositorio local. En algunos casos, es posible que haya creado un archivo *.gitattributes* global que contiene todas las asociaciones de {% data variables.large_files.product_name_short %}.

  {% endnote %}
3. Busque y elimine la regla de seguimiento de {% data variables.large_files.product_name_short %} asociada dentro del archivo *.gitattributes*.
4. Guarde y salga del archivo *.gitattributes*.

## Eliminar todos los archivos dentro de un repositorio {% data variables.large_files.product_name_short %}

1. Quite los archivos del historial del repositorio de Git mediante el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre su uso, vea "[Eliminación de datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. De manera opcional, para desinstalar {% data variables.large_files.product_name_short %} en el repositorio, ejecuta:
  ```shell
  $ git lfs uninstall
  ```
  Para las versiones {% data variables.large_files.product_name_short %} más bajas que 1.1.0, ejecuta:
  ```shell
  $ git lfs uninit
  ```

## objetos {% data variables.large_files.product_name_short %} en tu repositorio

Después de eliminar archivos de {% data variables.large_files.product_name_short %}, los objetos de {% data variables.large_files.product_name_short %} siguen existiendo en el almacenamiento remoto{% ifversion fpt or ghec %} y seguirán contando para la cuota de almacenamiento de {% data variables.large_files.product_name_short %}{% endif %}.

Para quitar objetos de {% data variables.large_files.product_name_short %} de un repositorio, {% ifversion fpt or ghec %}elimine el repositorio y vuelva a crearlo. Cuando se borra un repositorio también se borra cualquier informe de problemas, estrellas y bifurcaciones asociados al mismo. Para más información, vea "[Eliminación de un repositorio](/github/administering-a-repository/deleting-a-repository)". Si tiene que purgar un objeto quitado y no puede eliminar el repositorio, [póngase en contacto con el soporte técnico](/github/working-with-github-support) para obtener ayuda. {% else %}póngase en contacto con el administrador de {% data variables.product.prodname_enterprise %} para archivar los objetos. Los objetos archivados se purgan después de tres meses.{% endif %}

{% note %}

**Nota:** Si ha eliminado un solo archivo y tiene otros objetos de {% data variables.large_files.product_name_short %} que quiere mantener en el repositorio, después de eliminar el repositorio y volver a crearlo, vuelva a configurar los archivos asociados de {% data variables.large_files.product_name_short %}. Para más información, vea "[Eliminación de un solo archivo](#removing-a-single-file)" y "[Configuración de {% data variables.large_files.product_name_long %} para la empresa](/github/managing-large-files/configuring-git-large-file-storage)".

{% endnote %}

## Información adicional

- "[Acerca de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaboración con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Instalación de {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
