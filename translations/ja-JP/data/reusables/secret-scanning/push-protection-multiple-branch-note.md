---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578711"
---
{% note %}

**注**: 

* Git 構成で現在のブランチだけでなく、複数のブランチへのプッシュがサポートされている場合、追加の意図しない参照がプッシュされるため、プッシュがブロックされる可能性があります。 詳細については、Git ドキュメントの [`push.default` オプション](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)を参照してください。
* プッシュ時に{% data variables.product.prodname_secret_scanning %}がタイムアウトした場合でも、{% data variables.product.prodname_dotcom %} ではプッシュ後もシークレットのコミットをスキャンします。

{% endnote %}
