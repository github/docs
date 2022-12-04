---
title: Деревья Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'API деревьев Git позволяют считывать объекты деревьев из базы данных Git для {% data variables.product.product_name %} и записывать их в эту базу данных.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 64282860f755516cdae11625984fe4b97d4f9888
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105682'
---
## Сведения об API деревьев Git

Объект дерева Git создает иерархию между файлами в репозитории Git. Объект дерева Git можно использовать для создания связи между каталогами и содержащимися в них файлами. Эти конечные точки позволяют считывать [объекты дерева](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него.
