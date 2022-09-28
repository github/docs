---
title: Git 标记
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: '可通过 Git 标记 API 在 {% data variables.product.product_name %} 上读取标记对象并将其写入 Git 数据库。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '145129070'
---
## 关于 Git 标记 API

Git 标记类似于 [Git 引用](/rest/reference/git#refs)，但它指向的 Git 提交永远不会更改。 当您想要指向特定发行版时，Git 标记非常有用。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)并将其写入 Git 数据库。 Git 标记 API 仅支持[带批注的标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)，不支持轻量级标记。
