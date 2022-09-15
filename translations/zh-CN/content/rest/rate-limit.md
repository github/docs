---
title: 速率限制
intro: 使用速率限制 API，可以检查各种 REST API 的当前速率限制状态。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081046'
---
## 关于速率限制 API

REST API 概述文档介绍了[速率限制规则](/rest/overview/resources-in-the-rest-api#rate-limiting)。 您可以随时使用下面描述的速率限制 API 来检查您当前的速率限制状态。

### 了解您的速率限制状态

搜索 API 具有[自定义速率限制](/rest/reference/search#rate-limit)，与管理 REST API 其余部分的速率限制不同。 GraphQL API 也有[自定义速率限制](/graphql/overview/resource-limitations#rate-limit)，它与 REST API 中的速率限制不同且计算方式也不同。

出于这些原因，速率限制 API 响应对速率限制进行分类。 在 `resources` 下，你将看到四个对象：

* `core` 对象提供 REST API 中所有非搜索相关资源的速率限制状态。

* `search` 对象提供[搜索 API](/rest/reference/search) 的速率限制状态。

* `graphql` 对象提供 [GraphQL API](/graphql) 的速率限制状态。

* `integration_manifest` 对象提供 [GitHub 应用部件清单代码转换](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)终结点的速率限制状态。

有关速率限制响应中的标头和值的详细信息，请参阅“[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)”。
