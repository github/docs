---
title: Webhook のセキュリティ保護
intro: 'セキュリティ上の理由から、サーバーが想定されているる {% data variables.product.prodname_dotcom %} リクエストのみを受信していることを確認する必要があります。'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c3597365ae7cf9f96375201d6938c4f6675a8eae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707480'
---
ペイロードを受信するようにサーバーが設定されると、設定したエンドポイントに送信されたペイロードがリッスンされます。 セキュリティ上の理由から、GitHub からのリクエストに制限することをお勧めします。 これを行うにはいくつかの方法があります。たとえば、GitHub の IP アドレスからのリクエストを許可することですが、はるかに簡単な方法は、シークレットトークンを設定して情報を検証することです。

{% data reusables.webhooks.webhooks-rest-api-links %}

## シークレットトークンを設定する

シークレットトークンは、GitHub とサーバーの 2 か所に設定する必要があります。

GitHub にトークンを設定するには：

1. Webhook を設定しているリポジトリに移動します。
2. シークレットテキストボックスに入力します。 エントロピーの高いランダムな文字列を使用します (たとえば、ターミナルで `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` の出力を取得する)。
![Webhook シークレット トークンのフィールド](/assets/images/webhook_secret_token.png)
3. **[webhook の更新]** をクリックします。

次に、このトークンを保存する環境変数をサーバーに設定します。 通常、これは実行と同じくらい簡単です。

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

トークンをアプリにハードコーディング **しないでください**。

## GitHub からのペイロードを検証する

シークレットトークンが設定されると、{% data variables.product.product_name %} はそれを使用して各ペイロードでハッシュ署名を作成します。 このハッシュ署名は、`x-hub-signature-256` として各要求のヘッダーに含まれています。

{% ifversion fpt or ghes or ghec %} {% note %}

**注:** 下位互換性のために、SHA-1 ハッシュ関数を使用して生成される `x-hub-signature` ヘッダーも含まれています。 可能であれば、セキュリティを強化するために `x-hub-signature-256` ヘッダーを使用することをお勧めします。 以下の例は、`x-hub-signature-256` ヘッダーの使用を示しています。

{% endnote %} {% endif %}

たとえば、webhook をリッスンする基本的なサーバーがある場合、次のように設定されている可能性があります。

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

目的は、`SECRET_TOKEN` を使用してハッシュを計算し、結果が {% data variables.product.product_name %} のハッシュと一致することを確認することです。 {% data variables.product.product_name %} は HMAC hex digest を使用してハッシュを計算するため、サーバーを次のように再設定できます。

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**注:** Webhook ペイロードには Unicode 文字を含めることができます。 言語とサーバーの実装で文字エンコーディングが指定されている場合は、ペイロードをUTF-8として扱うようにしてください。

{% endnote %}

言語とサーバーの実装は、この例で使用したコードとは異なる場合があります。 ただし、次のようないくつかの非常に重要な事項があります。

* どの実装を使用する場合でも、ハッシュ署名は `sha256=` で始まり、シークレット トークンのキーとペイロード本文を使用します。

* プレーン `==` 演算子の使用は **お勧めしません**。 [`secure_compare`][secure_compare] のようなメソッドは、"定数時間" の文字列比較を実行します。これは、通常の等式演算子に対する特定のタイミング攻撃を軽減するのに役立ちます。

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
