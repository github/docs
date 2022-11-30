---
title: 事前ビルドの管理
shortTitle: Manage prebuilds
intro: リポジトリのプレビルド構成をレビュー、変更、削除できます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160188'
---
## 事前ビルド構成を確認、変更、削除する

リポジトリに対して構成したプレビルドは、{% data variables.product.prodname_actions %} ワークフローを使用して作成および更新され、{% data variables.product.prodname_github_codespaces %} サービスによって管理されます。 

プレビルド構成での設定によっては、プレビルドを更新するワークフローが、次のイベントによってトリガーされる場合があります。

* 事前ビルド構成を作成または更新する
* 事前ビルドを持つように構成されているブランチにコミットまたは pull request をプッシュする
* 開発コンテナー構成ファイルの変更
* 事前ビルドの構成で定義したスケジュール
* ワークフローを手動でトリガーする

プレビルド構成の設定によって、プレビルドの更新を自動的にトリガーするイベントが決まります。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。 

リポジトリへの管理者アクセス権を持つユーザーは、事前ビルドの進行状況の確認、事前ビルド構成の編集と削除ができます。 

### 事前ビルドの進行状況を表示する
リポジトリ設定の {% data variables.product.prodname_github_codespaces %} ページで、設定した事前ビルド構成ごとに最新のワークフロー実行の現在の状態を表示できます。 たとえば、"現在実行中" や "1 時間前に最後の実行" などです。

最新の事前ビルド ワークフロー実行のログ出力を表示するには、 **[出力の表示]** をクリックします。

![[出力の表示] ボタン](/assets/images/help/codespaces/prebuilds-see-output.png) 

**[アクション]** タブにワークフローの最新の実行の出力が表示されます。

![事前ビルド ワークフローの出力](/assets/images/help/codespaces/prebuilds-log-output.png) 

または、指定したブランチに関連付けられているすべての事前ビルド ワークフロー実行を表示するには、省略記号ボタンをクリックし、ドロップダウン メニューから **[実行の表示]** を選択します。

![ドロップダウン メニューの [実行の表示] オプション](/assets/images/help/codespaces/prebuilds-view-runs.png) 

関連付けられているブランチの事前ビルドのワークフロー実行履歴が表示されます。

![ワークフロー実行履歴](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### 事前ビルド構成を編集する

1. リポジトリ設定の {% data variables.product.prodname_codespaces %} ページで、編集する事前ビルド構成の右側にある省略記号をクリックします。
1. ドロップダウン メニューの **[編集]** をクリックします。
 
   ![ドロップダウン メニューの [編集] オプション](/assets/images/help/codespaces/prebuilds-edit.png) 

1. 事前ビルド構成に必要な変更を加えて、 **[更新]** をクリックします。 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### 事前ビルド構成を無効にする

構成のプレビルドの更新を一時停止するには、構成のワークフロー実行を無効にします。 プレビルド構成のワークフロー実行を無効にしても、その構成に対して以前に作成されたプレビルドは削除されず、その結果、codespace は既存のプレビルドから生成され続けます。

事前ビルド構成のワークフロー実行を無効にすると、事前ビルドの作成エラーを調査する必要がある場合に役立ちます。

1. リポジトリ設定の {% data variables.product.prodname_codespaces %} ページで、無効にする事前ビルド構成の右側にある省略記号をクリックします。
1. ドロップダウン メニューの **[Disable runs]\(実行を無効にする\)** をクリックします。

   ![ドロップダウン メニューの [実行を無効にする] オプション](/assets/images/help/codespaces/prebuilds-disable.png)

1. この構成を無効にすることを確定するには、 **[OK]** をクリックします。

### 事前ビルド構成を削除する

プレビルド構成を削除すると、その構成用に以前に作成したプレビルドもすべて削除されます。 その結果、構成を削除した直後から、その構成で生成された事前ビルドは、新しい codespace を作成する際に使用できなくなります。

事前ビルド構成を削除した後も、キューに既に入っているか開始済みの構成のワークフロー実行は引き続き実行されます。 これらは、以前に完了したワークフロー実行と共に、ワークフロー実行履歴に一覧表示されます。

1. リポジトリ設定の {% data variables.product.prodname_codespaces %} ページで、削除する事前ビルド構成の右側にある省略記号をクリックします。
1. ドロップダウン メニューの **[削除]** をクリックします。

   ![ドロップダウン メニューの [削除] オプション](/assets/images/help/codespaces/prebuilds-delete.png)

1. 削除を確認するメッセージが表示されたら、 **[OK]** をクリックします。

### 事前ビルドを手動でトリガーする

事前ビルド構成のワークフロー実行を手動でトリガーすると便利な場合があります。 通常、これが必要になるのは、事前ビルド構成のワークフローに関する問題をデバッグする場合だけです。

1. リポジトリ設定の {% data variables.product.prodname_codespaces %} ページで、トリガーするワークフローが含まれる事前ビルド構成の右側にある省略記号をクリックします。
1. ドロップダウン メニューで、 **[手動でトリガー]** をクリックします。

   ![ドロップダウン メニューの [手動でトリガー] オプション](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## 参考資料

- [プレビルドに関するトラブルシューティング](/codespaces/troubleshooting/troubleshooting-prebuilds)
