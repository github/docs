---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878440"
---
ジョブまたはワークフローの実行には、[`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) の `permissions` 設定が必要です。 `id-token` の `permissions` 設定が `read` または `none` の場合、OIDC JWT ID トークンを要求することはできません。

この `id-token: write` 設定により、次のいずれかの方法を使用して、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーから JWT を要求できます。

- ランナーで環境変数を使用する (`ACTIONS_ID_TOKEN_REQUEST_URL` および `ACTIONS_ID_TOKEN_REQUEST_TOKEN`)。
- アクション ツールキットから `getIDToken()` を使用する。

ワークフローの OIDC トークンをフェッチする必要がある場合は、ワークフロー レベルでアクセス許可を設定できます。 次に例を示します。

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

1 つのジョブに対して OIDC トークンのみをフェッチする必要がある場合は、そのジョブ内でこのアクセス許可を設定できます。 次に例を示します。

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

ワークフローの要件に応じて、ここで追加のアクセス許可を指定する必要がある場合があります。 
