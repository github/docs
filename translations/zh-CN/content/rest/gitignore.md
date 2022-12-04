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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181266'
---
## 关于 Gitignore API

通过 API 在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上创建新存储库时，可以指定一个 [.gitignore 模板](/github/getting-started-with-github/ignoring-files)在创建后应用于存储库。 .gitignore 模板 API 可列出模板，并从 {% data variables.product.product_name %} [.gitignore 存储库](https://github.com/github/gitignore)中获取模板。

### gitignore 的自定义媒体类型

获取 gitignore 模板时，您可以使用以下自定义媒体类型。

    application/vnd.github.raw

有关详细信息，请参阅“[媒体类型](/rest/overview/media-types)”。
