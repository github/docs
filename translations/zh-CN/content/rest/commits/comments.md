---
title: 提交注释
intro: 通过提交注释 API，可以创建和编辑与特定提交相关的注释。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e959f04a9df15d2d9ce2765d2669cce7e8de0e5b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147065344'
---
## 关于提交注释 API

通过提交注释 API，可以创建和编辑与特定提交相关的注释。

### 提交评论的自定义媒体类型

以下是提交评论支持的媒体类型。 可在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

有关详细信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。
