---
title: Codespace のログ
intro: '{% data variables.product.prodname_codespaces %} で使用されるログの場所の概要。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090381"
---
Information on {% data variables.product.prodname_codespaces %} に関する情報は、次の 3 つの異なるログに出力されます。

- Codespace ログ
- 作成ログ
- 拡張ログ ({% data variables.product.prodname_vscode %} デスクトップ) またはブラウザー コンソール ログ (Web の {% data variables.product.prodname_vscode %})

## <a name="codespace-logs"></a>Codespace ログ

これらのログには、codespace、コンテナー、セッション、および {% data variables.product.prodname_vscode %} 環境に関する詳細情報が含まれています。 接続の問題やその他の予期しない動作の診断に役立ちます。 たとえば、codespace がフリーズしても、[Windowsの再読み込み] オプションを使用すると、それを数分間凍結解除することができます。つまり、codespace からランダムに切断されても、すぐに再接続することができます。

{% webui %}

1. ブラウザーで {% data variables.product.prodname_codespaces %} を使用している場合は、デバッグするコード空間に接続されることを確認してください。
1. {% data variables.product.prodname_vscode %} コマンド パレット (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) を開き、「**ログのエクスポート**」と入力します。 **[Codespaces: ログのエクスポート]** を一覧から選択して、該当するログをダウンロードします。
1. ログの zip アーカイブを保存する場所を定義し、 **[保存]** (デスクトップ) をクリックするか、 **[OK]** (Web) をクリックします。
1. ブラウザーで {% data variables.product.prodname_codespaces %} を使用している場合は、エクスプローラー ビューからログの zip アーカイブを右クリックし、 **[ダウンロード]** を選択して、 それらを、ご利用のローカル コンピューターにダウンロードします。

{% endwebui %}

{% vscode %}

1. {% data variables.product.prodname_vscode %} コマンド パレット (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) を開き、「**ログのエクスポート**」と入力します。 **[Codespaces: ログのエクスポート]** を一覧から選択して、該当するログをダウンロードします。
1. ログの zip アーカイブを保存する場所を定義し、 **[保存]** (デスクトップ) をクリックするか、 **[OK]** (Web) をクリックします。

{% endvscode %}

{% cli %}

現在、{% data variables.product.prodname_cli %} を使用してこれらのログにアクセスすることはできません。 それらにアクセスするには、{% data variables.product.prodname_vscode %} またはブラウザーでご利用の codespace を開きます。

{% endcli %}

## <a name="creation-logs"></a>作成ログ

これらのログには、コンテナー、開発コンテナー、およびその構成に関する情報が含まれています。 これらは、構成とセットアップの問題のデバッグに役立ちます。


{% webui %}

1. デバッグする codespace に接続します。
2. {% data variables.product.prodname_vscode_command_palette %} コマンド パレット (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) を開き、「**作成ログ**」と入力します。 一覧から **[Codespaces: 作成ログの表示]** を選択して、`creation.log` ファイルを開きます。

サポートとログを共有する場合は、作成ログのテキストをテキスト エディターにコピーし、ファイルをローカルに保存できます。

{% endwebui %}

{% vscode %}

コマンド パレット (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) を開き、「**作成ログ**」と入力します。 一覧から **[Codespaces: 作成ログの表示]** を選択して、`creation.log` ファイルを開きます。

サポートとログを共有する場合は、作成ログのテキストをテキスト エディターにコピーし、ファイルをローカルに保存できます。

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

作成ログを表示するには、`gh codespace logs` サブコマンドを使用します。 コマンドを入力した後、表示される codespace の一覧から選択します。

```shell
gh codespace logs
```

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_logs)を参照してください。

ログをサポートと共有したい場合は、出力をファイルに保存できます。

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

## <a name="extension-logs"></a>拡張機能ログ

これらのログは、{% data variables.product.prodname_vscode %} デスクトップ ユーザーにのみ使用できます。 それらは、{% data variables.product.prodname_codespaces %} 拡張子または {% data variables.product.prodname_vscode %} エディターに作成または接続を妨げる問題があるように思われる場合に役立ちます。

1. {% data variables.product.prodname_vscode %} で、コマンド パレットを開きます。
1. 「**ログ**」と入力し、一覧から **[開発者: 拡張機能ログ フォルダーを開く]** を選択して、ご利用のシステムのファイル エクスプローラーで拡張機能ログ フォルダーを開きます。

このビューからは、{% data variables.product.prodname_vscode %} で使用しているさまざまな拡張機能によって生成されたログにアクセスできます。 有効にした他の拡張機能に加えて、GitHub Codespaces、GitHub Authentication、および Git のログが表示されます。

## <a name="browser-console-logs"></a>ブラウザー コンソールのログ

これらのログは、ブラウザーで {% data variables.product.prodname_codespaces %} を使用する際の問題をデバッグする場合にのみ役立ちます。 これらは、{% data variables.product.prodname_codespaces %} の作成と接続に関する問題のデバッグに役立ちます。

1. デバッグする codespace のブラウザー ウィンドウで、開発者ツール ウィンドウを開きます。
1. [コンソール] タブを表示し、左側のバーで **[エラー]** をクリックすると、エラーのみが表示されます。
1. 右側のログ領域で右クリックし、 **[名前を付けて保存]** を選択して、エラーのコピーをローカル コンピューターに保存します。
  ![エラーの保存](/assets/images/help/codespaces/browser-console-log-save.png)
