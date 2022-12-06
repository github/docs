---
title: Git Blob
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 通过 Git blob API，你可以创建和获取 Git blob（二进制大型对象），该对象类型用于将每个文件的内容存储在存储库中。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3b7cac6d268fb4c7e786651a7281ca5ce4241ec5
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181243'
---
## 关于 Git Blob API

Git Blob（二进制大对象）是用于将每个文件的内容存储在仓库中的对象类型。 文件的 SHA-1 哈希在 Blob 对象中计算和存储。 通过这些终结点，可以在 {% data variables.product.product_name %} 上读取 [blob 对象](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)并将其写入 Git 数据库。 Blob 利用[这些自定义媒体类型](#custom-media-types-for-blobs)。 你可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

### Blob 的自定义媒体类型

以下是 blob 支持的媒体类型。

    application/json
    application/vnd.github.raw

有关详细信息，请查看[媒体类型](/rest/overview/media-types)。
