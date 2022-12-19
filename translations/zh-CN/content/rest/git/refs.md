---
title: Git 引用
shortTitle: References
intro: '使用 REST API 与 {% data variables.product.product_name %} 上的 Git 数据库中的引用进行交互'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192895'
---
## 关于 Git 引用

Git 引用 (`git ref`) 是一个包含 Git 提交 SHA-1 哈希的文件。 当引用 Git 提交时，你可以使用 Git 引用，与哈希相比这是一个易于记住的名称。 可以重写 Git 引用指向新的提交。 分支是存储新 Git 提交哈希的 Git 引用。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[引用](https://git-scm.com/book/en/v2/Git-Internals-Git-References)并将其写入 Git 数据库。
