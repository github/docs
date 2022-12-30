---
title: Теги Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Используйте REST API для взаимодействия с объектами тегов в базе данных Git в {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192892'
---
## Сведения о тегах Git

Метка Git похожа на [ссылку Git](/rest/reference/git#refs), однако фиксация Git, на которую она указывает, никогда не изменяется. Метки Git используются в тех случаях, когда нужно указать на определенные выпуски. Эти конечные точки позволяют считывать [объекты меток](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) из базы данных Git в {% data variables.product.product_name %} и записывать их в нее. API поддерживает только [объекты тегов с заметками](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), но не упрощенные теги.
