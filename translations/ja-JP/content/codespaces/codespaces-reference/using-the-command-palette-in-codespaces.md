---
title: Codespaces でコマンドパレットを使用する
intro: '{% data variables.product.prodname_vscode %} のコマンドパレット機能を使用して、Codespaces 内の多くのコマンドにアクセスできます。'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: コマンドパレット
---

## コマンドパレットについて

コマンドパレットは、Codespaces で使用できる {% data variables.product.prodname_vscode %} の中心的な機能の1つです。 コマンドパレットを使用すると、{% data variables.product.prodname_codespaces %} および {% data variables.product.prodname_vscode %} の多くのコマンドにアクセスできます。 コマンドパレットの使用の詳細については、Visual Studio Code ドキュメントの「[ユーザーインターフェース](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)」を参照してください。

## コマンドパレットへのアクセス

コマンドパレットには、さまざまな方法でアクセスできます。

- `Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)

  このコマンドは Firefox で指定されているキーボードショートカットになりますので、ご注意ください。
- `F1`
- アプリケーションメニューから、**[View] > [Command Palette…]** をクリックします。

  ![アプリケーションメニュー](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_github_codespaces %} のコマンド

{% data variables.product.prodname_github_codespaces %} に関連するすべてのコマンドを表示するには、コマンドパレットにアクセスしてから、「Codespaces」と入力します。

![Codespaces に関連するすべてのコマンドのリスト](/assets/images/help/codespaces/codespaces-command-palette.png)

### Codespace のサスペンドまたは停止

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

codespace のコンテナをサスペンドまたは停止するには、コマンドパレットにアクセスして「stop」と入力します。 [**Codespaces: Stop Current Codespace**] を選択します。

![Codespace を停止するコマンド](/assets/images/help/codespaces/codespaces-stop.png)

### テンプレートから開発コンテナを追加する

テンプレートから開発コンテナを追加するには、コマンドパレットにアクセスして「dev container」と入力します。 [**Codespaces: Add Development Container Configuration Files...**] を選択します。

![開発コンテナを追加するコマンド](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Codespace を再構築する

開発コンテナを追加するか、設定ファイル（`devcontainer.json` および `Dockerfile`）のいずれかを編集する場合、変更を適用するために codespace を再構築する必要があります。

コンテナを再構築するには、コマンドパレットにアクセスして「rebuild」と入力します。 **Codespaces: Rebuild Container（Codespaces: コンテナをリビルド）**を選択してください。

![Codespace を再構築するコマンド](/assets/images/help/codespaces/codespaces-rebuild.png)

### Codespace のログ

コマンドパレットを使用して codespace 作成ログにアクセスしたり、すべてのログをエクスポートしたりすることもできます。

Codespaces のログを取得するには、コマンドパレットにアクセスして「log」と入力します。 [**Codespaces: Export Logs**] を選択して Codespaces に関連するすべてのログをエクスポートするか、[**Codespaces: View Creation Logs**] を選択して設定に関連するログを表示します。

![ログにアクセスするコマンド](/assets/images/help/codespaces/codespaces-logs.png)
