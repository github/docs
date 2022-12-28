---
title: Большие двоичные объекты Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'Используйте REST API для взаимодействия с blob-объектом Git (большим двоичным объектом), типом объекта, используемым для хранения содержимого каждого файла в репозитории.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192724'
---
## Сведения о BLOB-объектах Git

Большой двоичный объект Git — это тип объекта, используемый для хранения содержимого каждого файла в репозитории. Хэш SHA-1 файла вычисляется и хранится в большом двоичном объекте. Эти конечные точки позволяют считывать [большие двоичные объекты](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него. Большие двоичные объекты используют [эти пользовательские типы данных](#custom-media-types-for-blobs). Дополнительные сведения об использовании типов мультимедиа в API см. [здесь](/rest/overview/media-types).

### Пользовательские типы данных для больших двоичных объектов

Это поддерживаемые типы данных для больших двоичных объектов.

    application/json
    application/vnd.github.raw

Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
