---
title: Confirmaciones de Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Usa la API de REST para interactuar con los objetos de confirmación de la base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192629'
---
## Acerca de las confirmaciones de Git

Una confirmación de Git es una instantánea de la jerarquía ([árbol de Git](/rest/reference/git#trees)) y del contenido de los archivos ([blob de Git](/rest/reference/git#blobs)) en un repositorio de Git. Estos puntos de conexión permiten leer y escribir [objetos de confirmación](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) en la base de datos de Git en {% data variables.product.product_name %}.
