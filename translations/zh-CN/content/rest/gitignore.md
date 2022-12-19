---
title: Gitignore
intro: 使用 REST API 获取可用于忽略文件和目录的 `.gitignore` 模板。
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
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193039'
---
## 关于 gitignore

通过 API 在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上创建新存储库时，可以指定一个 [.gitignore 模板](/github/getting-started-with-github/ignoring-files)在创建后应用于存储库。 可以使用 REST API 从 {% data variables.product.product_name %} [.gitignore 存储库](https://github.com/github/gitignore)中获取 .gitignore 模板。

获取 gitignore 模板时，你可以使用 `application/vnd.github.raw` 自定义媒体类型。 有关详细信息，请参阅“[媒体类型](/rest/overview/media-types)”。
