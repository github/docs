---
title: Procedimientos recomendados para repositorios
shortTitle: Best practices
intro: Aprende a usar repositorios de forma más eficaz.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163483'
---
## Creación de una archivo LÉAME

Para facilitar que los usuarios comprendan el trabajo y naveguen por él, se recomienda crear un archivo LÉAME para cada repositorio. 

{% data reusables.repositories.about-READMEs %} Para más información, consulta "[Acerca de los archivos LÉAME](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".

## Favorecer la ramificación por encima de la bifurcación

Para simplificar la colaboración, se recomienda que los colaboradores habituales trabajen desde un único repositorio, creando solicitudes de incorporación de cambios entre ramas en lugar de entre repositorios. La bifurcación es más adecuada para aceptar contribuciones de personas que no están afiliadas a un proyecto, como colaboradores de código abierto.

Para mantener la calidad de las ramas importantes, como `main`, mientras se usa un flujo de trabajo de ramificación, puedes usar ramas protegidas con comprobaciones de estado necesarias y revisiones de solicitudes de incorporación de cambios. Para más información, vea "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

## Use {% data variables.large_files.product_name_long %}

Para optimizar el rendimiento, {% data variables.location.product_location %} limita los tamaños de los archivos permitidos en los repositorios. Para obtener más información, consulta "[Acerca de los archivos grandes en {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github)".

Para realizar un seguimiento de archivos grandes en un repositorio de Git, se recomienda usar {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Para obtener más información, consulte "[Acerca de {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".
