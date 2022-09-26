---
title: Git 引用
shortTitle: References
intro: '可以通过 Git 引用 API 在 {% data variables.product.product_name %} 上读取和写入对 Git 数据库的引用'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093052'
---
## 关于 Git 引用 API

Git 引用 (`git ref`) 是一个包含 Git 提交 SHA-1 哈希的文件。 当引用 Git 提交时，你可以使用 Git 引用，与哈希相比这是一个易于记住的名称。 可以重写 Git 引用指向新的提交。 分支是存储新 Git 提交哈希的 Git 引用。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[引用](https://git-scm.com/book/en/v1/Git-Internals-Git-References)并将其写入 Git 数据库。
