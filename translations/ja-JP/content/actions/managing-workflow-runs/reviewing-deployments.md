---
title: デプロイメントのレビュー
intro: レビュー待ちのジョブを承認もしくは拒否できます。
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718102'
---
## ワークフローで必須のレビューについて

必須のレビュー担当者が設定された環境を参照するジョブは、開始前に承認を待ちます。 承認を待っている間のジョブは、ステータスが"Waiting"になります。 ジョブが30日以内に承認されなければ、そのワークフローは自動的にキャンセルされます。

環境と必要な承認の詳細については、「[デプロイに環境を使用する」を](/actions/deployment/using-environments-for-deployment)参照してください。 REST API を使ってデプロイを確認する方法については、「[ワークフローの実行](/rest/reference/actions#workflow-runs)」を参照してください。

## ジョブの承認もしくは拒否

1. レビューを必要とするワークフローの実行へ移動してください。 ワークフロー実行への移動について詳しくは、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」をご覧ください。
2. **[デプロイのレビュー]** をクリックします。 
   ![デプロイのレビュー](/assets/images/actions-review-deployments.png)
3. 承認もしくは拒否するジョブ環境を選択してください。 コメントを残すこともできます。
   ![デプロイの承認](/assets/images/actions-approve-deployments.png)
4. 承認もしくは拒否してください。
   - ジョブを承認するには、 **[承認してデプロイ]** をクリックします。 ジョブが承認されると（そして他の環境保護ルールをパスすれば）、ジョブは進行します。 この時点で、ジョブは環境に保存されている任意のシークレットにアクセスできます。
   - ジョブを拒否するには、 **[拒否]** をクリックします。 ジョブが拒否されると、ワークフローは失敗します。
