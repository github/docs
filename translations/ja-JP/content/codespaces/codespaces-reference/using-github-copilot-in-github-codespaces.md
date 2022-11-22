---
title: GitHub Codespaces での GitHub Copilot の使用
intro: '拡張機能を追加することで、{% data variables.product.prodname_github_codespaces %} で {% data variables.product.prodname_copilot %} を使用できます。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158726'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## {% data variables.product.prodname_vscode_shortname %} Web クライアントでの {% data variables.product.prodname_copilot %} の使用

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode %} での {% data variables.product.prodname_copilot %} の使用

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## JetBrains IDE での {% data variables.product.prodname_copilot %} のインストール

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) (AI ペア プログラマー) は、任意の codespace で使用できます。 詳細については、「[GitHub Copilot について](/copilot/overview-of-github-copilot/about-github-copilot)」をご覧ください。

JetBrains IDE の codespace で {% data variables.product.prodname_copilot %} を使用するには、codespace 内から [{% data variables.product.prodname_copilot %} プラグイン](https://plugins.jetbrains.com/plugin/17718-github-copilot)をインストールします。

{% note %}

**注**: 新しい codespace を作成するたびに、{% data variables.product.prodname_copilot %} プラグインをインストールする必要があります。

{% endnote %}

1. JetBrains クライアント アプリケーションで、[設定] (Windows/Linux) または [環境設定] (Mac) ダイアログ ボックスを開きます。

   - **Windows/Linux**: **[ファイル]** をクリックし、 **[設定]** をクリックします (または <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd> キーを押します)
   - **Mac**: MacOS メニュー バーの **[JetBrains クライアント]** をクリックし、 **[環境設定]** をクリックします (または <kbd>command</kbd>+<kbd>,</kbd> キーを押します)

1. [設定] または [環境設定] ダイアログ ボックスの左側のメニューで、 **[プラグイン ホスト上]** をクリックします。 次に、 **[Marketplace]** タブをクリックします。

   ![[プラグイン ホスト上] の [Marketplace] タブのスクリーンショット](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 検索ボックスに「copilot」と入力し、{% data variables.product.prodname_copilot %} プラグインの **[インストール]** ボタンをクリックします。

   ![{% data variables.product.prodname_copilot %} プラグインのスクリーンショット](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. [サード パーティ製プラグインのプライバシーに関するメモ] ダイアログ ボックスの **[承諾]** をクリックします。
1. **[Restart IDE]\(IDE を再起動する\)** をクリックします。

   ![{% data variables.product.prodname_copilot %} プラグインのスクリーンショット](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. リモートで実行されているバックエンド IDE を再起動するかどうかを確認するメッセージが表示されたら、 **[再起動]** をクリックします。 これを行うと、JetBrains クライアント アプリケーションが閉じます。
1. JetBrains Gateway アプリケーションから codespace をもう一度開きます。 詳細については、「[JetBrains IDE での {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide)」を参照してください。
1. JetBrains IDE が再起動したら、 **[ツール]** メニューをクリックします。 **[{% data variables.product.prodname_copilot %}]** 、 **[{% data variables.product.prodname_dotcom %} にログイン]** の順にクリックします。 

    ![JetBrains の [ツール] メニューのスクリーンショット](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. デバイス コードをコピーしてデバイスの有効化ウィンドウを開くには、[{% data variables.product.prodname_dotcom %} にサインイン] ダイアログ ボックスで、 **[コピーして開く]** をクリックします。

    ![デバイス コードの [コピーして開く] のスクリーンショット](/assets/images/help/copilot/device-code-copy-and-open.png)

1. ブラウザーにデバイスのアクティブ化ウィンドウが表示されます。 デバイス コードを貼り付け、 **[続行]** をクリックします。

   - Windows または Linux でコードを貼り付けるには、<kbd>Ctrl</kbd> + <kbd>v</kbd> キーを押します。
   - macOS でコードを貼り付けるには、<kbd>command</kbd> + <kbd>v</kbd> キーを押します。
1. {% data variables.product.prodname_dotcom %} から、{% data variables.product.prodname_copilot %} に必要なアクセス許可が要求されます。 これらのアクセス許可を承認するには、 **[{% data variables.product.prodname_copilot %} プラグインの承認]** をクリックします。
1. アクセス許可が承認されたら、JetBrains IDE によって確認が表示されます。 {% data variables.product.prodname_copilot %} の使用を開始するには、 **[OK]** をクリックします。

   ![JetBrains IDE によるアクセス許可の確認のスクリーンショット](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## 参考資料

- 「[JetBrains IDE で GitHub Copilot の使用を開始する](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)」

{% endjetbrains %}
