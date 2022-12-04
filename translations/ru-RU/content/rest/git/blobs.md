---
title: Большие двоичные объекты Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: "API больших двоичных объектов Git позволяет создавать и получать большой двоичный объект Git (BLOB-объект)\_— тип объекта, используемый для хранения содержимого каждого файла в репозитории."
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3b7cac6d268fb4c7e786651a7281ca5ce4241ec5
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181248'
---
## Сведения об API больших двоичных объектов Git

Большой двоичный объект Git — это тип объекта, используемый для хранения содержимого каждого файла в репозитории. Хэш SHA-1 файла вычисляется и хранится в большом двоичном объекте. Эти конечные точки позволяют считывать [большие двоичные объекты](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него. Большие двоичные объекты используют [эти пользовательские типы данных](#custom-media-types-for-blobs). Дополнительные сведения об использовании типов мультимедиа в API см. [здесь](/rest/overview/media-types).

### Пользовательские типы данных для больших двоичных объектов

Это поддерживаемые типы данных для больших двоичных объектов.

    application/json
    application/vnd.github.raw

Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
