---
title: 速率限制
intro: 使用 REST API 检查当前速率限制状态。
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193212'
---
## 关于速率限制

你可以在任何时候检查当前的速率限制状态。 有关速率限制规则的详细信息，请参阅“[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limiting)”。 

用于搜索项的 REST API 具有自定义速率限制，与控制其他 REST API 终结点的速率限制不同。 有关详细信息，请参阅“[搜索](/rest/search)”。 GraphQL API 也有自定义速率限制，它与 REST API 中的速率限制不同且计算方式也不同。 有关详细信息，请参阅“[资源限制](/graphql/overview/resource-limitations#rate-limit)”。 出于这些原因，API 响应会对速率限制进行分类。 在 `resources` 下，你将看到与不同类别相关的对象：

* `core` 对象提供 REST API 中所有非搜索相关资源的速率限制状态。

* `search` 对象提供用于搜索的 REST API 的速率限制状态。

* `graphql` 对象提供 GraphQL API 的速率限制状态。

* `integration_manifest` 对象提供 `POST /app-manifests/{code}/conversions` 操作的速率限制状态。 有关详细信息，请参阅“[通过清单创建 GitHub 应用](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)”。

有关速率限制响应中的标头和值的详细信息，请参阅“[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)”。
