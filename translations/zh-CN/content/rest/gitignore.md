---
title: Gitignore
intro: Gitignore API 提取可用于忽略文件和目录的 `.gitignore` 模板。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
ms.openlocfilehash: 082b626aac4af8dcdf435761447caeb015a608db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147092884'
---
## 关于 Gitignore API

通过 API 在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上创建新存储库时，可以指定一个 [.gitignore 模板](/github/getting-started-with-github/ignoring-files)在创建后应用于存储库。 .gitignore 模板 API 可列出模板，并从 {% data variables.product.product_name %} [.gitignore 存储库](https://github.com/github/gitignore)中获取模板。

### gitignore 的自定义媒体类型

获取 gitignore 模板时，您可以使用以下自定义媒体类型。

    application/vnd.github.VERSION.raw

有关详细信息，请参阅“[媒体类型](/rest/overview/media-types)”。
