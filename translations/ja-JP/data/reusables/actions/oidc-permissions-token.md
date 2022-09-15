---
ms.openlocfilehash: 9634dbe779ef8c4bf0707adfe45d6e5084d95196
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068194"
---
ジョブまたはワークフローの実行には、[`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) の `permissions` 設定が必要です。 `id-token` の `permissions` 設定が `read` または `none` の場合、OIDC JWT ID トークンを要求することはできません。

この `id-token: write` 設定により、次のいずれかの方法を使用して、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーから JWT を要求できます。

- ランナーで環境変数を使用する (`ACTIONS_ID_TOKEN_REQUEST_URL` および `ACTIONS_ID_TOKEN_REQUEST_TOKEN`)。
- アクション ツールキットから `getIDToken()` を使用する。

1 つのジョブに対して OIDC トークンのみをフェッチする必要がある場合は、そのジョブ内でこのアクセス許可を設定できます。 次に例を示します。

```yaml{:copy}
permissions:
  id-token: write
```

ワークフローの要件に応じて、ここで追加のアクセス許可を指定する必要がある場合があります。 
