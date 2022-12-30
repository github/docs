---
title: Git 提交
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: '使用 REST API 与 {% data variables.product.product_name %} 上的 Git 数据库中的提交对象进行交互。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192623'
---
## 关于 Git 提交

Git 提交是层次结构（[Git 树](/rest/reference/git#trees)）和 Git 存储库中文件内容 ([Git blob](/rest/reference/git#blobs)) 的快照。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[提交对象](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects)并将其写入 Git 数据库。
