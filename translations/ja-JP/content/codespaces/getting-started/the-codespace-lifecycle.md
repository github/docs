---
title: codespace のライフサイクル
intro: '{% data variables.product.prodname_github_codespaces %} 環境で開発し、codespace のライフサイクル全体にわたってデータを維持できます。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
  - /codespaces/developing-in-codespaces/the-codespace-lifecycle
ms.openlocfilehash: 8f223bce2acf2f6dc6200271397c0d70f28aefe4
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188370'
---
## codespace のライフサイクルについて

codespace のライフサイクルは、codespace を作成するときに開始され、削除すると終了します。 実行中のプロセスに影響を与えることなく、アクティブな codespace を切断して再接続できます。 プロジェクトに加えた変更を失うことなく、codespace を停止して再起動できます。

## codespace を作成する

プロジェクトで作業する場合は、新しい codespace を作成するか、既存の codespace を開くかを選択できます。 {% data variables.product.prodname_github_codespaces %} で開発するたびに、リポジトリのブランチから新しい codespace を作成することも、機能の実行時間の長い codespace を保持することもできます。 {% data reusables.codespaces.starting-new-project-template %} 詳細については、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)」と「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)」を参照してください。

{% data reusables.codespaces.max-number-codespaces %} 同様に、アクティブな codespace の最大数に達してからさらに起動しようとすると、アクティブな codespace のいずれかを停止するように求められます。

プロジェクトで作業するたびに新しい codespace を作成する場合は、新しいコミットがすべて {% data variables.product.prodname_dotcom %} で行われるように、変更を定期的にプッシュする必要があります。 プロジェクトで実行時間の長い codespace を使用する場合は、環境で一番新しいコミットが行われるように、codespace で作業を開始するたびにリポジトリの既定のブランチからプルする必要があります。 このワークフローは、ローカル コンピューターでプロジェクトを操作していた場合とよく似ています。 

{% data reusables.codespaces.prebuilds-crossreference %}

## codespace で変更を保存する

Web 経由で codespace に接続すると、Web エディターに対して自動保存が自動的に有効になり、遅延後に変更を保存するように構成されます。 デスクトップで実行されている {% data variables.product.prodname_vscode %} を介して codespace に接続する場合は、自動保存を有効にする必要があります。 詳細については、{% data variables.product.prodname_vscode %} のドキュメントの「[保存/自動保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)」を参照してください。

作業はクラウド内の仮想マシンに保存されます。 codespace を閉じて停止し、後で保存した作業に戻ることができます。 保存されていない変更がある場合、エディターは終了する前に保存するように求められます。 ただし、codespace が削除されると、作業も削除されます。 作業を永続化するには、変更をコミットしてリモート リポジトリにプッシュするか、テンプレートから codespace を作成した場合は、新しいリモート リポジトリに作業を発行する必要があります。 詳細については、「[Codespace でソース コントロールを使用する](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)」を参照してください

## {% data variables.product.prodname_github_codespaces %} のタイムアウト

対話なしで codespace を実行したままにした場合、または明示的に停止せずに codespace を終了した場合、codespace は一定期間非アクティブになった後にタイムアウトし、実行を停止します。 既定では、非アクティブ状態になって 30 分が経過した後に、codespace がタイムアウトしますが、作成する新しい codespace のタイムアウト期間をカスタマイズできます。 codespace の既定のタイムアウト期間の設定について詳しくは、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」をご覧ください。 codespace の停止の詳細については、「[codespace を停止する](#stopping-a-codespace)」参照してください。

codespace がタイムアウトすると、変更が最後に保存された時点からデータが保持されます。 詳細については、「[codespace の変更を保存する](#saving-changes-in-a-codespace)」を参照してください。

## Codespace を再構築する

codespace をリビルドして、開発コンテナーの構成に変更を実装できます。 ほとんどの場合、codespace を再構築する代わりに、新しい codespace を作成できます。 既定では、codespace をリビルドすると、{% data variables.product.prodname_github_codespaces %} によりキャッシュからイメージが再利用され、再構築プロセスが高速化されます。 または、完全なリビルドを実行できます。これにより、キャッシュがクリアされ、新しいイメージを使用してコンテナーが再構築されます。

詳細については、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)」および「[コンテナーの完全なリビルドの実行](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container)」を参照してください。

## codespace を停止する

{% data reusables.codespaces.stopping-a-codespace %} 詳細については、「[codespace の停止と開始](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)」を参照してください。

## codespace を削除する

特定のタスクの codespace を作成し、変更をリモート ブランチにプッシュした後で、その codespace を安全に削除できます。

プッシュしていない Git コミットと一緒に codespace を削除しようとすると、リモート ブランチにプッシュされていない変更があることがエディターから通知されます。 必要な変更をプッシュしてから codespace を削除することも、codespace とコミットしていない変更をそのまま削除することもできます。 新しい codespace を作成せずに、コードを新しいブランチにエクスポートすることもできます。 詳細については、「[ブランチへの変更のエクスポート](/codespaces/troubleshooting/exporting-changes-to-a-branch)」を参照してください。

指定した期間停止され、非アクティブなままになっている Codespace は自動的に削除されます。 既定では、非アクティブな codespace は 30 日後に削除されますが、codespace の保持期間はカスタマイズできます。 詳しい情報については、「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」をご覧ください。

codespace を作成すると、アクティブか停止かに関係なく、削除されるまでストレージ料金が発生し続けます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)」をご覧ください。 codespace を削除しても、{% data variables.product.prodname_github_codespaces %} の現在の課金対象金額は減少しません。これは、毎月の請求期間の間に累積されます。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。

codespace の削除について詳しくは、「[codespace を削除する](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

## {% data variables.product.prodname_github_codespaces %} の使用中に接続が失われる

{% data variables.product.prodname_github_codespaces %} はクラウドベースの開発環境であり、インターネット接続が必要です。 codespace で作業しているときにインターネットへの接続が失われると、その codespace にアクセスできなくなります。 ただし、コミットされていない変更はすべて保存されます。 インターネット接続に再度アクセスできるようになると、切断されたときとまったく同じ状態で codespace に接続できます。 インターネット接続が不安定な場合は、頻繁に変更をコミットしてプッシュする必要があります。

オフラインで作業することが多いことがわかっている場合は、{% data variables.product.prodname_vscode_shortname %} の ["Dev Containers" 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)で `devcontainer.json` ファイルを使用して、リポジトリのローカル開発コンテナーをビルドしてアタッチできます。 詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[コンテナー内で開発する](https://code.visualstudio.com/docs/remote/containers)」を参照してください。
