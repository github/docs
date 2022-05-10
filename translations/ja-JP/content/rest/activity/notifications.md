---
title: 通知
intro: 'The Notifications API lets you manage {% data variables.product.product_name %} notifications.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Notifications API

The Notifications API lets you manage {% data variables.product.product_name %} notifications. For more information about notifications, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."

すべての通知 API 呼び出しには、`notifications` または `repo` API スコープが必要です。  これを行うと、一部の Issue およびコミットコンテンツへの読み取り専用アクセス権が付与されます。 それぞれのエンドポイントから Issue とコミットにアクセスするには、`repo` スコープが必要です。

通知は「スレッド」として返されます。  スレッドには、Issue、プルリクエスト、またはコミットの現在のディスカッションに関する情報が含まれています。

通知は、`Last-Modified` ヘッダでポーリングするために最適化されています。  新しい通知がない場合は、`304 Not Modified` レスポンスが表示され、現在のレート制限は変更されません。  `X-Poll-Interval` ヘッダで、ポーリングを許可する頻度（秒単位）を指定します。  サーバー負荷が高い場合、長時間かかることがあります。  ヘッダに従ってください。

``` shell
# リクエストに認証を追加
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Last-Modifiedヘッダを正確に渡す
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### About notification reasons

通知 API からレスポンスを取得するとき、各ペイロードには `reason` というタイトルのキーがあります。 これらは、通知をトリガーするイベントに対応しています。

These are the potential `reason`s for receiving a notification:

| 理由名                | 説明                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | Issue に割り当てられた。                                                                                                                                                        |
| `author`           | スレッドを作成した。                                                                                                                                                             |
| `comment`          | スレッドにコメントした。                                                                                                                                                           |
| `ci_activity`      | トリガーした{% data variables.product.prodname_actions %} ワークフローの実行が完了した。                                                                                                    |
| `invitation`       | リポジトリへのコントリビューションへの招待を承諾した。                                                                                                                                            |
| `manual`           | スレッドをサブスクライブした（Issue またはプルリクエストを介して）。                                                                                                                                  |
| `mention`          | コンテンツで具体的に**@メンション**された。                                                                                                                                               |
| `review_requested` | 自分、または自分が所属している Team が、Pull Requestのレビューを求められた。{% ifversion fpt or ghec %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} が、リポジトリに[セキュリティの脆弱性](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)を発見した。{% endif %}
| `state_change`     | スレッドの状態を変更した（たとえば、Issue をクローズしたり、プルリクエストをマージしたりした）。                                                                                                                    |
| `subscribed`       | リポジトリを Watch している。                                                                                                                                                     |
| `team_mention`     | メンションされた Team に所属していた。                                                                                                                                                 |

`reason` はスレッドごとに変更され、後の通知の `reason` が異なる場合は変更される可能性があることに注意してください。

たとえば、Issue の作者である場合は、その Issue に関するその後の通知には、`author`（作者）の `reason`（理由）が含まれます。 その後、同じ Issue について**@メンション**されている場合、その後に取得する通知に `mention`（メンション）する `reason`（理由）が含まれます。 その `reason` は、再度メンションされたかどうかにかかわらず、`mention` として残ります。
