---
title: Теги Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'API тегов Git позволяют считывать объекты тегов из базы данных Git для {% data variables.product.product_name %} и записывать их в эту базу данных.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 11f2793c207dc63162506e2b87ce8142602caa88
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105685'
---
## Сведения об API тегов Git

Метка Git похожа на [ссылку Git](/rest/reference/git#refs), однако фиксация Git, на которую она указывает, никогда не изменяется. Метки Git используются в тех случаях, когда нужно указать на определенные выпуски. Эти конечные точки позволяют считывать [объекты меток](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) из базы данных Git в {% data variables.product.product_name %} и записывать их в нее. API меток Git поддерживает только [объекты аннотированных меток](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), но не упрощенные метки.
