---
title: Git 树
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: '使用 REST API 与 {% data variables.product.product_name %} 上的 Git 数据库中的树对象进行交互。'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193047'
---
## 关于 Git 树

Git 树对象在 Git 仓库中的文件之间创建层次结构。 您可以使用 Git 树对象创建目录与其包含的文件之间的关系。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[树对象](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects)并将其写入 Git 数据库。
