---
title: Etiquetas de Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Usa la API de REST para interactuar con objetos de etiqueta en la base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192893'
---
## Acerca de las etiquetas de Git

Una etiqueta de Git es similar a una [referencia de Git](/rest/reference/git#refs), pero la confirmación de Git a la que apunta nunca cambia. Las etiquetas de git son útiles cuando quieres apuntar a algún lanzamiento específico. Estos puntos de conexión te permiten leer y escribir [objetos de etiqueta](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) en la base de datos de Git en {% data variables.product.product_name %}. La API solo admite [objetos de etiqueta anotada](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), no etiquetas ligeras.
