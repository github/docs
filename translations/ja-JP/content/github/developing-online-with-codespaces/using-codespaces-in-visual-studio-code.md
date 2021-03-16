---
title: Visual Studio Code で Codespaces を使用する
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_github_codespaces %} 機能拡張を接続することにより、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### 必要な環境

{% data variables.product.prodname_vscode %} の Codespaces で直接開発するには、{% data variables.product.prodname_github_codespaces %} 機能拡張にサインインする必要があります。 {% data variables.product.prodname_github_codespaces %} 機能拡張には、{% data variables.product.prodname_vscode %} October 2020 Release 1.51 以降が必要です。

1. ー

{% data variables.product.prodname_vs %} Marketplace を使用して、[{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 機能拡張をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode %} ドキュメントの「[Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [REMOTE EXPLORER] ドロップダウンを使用して、[**{% data variables.product.prodname_github_codespaces %}**] をクリックします。 ![{% data variables.product.prodname_codespaces %} ヘッダ](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. [**Sign in to view {% data variables.product.prodname_codespaces %}...**] をクリックします。 ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. {% data variables.product.prodname_vscode %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、[**Allow**] をクリックします。
5. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

### {% data variables.product.prodname_vscode %} で Codespaces を作成する

{% data variables.product.product_name %} アカウントを {% data variables.product.prodname_vs_codespaces %} 機能拡張に接続した後、{% data variables.product.product_name %} または {% data variables.product.prodname_vscode %} で作成した Codespaces で開発できます。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [Add] アイコンをクリックしてから、[**Create New Codespace**] をクリックします。 ![{% data variables.product.prodname_codespaces %} の [Create New Codespace] オプション](/assets/images/help/codespaces/create-codespace-vscode.png)
3. 入力し、開発するリポジトリの名前をクリックします。 ![新しい {% data variables.product.prodname_codespaces %} を作成するためのリポジトリを検索する](/assets/images/help/codespaces/choose-repository-vscode.png)
4. 開発するブランチをクリックします。 ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/choose-branch-vscode.png)
5. 開発するインスタンスタイプをクリックします。 ![新しい {% data variables.product.prodname_codespaces %} のインスタンスタイプ](/assets/images/help/codespaces/choose-sku-vscode.png)
### {% data variables.product.prodname_vscode %} で codespace を開く

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [Codespaces] で、開発する codespace をクリックします。
3. [Connect to Codespace] アイコンをクリックします。 ![{% data variables.product.prodname_vscode %} の [Connect to Codespace] アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### {% data variables.product.prodname_vscode %} で Codespaces を削除する

1. [Codespaces] で、削除する Codespaces を右クリックします。
2. ドロップダウンメニューで、[**Delete Codespace**] をクリックします。 ![{% data variables.product.prodname_dotcom %} で Codespaces を削除する](/assets/images/help/codespaces/delete-codespace-vscode.png)
