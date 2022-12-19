---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061275"
---
既定では、プレビルド テンプレートを作成または更新するたびに、またはプレビルドが有効なブランチにプッシュするたびに、{% data variables.product.prodname_actions %} ワークフローがトリガーされます。 他のワークフローと同様に、プレビルド ワークフローが実行されている間、アカウントに含まれているアクションの分数がある場合はその一部を消費するか、アクションの分数の料金が発生します。 アクション分の価格の詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。 

{% data variables.product.prodname_actions %} の分数と併せて、特定のリポジトリとリージョンに対する各プレビルド構成に関連付けられているプレビルド テンプレートのストレージについても課金されます。 プレビルド テンプレートのストレージは、コードスペースのストレージと同じレートで課金されます。 詳しくは、「[ストレージ使用量の計算](#calculating-storage-usage)」をご覧ください。

Actions 利用時間 (分) の消費を抑えるために、開発コンテナー構成ファイルを変更したときのみ、またはカスタム スケジュールで指定したときにのみ、プレビルド テンプレートを更新するように設定することができます。 また、プレビルド構成用に保持するテンプレート バージョンの数を調整することで、ストレージの使用量を管理することもできます。 詳細については、「[プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)」を参照してください。

Organization の所有者は、Organization の {% data variables.product.prodname_actions %} 使用レポートをダウンロードすることで、プレビルド ワークフローとストレージの使用状況を追跡できます。 CSV 出力をフィルターして、"Codespaces プレビルドの作成" と呼ばれるワークフローのみを含めることで、プレビルドのワークフロー実行を識別できます。 詳細については、「[{% data variables.product.prodname_actions %} の使用状況を表示する](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)」を参照してください。
