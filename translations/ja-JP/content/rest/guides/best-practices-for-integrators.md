---
title: インテグレーターのためのベストプラクティス
intro: '{% data variables.product.prodname_dotcom %} APIと確実にやり取りできるアプリケーションを構築し、ユーザに最高のエクスペリエンスを提供しましょう。'
redirect_from:
  - /guides/best-practices-for-integrators/
  - /v3/guides/best-practices-for-integrators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


GitHubプラットフォームとの統合に興味はありますか。 [同じことを思っている仲間がいますよ](https://github.com/integrations)。 このガイドは、ユーザに最高のエクスペリエンスを提供し、かつAPIと確実にやり取りするアプリを構築するために役立ちます。

### GitHubから配信されるペイロードの機密を確保する

[GitHubから送信されたペイロード][event-types]の機密を確保することは非常に重要です。 ペイロードでパスワードなどの個人情報が送信されることはないものの、いかなる情報であれ漏洩することは好ましくありません。 コミッターのメールアドレスやプライベートリポジトリの名前などは、機密性が求められる場合があります。

いくつかのステップを踏むことで、GitHubから配信されるペイロードを安全に受信できます。

1. 受信サーバーは必ずHTTPS接続にしてください。 デフォルトでは、GitHubはペイロードを配信する際にSSL証明書を検証します。{% if currentVersion == "free-pro-team@latest" %}
1. [フック配信時に使用するIPアドレス](/github/authenticating-to-github/about-githubs-ip-addresses)をサーバーの許可リストに追加できます。 正しいIPアドレスを常に確認していることを確かめるため、[`/meta`エンドポイントを使用して](/rest/reference/meta#meta)GitHubが使用するアドレスを見つけることができます。{% endif %}
1. ペイロードがGitHubから配信されていることを確実に保証するため、[シークレットトークン](/webhooks/securing/)を提供します。 シークレットトークンを強制することにより、サーバーが受信するあらゆるデータが確実にGitHubから来ていることを保証できます。 サービスの*ユーザごと*に異なるシークレットトークンを提供するのが理想的です。 そうすれば、1つのトークンが侵害されても、他のユーザは影響を受けません。

### 同期作業より非同期作業を優先する

GitHubは、webhookペイロードを受信後{% if currentVersion == "free-pro-team@latest" %}10{% else %}30{% endif %}秒以内にインテグレーションが応答することを求めています。 サービスの応答時間がそれ以上になると、GitHubは接続を中止し、ペイロードは失われます。

サービスの完了時間を予測することは不可能なので、「実際の作業」のすべてはバックグラウンドジョブで実行すべきです。 バックグラウンドジョブのキューや処理を扱えるライブラリには、[Resque](https://github.com/resque/resque/) (Ruby用)、[RQ](http://python-rq.org/) (Python用)、[RabbitMQ](http://www.rabbitmq.com/)などがあります。

バックグラウンドジョブが実行中でも、GitHubはサーバが{% if currentVersion == "free-pro-team@latest" %}ten{% else %}thirty{% endif %}秒以内に応答することを求めていることに注意してください。 サーバは何らかの応答を送信することにより、ペイロードの受信を確認する必要があります。 サービスがペイロードについての確認を可能な限り速やかに行うことは非常に重要です。そうすることにより、サーバがリクエストを継続するかどうか正確に報告できます。

### GitHubへの応答時に適切なHTTPステータスコードを使用する

各webhookには、デプロイメントが成功したかどうかを列挙する独自の「最近のデリバリ」セクションがあります。

![[Recent Deliveries] ビュー](/assets/images/webhooks_recent_deliveries.png)

ユーザへの通知には、適切なHTTPステータスコードを使用するべきです。 (デフォルトでないブランチから配信されたペイロードなど) 処理できないペイロードの受信を知らせるため、`201`や`202`といったコードを使用できます。 `500`のエラーコードは、致命的な障害に用いましょう。

### ユーザにできるだけ多くの情報を提供する

ユーザはGitHubに返信したサーバーの応答を調べることができます。 メッセージは明確で参考になるものとしてください。

![ペイロードレスポンスの表示](/assets/images/payload_response_tab.png)

### APIが送信するあらゆるAPIに従う

GitHubは、リダイレクトのステータスコードを提供することにより、リソースがいつ移動したかを明示します。 このリダイレクトに従ってください。 すべてのリダイレクト応答は、`Location`ヘッダに、移動する新しいURIを設定します。 リダイレクトを受け取ったら、削除する可能性がある非推奨のパスをリクエストしている場合、新しいURIにしたがってコードを更新するようお勧めします。

アプリケーションをリダイレクトに従うよう設計する際に気をつけるべき[HTTPステータスコードのリスト](/rest#http-redirects)をご用意しています。

### 手動でURLをパースしない

APIレスポンスには、URLの形でデータが含まれていることがよくあります。 たとえば、リポジトリをリクエストするときは、リポジトリをクローンするために使用できるURLの付いた`clone_url`というキーを送信します。

アプリケーションの安定性を保つため、このデータをパースしようとしたり、先のURLの形式を予想して作成しようとしたりしないでください。 URLを変更した場合、アプリケーションが壊れるおそれがあります。

たとえば、ページネーションされた結果を扱う際は、末尾に`?page=<number>`を付けてURLを構築したいと思うことがあります。 この誘惑に負けてはなりません。 [ページネーションに関するガイド](/guides/traversing-with-pagination)には、ページネーションされた結果を安全に扱うための信頼できるヒントがいくつか掲載されています。

### イベントの処理前にイベントのタイプとアクションを確認する

[webhookのイベントタイプ][event-types]は複数あり、各イベントは複数のアクションを持つことができます。 GitHubの機能セットが増えるにつれて、新しいイベントタイプを追加したり、既存のイベントタイプに新しいアクションを追加したりすることがあります。 Webhookの処理を行う前に、イベントのタイプとアクションをアプリケーションが明示的に確認するようにしてください。 `X-GitHub-Event`リクエストヘッダは、受信したイベントの種類を知り、それを適切に処理するために利用できます。 同様に、ペイロードにはトップレベルの`action`キーがあり、関連オブジェクトに対して実行されたアクションを知るために利用できます。

たとえば、GitHubのwebhookを [Send me **everything**] に設定している場合、新しいイベントのタイプやアクションが追加されると、アプリケーションはそれらの受信を開始します。 ですから、**あらゆる類のcatch-all else構文は使用をお勧めしません**。 たとえば、次のコード例をご覧ください。

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

このコード例では、`repository`または`issues`イベントを受信すると、`process_repository`および`process_issues`メソッドが正しく呼び出されます。 しかし、他のイベントタイプでは、`process_pull_requests`が呼び出されることになります。 新しいイベントタイプが追加されると、誤った動作を引き起こすことになり、新たなイベントタイプは`pull_request`イベントと同じ方法で処理されることになるでしょう。

代わりに、イベントのタイプを明示的に確認し、それに応じて処理するようお勧めします。 次のコード例では、`pull_request`イベントを明示的に確認し、`else`節は新しいイベントタイプを受信したことを単に記録しています。

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

各イベントも複数のアクションを持つことができるため、アクションも同様に確認することをお勧めします。 たとえば、[`IssuesEvent`](/webhooks/event-payloads/#issues)ではいくつかのアクションが可能です。 例としては、Issueが作成されたときの`opened`、Issueがクローズしたときの`closed`、Issueが誰かに割り当てられたときの`assigned`が挙げられます。

イベントタイプを追加するのと同じように、既存のイベントに新しいアクションを追加できます。 ですから、イベントのアクションを確認する場合も**>あらゆる類のcatch-all else構文は使用をお勧めしません**。 代わりに、イベントタイプの例と同様、イベントのアクションも明示的に確認するようお勧めします。 この例は、上記のイベントタイプで示したものと非常に似通ったものです。

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

この例では、始めに`closed`アクションを確認してから、`process_closed`メソッドを呼びます。 未確認のアクションは、今後の参考のために記録されます。

{% if currentVersion == "free-pro-team@latest" %}

### レート制限の扱い

GitHub APIの[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)は、APIを高速に保ち、すべての人が利用できるために設けられています。

レート制限に達した場合、リクエストを中止し、許可された後で再度お試しください。 リクエストを中止しない場合は、アプリケーションを禁止する場合があります。

[レート制限ステータスの確認](/rest/reference/rate-limit)はいつでも可能です。 レート制限を確認しても、その通信量はレート制限に影響しません。

### 不正利用レート制限の扱い

APIの可用性を確保するために用いられているもう1つの方法が[不正利用レート制限](/rest/overview/resources-in-the-rest-api#abuse-rate-limits)です。 この制限に到達することを避けるため、アプリケーションは以下のガイドラインに従うようにしてください。

* 認証済みのリクエストを行うか、アプリケーションのクライアントIDとシークレットを使用してください。 認証されていないリクエストには、より厳格な不正利用レート制限が適用されます。
* 単一のユーザまたはクライアントIDに順番にリクエストを行ってください。 単一のユーザまたはクライアントIDのリクエストは同時に行わないでください。
* 単一のユーザまたはクライアントIDで多数の`POST`、`PATCH`、`PUT`、`DELETE`リクエストを行う場合には、リクエストごとに少なくとも1秒の間隔をとってください。
* 制限がかかっている間は、速さを遅くするため`Retry-After`レスポンスヘッダを使用します。 `Retry-After`ヘッダの値は常に整数とします。この値は、再度リクエストを行う前に待機すべき秒数を示します。 たとえば、`Retry-After: 30`は、次のリクエストを送信するまで30秒待機する必要があることを意味します。
* コメント、プルリクエストなど、通知をトリガーするようなコンテンツを作成するリクエストは、さらなる制限が課される場合があり、レスポンスに`Retry-After`ヘッダが含まれません。 さらなる制限を避けるため、こうしたコンテンツを合理的なペースで作成してください。

当社は、可用性確保のため必要に応じてこれらのガイドラインを変更する権利を留保します。

{% endif %}

### APIエラーの扱い

あなたのコードが決してバグを発生させなかったとしても、APIにアクセスしようとするとき立て続けにエラーが発生することがるかもしれません。

繰り返し表示される`4xx`や `5xx`のステータスコードを無視せずに、APIと正しくやり取りしていることを確認してください。 たとえば、エンドポイントが文字列を要求しているのに数値を渡している場合、`5xx`検証エラーが発生し、呼び出しは成功しません。 同様に、許可されていないエンドポイントまたはは存在しないエンドポイントにアクセスしようとすると、`4xx`エラーが発生します。

繰り返し発生する検証エラーを意図的に無視すると、不正利用によりアプリケーションが停止されることがあります。

[event-types]: /webhooks/event-payloads

[event-types]: /webhooks/event-payloads
