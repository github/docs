---
title: Ссылки на Git
shortTitle: References
intro: 'API ссылок Git позволяют считывать объекты ссылок из базы данных Git для {% data variables.product.product_name %} и записывать их в эту базу данных.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21f618c0126b133c7c312de01a556988070c5c7e
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105673'
---
## Сведения об API ссылок на Git

Ссылка на Git (`git ref`) — это файл, содержащий хэш SHA-1 фиксации Git. При ссылке на фиксацию Git можно использовать ссылку Git, которая представляет собой простое запоминающееся имя, а не хэш. Ссылку на Git можно перезаписать, чтобы указать на новую фиксацию. Ветвь — это ссылка на Git, в которой хранится новый хэш фиксации Git. Эти конечные точки позволяют считывать и записывать [ссылки](https://git-scm.com/book/en/v2/Git-Internals-Git-References) на базу данных Git в {% data variables.product.product_name %}.
