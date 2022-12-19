---
ms.openlocfilehash: c2cf4d430fd7009afd8c17a82b03941a33ec68f7
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509239"
---
## <a name="webhooks"></a>Webhooks

Organization の Webhook を使用すると、組織で特定のイベントが発生した場合に必ず HTTP `POST` ペイロードを受け取ることができます。 {% data reusables.webhooks.webhooks-rest-api-links %}

サブスクライブできるアクションの詳細については、「[{% data variables.product.prodname_dotcom %} event types](/developers/webhooks-and-events/github-event-types)」 ({% data variables.product.prodname_dotcom %} のイベントの種類) を参照してください。

### <a name="scopes--restrictions"></a>スコープおよび制限

Organization の webhook に対するすべてのアクションでは、認証ユーザが管理対象の Organization の管理者である必要があります。 さらに、OAuth トークンには `admin:org_hook` のスコープが必要です。 詳細については、「[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps)」 (OAuth アプリのスコープ) を参照してください。

webhook 設定に存在する可能性がある機密データを保護するために、次のアクセス制御ルールも適用します。

- OAuth アプリケーションが、それによって作成されたのではない webhook をリスト、表示、編集することはできません。
- OAuth アプリケーションによって作成された webhook をユーザがリスト、表示、編集することはできません。

### <a name="receiving-webhooks"></a>webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

ベスト プラクティスについては、[ガイドを参照してください](/guides/best-practices-for-integrators/)。

#### <a name="webhook-headers"></a>webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 詳細については、[Webhook のヘッダー](/webhooks/event-payloads/#delivery-headers)に関する記事を参照してください。