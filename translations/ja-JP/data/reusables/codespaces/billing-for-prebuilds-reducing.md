---
ms.openlocfilehash: efb9f234573525d8f24d4f0798379d38a8d8299e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881877"
---
Actions 利用時間 (分) の消費を抑えるために、開発コンテナー構成ファイルを変更したときのみ、またはカスタム スケジュールで指定したときにのみ、プレビルドを更新するように設定することができます。 また、プレビルド構成用に保持するテンプレート バージョンの数を調整することで、ストレージの使用量を管理することもできます。 詳細については、「[プレビルドの構成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)」を参照してください。

Organization の所有者は、Organization の {% data variables.product.prodname_actions %} 使用レポートをダウンロードすることで、プレビルド ワークフローとストレージの使用状況を追跡できます。 CSV 出力をフィルターして、"{% data variables.product.prodname_codespaces %} プレビルドの作成" と呼ばれるワークフローのみを含めることで、プレビルドのワークフロー実行を識別できます。 詳細については、「[{% data variables.product.prodname_actions %} の使用状況を表示する](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)」を参照してください。
