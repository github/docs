---
title: GitHub Codespaces で Visual Studio Code のコマンド パレットを使う
intro: '{% data variables.product.prodname_vscode %} のコマンド パレット機能を使用して、{% data variables.product.prodname_github_codespaces %} 内の多くのコマンドにアクセスできます。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180812'
---
## {% data variables.product.prodname_vscode_command_palette %}について

{% data variables.product.prodname_vscode_command_palette_shortname %} は、{% data variables.product.prodname_github_codespaces %} で使用できる {% data variables.product.prodname_vscode %} の中心的な機能の 1 つです。 コマンド パレットを使用すると、{% data variables.product.prodname_github_codespaces %} および {% data variables.product.prodname_vscode_shortname %} の多くのコマンドにアクセスできます。 {% data variables.product.prodname_vscode_command_palette_shortname %}を使うことについて詳しくは、{% data variables.product.prodname_vscode_shortname %} のドキュメントの「[ユーザー インターフェイス](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)」を参照してください。

## {% data variables.product.prodname_vscode_command_palette_shortname %}にアクセスする

{% data variables.product.prodname_vscode_command_palette_shortname %}には多くの方法でアクセスできます。

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)。

  このコマンドは Firefox で指定されているキーボードショートカットになりますので、ご注意ください。
- <kbd>F1</kbd>
- [アプリケーション] メニューの **[表示] > [コマンド パレット]...** をクリックします。

  ![アプリケーションメニュー](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_codespaces %} 用のコマンド

{% data variables.product.prodname_github_codespaces %} に関連するすべてのコマンドを表示するには、[{% data variables.product.prodname_vscode_command_palette_shortname %}にアクセスしてから](#accessing-the-command-palette)、「Codespaces」と入力します。

![{% data variables.product.prodname_github_codespaces %} に関連するすべてのコマンドの一覧](/assets/images/help/codespaces/codespaces-command-palette.png)

### Codespace のサスペンドまたは停止

新しいシークレットを追加したり、マシンの種類を変更した場合、codespace を停止および再起動して変更を適用する必要があります。 

codespace のコンテナーを中断または停止するには、[{% data variables.product.prodname_vscode_command_palette_shortname %}にアクセス](#accessing-the-command-palette)し、「停止」と入力します。 **[Codespaces: 現在の Codespace を停止]** を選びます。

![Codespace を停止するコマンド](/assets/images/help/codespaces/codespaces-stop.png)

### 事前定義済みの開発コンテナー構成の追加

事前定義済みの開発コンテナー構成を追加するには、[{% data variables.product.prodname_vscode_command_palette_shortname %} にアクセス](#accessing-the-command-palette)してから、"dev container" と入力します。 **[Codespaces: 開発コンテナー構成ファイルの追加...]** を選びます。

![開発コンテナを追加するコマンド](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Codespace を再構築する

開発コンテナーを追加したり、構成ファイル (`devcontainer.json` および `Dockerfile`) のいずれかを編集した場合、codespace を再構築して変更を適用する必要があります。 

コンテナーを再構築するには、[{% data variables.product.prodname_vscode_command_palette_shortname %}にアクセス](#accessing-the-command-palette)し、「再構築」と入力します。 **[Codespaces: コンテナーのリビルド]** を選択します。

![Codespace を再構築するコマンド](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Codespace のログ

{% data variables.product.prodname_vscode_command_palette_shortname %}を使うと、codespace 作成ログにアクセスすることも、すべてのログをエクスポートすることもできます。 

{% data variables.product.prodname_github_codespaces %} のログを取得するには、[{% data variables.product.prodname_vscode_command_palette_shortname %} にアクセス](#accessing-the-command-palette)してから、"log" と入力します。 **[Codespaces: ログのエクスポート]** を選び、{% data variables.product.prodname_github_codespaces %} に関連するすべてのログをエクスポートするか、 **[Codespaces: 作成ログの表示]** を選び、セットアップに関連するログを表示します。

![ログにアクセスするコマンド](/assets/images/help/codespaces/codespaces-logs.png)

## 参考資料

- [{% data variables.product.prodname_vscode %} での {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
