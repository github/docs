---
title: 事件
intro: '事件 API 是 {% data variables.product.prodname_dotcom %} 事件的只读 API。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064304'
---
这些事件推动站点上的各种活动流。

事件 API 可以返回 {% data variables.product.product_name %} 上的活动触发的不同类型事件。 有关可从事件 API 接收的特定事件的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 事件类型](/developers/webhooks-and-events/github-event-types)”。 存储库问题的事件 API 也可用。 有关详细信息，请参阅“[议题事件 API](/rest/reference/issues#events)”。

事件针对使用 "ETag" 标头的轮询进行了优化。 如果未触发任何新事件，您将会看到一个 "304 Not Modified" 响应，并且您的当前速率限制不受影响。 还有一个 "X-Poll-Interval" 标头，用于指定允许您轮询的间隔时间（以秒为单位）。 在服务器负载较高时，该时间可能会增加。 请遵循标头指示。

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

时间表中只包含过去 90 天内创建的事件。 超过 90 天的活动将不包括在内（即使时间表中的活动总数不到 300 个）。
