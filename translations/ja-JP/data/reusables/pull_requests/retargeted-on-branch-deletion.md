---
ms.openlocfilehash: c006e6c46461dc27643f39f4750489d513734010
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145090880"
---
プルリクエストがマージされた後にheadブランチを削除すると、{% data variables.product.prodname_dotcom %}は同じリポジトリ内に削除されたブランチをベースブランチと指定しているオープンなプルリクエストがないかをチェックします。 {% data variables.product.prodname_dotcom %}はそういったプルリクエストを自動的に更新し、ベースブランチをマージされたプルリクエストのベースブランチに変更します。
