---
title: Фиксация Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Используйте REST API для взаимодействия с объектами фиксации в базе данных Git в {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192628'
---
## Сведения о фиксациях Git

Фиксация Git — это моментальный снимок иерархии ([дерево Git](/rest/reference/git#trees)) и содержимого файлов ([больших двоичных объектов Git](/rest/reference/git#blobs)) в репозитории Git. Эти конечные точки позволяют считывать [объекты фиксации](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него.
