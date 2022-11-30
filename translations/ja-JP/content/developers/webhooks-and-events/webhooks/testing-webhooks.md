---
title: webhookのテスト
intro: '{% data variables.product.prodname_dotcom %} で webhook のデリバリを確認します。これには、HTTP リクエストとペイロード、およびレスポンスが含まれます。'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---
[ローカルサーバーを設定](/webhooks/configuring/)したら、次にコードを制限までプッシュしてみることができます。 そのために、GitHub の webhook ビューは、デプロイされたペイロードをテストするためのツールを提供しています。

### 最近のデリバリの一覧表示

すべての webhook には独自の \[Recent Deliveries\] (最近のデリバリ) セクションがあり、デリバリの成功（緑色のチェック）や失敗（赤色の x）が一目でわかります。 また、各デリバリの試行時期を特定することもできます。

{% data variables.product.product_name %} は、各 webhook デリバリのログを {% if currentVersion == "free-pro-team@latest" %} 30 {% else %} 8 {% endif %} 日間保持します。

![[Recent Deliveries] ビュー](/assets/images/webhooks_recent_deliveries.png)

### 結果を詳しく確認する

個別のデリバリを展開すると、GitHub がサーバーに送信しようとしている情報を*正確に*確認できます。 これには、HTTP リクエストとレスポンスの両方が含まれます。

#### リクエスト

webhook デリバリ ビューには、GitHub によって送信されたヘッダに関する情報が表示されます。 これには、JSON ペイロードに関する詳細も含まれています。

![ペイロードリクエストの表示](/assets/images/payload_request_tab.png)

#### レスポンス

[Response] タブには、サーバーが GitHub からペイロードを受信した後の応答方法が一覧表示されます。 これには、ステータスコード、ヘッダ、およびレスポンス本文内の追加データが含まれます。

![ペイロードレスポンスの表示](/assets/images/payload_response_tab.png)
