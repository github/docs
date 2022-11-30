---
title: Visual Studio Code で GitHub Codespaces を使用する
shortTitle: Visual Studio Code
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_github_codespaces %} 拡張機能を接続することで、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
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
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159920'
---
## {% data variables.product.prodname_vscode %} の {% data variables.product.prodname_github_codespaces %} について

{% data variables.product.prodname_vscode %} のローカル インストールを使用して、codespace の作成、管理、作業、削除を行うことができます。 {% data reusables.codespaces.using-codespaces-in-vscode %} {% data variables.product.prodname_vscode_shortname %} での {% data variables.product.prodname_github_codespaces %} の設定について詳しくは、「[前提条件](#prerequisites)」をご覧ください。

既定では、{% data variables.product.prodname_dotcom_the_website %} で作成した新しい codespace は、ブラウザーで開きます。 {% data variables.product.prodname_vscode_shortname %} で新しい codespace を自動的に開きたい場合は、既定のエディターを {% data variables.product.prodname_vscode_shortname %} に設定できます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のエディターを設定する](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)」をご覧ください。

ブラウザーで作業したいが、既存の {% data variables.product.prodname_vscode_shortname %} 拡張機能、テーマ、ショートカットを引き続き使用する場合は、Settings Sync を有効にすることができます。詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)」をご覧ください。

## 前提条件

{% data variables.product.prodname_vscode_shortname %} の codespace で直接開発するには、{% data variables.product.prodname_github_codespaces %} 拡張機能をインストールして、{% data variables.product.product_name %} 資格情報を使用してサインインする必要があります。 {% data variables.product.prodname_github_codespaces %} 拡張機能には、{% data variables.product.prodname_vscode_shortname %} October 2020 Release 1.51 以降が必要です。

{% data variables.product.prodname_vscode_marketplace %} を使用して [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 拡張機能をインストールします。 詳細については、{% data variables.product.prodname_vscode_shortname %} ドキュメントの「[拡張機能マーケットプレース](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. **[{% data variables.product.prodname_dotcom %} にサインイン...]** をクリックします。

   ![{% data variables.product.prodname_github_codespaces %} にサインインする](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. {% data variables.product.prodname_vscode_shortname %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、 **[許可]** をクリックします。
3. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. [REMOTE EXPLORER] ドロップダウンを使用して、 **{% data variables.product.prodname_github_codespaces %}** をクリックします。

   ![{% data variables.product.prodname_github_codespaces %} ヘッダー](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. **[サインインして {% data variables.product.prodname_codespaces %} を表示]** をクリックします。

   ![サインインして {% data variables.product.prodname_github_codespaces %} を表示する](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

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

{% note %}

**注**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## {% data variables.product.prodname_vscode_shortname %} で Codespaces を削除する

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode_shortname %} の Insider ビルドへの切り替え

{% data variables.product.prodname_github_codespaces %} 内で [[{% data variables.product.prodname_vscode_shortname %} の Insiders ビルド]](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) を使うことができます。

1. {% data variables.product.prodname_github_codespaces %} ウィンドウの左下にある **[{% octicon "gear" aria-label="The settings icon" %} 設定]** を選びます。
2. 一覧から [Insiders バージョンに切り替える] を選択します。

   ![{% data variables.product.prodname_github_codespaces %} で [Insiders ビルド] をクリックする](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. 選択すると、{% data variables.product.prodname_github_codespaces %} が Insider バージョンで開いたままになります。

## 参考資料

- 「[{% data variables.product.prodname_github_codespaces %} で {% data variables.product.prodname_vscode_command_palette %} を使う](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)」
- 「[{% data variables.product.prodname_github_codespaces %} で {% data variables.product.prodname_copilot %} を使う](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)」
