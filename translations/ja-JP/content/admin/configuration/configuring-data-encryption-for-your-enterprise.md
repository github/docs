---
title: Enterprise 向けのデータ暗号化を設定する
shortTitle: データ暗号化を設定する
intro: 保存時の暗号化時、独自の暗号化キーを提供し、暗号化ポリシーに基づいてデータを暗号化できます。
versions:
  github-ae: '*'
---

{% note %}

**注釈:** お客様が管理するキーを使用した保存時の暗号化設定は現在ベータであり、変更される可能性があります。

{% endnote %}

### データ暗号化について

高レベルのセキュリティを提供するため、{% data variables.product.product_name %} は、データセンターでの保存中、およびユーザのマシンとデータセンター間でのデータの転送中にデータを暗号化します。

転送中の暗号化では、{% data variables.product.product_name %} は Transport Layer Security (TLS) を使用します。 保存データの暗号化では、{% data variables.product.product_name %} がデフォルトの RSA キーを提供します。 Enterprise を初期化した後、代わりに独自のキーを提供することができます。 キーは、PEM 形式の 2048 ビット RSA 秘密鍵である必要があります。

指定したキーは、{% data variables.product.company_short %} が管理する Key Vault の FIPS 140-2 準拠のハードウェアセキュリティモジュール (HSM) に保存されます。

暗号鍵を設定するには、REST API を使用します。 暗号のステータスの確認、暗号鍵の更新、暗号鍵の無効化など、多くの API エンドポイントがあります。 キーを無効にすると、Enterprise がフリーズするためご注意ください。 API エンドポイントの詳細については、REST API ドキュメントの「[保存時の暗号化](/rest/reference/enterprise-admin#encryption-at-rest)」を参照してください。

### 暗号鍵の追加または更新

新しい暗号鍵は、必要に応じて何度でも追加できます。 新しい鍵を追加すると、古い鍵は破棄されます。 鍵を更新しても、Enterprise でダウンタイムが発生することはありません。

2048 ビットの RSA 秘密鍵は、PEM 形式である必要があります（たとえば、_private-key.pem_ というファイル）。

   ```
   -----ここから RSA 秘密鍵-----
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   -----ここまで RSA 秘密鍵-----
   ```

1. キーを追加するには、`PATCH /enterprise/encryption` エンドポイントを使用し、*~/private-key.pem* を秘密鍵へのパスに置き換えます。

   ```shell
   curl -X PATCH http(s)://<em>hostname</em>/api/v3/enterprise/encryption \
     -d "{ \"key\": \"$(awk '{printf "%s\\n", $0}' ~/private-key.pem)\" }"
   ```

2. 必要に応じて、更新作業のステータスを確認します。

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### 暗号鍵を無効化する

たとえば違反が発生した場合に Enterprise を凍結するには、暗号鍵を無効としてマークすることで、保存時の暗号化を無効にすることができます。

1. 保存時に鍵と暗号化を無効にするには、`DELETE /enterprise/encryption` エンドポイントを使用します。 この作業で鍵が完全に削除されるわけではありません。

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. 必要に応じて、削除作業のステータスを確認します。 保存時に暗号化を無効にするには、約 10 分かかります。

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

暗号鍵を無効にした後で Enterprise の凍結を解除するには、サポートにお問い合わせください。 詳しい情報については、「[{% data variables.contact.enterprise_support %} について](/admin/enterprise-support/about-github-enterprise-support)」を参照してください。

### 参考リンク

- REST APIドキュメントの「[保存時の暗号化](/rest/reference/enterprise-admin#encryption-at-rest)」 
