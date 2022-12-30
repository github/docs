---
title: Codespaces のライフサイクル
intro: '{% data variables.product.prodname_codespaces %} 環境で開発し、codespace のライフサイクル全体にわたってデータを維持できます。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 21aa691b94c8247a11a06537523cdaa070bd24b9
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878656"
---
## codespace のライフサイクルについて

codespace のライフサイクルは、codespace を作成するときに開始され、削除すると終了します。 実行中のプロセスに影響を与えることなく、アクティブな codespace を切断して再接続できます。 プロジェクトに加えた変更を失うことなく、codespace を停止して再起動できます。

## codespace を作成する

プロジェクトで作業する場合は、新しい codespace を作成するか、既存の codespace を開くかを選択できます。 {% data variables.product.prodname_codespaces %} で開発するたびに、プロジェクトのブランチから新しい codespace を作成することも、機能の実行時間の長い codespace を保持することもできます。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace)」を参照してください。

{% data reusables.codespaces.max-number-codespaces %} 同様に、アクティブな codespace の最大数に達してからさらに起動しようとすると、アクティブな codespace のいずれかを停止するように求められます。

プロジェクトで作業するたびに新しい codespace を作成する場合は、新しいコミットがすべて {% data variables.product.prodname_dotcom %} で行われるように、変更を定期的にプッシュする必要があります。 プロジェクトで実行時間の長い codespace を使用する場合は、環境で一番新しいコミットが行われるように、codespace で作業を開始するたびにリポジトリの既定のブランチからプルする必要があります。 このワークフローは、ローカル コンピューターでプロジェクトを操作していた場合とよく似ています。 

{% data reusables.codespaces.prebuilds-crossreference %}

## codespace で変更を保存する

Web 経由で codespace に接続すると、Web エディターに対して自動保存が自動的に有効になり、遅延後に変更を保存するように構成されます。 デスクトップで実行されている {% data variables.product.prodname_vscode %} を介して codespace に接続する場合は、自動保存を有効にする必要があります。 詳細については、{% data variables.product.prodname_vscode %} のドキュメントの「[保存/自動保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)」を参照してください。

codespace のファイル システム上の Git リポジトリに変更を保存する場合は、それらの変更をコミットしてリモート ブランチにプッシュします。

保存されていない変更がある場合、エディターは終了する前に保存するように求められます。

## Codespaces のタイムアウト

対話なしで codespace を実行したままにした場合、または明示的に停止せずに codespace を終了した場合、codespace は一定期間非アクティブになった後にタイムアウトし、実行を停止します。 既定では、非アクティブ状態になって 30 分が経過した後に、codespace がタイムアウトしますが、作成する新しい codespace のタイムアウト期間をカスタマイズできます。 codespace の既定のタイムアウト期間の設定について詳しくは、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」をご覧ください。 codespace の停止の詳細については、「[codespace を停止する](#stopping-a-codespace)」参照してください。

codespace がタイムアウトすると、変更が最後に保存された時点からデータが保持されます。 詳細については、「[codespace の変更を保存する](#saving-changes-in-a-codespace)」を参照してください。

## Codespace を再構築する

codespace を再構築して、新しい codespace を作成したかのようにクリーンな状態を復元できます。 ほとんどの場合、codespace を再構築する代わりに、新しい codespace を作成できます。 もし行うとしたら、codespace を再構築し、開発コンテナーに変更を実装するケースでしょう。 codespace を再構築すると、Docker コンテナー、イメージ、ボリューム、およびキャッシュがクリーンアップされた状態で、codespace が再構築されます。

このデータのいずれかを再構築先で持続する必要がある場合は、コンテナー内の目的の場所に、持続させるディレクトリへのシンボリック リンクを作成できます。 たとえば、`.devcontainer` ディレクトリ内に、再構築先でも持続される `config` ディレクトリを作成できます。 その後、`config` ディレクトリとその内容を `devcontainer.json` ファイルの `postCreateCommand` としてシンボリック リンクすることができます。

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

以下の例の `postCreate.sh` ファイルでは、`config` ディレクトリの内容がホーム ディレクトリにシンボリック リンクされています。

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## codespace を停止する

codespace はいつでも停止できます。 codespace を停止すると、実行中のすべてのプロセスが停止され、ターミナルの履歴が消去されます。 次に codespace を起動するときに、codespace に保存した変更は引き続き使用できます。 codespace を明示的に停止しない場合、非アクティブからタイムアウトするまで実行され続けます。 詳細については、「[Codespace のタイムアウト](#codespaces-timeouts)」を参照してください。

実行中の codespace にのみ CPU 料金が発生します。停止した codespace では、ストレージ コストのみが発生します。

codespace を停止し、再起動したときに、変更を適用したいと思うかもしれません。 たとえば、codespace に使用するマシンの種類を変更した場合、変更を有効にするには、その codespace を停止して再起動する必要があります。 また、エラーや予期しない問題が発生した場合に、codespace を停止し、再起動または削除することもできます。 詳細については、「[codespace の一時停止または停止](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)」を参照してください。

## codespace を削除する

特定のタスクの codespace を作成し、変更をリモート ブランチにプッシュした後で、その codespace を安全に削除できます。

プッシュしていない Git コミットと一緒に codespace を削除しようとすると、リモート ブランチにプッシュされていない変更があることがエディターから通知されます。 必要な変更をプッシュしてから codespace を削除することも、codespace とコミットしていない変更をそのまま削除することもできます。 新しい codespace を作成せずに、コードを新しいブランチにエクスポートすることもできます。 詳細については、「[ブランチへの変更のエクスポート](/codespaces/troubleshooting/exporting-changes-to-a-branch)」を参照してください。

すべての codespace のストレージに対して課金されます。 codespace を削除すると、課金されなくなります。

codespace の削除について詳しくは、「[codespace を削除する](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

## Codespaces の使用中に接続が失われる

{% data variables.product.prodname_codespaces %} はクラウドベースの開発環境であり、インターネット接続が必要です。 codespace で作業しているときにインターネットへの接続が失われると、その codespace にアクセスできなくなります。 ただし、コミットされていない変更はすべて保存されます。 インターネット接続に再度アクセスできるようになると、切断されたときとまったく同じ状態で codespace に接続できます。 インターネット接続が不安定な場合は、頻繁に変更をコミットしてプッシュする必要があります。

オフラインで作業することが多いことがわかっている場合は、["{% data variables.product.prodname_vscode %} リモート - コンテナー" 拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)と一緒に `devcontainer.json` ファイルを使用して、リポジトリのローカル開発コンテナーをビルドしてアタッチできます。 詳細については、{% data variables.product.prodname_vscode %} ドキュメントの「[コンテナー内で開発する](https://code.visualstudio.com/docs/remote/containers)」を参照してください。
