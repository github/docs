---
title: codespace の作成と削除のトラブルシューティング
intro: この記事では、ストレージや構成の issue など、codespace の作成または削除時に発生する可能性のある一般的な issue に対するトラブルシューティング手順について説明します。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180820'
---
## codespace を作成する

### codespace を作成するアクセス権がない
{% data variables.product.prodname_github_codespaces %} は、すべてのリポジトリで利用できるわけではありません。 codespace を作成するためのオプションが表示されない場合は、そのリポジトリで {% data variables.product.prodname_github_codespaces %} を使用できない可能性があります。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces)」を参照してください。

個人アカウントに {% data variables.product.prodname_github_codespaces %} の毎月の使用料が残っている場合、または支払い方法と使用制限を設定している場合は、パブリック リポジトリの codespaces を作成できます。 ただし、リポジトリに変更をプッシュできる場合、またはリポジトリをフォークできる場合にのみ、プライベート リポジトリの codespace を作成できます。

個人アカウントに含まれる使用量と使用制限の設定について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の請求について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」および「[{% data variables.product.prodname_github_codespaces %} の使用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)」を参照してください。

### 作成時に codespace が開かない

codespace を作成しても開かない場合:

1. キャッシュまたはレポートの問題が発生した場合は、ページを再度読み込んでみてください。
2. {% data variables.product.prodname_github_codespaces %} ページ (https://github.com/codespaces ) に移動し、そこに新しい codespace が一覧表示されているかどうかを確認します。 このプロセスで、codespace が正常に作成されたが、ブラウザーに報告できなかった可能性があります。 新しい codespace が一覧表示されている場合は、そのページから直接開くことができます。
3. 一時的な通信エラーを除外するように、リポジトリの codespace の作成を再試行します。

{% data variables.product.prodname_github_codespaces %} を使用できるリポジトリの codespace をまだ作成できない場合は、{% data reusables.codespaces.contact-support %}

### codespace の作成に失敗する

codespace の作成に失敗する場合は、クラウドの一時的なインフラストラクチャの問題 (codespace の仮想マシンのプロビジョニングに関する問題など) が原因の可能性があります。 あまり一般的ではない失敗の理由は、コンテナーのビルドに 1 時間以上かかる場合です。 この場合、ビルドは取り消され、codespace の作成は失敗します。

{% note %}

**注:** 正常に作成されなかった codespace は使用できなくなり、削除する必要があります。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

{% endnote %}

codespace を作成し、作成に失敗した場合:

1. {% data variables.product.prodname_dotcom %} の [[状態] ページ](https://githubstatus.com) でアクティブなインシデントがないか確認します。
1. [{% data variables.product.prodname_github_codespaces %} ページ](https://github.com/codespaces)に移動し、codespace を削除して、新しい codespace を作成します。
1. コンテナーがビルドされている場合は、ストリーミング中のログを確認し、ビルドがスタックしていないことを確認します。 1 時間以上かかるコンテナー ビルドは取り消され、作成が失敗します。

   これが発生する可能性がある一般的なシナリオの 1 つは、ユーザー入力のダイアログが表示され、回答を待つスクリプトが実行されている場合です。 この場合は、対話型プロンプトを削除して、ビルドを非対話型で完了できるようにします。

   {% note %}

   **注**: ビルド中にログを表示するには:
   * ブラウザーで、 **[ログの表示]** をクリックします。 

   ![[ログの表示] リンクが強調された Codespaces Web UI のスクリーンショット](/assets/images/help/codespaces/web-ui-view-logs.png)

   * VS Code デスクトップ アプリケーションで、表示されている "リモート接続のセットアップ" の **[codespace のビルド]** をクリックします。 

   ![[codespace のビルド] リンクが強調された VS Code のスクリーンショット](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. ビルドに時間がかかるコンテナーがある場合は、プレビルドを使用して codespace の作成を速めることを検討してください。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。

## codespace を削除する

codespace は、次の方法でのみ削除できます。
* codespace を作成したユーザー。
* Organization 所有の codespace の Organization 所有者。
* 保持期間の終了時の自動的な削除。 

詳しくは、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace)」と「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」をご覧ください。

## コンテナー ストレージ

codespace を作成すると、ストレージ容量に限りがあるため、時間の経過とともにスペースを解放する必要がある場合があります。 {% data variables.product.prodname_github_codespaces %} ターミナルで次のコマンドのいずれかを実行してみて、ストレージ スペースを解放します。

- `sudo apt autoremove` を使用して、使用されなくなったパッケージを削除します。
- `sudo apt clean` を使用して apt キャッシュをクリーンアップします。
- `sudo find / -printf '%s %p\n'| sort -nr | head -10` で、codespace 内でサイズが上位 10 個のファイルを参照します。
- ビルド成果物やログなど、不要なファイルを削除します。

より破壊的なオプション:

- `docker system prune` を使用して (すべての画像を削除する場合は `-a` を、すべてのボリュームを削除する場合は `--volumes` を付加します)、未使用の Docker イメージ、ネットワーク、コンテナーを削除します。
- 追跡されていないファイルを作業ツリーから削除します: `git clean -i`。

## 構成

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
作成ログを確認し、必要に応じて開発コンテナーの構成を更新します。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のログ](/codespaces/troubleshooting/github-codespaces-logs)」を参照してください。

その後、codespace を再起動するか、コンテナーをリビルドしてみてください。 コンテナーの再構築について詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)」を参照してください。
