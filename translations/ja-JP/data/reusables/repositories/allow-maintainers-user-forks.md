---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118373"
---
1. ユーザーが所有するフォークで、上流のリポジトリに対する push アクセス権を持つ人が pull request を変更することを許可する場合は、 **[Allow edits from maintainers]** \(メンテナからの編集を許可\) を選択してください。

    {% warning %}

    **警告:** フォークに {% data variables.product.prodname_actions %} ワークフローが含まれているなら、オプションは **[Allow edits and access to secrets by maintainers]** \(メンテナからの編集とシークレットへのアクセスを許可\) になります。 {% data variables.product.prodname_actions %}ワークフローを含むフォークのブランチの編集を許可すると、メンテナにフォークされたリポジトリのワークフローの編集も許可することになり、シークレットの値を明らかにして他のブランチへのアクセスも許可してしまう可能性があります。

    {% endwarning %}
