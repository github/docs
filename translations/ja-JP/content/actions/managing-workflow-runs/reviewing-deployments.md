---
title: デプロイメントのレビュー
intro: レビュー待ちのジョブを承認もしくは拒否できます。
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## ワークフローで必須のレビューについて

必須のレビュー担当者が設定された環境を参照するジョブは、開始前に承認を待ちます。 承認を待っている間のジョブは、ステータスが"Waiting"になります。 ジョブが30日以内に承認されなければ、そのワークフローは自動的にキャンセルされます。

For more information about environments and required approvals, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)." REST API を使用してデプロイメントを確認する方法については、「[ワークフローの実行](/rest/reference/actions#workflow-runs)」を参照してください。

## ジョブの承認もしくは拒否

1. レビューを必要とするワークフローの実行へ移動してください。 ワークフローの実行への移動に関する詳しい情報については「[ワークフロー実行の履歴の表示](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
2. **Review deployments（デプロイメントのレビュー）**をクリックしてください。 ![デプロイメントのレビュー](/assets/images/actions-review-deployments.png)
3. 承認もしくは拒否するジョブ環境を選択してください。 コメントを残すこともできます。 ![デプロイメントの承認](/assets/images/actions-approve-deployments.png)
4. 承認もしくは拒否してください。
   - ジョブを承認するには、**Approve and deploy（承認してデプロイ）**をクリックしてください。 ジョブが承認されると（そして他の環境保護ルールをパスすれば）、ジョブは進行します。 この時点で、ジョブは環境に保存されている任意のシークレットにアクセスできます。
   - ジョブを拒否するには、**Reject（拒否）**をクリックしてください。 ジョブが拒否されると、ワークフローは失敗します。
