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

 

## 必要な環境

{% data variables.product.prodname_vscode %} の Codespaces で直接開発するには、{% data variables.product.prodname_github_codespaces %} 機能拡張にサインインする必要があります。 {% data variables.product.prodname_github_codespaces %} 機能拡張には、{% data variables.product.prodname_vscode %} October 2020 Release 1.51 以降が必要です。

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
