---
title: インテグレーターのためのベストプラクティス
intro: '信頼性を持って{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIとやりとりをするアプリケーションを構築し、ユーザに最善の体験を提供してください。'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Integrator best practices
ms.openlocfilehash: 76e0a405394529bb8b40b0a0af10d5e19fbbf3a5
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882272'
---
GitHubプラットフォームとの統合に興味はありますか。 [あなたには良い仲間がいます](https://github.com/integrations)。 このガイドは、ユーザーに最適なエクスペリエンスを提供するアプリを構築 *し、* API と確実に対話できるようにするのに役立ちます。 

## GitHubから配信されるペイロードの機密を確保する

[GitHub から送信されるペイロード][event-types]の機密を確保することは非常に重要です。 ペイロード内で個人情報 (パスワードなど) が送信されることはありませんが *、情報の* 漏洩は適切ではありません。 コミッターのメールアドレスやプライベートリポジトリの名前などは、機密性が求められる場合があります。

いくつかのステップを踏むことで、GitHubから配信されるペイロードを安全に受信できます。

1. 受信サーバーは必ずHTTPS接続にしてください。 既定では、GitHub はペイロードを配信する際に SSL 証明書を検証します。{% ifversion fpt or ghec %}
1. [フック配信時に使用する IP アドレス](/github/authenticating-to-github/about-githubs-ip-addresses)をサーバーの許可リストに追加できます。 正しい IP アドレスを常に確認していることを確かめるため、[`/meta` エンドポイントを使用](/rest/reference/meta#meta)して、GitHub が使うアドレスを見つけることができます。{% endif %}
1. ペイロードが GitHub から配信されていることを確実に保証するため、[シークレット トークン](/webhooks/securing/)を提供します。 シークレットトークンを強制することにより、サーバーが受信するあらゆるデータが確実にGitHubから来ていることを保証できます。 理想的には、サービスの *ユーザーごとに* 異なるシークレット トークンを指定する必要があります。 そうすれば、1つのトークンが侵害されても、他のユーザは影響を受けません。

## 同期作業より非同期作業を優先する

GitHub は、Webhook ペイロードを受信後 {% ifversion fpt or ghec %}10{% else %}30{% endif %} 秒以内に統合が応答することを求めています。 サービスの応答時間がそれ以上になると、GitHubは接続を中止し、ペイロードは失われます。

サービスの完了時間を予測することは不可能なので、「実際の作業」のすべてはバックグラウンドジョブで実行すべきです。 バックグラウンド ジョブのキューや処理を扱えるライブラリの例としては、[Resque](https://github.com/resque/resque/) (Ruby 用)、[RQ](http://python-rq.org/) (Python 用)、[RabbitMQ](http://www.rabbitmq.com/) (Java 用) などがあります。

バックグラウンド ジョブが実行中でも、GitHub はサーバーが {% ifversion fpt or ghec %}10{% else %}30{% endif %} 秒以内に応答することを求めていることに注意してください。 サーバは何らかの応答を送信することにより、ペイロードの受信を確認する必要があります。 サービスがペイロードについての確認を可能な限り速やかに行うことは非常に重要です。そうすることにより、サーバがリクエストを継続するかどうか正確に報告できます。

## GitHubへの応答時に適切なHTTPステータスコードを使用する

各webhookには、デプロイメントが成功したかどうかを列挙する独自の「最近のデリバリ」セクションがあります。

![[Recent Deliveries] ビュー](/assets/images/webhooks_recent_deliveries.png)

ユーザへの通知には、適切なHTTPステータスコードを使用するべきです。 (既定でないブランチから配信されたペイロードなど) 処理されないペイロードの受信確認のため、`201` や `202` などのコードを使えます。 `500` エラー コードは、致命的な障害用に確保してください。

## ユーザにできるだけ多くの情報を提供する

ユーザはGitHubに返信したサーバーの応答を調べることができます。 メッセージは明確で参考になるものとしてください。

![ペイロードレスポンスの表示](/assets/images/payload_response_tab.png)

## APIが送信するあらゆるAPIに従う

GitHubは、リダイレクトのステータスコードを提供することにより、リソースがいつ移動したかを明示します。 このリダイレクトに従ってください。 すべてのリダイレクト応答では、`Location` ヘッダーに、移動する新しい URI を設定します。 リダイレクトを受け取ったら、削除する可能性がある非推奨のパスをリクエストしている場合、新しいURIにしたがってコードを更新するようお勧めします。

リダイレクトに従うようにアプリを設計するときに注意する必要がある [HTTP 状態コードスの一覧](/rest#http-redirects)を用意してあります。

## 手動でURLをパースしない

APIレスポンスには、URLの形でデータが含まれていることがよくあります。 たとえば、リポジトリを要求するときは、リポジトリをクローンするために使用できる URL を含む `clone_url` というキーを送信します。

アプリケーションの安定性を保つため、このデータをパースしようとしたり、先のURLの形式を予想して作成しようとしたりしないでください。 URLを変更した場合、アプリケーションが壊れるおそれがあります。

たとえば、ページネーションされた結果を処理するときは、末尾に `?page=<number>` の付いた URL を構築したいことがよくあります。 この誘惑に負けてはなりません。 [ページネーションに関するガイド](/guides/traversing-with-pagination)では、ページネーションされた結果を安全に扱うための信頼できるヒントがいくつか提供されています。

## イベントの処理前にイベントのタイプとアクションを確認する

[Webhook のイベント タイプ][event-types]は複数あり、各イベントは複数のアクションを持つことができます。 GitHubの機能セットが増えるにつれて、新しいイベントタイプを追加したり、既存のイベントタイプに新しいアクションを追加したりすることがあります。 Webhookの処理を行う前に、イベントのタイプとアクションをアプリケーションが明示的に確認するようにしてください。 `X-GitHub-Event` 要求ヘッダーを使って、受信したイベントの種類を知り、適切に処理することができます。 同様に、ペイロードには最上位レベルの `action` キーがあり、関連オブジェクトに対して実行されたアクションを知るために利用できます。

たとえば、GitHub の Webhook を "**すべてのもの** を送信する" ように設定している場合、新しいイベントの種類やアクションが追加されると、アプリケーションはそれらを受信し始めます。 したがって、**どのような種類の catch-all else 構文も使わないことをお勧めします**。 たとえば、次のコード例をご覧ください。

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

このコード例では、`repository` または `issues` イベントを受信した場合、`process_repository` と `process_issues` メソッドが正しく呼び出されます。 しかし、他のすべてのイベントの種類では、`process_pull_requests` が呼び出されます。 新しいイベントの種類が追加されると、誤った動作になり、新しいイベントの種類は `pull_request` イベントと同じ方法で処理されます。

代わりに、イベントのタイプを明示的に確認し、それに応じて処理するようお勧めします。 次のコード例では、`pull_request` イベントを明示的にチェックし、`else` 句では新しいイベントの種類を受信したことを単に記録します。

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

各イベントも複数のアクションを持つことができるため、アクションも同様に確認することをお勧めします。 たとえば、[`IssuesEvent`](/webhooks/event-payloads/#issues) ではいくつかのアクションが考えられます。 たとえば、issue が作成されたときの `opened`、issue が閉じられたときの `closed`、issue が誰かに割り当てられたときの `assigned` などです。

イベントタイプを追加するのと同じように、既存のイベントに新しいアクションを追加できます。 したがって、イベントのアクションをチェックするときも、**どのような種類の catch-all else 構文も使わないことをお勧めします**。 代わりに、イベントタイプの例と同様、イベントのアクションも明示的に確認するようお勧めします。 この例は、上記のイベントタイプで示したものと非常に似通ったものです。

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

この例では、始めに `closed` アクションを調べてから、`process_closed` メソッドを呼び出します。 未確認のアクションは、今後の参考のために記録されます。

{% ifversion fpt or ghec or ghae %}

## レート制限の扱い

GitHub API の[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)により、API が高速で、すべてのユーザーが利用できることが保証されます。

レート制限に達した場合、リクエストを中止し、許可された後で再度お試しください。 リクエストを中止しない場合は、アプリケーションを禁止する場合があります。

いつでも[レート制限ステータスを調べる](/rest/reference/rate-limit)ことができます。 レート制限を確認しても、その通信量はレート制限に影響しません。

## セカンダリレート制限の扱い

[セカンダリ レート制限](/rest/overview/resources-in-the-rest-api#secondary-rate-limits)は、API の可用性を保証するもう 1 つの方法です。
この制限に到達することを避けるため、アプリケーションは以下のガイドラインに従うようにしてください。

* 認証済みのリクエストを行うか、アプリケーションのクライアントIDとシークレットを使用してください。 認証されていない要求には、より強いセカンダリ レート制限が適用されます。
* 単一のユーザまたはクライアントIDに順番にリクエストを行ってください。 単一のユーザーまたはクライアント ID の要求を同時に行わないでください。
* 単一のユーザーまたはクライアント ID で多数の `POST`、`PATCH`、`PUT`、`DELETE` 要求を行う場合は、各要求の間を少なくとも 1 秒空けてください。
* 制限されているときは、`Retry-After` 応答ヘッダーを使って速度を下げます。 `Retry-After` ヘッダーの値は常に整数であり、もう一度要求を行う前に待機する秒数を示します。 たとえば、`Retry-After: 30` は、次の要求を送信する前に 30 秒待つ必要があることを意味します。
* issue、コメント、pull request など、通知をトリガーするコンテンツを作成する要求は、さらに制限される場合があり、応答に `Retry-After` ヘッダーは含まれません。 さらに制限されるのを避けるため、このようなコンテンツは合理的なペースで作成してください。

当社は、可用性確保のため必要に応じてこれらのガイドラインを変更する権利を留保します。

{% endif %}

## APIエラーの扱い

あなたのコードが決してバグを発生させなかったとしても、APIにアクセスしようとするとき立て続けにエラーが発生することがるかもしれません。

繰り返し表示される `4xx` や `5xx` の状態コードを無視せず、API と正しくやり取りしていることを確認する必要があります。 たとえば、エンドポイントが文字列を要求しているのに数値を渡している場合は、`5xx` 検証エラーを受け取り、呼び出しは成功しません。 同様に、許可されていないエンドポイントまたは存在しないエンドポイントにアクセスしようとすると、`4xx` エラーが発生します。

繰り返し発生する検証エラーを意図的に無視すると、不正利用によりアプリケーションが停止されることがあります。

[event-types]: /webhooks/event-payloads
