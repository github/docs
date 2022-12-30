---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138779"
---
最初にバージョンアップデートを有効にすると、古くなった依存関係が大量にあり、中には最新バージョンまでにいくつものバージョンが存在しているものもあるかもしれません。 {% data variables.product.prodname_dependabot %}は、有効化されるとすぐに古くなった依存関係をチェックします。 設定が更新するマニフェストファイルの数に応じて、設定ファイルの追加後数分のうちに、バージョンアップデートの新しいPull Requestが発行されるかもしれません。 {% data variables.product.prodname_dependabot %}は、設定ファイルに対するその後の変更に対しても更新を実行します。

{% data variables.product.prodname_dependabot %}は、アップデートの失敗後にマニフェストファイルを変更した際にもPull Requestを作成することがあります。 これは、アップデート失敗の原因となった依存関係の削除などのマニフェストへの変更によって、新たにトリガーされたアップデートが成功するかもしれないためです。

Pull Requestを管理可能でレビューしやすく保つために、{% data variables.product.prodname_dependabot %}は依存関係を最新バージョンにし始めるためのPull Requestを最大で5つまで発行します。 次にスケジュールされているアップデートの前にこれらの最初のPull Requestの一部をマージした場合、残りのPull Requestは上限まで次のアップデート時にオープンとなります。 オープン pull request の最大数は、[`open-pull-requests-limit` 構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)を設定することで変更できます。
