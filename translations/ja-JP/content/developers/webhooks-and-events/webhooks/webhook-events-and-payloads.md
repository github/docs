---
title: Webhook のイベントとペイロード
intro: 各 Webhook イベントが発生するタイミングと、そのペイロードに含まれる内容について説明します。
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 0592f191b463354b92c3953880c7a7a435e0b07a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165539'
---
{% data reusables.webhooks.webhooks_intro %}

このページに表示されているイベントをサブスクライブする webhook を作成できます。 各 webhook イベントには、webhook プロパティの説明とペイロードの例が含まれています。 詳細については、「[webhook の作成](/webhooks/creating/)」を参照してください。

## webhook ペイロードオブジェクトの共通プロパティ

各 webhook イベントペイロードには、イベント固有のプロパティも含まれています。 固有のプロパティは、個々のイベントタイプのセクションにあります。

キー | Type | 説明
----|------|-------------
`action` | `string` | ほとんどの webhook ペイロードには、イベントをトリガーした特定のアクティビティを含む `action` プロパティが含まれています。
{% data reusables.webhooks.sender_desc %} このプロパティは、すべての webhook ペイロードに含まれています。
{% data reusables.webhooks.repo_desc %} イベントがリポジトリ内のアクティビティから発生した場合、webhook ペイロードには `repository` プロパティが含まれます。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}詳細については、「[{% data variables.product.prodname_github_app %} を構築する](/apps/building-github-apps/)」を参照してください。

webhook イベントの一意のプロパティは、[Events API](/rest/reference/activity#events) の使用時に `payload` プロパティに含まれるプロパティと同じです。 例外の 1 つは [`push` イベント](#push)です。 `push` イベントの webhook ペイロードの一意のプロパティと Events API の `payload` プロパティは異なります。 webhook ペイロードには、より詳細な情報が含まれています。

{% tip %}

**注:** ペイロードの上限は 25 MB です。 イベントにより大きなペイロードが生成された場合、webhook は起動しません。 これは、たとえば、多数のブランチまたはタグが一度にプッシュされた場合に、`create` イベントで発生する可能性があります。 確実にデリバリが行われるよう、ペイロードサイズを監視することをお勧めします。

{% endtip %}

### デリバリヘッダ

webhook によって設定されている URL エンドポイントに配信される HTTP POST ペイロードには、いくつかの特別なヘッダが含まれています。

Header | 説明
-------|-------------|
`X-GitHub-Event`| デリバリをトリガーしたイベントの名前。
`X-GitHub-Delivery`| デリバリーを識別する [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのバージョン。
`X-GitHub-Enterprise-Host` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのホスト名。{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| このヘッダーは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で構成されている場合に送信されます。 これは要求本文の HMAC 16 進ダイジェストであり、SHA-1 ハッシュ関数と `secret` (HMAC `key` として) を使用して生成されます。{% ifversion fpt or ghes or ghec %}`X-Hub-Signature` は、既存の統合との互換性のために提供されており、代わりにより安全な `X-Hub-Signature-256` を使用することをお勧めします。{% endif %}{% endif %}
`X-Hub-Signature-256`| このヘッダーは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で構成されている場合に送信されます。 これは要求本文の HMAC 16 進ダイジェストであり、SHA-256 ハッシュ関数と `secret` (HMAC `key` として) を使用して生成されます。

また、要求の `User-Agent` にはプレフィックス `GitHub-Hookshot/` も含まれます。

### デリバリの例

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

<!-- Content after this section is automatically generated -->
