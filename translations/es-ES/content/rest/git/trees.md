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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067742'
---
## Acerca de Git trees API

Un objeto de árbol de Git crea la jerarquía entre archivos para un repositorio de Git. Puedes utilizar el objeto de árbol de Git para crear una relación entre directorios y entre los archivos que contienen. Estos puntos de conexión permiten leer y escribir [objetos de árbol](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) en la base de datos de Git en {% data variables.product.product_name %}.
