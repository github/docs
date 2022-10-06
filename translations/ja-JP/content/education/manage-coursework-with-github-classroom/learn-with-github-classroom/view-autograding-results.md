---
title: 自動採点の結果を表示する
intro: 課題用のリポジトリ内で行った自動採点による結果を表示できます。
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
ms.openlocfilehash: ea4de9b0122e39f5ecb4d960d4f0ee8c94ba2ee5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119550'
---
## 自動採点について

教師は、{% data variables.product.product_location %}の課題リポジトリにプッシュする際、自動的にその作業をチェックするテストを設定できます。

あなたが学生で、インストラクタが{% data variables.product.prodname_classroom %}の課題に対して自動採点を設定している場合、課題リポジトリ全体にわたって自動採点テストの結果が表示されます。 コミットに対してすべてのテストが成功すると、緑色のチェックマークが表示されます。 コミットに対して失敗したテストがある場合、赤色のXが表示されます。緑色のチェックマークまたは赤色のXをクリックすると、詳細なログが表示されます。

## 課題リポジトリに対する自動採点結果を表示する

{% data variables.product.prodname_classroom %}は、自動採点テストの実行に{% data variables.product.prodname_actions %}を使用します。 自動採点テストのログの表示の詳細については、「[ワークフロー実行ログの使用](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)」を参照してください。

**[アクション]** タブには、テスト実行の完全な履歴が表示されます。

![[すべてのワークフロー] が選択された [アクション] タブ](/assets/images/help/classroom/autograding-actions-tab.png)

実行した特定のテストをクリックすると、コンパイルエラーやテスト失敗などのログ出力を確認できます。

![{% data variables.product.prodname_actions %} の [{% data variables.product.prodname_classroom %} 自動採点ワークフロー] テスト結果ログ ](/assets/images/help/classroom/autograding-actions-logs.png)

## 参考資料

- 「[状態チェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」
