---
title: Деревья Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Используйте REST API для взаимодействия с объектами дерева в базе данных Git в {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ecd3781bbc78fff8b2d75f25b16d303081a7d605
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193052'
---
## Сведения о деревьях Git

Объект дерева Git создает иерархию между файлами в репозитории Git. Объект дерева Git можно использовать для создания связи между каталогами и содержащимися в них файлами. Эти конечные точки позволяют считывать [объекты дерева](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) из базы данных Git в {% data variables.product.product_name %} и записывать их в него.
