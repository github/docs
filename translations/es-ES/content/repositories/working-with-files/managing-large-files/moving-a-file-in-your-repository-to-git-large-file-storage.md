---
title: Mover un archivo en tu repositorio a Git Large File Storage
intro: 'Si has configurado {% data variables.large_files.product_name_short %}, y tienes un archivo existente en tu repositorio que debe ser rastreado en {% data variables.large_files.product_name_short %}, debes primero eliminarlo de tu repositorio.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136500'
---
Después de instalar {% data variables.large_files.product_name_short %} y configurar el rastreo de {% data variables.large_files.product_name_short %}, puedes mover archivos del rastreo habitual de Git hacia {% data variables.large_files.product_name_short %}. Para más información, vea "[Instalación de {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)" y "[Configuración de {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Sugerencia:** Si aparece un error "esto supera el límite de tamaño de archivo de {% data variables.large_files.product_name_short %} de {% data variables.large_files.max_github_size %}" al intentar insertar archivos en Git, puede usar `git lfs migrate` en lugar de `filter branch` o BFG Repo Cleaner, para mover un archivo grande a {% data variables.large_files.product_name_long %}. Para más información sobre el comando `git lfs migrate`, vea el anuncio de la versión de [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Elimine el archivo del historial del repositorio de Git mediante el comando `filter-branch` o BFG Repo-Cleaner. Para obtener información detallada sobre su uso, vea "[Eliminación de datos confidenciales de un repositorio](/articles/removing-sensitive-data-from-a-repository)".
2. Configura el rastreo para tu archivo y súbelo a {% data variables.large_files.product_name_short %}. Para más información sobre este procedimiento, vea "[Configuración de {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)".

## Información adicional

- "[Acerca de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaboración con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Instalación de {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
