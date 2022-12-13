---
title: Ссылки на Git
shortTitle: References
intro: 'Использование REST API для взаимодействия со ссылками в базе данных Git в {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192900'
---
## Ссылки на Git

Ссылка на Git (`git ref`) — это файл, содержащий хэш SHA-1 фиксации Git. При ссылке на фиксацию Git можно использовать ссылку Git, которая представляет собой простое запоминающееся имя, а не хэш. Ссылку на Git можно перезаписать, чтобы указать на новую фиксацию. Ветвь — это ссылка на Git, в которой хранится новый хэш фиксации Git. Эти конечные точки позволяют считывать и записывать [ссылки](https://git-scm.com/book/en/v2/Git-Internals-Git-References) на базу данных Git в {% data variables.product.product_name %}.
