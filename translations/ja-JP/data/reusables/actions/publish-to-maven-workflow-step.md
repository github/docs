---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145089335"
---
`ossrh` リポジトリに公開するには、`mvn --batch-mode deploy` コマンドを実行します。 `MAVEN_USERNAME` 環境変数には `OSSRH_USERNAME` シークレットの内容が設定され、`MAVEN_PASSWORD` 環境変数には `OSSRH_TOKEN` シークレットの内容が設定されます。
