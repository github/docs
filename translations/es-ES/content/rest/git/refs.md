---
title: Referencias de Git
shortTitle: References
intro: 'La API de referencias de Git te permite leer y escribir referencias en tu base de datos de Git en {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147093058'
---
## Acerca de la API de referencias de Git

Una referencia de Git (`git ref`) es un archivo que contiene un hash SHA-1 de una confirmación de Git. Al hacer referencia a una confirmación de Git, puede usar la referencia de Git, que es un nombre fácil de recordar, en lugar del hash. La referencia de Git se puede reescribir para apuntar a una confirmación nueva. Una rama es una referencia de Git que almacena el hash de la nueva confirmación de Git. Estos puntos de conexión permiten leer y escribir [referencias](https://git-scm.com/book/en/v1/Git-Internals-Git-References) en la base de datos de Git en {% data variables.product.product_name %}.
