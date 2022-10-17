---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111549"
---
`https://HOSTNAME/status` URL に対して返される状態コードを確認して、{% data variables.product.prodname_ghe_server %} の可用性を監視できます。 ユーザー トラフィックを処理できるアプライアンスは、状態コード `200` (OK) を返します。 いくつかの理由でアプライアンスが `503` (サービス利用不可) を返す場合があります。
 - 2ノードの高可用性構成のレプリカなど、そのアプライアンスがパッシブなレプリカである場合。
 - アプライアンスがメンテナンスモードになっている場合。
 - アプライアンスがGeo-replication構成の一部で、ただしアクティブではないレプリカの場合。

以下からアクセスできるレプリケーションの概要ダッシュボードを使うこともできます。

`https://HOSTNAME/setup/replication`
