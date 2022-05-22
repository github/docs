---
title: Visual Studio Code で Codespaces を使用する
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_github_codespaces %} 機能拡張を接続することにより、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Visual Studio Code
---

 
## About {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}

You can use your local install of {% data variables.product.prodname_vscode %} to create, manage, work in, and delete codespaces. To use {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}, you need to install the {% data variables.product.prodname_github_codespaces %} extension. For more information on setting up Codespaces in {% data variables.product.prodname_vscode %}, see "[Prerequisites](#prerequisites)."

By default, if you create a new codespace on {% data variables.product.prodname_dotcom_the_website %}, it will open in the browser. If you would prefer to open any new codespaces in {% data variables.product.prodname_vscode %} automatically, you can set your default editor to be {% data variables.product.prodname_vscode %}. For more information, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."

If you prefer to work in the browser, but want to continue using your existing {% data variables.product.prodname_vscode %} extensions, themes, and shortcuts, you can turn on Settings Sync. 詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)」を参照してください。

## 必要な環境

To develop in a codespace directly in {% data variables.product.prodname_vscode %}, you must install and sign into the {% data variables.product.prodname_github_codespaces %} extension with your {% data variables.product.product_name %} credentials. {% data variables.product.prodname_github_codespaces %} 機能拡張には、{% data variables.product.prodname_vscode %} October 2020 Release 1.51 以降が必要です。

{% data variables.product.prodname_vs %} Marketplace を使用して、[{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 機能拡張をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode %} ドキュメントの「[Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [**Sign in to view {% data variables.product.prodname_dotcom %}...**] をクリックします。

   ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

3. {% data variables.product.prodname_vscode %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、[**Allow**] をクリックします。
4. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [REMOTE EXPLORER] ドロップダウンを使用して、[**{% data variables.product.prodname_github_codespaces %}**] をクリックします。

   ![{% data variables.product.prodname_codespaces %} ヘッダ](/assets/images/help/codespaces/codespaces-header-vscode.png)

3. [**Sign in to view {% data variables.product.prodname_codespaces %}...**] をクリックします。

   ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

4. {% data variables.product.prodname_vscode %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、[**Allow**] をクリックします。
5. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

{% endwindows %}

## {% data variables.product.prodname_vscode %} で Codespaces を作成する

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode %} で codespace を開く

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [Codespaces] で、開発するコードスペースをクリックします。
3. [Connect to Codespace] アイコンをクリックします。

   ![{% data variables.product.prodname_vscode %} の [Connect to Codespace] アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Changing the machine type in {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.codespaces-machine-types %}

You can change the machine type of your codespace at any time.

1. In {% data variables.product.prodname_vscode %}, open the Command Palette (`shift command P` / `shift control P`).
2. Search for and select "Codespaces: Change Machine Type."

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

3. Click the codespace that you want to change.

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

4. Choose the machine type you want to use.

If the codespace is currently running, a message is displayed asking if you would like to restart and reconnect to your codespace now. Click **Yes** if you want to change the machine type used for this codespace immediately. If you click **No**, or if the codespace is not currently running, the change will take effect the next time the codespace restarts.

## {% data variables.product.prodname_vscode %} で Codespaces を削除する

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Switching to the Insiders build of {% data variables.product.prodname_vscode %}

You can use the [Insiders Build of Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) within {% data variables.product.prodname_codespaces %}.

1. In bottom left of your {% data variables.product.prodname_codespaces %} window, select **{% octicon "gear" aria-label="The settings icon" %} Settings**.
2. From the list, select "Switch to Insiders Version".

   ![Clicking on "Insiders Build" in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Once selected, {% data variables.product.prodname_codespaces %} will continue to open in Insiders Version.
