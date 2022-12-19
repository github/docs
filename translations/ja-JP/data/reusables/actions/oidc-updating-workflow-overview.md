---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089392"
---
クラウド デプロイ ワークフローに OIDC 統合を追加するには、次のコード変更を追加する必要があります。

- {% data variables.product.prodname_dotcom %} OIDC プロバイダーからトークンをフェッチするアクセス許可を付与します。
  - ワークフローには、`id-token` 値を定義した `permissions` 設定が必要です。 これにより、ワークフロー内のすべてのジョブから OIDC トークンをフェッチすることができます。 1 つのジョブに対して OIDC トークンのみをフェッチする必要がある場合は、そのジョブ内でこのアクセス許可を設定できます。
- {% data variables.product.prodname_dotcom %} OIDC プロバイダーに JSON Web トークン (JWT) を要求し、それをクラウド プロバイダーに提示してアクセス トークンを受け取ります。
  - Actions ツールキットを使ってジョブ内のトークンをフェッチするか、クラウド プロバイダーが作成した公式アクションを使って JWT をフェッチし、クラウドからアクセス トークンを受け取ることができます。
