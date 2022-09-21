---
title: Git 树
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: '通过Git 树 API，可以在 {% data variables.product.product_name %} 上读取树对象并将其写入 Git 数据库。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8c13e6c74f334152d67433ab9a90f7dac663b3d6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884467'
---
## 关于 Git 树 API

Git 树对象在 Git 仓库中的文件之间创建层次结构。 您可以使用 Git 树对象创建目录与其包含的文件之间的关系。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取[树对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)并将其写入 Git 数据库。
