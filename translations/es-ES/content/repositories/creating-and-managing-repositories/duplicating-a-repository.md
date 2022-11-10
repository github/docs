---
title: Duplicar un repositorio
intro: 'Para mantener una réplica de un repositorio sin bifurcarlo, puedes ejecutar un comando de clonado especial y luego subir la réplica al repositorio nuevo.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135490'
---
{% ifversion fpt or ghec %}

{% note %}

**Nota:** Si tiene un proyecto hospedado en otro sistema de control de versiones, puede importarlo automáticamente a {% data variables.product.prodname_dotcom %} mediante la herramienta Importador de {% data variables.product.prodname_dotcom %}. Para más información, vea "[Acerca del Importador de {% data variables.product.prodname_dotcom %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)".

{% endnote %}

{% endif %}

Para poder insertar el repositorio original en la nueva copia, o _reflejo_, del repositorio, debe [crear el repositorio](/articles/creating-a-new-repository) en {% data variables.location.product_location %}. En estos ejemplos, `exampleuser/new-repository` o `exampleuser/mirrored` son los reflejos.

## Generar un espejo de un repositorio

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo del repositorio.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Sube en espejo al nuevo repositorio.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Replicar un repositorio que contiene objetos de {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo del repositorio. Reemplaza el nombre de usuario del ejemplo por el nombre de la persona u organización propietaria del repositorio y reemplaza el nombre del repositorio del ejemplo por el nombre del repositorio que deseas duplicar.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Dirígete al repositorio que acabas de clonar.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. Extra los objetos {% data variables.large_files.product_name_long %} del repositorio.
  ```shell
  $ git lfs fetch --all
  ```
5. Sube en espejo al nuevo repositorio.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. Sube los objetos {% data variables.large_files.product_name_long %} del repositorio a tu espejo.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. Eliminar el repositorio local temporal que creaste previamente.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Replicar un repositorio en otra ubicación

Si quieres replicar un repositorio en otra ubicación, incluido obtener actualizaciones del original, puedes clonar una réplica y subir periódicamente los cambios.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crea un clon desnudo en espejo del repositorio.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. Establece la ubicación para subir en tu espejo.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
Al igual que sucede con un clon básico, un clon replicado incluye todas las ramas y etiquetas remotas, pero todas las referencias locales se sobrescribirán cada vez que extraigas elementos, por eso siempre será igual al repositorio original. El proceso para subir elementos a tu espejo se simplifica si estableces la URL para los elementos que subes.

4. Para actualizar tu espejo, extrae las actualizaciones y súbelas.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Información adicional

* "[Inserción de cambios en GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[Acerca del almacenamiento de archivos grandes de Git y GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* "[Acerca de GitHub Importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"

{% endif %}
