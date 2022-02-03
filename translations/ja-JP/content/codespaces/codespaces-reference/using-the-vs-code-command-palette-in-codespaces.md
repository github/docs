---
title: Using the Visual Studio Code Command Palette in Codespaces
intro: '{% data variables.product.prodname_vscode %} のコマンドパレット機能を使用して、Codespaces 内の多くのコマンドにアクセスできます。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
---

## About the {% data variables.product.prodname_vscode %} Command Palette

コマンドパレットは、Codespaces で使用できる {% data variables.product.prodname_vscode %} の中心的な機能の1つです。 The {% data variables.product.prodname_vscode_command_palette %} allows you to access many commands for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information on using the {% data variables.product.prodname_vscode_command_palette %}, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the Visual Studio Code documentation.

## Accessing the {% data variables.product.prodname_vscode_command_palette %}

You can access the {% data variables.product.prodname_vscode_command_palette %} in a number of ways.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  このコマンドは Firefox で指定されているキーボードショートカットになりますので、ご注意ください。
- <kbd>F1</kbd>
- アプリケーションメニューから、**[View] > [Command Palette…]** をクリックします。

  ![アプリケーションメニュー](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_github_codespaces %} のコマンド

To see all commands related to {% data variables.product.prodname_github_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "Codespaces".

![Codespaces に関連するすべてのコマンドのリスト](/assets/images/help/codespaces/codespaces-command-palette.png)

### Codespace のサスペンドまたは停止

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

To suspend or stop your codespace's container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "stop". [**Codespaces: Stop Current Codespace**] を選択します。

![Codespace を停止するコマンド](/assets/images/help/codespaces/codespaces-stop.png)

### テンプレートから開発コンテナを追加する

To add a dev container from a template, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "dev container". [**Codespaces: Add Development Container Configuration Files...**] を選択します。

![開発コンテナを追加するコマンド](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Codespace を再構築する

開発コンテナを追加するか、設定ファイル（`devcontainer.json` および `Dockerfile`）のいずれかを編集する場合、変更を適用するために codespace を再構築する必要があります。

To rebuild your container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "rebuild". **Codespaces: Rebuild Container（Codespaces: コンテナをリビルド）**を選択してください。

![Codespace を再構築するコマンド](/assets/images/help/codespaces/codespaces-rebuild.png)

### Codespace のログ

You can use the {% data variables.product.prodname_vscode_command_palette %} to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for Codespaces, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "log". [**Codespaces: Export Logs**] を選択して Codespaces に関連するすべてのログをエクスポートするか、[**Codespaces: View Creation Logs**] を選択して設定に関連するログを表示します。

![ログにアクセスするコマンド](/assets/images/help/codespaces/codespaces-logs.png)
