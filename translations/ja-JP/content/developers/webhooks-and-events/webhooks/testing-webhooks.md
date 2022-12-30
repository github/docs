---
title: webhookのテスト
intro: '{% data variables.product.prodname_dotcom %} で webhook のデリバリを確認します。これには、HTTP リクエストとペイロード、およびレスポンスが含まれます。'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996218'
---
[ローカル サーバーを構成](/webhooks/configuring/)したので、コードを限界までプッシュすることに興味があるかもしれません。 そのために、GitHub の Webhook ビューには、デプロイされたペイロードをテストするためのツールが用意されています。

## 最近のデリバリの一覧表示

すべての webhook には独自の [Recent Deliveries] (最近のデリバリ) セクションがあり、デリバリの成功（緑色のチェック）や失敗（赤色の x）が一目でわかります。 また、各デリバリの試行時期を特定することもできます。

{% data variables.product.product_name %} では各 Webhook 配信のログが{% ifversion fpt or ghec %} 30 {% else %} 8 {% endif %}日間保持されます。

![[Recent Deliveries] ビュー](/assets/images/webhooks_recent_deliveries.png)

## 結果を詳しく確認する

個別の配信を拡張することで、GitHub がサーバーに送信しようとしている情報を *正確に* 確認できます。 これには、HTTP 要求と応答の両方が含まれます。

### Request

webhook デリバリ ビューには、GitHub によって送信されたヘッダに関する情報が表示されます。
これには、JSON ペイロードに関する詳細も含まれています。

![ペイロードリクエストの表示](/assets/images/payload_request_tab.png)

### [応答]

[応答] タブには、サーバーが GitHub からペイロードを受信した後の応答方法が一覧表示されます。 これには、状態コード、ヘッダー、応答本文内の追加データが含まれます。

![ペイロードレスポンスの表示](/assets/images/payload_response_tab.png)
