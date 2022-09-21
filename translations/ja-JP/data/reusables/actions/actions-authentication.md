---
ms.openlocfilehash: e25ddf153153e38b0a37cd6a69d15215318efbe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114782"
---
この API は、認証されたユーザー、{% data variables.product.prodname_oauth_apps %}、{% data variables.product.prodname_github_apps %} で使用できます。 アクセス トークンには、プライベート リポジトリの [`repo` スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)と{% ifversion ghae %}内部{% else %}パブリック {% endif %}リポジトリの [`public_repo` スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)が必要です。
