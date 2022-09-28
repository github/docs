---
title: Blobs de Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'La API de blobs de Git permite crear y obtener un blob de Git (objeto binario grande), el tipo de objeto que se usa para almacenar el contenido de cada archivo en un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e815b7d7ea3d63ced4c486605891a10dcb870176
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060622'
---
## Acerca de Git blob API

Un blob (objeto binario grande, por sus siglas en inglés) de Git es el tipo de objeto que se utiliza para almacenar el contenido de cada archivo en un repositorio. El hash SHA-1 del archivo se calcula y almacena en el objeto del blob. Estos puntos de conexión permiten leer y escribir [objetos de blob](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) en la base de datos de Git en {% data variables.product.product_name %}. Los blobs sacan provecho de [estos tipos de medios personalizados](#custom-media-types-for-blobs). [Aquí](/rest/overview/media-types) puede obtener más información sobre el uso de los tipos de medios en la API.

### Tipos de medios personalizados para los blobs

Estos son los tipos de medios compatibles para los blobs.

    application/json
    application/vnd.github.VERSION.raw

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
