---
title: Git 提交
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: '可通过 Git 提交 API 在 {% data variables.product.product_name %} 上读取提交对象并将其写入 Git 数据库。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2b0f1e07134b67be6c00f8bf1c65d9ccf0c2aac5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063480'
---
## 关于 Git 提交 API

Git 提交是层次结构（[Git 树](/rest/reference/git#trees)）和 Git 存储库中文件内容 ([Git blob](/rest/reference/git#blobs)) 的快照。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[提交对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)并将其写入 Git 数据库。
