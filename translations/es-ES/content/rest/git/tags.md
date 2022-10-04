---
title: Etiquetas de Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'La API de etiquetas de Git te permite leer y escribir objetos de etiqueta en tu base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135978'
---
## Acerca de Git tags API

Una etiqueta de Git es similar a una [referencia de Git](/rest/reference/git#refs), pero la confirmación de Git a la que apunta nunca cambia. Las etiquetas de git son útiles cuando quieres apuntar a algún lanzamiento específico. Estos puntos de conexión te permiten leer y escribir [objetos de etiqueta](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) en la base de datos de Git en {% data variables.product.product_name %}. La API de etiquetas de Git solo admite [objetos de etiqueta anotados](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), no etiquetas ligeras.
