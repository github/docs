---
title: Фиксация Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'API фиксаций Git позволяют считывать объекты фиксации из базы данных Git в {% data variables.product.product_name %} и записывать их в него.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d2440b6676af9560eceb13ef43d6cd16e02d5522
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105676'
---
## Сведения об API фиксаций Git

Фиксация Git — это моментальный снимок иерархии ([дерево Git](/rest/reference/git#trees)) и содержимого файлов ([больших двоичных объектов Git](/rest/reference/git#blobs)) в репозитории Git. Эти конечные точки позволяют считывать [объекты фиксации](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него.
