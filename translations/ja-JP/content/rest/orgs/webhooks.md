---
title: Organization webhook
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066843'
---
## Organization webhook API について

Organization の Webhook を使用すると、組織で特定のイベントが発生した場合に必ず HTTP `POST` ペイロードを受け取ることができます。 {% data reusables.webhooks.webhooks-rest-api-links %}

サブスクライブできるアクションの詳細については、「[{% data variables.product.prodname_dotcom %} イベントの種類](/developers/webhooks-and-events/github-event-types)」を参照してください。

### スコープと制約事項

Organization の webhook に対するすべてのアクションでは、認証ユーザが管理対象の Organization の管理者である必要があります。 さらに、OAuth トークンには `admin:org_hook` のスコープが必要です。 詳細については、「[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps)」 (OAuth アプリのスコープ) を参照してください。

webhook 設定に存在する可能性がある機密データを保護するために、次のアクセス制御ルールも適用します。

- OAuth アプリケーションが、それによって作成されたのではない webhook をリスト、表示、編集することはできません。
- OAuth アプリケーションによって作成された webhook をユーザがリスト、表示、編集することはできません。

### webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

ベスト プラクティスについては、[ガイドを参照してください](/guides/best-practices-for-integrators/)。

#### webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 詳細については、[Webhook のヘッダー](/webhooks/event-payloads/#delivery-headers)に関する記事を参照してください。
