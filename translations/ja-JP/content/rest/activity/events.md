---
title: イベント
intro: 'イベント API は、{% data variables.product.prodname_dotcom %} イベントへの読み取り専用 API です。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064307'
---
これらのイベントは、サイト上のさまざまなアクティビティストリームを強化します。

イベント API は、{% data variables.product.product_name %} でのアクティビティによってトリガーされるさまざまなタイプのイベントを返すことができます。 イベント API から受け取ることができる特定のイベントに関する詳細については、「[{% data variables.product.prodname_dotcom %} イベントの種類](/developers/webhooks-and-events/github-event-types)」を参照してください。 リポジトリの問題のイベント API も使用できます。 詳細については、[issue イベント API](/rest/reference/issues#events) に関する記事を参照してください。

イベントは「ETag」ヘッダでポーリングするために最適化されています。 新しいイベントがトリガーされていない場合は、「304 Not Modified」というレスポンスが表示され、現在のレート制限は変更されません。 また、ポーリングを許可する頻度（秒単位）を指定する「X-Poll-Interval」ヘッダもあります。 サーバー負荷が高い場合、長時間かかることがあります。 ヘッダに従ってください。

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

過去 90 日以内に作成されたイベントのみがタイムラインに含まれます。 90 日以上経過しているイベントは含まれません（タイムラインのイベントの総数が300 未満の場合でも）。
