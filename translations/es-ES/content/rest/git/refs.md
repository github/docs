---
title: Referencias de Git
shortTitle: References
intro: 'Uso de la API de REST para interactuar con referencias en la base de datos de Git en {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192901'
---
## Acerca de las referencias de Git

Una referencia de Git (`git ref`) es un archivo que contiene un hash SHA-1 de una confirmación de Git. Al hacer referencia a una confirmación de Git, puede usar la referencia de Git, que es un nombre fácil de recordar, en lugar del hash. La referencia de Git se puede reescribir para apuntar a una confirmación nueva. Una rama es una referencia de Git que almacena el hash de la nueva confirmación de Git. Estos puntos de conexión permiten leer y escribir [referencias](https://git-scm.com/book/en/v2/Git-Internals-Git-References) en la base de datos de Git en {% data variables.product.product_name %}.
