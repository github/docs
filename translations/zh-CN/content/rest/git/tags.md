---
title: Git 标记
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: '使用 REST API 与 {% data variables.product.product_name %} 上的 Git 数据库中的标记对象进行交互。'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192887'
---
## 关于 Git 标记

Git 标记类似于 [Git 引用](/rest/reference/git#refs)，但它指向的 Git 提交永远不会更改。 当您想要指向特定发行版时，Git 标记非常有用。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[标记对象](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)并将其写入 Git 数据库。 API 仅支持[附注标签标记对象](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)，不支持轻量标签。
