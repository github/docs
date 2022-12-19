---
title: Árboles de Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Usa la API de REST para interactuar con objetos de árbol en la base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ecd3781bbc78fff8b2d75f25b16d303081a7d605
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193053'
---
## Acerca de los árboles de Git

Un objeto de árbol de Git crea la jerarquía entre archivos para un repositorio de Git. Puedes utilizar el objeto de árbol de Git para crear una relación entre directorios y entre los archivos que contienen. Estos puntos de conexión permiten leer y escribir [objetos de árbol](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) en la base de datos de Git en {% data variables.product.product_name %}.
