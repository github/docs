---
title: 标星
intro: 星标 API 允许为存储库添加书签。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064248'
---
## 关于星标 API

星标 API 允许为存储库添加书签。 显示在仓库旁边的星标表示大致的兴趣程度。 星标对通知或活动馈送没有影响。 有关详细信息，请参阅“[使用星标保存存储库](/get-started/exploring-projects-on-github/saving-repositories-with-stars)”。

### 标星与 关注

2012 年 8 月，我们在 {% data variables.product.prodname_dotcom %} 上[更改了关注工作的方式](https://github.com/blog/1204-notifications-stars)。 许多 API 客户端应用程序可能在使用原始的“观察程序”端点来访问此数据。 现在，可以开始使用“星标”端点了（如下所述）。 有关详细信息，请参阅[观察程序 API 更改帖子](https://developer.github.com/changes/2012-09-05-watcher-api/)和“[存储库观察 API](/rest/reference/activity#watching)”。

### 标星的自定义媒体类型

标星 REST API 有一个支持的自定义媒体类型。 使用此自定义媒体类型时，你将收到带有 `starred_at` 时间戳属性的响应，该属性指示星标创建的时间。 该响应还有第二个属性，该属性包括在不使用自定义媒体类型时返回的资源。 包含资源的属性将为 `user` 或 `repo`。

    application/vnd.github.star+json

有关媒体类型的详细信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。
