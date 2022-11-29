---
title: GitHub Codespaces ログ
intro: '{% data variables.product.prodname_github_codespaces %} で使用されるログの概要。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160102'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% data variables.product.prodname_github_codespaces %} に関する情報は、さまざまなログに出力されます。

{% webui %}

- Codespace ログ
- 作成ログ
- ブラウザー コンソール ログ ({% data variables.product.prodname_vscode_shortname %} Web クライアント用)

拡張機能ログは、{% data variables.product.prodname_vscode_shortname %} で {% data variables.product.prodname_github_codespaces %} を使用している場合に使用できます。 詳細については、上記の [{% data variables.product.prodname_vscode %}] タブをクリックしてください。

{% endwebui %}

{% vscode %}

- Codespace ログ
- 作成ログ
- 拡張機能ログ ({% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーション用) 

ブラウザーのログは、ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用している場合に使用できます。 詳細については、上記の [Web ブラウザー] タブをクリックしてください。

{% endvscode %}

{% cli %}

- Codespace ログ
- 作成ログ

他のログは、{% data variables.product.prodname_vscode_shortname %} または自分の Web ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用している場合に使用できます。 詳細については、上のタブをクリックしてください。

{% endcli %}

{% jetbrains %}

- 作成ログ

他のログは、{% data variables.product.prodname_vscode_shortname %} または自分の Web ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用している場合に使用できます。 詳細については、上のタブをクリックしてください。

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用している場合は、デバッグするコード空間に接続されることを確認してください。
1. {% data variables.product.prodname_vscode_command_palette_shortname %} を開き (<kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux))、「**開発コンテナー**」と入力します。 **[Codespaces: ログのエクスポート]** を一覧から選択して、該当するログをダウンロードします。
1. ログの zip アーカイブを保存する場所を定義し、 **[保存]** (デスクトップ) をクリックするか、 **[OK]** (Web) をクリックします。
1. ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用している場合は、エクスプローラー ビューからログの zip アーカイブを右クリックし、 **[ダウンロード]** を選択して、 それらを、ご利用のローカル コンピューターにダウンロードします。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. {% data variables.product.prodname_vscode_command_palette_shortname %} を開き (<kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux))、「**開発コンテナー**」と入力します。 **[Codespaces: ログのエクスポート]** を一覧から選択して、該当するログをダウンロードします。
1. ログの zip アーカイブを保存する場所を定義し、 **[保存]** (デスクトップ) をクリックするか、 **[OK]** (Web) をクリックします。

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

現在、{% data variables.product.prodname_cli %} を使用してこれらのログにアクセスすることはできません。 それらにアクセスするには、{% data variables.product.prodname_vscode_shortname %} またはブラウザーでご利用の codespace を開きます。

{% endcli %}

## 作成ログ

これらのログには、コンテナー、開発コンテナー、およびその構成に関する情報が含まれています。 これらは、構成とセットアップの問題のデバッグに役立ちます。

{% webui %}

1. デバッグする codespace に接続します。
2. {% data variables.product.prodname_vscode_command_palette_shortname %} を開き (<kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux))、「**作成ログ**」と入力します。 一覧から **[Codespaces: 作成ログの表示]** を選択して、`creation.log` ファイルを開きます。

サポートとログを共有する場合は、作成ログのテキストをテキスト エディターにコピーし、ファイルをローカルに保存できます。

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_vscode_command_palette_shortname %} を開き (<kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux))、「**作成ログ**」と入力します。 一覧から **[Codespaces: 作成ログの表示]** を選択して、`creation.log` ファイルを開きます。

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

{% vscode %}

## 拡張機能ログ

これらのログは、{% data variables.product.prodname_vscode_shortname %} デスクトップ ユーザーにのみ使用できます。 それらは、{% data variables.product.prodname_github_codespaces %} 拡張機能または {% data variables.product.prodname_vscode_shortname %} エディターに作成または接続を妨げる問題があるように思われる場合に役立ちます。

1. {% data variables.product.prodname_vscode_shortname %} で、コマンド パレットを開きます。
1. 「**ログ**」と入力し、一覧から **[開発者: 拡張機能ログ フォルダーを開く]** を選択して、ご利用のシステムのファイル エクスプローラーで拡張機能ログ フォルダーを開きます。

このビューからは、{% data variables.product.prodname_vscode_shortname %} で使用しているさまざまな拡張機能によって生成されたログにアクセスできます。 有効にした他の拡張機能に加えて、{% data variables.product.prodname_github_codespaces %}、{% data variables.product.prodname_dotcom %} 認証、Git のログが表示されます。

{% endvscode %}

{% webui %}

## ブラウザー コンソールのログ

これらのログは、ブラウザーで {% data variables.product.prodname_github_codespaces %} を使用する際の問題をデバッグする場合にのみ役立ちます。 これらは、{% data variables.product.prodname_github_codespaces %} の作成と接続に関する問題のデバッグに役立ちます。

1. デバッグする codespace のブラウザー ウィンドウで、開発者ツール ウィンドウを開きます。
1. [コンソール] タブを表示し、左側のサイドバーで **[エラー]** をクリックすると、エラーのみが表示されます。
1. 右側のログ領域で右クリックし、 **[名前を付けて保存]** を選択して、エラーのコピーをローカル コンピューターに保存します。
  ![エラーの保存](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. {% data variables.product.prodname_github_codespaces %} ツール ウィンドウで、ログ アイコンをクリックします。

   ![ログ ボタンのスクリーンショット](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains ログ

リモート JetBrains IDE とローカル クライアント アプリケーションのログをダウンロードするには、JetBrains クライアント アプリケーションの **[ヘルプ]** メニューに移動し、 **[ホストとクライアント ログの収集]** をクリックします。

{% endjetbrains %}

## 参考資料

- 「[Organization の {% data variables.product.prodname_github_codespaces %} の Audit log を確認する](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)」
- 「[{% data variables.product.prodname_github_codespaces %} のセキュリティログをレビューする](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)」
