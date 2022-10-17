---
title: Confirmaciones de Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'La API de confirmación de Git permite leer y escribir objetos de confirmación en la base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2b0f1e07134b67be6c00f8bf1c65d9ccf0c2aac5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063486'
---
## Acerca de la API de confirmaciones de Git

Una confirmación de Git es una instantánea de la jerarquía ([árbol de Git](/rest/reference/git#trees)) y del contenido de los archivos ([blob de Git](/rest/reference/git#blobs)) en un repositorio de Git. Estos puntos de conexión permiten leer y escribir [objetos de confirmación](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) en la base de datos de Git en {% data variables.product.product_name %}.
