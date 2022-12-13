---
ms.openlocfilehash: e93dcf175f55f64e30517e500843e450f68a2323
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147704924"
---
パッケージを発行、インストール、および削除するには、アクセス トークンが必要です。

個人アクセス トークン (PAT) を使用し、{% data variables.product.prodname_registry %} または {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の認証を受けることができます。 個人トークンを作成する際には、必要に応じて様々なスコープをトークンに割り当てできます。 PAT のパッケージ関連のスコープの詳細については、「[GitHub パッケージのアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」を参照してください。

{% data variables.product.prodname_actions %}ワークフロー内で{% data variables.product.prodname_registry %}レジストリに認証を受けるには、以下の方法が使えます。
- `GITHUB_TOKEN` では、ワークフロー リポジトリに関連付けられているパッケージを発行します。
- `packages:read` 以上のスコープが設定された PAT では、(`GITHUB_TOKEN` ではアクセスできない) 他のプライベート リポジトリに関連付けられているパッケージがインストールされます。
