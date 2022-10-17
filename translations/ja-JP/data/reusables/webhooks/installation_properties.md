---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "145087413"
---
キー | Type | [説明]
----|------|------------
`action` | `string` | 実行されたアクション。 次のいずれかになります。<ul><li>`created` - 誰かが {% data variables.product.prodname_github_app %} をインストールする。</li><li>`deleted` - 誰かが {% data variables.product.prodname_github_app %} をアンインストールする。</li><li>`suspend` - 誰かが {% data variables.product.prodname_github_app %} のインストールを停止する。</li><li>`unsuspend` - 誰かが {% data variables.product.prodname_github_app %} のインストールを停止解除する。</li><li>`new_permissions_accepted` - 誰かが {% data variables.product.prodname_github_app %} のインストールに対する新しい権限を受け入れる。 {% data variables.product.prodname_github_app %}のオーナーが新しい権限をリクエストすると、{% data variables.product.prodname_github_app %}をインストールした人は新しい権限リクエストを受け入れなければならない。 </li></ul>
`repositories` | `array` | インストールがアクセスできるリポジトリオブジェクトの配列。
