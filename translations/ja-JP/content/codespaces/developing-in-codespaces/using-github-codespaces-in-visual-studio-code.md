---
title: Visual Studio Code で GitHub Codespaces を使用する
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_github_codespaces %} 拡張機能を接続することで、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: fd714af8374346768b81241ea6b8b91a0022c4e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111514'
---
## {% data variables.product.prodname_vscode %} の {% data variables.product.prodname_github_codespaces %} について

{% data variables.product.prodname_vscode %} のローカル インストールを使用して、codespace の作成、管理、作業、削除を行うことができます。 {% data variables.product.prodname_vscode_shortname %} で {% data variables.product.prodname_github_codespaces %} を使用するには、{% data variables.product.prodname_codespaces %} 拡張機能をインストールする必要があります。 {% data variables.product.prodname_vscode_shortname %} での Codespaces の設定の詳細については、「[前提条件](#prerequisites)」を参照してください。

既定では、{% data variables.product.prodname_dotcom_the_website %} で作成した新しい codespace は、ブラウザーで開きます。 {% data variables.product.prodname_vscode_shortname %} で新しい codespace を自動的に開きたい場合は、既定のエディターを {% data variables.product.prodname_vscode_shortname %} に設定できます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」をご覧ください。

ブラウザーで作業したいが、既存の {% data variables.product.prodname_vscode_shortname %} 拡張機能、テーマ、ショートカットを引き続き使用する場合は、Settings Sync を有効にすることができます。詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)」をご覧ください。

## 前提条件

{% data variables.product.prodname_vscode_shortname %} の codespace で直接開発するには、{% data variables.product.prodname_codespaces %} 拡張機能をインストールして、{% data variables.product.product_name %} 資格情報を使用してサインインする必要があります。 {% data variables.product.prodname_codespaces %} 拡張機能には、{% data variables.product.prodname_vscode_shortname %} October 2020 リリース 1.51 以降が必要です。

{% data variables.product.prodname_vscode_marketplace %} を使用して [{% data variables.product.prodname_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 拡張機能をインストールします。 詳細については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[拡張機能マーケットプレース](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. **[サインインして {% data variables.product.prodname_dotcom %} を表示...]** をクリックします。

   ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. {% data variables.product.prodname_vscode_shortname %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、 **[許可]** をクリックします。
3. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. [REMOTE EXPLORER] ドロップダウンを使用して、 **{% data variables.product.prodname_github_codespaces %}** をクリックします。

   ![{% data variables.product.prodname_codespaces %} ヘッダ](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. **[サインインして {% data variables.product.prodname_codespaces %} を表示...]** をクリックします。

   ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. {% data variables.product.prodname_vscode_shortname %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、 **[許可]** をクリックします。
1. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

{% endwindows %}

## {% data variables.product.prodname_vscode_shortname %} で Codespaces を作成する

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode_shortname %} で codespace を開く

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. [Codespaces] で、開発するコードスペースをクリックします。
1. [Connect to Codespace] アイコンをクリックします。

   ![{% data variables.product.prodname_vscode_shortname %} の [Connect to Codespace]\(Codespace への接続\) アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## {% data variables.product.prodname_vscode_shortname %} のマシンの種類の変更

{% data reusables.codespaces.codespaces-machine-types %} codespace のマシンの種類はいつでも変更できます。

1. {% data variables.product.prodname_vscode_shortname %} で、コマンド パレットを開きます (`shift command P` / `shift control P`)。
1. 「Codespaces: マシンの種類の変更」を検索して選択します。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. 変更したい codespace をクリックします。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. 使用したいマシンの種類を選択します。 

   {% note %}

   **注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. codespace が現在実行中の場合は、今すぐ再起動して codespace に再接続するかどうかを確認するメッセージが表示されます。

   この codespace に使用するマシンの種類をすぐに変更したい場合は、 **[はい]** をクリックします。
   
   **[いいえ]** をクリックした場合、または codespace が現在実行されていない場合は、次回 codespace が再起動されたときに変更が有効になります。

## {% data variables.product.prodname_vscode_shortname %} で Codespaces を削除する

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode_shortname %} の Insider ビルドへの切り替え

{% data variables.product.prodname_codespaces %} 内で [{% data variables.product.prodname_vscode_shortname %} の Insiders ビルド](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build)を使用できます。

1. {% data variables.product.prodname_codespaces %} ウィンドウの左下にある **{% octicon "gear" aria-label="The settings icon" %} [設定]** を選択します。
2. 一覧から [Insiders バージョンに切り替える] を選択します。

   ![{% data variables.product.prodname_codespaces %} で [Insiders ビルド] をクリックする](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. 選択すると、{% data variables.product.prodname_codespaces %} は Insiders バージョンで引き続き開きます。
