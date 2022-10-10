---
title: GitHub Actions 缓存
allowTitleToDifferFromFilename: true
shortTitle: Cache
intro: '{% data variables.product.prodname_actions %} 缓存 API 可用于查询和管理存储库的 {% data variables.product.prodname_actions %} 缓存。'
topics:
  - API
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: faaa0f8c0f182f2693039c017e8898ca9ea878ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147430395'
---
## 关于缓存 API

{% data variables.product.prodname_actions %} 缓存 API 可用于查询和管理存储库的 {% data variables.product.prodname_actions %} 缓存。 {% ifversion actions-cache-management %}你还可以安装 {% data variables.product.prodname_cli %} 扩展来从命令行管理缓存。 {% endif %}有关详细信息，请参阅“[缓存依赖项以加快工作流](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#managing-caches)”。
