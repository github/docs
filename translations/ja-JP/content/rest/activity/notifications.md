---
title: 通知
intro: '通知 API を使うと、{% data variables.product.product_name %} の通知を管理できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2d68f2b563578608ab66eafbb055edbe5d88d172
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064275'
---
## 通知 API について

通知 API を使うと、{% data variables.product.product_name %} の通知を管理できます。 通知について詳しくは、「[通知について](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)」をご覧ください。

すべての通知 API 呼び出しには、`notifications` または `repo` API スコープが必要です。  これを行うと、一部の Issue およびコミットコンテンツへの読み取り専用アクセス権が付与されます。 それぞれのエンドポイントから issue とコミットにアクセスするには、`repo` スコープが必要です。

通知は「スレッド」として返されます。  スレッドには、Issue、プルリクエスト、またはコミットの現在のディスカッションに関する情報が含まれています。

通知は、`Last-Modified` ヘッダーでのポーリングのために最適化されています。  新しい通知がない場合は、`304 Not Modified` 応答が表示され、現在のレート制限は変更されません。  ポーリングが許可される頻度 (秒単位) を指定する `X-Poll-Interval` ヘッダーがあります。  サーバー負荷が高い場合、長時間かかることがあります。  ヘッダに従ってください。

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### 通知理由について

通知 API からレスポンスを取得するときには、各ペイロードに `reason` というタイトルのキーがあります。 これらは、通知をトリガーするイベントに対応しています。

通知は次のような `reason` で受け取る可能性があります。

理由名 | 説明
------------|------------
`assign` | Issue に割り当てられた。
`author` | スレッドを作成した。
`comment` | スレッドにコメントした。
`ci_activity` | トリガーした {% data variables.product.prodname_actions %} ワークフローの実行が完了しました。
`invitation` | リポジトリへのコントリビューションへの招待を承諾した。
`manual` | スレッドをサブスクライブした（Issue またはプルリクエストを介して）。
`mention` | 具体的には、このコンテンツで **@mentioned** が実行されました。
`review_requested` | 自分、または自分が所属している Team が、pull request のレビューを求められました。{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} によって、リポジトリ内で[セキュリティ脆弱性](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)が検出されました。{% endif %}
`state_change` | スレッドの状態を変更した（たとえば、Issue をクローズしたり、プルリクエストをマージしたりした）。
`subscribed` | リポジトリを Watch している。
`team_mention` | メンションされた Team に所属していた。

後の通知の `reason` が異なる場合に、`reason` がスレッドごとに変更されることに注意してください。

たとえば、issue の作成者である場合は、その issue に関するその後の通知には、`author` の `reason` が含まれます。 次に、同じ issue に対して **@mentioned** が実行される場合、その後フェッチする通知には、`mention` の `reason` が含まれます。 その `reason` は、再度メンションされるかどうかにかかわらず、`mention` のままとなります。
