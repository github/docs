---
title: Árboles de Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'La API de árboles de Git te permite leer y escribir objetos de árbol en tu base de datos de Git en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8c13e6c74f334152d67433ab9a90f7dac663b3d6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884473'
---
## Acerca de Git trees API

Un objeto de árbol de Git crea la jerarquía entre archivos para un repositorio de Git. Puedes utilizar el objeto de árbol de Git para crear una relación entre directorios y entre los archivos que contienen. Estos puntos de conexión permiten leer y escribir [objetos de árbol](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) en la base de datos de Git en {% data variables.product.product_name %}.
