---
title: codespace の作成と削除のトラブルシューティング
intro: この記事では、ストレージや構成の issue など、codespace の作成または削除時に発生する可能性のある一般的な issue に対するトラブルシューティング手順について説明します。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 0a93ef45affe3f19e3e679d909db432ddd6b3e97
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/14/2022
ms.locfileid: '147110835'
---
## <a name="creating-codespaces"></a>codespace を作成する

### <a name="no-access-to-create-a-codespace"></a>codespace を作成するアクセス権がない
{% data variables.product.prodname_codespaces %} はすべてのリポジトリで利用できるわけではありません。 [Open with Codespaces]\(codespace で開く\) ボタンが表示されない場合は、そのリポジトリで {% data variables.product.prodname_github_codespaces %} を使用できない可能性があります。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)」を参照してください。

Organization で [{% data variables.product.prodname_codespaces %} を有効](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization)にしていることが確実な場合は、Organization の所有者または支払いマネージャーが {% data variables.product.prodname_codespaces %} の使用制限を設定していないか確認してください。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

### <a name="codespace-does-not-open-when-created"></a>作成時に codespace が開かない

codespace を作成しても開かない場合:

1. キャッシュまたはレポートの問題が発生した場合は、ページを再度読み込んでみてください。
2. {% data variables.product.prodname_github_codespaces %} ページ (https://github.com/codespaces ) に移動し、そこに新しい codespace が一覧表示されているかどうかを確認します。 このプロセスで、codespace が正常に作成されたが、ブラウザーに報告できなかった可能性があります。 新しい codespace が一覧表示されている場合は、そのページから直接開くことができます。
3. 一時的な通信エラーを除外するように、リポジトリの codespace の作成を再試行します。

{% data variables.product.prodname_codespaces %} が使用可能なリポジトリの codespace をまだ作成できない場合は、{% data reusables.codespaces.contact-support %}

## <a name="deleting-codespaces"></a>codespace を削除する

codespace の所有者は、その codespace を完全に制御でき、自身の codespace だけを削除できます。 別のユーザーによって作成された codespace を削除できません。

ブラウザー、{% data variables.product.prodname_vscode %}、または {% data variables.product.prodname_cli %} を使用して codespace を削除できます。 {% data variables.product.prodname_cli %} では、codespace を一括削除することもできます。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

## <a name="container-storage"></a>コンテナー ストレージ

codespace を作成すると、ストレージ容量に限りがあるため、時間の経過とともにスペースを解放する必要がある場合があります。 {% data variables.product.prodname_codespaces %} ターミナルで次のコマンドのいずれかを実行してみて、ストレージ容量を解放します。

- `sudo apt autoremove` を使用して、使用されなくなったパッケージを削除します。
- `sudo apt clean` を使用して apt キャッシュをクリーンアップします。
- `sudo find / -printf '%s %p\n'| sort -nr | head -10` で、codespace 内でサイズが上位 10 個のファイルを参照します。
- ビルド成果物やログなど、不要なファイルを削除します。

より破壊的なオプション:

- `docker system prune` を使用して (すべての画像を削除する場合は `-a` を、すべてのボリュームを削除する場合は `--volumes` を付加します)、未使用の Docker イメージ、ネットワーク、コンテナーを削除します。
- 追跡されていないファイルを作業ツリーから削除します: `git clean -i`。

## <a name="configuration"></a>構成

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

作成ログを確認し、必要に応じて開発コンテナー構成を更新し、{% data variables.product.prodname_vscode_command_palette %} で **[Codespaces: コンテナーのリビルド]** を実行して再試行します。 詳細については、「[Codespace のログ](/codespaces/troubleshooting/codespaces-logs)」とプロジェクト用の [{% data variables.product.prodname_codespaces %} の構成](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)に関するページを参照してください。
