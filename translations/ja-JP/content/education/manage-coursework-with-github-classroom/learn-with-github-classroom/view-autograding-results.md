---
title: 自動採点の結果を表示する
intro: 課題用のリポジトリ内で行った自動採点による結果を表示できます。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
---
### 自動採点について

教師は、{% data variables.product.product_location %}の課題リポジトリにプッシュする際、自動的にその作業をチェックするテストを設定できます。

あなたが学生で、インストラクタが{% data variables.product.prodname_classroom %}の課題に対して自動採点を設定している場合、課題リポジトリ全体にわたって自動採点テストの結果が表示されます。 コミットに対してすべてのテストが成功すると、緑色のチェックマークが表示されます。 コミットに対して失敗したテストがある場合、赤色のXが表示されます。緑色のチェックマークまたは赤色のXをクリックすると、詳細なログが表示されます。

### 課題リポジトリに対する自動採点結果を表示する

{% data variables.product.prodname_classroom %}は、自動採点テストの実行に{% data variables.product.prodname_actions %}を使用します。 自動採点テストのログ表示に関する詳細については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)」を参照してください。

[**Actions**] タブでは、実行したテストの全履歴が表示されます。

![[All workflows] を選択した状態の [Actions] タブ](/assets/images/help/classroom/autograding-actions-tab.png)

実行した特定のテストをクリックすると、コンパイルエラーやテスト失敗などのログ出力を確認できます。

![{% data variables.product.prodname_actions %} の [{% data variables.product.prodname_classroom %} Autograding Workflow] テスト結果 ](/assets/images/help/classroom/autograding-actions-logs.png)

### 参考リンク

- "[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
